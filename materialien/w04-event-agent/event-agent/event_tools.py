"""Deterministische Werkzeuge für den synthetischen Event-Agenten.

Keine Buchung, kein Versand, kein Zugriff auf echte HR-/Kursdaten.
Die SQLite-Namensräume sind logische Trennung, keine Sicherheits-Sandbox.
"""
from pathlib import Path
from decimal import Decimal, ROUND_HALF_UP
from datetime import datetime
import argparse, hashlib, json, math, re, sqlite3, sys

ROOT=Path(__file__).resolve().parent
DATA=ROOT/'daten'
def load_data(): return json.loads((DATA/'eventdaten.json').read_text(encoding='utf-8'))
def money(x): return float(Decimal(str(x)).quantize(Decimal('.01'),rounding=ROUND_HALF_UP))
def minutes(x):
    if not isinstance(x,str) or not re.fullmatch(r'\d{2}:\d{2}',x): raise ValueError('Uhrzeit muss HH:MM sein')
    h,m=map(int,x.split(':'))
    if h>23 or m>59: raise ValueError('Ungültige Uhrzeit')
    return h*60+m
def lookup(items,id):
    matches=[x for x in items if x.get('id')==id]
    if len(matches)!=1: raise ValueError('Unbekannte oder mehrdeutige ID: '+str(id))
    return dict(matches[0])
def db(root=ROOT):
    folder=Path(root)/'memory';folder.mkdir(exist_ok=True,parents=True)
    con=sqlite3.connect(folder/'agent.sqlite3')
    con.executescript('CREATE TABLE IF NOT EXISTS memories(namespace TEXT,key TEXT,value TEXT,updated TEXT,PRIMARY KEY(namespace,key));CREATE TABLE IF NOT EXISTS runs(id INTEGER PRIMARY KEY,created TEXT,backend TEXT,model TEXT,payload TEXT);')
    return con
def namespace(project,scope='project'):
    if not re.fullmatch(r'P\d{2}',project): raise ValueError('Projekt-ID muss P01-artig sein')
    if scope not in ['project','worker','workshop']: raise ValueError('Unbekannter Memory-Bereich')
    return scope+(':'+project if scope=='project' else ':event-agent' if scope=='worker' else ':event-werkstatt')
def memory_get(project,key,scope='project',root=ROOT):
    with db(root) as con:
        row=con.execute('SELECT value FROM memories WHERE namespace=? AND key=?',(namespace(project,scope),key)).fetchone()
    return json.loads(row[0]) if row else None
def memory_set(project,key,value,scope='project',root=ROOT):
    if not isinstance(key,str) or len(key)>120: raise ValueError('Ungültiger Memory-Schlüssel')
    with db(root) as con: con.execute('INSERT OR REPLACE INTO memories VALUES(?,?,?,?)',(namespace(project,scope),key,json.dumps(value,ensure_ascii=False),datetime.now().isoformat()))
    return {'saved':True,'namespace':namespace(project,scope),'key':key}
def validate_event(event,data=None):
    data=data or load_data(); errors=[];missing=[]
    for k in ['id','date','start','end','persons','budget_eur','room_id','catering_id']:
        if event.get(k) is None or event.get(k)=='': missing.append(k)
    if missing: return {'valid':False,'missing':missing,'errors':[],'needs_human':True}
    try:
        datetime.strptime(event['date'],'%Y-%m-%d')
        a,b=minutes(event['start']),minutes(event['end'])
        if b<=a: errors.append('Ende muss nach Beginn am selben Tag liegen')
        if not isinstance(event['persons'],int) or isinstance(event['persons'],bool) or event['persons']<=0: errors.append('Teilnehmerzahl muss positive Ganzzahl sein')
        if not isinstance(event['budget_eur'],(int,float)) or isinstance(event['budget_eur'],bool) or not math.isfinite(event['budget_eur']) or event['budget_eur']<0: errors.append('Budget muss endliche nichtnegative Zahl sein')
        if errors: return {'valid':False,'missing':[],'errors':errors,'needs_human':True}
        room=lookup(data['rooms'],event['room_id']);cat=lookup(data['catering'],event['catering_id'])
        if event['persons']>room['capacity']: errors.append('Raumkapazität überschritten')
        if event.get('requires_accessible') and not room['accessible']: errors.append('Raum nicht barrierefrei gemäß Testdaten')
        if a<minutes(room['opens']) or b>minutes(room['closes']): errors.append('Außerhalb der Raumöffnungszeit')
        if event['persons']<cat['minimum_persons']: errors.append('Catering-Mindestmenge unterschritten')
        for booking in data['bookings']:
            if booking.get('event_id')==event['id']: continue
            if booking['room_id']==event['room_id'] and booking['date']==event['date'] and a<minutes(booking['end']) and minutes(booking['start'])<b: errors.append('Raum bereits belegt: '+booking['id'])
        room_cost=money(Decimal(b-a)/60*Decimal(str(room['hourly_eur'])))
        catering_cost=money(Decimal(event['persons'])*Decimal(str(cat['per_person_eur'])))
        total=money(Decimal(str(room_cost))+Decimal(str(catering_cost)))
        if total>event['budget_eur']: errors.append('Budget überschritten')
        return {'valid':not errors,'missing':[],'errors':errors,'room_cost_eur':room_cost,'catering_cost_eur':catering_cost,'total_eur':total,'remaining_eur':money(event['budget_eur']-total),'needs_human':True,'sources':['rooms:'+room['id'],'catering:'+cat['id'],'regeln:v1']}
    except (ValueError,TypeError,KeyError,ArithmeticError) as e:
        return {'valid':False,'missing':[],'errors':[str(e)],'needs_human':True}
def effective_event(event_id,project='P01',root=ROOT):
    event=lookup(load_data()['events'],event_id)
    correction=memory_get(project,'budget:'+event_id,root=root)
    if correction is not None:
        if not isinstance(correction,(int,float)) or isinstance(correction,bool) or not math.isfinite(correction) or correction<0: raise ValueError('Gespeicherte Budgetkorrektur ungültig')
        event['budget_eur']=correction;event['memory_applied']='budget:'+event_id
    return event
def safe_output(name):
    if not re.fullmatch(r'[A-Za-z0-9_-]+\.json',name): raise ValueError('Nur einfacher JSON-Dateiname erlaubt')
    folder=ROOT/'outputs';folder.mkdir(exist_ok=True)
    dest=folder/name
    if dest.exists(): raise ValueError('Ausgabe existiert bereits; neuen Dateinamen wählen')
    return dest
def save_proposal(proposal,name):
    if not isinstance(proposal,dict): raise ValueError('Vorschlag muss Objekt sein')
    result=validate_event(proposal)
    if not result['valid']: return {'saved':False,'validation':result}
    dest=safe_output(name);dest.write_text(json.dumps({'type':'proposal-only','proposal':proposal,'validation':result,'approved':False},ensure_ascii=False,indent=2))
    return {'saved':True,'file':'outputs/'+name,'approved':False,'validation':result}
def deny_action(action): return {'executed':False,'reason':'In dieser Lehrumgebung sind Buchung, Versand und sonstige externe Aktionen technisch nicht implementiert. Menschliche Prüfung betrifft nur Vorschläge.','action':action,'needs_human':True}
def dispatch(name,args,project='P01'):
    data=load_data()
    if name=='event_details': return effective_event(args['event_id'],project)
    if name=='list_rooms': return data['rooms']
    if name=='quote':
        event=effective_event(args['event_id'],project)
        for key in ['room_id','catering_id']:
            if args.get(key): event[key]=args[key]
        return {'event':event,'validation':validate_event(event)}
    if name=='read_document': return lookup(data['documents'],args['document_id'])
    if name=='memory_get': return {'value':memory_get(project,args['key'])}
    if name=='validate_proposal': return validate_event(args['proposal'])
    if name=='external_action': return deny_action(args.get('action','unknown'))
    raise ValueError('Nicht erlaubtes Werkzeug: '+str(name))
def main(argv=None):
    p=argparse.ArgumentParser(description=__doc__);sp=p.add_subparsers(dest='command',required=True)
    s=sp.add_parser('event');s.add_argument('event_id');s.add_argument('--project',default='P01')
    s=sp.add_parser('quote');s.add_argument('event_id');s.add_argument('--project',default='P01');s.add_argument('--room');s.add_argument('--catering')
    s=sp.add_parser('check');s.add_argument('proposal')
    s=sp.add_parser('memory-get');s.add_argument('key');s.add_argument('--project',default='P01')
    s=sp.add_parser('memory-set');s.add_argument('key');s.add_argument('value',help='JSON-Wert, z.B. 500');s.add_argument('--project',default='P01')
    s=sp.add_parser('save');s.add_argument('proposal');s.add_argument('--name',required=True)
    s=sp.add_parser('external');s.add_argument('action')
    a=p.parse_args(argv)
    if a.command=='event': result=effective_event(a.event_id,a.project)
    elif a.command=='quote': result=dispatch('quote',{'event_id':a.event_id,'room_id':a.room,'catering_id':a.catering},a.project)
    elif a.command=='check': result=validate_event(json.loads(Path(a.proposal).read_text()).get('proposal',json.loads(Path(a.proposal).read_text())))
    elif a.command=='memory-get': result=memory_get(a.project,a.key)
    elif a.command=='memory-set': result=memory_set(a.project,a.key,json.loads(a.value))
    elif a.command=='save': result=save_proposal(json.loads(Path(a.proposal).read_text()),a.name)
    else: result=deny_action(a.action)
    print(json.dumps(result,ensure_ascii=False,indent=2))
if __name__=='__main__':
    try: main()
    except (ValueError,OSError,json.JSONDecodeError) as e: print(json.dumps({'error':str(e)},ensure_ascii=False));sys.exit(2)

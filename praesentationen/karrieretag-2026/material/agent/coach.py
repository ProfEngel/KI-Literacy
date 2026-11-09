#!/usr/bin/env python3
"""Deterministische Werkzeuge für einen Harness-Agenten, kein Modellrunner."""
import argparse, json, sqlite3
from pathlib import Path
DB=Path(__file__).with_name("coach.sqlite")
def connect():
    db=sqlite3.connect(DB)
    db.executescript("CREATE TABLE IF NOT EXISTS memory(id TEXT PRIMARY KEY,content TEXT NOT NULL,source TEXT NOT NULL); CREATE TABLE IF NOT EXISTS progress(card TEXT PRIMARY KEY,status TEXT NOT NULL,reason TEXT NOT NULL);")
    records=[("software","Software 1.0 verarbeitet Eingaben mit programmierten Regeln. KI kann den Code gebaut haben, ohne später mitzulaufen.","Vortrag: Drei Arbeitsweisen"),
      ("chat","Im betrachteten Chat-Szenario formuliert das Modell eine Antwort; die Person setzt sie selbst um. Moderne Chatprodukte können auch Tools nutzen.","Vortrag: Drei Arbeitsweisen"),
      ("agent","Ein Agent verfolgt ein Ziel, wählt erlaubte Werkzeuge, nutzt freigegebenes Wissen und prüft Rückmeldungen. Menschen bestimmen Rechte und Freigaben.","Vortrag: Drei Arbeitsweisen")]
    db.executemany("INSERT OR IGNORE INTO memory VALUES(?,?,?)",records);db.commit();return db
def run(args):
    db=connect()
    if args.command=="memory":
        query=args.query[:200];rows=db.execute("SELECT id,content,source FROM memory WHERE content LIKE ? OR id LIKE ?",("%"+query+"%","%"+query+"%")).fetchall()
        return {"tool":"memory","results":[dict(zip(("id","content","source"),r)) for r in rows]}
    if args.command=="status":return {"tool":"status","progress":[dict(zip(("card","status","reason"),r)) for r in db.execute("SELECT card,status,reason FROM progress ORDER BY card")]}
    if args.command=="record":
        if args.card not in ("software","chat","agent"):raise ValueError("Unbekannte Karte.")
        if not args.verified:raise ValueError("Zuerst fachlich prüfen; --verified erforderlich.")
        if not args.reason.strip() or len(args.reason)>500:raise ValueError("Begründung fehlt oder zu lang.")
        before=db.total_changes;db.execute("INSERT OR IGNORE INTO progress VALUES(?,?,?)",(args.card,"verified",args.reason));db.commit()
        return {"tool":"record","card":args.card,"changed":db.total_changes>before,"status":"verified"}
    raise ValueError("Unbekanntes Werkzeug.")
if __name__=="__main__":
    p=argparse.ArgumentParser(description=__doc__);s=p.add_subparsers(dest="command",required=True)
    m=s.add_parser("memory");m.add_argument("query")
    s.add_parser("status");r=s.add_parser("record");r.add_argument("card");r.add_argument("--reason",required=True);r.add_argument("--verified",action="store_true")
    try:print(json.dumps(run(p.parse_args()),ensure_ascii=False))
    except (ValueError,sqlite3.Error) as e:print(json.dumps({"error":str(e)},ensure_ascii=False));raise SystemExit(2)


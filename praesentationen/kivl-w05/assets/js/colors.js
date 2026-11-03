/* Deterministic HSL lesson. Generated room images are fixed examples, not live renders. */
(()=>{
 const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
 const wheel=$('#colorWheel');if(!wheel)return;const ctx=wheel.getContext('2d');let scheme='analog';
 const configs={analog:{title:'Analog: nebeneinander.',explain:'Nachbarn auf dem Kreis: hier −30°, Grundfarbe und +30°. Ähnliche Farbtöne verbinden; Helligkeit sichert die Lesbarkeit.',offsets:[-30,0,30],name:'Analog',alt:'Leseecke mit benachbarten blaugrünen Farbtönen'},complement:{title:'Komplementär: gegenüber.',explain:'Zwei Farbtöne mit 180° Abstand. Eine Farbe führt, die andere setzt einen Akzent. Das allein garantiert keinen lesbaren Text.',offsets:[0,180],name:'Komplementär',alt:'Leseecke mit großflächigem Petrol und kleinen Orange-Korall-Akzenten'},triad:{title:'Triadisch: drei im Dreieck.',explain:'Drei Farbtöne mit jeweils 120° Abstand. Eine Hauptfarbe, zwei sparsame Akzente – nicht alles gleich laut.',offsets:[0,120,240],name:'Triadisch',alt:'Leseecke mit Petrolsessel, violettem Lampenschirm und gelber Tasse'}};
 const wrap=h=>(h+360)%360;
 function rgb(h,s,l){s/=100;l/=100;const a=s*Math.min(l,1-l);return [0,8,4].map(n=>{const k=(n+h/30)%12;return Math.round((l-a*Math.max(-1,Math.min(k-3,9-k,1)))*255)})}
 const hex=(h,s=60,l=38)=>'#'+rgb(h,s,l).map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
 function render(){const h=Number($('#colorHue').value),c=configs[scheme],hs=c.offsets.map(n=>wrap(h+n));ctx.clearRect(0,0,700,700);
  for(let i=0;i<360;i++){ctx.beginPath();ctx.arc(350,350,270,(i-90)*Math.PI/180,(i+1.5-90)*Math.PI/180);ctx.arc(350,350,175,(i+1.5-90)*Math.PI/180,(i-90)*Math.PI/180,true);ctx.closePath();ctx.fillStyle=`hsl(${i} 70% 48%)`;ctx.fill()}
  const pts=hs.map(hue=>[350+225*Math.sin(hue*Math.PI/180),350-225*Math.cos(hue*Math.PI/180)]);ctx.beginPath();pts.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));if(pts.length===3)ctx.closePath();ctx.strokeStyle='#182C33';ctx.lineWidth=7;ctx.stroke();
  pts.forEach(([x,y],i)=>{ctx.beginPath();ctx.arc(x,y,23,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle='#182C33';ctx.lineWidth=4;ctx.stroke();ctx.fillStyle='#182C33';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 26px system-ui';ctx.fillText(String(i+1),x,y)});
  $('#schemeTitle').textContent=c.title;$('#schemeExplain').textContent=c.explain;$('#colorHueValue').textContent=h+'°';
  $('#colorSwatches').replaceChildren(...hs.map((v,i)=>{const el=document.createElement('div');el.className='color-swatch';el.innerHTML=`<span style="background:${hex(v)}"></span><b>${i+1} · ${hex(v)}</b><small>${v}° · S60 · L38</small>`;return el}));
  wheel.setAttribute('aria-label',`${c.name}, HSL-Farbtöne ${hs.join(', ')} Grad. ${c.explain}`);
  $('#colorScene').src='assets/media/COL-'+scheme+'.webp';$('#colorScene').alt=c.alt;$('#colorSceneCaption').textContent=c.name+' · festes illustratives KI-Beispiel, kein exakter HEX-Farbnachweis.';
 }
 all('[data-scheme]').forEach(b=>b.onclick=()=>{scheme=b.dataset.scheme;all('[data-scheme]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));render()});$('#colorHue').oninput=render;render();
 const worlds={calm:{bg:'#F3F7F3',ink:'#182C33',primary:'#24666A',accent:'#DCEFE1',note:'Petrol als Hauptfarbe, Salbei als ruhige Fläche. Ein Akzent lenkt zur Aktion.'},warm:{bg:'#FCF4E9',ink:'#36291F',primary:'#8D3B25',accent:'#F4DDBD',note:'Warme Creme- und Terrakottatöne: einladende Inszenierung. Gleiche Aktion, gleiche Funktionen.'},bold:{bg:'#F4F0FA',ink:'#2B203A',primary:'#6538A1',accent:'#F3DE9C',note:'Violett und gedämpftes Gold: markanter Auftritt. Den Akzent sparsam lassen, statt alles einzufärben.'}};
 function lum(s){const a=s.match(/\w\w/g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return a[0]*.2126+a[1]*.7152+a[2]*.0722}
 function contrast(a,b){const x=lum(a.slice(1)),y=lum(b.slice(1));return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)}
 function world(name){const c=worlds[name],app=$('#colorApp');for(const key of ['bg','ink','primary','accent'])app.style.setProperty('--c-'+key,c[key]);$('#colorWorldNote').textContent=c.note;all('[data-world]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.world===name)));const body=contrast(c.ink,c.bg),button=contrast('#FFFFFF',c.primary);$('#colorContrast').textContent=`Fließtext ${body.toFixed(1).replace('.',',')}:1 · Button ${button.toFixed(1).replace('.',',')}:1 (Ziel ≥4,5:1).`;app.dataset.bodyContrast=body;app.dataset.buttonContrast=button;}
 all('[data-world]').forEach(b=>b.onclick=()=>world(b.dataset.world));$('#colorAppButton').onclick=()=>{$('#colorAppStatus').textContent='✓ Termin ausgewählt · nur lokale Demonstration';};world('calm');
})();

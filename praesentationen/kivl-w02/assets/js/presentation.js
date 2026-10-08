
(()=>{'use strict';
const slides=[...document.querySelectorAll('section.slide')],$=id=>document.getElementById(id);
document.documentElement.classList.add('js');
let index=0,seconds=900,running=false,last=0;
const safe={get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
$('jump').innerHTML=slides.map((s,i)=>'<option value="'+i+'">'+(i+1)+'. '+s.dataset.title+'</option>').join('');
function show(i){index=Math.max(0,Math.min(slides.length-1,i));slides.forEach((s,j)=>{s.classList.toggle('active',j===index);s.setAttribute('aria-hidden',j===index?'false':'true');if(j!==index)s.querySelectorAll('audio,video').forEach(m=>m.pause())});$('jump').value=index;$('counter').textContent=(index+1)+' / '+slides.length;$('prev').disabled=index===0;$('next').disabled=index===slides.length-1;$('progress').style.width=((index+1)/slides.length*100)+'%';$('notesText').textContent=slides[index].dataset.notes;history.replaceState(null,'','#'+slides[index].id);window.parent.postMessage({type:'presentation:slidechange',index,id:slides[index].id,title:slides[index].dataset.title},'*')}
$('prev').onclick=()=>show(index-1);$('next').onclick=()=>show(index+1);$('jump').onchange=e=>show(+e.target.value);
document.addEventListener('keydown',e=>{if(e.target.closest('input,select,textarea,button,summary,dialog')||$('notes').open)return;if(['ArrowRight','PageDown',' '].includes(e.key)){e.preventDefault();show(index+1)}if(['ArrowLeft','PageUp'].includes(e.key)){e.preventDefault();show(index-1)}if(e.key==='Home'){e.preventDefault();show(0)}if(e.key==='End'){e.preventDefault();show(slides.length-1)}if(e.key.toLowerCase()==='n')$('notes').showModal()});
window.addEventListener('message',e=>{if(e.source!==window.parent)return;if(e.data?.type==='review:goto')show(slides.findIndex(s=>s.id===e.data.id)>=0?slides.findIndex(s=>s.id===e.data.id):Number(e.data.index)||0);if(e.data?.type==='review:requestSlides')window.parent.postMessage({type:'presentation:slides',slides:slides.map((s,i)=>({id:s.id,index:i,title:s.dataset.title}))},'*')});
const themes=['auto','light','dark'];let theme=safe.get('w02-theme')||'auto';
function setTheme(){if(theme==='auto')delete document.documentElement.dataset.theme;else document.documentElement.dataset.theme=theme;$('theme').textContent={auto:'◐ Auto',light:'◒ Hell',dark:'◑ Dunkel'}[theme];safe.set('w02-theme',theme)}
$('theme').onclick=()=>{theme=themes[(themes.indexOf(theme)+1)%3];setTheme()};setTheme();
$('notesBtn').onclick=()=>$('notes').showModal();$('closeNotes').onclick=()=>$('notes').close();
function timerText(){const t=String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');$('timerBtn').textContent=t+(running?' pausieren':seconds===0?' beendet':' starten')}
$('timerBtn').onclick=()=>{if(seconds===0)seconds=900;running=!running;last=Date.now();timerText()};$('resetTimer').onclick=()=>{running=false;seconds=900;timerText()};
setInterval(()=>{if(!running)return;const elapsed=Math.floor((Date.now()-last)/1000);if(elapsed>0){seconds=Math.max(0,seconds-elapsed);last+=elapsed*1000;if(!seconds)running=false;timerText()}},250);
let printOpen=[];function beforePrint(){printOpen=[...document.querySelectorAll('details')].map(d=>[d,d.open]);printOpen.forEach(([d])=>d.open=true)}function afterPrint(){printOpen.forEach(([d,o])=>d.open=o)}
window.addEventListener('beforeprint',beforePrint);window.addEventListener('afterprint',afterPrint);$('printBtn').onclick=()=>window.print();
window.addEventListener('hashchange',()=>{const i=slides.findIndex(s=>s.id===location.hash.slice(1));if(i>=0&&i!==index)show(i)});
const start=slides.findIndex(s=>s.id===location.hash.slice(1));show(start>=0?start:0);
})();


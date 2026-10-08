(()=>{'use strict';
const clocks=[...document.querySelectorAll('.exercise-clock')].map(el=>({el,remaining:Number(el.dataset.minutes)*60,initial:Number(el.dataset.minutes)*60,running:false,deadline:0}));
function paint(c){c.el.querySelector('output').textContent=String(Math.floor(c.remaining/60)).padStart(2,'0')+':'+String(c.remaining%60).padStart(2,'0');c.el.querySelector('.clock-start').textContent=c.running?'Pause':c.remaining===0?'Neu starten':'Start';c.el.classList.toggle('finished',c.remaining===0)}
clocks.forEach(c=>{c.el.querySelector('.clock-start').onclick=()=>{if(c.running){c.remaining=Math.max(0,Math.ceil((c.deadline-Date.now())/1000));c.running=false}else{if(!c.remaining)c.remaining=c.initial;c.deadline=Date.now()+c.remaining*1000;c.running=true}paint(c)};c.el.querySelector('.clock-reset').onclick=()=>{c.running=false;c.remaining=c.initial;paint(c)};paint(c)});
setInterval(()=>clocks.forEach(c=>{if(!c.running)return;c.remaining=Math.max(0,Math.ceil((c.deadline-Date.now())/1000));if(!c.el.closest('.slide').classList.contains('active')||c.remaining===0)c.running=false;paint(c)}),200);
})();

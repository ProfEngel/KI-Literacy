(() => {
  'use strict';
  const probabilities = t => { const a=[2,1,0].map(x=>Math.exp((x-2)/t));return a.map(x=>x/a.reduce((s,v)=>s+v,0)); };
  window.W03Lab={probabilities};
  const counts=[0,0,0], letters=['A','B','C'];
  const result=document.querySelector('#draw-result');
  function reset(){counts.fill(0);render();result.textContent='Neuer Versuch: noch keine Ziehung.';}
  function render(){letters.forEach((x,i)=>document.querySelector('[data-count="'+x+'"]').textContent=counts[i]);}
  document.querySelectorAll('.distribution').forEach(widget=>{
    const select=widget.querySelector('select');
    const update=()=>{probabilities(Number(select.value)).forEach((v,i)=>{widget.querySelector('[data-prob="'+i+'"]').style.width=(100*v)+'%';widget.querySelector('[data-pct="'+i+'"]').textContent=(100*v).toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2})+' %';});};
    select.addEventListener('change',()=>{update();if(widget.closest('#w03-14'))reset();});update();
  });
  function draw(n){const p=probabilities(Number(document.querySelector('#w03-14 .temperature').value));let last=0;for(let k=0;k<n;k++){const r=Math.random();last=r<p[0]?0:r<p[0]+p[1]?1:2;counts[last]++;}render();result.textContent=(n===1?'Gezogen: '+letters[last]:n+' neue Ziehungen')+' · Insgesamt: '+counts.reduce((a,b)=>a+b,0);}
  document.querySelector('#draw-one').addEventListener('click',()=>draw(1));
  document.querySelector('#draw-many').addEventListener('click',()=>draw(100));
  document.querySelector('#reset-sample').addEventListener('click',reset);
  const sequence=['Die Katze liegt auf dem …','Die Katze liegt auf dem Sofa …','Die Katze liegt auf dem Sofa und …','Die Katze liegt auf dem Sofa und schläft.'];
  let step=0;const next=document.querySelector('#step-token'),out=document.querySelector('#sequence');
  next.addEventListener('click',()=>{step=Math.min(step+1,sequence.length-1);out.textContent=sequence[step];next.disabled=step===sequence.length-1;});
  document.querySelector('#reset-token').addEventListener('click',()=>{step=0;out.textContent=sequence[0];next.disabled=false;});
})();

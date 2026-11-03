/* Fictitious mobile UI design demo. No backend, analytics or actual café data. */
(()=>{
 const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
 const days=['Mo','Di','Mi','Do','Fr','Sa','So'],current=[310,420,390,510,640,720,610],previous=[300,350,400,450,500,520,480];
 const sum=a=>a.reduce((s,n)=>s+n,0);if(sum(current)!==3600||sum(previous)!==3000)throw Error('Invalid demo sums');
 const fmt=n=>n.toLocaleString('de-DE');
 days.forEach((day,i)=>{
  const single=document.createElement('div');single.className='day-column';single.innerHTML=`<div class="bar-slot"><span class="bar current" style="--bar:${current[i]/8}%" title="${day}: ${current[i]} Euro"></span></div><span>${day}</span>`;$('#singleBars').append(single);
  const pair=document.createElement('div');pair.className='day-column';pair.innerHTML=`<div class="bar-slot"><span class="bar current" style="--bar:${current[i]/8}%" title="Woche A ${day}: ${current[i]} Euro"></span><span class="bar previous" style="--bar:${previous[i]/8}%" title="Vorwoche ${day}: ${previous[i]} Euro"></span></div><span>${day}</span>`;$('#pairedBars').append(pair);
  const row=document.createElement('tr');row.innerHTML=`<th scope="row">${day}</th><td>${fmt(current[i])} €</td><td>${fmt(previous[i])} €</td>`;$('#dashboardRows').append(row);
 });
 const views=['overview','compare','action'];function select(view){
  views.forEach(v=>{$('#phone-'+v).hidden=v!==view;$('#copy-'+v).hidden=v!==view});
  $$('[data-phone-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.phoneView===view)));
 }
 $$('[data-phone-view]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.phoneView)));
 $$('[data-phone-action]').forEach(b=>b.addEventListener('click',()=>{
  const action=b.dataset.phoneAction;
  if(action==='report'){$('#phoneReport').hidden=!$('#phoneReport').hidden;b.textContent=$('#phoneReport').hidden?'Wochenbericht ansehen':'Bericht schließen'}
  if(action==='data')$('#dashboardData').showModal();
  if(action==='note'){$('#phoneNote').hidden=false;$('#goalNote').focus()}
  if(action==='cancel-note'){$('#phoneNote').hidden=true;$('[data-phone-action=note]').focus()}
 }));
 const dataDialog=$('#dashboardData');dataDialog.addEventListener('close',()=>{if(!$('#phone-compare').hidden)$('[data-phone-action=data]').focus()});
 $('#enlargePair').addEventListener('click',()=>{
  for(const side of ['Original','Result']){const small=$('#edit'+side),large=$('#large'+side);large.src=small.src;large.alt=small.alt}
  $('#largeCaption').textContent=$('#resultCaption').textContent;$('#largePair').showModal();
 });
 $('#largePair').addEventListener('close',()=>$('#enlargePair').focus());
 select('overview');
})();

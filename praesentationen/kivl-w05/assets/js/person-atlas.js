(()=>{
 const $=s=>document.querySelector(s),box=$('#peopleAtlas');if(!box)return;
 const root=box.dataset.root||'',plates=window.PERSON_ATLAS;let selected;
 const person=$('#atlasPerson'),topic=$('#atlasTopic');
 const details=document.createElement('details');details.className='atlas-prompt-details';details.innerHTML='<summary>Prompt anzeigen / manuell kopieren</summary><label>Vollständiger Tafel-Prompt<textarea id="atlasPromptText" rows="6"></textarea></label><button id="atlasPromptDownload">Prompt als TXT</button>';
 box.querySelector('.atlas-details').before(details);
 const status=document.createElement('span');status.id='atlasCopyStatus';status.className='atlas-copy-status';status.setAttribute('role','status');box.querySelector('.atlas-controls').append(status);
 function render(){selected=plates.find(x=>x.person===person.value&&x.topic===topic.value);if(!selected)return;const file=root+'assets/media/'+selected.id+'.webp';$('#atlasImage').src=file;$('#atlasImage').alt=selected.label+'. Raster oben von links1–4: '+selected.labels.slice(0,4).join(', ')+'. Unten von links5–8: '+selected.labels.slice(4).join(', ')+'.';$('#atlasFull').href=file;$('#atlasDownload').href=file;$('#atlasCaption').textContent=selected.label+' · 16:9 · oben1–4, unten5–8 · Referenz '+selected.base;$('#atlasLegend').replaceChildren(...selected.labels.map(s=>{const li=document.createElement('li');li.textContent=s;return li}));$('#atlasReference').src=root+'assets/media/'+selected.base+'.webp';$('#atlasReference').alt='Unveränderte fiktive Referenz '+selected.base;$('#atlasReferenceDownload').href=root+'assets/media/'+selected.base+'.webp';$('#atlasPromptText').value=selected.prompt;$('#atlasCopyStatus').textContent='';$('#atlasNote').textContent=selected.note+(selected.topic==='expression'?' Inszenierte Ausdrucksvorgaben, keine Beweise innerer Gefühle und kein vollständiger Emotionskatalog.':'')}
 person.onchange=render;topic.onchange=render;
 $('#atlasPrompt').textContent='Prompt kopieren';$('#atlasPrompt').onclick=async()=>{try{await navigator.clipboard.writeText($('#atlasPromptText').value);$('#atlasCopyStatus').textContent='Passender Tafel-Prompt kopiert.'}catch{details.open=true;$('#atlasPromptText').focus();$('#atlasPromptText').select();$('#atlasCopyStatus').textContent='Text markiert: manuell kopieren oder als TXT laden.'}};
 $('#atlasPromptDownload').onclick=()=>{const url=URL.createObjectURL(new Blob([$('#atlasPromptText').value],{type:'text/plain;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=selected.id+'-Prompt.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
 render();
 const large=$('#largePair');
 if(large){
  const promptDetails=document.createElement('details');promptDetails.className='atlas-prompt-details';promptDetails.innerHTML='<summary>Passenden Prompt anzeigen / manuell kopieren</summary><label>Prompt der ausgewählten Variante<textarea id="largePromptText" rows="6"></textarea></label>';
  large.append(promptDetails);
  function syncLarge(){
   $('#largeBase').value=$('#editBase').value;$('#largeVariant').innerHTML=$('#editVariant').innerHTML;$('#largeVariant').value=$('#editVariant').value;
   const item=window.IMAGE_LIBRARY.find(j=>j.id===$('#editVariant').value);$('#largePromptText').value=item.prompt;$('#largeCopyStatus').textContent='';
   for(const side of ['Original','Result']){const small=$('#edit'+side),big=$('#large'+side);big.src=small.src;big.alt=small.alt}
   $('#largeCaption').textContent=$('#resultCaption').textContent;
  }
  $('#enlargePair').addEventListener('click',syncLarge);
  $('#largeBase').onchange=()=>{$('#editBase').value=$('#largeBase').value;$('#editBase').dispatchEvent(new Event('change'));syncLarge()};
  $('#largeVariant').onchange=()=>{$('#editVariant').value=$('#largeVariant').value;$('#editVariant').dispatchEvent(new Event('change'));syncLarge()};
  $('#largeCopy').onclick=async()=>{try{await navigator.clipboard.writeText($('#largePromptText').value);$('#largeCopyStatus').textContent='Passender Prompt kopiert.'}catch{promptDetails.open=true;$('#largePromptText').focus();$('#largePromptText').select();$('#largeCopyStatus').textContent='Text markiert: manuell kopieren.'}};
 }
})();

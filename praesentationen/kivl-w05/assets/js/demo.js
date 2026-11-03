/* Fictitious classroom mockup; no storage, API, network or real registration. */
window.initDemoForms=function(root=document){
 root.querySelectorAll('form[data-demo]').forEach(form=>{
  const status=form.querySelector('.demo-status');
  function validate(){
   const name=form.elements.name, email=form.elements.email, session=form.elements.session;
   const errors=[];
   for(const el of [name,email,session])el.removeAttribute('aria-invalid');
   if(!name.value.trim()){errors.push(['Bitte einen fiktiven Namen eintragen.',name]);}
   if(!email.value.trim()||!email.validity.valid){errors.push(['Bitte eine gültige Test-E-Mail eintragen, z. B. alex@example.org.',email]);}
   if(!session.value){errors.push(['Bitte einen Termin auswählen.',session]);}
   if(errors.length){status.classList.add('error');status.textContent=errors.map(x=>x[0]).join(' ');errors.forEach(x=>x[1].setAttribute('aria-invalid','true'));errors[0][1].focus();return false;}
   status.classList.remove('error');return true;
  }
  form.addEventListener('submit',e=>{e.preventDefault();if(validate())status.textContent='Fiktiver Platz vorgemerkt: '+form.elements.session.value+'. Kein Versand, keine echte Buchung.';});
  form.addEventListener('reset',()=>{status.classList.remove('error');status.textContent='Zurückgesetzt. Keine Übertragung. Bitte nur Testdaten eingeben.';form.querySelectorAll('[aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));});
  form.querySelector('[data-export-demo]').addEventListener('click',()=>{if(validate())status.textContent='Deine Testangaben: '+form.elements.name.value+' · '+form.elements.email.value+' · '+form.elements.session.value+' · Erinnerung: '+(form.elements.reminder.checked?'ja':'nein')+' · Unterstützung: '+(form.elements.needs.value||'keine Angabe')+'. Nur lokal angezeigt.';});
 });
};
window.initDemoForms();

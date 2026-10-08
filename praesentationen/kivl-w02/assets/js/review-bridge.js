window.addEventListener('message',event=>{if(event.source===window.parent&&event.data?.type==='review:print')window.print()});

document.getElementById('printDeck').addEventListener('click',event=>{event.stopImmediatePropagation();document.getElementById('deck').contentWindow.postMessage({type:'review:print'},'*')},true);

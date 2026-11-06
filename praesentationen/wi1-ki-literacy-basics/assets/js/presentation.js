(() => {
  const slides = [...document.querySelectorAll('.slide')];
  let current = 0;

  // Show a specific slide
  const show = i => {
    current = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('active', n === current));
    
    const activeSlide = slides[current];
    
    // Update navigation HUD
    const counter = document.querySelector('#counter');
    if (counter) {
      counter.textContent = `${current + 1}/${slides.length}`;
    }
    
    const progress = document.querySelector('#progress');
    if (progress) {
      progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    }

    // Inform review shell if loaded inside an iframe
    parent.postMessage({
      type: 'presentation:slidechange',
      index: current,
      id: activeSlide.id,
      title: activeSlide.dataset.title || activeSlide.id
    }, '*');
  };

  // Click handlers for navigation HUD
  const nextBtn = document.querySelector('#next');
  if (nextBtn) {
    nextBtn.onclick = () => show(current + 1);
  }

  const prevBtn = document.querySelector('#prev');
  if (prevBtn) {
    prevBtn.onclick = () => show(current - 1);
  }

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (['ArrowRight', ' ', 'PageDown'].includes(e.key)) {
      e.preventDefault();
      show(current + 1);
    }
    if (['ArrowLeft', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      show(current - 1);
    }
    if (e.key === 'Home') {
      show(0);
    }
    if (e.key === 'End') {
      show(slides.length - 1);
    }
  });

  // Listen for iframe communication messages (review commands)
  window.addEventListener('message', e => {
    if (e.data?.type === 'review:goto') {
      show(e.data.index);
    }
    if (e.data?.type === 'review:crop') {
      const image = [...document.querySelectorAll('[data-image-id]')].find(x => x.dataset.imageId === e.data.imageId);
      if (image) {
        image.style.setProperty('--crop-x', `${e.data.x}%`);
        image.style.setProperty('--crop-y', `${e.data.y}%`);
        image.style.setProperty('--crop-scale', e.data.scale);
      }
    }
  });

  // Setup Choice Reveals (Option-Buttons with answers)
  document.querySelectorAll('[data-answer]').forEach(button => {
    button.addEventListener('click', () => {
      const targetSelector = button.dataset.target;
      const targetElem = document.querySelector(targetSelector);
      if (targetElem) {
        // Toggle selected styling within choice row
        const parentRow = button.closest('.choice-row') || button.closest('.action-row');
        if (parentRow) {
          parentRow.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));
        }
        button.classList.add('selected');

        // Show answer text
        targetElem.textContent = button.dataset.answer;
        targetElem.classList.add('visible');
      }
    });
  });

  // Slider interactivity for the Context Window slide
  const contextSlider = document.querySelector('#context-slider');
  if (contextSlider) {
    contextSlider.addEventListener('input', () => {
      const val = parseInt(contextSlider.value);
      const valText = document.querySelector('#context-slider-val');
      const textBlock = document.querySelector('#context-demo-text');
      
      if (valText) {
        const pages = Math.round((val * 1000) / 350);
        let extra = ` (~${pages} DIN A4-Seiten`;
        if (val >= 32) {
          const hpBooks = (val / 100).toFixed(1);
          extra += `, ca. ${hpBooks} Harry Potter Bücher`;
        }
        extra += `)`;
        valText.textContent = val + 'k Token' + extra;
      }
      
      if (textBlock) {
        if (val < 10) {
          textBlock.innerHTML = 'Fokus: <strong style="color:var(--green)">Sehr selektiv</strong>. Nur das direkte Ende des Textes wird scharf verarbeitet. Details am Anfang gehen verloren.';
        } else if (val < 60) {
          textBlock.innerHTML = 'Fokus: <strong style="color:var(--green)">Mittelbereich</strong>. Standardkontext. Funktioniert gut für kurze Aufsätze, übersieht aber manchmal Details in der Mitte.';
        } else {
          textBlock.innerHTML = 'Fokus: <strong style="color:var(--red-ink)">Lost in the Middle</strong>. Riesiger Kontext, aber die Aufmerksamkeit sinkt in der Mitte auf unter 20% ab. Wichtige Fakten werden übersehen!';
        }
      }
    });
  }

  // Theme switcher logic
  const themeKey = 'ki-literacy-basics-theme';
  const themeBtn = document.querySelector('#theme');
  
  const getThemeLabel = theme => {
    if (theme === 'dark') return '◑ Dark';
    if (theme === 'light') return '◒ Light';
    return '◐ Auto';
  };

  const applyTheme = theme => {
    if (theme === 'system') {
      delete document.documentElement.dataset.theme;
    } else {
      document.documentElement.dataset.theme = theme;
    }
    if (themeBtn) {
      themeBtn.textContent = getThemeLabel(theme);
    }
  };

  // Load saved theme or fallback to system
  const savedTheme = localStorage.getItem(themeKey) || 'system';
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.onclick = () => {
      const currentTheme = document.documentElement.dataset.theme || 'system';
      let nextTheme = 'system';
      
      if (currentTheme === 'system') {
        nextTheme = 'dark';
      } else if (currentTheme === 'dark') {
        nextTheme = 'light';
      } else {
        nextTheme = 'system';
      }

      if (nextTheme === 'system') {
        localStorage.removeItem(themeKey);
      } else {
        localStorage.setItem(themeKey, nextTheme);
      }
      applyTheme(nextTheme);
    };
  }

  // Start presentation with slide 0
  show(0);
})();

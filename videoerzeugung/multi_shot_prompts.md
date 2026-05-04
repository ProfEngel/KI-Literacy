# Multi-Shot Prompting: Der LLM-gestützte Workflow

Um konsistente und komplexe Videosequenzen zu erstellen, nutzen wir ein Large Language Model (LLM) als "KI-Director". Dieser Workflow stellt sicher, dass wir nicht nur zufällige Clips erzeugen, sondern eine zusammenhängende Geschichte erzählen.

---

## 🎬 Der Ultimative Director-Prompt (Master Template)

Kopiere diesen Prompt in dein bevorzugtes LLM (z.B. Claude 3.5/4, GPT-4o), um es als professionellen Regisseur zu konfigurieren. Ersetze die Platzhalter in Klammern durch deine Vision.

```markdown
Write me a multi-shot prompt that describes the below scene using the uploaded image as a key visual reference… [INSERT CHARACTER, ACTION, LOCATION, TIME OF DAY] 

Structure it as a sequence of shots totalling exactly 15 seconds, where each shot is a minimum of 2 seconds and a maximum of 5 seconds. Choose the shot count freely based on what best serves the action — anywhere from 3 shots (longer, more contemplative beats) up to 7 shots (fast, punchy cutting) — and vary this choice each time the prompt is run so results feel fresh. Chain shots with "Cut to." between them. 

For each shot specify: 
1. shot size (wide/medium/close-up/macro)
2. lens (e.g. 24mm, 35mm, 50mm, 85mm)
3. camera angle (low/high/eye-level/over-the-shoulder/Dutch)
4. one clear camera movement verb (push in, pull out, track, orbit, pan, tilt, handheld, static). 

Vary all four across the sequence and pick the angle that best sells each beat. Output one flowing paragraph, no line breaks, no lists, no markdown, 1000 characters maximum. 

End the prompt with: "Photo real, natural framing. Audio: diegetic sound only — natural ambience, environmental foley, and subject-driven sound.”
```

---

## 📂 Thematische Beispiele & Vorlagen

Hier findest du spezialisierte Szenarien für unterschiedliche Genres. Nutze diese als Inspiration für deinen eigenen Director-Workflow.

### 📱 1. Werbung & Social Media (Instagram Reels / TikTok)
**Fokus:** Schnelle Schnitte, hohe Energie, Produkt-Zentrierung.

*   **Szenario:** Ein stylischer Sneaker-Reveal in einer urbanen Umgebung.
*   **Prompt-Idee:** `Character: High-end sneaker. Action: Splashing through a puddle, glowing LEDs activate. Location: Rainy neon Tokyo street. Time: Midnight.`
*   **Ergebnis-Stil:** 7 kurze Shots (2 Sek.), extreme Close-ups auf die Textur des Schuhs, gefolgt von einer dynamischen Verfolgungskamera (Tracking Shot) beim Laufen.

### 🐉 2. Fantasy-Blockbuster (Epic Scale)
**Fokus:** Immense Weite, magische Effekte, emotionale Intensität.

*   **Szenario:** Eine Magierin beschwört einen Feuersturm auf einer Bergspitze.
*   **Prompt-Idee:** `Character: Ancient Sorceress. Action: Raising staff, eyes glowing orange. Location: Snowy mountain peak at sunset. Time: Golden Hour.`
*   **Ergebnis-Stil:** 3 lange, meditative Shots (5 Sek.). Start mit einem weiten Luftbild (Drone Shot), Wechsel zu einem Dutch Angle (schräge Kamera) für die Instabilität der Magie, Abschluss mit einem extremen Close-up auf das glühende Auge.

### 🎥 3. Dokumentarfilm (Documentary Realism)
**Fokus:** Natürlichkeit, Handkamera-Look, authentisches Licht.

*   **Szenario:** Ein Handwerker arbeitet in einer staubigen Holzwerkstatt.
*   **Prompt-Idee:** `Character: Elderly carpenter. Action: Sanding a piece of oak, sawdust flying. Location: Rustic workshop. Time: Early morning light through windows.`
*   **Ergebnis-Stil:** 4 Shots mit Fokus auf Details. Handheld-Kamera für Unmittelbarkeit. Wechsel zwischen Over-the-Shoulder (Blick auf die Arbeit) und Macro-Aufnahmen der Holzmaserung.

### 🧬 4. Sci-Fi & Cyberpunk (The Scientist)
**Fokus:** Technologische Ästhetik, kühles Licht, digitale Texturen.

*   **Szenario:** Ein Hacker bricht in ein neuronales Netzwerk ein.
*   **Prompt-Idee:** `Character: Cyber-hacker with neural links. Action: Typing on holographic keys. Location: Dark server room. Time: Artificial neon light.`
*   **Ergebnis-Stil:** Schnelle 5-Shot Sequenz. Fokus auf die Reflexion der Datenströme in der Brille. Orbit-Kamera um den Kopf des Hackers, um die Isolation im Datenraum zu zeigen.

### 💄 5. Beauty & Fashion (Clean Look)
**Fokus:** Hauttextur, Lichtreflexion, Eleganz.

*   **Szenario:** Model präsentiert eine neue Hautpflege-Linie.
*   **Prompt-Idee:** `Character: Fashion model. Action: Applying cream, looking into a sun-drenched mirror. Location: Minimalist white bathroom. Time: Soft morning light.`
*   **Ergebnis-Stil:** Weiche, fließende Bewegungen (Slow Dolly In). Fokus auf Poren und Lichtbrechung auf der Haut. Keine harten Schatten.

---

## 💡 Profi-Tipps für Multi-Shot Sequenzen

1.  **Die "Cut to." Regel:** Nutze im finalen Video-Prompt immer "Cut to.", um der KI zu signalisieren, dass ein harter Schnitt (Hard Cut) gewünscht ist.
2.  **Objektiv-Logik:** Nutze weite Linsen (24mm) für Landschaften und lange Linsen (85mm) für emotionale Porträts. Die KI versteht die optische Wirkung dieser Angaben.
3.  **Vermeidung von Morphing:** Wenn ein Schnitt nicht funktioniert, reduziere die Bewegungsintensität im zweiten Shot oder nutze ein stärkeres Referenzbild für den Charakter.
4.  **Sound-Atmosphäre:** Denke immer an den Sound. Der Zusatz "Audio: diegetic sound only" sorgt dafür, dass die KI (bei Modellen mit Sound-Gen) keine generische Musik, sondern passende Umgebungsgeräusche erzeugt.

# Cheat Sheet: KI-Bilderzeugung

Dieses Cheat Sheet bietet eine kompakte Übersicht über die wichtigsten Prompt-Strukturen und technischen Parameter für die gezielte Bildgenerierung.

---

## 1. Die Prompt-Grundformel

Die optimale Reihenfolge für einen stabilen Prompt:
**Subjekt/Szene → Komposition/Kamera → Licht → Look/Farbe → Constraints**

### Struktur-Template
- **Subject:** Hauptmotiv (Was?)
- **Scene:** Umgebung/Hintergrund (Wo?)
- **Action/Pose:** Bewegung oder Haltung
- **Composition:** Anordnung im Bild
- **Camera:** Perspektive, Shotgröße, Brennweite
- **Lighting:** Lichtquelle, Richtung, Qualität
- **Look/Color:** Farbschema, Atmosphäre
- **Style/Medium:** Künstlerischer Stil oder Medium
- **Materials/Texture:** Oberflächenbeschaffenheit
- **Constraints:** Was soll *nicht* erscheinen?

---

## 2. Copy-Paste Mastertemplate

```text
[Medium/Style]
photorealistic image / comic illustration / oil painting / 3D render

[Subject]
main subject, appearance, shape, color, size, material, condition

[Scene]
where the subject is, background, environment, time of day, atmosphere

[Action/Pose]
what is happening, body posture, gesture, expression, movement

[Composition]
centered / left third / right third, foreground-middle ground-background, negative space, aspect ratio

[Camera]
close-up / medium shot / wide shot, eye-level / top-down / low angle, 24mm / 35mm / 50mm / 85mm, shallow or deep depth of field

[Lighting]
soft key from camera-left, hard sunlight, softbox at 45 degrees, rim light, low fill, warm highlights, cool shadows

[Look/Color]
natural tones, muted palette, teal-and-amber restrained, neutral commercial grade

[Materials/Texture]
glazed ceramic, matte wood, brushed metal, skin pores, fabric weave, soft fur

[Constraints]
no extra objects, no text, no watermark, no duplicate items, no anatomy errors, no plastic skin
```

---

## 3. Technische Parameter

### Shotgrößen
- **Extreme close-up:** Sehr nah, Details dominieren.
- **Close-up:** Gesicht oder Objekt im Fokus.
- **Medium shot:** Oberkörper oder Hauptobjekt mit etwas Umfeld.
- **Wide shot:** Ganze Person oder ganze Szene.
- **Over-the-shoulder:** Blick über Schulter in die Handlung.
- **Top-down flat lay:** Draufsicht direkt von oben.

### Perspektiven
- **Eye-level:** Neutral, natürlich, auf Augenhöhe.
- **High angle:** Blick von oben (Motiv wirkt kleiner/verletzlicher).
- **Low angle:** Blick von unten (heroisch, dominant).
- **Bird’s-eye:** Grafisch, ordnend aus der Luft.
- **Dutch angle:** Schräg gestellt, instabil, dynamisch.

### Brennweiten & Blende
- **24mm:** Weitwinkel (viel Raum, starke Perspektive).
- **35mm:** Reportage-Look (natürlich).
- **50mm:** Neutraler Standard (universell).
- **85mm:** Porträt-Brennweite (weicher Hintergrund).
- **f/1.4 - f/2.8:** Starke Unschärfe im Hintergrund (Bokeh).
- **f/8 - f/11:** Hohe Schärfentiefe (alles scharf).

---

## 4. Licht & Stil

### Licht-Setups
- **Softbox:** Weich, modern, kontrolliert.
- **Window light:** Natürlich, ruhig, glaubwürdig.
- **Rembrandt:** Dramatisch, modellierend (Dreieck auf der Wange).
- **Rim light:** Lichtkante zur Trennung vom Hintergrund.
- **Low key:** Dunkel, kontrastreich, filmisch.

### Stil-Vorlagen
- **Photorealistic documentary photo**
- **High-end commercial product photography**
- **Cinematic live-action still frame**
- **Anime illustration / Pixar-like 3D animation**
- **Oil painting / Watercolor illustration**

---

## 5. Musterprompts für die Praxis

> [!TIP] Nutzungshinweis
> Die Begriffe in eckigen Klammern `[...]` sind Platzhalter. Ersetzen Sie diese durch Ihr gewünschtes Motiv oder Thema, um den Prompt zu individualisieren.

### A. Einzelobjekt
> Photorealistic close-up of a [single ripe strawberry] placed on a [white ceramic plate], centered composition, neutral bright background, eye-level view, 50mm lens look, soft diffused light from camera-left, gentle shadow under the [strawberry], realistic surface texture, fresh appetizing appearance, minimal scene, no extra objects.

### B. Szene mit Tiefenstaffelung
> Photorealistic tabletop scene: a [white ceramic cup] stands on the left front of a [wooden table], a [sleeping cat] rests beside it, a [fresh green apple] sits on the right rear of the table, clear foreground-midground-background separation, eye-level camera, 50mm lens, soft natural window light, realistic materials, calm domestic atmosphere, no clutter.

### C. Character Sheet
> Create a clean character sheet of a [woman] on a neutral background. Top row: full-body front view, left profile, right profile, back view, relaxed A-pose. Bottom row: close-up portrait front, left profile, right profile. Keep identical facial features, identical proportions, [identical hairstyle], [identical glasses], consistent soft studio lighting, clean panel layout, no extra props.

### D. Infografik (Strukturiert)
Dieses Format eignet sich für FLUX-Modelle, um saubere Texte und Icons zu generieren.

> A professional, high-quality vector art infographic on a clean, solid light background. The style is modern flat design, using clean geometric shapes, sans-serif typography, and a cohesive color palette of [Teal, Navy Blue, and White].
> 
> 1. Header Area: A bold, modern title text at the top reading: "[ENERGIE-MIX 2025]".
> 
> 2. Visual Section 1 (Top Left): A clean vector icon representing [solar panels]. Below it, a text label in bold font reading: "[SOLAR]".
> 
> 3. Visual Section 2 (Top Right): A clean vector icon representing [wind turbines]. Below it, a text label reading: "[WIND]".
> 
> 4. Visual Section 3 (Bottom Left): A clean vector icon representing [a water dam]. Below it, a text label reading: "[WASSER]".
> 
> 5. Visual Section 4 (Bottom Right): A clean vector icon representing [a battery]. Below it, a text label reading: "[SPEICHER]".
> 
> Style details: Adobe Illustrator style, 2D flat vector graphics, minimalist, business professional, perfect typography, text in [German].

### E. Metapher & Schaubild
Hier steht die pädagogische Vermittlung eines Konzepts im Vordergrund.

> **Metapher:**
> Pädagogisches Schaubild, Infografik-Stil, gedeckte Pastellfarben. Metapher für [den Diffusionsprozess]: Ein [antiker Bildhauer aus Marmor] schält mit Meißel und Hammer eine [perfekte Statue] aus einer dichten, wirbelnden Wolke aus [statischem Rauschen und digitalen Pixel-Fragmenten] heraus. Sauberer weißer Hintergrund. Labels auf [Deutsch]: "[Rauschen (Input)]" an der [Pixelwolke], "[Diffusion]" am [Bildhauer], "[Struktur (Output)]" an der [Statue]. Moderner Vektor-Stil.

> **Technisches Schaubild:**
> Pädagogisches Schaubild, Infografik-Stil, flaches Design. Darstellung eines [knotenbasierten Workflows (Nodes)]. Mehrere Boxen mit abgerundeten Ecken sind durch geschwungene, farbige Linien miteinander verbunden. Labels auf [Deutsch] in den Boxen: "[Checkpoint Loader]", "[CLIP-Text]", "[K-Sampler]", "[VAE Decode]", "[Bild (Output)]". Hintergrund schlichtes Weiß, minimalistisch, Fokus auf logischen Fluss.

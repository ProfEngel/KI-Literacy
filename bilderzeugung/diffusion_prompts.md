# Prompt-Katalog: Bildgenerierung

Diese Sammlung enthält strukturierte Musterprompts für verschiedene Anwendungsbereiche – von fotorealistischer Dokumentation bis hin zu pädagogischen Sketchnotes.

---

## 1. Der LLM-Workflow (Empfohlen)

Die effektivste Methode zur Erstellung komplexer Prompts ist die Nutzung eines Sprachmodells (LLM wie ChatGPT, Claude oder Gemini) als „Prompt Architect“.

### Das Prinzip
Anstatt mühsam jedes Detail selbst zu schreiben, geben Sie dem LLM Ihre Vision und feste Stilvorgaben. Das LLM übersetzt dies in einen strukturierten, englischen Prompt, den das Bildmodell versteht.

### Beispiel: LLM-Meta-Prompt
Kopieren Sie diesen Text in Ihr LLM:

> Du bist ein Experte für Bild-Prompts. Erstelle einen hochgradig detaillierten englischen Prompt für ein Bildgenerierungsmodell.
> 
> **Gewünschter Stil:**
> [Wählen Sie einen Stil, z.B. „Pädagogisches Schaubild, flaches Vektor-Design, Pastelltöne“ oder „Fotorealistische Werbefotografie“].
> 
> **Aufgabe:**
> Erzeuge ein Bild zum Thema [Thema: z.B. Hebbsche Regel].
> Nutze als visuelle Metapher [Metapher: z.B. Spuren im Schnee].
> Füge passende Labels in [Sprache: z.B. Deutsch] ein.
> Ausgabe: Nur den englischen Code-Block für den Prompt.

---

## 2. Kategorien & Musterprompts

> [!TIP] Nutzungshinweis
> Alle Begriffe in eckigen Klammern `[...]` sind Platzhalter. Ersetzen Sie diese durch Ihr Motiv, um das Bild zu individualisieren.

### A. Photo (Dokumentarisch & Realistisch)
*Fokus auf natürliche Texturen, Licht und echte Kamera-Optik.*

> **Prompt:** Photorealistic [close-up] of [a single ripe strawberry] placed on [a white ceramic plate], centered composition, neutral bright background, eye-level view, [50mm] lens look, soft natural light from camera-left, gentle shadows, realistic surface texture, fresh appearance, minimal scene, no extra objects.

### B. Werbung & Nahaufnahme (Commercial)
*Fokus auf Perfektion, High-End Lighting und Materialität.*

> **Prompt:** High-end commercial product photography of [a luxury watch] on a [dark marble surface]. Lighting: dramatic rim light to separate the subject from the background, softbox fill, sharp focus on [the watch face], shallow depth of field with soft bokeh, neutral color grade, elegant and professional atmosphere, 8k resolution, extreme detail.

### C. Zeichnung & Illustration
*Fokus auf künstlerische Medien und Stile.*

> **Prompt:** [Oil painting] of [a mountain landscape at sunset], visible brushstrokes, textured canvas look, vibrant warm colors in the sky, cool shadows, [impressionistic style], [vibrant color palette], high contrast, masterpiece quality.

### D. Pixar-Stil (3D Animation)
*Optimiert für 16:9 Format.*

> **Prompt:** A cute [robot] standing in [a futuristic garden], Pixar-style 3D animation, highly detailed [metallic texture], big expressive eyes, soft global illumination, vibrant colors, cinematic lighting, 16:9 aspect ratio, high-quality render, whimsical atmosphere.

### E. Schaubild & Metaphern
*Fokus auf pädagogische Wissensvermittlung.*

> **Prompt:** Pädagogisches Schaubild, Infografik-Stil, gedeckte Pastellfarben. Metapher für [den Diffusionsprozess]: Ein [antiker Bildhauer aus Marmor] schält mit Meißel und Hammer eine [perfekte Statue] aus einer dichten, wirbelnden Wolke aus [statischem Rauschen und digitalen Pixel-Fragmenten] heraus. Sauberer weißer Hintergrund. Labels auf [Deutsch]: "[Rauschen (Input)]", "[Diffusion]", "[Struktur (Output)]". Moderner Vektor-Stil.

### F. Infografik (Strukturiert)
*Fokus auf saubere Textelemente und Symbole.*

> **Prompt:** A professional vector art infographic on a clean, solid light background. Style: modern flat design, geometric shapes, sans-serif typography. Cohesive color palette of [Teal, Navy Blue, and White].
> 1. Header Area: Bold title reading: "[ENERGIE-MIX 2025]".
> 2. Section 1: Icon representing [solar panels], label: "[SOLAR]".
> 3. Section 2: Icon representing [wind turbines], label: "[WIND]".
> 4. Section 3: Icon representing [a water dam], label: "[WASSER]".
> 5. Section 4: Icon representing [a battery], label: "[SPEICHER]".
> Text in [German], perfect typography.

### G. Sketchnote (Sketch-Grafik)
*Handgezeichneter Stil für visuelle Zusammenfassungen.*

> **Prompt:** A high-quality, hand-drawn sketchnote graphic recording on a plain white paper background. Style: professional business illustration using black fineliner outlines and flat marker coloring in [teal and muted orange].
> Composition: A central title node connected by arrows to surrounding distinct clusters in a mind-map layout.
> 1. Center Node: A 3D-style box containing the text "[THEMA: SCRUM]".
> 2. Cluster 1: Drawing of [a sprint cycle], label: "[SPRINT]".
> 3. Cluster 2: Drawing of [a team of people], label: "[TEAM]".
> 4. Cluster 3: Drawing of [a product backlog], label: "[BACKLOG]".
> 5. Cluster 4: Drawing of [a wall with sticky notes], label: "[KANBAN]".
> Style details: Handwriting font, clean lines, no photorealism, educational diagram style, legible text in [German].

### H. UI/UX Design (App & Web Mockups)
*Fokus auf saubere Interfaces und Layouts.*

> **Prompt:** High-quality UI/UX design mockup for [a meditation app] dashboard. Clean minimalist interface, rounded corners, soft shadows, vibrant color palette, icons for [breathing exercises, sleep tracks, and progress]. Shown on [a modern smartphone screen], neutral background, professional presentation.

### I. Isometrische 3D Assets
*Ideal für Präsentationen oder Web-Icons.*

> **Prompt:** Isometric 3D icon of [a server farm with cooling fans], low poly style, soft lighting, vibrant colors, isolated on a plain white background, high-resolution render, clean edges, playful and modern look.

### J. Minimalistisches Logo Design
*Fokus auf Form und Symbolik.*

> **Prompt:** A minimalist vector logo for [a tech startup named 'Ouroboros'], showing [a stylized snake eating its tail], geometric shapes, clean lines, flat design, two-tone color palette [Black and Gold], isolated on white background, professional branding style.

---

## 3. Fortgeschrittene Techniken

- **Ratio-Steuerung:** Fügen Sie `--ar 16:9` oder `--ar 9:16` am Ende hinzu (modellabhängig).
- **Detail-Booster:** Begriffe wie `hyper-detailed`, `volumetric lighting` oder `subsurface scattering` erhöhen die visuelle Qualität bei 3D/Photo.
- **Konsistenz:** Nutzen Sie "Character Sheets" (siehe Cheat Sheet), um die gleiche Figur in verschiedenen Szenen darzustellen.

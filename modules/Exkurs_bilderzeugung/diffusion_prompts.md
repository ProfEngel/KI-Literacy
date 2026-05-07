# Prompt-Katalog: Bildgenerierung

Diese Sammlung enthält strukturierte Musterprompts für verschiedene Anwendungsbereiche – von fotorealistischer Dokumentation bis hin zu pädagogischen Sketchnotes.

---

## 1. Der LLM-Workflow (Empfohlen)

Die effektivste Methode zur Erstellung komplexer Prompts ist die Nutzung eines Sprachmodells (LLM wie ChatGPT, Claude oder Gemini) als „Prompt Architect“.

### Das Prinzip
Anstatt mühsam jedes Detail selbst zu schreiben, geben Sie dem LLM Ihre Vision und feste Stilvorgaben. Das LLM übersetzt dies in einen strukturierten, englischen Prompt, den das Bildmodell versteht.

### Beispiel: LLM-Meta-Prompt
Kopieren Sie diesen Text in Ihr LLM:

```text
Du bist ein Experte für Bild-Prompts. Erstelle einen hochgradig detaillierten englischen Prompt für ein Bildgenerierungsmodell.

**Gewünschter Stil:**
[Wählen Sie einen Stil, z.B. „Pädagogisches Schaubild, flaches Vektor-Design, Pastelltöne“ oder „Fotorealistische Werbefotografie“].

**Aufgabe:**
Erzeuge ein Bild zum Thema [Thema: z.B. Hebbsche Regel].
Nutze als visuelle Metapher [Metapher: z.B. Spuren im Schnee].
Füge passende Labels in [Sprache: z.B. Deutsch] ein.
Ausgabe: Nur den englischen Code-Block für den Prompt.
```

---

## 2. Charakter-Entwicklung & Konsistenz
*Systematischer Aufbau einer Person und Erstellung von Referenzbögen (Character Sheets).*

#### Der Workflow zur Charakter-Entwicklung
Um eine konsistente Person zu erschaffen, definieren Sie diese schrittweise:

| Schritt | Fokus | Beispiele & Optionen |
| :--- | :--- | :--- |
| **1. Basis** | Demografie | *Gender, Age (Newborn, Toddler, Teen, Young Adult, Middle-aged, Senior, Octogenarian), Ethnicity (Nordic, East Asian, South Asian, African, Indigenous, Latino, Middle Eastern).* |
| **2. Gesicht** | Form & Augen | **Form:** *Oval, Round, Square, Heart-shaped, Diamond, Triangular.* **Augen:** *Almond-shaped, Deep-set, Hooded, Monolid, Wide-set; Amber, Hazel, Ice-blue, Heterochromia (two colors).* |
| **3. Haare** | Schnitt & Farbe | **Schnitt:** *Pixie, Bob, Buzz cut, Undercut, Afro, Braids, Dreads, Long waves, Messy bun, Side-part, Mullet, Shag, Curtain bangs.* **Farbe:** *Platinum blonde, Copper red, Ash brown, Jet black, Salt & pepper, Lavender, Mint green, Sunset orange.* |
| **4. Statur** | Körperbau | *Slender, Athletic, Muscular, Curvy, Lean, Stocky, Ectomorph, Mesomorph, Endomorph, Petite, Towering.* |
| **5. Emotionen** | Ausdruck | **Universal:** *Happy, Sad, Angry, Disgust, Fear, Surprise.* **Nuanciert:** *Smug, Pensive, Melancholic, Ecstatic, Stoic, Skeptical.* |
| **6. Stil** | Kleidung | *Techwear, Dark Academia, Streetwear, Business Casual, Cyberpunk, Minimalist, Steampunk, Cottagecore, Boho-Chic, Athleisure.* |

#### Attribut-Katalog (Referenz für Prompts)

**Haarfrisuren & Texturen (Hair Styles & Textures):**
- **Kurz:** *Buzz cut, Crew cut, Undercut, Pixie cut, Fade, Pompadour, Caesar cut.*
- **Mittellang:** *Bob, Lob (Long Bob), Shag cut, Mullet, Curtain bangs, Pageboy.*
- **Lang:** *Beach waves, Sleek straight, Braided crown, High ponytail, Messy bun, Waist-length hair.*
- **Texturiert:** *Afro, Box braids, Cornrows, Locs/Dreadlocks, Finger waves, Kinky hair, Coily curls.*

**Gesichtsmerkmale (Facial Features):**
- **Haut:** *Freckles, Sun-kissed, Pale, Weathered, Smooth, Rosy cheeks, Vitiligo, Tattoos.*
- **Bart:** *Stubble, Goatee, Full beard, Van Dyke, Moustache, Clean-shaven, Mutton chops.*
- **Besonderheiten:** *Sharp jawline, High cheekbones, Dimples, Piercings, Small scar, Glasses, Crow's feet.*

**Emotions-Nuancen (Detailed Expressions):**
- **Freude (Joy):** *Beaming smile, crinkled eyes, radiant, ecstatic, cheerful.*
- **Trauer (Sadness):** *Downward gaze, trembling lip, misty eyes, melancholic, heartbroken.*
- **Wut (Anger):** *Furrowed brow, flared nostrils, clenched jaw, seething, furious.*
- **Ekel (Disgust):** *Wrinkled nose, curled upper lip, squinted eyes, repulsed.*
- **Furcht (Fear):** *Wide-eyed, raised eyebrows, pale complexion, terrified, anxious.*
- **Überraschung (Surprise):** *Open mouth, arched brows, wide pupils, astonished, bewildered.*
- **Intellekt/Status:** *Stoic, skeptical, pensive, smug, arrogant, humble.*

#### Variante 1: Charakter-Sheet (Neu-Erstellung)
*Erzeugt eine Person von Grund auf in verschiedenen Ansichten.*

```text
A clean professional character sheet of [a woman with an oval face, sharp jawline, and short platinum blonde pixie cut]. Neutral light grey background. 

Layout: 
- Top row: Full-body front view, left profile, right profile, back view, relaxed A-pose. 
- Bottom row: Three close-up portraits showing different expressions (neutral, smiling, focused). 

Details: Identical facial features, identical proportions, identical [cyberpunk clothing], consistent soft studio lighting, clean panel layout, high detail, no extra props.
```

#### Variante 2: Charakter-Sheet (Basierend auf Referenzbild)
*Wird genutzt, wenn bereits ein Foto/Bild der Person existiert (Image-to-Image / Reference).*

```text
Character sheet based on the attached reference image of [the person]. Maintaining 100% facial consistency and proportions. Neutral background.

Layout:
- Multi-angle views: full-body front, side profile, and back view. 
- Close-up headshots: front and 45-degree angle.

Style: Consistent soft lighting, same [clothing] as in the reference, same [hairstyle], clean systematic arrangement, professional design.
```

---

## 3. Kategorien & Musterprompts

> [!TIP] Nutzungshinweis
> Alle Begriffe in eckigen Klammern `[...]` sind Platzhalter. Ersetzen Sie diese durch Ihr Motiv, um das Bild zu individualisieren.

### A. Photo (Dokumentarisch & Realistisch)
*Fokus auf natürliche Texturen, Licht und echte Kamera-Optik.*

```text
Photorealistic [close-up] of [a single ripe strawberry] placed on [a white ceramic plate], centered composition, neutral bright background, eye-level view, [50mm] lens look, soft natural light from camera-left, gentle shadows, realistic surface texture, fresh appearance, minimal scene, no extra objects.
```

### B. Werbung & Nahaufnahme (Commercial)
*Fokus auf Perfektion, High-End Lighting und Materialität.*

```text
High-end commercial product photography of [a luxury watch] on a [dark marble surface]. Lighting: dramatic rim light to separate the subject from the background, softbox fill, sharp focus on [the watch face], shallow depth of field with soft bokeh, neutral color grade, elegant and professional atmosphere, 8k resolution, extreme detail.
```

### C. Zeichnung & Illustration
*Fokus auf künstlerische Medien und Stile.*

```text
[Oil painting] of [a mountain landscape at sunset], visible brushstrokes, textured canvas look, vibrant warm colors in the sky, cool shadows, [impressionistic style], [vibrant color palette], high contrast, masterpiece quality.
```

### D. Pixar-Stil (3D Animation)
*Optimiert für 16:9 Format.*

```text
A cute [robot] standing in [a futuristic garden], Pixar-style 3D animation, highly detailed [metallic texture], big expressive eyes, soft global illumination, vibrant colors, cinematic lighting, 16:9 aspect ratio, high-quality render, whimsical atmosphere.
```

### E. Schaubild & Metaphern
*Fokus auf pädagogische Wissensvermittlung.*

```text
Pädagogisches Schaubild, Infografik-Stil, gedeckte Pastellfarben. Metapher für [den Diffusionsprozess]: Ein [antiker Bildhauer aus Marmor] schält mit Meißel und Hammer eine [perfekte Statue] aus einer dichten, wirbelnden Wolke aus [statischem Rauschen und digitalen Pixel-Fragmenten] heraus. Sauberer weißer Hintergrund. Labels auf [Deutsch]: "[Rauschen (Input)]", "[Diffusion]", "[Struktur (Output)]". Moderner Vektor-Stil.
```

### F. Infografik (Strukturiert)
*Fokus auf saubere Textelemente und Symbole.*

```text
A professional vector art infographic on a clean, solid light background. Style: modern flat design, geometric shapes, sans-serif typography. Cohesive color palette of [Teal, Navy Blue, and White].

1. Header Area: Bold title reading: "[ENERGIE-MIX 2025]".
2. Section 1: Icon representing [solar panels], label: "[SOLAR]".
3. Section 2: Icon representing [wind turbines], label: "[WIND]".
4. Section 3: Icon representing [a water dam], label: "[WASSER]".
5. Section 4: Icon representing [a battery], label: "[SPEICHER]".

Style details: Adobe Illustrator style, 2D flat vector graphics, minimalist, business professional, perfect typography, text in [German].
```

### G. Sketchnote (Sketch-Grafik)
*Handgezeichneter Stil für visuelle Zusammenfassungen.*

```text
A high-quality, hand-drawn sketchnote graphic recording on a plain white paper background. Style: professional business illustration using black fineliner outlines and flat marker coloring in [teal and muted orange].

Composition: A central title node connected by arrows to surrounding distinct clusters in a mind-map layout.

1. Center Node: A 3D-style box containing the text "[THEMA: SCRUM]".
2. Cluster 1: Drawing of [a sprint cycle], label: "[SPRINT]".
3. Cluster 2: Drawing of [a team of people], label: "[TEAM]".
4. Cluster 3: Drawing of [a product backlog], label: "[BACKLOG]".
5. Cluster 4: Drawing of [a wall with sticky notes], label: "[KANBAN]".

Style details: Handwriting font, clean lines, no photorealism, educational diagram style, legible text in [German].
```

### H. UI/UX Design (App & Web Mockups)
*Fokus auf saubere Interfaces und Layouts.*

```text
High-quality UI/UX design mockup for [a meditation app] dashboard. Clean minimalist interface, rounded corners, soft shadows, vibrant color palette, icons for [breathing exercises, sleep tracks, and progress]. Shown on [a modern smartphone screen], neutral background, professional presentation.
```

### I. Isometrische 3D Assets
*Ideal für Präsentationen oder Web-Icons.*

```text
Isometric 3D icon of [a server farm with cooling fans], low poly style, soft lighting, vibrant colors, isolated on a plain white background, high-resolution render, clean edges, playful and modern look.
```

### J. Minimalistisches Logo Design
*Fokus auf Form und Symbolik.*

```text
A minimalist vector logo for [a tech startup named 'Ouroboros'], showing [a stylized snake eating its tail], geometric shapes, clean lines, flat design, two-tone color palette [Black and Gold], isolated on white background, professional branding style.
```

### K. Architektur & Interior Design
*Fokus auf Raumgefühl, Materialien und Lichtführung.*

```text
Professional architectural photography of [a modern brutalist villa in a pine forest]. Large [concrete walls], floor-to-ceiling [glass windows], warm interior lighting visible from outside, twilight blue hour atmosphere, soft ambient light, high-end materials, minimalist landscape design, 8k resolution, wide angle lens.
```

### L. Makro-Fotografie
*Fokus auf extreme Details.*

```text
Macro photography of [a honeybee covered in pollen on a lavender flower]. Extreme detail on [the bee's wings and eyes], shallow depth of field with creamy bokeh, natural sunlight, vibrant colors, microscopic textures visible, high-speed shutter look, professional nature documentary style.
```

### M. Fashion & Editorial Portrait
*Fokus auf Posen und Licht-Inszenierung.*

```text
Editorial fashion portrait of [a model wearing a structural avant-garde silver dress]. Setting: [a stark white minimalist studio]. Lighting: high-contrast butterfly lighting, sharp shadows, cool color temperature, professional magazine aesthetic, [Vogue-style] composition, extreme sharpness on fabric textures.
```

### N. Sci-Fi & Cyberpunk
*Atmosphärische Welten mit Neon-Licht.*

```text
Cinematic sci-fi concept art of [a neon-drenched street in a futuristic Tokyo]. Rain-slicked pavement reflecting [cyan and magenta neon signs], [hovering vehicles] in the background, volumetric fog, dense urban atmosphere, high-detail technological elements, Blade Runner aesthetic, 16:9 aspect ratio.
```

### O. Retro & Vintage Fotografie
*Analoge Film-Looks.*

```text
Vintage [Polaroid] photo from the [1970s] showing [a group of friends at a beach bonfire]. Faded colors, slight light leaks, soft grain, warm nostalgic atmosphere, square format with white border look, [35mm film] aesthetic, authentic retro feel.
```

---

## 4. Fortgeschrittene Techniken

- **Ratio-Steuerung:** Fügen Sie `--ar 16:9` oder `--ar 9:16` am Ende hinzu (modellabhängig).
- **Detail-Booster:** Begriffe wie `hyper-detailed`, `volumetric lighting` oder `subsurface scattering` erhöhen die visuelle Qualität bei 3D/Photo.
- **Konsistenz:** Nutzen Sie "Character Sheets" (siehe Cheat Sheet), um die gleiche Figur in verschiedenen Szenen darzustellen.

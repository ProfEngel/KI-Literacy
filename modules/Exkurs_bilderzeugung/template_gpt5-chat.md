## Zielbild

Das Modul führt Lernende von der einfachen Beschreibung eines einzelnen Objekts über kleine Szenen bis hin zu Personen, Character Sheets und Image-to-Image-Workflows. Diese Progression folgt bewährten Promptstrukturen, bei denen zuerst Subjekt und Szene, dann Komposition und Kamera, danach Licht, Look und Constraints präzisiert werden.[kling](https://kling.ai/blog/ai-character-consistency-guide)
Für deinen technischen Kontext passt besonders gut ein strukturierter, wiederverwendbarer Aufbau mit festen Prompt-Blöcken, weil solche Templates Konsistenz fördern und sich gut mit OpenWebUI-, ComfyUI- und FLUX-nahen Workflows kombinieren lassen.

## Unterrichtsskript

## Titel

**Von der Bildbeschreibung zum gezielten KI-Bildprompt**

## Zielgruppe

Studierende oder Einsteiger mit wenig bis mittlerer Erfahrung in KI-Bildgenerierung. Das Modul eignet sich besonders für Lernumgebungen, in denen Bildanalyse, Prompt Engineering und iterative Verbesserung zusammen vermittelt werden sollen.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

## Lernziele

Nach dem Modul können die Lernenden:

* einfache und komplexe Bilder systematisch beschreiben.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
* Unterschiede zwischen Motivbeschreibung und vollständiger Bildanalyse erkennen.[letsenhance](https://letsenhance.io/blog/article/ai-text-prompt-guide/)
* Prompts strukturiert nach Subjekt, Komposition, Licht, Stil und Constraints aufbauen.
* Perspektive, Brennweite, Blende und Licht gezielt variieren.[poeticmind](https://www.poeticmind.co.uk/journal-creativity-and-inspiration/volume-2-issue-4/prompt-writing-guide-for-ai-image-generation-photographic-and-design-terminology/)
* Personen und wiederkehrende Figuren konsistenter prompten.**getimg**+1

## Didaktisches Prinzip

Es wird immer nur **eine** Komplexitätsstufe erhöht: zuerst ein Objekt, dann mehrere Objekte, dann räumliche Beziehungen, dann Licht, dann Stil, dann Person, dann Konsistenz, dann Referenzarbeit. Genau dieses „ein Hebel pro Iteration“-Prinzip wird in Prompting-Guides und Troubleshooting-Empfehlungen als besonders wirksam beschrieben.

---

## Ablaufplan

## Phase 1: Sehen lernen

## Aufgabe 1: Einfache Bildbeschreibung

Bild: Eine einzelne Erdbeere auf einem weißen Teller, neutraler heller Hintergrund.


Die Lernenden beschreiben das Bild zunächst **ohne Hilfsmittel** in 3 bis 5 Sätzen. Ziel ist zu zeigen, dass Anfänger meist nur Objektname und Farbe nennen, aber Form, Oberfläche, Licht, Perspektive, Hintergrund und Bildwirkung auslassen.[letsenhance](https://letsenhance.io/blog/article/ai-text-prompt-guide/)

**Arbeitsauftrag**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Beschreibe das Bild in 3 bis 5 Sätzen so genau wie möglich.
</span></span><span>Nenne mindestens:
</span><span>- Was zu sehen ist
</span><span>- Welche Farben dominieren
</span><span>- Wo sich das Objekt im Bild befindet
</span><span>- Wie das Licht wirkt
</span><span>- Wie einfach oder komplex der Hintergrund ist</span></code></span></div></div></div></pre>

## Aufgabe 2: KI-Vollanalyse

Danach geben die Lernenden Bild plus ihre eigene Kurzbeschreibung an die KI und fordern eine vollständige Analyse an. Solche strukturierten Analysen trainieren das Sehen, weil sie Komposition, Licht, Kameraeindruck und Materialität getrennt erfassen.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

**Prompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Analysiere dieses Bild extrem präzise und vollständig für Lernzwecke.
</span></span><span>
</span><span>Beschreibe:
</span><span>1. Hauptmotiv
</span><span>2. Form, Farbe, Größe und Materialität
</span><span>3. Oberflächenstruktur und Zustand
</span><span>4. Position im Bild
</span><span>5. Tellerform, Tellerfarbe und Relation zum Motiv
</span><span>6. Hintergrund und Negativraum
</span><span>7. Lichtquelle, Lichtrichtung, Härte, Schatten, Reflexionen
</span><span>8. Perspektive und wahrscheinliche Kamerahöhe
</span><span>9. Brennweiten-Eindruck und Schärfentiefe
</span><span>10. Stil oder Medium
</span><span>11. Bildwirkung
</span><span>12. Was Anfänger bei diesem Bild typischerweise übersehen
</span><span>
</span><span>Formuliere danach einen präzisen Prompt, mit dem dieses Bild möglichst ähnlich neu erzeugt werden könnte.</span></code></span></div></div></div></pre>

## Aufgabe 3: Reflexion

Die Lernenden vergleichen ihre Beschreibung mit der KI-Analyse. Gute Reflexionskriterien sind: Was habe ich vergessen, was war zu ungenau, was habe ich nur implizit gesehen, aber nicht benannt.**luminescentphoto**+1

**Reflexionsfragen**

* Habe ich nur das Objekt beschrieben oder auch das Bild?
* Habe ich Licht nur als „hell“ bezeichnet oder genauer?
* Habe ich Position und Perspektive erwähnt?
* Habe ich Materialität genannt?
* Habe ich Bildwirkung oder Stil erfasst?

---

## Phase 2: Komplexität steigern

## Aufgabe 4: Mehrere Objekte

Bild: Tasse, Apfel und Buch auf einem Tisch.
Hier lernen die Studierenden, dass nicht nur Objekte wichtig sind, sondern auch Größenverhältnisse, Abstände und visuelle Dominanz.[luminescentphoto](https://luminescentphoto.com/blog/2013/02/07/the-composition-checklist-for-photographers/)

**Prompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Analysiere dieses Bild so, dass ein Anfänger lernt, wie man mehrere Objekte nicht nur aufzählt, sondern räumlich und kompositorisch beschreibt.
</span></span><span>
</span><span>Gehe auf folgende Punkte ein:
</span><span>- Welche Objekte sind sichtbar?
</span><span>- Welches Objekt dominiert visuell?
</span><span>- Wo liegt welches Objekt genau?
</span><span>- Wie wirken Größenverhältnisse und Abstände?
</span><span>- Wie wird der Blick durch das Bild geführt?
</span><span>- Welche Rolle spielen Hintergrund und Freiraum?</span></code></span></div></div></div></pre>

## Aufgabe 5: Kleine Szene mit Tiefenstaffelung

Bild: Tasse links vorne, schlafende Katze daneben, grüner Apfel rechts hinten.
Jetzt werden Vordergrund, Mittelgrund und Hintergrund explizit eingeführt, weil diese Staffelung später für gute Prompts zentral ist.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

**Prompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Zerlege das Bild in Vordergrund, Mittelgrund und Hintergrund.
</span></span><span>Beschreibe für jedes Element:
</span><span>- genaue Position
</span><span>- relative Größe
</span><span>- Schärfe oder Unschärfe
</span><span>- Licht
</span><span>- Beziehung zu den anderen Elementen
</span><span>
</span><span>Erkläre außerdem, warum die reine Nennung der Objekte nicht reicht, um das Bild gut nachzuprompten.</span></code></span></div></div></div></pre>

## Aufgabe 6: Wimmelbild

Bild: Marktszene, Bahnhof, Straßencafé oder Innenraum mit vielen Menschen und Objekten.
Bei komplexen Bildern muss Beschreibung priorisieren und clustern, statt alles chaotisch aufzuzählen. Genau diese Systematik verbessert später auch komplexe Generierungsprompts.**kevinmullinsphotography**+1

**Prompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Analysiere dieses komplexe Bild strukturiert und in sinnvoller Reihenfolge.
</span></span><span>
</span><span>Reihenfolge:
</span><span>1. Gesamteindruck
</span><span>2. Hauptszene
</span><span>3. Vordergrund
</span><span>4. Mittelgrund
</span><span>5. Hintergrund
</span><span>6. Linke Bildhälfte
</span><span>7. Rechte Bildhälfte
</span><span>8. Licht und Atmosphäre
</span><span>9. Stil oder Medium
</span><span>10. Drei wichtigste Subjekte
</span><span>11. Details, die leicht übersehen werden
</span><span>
</span><span>Erstelle am Ende eine kurze Liste:
</span><span>- Hauptmotive
</span><span>- Kontextmotive
</span><span>- mögliche Störfaktoren</span></code></span></div></div></div></pre>

---

## Phase 3: Von Analyse zu Generierung

## Aufgabe 7: Erstes einfaches Bild erzeugen

Jetzt erzeugen die Lernenden selbst ein Bild auf Basis einer sauberen Beschreibung. Gute Promptformeln empfehlen hier klar die Reihenfolge: Subject/Scene → Composition/Camera → Lighting → Look/Constraints.

**Beispielprompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Fotorealistisches Bild einer einzelnen reifen Erdbeere auf einem weißen Keramikteller, zentrierte Komposition, eye-level Nahaufnahme, 50mm Lens-Look, weiches diffuses Licht von links, sanfte Schatten, neutraler heller Hintergrund, appetitliche natürliche Farben, realistische Oberflächenstruktur, keine weiteren Objekte.</span></span></code></span></div></div></div></pre>

## Aufgabe 8: Nur ein Parameter ändern

Die Lernenden ändern jetzt genau **einen** Aspekt, z. B. Farbe, Material, Licht oder Perspektive. Diese Methode wird in mehreren Prompting-Guides empfohlen, weil dadurch klarer wird, welche Variable welche Bildwirkung hat.

**Varianten**

* Erdbeere halbiert statt ganz.
* Schwarzer statt weißer Teller.
* Hartes Sonnenlicht statt weiches Licht.
* Top-down statt eye-level.
* 85mm statt 50mm.

---

## Phase 4: Licht, Stil, Kamera

## Aufgabe 9: Lichtstudie

Das gleiche Motiv wird mit mehreren Licht-Setups erzeugt, weil Licht als eigener Steuerblock besonders stark auf Bildqualität und Stimmung wirkt. Ein klar definierter Key Light-Winkel und reduzierte Sekundärlichter verbessern die Konsistenz sichtbar.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

**Lichtvarianten**

* Weiches Fensterlicht von rechts.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
* Softbox bei 45 Grad.
* Rembrandt-Licht.
* Golden Hour.[youtube](https://www.youtube.com/watch?v=aNBfC6xk68c)
* Low-key mit Rim Light.
* Neon Magenta/Cyan.

## Aufgabe 10: Stilwechsel

Gleiche Szene, anderer Stil. Stil sollte als klarer Rendering-Vertrag verstanden werden, nicht nur als „Vibe“. Diese Trennung von Inhalt und Darstellung verbessert die Kontrolle.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

**Stile**

* Smartphone-Foto
* Studiofoto
* Dokumentarfotografie
* Commercial Product Shot
* Comic
* Aquarell
* Ölgemälde
* 3D-Render
* Pixar-artige Animation

## Aufgabe 11: Kamerastudie

Nun wird dieselbe Szene mit unterschiedlichen Perspektiven und Brennweiten neu erzeugt. Lens- und Shot-Angaben gehören zu den wirksamsten Kamera-Details in Bildprompts.[poeticmind](https://www.poeticmind.co.uk/journal-creativity-and-inspiration/volume-2-issue-4/prompt-writing-guide-for-ai-image-generation-photographic-and-design-terminology/)

**Varianten**

* top-down flat lay
* close-up portrait
* medium shot
* wide shot
* 24mm wide angle
* 35mm natural perspective
* 50mm neutral
* 85mm portrait lens

---

## Phase 5: Personen und Konsistenz

## Aufgabe 12: Person einführen

Erst jetzt kommt eine Person ins Bild, weil Menschen deutlich mehr Beschreibungsdimensionen brauchen: Gesicht, Haare, Haut, Körperbau, Pose, Mimik, Kleidung und Interaktion mit der Szene. Konsistenz wird höher, wenn die Beschreibung der Person in allen Prompts gleich aufgebaut bleibt.**kling**+1

**Prompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Fotorealistisches Bild einer sitzenden Frau an einem schlichten Holztisch, kurze dunkle Haare, runde Brille, natürliche Hauttextur, durchschnittlicher Körperbau, ruhiger neutraler Gesichtsausdruck, entspannte Schultern, Blick leicht nach unten, weiße Keramiktasse links vorne auf dem Tisch, weiches Fensterlicht von rechts, 50mm Lens-Look, mittlere Schärfentiefe, dokumentarischer Fotostil.</span></span></code></span></div></div></div></pre>

## Aufgabe 13: Emotion und Pose variieren

Hier bleibt die Person gleich, aber Ausdruck, Haltung und Gewichtung des Körpers ändern sich. Für Konsistenz sollte möglichst nur Pose oder Emotion geändert werden, nicht gleichzeitig Identität, Kleidung, Licht und Perspektive.**kling**+1

## Aufgabe 14: Character Sheet

Character Sheets stabilisieren wiederkehrende Figuren, weil mehrere Ansichten und Framing-Varianten explizit eingefordert werden. Prompt-Templates und eine feste Reihenfolge der Beschreibung verbessern diese Konsistenz zusätzlich.**getimg**+1

**Prompt**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Erstelle ein sauberes Character Sheet derselben Person auf neutralem Hintergrund.
</span></span><span>Obere Reihe: front view, left profile, right profile, back view, ganze Figur in entspannter A-pose.
</span><span>Untere Reihe: close-up portrait front, left profile, right profile.
</span><span>Identische Gesichtszüge, identische Proportionen, konsistentes Licht, klare Paneltrennung, keine zusätzlichen Objekte.</span></code></span></div></div></div></pre>

---

## Phase 6: i2i und Multi-Reference

## Aufgabe 15: Person in Raum einbringen

Mit einem Raumfoto und einer Figurenreferenz wird die Person in eine reale Szene eingesetzt. Reine Textanweisungen reichen für exakte Pose und Platzierung oft nicht aus; zusätzliche Strukturhilfen wie Pose- oder Depth-Guidance sind oft verlässlicher.[youtube](https://www.youtube.com/watch?v=VOTZVQxyX1Q)[getimg](https://getimg.ai/blog/how-to-create-consistent-characters-with-ai)

## Aufgabe 16: Mehrere Referenzen kombinieren

Jetzt kommen Person, Ort und Objekt aus getrennten Vorlagen zusammen. Multi-Reference-Workflows sind besonders nützlich, wenn Identität, Raumstruktur und einzelne Requisiten gleichzeitig erhalten bleiben sollen.[getimg](https://getimg.ai/blog/how-to-create-consistent-characters-with-ai)

---

## Bewertungsraster

Für Unterricht und Übungen brauchst du klare Kriterien. Ein gutes Bewertungsraster prüft nicht nur Kreativität, sondern vor allem Präzision, Struktur und kontrollierte Variation.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

| Kriterium         | Sehr gut                                                                                                                                                                                                            | Mittel                               | Schwach                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------- |
| Motivbeschreibung | präzise, vollständig, material- und zustandsbezogen                                                                                                                                                               | Hauptmotiv klar, Details lückenhaft | sehr allgemein, kaum differenziert |
| Komposition       | Position, Ebenen, Blickführung klar benannt[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)                                                                   | grundlegende Platzierung vorhanden   | nur Objektliste                    |
| Licht             | Richtung, Härte, Temperatur, Schatten beschrieben[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)                                                             | Licht grob erwähnt                  | Licht fehlt oder bleibt unklar     |
| Kamera            | Perspektive, Shot, Brennweite sinnvoll[poeticmind](https://www.poeticmind.co.uk/journal-creativity-and-inspiration/volume-2-issue-4/prompt-writing-guide-for-ai-image-generation-photographic-and-design-terminology/) | teilweise vorhanden                  | fehlt fast vollständig            |
| Stil              | Medium und Look klar getrennt[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)                                                                                  | Stil grob genannt                    | Stil vage oder widersprüchlich    |
| Iteration         | nur eine Variable pro Runde geändert                                                                                                                                                                               | mehrere Änderungen gleichzeitig     | keine kontrollierte Iteration      |

## Cheat Sheet

## 1) Prompt-Grundformel

Diese Reihenfolge ist besonders praxistauglich: Subjekt/Szene → Komposition/Kamera → Licht → Look/Farbe → Constraints. Genau diese Struktur wird in Prompt-Cheatsheets und Strukturleitfäden mehrfach empfohlen.

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Subject:
</span></span><span>Scene:
</span><span>Action/Pose:
</span><span>Composition:
</span><span>Camera:
</span><span>Lighting:
</span><span>Look/Color:
</span><span>Style/Medium:
</span><span>Materials/Texture:
</span><span>Constraints:</span></code></span></div></div></div></pre>

## 2) Copy-Paste Mastertemplate

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>[Medium/Style]
</span></span><span>photorealistic image / comic illustration / oil painting / 3D render
</span><span>
</span><span>[Subject]
</span><span>main subject, appearance, shape, color, size, material, condition
</span><span>
</span><span>[Scene]
</span><span>where the subject is, background, environment, time of day, atmosphere
</span><span>
</span><span>[Action/Pose]
</span><span>what is happening, body posture, gesture, expression, movement
</span><span>
</span><span>[Composition]
</span><span>centered / left third / right third, foreground-middle ground-background, negative space, aspect ratio
</span><span>
</span><span>[Camera]
</span><span>close-up / medium shot / wide shot, eye-level / top-down / low angle, 24mm / 35mm / 50mm / 85mm, shallow or deep depth of field
</span><span>
</span><span>[Lighting]
</span><span>soft key from camera-left, hard sunlight, softbox at 45 degrees, rim light, low fill, warm highlights, cool shadows
</span><span>
</span><span>[Look/Color]
</span><span>natural tones, muted palette, teal-and-amber restrained, neutral commercial grade
</span><span>
</span><span>[Materials/Texture]
</span><span>glazed ceramic, matte wood, brushed metal, skin pores, fabric weave, soft fur
</span><span>
</span><span>[Constraints]
</span><span>no extra objects, no text, no watermark, no duplicate items, no anatomy errors, no plastic skin</span></code></span></div></div></div></pre>

## 3) Shotgrößen

* Extreme close-up: sehr nah, Details dominieren.
* Close-up: Gesicht oder Objekt im Fokus.
* Medium shot: Oberkörper oder Hauptobjekt mit etwas Umfeld.
* Wide shot: ganze Person oder ganze Szene.
* Over-the-shoulder: Blick über Schulter in Handlung.
* Top-down flat lay: Draufsicht von oben.

## 4) Perspektiven

* Eye-level: neutral, natürlich.
* High angle: Motiv wirkt kleiner, verletzlicher.
* Low angle: heroisch, dominant.
* Bird’s-eye / top-down: grafisch, ordnend.
* Dutch angle: instabil, dynamisch, bewusst irritierend.

## 5) Brennweiten

* 24mm: weit, starke Perspektive, mehr Raum.
* 35mm: natürlich, reportagehaft.
* 50mm: neutral, universell.
* 85mm: porträtfreundlich, weicher Hintergrund.
* 105mm+: stärkere Kompression, detailorientiert.

## 6) Blendenwirkung

* f/1.4 bis f/2.8: starke Freistellung, weicher Hintergrund.[poeticmind](https://www.poeticmind.co.uk/journal-creativity-and-inspiration/volume-2-issue-4/prompt-writing-guide-for-ai-image-generation-photographic-and-design-terminology/)
* f/4 bis f/5.6: ausgewogen.
* f/8: mehr Schärfentiefe, gut für Produkt und Tischszenen.
* f/11+: fast alles scharf.

## 7) Licht-Cheat-Sheet

* Softbox: weich, modern, kontrolliert.
* Window light: natürlich, ruhig, glaubwürdig.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
* Rembrandt: dramatisch, modellierend, klassisches Porträt.
* Rim light: klare Trennung vom Hintergrund.
* Low key: dunkel, kontrastreich, filmisch.
* Neon: farbig, urban, riskant für Hauttöne.

**Copy-Blöcke**

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>lighting: large softbox key light at 45 degrees, soft wrap, subtle fill, clean shadow edges</span></span></code></span></div></div></div></pre>

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>lighting: window light from camera-right, soft key, low fill, warm highlights, cooler shadows</span></span></code></span></div></div></div></pre>

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>lighting: Rembrandt lighting, single key light high camera-left, dramatic contrast, triangle cheek highlight</span></span></code></span></div></div></div></pre>

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>lighting: low key setup with strong rim light behind subject, deep shadows, controlled spill</span></span></code></span></div></div></div></pre>

## 8) Stil-Cheat-Sheet

* Photorealistic documentary photo.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
* High-end commercial product photography.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
* Cinematic live-action still frame.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
* Smartphone snapshot.
* Anime illustration.
* Oil painting with visible brush strokes.
* Watercolor illustration.
* Pixar-like 3D animation.

## 9) Personen-Cheat-Sheet

Bei Personen sollten dieselben Attribute immer in derselben Reihenfolge kommen, weil feste Templates die Konsistenz verbessern.**kling**+1

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Character:
</span></span><span>age impression, gender presentation, face shape, nose, lips, eye color, hair color, haircut, skin tone, skin texture, body build, clothing, accessories
</span><span>
</span><span>Pose:
</span><span>standing / sitting / leaning / walking / hand position / gaze direction
</span><span>
</span><span>Expression:
</span><span>neutral / smiling / sad / angry / surprised / tired / focused
</span><span>
</span><span>Consistency:
</span><span>same face, same proportions, same hairstyle, same glasses, same outfit color palette</span></code></span></div></div></div></pre>

## 10) Negative/Constraint-Block

Ein kleiner Constraint-Block ist oft hilfreicher als überlange Qualitäts-Buzzwords. Struktur- und Troubleshooting-Guides empfehlen klare Verbote gegen häufige Fehler statt unscharfer Superlative.

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Constraints: no extra objects, no duplicate items, no deformed hands, no extra fingers, no text artifacts, no distorted anatomy, no plastic skin, no watermark</span></span></code></span></div></div></div></pre>

## Musterprompts

## A. Erdbeere

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Photorealistic close-up of a single ripe strawberry placed on a white ceramic plate, centered composition, neutral bright background, eye-level view, 50mm lens look, soft diffused light from camera-left, gentle shadow under the strawberry, realistic surface texture and seeds, fresh appetizing appearance, minimal scene, no extra objects.</span></span></code></span></div></div></div></pre>

## B. Tasse + Katze + Apfel

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Photorealistic tabletop scene: a white ceramic cup stands on the left front of a wooden table, a sleeping cat rests beside it, a fresh green apple sits on the right rear of the table, clear foreground-midground-background separation, eye-level camera, 50mm lens, soft natural window light, realistic materials, calm domestic atmosphere, no clutter.</span></span></code></span></div></div></div></pre>

## C. Person sitzend

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Photorealistic interior portrait of a seated woman at a wooden table, short dark hair, round glasses, natural skin texture, average build, relaxed shoulders, looking slightly downward, white ceramic cup on the left front of the table, soft window light from camera-right, chest-up framing, 85mm portrait lens, shallow depth of field, documentary photography look, no plastic skin, no text.</span></span></code></span></div></div></div></pre>

## D. Character Sheet

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Create a clean character sheet of the same woman on a neutral background. Top row: full-body front view, left profile, right profile, back view, relaxed A-pose. Bottom row: close-up portrait front, left profile, right profile. Keep identical facial features, identical proportions, identical hairstyle, identical glasses, consistent soft studio lighting, clean panel layout, no extra props.</span></span></code></span></div></div></div></pre>

## E. Multi-Reference-Zielbeschreibung

<pre class="not-prose w-full rounded font-mono text-sm font-extralight"><div class="codeWrapper bg-subtle text-light selection:text-super selection:bg-super/10 my-md relative flex flex-col rounded-lg font-mono text-sm font-medium"><div class="translate-y-xs -translate-x-xs bottom-xl mb-xl flex h-0 items-start justify-end sm:sticky sm:top-xs"><div class="overflow-hidden border-subtlest ring-subtlest divide-subtlest bg-base rounded-full"><div class="border-subtlest ring-subtlest divide-subtlest bg-subtle"><button data-testid="copy-code-button" aria-label="Code kopieren" type="button" class="focus-visible:bg-quiet hover:bg-quiet text-quiet hover:text-foreground font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none items-center relative group/button font-semimedium justify-center text-center items-center rounded-full cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-square" data-state="closed"><div class="flex items-center min-w-0 gap-two justify-center"><div class="flex shrink-0 items-center justify-center size-4"><svg role="img" class="inline-flex fill-current shrink-0" width="16" height="16" stroke-width="1.75"><use xlink:href="#pplx-icon-copy"></use></svg></div></div></button></div></div></div><div class="-mt-xl"><div><div data-testid="code-language-indicator" class="text-quiet bg-quiet py-xs px-sm inline-block rounded-br rounded-tl-lg text-xs font-thin">text</div></div><div><span><code><span><span>Use the character reference for identity, the room reference for scene structure, and the object reference for the apple. Place the woman seated on the floor in the left foreground, the cup on the front edge of the table, and the green apple on the right rear of the table. Match all elements to soft warm evening window light, photorealistic style, realistic materials, consistent perspective, no extra objects.</span></span></code></span></div></div></div></pre>

## Unterrichtshinweise

Für Anfänger ist es oft hilfreich, Prompting nicht als „magisches Formulieren“, sondern als Übersetzung visueller Entscheidungen in Sprache zu erklären. Genau deshalb sollte Bildbeschreibung am Anfang stehen und Generierung erst danach kommen.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)
Für deinen Einsatz mit kurzen, kontrollierten FLUX-/OpenWebUI-/ComfyUI-Prompts ist ein zweistufiges Verfahren sinnvoll: zuerst Analyse oder Zielbeschreibung, danach ein kompakter Produktionsprompt. Das entspricht auch deinem bisherigen strukturierten Workflow mit festen Promptfeldern.[Memory](https://www.perplexity.ai/search/db6ee4ce-5d59-4d4e-8155-3f34b21fc6ba)

## Hausaufgabenidee

Eine sehr gute Abschlussaufgabe ist: dieselbe Szene dreimal generieren, aber jeweils nur einen Hebel ändern — einmal Licht, einmal Brennweite, einmal Stil. So sehen die Lernenden direkt, welcher Parameter welche Bildwirkung verändert.
Ebenso sinnvoll ist eine Reverse-Aufgabe: Ein erzeugtes Bild wird wieder analysiert und in seine Bestandteile zerlegt. Das stärkt den Kreislauf aus Sehen, Beschreiben, Prompten und Überarbeiten.[rephrase-it](https://rephrase-it.com/blog/ai-image-prompt-formulas-for-lighting-style-and-composition-)

Möchtest du das jetzt noch in ein **formales Handout im Stil eines Hochschulskripts** umgeschrieben haben, also mit Deckblatt, Lernzielen, Aufgabenblättern und sauberer Gliederung für PDF/Word?

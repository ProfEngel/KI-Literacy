# Anleitung: Von der Bildbeschreibung zum gezielten KI-Bildprompt

## Zielbild
Das Modul führt Lernende von der einfachen Beschreibung eines einzelnen Objekts über kleine Szenen bis hin zu Personen, Character Sheets und Image-to-Image-Workflows. Diese Progression folgt bewährten Promptstrukturen, bei denen zuerst Subjekt und Szene, dann Komposition und Kamera, danach Licht, Look und Constraints präzisiert werden.

---

## Unterrichtsskript

### Titel
**Von der Bildbeschreibung zum gezielten KI-Bildprompt**

### Zielgruppe
Studierende oder Einsteiger mit wenig bis mittlerer Erfahrung in KI-Bildgenerierung. Das Modul eignet sich besonders für Lernumgebungen, in denen Bildanalyse, Prompt Engineering und iterative Verbesserung zusammen vermittelt werden sollen.

### Lernziele
Nach dem Modul können die Lernenden:
* Einfache und komplexe Bilder systematisch beschreiben.
* Unterschiede zwischen Motivbeschreibung und vollständiger Bildanalyse erkennen.
* Prompts strukturiert nach Subjekt, Komposition, Licht, Stil und Constraints aufbauen.
* Perspektive, Brennweite, Blende und Licht gezielt variieren.
* Personen und wiederkehrende Figuren konsistenter prompten.

### Didaktisches Prinzip
Es wird immer nur **eine** Komplexitätsstufe erhöht: zuerst ein Objekt, dann mehrere Objekte, dann räumliche Beziehungen, dann Licht, dann Stil, dann Person, dann Konsistenz, dann Referenzarbeit („ein Hebel pro Iteration“-Prinzip).

---

## Ablaufplan

### Phase 1: Sehen lernen

#### Aufgabe 1: Einfache Bildbeschreibung
**Bild:** Eine einzelne Erdbeere auf einem weißen Teller, neutraler heller Hintergrund.

![Einfache Bildbeschreibung: Erdbeere auf Teller](media/idee01_erdbeere.png)

Die Lernenden beschreiben das Bild zunächst **ohne Hilfsmittel** in 3 bis 5 Sätzen. Ziel ist zu zeigen, dass Anfänger meist nur Objektname und Farbe nennen, aber Form, Oberfläche, Licht, Perspektive, Hintergrund und Bildwirkung auslassen.

> [!TIP] Arbeitsauftrag
> Beschreibe das Bild in 3 bis 5 Sätzen so genau wie möglich.
> Nenne mindestens:
> - Was zu sehen ist
> - Welche Farben dominieren
> - Wo sich das Objekt im Bild befindet
> - Wie das Licht wirkt
> - Wie einfach oder komplex der Hintergrund ist

#### Aufgabe 2: KI-Vollanalyse
Danach geben die Lernenden das Bild plus ihre eigene Kurzbeschreibung an die KI und fordern eine vollständige Analyse an. Solche strukturierten Analysen trainieren das Sehen, weil sie Komposition, Licht, Kameraeindruck und Materialität getrennt erfassen.

> [!EXAMPLE] Prompt: Vollanalyse
> Analysiere dieses Bild extrem präzise und vollständig für Lernzwecke.
>
> Beschreibe:
> 1. Hauptmotiv
> 2. Form, Farbe, Größe und Materialität
> 3. Oberflächenstruktur und Zustand
> 4. Position im Bild
> 5. Tellerform, Tellerfarbe und Relation zum Motiv
> 6. Hintergrund und Negativraum
> 7. Lichtquelle, Lichtrichtung, Härte, Schatten, Reflexionen
> 8. Perspektive und wahrscheinliche Kamerahöhe
> 9. Brennweiten-Eindruck und Schärfentiefe
> 10. Stil oder Medium
> 11. Bildwirkung
> 12. Was Anfänger bei diesem Bild typischerweise übersehen
>
> Formuliere danach einen präzisen Prompt, mit dem dieses Bild möglichst ähnlich neu erzeugt werden könnte.

#### Aufgabe 3: Reflexion
Die Lernenden vergleichen ihre Beschreibung mit der KI-Analyse.

> [!QUESTION] Reflexionsfragen
> - Habe ich nur das Objekt beschrieben oder auch das Bild?
> - Habe ich Licht nur als „hell“ bezeichnet oder genauer?
> - Habe ich Position und Perspektive erwähnt?
> - Habe ich Materialität genannt?
> - Habe ich Bildwirkung oder Stil erfasst?
> - Was habe ich vergessen oder nur implizit gesehen?

---

### Phase 2: Komplexität steigern

#### Aufgabe 4: Mehrere Objekte
**Bild:** Tasse, Apfel und Buch auf einem Tisch.

![Komposition mit mehreren Objekten](media/idee02_mehrereobjekte.png)

Hier lernen die Studierenden, dass nicht nur Objekte wichtig sind, sondern auch Größenverhältnisse, Abstände und visuelle Dominanz.

> [!EXAMPLE] Prompt: Analyse mehrerer Objekte
> Analysiere dieses Bild so, dass ein Anfänger lernt, wie man mehrere Objekte nicht nur aufzählt, sondern räumlich und kompositorisch beschreibt.
>
> Gehe auf folgende Punkte ein:
> - Welche Objekte sind sichtbar?
> - Welches Objekt dominiert visuell?
> - Wo liegt welches Objekt genau?
> - Wie wirken Größenverhältnisse und Abstände?
> - Wie wird der Blick durch das Bild geführt?
> - Welche Rolle spielen Hintergrund und Freiraum?

#### Aufgabe 5: Kleine Szene mit Tiefenstaffelung
**Bild:** Tasse links vorne, schlafende Katze daneben, grüner Apfel rechts hinten.

![Tiefenstaffelung: Vorder-, Mittel- und Hintergrund](media/idee03_mehrereobjekte2.png)

Jetzt werden Vordergrund, Mittelgrund und Hintergrund explizit eingeführt.

> [!EXAMPLE] Prompt: Tiefenstaffelung
> Zerlege das Bild in Vordergrund, Mittelgrund und Hintergrund.
> Beschreibe für jedes Element:
> - genaue Position
> - relative Größe
> - Schärfe oder Unschärfe
> - Licht
> - Beziehung zu den anderen Elementen
>
> Erkläre außerdem, warum die reine Nennung der Objekte nicht reicht, um das Bild gut nachzuprompten.

#### Aufgabe 6: Wimmelbild
**Bild:** Marktszene, Bahnhof oder Straßencafé mit vielen Menschen und Objekten.

![Komplexe Szene: Marktplatz](media/idee04_wimmelbild.png)

Bei komplexen Bildern muss die Beschreibung priorisieren und clustern.

> [!EXAMPLE] Prompt: Komplexe Szenenanalyse
> Analysiere dieses komplexe Bild strukturiert und in sinnvoller Reihenfolge:
> 1. Gesamteindruck
> 2. Hauptszene
> 3. Vordergrund, Mittelgrund, Hintergrund
> 4. Linke/Rechte Bildhälfte
> 5. Licht und Atmosphäre
> 6. Drei wichtigste Subjekte
> 7. Details, die leicht übersehen werden
>
> Erstelle am Ende eine kurze Liste von Hauptmotiven, Kontextmotiven und möglichen Störfaktoren.

---

### Phase 3: Von Analyse zu Generierung

#### Aufgabe 7: Erstes einfaches Bild erzeugen
Jetzt erzeugen die Lernenden selbst ein Bild auf Basis einer sauberen Beschreibung (Subject/Scene → Composition/Camera → Lighting → Look/Constraints).

**Beispielprompt (Erdbeere):**
> Fotorealistisches Bild einer einzelnen reifen Erdbeere auf einem weißen Keramikteller, zentrierte Komposition, eye-level Nahaufnahme, 50mm Lens-Look, weiches diffuses Licht von links, sanfte Schatten, neutraler heller Hintergrund, appetitliche natürliche Farben, realistische Oberflächenstruktur, keine weiteren Objekte.

#### Aufgabe 8: Nur ein Parameter ändern
Die Lernenden ändern jetzt genau **einen** Aspekt, um die Wirkung einzelner Variablen zu verstehen.

> [!TIP] Mögliche Variationen
> - Erdbeere halbiert statt ganz.
> - Schwarzer statt weißer Teller.
> - Hartes Sonnenlicht statt weiches Licht.
> - Top-down statt eye-level.
> - 85mm statt 50mm Brennweite.

---

### Phase 4: Licht, Stil, Kamera

#### Aufgabe 9: Lichtstudie
Das gleiche Motiv wird mit verschiedenen Licht-Setups erzeugt.

> [!IMPORTANT] Lichtvarianten zum Ausprobieren
> - Weiches Fensterlicht von rechts.
> - Softbox bei 45 Grad.
> - Rembrandt-Licht (dramatisch, Modellierung).
> - Golden Hour (warm, tiefstehende Sonne).
> - Low-key mit Rim Light (dunkel, Lichtkante).
> - Neon Magenta/Cyan (urban, kontrastreich).

#### Aufgabe 10: Stilwechsel
Gleiche Szene, anderer Stil. Stil sollte als klarer „Rendering-Vertrag“ verstanden werden.

> [!TIP] Stilvarianten
> - Smartphone-Foto vs. Studiofoto.
> - Dokumentarfotografie vs. Commercial Product Shot.
> - Comic / Anime Illustration.
> - Aquarell / Ölgemälde.
> - 3D-Render / Pixar-Animation.

#### Aufgabe 11: Kamerastudie
Variation von Perspektiven und Brennweiten.

> [!TIP] Kamera-Optionen
> - **Shotgrößen:** Close-up, Medium shot, Wide shot.
> - **Perspektiven:** Top-down (Flat lay), Eye-level, Low angle.
> - **Brennweiten:** 24mm (weit), 35mm (natürlich), 50mm (neutral), 85mm (Porträt).

---

### Phase 5: Personen und Konsistenz

#### Aufgabe 12: Person einführen
Menschen benötigen mehr Beschreibungsdimensionen (Gesicht, Kleidung, Pose, Mimik).

> [!EXAMPLE] Prompt: Person
> Fotorealistisches Bild einer sitzenden Frau an einem schlichten Holztisch, kurze dunkle Haare, runde Brille, natürliche Hauttextur, durchschnittlicher Körperbau, ruhiger neutraler Gesichtsausdruck, entspannte Schultern, Blick leicht nach unten, weiße Keramiktasse links vorne auf dem Tisch, weiches Fensterlicht von rechts, 50mm Lens-Look, mittlere Schärfentiefe, dokumentarischer Fotostil.

#### Aufgabe 13: Emotion und Pose variieren
Die Person bleibt gleich, aber Ausdruck und Haltung ändern sich. Für Konsistenz sollte möglichst nur eine Variable geändert werden.

#### Aufgabe 14: Character Sheet
Stabilisierung wiederkehrender Figuren durch mehrere Ansichten.

![Character Sheet Referenz](media/character_sheet.png)

> [!EXAMPLE] Prompt: Character Sheet
> Erstelle ein sauberes Character Sheet derselben Person auf neutralem Hintergrund.
> Obere Reihe: front view, left profile, right profile, back view, ganze Figur in entspannter A-pose.
> Untere Reihe: close-up portrait front, left profile, right profile.
> Identische Gesichtszüge, identische Proportionen, konsistentes Licht, klare Paneltrennung.

---

### Phase 6: i2i und Multi-Reference

#### Aufgabe 15: Person in Raum einbringen
Mit einem Raumfoto und einer Figurenreferenz wird die Person in eine reale Szene eingesetzt.

**Raum-Referenz:**
![Raum-Referenz (Studentenzimmer)](media/Gemini_Generated_Image_oa5ochoa5ochoa5o.png)

#### Aufgabe 16: Mehrere Referenzen kombinieren
Person, Ort und Objekt kommen aus getrennten Vorlagen zusammen.

> [!EXAMPLE] Prompt: Multi-Reference
> Use the character reference for identity, the room reference for scene structure, and the object reference for the apple. Place the woman seated on the floor in the left foreground, the cup on the front edge of the table, and the green apple on the right rear of the table. Match all elements to soft warm evening window light, photorealistic style, realistic materials, consistent perspective.

---

### Bewertungsraster

| Kriterium | Sehr gut | Mittel | Schwach |
| :--- | :--- | :--- | :--- |
| **Motivbeschreibung** | präzise, vollständig, materialbezogen | Hauptmotiv klar, Details lückenhaft | sehr allgemein |
| **Komposition** | Ebenen und Blickführung klar | grundlegende Platzierung | nur Objektliste |
| **Licht** | Richtung, Härte, Schatten präzise | grob erwähnt | fehlt oder unklar |
| **Kamera** | Perspektive und Brennweite sinnvoll | teilweise vorhanden | fehlt fast ganz |
| **Stil** | Medium und Look klar getrennt | Stil grob genannt | vage/widersprüchlich |
| **Iteration** | nur eine Variable pro Runde | mehrere Änderungen simultan | keine Kontrolle |

---

### Unterrichtshinweise & Hausaufgaben

*   **Didaktik:** Prompting als Übersetzung visueller Entscheidungen in Sprache erklären.
*   **Workflow:** Erst Analyse/Zielbeschreibung, danach kompakter Produktionsprompt.
*   **Hausaufgabe:** Dieselbe Szene dreimal generieren, dabei jeweils nur einen Hebel ändern (Licht, Brennweite oder Stil).
*   **Reverse-Aufgabe:** Ein erzeugtes Bild wieder analysieren und in seine Bestandteile zerlegen.

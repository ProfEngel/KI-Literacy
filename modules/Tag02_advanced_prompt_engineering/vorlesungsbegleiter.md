# Vorlesungsbegleiter: Advanced Prompt Engineering

Die Qualität des Outputs einer KI hängt zu 100 % von der Qualität des Inputs ab ("Garbage in, garbage out"). In diesem Modul professionalisieren wir unsere Prompts.

## 1. Anatomie des perfekten Prompts (Das 6-Elemente-Modell)
Ein professioneller Prompt überlässt nichts dem Zufall. Er besteht im Idealfall aus 6 Elementen:
1. **Aufgabe (Task):** Was genau soll getan werden? (z.B. "Erstelle eine Zusammenfassung")
2. **Kontext (Context):** Welcher Hintergrund ist wichtig? (z.B. "Für ein Startup-Pitch-Deck")
3. **Beispiel (Exemplar):** Wie soll das Muster aussehen? (Siehe Few-Shot).
4. **Persona:** Welche Rolle soll die KI einnehmen? (z.B. "Du bist ein erfahrener CFO")
5. **Format:** Wie soll die Ausgabe strukturiert sein? (z.B. "Als Tabelle", "Als JSON")
6. **Ton (Tone):** Wie soll die Sprache klingen? (z.B. "Formell", "Motivierend")

### 📝 Übung: Prompts umschreiben
Nimm deinen Kaltstart-Prompt aus Modul 1 und baue ihn nach dem 6-Elemente-Modell um. Beobachte den massiven Qualitätsunterschied.

## 2. Few-Shot Prompting & Forciertes Chain-of-Thought (CoT)
- **Zero-Shot:** Du gibst der KI eine Aufgabe ohne Beispiele.
- **Few-Shot:** Du zeigst der KI vorab 2-3 gelöste Beispiele im Prompt. KIs sind hervorragende Muster-Erkenner. Das zwingt die KI in das gewünschte Ausgabekorsett.
- **Forciertes CoT:** Füge den Satz *"Lass uns das Schritt für Schritt durchdenken"* (Let's think step by step) an. Die KI muss dann ihren Lösungsweg generieren. Da KIs auf dem basieren, was sie zuletzt generiert haben, verbessert das "laute Denken" die mathematische und logische Genauigkeit enorm.

### 📝 Übung: Break-Even mit Few-Shot
Gib der KI eine Break-Even-Rechnung auf. Stelle ihr im Prompt zwei fertig berechnete Beispiele (z.B. für einen Limonadenstand und ein Software-Abo) als Referenz zur Verfügung.

## 3. Context Window & Context Engineering
Das Context Window ist das "Kurzzeitgedächtnis" der KI (z.B. 128.000 Tokens). 
- **Das Problem:** "Lost in the Middle". KIs erinnern sich perfekt an den Anfang und das Ende eines langen Prompts, vergessen aber oft Details in der Mitte. Zudem lenkt irrelevanter Text ("Rauschen") die KI ab (Attention-Verwässerung).
- **Die Lösung (Context Engineering):** Bevor du unstrukturierte PDF-Texte in den Prompt wirfst, bereinige sie. Entferne irrelevante Passagen manuell oder durch einen vorgeschalteten "Reinigungs-Prompt".

## 4. System-Prompts & Mega-Prompts
Ein System-Prompt ist die unsichtbare Grundregel, die vor jedem Nutzer-Prompt steht. Hier definierst du das Verhalten, Tabus und die Persona (z.B. "Du bist ein hilfreicher Assistent. Du darfst niemals medizinischen Rat geben.").
- **Mega-Prompts:** Sehr umfangreiche, komplexe Anweisungen, die oft mit Markdown-Strukturierung (Überschriften, Listen) arbeiten, um der KI das Lesen (die Attention) zu erleichtern.

---
[[Projekt_KI_VL]]

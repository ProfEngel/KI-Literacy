# Data Science Verstehen: Die KI als analytisches Werkzeug

## 1. Was ist ein Code Interpreter?

Ein Code Interpreter ist ein **isoliertes Labor (Sandbox)**, in dem die KI Python-Code schreiben und sofort ausführen kann. 

### Der Unterschied zu herkömmlichem Chat:
- **Normaler Chat (System 1):** Die KI „errät“ das nächste Wort (statistische Wahrscheinlichkeit). Bei komplexer Mathematik führt das oft zu Halluzinationen.
- **Code Interpreter (System 2):** Die KI erkennt, dass eine Aufgabe Logik oder Berechnung erfordert. Sie schreibt ein Programm, führt es aus und liest das Ergebnis ab. Das Ergebnis ist faktisch korrekt, sofern der Code logisch richtig ist.

### Die Metapher: Der Laborassistent
Stellen Sie sich die KI als einen Assistenten vor. 
- Ohne Code Interpreter versucht der Assistent, chemische Reaktionen aus dem Gedächtnis zu beschreiben (und irrt sich vielleicht). 
- Mit Code Interpreter geht der Assistent in ein abgetrenntes Labor, führt das Experiment unter kontrollierten Bedingungen durch und kommt mit dem exakten Messergebnis zurück.

![Metapher: Die Code-Interpreter Sandbox](./assets/sandbox_metapher.png)
*Abbildung 1: Die Sandbox als geschützter Raum für logische Berechnungen und Datenanalyse.*

---

## 2. Der Workflow: Denken – Handeln – Interpretieren (ReAct)

KI-gestützte Data Science folgt meist dem **ReAct-Pattern** (Reason + Act):

1. **Gedanke (Reasoning):** „Der Nutzer will den Umsatztrend wissen. Ich muss die CSV laden, die Datumsspalte konvertieren und ein Liniendiagramm zeichnen.“
2. **Handlung (Action):** Die KI schreibt den Python-Code und sendet ihn an den Jupyter-Kernel.
3. **Beobachtung (Observation):** Der Kernel gibt die Tabelle oder das Bild zurück.
4. **Interpretation:** Die KI erklärt dem Nutzer: „Wie man im Chart sieht, stieg der Umsatz im März um 15 %.“

---

## 3. Explorative Datenanalyse (EDA) – Der „Putzplan“ für Daten

Bevor wir Modelle rechnen, müssen wir die Daten verstehen und säubern. In der BWL-Praxis sind Daten oft „schmutzig“.

### Phasen der EDA:
- **Strukturprüfung:** Welche Spalten gibt es? (Strings, Floats, Integers?)
- **Missing Values:** Wo fehlen Daten? Sollten wir Zeilen löschen oder Werte schätzen (Imputation)?
- **Outlier Detection:** Gibt es Extremwerte (z. B. ein Tippfehler beim Preis: 1.000.000 € statt 100 €)?
- **Deskriptive Statistik:** Mittelwerte, Mediane und Standardabweichungen verstehen.

---

## 4. Warum Python? (Auch für Nicht-Programmierer)

Python ist die Weltsprache der Daten. Als BWLer müssen Sie den Code nicht selbst schreiben können, aber Sie sollten die **Code Literacy** besitzen, um zu verstehen, was die KI tut:
- Nutzt sie die richtige Formel?
- Hat sie die Filter korrekt gesetzt?
- Sind die Achsen im Diagramm richtig beschriftet?

---

## 5. Statistische Modellierung & Business Insights (Tag 7)

In der zweiten Phase geht es darum, aus den bereinigten Daten **Wissen** zu generieren.

### Modellierung:
- **Regression:** Wie beeinflusst Variable A (z. B. Werbeausgaben) die Variable B (z. B. Umsatz)?
- **Klassifikation:** Gehört ein Kunde zur Gruppe „Käufer“ oder „Nicht-Käufer“?

### Der „Management-Translator“:
Die größte Stärke der KI im Data-Science-Kontext ist die Übersetzung. Ein statistischer Output wie `p-value = 0.042` ist für viele Manager wertlos. Die KI kann dies übersetzen in: „Mit einer statistischen Sicherheit von über 95 % können wir sagen, dass unsere Marketingkampagne den Absatz signifikant gesteigert hat.“

---

## 6. Visualisierung & Dashboarding

Daten werden erst durch Visualisierung greifbar. 
- **Matplotlib/Seaborn:** Für statische, druckreife Grafiken in Berichten.
- **Plotly:** Für interaktive Grafiken, in denen man zoomen und Werte ablesen kann.

- **Sandbox-Limits:** Der Interpreter hat keinen Zugriff auf das Internet (Sicherheit) und nur begrenzten Speicher/CPU.
- **Garbage In, Garbage Out:** Wenn die Datenbasis falsch ist, hilft auch der beste Code nicht.
- **Logik-Fehler:** Die KI kann Code schreiben, der technisch läuft, aber inhaltlich keinen Sinn ergibt (z. B. Korrelation mit Kausalität verwechseln).

---
[[Projekt_KI_VL]]

# Vorlesungsbegleiter: KI-Driven Data Science (Tag 6 & 7)

Dieses Dokument führt dich chronologisch durch die Vorlesungstage 6 und 7. Wir wechseln zwischen theoretischem Input und praktischen Laborübungen direkt am Code Interpreter.

---

# 🛠️ TAG 6: Datenbändigung & Aufbereitung

## 1. Theorie: Die KI als "Junior Data Scientist"
Bevor wir starten, müssen wir verstehen, wie die KI mit Daten arbeitet. Anders als bei der normalen Textgenerierung nutzt die KI hier einen **Code Interpreter**.

### Das Sandbox-Konzept
Der Code Interpreter ist eine isolierte Umgebung (Sandbox), in der die KI Python-Code schreiben und ausführen kann. 
- **Vorteil:** Die KI rät nicht das Ergebnis einer Rechnung, sondern berechnet es präzise.
- **Workflow:** Die KI erkennt eine Aufgabe (z. B. "Erstelle einen Chart"), schreibt den Code, führt ihn in der Sandbox aus und zeigt dir das Ergebnis (Tabelle, Bild, Datei).

### Code Literacy für BWLer
Du musst kein Programmierer sein, aber du solltest den Code "lesen" können (Code Literacy):
- Nutzt die KI die richtigen Filter?
- Werden Ausreißer sinnvoll behandelt?
- Sind die Achsen im Diagramm korrekt beschriftet?

---

## 2. Labor: Erster Kontakt & Systemtest
**Ziel:** Sicherstellen, dass die Verbindung zum Jupyter-Kernel steht.

**Übung 1: Der Fibonacci-Check**
> **Prompt:** "Berechne die ersten 15 Fibonacci-Zahlen unter Nutzung deines Code Interpreters. Erstelle anschließend ein Balkendiagramm, das die Werte zeigt. Nutze eine ästhetische Farbpalette."

*Prüfe: Erscheint der `<code_interpreter>` Block? Wird die Grafik direkt gerendert?*

---

## 3. Theorie: Datenreinigung & EDA
In der Realität sind Daten "schmutzig" (Missing Values, falsche Formate). Die **Explorative Datenanalyse (EDA)** ist der erste Schritt jeder Untersuchung.

### Schritte der EDA:
1. **Struktur prüfen:** Welche Spalten gibt es? (`df.info()`)
2. **Statistik:** Mittelwerte, Min/Max. (`df.describe()`)
3. **Bereinigung:** Missing Values füllen oder Zeilen löschen.
4. **Encoding:** Text (z. B. "Sonne", "Regen") in Zahlen umwandeln (0, 1).

---

## 4. Labor: Datenreinigung (Live-Daten)
**Ziel:** KI-gestützte Aufbereitung von Daten direkt aus dem Netz.

**Übung 2: Online-Datensätze bändigen**
> **Prompt:** "Analysiere folgende zwei Datensätze direkt über ihre URLs:
> 1. `https://raw.githubusercontent.com/ProfEngel/KI-Literacy/refs/heads/main/datascience/data/GolfSpielen.csv`
> 2. `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Schwertlilie_missingvalues.csv`
>
> **Aufgabe:** Prüfe beide auf fehlende Werte, bereinige sie (Imputation) und wandle kategoriale Werte in numerische um. Zeige mir die bereinigten Header."

---

## 5. Labor: Korrelationen erkennen
**Übung 3: Die Heatmap**
> **Prompt:** "Erstelle eine Korrelationsmatrix für den bereinigten Golf-Datensatz. Welche Faktoren haben den größten Einfluss darauf, ob Golf gespielt wird? Visualisiere die Korrelationen in einer Heatmap (Seaborn)."

---

# 📊 TAG 7: Analyse, Modellierung & Kommunikation

## 6. Theorie: Statistische Modellierung
Heute gehen wir einen Schritt weiter: Wir wollen die Zukunft vorhersagen.

### Konzepte:
- **Regression:** Wie beeinflusst Variable A (Werbung) die Variable B (Umsatz)?
- **Klassifikation:** Gehört ein Kunde zur Gruppe „Käufer“ oder „Nicht-Käufer“?

Die KI hilft uns, Modelle (Decision Trees, Random Forest) zu trainieren, ohne dass wir die Mathematik dahinter programmieren müssen.

---

## 7. Labor: Modellierung in der Praxis
**Ziel:** Vorhersagen treffen und Modelle vergleichen.

**Übung 4: Das Klassifikationsmodell**
> **Prompt:** "Nutze die Golf-Daten, um ein einfaches Klassifikationsmodell zu trainieren. Zielvariable ist 'Spielen'. Teile die Daten in Training und Test-Set. Gib die Genauigkeit (Accuracy) und eine Confusion Matrix aus. Vergleiche mindestens zwei verschiedene Algorithmen."

---

## 8. Theorie: Der Management-Translator
Ein statistischer Output wie `p-value = 0.042` ist für Manager oft schwer zu greifen. Die KI fungiert hier als Übersetzer.

**Die Aufgabe der KI:**
- Ergebnisse interpretieren ("Mit 95% Sicherheit...").
- Handlungsempfehlungen ableiten ("Marketing hochfahren bei Sonne > 25°C").

---

## 9. Labor: Kommunikation & Visualisierung
**Ziel:** Daten für Entscheider aufbereiten.

**Übung 5: Das Management Summary**
> **Prompt:** "Basierend auf dem Modell aus Übung 4: Erstelle ein kurzes Management Summary (max. 3 Bulletpoints). Erkläre, unter welchen Wetterbedingungen wir das Marketing hochfahren sollten und wie sicher wir uns dabei statistisch sind."

**Übung 6: Interaktive Charts**
> **Prompt:** "Erstelle ein interaktives Diagramm mit Plotly, das den Zusammenhang zwischen Temperatur und der Spielentscheidung zeigt. Sorge für Hover-Effekte."

---

## 10. Finale Challenge: Mathematische Kunst
**Übung 7: Die Mandelbrot-Menge**
> **Prompt:** "Generiere eine hochauflösende Visualisierung der Mandelbrot-Menge mittels Python. Nutze eine ästhetische Farbpalette und speichere das Bild als PNG."

---
[[Projekt_KI_VL]]

# Prompt-Katalog: AI Data Science & Code Interpreter

Diese Sammlung enthält strukturierte Musterprompts für die gesamte Data Science Pipeline. Nutze sie, um den Code Interpreter in OpenWebUI präzise zu steuern.

---

## 🛠️ Der LLM-Workflow (Empfohlen)

Die effektivste Methode ist es, der KI erst den Kontext (Datensatz-URL) zu geben und sie dann schrittweise durch die Pipeline zu führen. Nutze den **„Zwei-Phasen-Vertrag“** (erst Code, dann Interpretation).

---

## 📋 Die Data Science Pipeline (Musterprompts)

### 1. Daten-Ingestion & Erster Blick
*Ziel: Den Datensatz laden und die Struktur verstehen.*

**Datensatz:** `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/titanic.csv`

**Prompt:**
> "Lade den Titanic-Datensatz über die URL und gib mir einen ersten Überblick. 
> 1. Zeige die ersten 5 Zeilen.
> 2. Welche Spalten haben fehlende Werte?
> 3. Gib eine statistische Zusammenfassung der numerischen Werte aus."

---

### 2. Preprocessing & Cleaning (Dirty Data)
*Ziel: Daten für die Analyse vorbereiten.*

**Datensatz:** `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Schwertlilie_missingvalues.csv`

**Prompt:**
> "Untersuche den Schwertlilien-Datensatz auf fehlende Werte (NaN).
> 1. Führe eine Imputation durch (z. B. Mittelwert für numerische Spalten).
> 2. Prüfe auf Duplikate und entferne diese.
> 3. Wandle die Zielvariable (Spezies) in numerische Labels um."

---

### 3. Explorative Datenanalyse (EDA)
*Ziel: Muster und Korrelationen erkennen.*

**Datensatz:** `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/GolfSpielen.csv`

**Prompt:**
> "Führe eine EDA für den Golf-Datensatz durch.
> 1. Erstelle Histogramme für die numerischen Merkmale (Temperatur, Feuchtigkeit).
> 2. Erstelle eine Korrelations-Heatmap.
> 3. Welches Merkmal hat den stärksten Einfluss auf die Entscheidung 'Spielen'?"

---

### 4. Statistische Modellierung (Regression/Klassifikation)
*Ziel: Vorhersagemodelle trainieren.*

**Datensatz:** `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`

**Prompt:**
> "Führe eine Regression auf dem Boston Housing Datensatz durch. Zielvariable ist `medv`.
> 1. Teile die Daten in Training (80%) und Test (20%).
> 2. Trainiere mindestens drei Modelle (z. B. Linear Regression, Random Forest, Gradient Boosting).
> 3. Vergleiche die Performance."

---

### 5. Validierung & Metriken
*Ziel: Die Qualität der Modelle objektiv bewerten.*

**Prompt:**
> "Basierend auf den Modellen aus dem vorherigen Schritt:
> 1. Berechne den MAE, MSE und R²-Score für alle Modelle.
> 2. Erstelle einen Plot, der die 'Actual vs. Predicted' Werte des besten Modells gegenüberstellt.
> 3. Zeige die 'Feature Importance' (Wichtigkeit der Merkmale) an."

---

### 6. Business Insights & Translation
*Ziel: Die Sprache der Daten in Management-Entscheidungen übersetzen.*

**Prompt:**
> "Fasse die Ergebnisse der Boston Housing Analyse für einen Nicht-Experten zusammen.
> 1. Was sind die 3 wichtigsten Preistreiber für Immobilien in Boston?
> 2. Wie sicher ist die Vorhersage des Modells (in Prozent)?
> 3. Welche Handlungsempfehlung gibst du einem Investor basierend auf diesen Daten?"

---

## 🎨 Advanced Visualisierung (Plotly & Spezial-Charts)

### A. Interaktive Scatter-Plots
> "Erstelle einen interaktiven Plotly-Scatterplot für den Titanic-Datensatz. X-Achse: Alter, Y-Achse: Ticketpreis. Farbe: Überlebt (Ja/Nein). Füge Hover-Effekte mit Namen und Klasse hinzu."

### B. Zeitreihen-Analyse
> "Lade den Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/AirPassengers.csv`. Visualisiere den Trend über die Zeit und führe eine saisonale Dekomposition durch."

---

## 🛡️ Best Practices für Prompts

1. **Präzision:** Nenne immer die Zielvariable explizit (z. B. "Zielvariable ist `medv`").
2. **Methodik:** Fordere die KI auf, ihr Vorgehen zu begründen ("Warum hast du dieses Encoding gewählt?").
3. **Visualisierung:** Gib immer an, welches Package genutzt werden soll (Seaborn für statisch, Plotly für interaktiv).
4. **Validierung:** Nutze den Prompt: "Prüfe den Code auf logische Fehler, bevor du ihn ausführst."

---
[[Projekt_KI_VL]]

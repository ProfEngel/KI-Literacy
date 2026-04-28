# Prompt-Katalog: AI Data Science & Code Interpreter

Diese Sammlung enthält strukturierte Musterprompts für die gesamte Data Science Pipeline. Jeder Prompt ist so konzipiert, dass er direkt einen realen Datensatz aus dem Web lädt.

---

## 📋 1. Datenvorbereitung & Cleaning
*Fokus: Datenqualität sicherstellen.*

### A. Missing Values & Imputation
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/Schwertlilie_missingvalues.csv` und untersuche ihn auf fehlende Werte.
> 1. Identifiziere alle Spalten mit NaN-Werten.
> 2. Wende eine sinnvolle Imputation an (z. B. Mittelwert für numerische Spalten).
> 3. Vergleiche die Statistik vor und nach der Bereinigung."

### B. Ausreißer (Outlier Detection)
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/bostonhousing.csv`.
> 1. Prüfe die Zielvariable `medv` auf Ausreißer mittels Boxplot und IQR-Methode.
> 2. Identifiziere extrem hohe Immobilienpreise und diskutiere, ob diese für ein Modell repräsentativ sind.
> 3. Visualisiere die Verteilung mit und ohne Ausreißer."

### C. Imbalanced Datasets (Ungleichverteilung)
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/Titanic_small.csv`.
> 1. Prüfe die Verteilung der Zielvariable `Survived`. Liegt ein Klassen-Ungleichgewicht vor?
> 2. Bereite die Daten so vor, dass die KI beim Modelltraining ein Oversampling (z. B. SMOTE) oder Undersampling vorschlägt, um die Vorhersagequalität für die Minderheitsklasse zu erhöhen."

---

## 🤖 2. Machine Learning & Algorithmen
*Fokus: Logik und Modell-Visualisierung.*

### A. Entscheidungsbäume (Decision Trees)
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/GolfSpielen.csv`.
> 1. Trainiere einen Entscheidungsbaum, um die `Klassenvorhersage` (Spielen: Ja/Nein) basierend auf dem Wetter zu prognostizieren.
> 2. Visualisiere den Baum grafisch, damit die Entscheidungsregeln (Sonne, Feuchtigkeit etc.) klar erkennbar sind."

### B. Clustering (K-Means)
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/Schwertlilie.csv`.
> 1. Führe eine K-Means Clusteranalyse durch, um die Blumen ohne Nutzung des Labels `Species` zu gruppieren.
> 2. Bestimme die optimale Clusteranzahl via Elbow-Plot.
> 3. Visualisiere die resultierenden Cluster in einem Scatterplot."

### C. Association Rules (Warenkorbanalyse)
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/shopping_trends_updated.csv`.
> 1. Suche nach Mustern im Kaufverhalten (z. B. Zusammenhang zwischen Kategorie und Review-Rating).
> 2. Wende Assoziationsregeln an, um herauszufinden, welche Produktgruppen häufig gemeinsam (oder von ähnlichen Altersgruppen) gekauft werden."

---

## 📝 3. Text Mining & Sentiment Analyse
*Fokus: Sprache in Daten verwandeln.*

### A. Word Clouds & Sentiment
> "Lade den Text-Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/main/VW_Tweets_Dieselskandal_2016.xlsx`.
> 1. Führe eine Textbereinigung (Stopwords, Lemmatisierung) durch.
> 2. Erstelle eine Word Cloud der meistgenannten Begriffe.
> 3. Führe eine Sentiment-Analyse durch: War die Stimmung in den Tweets überwiegend negativ?"

---

## 🕸️ 4. Spezial-Visualisierungen
*Fokus: Komplexe Zusammenhänge grafisch darstellen.*

### A. Geo-Mapping (Crime Map)
> "Lade den Datensatz von `https://raw.githubusercontent.com/ProfEngel/datasets/main/PhildalphiaCrimeActivites_UTF8.csv`.
> 1. Erstelle eine Karte (Heatmap) der Kriminalitätsschwerpunkte in Philadelphia basierend auf den Koordinaten.
> 2. Nutze eine interaktive Karte (Plotly/Folium), um die Verteilung nach Tageszeit zu visualisieren."

### B. Netzwerkanalyse (Zusammenhänge)
> "Nutze den Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/main/Global_YouTube_Statistics_UTF8.csv`.
> 1. Erstelle eine Netzwerkgrafik, welche die Top-Kategorien mit den erfolgreichsten Ländern verbindet.
> 2. Visualisiere die Stärke der Verbindung durch die Dicke der Linien (Anzahl der Kanäle)."

---

## 📈 5. Zeitreihen & Finanzen (Yahoo Finance)
*Fokus: Trends und Prognosen.*

### A. Yahoo Finance: NVIDIA (NVDA)
> "Nutze die Bibliothek `yfinance`, um die Kurse von NVIDIA (`NVDA`) der letzten 2 Jahre zu laden.
> 1. Visualisiere den Kursverlauf inkl. 50-Tage und 200-Tage Durchschnitt.
> 2. Berechne die tägliche Volatilität.
> 3. Erstelle eine Prognose für die nächsten 30 Tage mittels einer einfachen Trend-Fortschreibung oder eines ARIMA-Modells."

---

## 🛡️ Best Practices
1. **Raw-URLs nutzen:** Achte darauf, immer den `raw`-Link von GitHub zu verwenden, damit die KI die Datei direkt einlesen kann.
2. **Daten-Souveränität:** Durch den lokalen Docker-Container bleiben deine Daten privat, während die KI nur den Analyse-Code schreibt.
3. **Validierung:** Hinterfrage immer die "Feature Importance" eines Modells.

---
[[Projekt_KI_VL]]

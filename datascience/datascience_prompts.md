# Prompt-Katalog: AI Data Science & Code Interpreter

Diese Sammlung enthält strukturierte Musterprompts für die gesamte Data Science Pipeline sowie spezialisierte Analysen (Text Mining, Geo, Zeitreihen).

---

## 📋 1. Datenvorbereitung & Cleaning (The Dirty Work)
*Fokus: Datenqualität und Vorverarbeitung für Machine Learning.*

### A. Missing Values & Imputation
> "Untersuche den Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Schwertlilie_missingvalues.csv`. 
> 1. Identifiziere Spalten mit fehlenden Werten.
> 2. Wende unterschiedliche Strategien an: Mittelwert-Imputation für numerische Werte und Mode-Imputation für kategoriale Werte.
> 3. Vergleiche die Verteilung vor und nach der Imputation in einem Histogramm."

### B. Ausreißer (Outlier Detection)
> "Prüfe den Boston Housing Datensatz (`medv`) auf Ausreißer.
> 1. Nutze die IQR-Methode (Interquartilsabstand), um Extremwerte zu identifizieren.
> 2. Visualisiere die Ausreißer in einem Boxplot.
> 3. Diskutiere, ob die Ausreißer entfernt oder transformiert werden sollten."

### C. Imbalanced Datasets (Ungleichverteilung)
> "Prüfe die Zielvariable im Titanic-Datensatz (`Survived`). 
> 1. Liegt eine starke Ungleichverteilung vor?
> 2. Falls ja, wende SMOTE (Synthetic Minority Over-sampling Technique) oder einfaches Undersampling an, um die Klassen für das Modelltraining auszugleichen."

---

## 🤖 2. Machine Learning & Algorithmen
*Fokus: Modellierung und Visualisierung komplexer Logik.*

### A. Entscheidungsbäume (Decision Trees) mit Visualisierung
> "Trainiere einen Entscheidungsbaum auf dem `GolfSpielen.csv` Datensatz.
> 1. Zielvariable: `Klassenvorhersage`.
> 2. Visualisiere den fertigen Baum grafisch (plot_tree), damit ich die Entscheidungslogik nachvollziehen kann.
> 3. Welche Merkmale stehen an der Wurzel des Baums?"

### B. Clustering (K-Means)
> "Führe eine K-Means Clusteranalyse auf dem Iris-Datensatz durch.
> 1. Nutze die Elbow-Methode, um die optimale Anzahl an Clustern (k) zu bestimmen.
> 2. Visualisiere die Cluster in einem 2D-Scatterplot (Sepal Length vs. Petal Width)."

### C. Association Rules (Warenkorbanalyse)
> "Nutze den Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Groceries_dataset.csv`.
> 1. Wende den Apriori-Algorithmus an, um Assoziationsregeln zu finden.
> 2. Filtere nach Regeln mit einem Lift > 1.2 und einer Confidence > 0.5.
> 3. Welche Produkte werden am häufigsten zusammen gekauft?"

---

## 📝 3. Text Mining & Sentiment Analyse
*Fokus: Unstrukturierte Texte in Erkenntnisse verwandeln.*

### A. Word Clouds & Frequenzanalyse
> "Lade den Text-Datensatz zu Kundenbewertungen.
> 1. Führe ein Preprocessing durch (Stopwords entfernen, Lemmatisierung).
> 2. Erstelle eine Word Cloud der häufigsten Begriffe.
> 3. Welche Themen dominieren die positiven vs. negativen Bewertungen?"

### B. Sentiment Analyse (VADER / TextBlob)
> "Führe eine Sentiment-Analyse auf den Tweets im Datensatz durch.
> 1. Kategorisiere jeden Tweet als Positiv, Negativ oder Neutral.
> 2. Erstelle ein Tortendiagramm der Sentiment-Verteilung.
> 3. Zeige Beispiele für extrem negative Tweets auf."

---

## 🕸️ 4. Netzwerkanalysen & Spezial-Visualisierungen
*Fokus: Beziehungen und räumliche Daten.*

### A. Netzwerkanalyse (Graph Theory)
> "Lade den Datensatz zu Flugverbindungen zwischen Städten.
> 1. Erstelle einen Graphen mit NetworkX (Knoten = Städte, Kanten = Flüge).
> 2. Berechne die 'Centrality' der Städte (welche Stadt ist der wichtigste Knoten?).
> 3. Visualisiere das Netzwerk grafisch."

### B. Geo-Daten: Philadelphia Crime Map
> "Nutze den Philadelphia Crime Datensatz. 
> 1. Erstelle eine Heatmap der Verbrechensschwerpunkte basierend auf Breiten- und Längengraden.
> 2. Nutze Folium oder Plotly-Express (Mapbox), um die Verteilung interaktiv auf einer Karte anzuzeigen.
> 3. Filtere nach Verbrechensart 'Theft' oder 'Burglary'."

---

## 📈 5. Zeitreihen-Analyse (Time Series)
*Fokus: Trends und Vorhersagen über die Zeit.*

### A. Yahoo Finance: NVIDIA Analyse
> "Nutze die Bibliothek `yfinance`, um die Aktiendaten von NVIDIA (Symbol: NVDA) der letzten 24 Monate zu laden.
> 1. Berechne den gleitenden Durchschnitt (Moving Average) für 20 und 50 Tage.
> 2. Visualisiere den Aktienkurs zusammen mit den Durchschnitten.
> 3. Führe eine statistische Prüfung auf Stationarität durch (Augmented Dickey-Fuller Test)."

### B. Saisonale Dekomposition
> "Nutze den AirPassengers Datensatz. 
> 1. Zerlege die Zeitreihe in Trend, Saisonalität und Residuen (seasonal_decompose).
> 2. Visualisiere die vier Komponenten untereinander.
> 3. Erstelle eine Vorhersage für die nächsten 12 Monate mittels eines ARIMA-Modells."

---

## 🛡️ Best Practices & Tipps
- **Methodik vor Code:** Frage die KI: "Welche Vorverarbeitungsschritte sind für diesen spezifischen Algorithmus (z. B. k-Means) zwingend erforderlich (z. B. Skalierung)?"
- **Visualisierung:** Fordere interaktive Plots (`Plotly`), wenn du Daten explorieren willst, und statische Plots (`Seaborn/Matplotlib`) für Berichte.
- **Validierung:** Lass dir immer die Konfusionsmatrix und den Klassifikationsbericht (`classification_report`) ausgeben, nicht nur die Accuracy.

---
[[Projekt_KI_VL]]

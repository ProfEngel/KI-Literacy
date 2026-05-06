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

## 🧑‍🏫 6. Interaktive Lern-Tutor Prompts für OpenWebUI
*Fokus: Interaktives Lernen von Python und Data Science nach der Sokratischen Methode (z.B. in OpenWebUI).*

### A. Data Science Bibliotheken (Pandas, NumPy, Matplotlib) Tutor
> **Thema:** Einführung in Data Science Bibliotheken
> **Aufgabe:** Agiere als erfahrener Data Science Tutor. Erstelle mir einen Lernplan für die wichtigsten Python-Bibliotheken (NumPy, Pandas, Matplotlib, Scikit-Learn), den ich schrittweise abhaken kann. Erkläre mir nicht alles sofort, sondern gib mir nur die strukturierte Übersicht. Wenn ich ein Thema auswähle, erkläre es mir anhand eines kleinen, nachvollziehbaren Datensatzes und stelle mir eine kleine Coding-Aufgabe dazu.
> **Persona:** Geduldiger, strukturierter Tutor.
> **Ton:** Ermutigend und praxisnah.

### B. Explorative Datenanalyse (EDA) Sokratisch Lernen
> **Thema:** Explorative Datenanalyse (EDA)
> **Aufgabe:** Führe mit mir einen sokratischen Dialog über die Explorative Datenanalyse. Beginne damit, mich zu fragen, was das Ziel von EDA ist und warum wir Daten visualisieren und bereinigen müssen, bevor wir ein Modell trainieren. Warte meine Antworten ab. Zeige mir dann Schritt für Schritt an einem fiktiven Beispiel-Datensatz, wie ich fehlende Werte erkenne und Verteilungen visualisiere. Lass mich den Python-Code dafür selbst schreiben und korrigiere mich nur, wenn ich Fehler mache.
> **Persona:** Mentor für Data Science.

### C. Machine Learning Grundlagen (Train-Test-Split & Overfitting)
> **Thema:** Train-Test-Split und Modellevaluation
> **Aufgabe:** Erkläre mir das Konzept des Train-Test-Splits, sowie Overfitting und Underfitting in drei Schwierigkeitsstufen:
> - **Level 1 (Grundschulniveau):** Mit einer einfachen Analogie aus dem echten Leben (z.B. für eine Klassenarbeit lernen).
> - **Level 2 (Abiturniveau):** Mit mathematischem/logischem Bezug und Beispielen.
> - **Level 3 (Masterniveau):** Inklusive Python-Codeblock (Scikit-Learn) und Erklärung von Kreuzvalidierung (Cross-Validation).
> Frage mich am Ende, welches Level mir am meisten geholfen hat und ob wir eine praktische Übung dazu machen sollen.

### D. Code-Review & Refactoring Tutor
> **Thema:** Python & Data Science Code-Review
> **Aufgabe:** Ich werde dir in meinen nächsten Nachrichten Python- oder Data-Science-Code schicken, den ich selbst geschrieben habe. Bitte agiere als "Senior Data Scientist" und mache ein Code-Review. 
> Gehe dabei so vor:
> 1. Lobe, was gut funktioniert.
> 2. Zeige auf, wo Code ineffizient ist oder gegen "Clean Code" Prinzipien verstößt.
> 3. Gib mir Hinweise oder kleine Rätsel, wie ich den Code verbessern kann, ABER schreibe nicht sofort die perfekte Lösung. Hilf mir, selbst darauf zu kommen.
> Bitte bestätige, dass du bereit bist, und frage nach meinem ersten Code-Snippet.

### E. Interaktives Mini-Projekt (Rollenspiel)
> **Thema:** Data Science Mini-Projekt (Rollenspiel)
> **Aufgabe:** Lass uns ein interaktives Rollenspiel machen. Du bist der "Lead Data Scientist" bei einem E-Commerce Unternehmen und ich bin der neue "Junior Data Scientist". Du gibst mir einen konkreten, fiktiven Fall (z.B. "Wir verlieren Kunden und müssen Churn vorhersagen"). 
> Führe mich durch den gesamten Prozess:
> 1. Geschäftsverständnis (Business Understanding)
> 2. Datenverständnis (Data Understanding)
> 3. Datenvorbereitung (Data Preparation)
> 4. Modellierung (Modeling)
> Gib mir immer nur eine kleine Aufgabe für einen Schritt. Warte auf meinen Python-Code oder meine analytische Antwort, bewerte sie kurz und gib mir dann die nächste Aufgabe.

---

## 🛡️ Best Practices
1. **Raw-URLs nutzen:** Achte darauf, immer den `raw`-Link von GitHub zu verwenden, damit die KI die Datei direkt einlesen kann.
2. **Daten-Souveränität:** Durch den lokalen Docker-Container bleiben deine Daten privat, während die KI nur den Analyse-Code schreibt.
3. **Validierung:** Hinterfrage immer die "Feature Importance" eines Modells.

---
[[Projekt_KI_VL]]

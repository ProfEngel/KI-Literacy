# Vorlesungsbegleiter: KI-Driven Data Science (Master Guide)

Dieses Dokument ist dein ultimativer Begleiter durch das Data-Science-Modul. Wenn du diesen Guide vollständig durchgearbeitet hast, verstehst und beherrschst du die **Basics von Statistik, Python und Data Science**. Du bist in der Lage, eigenständig eine **Explorative Datenanalyse (EDA)** durchzuführen, sowie statistische Modelle für **Klassifikation und Regression** zu trainieren und zu bewerten.

---

# 🛠️ PHASE 1: Technisches Setup & Deployment

Bevor wir Modelle bauen, müssen wir unser Labor einrichten. Wir nutzen eine isolierte **Docker-Sandbox (Jupyter-Kernel)**, in der die KI autonom Python-Code ausführt. Das löst das Halluzinations-Problem von normalen Chatbots bei Mathematik.

### Schritt 1: Container starten
Navigiere in deinem Terminal in den Ordner `datascience/` und starte die Umgebung:
```bash
docker-compose up -d
```
*Dies startet einen Jupyter-Server auf Port 3005.*

### Schritt 2: Data-Science-Bibliotheken installieren
Damit die KI "schlaue" Dinge tun kann, braucht sie Pakete wie Pandas, Scikit-Learn und Plotly.
Führe im Terminal aus:
```bash
docker exec jupyter-interpreter pip install -r requirements_jupyter.txt
```

### Schritt 3: Anbindung an OpenWebUI
1. Gehe in OpenWebUI auf **Settings > Images & Web Search** (bzw. Code Interpreter).
2. **URL:** `http://host.docker.internal:3005`
3. **Token:** `DEIN_SICHERER_TOKEN` (wie in der `docker-compose.yml` definiert).

![Konfiguration Code Interpreter](assets/einstellungen_code_interpreter.png)

---

# 🧠 PHASE 2: Theorie – Die KI als analytisches Werkzeug

## Der Unterschied zu herkömmlichem Chat (ReAct-Workflow)
Herkömmliche LLMs "erraten" das nächste Wort, was bei Rechnen fehlschlägt. Der **Code Interpreter** fungiert als Laborassistent:
1. **Gedanke (Reasoning):** "Ich muss den Mittelwert berechnen."
2. **Handlung (Action):** Die KI schreibt Python-Code und sendet ihn an Jupyter.
3. **Beobachtung (Observation):** Jupyter führt aus und schickt das Ergebnis zurück.
4. **Interpretation:** Die KI erklärt dir das Ergebnis.

![Metapher: Die Code-Interpreter Sandbox](assets/sandbox_metapher.png)

---

# 📊 PHASE 3: Statistik & Python Grundlagen

Als moderner Manager ("Management Translator") musst du den Code nicht perfekt selbst schreiben können, aber du benötigst **Code Literacy**, um die KI zu kontrollieren.

![Management Translator & Code Literacy](assets/concept_python_basics.jpg)

## Wichtige Python-Bibliotheken
- **Pandas (`pd`):** Datenmanipulation, Tabellen lesen und filtern.
- **NumPy (`np`):** Mathematische Operationen auf Listen/Arrays.
- **Matplotlib / Seaborn:** Statische, druckreife Diagramme.
- **Plotly:** Interaktive Charts für Dashboards.
- **Scikit-Learn (`sklearn`):** Maschinelles Lernen (Regression, Klassifikation).

## Sokratisches Lernen (Python & Statistik)
Wenn du tief in Python oder Statistik einsteigen willst, nutze die bereitgestellten interaktiven Kanäle (siehe `datascience-lernen.md` und `python-lernen.md`). Dort fungiert die KI als dein Tutor.

### 📝 Übung 1: Verteilungen (Histogramme)
> "Lade den Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv` via Code Interpreter. Zeige mir ein Histogramm der Verteilung der Variablen `medv` (Hauspreise). Erkläre mir als Manager in einem Satz, ob die Daten normalverteilt oder schief sind."

![Statistik Verteilungen](assets/stats_distributions.png)

### 📝 Übung 2: Streuung und Varianz (Boxplots)
Statistik ist nicht nur der Mittelwert, sondern auch wie stark die Daten streuen.
> "Nutze den Datensatz `https://raw.githubusercontent.com/ProfEngel/KI-Literacy/refs/heads/main/datascience/data/GolfSpielen.csv`. Erstelle einen Boxplot für die Temperatur. Erkläre mir als KI-Tutor ganz einfach: Was sagt mir die Box in der Mitte und was bedeuten die Enden (Whiskers)?"

### 📝 Übung 3: Zusammenhänge sehen (Scatter Plots)
Bevor man KI-Modelle rechnet, sollte man mit dem bloßen Auge prüfen, ob Variablen zusammenhängen.
> "Lade `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`. Erstelle ein Streudiagramm (Scatter Plot), bei dem auf der X-Achse die Anzahl der Zimmer (`rm`) und auf der Y-Achse der Preis (`medv`) steht. Lege eine rote Trendlinie durch die Punkte und erkläre mir die statistische Kernaussage dieses Bildes."

### 📝 Übung 4: Mittelwert vs. Median (Ausreißer-Check)
Der Durchschnitt ist oft irreführend, wenn es Extreme gibt (z.B. Bill Gates betritt eine Bar).
> "Erzeuge in Python eine Liste mit 9 Gehältern à 40.000 € und einem Gehalt von 2.000.000 €. Berechne den Mittelwert (Mean) und den Median. Erkläre mir, warum ich als Manager bei solchen Daten immer nach dem Median fragen sollte."

### 📝 Übung 5: Die Standardabweichung verstehen
Wie weit weichen Daten im Schnitt vom Zentrum ab?
> "Lade `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`. Berechne die Standardabweichung für das Alter der Häuser (`age`). Erkläre mir in einfachen Worten, was dieser Wert bedeutet: Sind alle Häuser ungefähr gleich alt oder gibt es eine extreme Streuung?"

### 📝 Übung 6: Quantile & Perzentile (Die Top 10%)
Wo verläuft die Grenze für die Elite?
> "Nutze den Datensatz `bostonhousing.csv`. Berechne das 90%-Quantil für den Hauspreis (`medv`). Erkläre mir: Was sagt uns diese Zahl über den Immobilienmarkt in Boston und welche Häuser fallen in diese Kategorie?"

### 📝 Übung 7: Kategorien zählen (Bar Charts)
Häufigkeiten von Text-Kategorien (Klassifikationen) visualisieren.
> "Lade den Datensatz `https://raw.githubusercontent.com/ProfEngel/KI-Literacy/refs/heads/main/datascience/data/GolfSpielen.csv`. Zähle, wie oft es sonnig, regnerisch oder bewölkt ist. Erstelle ein klares Balkendiagramm (Bar Chart) und gib mir die genauen Prozentzahlen dazu."

### 📝 Übung 8: Gruppen vergleichen (Groupby)
Daten nach Kategorien splitten und aggregieren (Pivot-Tabellen-Logik).
> "Nutze den `Titanic_small.csv` Datensatz (`https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Titanic_small.csv`). Gruppiere die Passagiere nach Geschlecht (`Sex`) und berechne die durchschnittliche Überlebensrate (`Survived`). Erstelle ein Balkendiagramm der Ergebnisse und erkläre mir den offensichtlichen Zusammenhang."

---

# 🧹 PHASE 4: Datenreinigung & EDA (Explorative Datenanalyse)

![Metapher Datenreinigung](assets/concept_data_cleaning.jpg)

Bevor Algorithmen rechnen können, müssen die Daten sauber sein. **"Garbage In, Garbage Out!"**

### Herausforderungen in der Datenvorbereitung
- **Missing Values (Fehlende Werte):** Müssen durch *Imputation* (Mittelwert/Median einsetzen) oder durch Löschen der Zeile behandelt werden.
- **Outlier (Ausreißer):** Extremwerte (z.B. Tippfehler bei Preisen) verzerren Modelle.
- **Imbalanced Datasets:** Wenn eine Klasse dominiert (z.B. 99% Kaffee, 1% Cola), helfen Methoden wie **SMOTE** (Über-Sampling).
- **Encoding:** KI braucht Zahlen. Wörter wie "sonnig" oder "regnerisch" müssen in Zahlen (0, 1) gewandelt werden.

### Typische EDA-Befehle (Python-Check)
Achte darauf, dass die KI diese Methoden zur Überprüfung nutzt:
- `df.info()` und `df.describe()` (Struktur und Statistik)
- `df.isnull().sum()` (Fehlende Werte zählen)
- `df.corr()` (Korrelationen aufzeigen)

![EDA Heatmap](assets/eda_heatmap_demo.png)

### 📝 Übung 1: Die Lücken füllen (Missing Values)
> "Analysiere `https://raw.githubusercontent.com/ProfEngel/datasets/main/Schwertlilie_missingvalues.csv`. Zeige mir in einer Tabelle, wie viele Daten pro Spalte fehlen. Wende Imputation (Mittelwert) an, um die Lücken zu schließen, und erkläre mir kurz, warum wir leere Zeilen nicht einfach löschen sollten."

### 📝 Übung 2: Ausreißer jagen (Outliers)
> "Lade den Datensatz `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`. Erstelle einen Boxplot für die Kriminalitätsrate (`crim`). Identifiziere die Ausreißer. Erkläre mir als Manager, ob wir diese Extremwerte aus dem Datensatz entfernen sollten oder nicht."

### 📝 Übung 3: Kategoriale Daten übersetzen (Encoding)
Modelle können nicht mit Text umgehen, wir müssen Wörter in Zahlen übersetzen.
> "Nutze `https://raw.githubusercontent.com/ProfEngel/KI-Literacy/refs/heads/main/datascience/data/GolfSpielen.csv`. Die Spalten 'Wetter' und 'Spielen' sind Text. Wandle sie mittels One-Hot-Encoding in Zahlen um und zeige mir die ersten 5 Zeilen."

### 📝 Übung 4: Die Skalen angleichen (Feature Scaling)
Wenn ein Feature von 0-1 geht und ein anderes von 0-1.000.000, dominiert das größere Feature oft das Modell.
> "Lade erneut `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`. Wende einen StandardScaler auf die Spalten `tax` und `nox` an. Zeige mir in einem Histogramm, wie sich die Verteilung vor und nach dem Skalieren verändert hat."

### 📝 Übung 5: Daten zusammenführen (Joins)
> "Simuliere zwei kleine DataFrames in Python. Tabelle A enthält Kunden_ID und Name. Tabelle B enthält Kunden_ID und Umsatz. Führe einen 'Left Join' auf die Kunden_ID durch und erkläre mir das Ergebnis."

### 📝 Übung 6: Das Ungleichgewicht beheben (SMOTE)
Wenn eine Klasse extrem selten ist, wird das Modell "blind".
> "Lade `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Titanic_small.csv`. Prüfe die Verteilung der Zielvariable `Survived`. Wende die Methode 'SMOTE' an, um die Minderheitsklasse künstlich auszugleichen, und zeige mir ein Balkendiagramm der Verteilung vor und nach SMOTE."

### 📝 Übung 7: Die stärksten Treiber finden (Korrelation)
> "Nutze `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`. Erstelle eine Korrelationsmatrix als Heatmap. Welche Spalte hat den stärksten positiven und welche den stärksten negativen Einfluss auf den Hauspreis (`medv`)? Übersetze das Ergebnis in einen einfachen Management-Satz."

---

# 🤖 PHASE 5: Machine Learning (Klassifikation & Regression)

![Modell-Tuning & Hyperparameter](assets/concept_hyperparameter.jpg)

In der Modellierungsphase generieren wir Wissen aus Daten.

## 1. Modelltypen
- **Regression:** Vorhersage eines kontinuierlichen Wertes (Wie hoch wird der *Preis* sein? Wie viel *Umsatz* machen wir?).
- **Klassifikation:** Vorhersage einer Gruppe/Kategorie (Ist diese E-Mail *Spam* oder *kein Spam*? Wird der Kunde *kaufen* oder *abwandern*?).

![Klassifikation vs Regression](assets/class_vs_reg.png)

## 2. Hyperparameter & Modell-Tuning
Ein Algorithmus wird durch externe Stellschrauben (**Hyperparameter**) gesteuert:
- **Lernrate ($\eta$), Batch-Größe, Anzahl der Schichten.**
- **Overfitting:** Das Modell lernt die Trainingsdaten "auswendig" und scheitert in der Praxis. **Lösung:** Regularisierung (L1/L2), Dropout.
- **Underfitting:** Das Modell ist zu dumm/simpel. **Lösung:** Komplexere Modelle, Feature Engineering.

## 3. Evaluation: Ist das Modell gut?
### Metriken für Klassifikation
- **Genauigkeit (Accuracy):** % der korrekten Vorhersagen (Vorsicht bei ungleich verteilten Daten!).
- **Präzision (Precision):** Vermeidet Fehlalarme.
- **Recall (Sensitivität):** Findet alle tatsächlichen Fälle (z.B. wichtig, um keinen Krebs zu übersehen).
- **F1-Score:** Robuster Durchschnitt aus Präzision und Recall.

### Metriken für Regression
- **MAE (Mean Absolute Error):** Durchschnittliche Abweichung in Originaleinheit (z.B. 2.000 € daneben).
- **MSE / RMSE:** Bestraft extreme Ausreißer stärker (quadriert).
- **R² (R-Quadrat):** Erklärte Varianz (ab 0,7 gilt oft als gut).

### 📝 Übung 1: Überleben auf der Titanic (Klassifikation)
> "Trainiere ein Klassifikationsmodell auf `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Titanic_small.csv` zur Vorhersage von `Survived`. Zeige mir am Ende die Confusion Matrix und Accuracy."

### 📝 Übung 2: Immobilienhaie (Regression)
> "Nutze `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv` und trainiere ein Regressionsmodell für den Preis `medv`. Zeige mir RMSE und R² und erkläre, ob wir dem Modell bei Käufen vertrauen sollten."

### 📝 Übung 3: Cross-Validation (K-Fold)
Ein Modell auf einem einzigen Test-Set zu prüfen, ist oft nicht robust genug.
> "Lade `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Titanic_small.csv`. Wende eine 5-Fold Cross-Validation für einen Random Forest Classifier an. Erkläre mir, warum dieser Wert verlässlicher ist als ein einzelner Train-Test-Split."

### 📝 Übung 4: Hyperparameter-Tuning (GridSearch)
Wir lassen die Maschine automatisch die besten Stellschrauben finden.
> "Nutze den `bostonhousing.csv` Datensatz für einen Decision Tree Regressor. Führe eine GridSearchCV durch, um die optimalen Werte für `max_depth` und `min_samples_split` zu finden. Wie sehr verbessert sich das R² dadurch?"

### 📝 Übung 5: Modelle gegeneinander antreten lassen (AutoML)
> "Lade den Titanic-Datensatz. Trainiere gleichzeitig eine Logistic Regression, einen Decision Tree und einen Random Forest. Erstelle eine Tabelle, in der du Accuracy, Precision und Recall der drei Modelle vergleichst. Welches Modell gewinnt und warum?"

### 📝 Übung 6: Feature Importance (Blick unter die Haube)
Welche Variablen haben die Vorhersage am meisten beeinflusst?
> "Nutze das beste Modell aus Übung 5 (Random Forest auf Titanic). Erstelle ein Balkendiagramm der 'Feature Importance'. Was war der wichtigste Faktor, um auf der Titanic zu überleben? Übersetze diese Erkenntnis für das Management."

---

# 🧪 PHASE 6: Das Data Science Labor (Praxis-Übungen)

![Data Science Labor Sandbox](assets/concept_sandbox_lab.jpg)

Führe diese Übungen chronologisch in OpenWebUI mit aktiviertem Jupyter-Tool durch.

### Aufgabe 1: Der Funktionstest (Fibonacci & Grafik)
**Ziel:** Verbindung zum Jupyter-Kernel testen.
> "Berechne die ersten 15 Fibonacci-Zahlen unter Nutzung deines Code Interpreters. Erstelle ein Balkendiagramm mit einer ästhetischen Farbpalette."

### Aufgabe 2: Datenreinigung (Missing Values & Encoding)
**Ziel:** KI-gestützte Aufbereitung von realen (unsauberen) Daten.
> "Analysiere folgende Datensätze direkt über ihre URLs:
> 1. `https://raw.githubusercontent.com/ProfEngel/KI-Literacy/refs/heads/main/datascience/data/GolfSpielen.csv`
> 2. `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Schwertlilie_missingvalues.csv`
> **Aufgabe:** Prüfe auf fehlende Werte, wende Imputation an und wandle kategoriale Werte in Zahlen um. Zeige mir den sauberen DataFrame-Head."

### Aufgabe 3: EDA & Korrelation
**Ziel:** Zusammenhänge visualisieren.
> "Erstelle eine Korrelationsmatrix für den bereinigten Golf-Datensatz. Welche Faktoren haben den größten Einfluss? Visualisiere dies als Heatmap (Seaborn)."

### Aufgabe 4: Statistische Modellierung (Klassifikation)
**Ziel:** Modelle trainieren und vergleichen.
> "Nutze die Golf-Daten für ein Klassifikationsmodell (Zielvariable ist `Spielen`). Teile die Daten in Train/Test-Set. Trainiere zwei Algorithmen (z.B. Decision Tree und Logistic Regression). Gib die Accuracy und die Confusion Matrix aus."

### Aufgabe 5: Business Insights & Management Summary
**Ziel:** Den "Management Translator" spielen.
> "Basierend auf Aufgabe 4: Erstelle ein kurzes Management Summary (max. 3 Bullets). Erkläre dem CEO in Nicht-Nerd-Sprache, unter welchen Wetterbedingungen das Marketing hochgefahren werden muss."

### Aufgabe 6: Interaktive Visualisierung
> "Erstelle ein interaktives Diagramm mit Plotly, das den Zusammenhang zwischen Temperatur und der Spielentscheidung zeigt. Beim Hovern sollen die exakten Werte sichtbar sein."

### 🎖️ Aufgabe 7: Die finale Data Science Prüfung
> "Führe eine vollständige Data Science Untersuchung auf folgendem Datensatz durch: `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`
> 1. Erstelle eine **Regression**. Zielvariable ist `medv`.
> 2. Kümmer dich um Vorverarbeitung (Scaling, Missing Values).
> 3. Nutze **4 verschiedene Modelle** (z.B. Linear, Random Forest, XGBoost).
> 4. Präsentiere RMSE und R² und erkläre mir, welches Modell warum gewonnen hat."

---

# 📚 PHASE 7: Prompt-Katalog (Erweiterte Szenarien)
Wenn du spezielle Aufgaben hast, nutze diese Vorlagen:

- **Imbalanced Datasets (SMOTE):**
  > "Lade `Titanic_small.csv`. Prüfe die Verteilung von `Survived`. Wende SMOTE an, um die Minderheitsklasse für das Training zu stärken."
- **Clustering (K-Means - Unsupervised Learning):**
  > "Lade `Schwertlilie.csv`. Führe K-Means Clustering durch, ignoriere das Label. Bestimme die optimale Clusteranzahl via Elbow-Plot."
- **Association Rules (Warenkorbanalyse):**
  > "Lade `shopping_trends_updated.csv`. Wende Assoziationsregeln an (z.B. Apriori), um zu finden, welche Kategorien oft zusammen gekauft werden."
- **Text Mining & Sentiment:**
  > "Lade `VW_Tweets_Dieselskandal_2016.xlsx`. Führe Textbereinigung durch, erstelle eine Word Cloud und eine Sentiment-Analyse."
- **Zeitreihen & Finanzen (Yahoo Finance):**
  > "Nutze `yfinance`, um NVIDIA (`NVDA`) Kurse zu laden. Visualisiere den 50-Tage Durchschnitt und erstelle eine Prognose für 30 Tage (ARIMA)."

---

## 🛡️ Best Practices zur Validierung
1. **Der Zwei-Phasen-Vertrag:** Die KI muss erst den Code schreiben/ausführen und darf das Ergebnis erst danach interpretieren (Phase B).
2. **Hinterfragen:** Ein R² von 1.0 oder eine Accuracy von 100% deutet immer auf **Data Leakage** oder falsches Overfitting hin!
3. **Daten-Souveränität:** Durch Docker bleiben die Daten lokal bei dir.

---
[[Projekt_KI_VL]]

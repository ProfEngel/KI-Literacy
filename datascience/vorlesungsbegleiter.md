# Vorlesungsbegleiter: KI-Driven Data Science (Tag 6 & 7)

Dieses Dokument ist dein interaktiver Begleiter durch die Vorlesungstage 6 und 7. Wir verzahnen Theorie, technisches Setup und praktische Laborübungen zu einem linearen Lernpfad.

---

# 🛠️ TAG 6: Datenbändigung & Aufbereitung

## 1. Intro: Die neue Rolle des "Management Translators"
In der modernen Business-Welt verschwimmt die Grenze zwischen IT und Management. Als BWLer musst du kein Python-Experte sein, aber du musst die **Code Literacy** besitzen, um KI-generierte Analysen zu validieren und in Geschäftsentscheidungen zu übersetzen.

### Warum Code Interpreter?
Herkömmliche LLMs (wie ChatGPT ohne Tools) neigen bei Mathematik zu Halluzinationen. Der **Code Interpreter** löst dieses Problem, indem er eine echte Programmierumgebung nutzt.

---

## 2. Technisches Setup: Die Sandbox einrichten
Bevor wir analysieren, bauen wir unser Labor auf. Wir nutzen eine isolierte **Docker-Sandbox**.

### Schritt A: Container starten
Navigiere in deinem Terminal in den Ordner `datascience/` und starte die Umgebung:
```bash
docker-compose up -d
```
*Dies startet einen Jupyter-Server auf Port 3005.*

### Schritt B: Bibliotheken (Science-Stack) installieren
Damit die KI "schlaue" Dinge tun kann, braucht sie Pakete wie Pandas, Scikit-Learn und Plotly:
```bash
docker exec jupyter-interpreter pip install -r requirements_jupyter.txt
```

### Schritt C: Anbindung an OpenWebUI
![Konfiguration Code Interpreter](assets/einstellungen_code_interpreter.png)
1. Gehe in OpenWebUI auf **Settings > Images & Web Search**.
2. URL: `http://host.docker.internal:3005`
3. Token: `DEIN_SICHERER_TOKEN` (wie in der docker-compose.yml definiert).

---

## 3. Theorie: Das Sandbox-Konzept & ReAct-Workflow
![Metapher: Die Code-Interpreter Sandbox](assets/sandbox_metapher.png)

Die Sandbox ist ein geschützter Raum. Die KI arbeitet nach dem **ReAct-Prinzip (Reason + Act)**:
1. **Reason:** "Ich muss den Mittelwert berechnen."
2. **Act:** Schreibt Python-Code und führt ihn aus.
3. **Observation:** Liest das Ergebnis des Kernels.
4. **Output:** Erklärt dir das Ergebnis.

---

## 4. Labor: Funktionstest (Mission: Fibonacci)
**Ziel:** Verbindung prüfen.

**Prompt:**
> "Berechne die ersten 15 Fibonacci-Zahlen unter Nutzung deines Code Interpreters. Erstelle anschließend ein Balkendiagramm, das die Werte zeigt. Nutze eine ästhetische Farbpalette."

---

## 5. Theorie: Datenreinigung & EDA (Explorative Datenanalyse)
Bevor man Modelle baut, muss man seine Daten kennen.
*   **Missing Values:** Wie gehen wir mit Lücken um? (Löschen vs. Imputation)
*   **Outlier:** Sind extreme Werte Messfehler oder wichtige Signale?
*   **Encoding:** Die KI wandelt Kategorien (z. B. Wetter: "Sonnig") in Zahlen um (0, 1, 2), damit Modelle rechnen können.

---

## 6. Labor: Datenreinigung & EDA (Live-Daten)
**Ziel:** Umgang mit unsauberen Daten aus Online-Quellen.

**Prompt:**
> "Analysiere folgende zwei Datensätze direkt über ihre URLs:
> 1. `https://raw.githubusercontent.com/ProfEngel/KI-Literacy/refs/heads/main/datascience/data/GolfSpielen.csv`
> 2. `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/Schwertlilie_missingvalues.csv`
>
> **Aufgabe:** 
> - Prüfe beide auf fehlende Werte und Inkonsistenzen.
> - Bereinige die Daten (Imputation von Missing Values).
> - Wandle kategoriale Werte (wie 'Wetter') in numerische Werte um.
> - Zeige mir die bereinigten Header beider Tabellen."

---

## 7. Labor: Korrelationen visualisieren
**Ziel:** Muster erkennen.

**Prompt:**
> "Erstelle eine Korrelationsmatrix für den bereinigten Golf-Datensatz. Welche Faktoren haben den größten Einfluss darauf, ob Golf gespielt wird? Visualisiere die Korrelationen in einer Heatmap (Seaborn)."

---

# 📊 TAG 7: Analyse, Modellierung & Kommunikation

## 8. Theorie: Statistische Modellierung & Business Insights
Heute generieren wir Wissen aus den bereinigten Daten.

### Modelltypen:
*   **Regression:** Vorhersage von Werten (Umsatz, Preis).
*   **Klassifikation:** Vorhersage von Gruppen (Kunde kauft vs. kauft nicht).

### Der "Management-Translator":
Die KI übersetzt technische Metriken (p-Werte, R²) in Business-Empfehlungen:
*   *Technisch:* "p-value = 0.042"
*   *Business:* "Wir können mit 95% Sicherheit sagen, dass die Temperatur den Absatz beeinflusst."

---

## 9. Labor: Modellierung & Vorhersage
**Ziel:** KI-gestütztes Training von Modellen.

![Business Insights & Regression](assets/dashboard_analyse.png)

**Prompt:**
> "Nutze die Daten, um ein einfaches Klassifikationsmodell (z. B. Decision Tree oder Logistic Regression) zu trainieren. Zielvariable ist 'Spielen'. 
> 1. Teile die Daten in Training und Test-Set.
> 2. Gib die Genauigkeit (Accuracy) und eine Confusion Matrix aus.
> 3. Vergleiche mindestens zwei verschiedene Algorithmen."

---

## 10. Theorie: Kommunikation & Interaktive Visualisierung
Statische Bilder sind gut, interaktive Dashboards sind besser.
*   **Matplotlib:** Für Berichte.
*   **Plotly:** Für interaktives Erkunden (Hover-Effekte, Zoom).

---

## 11. Labor: Management Summary & Dashboarding
**Ziel:** Ergebnisse professionell präsentieren.

**Übung A (Management Summary):**
> "Basierend auf deinem Modell: Erstelle ein kurzes Management Summary (max. 3 Bulletpoints). Erkläre, unter welchen Wetterbedingungen wir das Marketing hochfahren sollten."

**Übung B (Interaktive Visualisierung):**
> "Erstelle ein interaktives Diagramm mit Plotly, das den Zusammenhang zwischen Temperatur und der Spielentscheidung zeigt. Nutze Hover-Effekte für Details."

---

## 12. Die finale Data Science Untersuchung (Prüfungsrelevant)
**Ziel:** Eigenständige Anwendung aller gelernten Schritte auf einen komplexen Datensatz.

**Prompt:**
> "Führe eine vollständige Data Science Untersuchung auf folgendem Datensatz durch: `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/bostonhousing.csv`
> 1. Erstelle eine **Klassifikation oder Regression** (entscheide selbst, was hier angebracht ist). Zielvariable ist `medv`.
> 2. Entscheide selbst, welche Vorverarbeitungen (Encoding, Scaling, Handling Missing Values) nötig sind.
> 3. Nutze mindestens **4 verschiedene Modelle** für deine Untersuchung und vergleiche die Ergebnisse.
> 4. Zeige am Ende das am besten performende Modell auf.
> 5. Präsentiere die typischen Metriken (neben der Verlustfunktion) und nutze Grafiken (Plots), um deine Ergebnisse zu verdeutlichen. Nicht numerische Werte bitte vorab wandeln."

---

## 13. Die mathematische Kunst (Bonus)
**Ziel:** Rechenpower und Visualisierungs-Fähigkeiten testen.

**Prompt:**
> "Generiere eine hochauflösende Visualisierung der Mandelbrot-Menge mittels Python. Nutze eine ästhetische Farbpalette (z. B. 'magma') und speichere das Bild als PNG."

---

## 🛡️ Troubleshooting & Best Practices
1. **Der Zwei-Phasen-Vertrag:** Achte darauf, dass die KI erst den Code-Block sendet und *nach* der Ausführung die Interpretation liefert.
2. **Plausibilitätscheck:** Frage die KI: "Warum hast du dich für dieses Modell entschieden?"
3. **Daten-Souveränität:** Durch den lokalen Docker-Container bleiben deine Daten auf deinem Rechner, während nur der Code-Vorschlag von der KI kommt.

---
[[Projekt_KI_VL]]

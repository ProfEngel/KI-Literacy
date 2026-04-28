# Modul: AI-Driven Data Science – Datenbändigung mit dem Code Interpreter

Dieses Modul vermittelt die Grundlagen der KI-gestützten Datenanalyse. Wir lernen, wie wir LLMs als „Junior Data Scientists“ einsetzen, um Rohdaten zu bereinigen, explorative Analysen (EDA) durchzuführen und statistische Modelle zu erstellen – ohne selbst tiefgreifende Python-Kenntnisse besitzen zu müssen, aber mit der nötigen „Code Literacy“, um die Ergebnisse zu validieren.

## Inhalt des Ordners

- **[vorlesungsbegleiter.md](./vorlesungsbegleiter.md)**: Der chronologische Leitfaden für die Vorlesung (Inhalt & Übungen verzahnt). **Empfohlener Einstieg!**
- **[DataScienceVerstehen.md](./DataScienceVerstehen.md)**: Ein technischer und methodischer Überblick (Theorie-Fokus).
- **[Labor_Anleitung.md](./Labor_Anleitung.md)**: Alle Laborübungen auf einen Blick.
- **[datascience_prompts.md](./datascience_prompts.md)**: Ein strukturierter Katalog mit Musterprompts für die gesamte Pipeline.
- **[CheatSheet.md](./CheatSheet.md)**: Kompakte Referenz für System-Prompts und Python-Bibliotheken.
- **assets/**: Enthält Infografiken und visuelle Hilfsmittel zum Modul.

## Struktur des Moduls (Ablauf)

Das Modul folgt dem Modulplan für zwei aufeinanderfolgende Vorlesungstage:

### 🛠️ Tag 6: AI-Driven Data Science I (Datenaufbereitung)
*Fokus: Daten mit dem Code Interpreter bändigen.*
1. **Setup & Theorie**: Jupyter-Kernel starten und das Konzept der „Sandbox“ verstehen.
2. **KI als Programmierer**: Erstellen von Skripten zur Datenreinigung.
3. **Explorative Datenanalyse (EDA)**: Strukturen erkennen, Missing Values behandeln.
4. **Feature Engineering**: Neue Variablen ableiten und Code verstehen.

### 📊 Tag 7: AI-Driven Data Science II (Analyse & Visualisierung)
*Fokus: Statistische Erkenntnisse gewinnen und kommunizieren.*
1. **Statistische Modellierung**: Lineare Regression und Klassifikation durchführen.
2. **Business Insights**: Mathematische Ergebnisse (p-Werte etc.) in Management-Sprache übersetzen.
3. **Advanced Visualisierung**: Interaktive Charts mit Plotly oder Matplotlib erstellen.

## Setup-Schnellstart

Um die Übungen durchführen zu können, muss der Jupyter-Interpreter im Docker-Netzwerk laufen:

1. **Starten**: `docker-compose up -d` (startet den Container `jupyter-interpreter`).
2. **URL**: `http://localhost:3005`
3. **Token**: Nutze den in deiner `.env` oder im Docker-Log hinterlegten Token.
4. **Anbindung**: In OpenWebUI unter `Settings > Images & Web Search` den Interpreter mit URL und Token registrieren.

---
[[Projekt_KI_VL]]

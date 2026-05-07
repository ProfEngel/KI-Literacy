# Modul: AI-Driven Data Science – Datenbändigung mit dem Code Interpreter

Dieses Modul vermittelt die Grundlagen der KI-gestützten Datenanalyse. Wir lernen, wie wir LLMs als „Junior Data Scientists“ einsetzen, um Rohdaten zu bereinigen, explorative Analysen (EDA) durchzuführen und statistische Modelle für Klassifikation und Regression zu erstellen.

## Die Single Source of Truth

- **[vorlesungsbegleiter.md](./vorlesungsbegleiter.md)**: Dies ist der Master-Guide für das gesamte Modul. Er enthält das vollständige technische Setup (Docker), die gesamte Theorie (Statistik, ReAct-Workflow, Evaluation) sowie alle 7 Labor-Aufgaben und einen Katalog mit fortgeschrittenen Machine-Learning-Prompts. **Starte hier!**
- **[CheatSheet.md](./CheatSheet.md)**: Eine kompakte Schnellreferenz (Hindernisse in der EDA, Hyperparameter, Confusion Matrix & Metriken) inkl. fertiger Copy-Paste-Prompts für eigene Datensätze.

## Interaktives Sokratisches Lernen

Für das vertiefende Lernen direkt im Chat (als System-Prompt oder in OpenWebUI-Kanälen) haben wir zwei dedizierte Tutor-Anleitungen:
- **[datascience-lernen.md](./datascience-lernen.md)**: Ein 5-Phasen Rollenspiel-Tutor, um Data Science, ML und Code-Reviews interaktiv zu trainieren.
- **[python-lernen.md](./python-lernen.md)**: Ein Tutor für die absoluten Python-Basics.

## Setup-Schnellstart (Jupyter Sandbox)

Um die Übungen im Vorlesungsbegleiter durchführen zu können, muss der Jupyter-Interpreter im Docker-Netzwerk laufen:

1. **Starten**: `docker-compose up -d` (startet den Container `jupyter-interpreter`).
2. **Bibliotheken installieren**: `docker exec jupyter-interpreter pip install -r requirements_jupyter.txt`
3. **Anbindung**: In OpenWebUI unter `Settings > Images & Web Search` (oder Code Interpreter) registrieren:
   - URL: `http://host.docker.internal:3005`
   - Token: Den in deiner `.env` oder `docker-compose.yml` hinterlegten Token nutzen.

---
[[Projekt_KI_VL]]

# Deployment Guide: Data Science & Code Interpreter

Dieser Guide beschreibt das isolierte Setup des Jupyter-Kernels für die Arbeit mit dem Code Interpreter in OpenWebUI.

## 1. Voraussetzungen
- **Docker Desktop** ist installiert und läuft.
- Der Ordner `datascience` wurde auf den lokalen Rechner heruntergeladen.

## 2. Start des Jupyter-Containers

Navigiere im Terminal in den Ordner `datascience` und führe folgenden Befehl aus:

```bash
docker-compose up -d
```

### Konfigurations-Details:
- **Port:** 3005
- **Token:** `DEIN_SICHERER_TOKEN` (Sollte für den produktiven Einsatz in der `docker-compose.yml` geändert werden).
- **Volumes:** Ein persistentes Volume `jupyter_data` wird erstellt, damit deine Notebooks und installierten Pakete auch nach einem Neustart erhalten bleiben.

---

## 3. Installation der Python-Bibliotheken

Damit die KI Daten analysieren und Diagramme zeichnen kann, müssen die notwendigen Bibliotheken im Container installiert werden. Wir nutzen dafür die bereitgestellte `requirements_jupyter.txt`.

Führe diesen Befehl im Terminal aus:

```bash
docker exec jupyter-interpreter pip install -r requirements_jupyter.txt
```

*Hinweis: Dieser Vorgang kann je nach Internetverbindung 1-2 Minuten dauern.*

---

## 4. Anbindung an OpenWebUI

1. Öffne **OpenWebUI** in deinem Browser (meist `http://localhost:3000`).
2. Navigiere zu **Settings > Images & Web Search** (in neueren Versionen ggf. unter **Code Interpreter**).
3. Aktiviere den Schalter für den **Code Interpreter**.
4. Trage folgende Werte ein:
   - **Jupyter-URL:** `http://host.docker.internal:3005`
   - **Jupyter-Token:** `DEIN_SICHERER_TOKEN`
5. Klicke auf **Save**.

---

## 5. Funktionstest

Starte einen neuen Chat und sende folgenden Prompt:

> "Berechne die ersten 10 Primzahlen mittels Python und erstelle ein Balkendiagramm dazu."

Wenn die KI einen `<code_interpreter>` Block anzeigt und kurz darauf ein Bild generiert, ist das System erfolgreich eingerichtet.

---

## 6. Lokale Datennutzung

Um lokale Daten zu analysieren, nutze die Dateien im Ordner `./data`. 
- Lade die Datei (z. B. `GolfSpielen.csv`) einfach in den Chat hoch.
- Die KI erkennt die Datei und nutzt den Code Interpreter, um sie einzulesen.

---
[[Projekt_KI_VL]]

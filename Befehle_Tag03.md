# Befehle & Deployment-Guide für Tag 03

An diesem Tag richten wir unsere lokale KI-Umgebung mittels Docker ein.

## 1. Docker Installation & Vorbereitung
Bevor wir die Container starten, muss Docker Desktop installiert und korrekt konfiguriert sein.

### 🍏 macOS Checkliste
- **Download:** Docker Desktop für Mac (Achte auf den richtigen Chip: Intel vs. Apple Silicon M1/M2/M3).
- **Berechtigungen:** Erlaube Docker beim ersten Start den "Privileged Access".
- **Ressourcen:** In den Einstellungen (Settings > Resources) sollten mindestens 4GB RAM zugewiesen sein.

### 🪟 Windows Checkliste (WSL 2 Fokus)
Unter Windows ist die Nutzung des **WSL 2 Backends** zwingend erforderlich für eine stabile Performance.
- **BIOS:** Stelle sicher, dass die **Virtualisierung (VT-x / AMD-V)** im BIOS deines Rechners auf "Enabled" steht.
- **WSL 2:** Installiere/Aktualisiere das Windows Subsystem for Linux. Befehl in der PowerShell (Admin): `wsl --install`.
- **Docker Settings:** Gehe in Docker Desktop auf *Settings > General* und stelle sicher, dass **"Use the WSL 2 based engine"** aktiviert ist.

**Test der Installation (Terminal/PowerShell):**
```bash
docker run hello-world
```

## 2. OpenWebUI installieren
OpenWebUI dient als lokales Frontend für die Interaktion mit Modellen (z.B. via Ollama oder APIs).

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main
```

## 3. Code-Interpreter (Jupyter) einrichten
Um der KI das Rechnen und die Datenanalyse mittels Python zu ermöglichen, richten wir einen Jupyter-Container ein.

### 3.1 Jupyter-Container erstellen
Führe diesen Befehl aus, um die Instanz zu starten. 

> [!CAUTION]
> **SICHERHEITSHINWEIS:** Ersetze `DEIN_SICHERER_TOKEN` durch einen zufälligen String (z.B. generiert via `openssl rand -hex 32`).

```bash
docker run -d \
  -p 8888:8888 \
  --name jupyter-interpreter \
  --restart always \
  jupyter/datascience-notebook \
  start.sh jupyter notebook \
  --NotebookApp.token='DEIN_SICHERER_TOKEN' \
  --NotebookApp.password='' \
  --NotebookApp.allow_origin='*' \
  --NotebookApp.disable_check_xsrf=True
```

### 3.2 Bibliotheken im Container installieren
Sobald der Container läuft, installieren wir die für die KI-Analyse notwendigen Bibliotheken aus der im Repo bereitgestellten `requirements.txt`.

```bash
docker exec jupyter-interpreter pip install -r requirements.txt
```

---
**Nächste Schritte:** 
Binde den Jupyter-Server in den OpenWebUI Einstellungen als "Code Interpreter" ein, indem du den Token und die URL (`http://host.docker.internal:8888`) hinterlegst.

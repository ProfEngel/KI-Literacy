# Lab Session 1 - Advanced Deployment and Infrastructure
## Befehle & Deployment-Guide für Tag 03

An diesem Tag richten wir unsere lokale KI-Umgebung mittels Docker ein.

## 1. Docker Installation & Vorbereitung
Bevor wir die Container starten, muss Docker Desktop installiert und korrekt konfiguriert sein.

### 1.1 macOS Checkliste
- **Download:** Docker Desktop für Mac (Achte auf den richtigen Chip: Intel vs. Apple Silicon M1/M2/M3).
- **Berechtigungen:** Erlaube Docker beim ersten Start den "Privileged Access".
- **Ressourcen:** In den Einstellungen (Settings > Resources) sollten mindestens 4GB RAM zugewiesen sein.

### 1.2 Windows Checkliste: Der "anwendersichere" Deep-Dive
Unter Windows ist die Einrichtung etwas komplexer, da Docker eine Brücke zwischen Windows und Linux baut (**WSL 2 - Windows Subsystem for Linux**). Damit das funktioniert, müssen wir tief ins System:

#### Schritt A: Die BIOS-Hürde (Hardware-Virtualisierung)
Bevor wir Software installieren, muss die Hardware "wissen", dass sie Virtualisierung erlauben darf. (BIOS Tasten: `ENTF`, `F2`, `F10` oder `F12`). Suche nach `Intel VT-x` oder `AMD-V` -> Stelle auf **Enabled**.

#### Schritt B: WSL 2 & PowerShell (Die Software-Basis)
Rechtsklick auf das Windows-Start-Symbol -> "Terminal (Administrator)". Führe diese Befehle aus:
1. `wsl --install` 
2. `wsl --update`
3. `wsl --set-default-version 2`

> [!IMPORTANT]
> **NEUSTART ZWINGEND:** Nachdem du diese Befehle ausgeführt hast, **musst** du Windows neu starten.

#### Schritt C: Docker Desktop konfigurieren
In Docker Desktop: Zahnrad (**Settings**) > **General** > **"Use the WSL 2 based engine"** (aktivieren).

### 1.3 Test der Installation
Öffne dein Terminal und gib `docker run hello-world` ein.

---

## 2. OpenWebUI installieren
OpenWebUI dient als lokales Frontend für die Interaktion mit Modellen (via Ollama, LMStudio, OpenRouter oder andere...).

**So installierst du es:**
Öffne das Terminal (entweder direkt in Docker Desktop unter "Containers" > "Terminal" oder dein normales System-Terminal) und gib diesen Befehl ein:

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main
```

### 2.1 Modelle anbinden
- **Lokale Modelle (LM Studio):** Dashboard > Reiter **"Local Server"** > "Start Server". In OpenWebUI unter **Settings > Connections > OpenAI API** die URL `http://host.docker.internal:1234/v1` eintragen.
- **Externe Modelle (OpenRouter):** URL `https://openrouter.ai/api/v1` in den Connections hinzufügen und API-Key hinterlegen.

### 2.2 RAG / Dokumente konfigurieren
Nova soll deine PDF-Dokumente verstehen. Gehe zu **User-Icon > Einstellungen > Dokumente**:

**Allgemein:**
- **Engine zur Inhaltsextraktion:** Standard
- **OCR:** Bilder aus PDFs extrahieren (aktivieren)
- **PDF Loader Modus:** Seite
- **Embedding-Modell:** `sentence-transformers/all-MiniLM-L6-v2`

**Text-Splitter (Chunking):**
- **Chunk-Größe:** 400 | **Chunk-Überlappung:** 40 | **Zielwert min. Chunk:** 0

**RAG-Vorlage (Prompt-Template):**
Kopiere diesen Text (Zitations-Fokus) in das Feld **RAG-Vorlage**:

```markdown
### Task:
Respond using the provided context, incorporating inline citations [source_id] ONLY if the <source_id> tag is provided.

### Guidelines:
- If uncertain, ask for clarification.
- Respond in the same language as the query.
- Use [source_id] (e.g., [1]) for citations.
- If no answer in context, explain this and use own knowledge.

<context>
{{CONTEXT}}
</context>

<user_query>
{{QUERY}}
</user_query>
```

### 2.3 Websuche konfigurieren (Settings > Web Search)
- **Web-Suchmaschine:** brave
- **Brauch Search API-Schlüssel:** (Deinen Key hier eingeben)
- **Ergebnisse:** 5 | **Anfragen:** 5
- **YouTube-Sprache:** de

---

## 2.4 Deine Agentin "Nova" erstellen
1. **Workspace > Models > Create a Model**.
2. **Name:** Nova | **Basemodel:** `google/gemini-3-flash-preview` (OpenRouter).
3. **System Prompt:** Inhalt aus [Nova_Systemprompt.md](./Nova_Systemprompt.md).
4. **Capabilities:** Aktiviere **Websearch**.

---

## 2.5 Labor-Challenge I: Vision & RAG (Basics)
Nutze dafür die Dateien im Ordner **`demodokumente`**.

- **Challenge A (RAG):** Finde in `CON01...Needleinthemiddle.pdf` den Satz "Wurzel macht einen ..." (S. 66).
- **Challenge B (Vision):** Zähle die Autos in `Parkplatz...Biber.png` nach Farben und finde den Biber!
- **Challenge C (Logik):** Suche in `Wimmelbild...notaktuell.png` nach T-Rex und Einhorn.

---

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
Sobald der Container läuft, installieren wir die notwendigen Bibliotheken aus der `requirements_jupyter.txt`.

```bash
docker exec jupyter-interpreter pip install -r requirements_jupyter.txt
```

### 3.3 Einbindung in OpenWebUI
1. Gehe in OpenWebUI zu **Settings > Images & Web Search** (oder **Code Interpreter**).
2. **Jupyter-URL:** `http://host.docker.internal:8888`.
3. **Jupyter Token:** Dein gewählter Token (`DEIN_SICHERER_TOKEN`).

![Einstellungen Code Interpreter](assets/einstellungen_code_interpreter.png)
*Konfiguration der Code Interpreter Verbindung.*

### 3.4 Code Interpreter Prompt & Vertrag
Kopiere diesen Prompt in das Feld für den **System-Prompt** deines "Nova" Modells oder erstelle ein spezialisiertes Profil, damit die KI den Interpreter korrekt ansteuert:

> ### INTERPRETER CONTRACT
> Du hast Zugriff auf eine Jupyter-Umgebung.
> **PHASE A (PRE-RUN):** Antworte AUSSCHLIESSLICH mit:
> `<code_interpreter type="code" lang="python"># code </code_interpreter>`
> **PHASE B (POST-RUN):** Interpretiere den Output. Erzeuge Grafiken (Matplotlib/Seaborn).

### 3.5 Test & Challenge D (Data Science)
**Test-Prompt:** "Berechne die ersten 15 Fibonacci-Zahlen und plotte sie."

**Challenge D:** "Nutze `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/GolfSpielen.csv`. Erstelle eine Klassifikation für `Klassenvorhersage`. Vergleiche 4 Modelle, zeige Metriken und visualisiere die Ergebnisse."

---

## 4. Docker MCP Toolkit & Web-Suche
Docker Desktop bietet nun das **MCP Toolkit (Beta)** an.

### 4.1 MCP Toolkit Setup
1. Docker Desktop > **MCP Toolkit** (links).
2. **Catalog:** Suche nach `Brave Search`, `Fetch` und `Playwright` > Aktiviere sie via **"+"**.
3. **Clients:** Aktiviere den Schalter für LM Studio (oder andere Clients).
4. **Ports:** Notiere dir den Port des jeweiligen Servers in den Details.

### 4.2 OpenWebUI mit MCP verbinden (SSE)
1. OpenWebUI > **Settings > External Tools** > **"+"**.
2. **Type:** `MCP (Streamable HTTP)`.
3. **URL:** `http://host.docker.internal:<PORT>/sse` (Port aus Docker Desktop entnehmen).

---

## 5. Erweiterte Agenten-Fähigkeiten (Sub-Agenten)
Importiere das **Sub-Agent Tool** ([v7bfeb0b7](https://openwebui.com/posts/sub_agent_7bfeb0b7)) in Workspace > Tools.

### 5.1 Belastungstest (Der "Final Boss" Prompt)
**Prompt:** "Wie war dein Tag? Erzähle mir aktuelle News der letzten 24h (Politik, Wirtschaft, Sport) aus Deutschland und der Welt. Nenne das heutige Datum, nutze Inline-Zitationen und erstelle am Ende eine neue Notiz mit dem Titel 'News vom [Datum]'."

---
**Nächste Schritte:** 
Bringe deine Umgebung zum Glühen! 🚀

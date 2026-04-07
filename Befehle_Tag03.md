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
Bevor wir Software installieren, muss die Hardware "wissen", dass sie Virtualisierung erlauben darf.
- **Was ist das BIOS?** Ein Menü, das *vor* Windows lädt.
- **Wie komme ich rein?** Starte deinen PC neu und hämmere sofort und wiederholt auf eine dieser Tasten (je nach Hersteller): `ENTF` (Del), `F2`, `F10` oder `F12`.
- **Was muss ich einstellen?** Suche (meist unter "Advanced", "CPU Configuration" oder "Security") nach:
  - **Intel CPUs:** `Intel Virtualization Technology` oder `VT-x` -> Stelle auf **Enabled**.
  - **AMD CPUs:** `SVM Mode` oder `AMD-V` -> Stelle auf **Enabled**.
- **Speichern:** Drücke `F10` zum Speichern und Verlassen. Dein PC startet nun normal Windows.

#### Schritt B: WSL 2 & PowerShell (Die Software-Basis)
Nun bereiten wir Windows vor. Wir nutzen dazu die **PowerShell**.
- **Warum PowerShell (Admin)?** Nur der Administrator darf tiefgreifende Windows-Features (wie das Linux-Subsystem) freischalten. Ohne Admin-Rechte verweigern die Befehle den Dienst.
- **So geht's:** Rechtsklick auf das Windows-Start-Symbol -> "Terminal (Administrator)" oder "PowerShell (Administrator)" auswählen. Bestätige die Sicherheitsabfrage.

**Führe diese Befehle nacheinander aus:**
1. `wsl --install` 
   *(Dieser Befehl lädt alle nötigen Komponenten herunter. Er kann einige Minuten dauern.)*
2. `wsl --update`
   *(Garantiert, dass du den neuesten Linux-Kernel hast.)*
3. `wsl --set-default-version 2`
   *(Zwingt Windows dazu, die moderne Version 2 zu nutzen, die Docker zwingend benötigt.)*

> [!IMPORTANT]
> **NEUSTART ZWINGEND:** Nachdem du diese Befehle ausgeführt hast, **musst** du Windows neu starten, damit die Änderungen wirksam werden.

#### Schritt C: Docker Desktop konfigurieren
Nach dem Neustart öffnest du Docker Desktop:
1. Gehe oben auf das Zahnrad (**Settings**).
2. Wähle links **General**.
3. Stelle sicher, dass der Haken bei **"Use the WSL 2 based engine"** gesetzt ist.

### 1.3 Test der Installation
Öffne dein Terminal (oder PowerShell unter Windows) und gib folgenden Befehl ein:
```bash
docker run hello-world
```
*(Wenn du hier ein "Hello from Docker!" siehst, hast du es geschafft!)*

---

## 2. OpenWebUI installieren
OpenWebUI dient als lokales Frontend für die Interaktion mit Modellen (via Ollama, LMStudio, OpenRouter oder andere...).

**So installierst du es:**
Öffne das Terminal (entweder direkt in Docker Desktop unter "Containers" > "Terminal" oder dein normales System-Terminal) und gib diesen Befehl ein:

```bash
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main
```

### 2.1 Modelle anbinden
Sobald OpenWebUI unter `http://localhost:3000` läuft, binden wir unsere Modell-Backends an:

**Lokale Modelle (LM Studio):**
1. Starte **LM Studio** auf deinem PC/Mac und lade ein effizientes Modell herunter:
   - **Empfehlung:** `Qwen 3.5 (0.8B)` oder `Gemma 4 (2B)`.
2. Gehe im Dashboard auf den Reiter **"Local Server"** und klicke auf "Start Server".
3. In OpenWebUI: Gehe auf **Settings > Connections > OpenAI API**.
4. Trage bei der URL ein: `http://host.docker.internal:1234/v1`.

**Externe Modelle (OpenRouter / Gemini):**
1. Erstelle einen API-Key auf [openrouter.ai](https://openrouter.ai/).
2. In OpenWebUI: Gehe auf **Settings > Connections > OpenAI API** (auf das "+" für eine neue Verbindung klicken).
3. **URL:** `https://openrouter.ai/api/v1` | **Key:** Dein Key.

---

## 2.2 RAG / Dokumente konfigurieren
Nova soll deine PDF-Dokumente verstehen. Gehe zu **User-Icon > Einstellungen > Dokumente**:

**Allgemein:**
- **Engine zur Inhaltsextraktion:** Standard
- **Bilder aus PDFs extrahieren (OCR):** Aktivieren
- **PDF Loader Modus:** Seite
- **Embedding-Modell-Engine:** Standard (SentenceTransformers)
- **Embedding-Modell:** `sentence-transformers/all-MiniLM-L6-v2`

**Text-Splitter (Chunking):**
- **Text-Splitter:** Token (Tiktoken)
- **Markdown-Header-Text-Splitter:** Aktivieren
- **Chunk-Größe:** 400 | **Chunk-Überlappung:** 40 | **Zielwert min. Chunk:** 0

**RAG-Vorlage (Prompt-Template):**
Kopiere diesen Text in das Feld **RAG-Vorlage**:

```markdown
### Task:
Respond to the user query using the provided context, incorporating inline citations in the format [source_id] **only when the <source_id> tag is explicitly provided** in the context.

### Guidelines:
- If you don't know the answer, clearly state that.
- If uncertain, ask the user for clarification.
- Respond in the same language as the user's query.
- If the context is unreadable or of poor quality, inform the user and provide the best possible answer.
- If the answer isn't present in the context but you possess the knowledge, explain this to the user and provide the answer using your own understanding.
- **Only include inline citations using [source_id] (e.g., [1], [2]) when a `<source_id>` tag is explicitly provided in the context.**
- Do not cite if the <source_id> tag is not provided in the context.  
- Do not use XML tags in your response.
- Ensure citations are concise and directly related to the information provided.

### Example of Citation:
If the user asks about a specific topic and the information is found in "whitepaper.pdf" with a provided <source_id>, the response should include the citation like so:  
* "According to the study, the proposed method increases efficiency by 20% [whitepaper.pdf]."
If no <source_id> is present, the response should omit the citation.

### Output:
Provide a clear and direct response to the user's query, including inline citations in the format [source_id] only when the <source_id> tag is present in the context.

<context>
{{CONTEXT}}
</context>

<user_query>
{{QUERY}}
</user_query>
```
*Nach Änderungen bitte die Schaltfläche "Neu indizieren" nutzen.*

---

## 2.3 Websuche konfigurieren
Gehe zu **User-Icon > Einstellungen > Websuche**:

**Allgemein:**
- **Web-Suchmaschine:** brave
- **Brave Search API-Schlüssel:** (Deinen Key hier eingeben)
- **Anzahl der Suchergebnisse:** 5 | **Gleichzeitige Anfragen:** 5

**Loader:**
- **Web-Loader-Engine:** Standard
- **SSL-Zertifikat prüfen:** Aktiviert
- **YouTube-Sprache:** de

> [!TIP]
> **Suchmaschinen-Vergleich:** Brave ist aktuell die beste Wahl (sauber aufbereitet). DuckDuckGo (DDGS) trifft schnell an Limits. SearXNG ist kostenlos, kann aber durch die Vielfalt der Formate schwächere LLMs oft verwirren (Brave benötigt eine Kreditkarte, auch für den Free Plan).

---

## 2.4 Deine Agentin "Nova" erstellen
1. Gehe zu **Workspace > Models > Create a Model**.
2. **Name:** Nova | **Basemodel:** `google/gemini-3-flash-preview` (OpenRouter).
3. **System Prompt:** Inhalt aus [Nova_Systemprompt.md](./Nova_Systemprompt.md).
4. **Capabilities:** Aktiviere **Websearch**.

---

## 2.5 Labor-Challenge: Das große KI-Labor (Hard-Mode)
Nutze dafür die Dateien im Ordner **`demodokumente`** und deine konfigurierten Tools.

### Challenge A: Die Nadel im Heuhaufen (RAG)
1. Lade **`CON01_Jahresabschluss_Needleinthemiddle.pdf`** hoch.
2. **Aufgabe:** Finde den Satz, der mit "Wurzel macht einen ..." beginnt (S. 66).

### Challenge B: Bild-Analyse & Vision-Inventur
1. Lade **`Parkplatz_Autos-Farben_und ein Biber.png`** hoch.
2. **Aufgabe:** Zähle Autos nach Farben. Suche den versteckten Biber! (LSG: `LSG_Biber.png`).

### Challenge C: Wimmelbild-Suche
1. Lade **`Wimmelbild_Tiere_zweiTiere-nichtaktuell.png`** hoch.
2. **Aufgabe:** Suche den T-Rex und das Einhorn.

### Challenge D: Data Science Untersuchung (Code Interpreter)
**Prompt:** "Nutze: `https://raw.githubusercontent.com/ProfEngel/datasets/refs/heads/main/GolfSpielen.csv`. Erstelle eine Klassifikation für `Klassenvorhersage`. Nutze 4 Modelle, vergleiche Metriken und visualisiere die Ergebnisse."

---

## 3. Code-Interpreter (Jupyter) einrichten
```bash
docker run -d -p 8888:8888 --name jupyter-interpreter --restart always jupyter/datascience-notebook start.sh jupyter notebook --NotebookApp.token='DEIN_TOKEN' --NotebookApp.password='' --NotebookApp.allow_origin='*' --NotebookApp.disable_check_xsrf=True
```
*Einbindung in OpenWebUI via `http://host.docker.internal:8888`.*

## 4. Docker MCP Toolkit & Web-Suche
Öffne Docker Desktop > **MCP Toolkit**. Füge Brave Search aus dem Katalog hinzu und verbinde es in OpenWebUI via **SSE** (`http://host.docker.internal:<PORT>/sse`).

## 5. Erweiterte Agenten-Fähigkeiten (Sub-Agenten)
Importiere das **Sub-Agent Tool** ([v7bfeb0b7](https://openwebui.com/posts/sub_agent_7bfeb0b7)) in OpenWebUI > Workspace > Tools.

### 5.1 Der finale Belastungstest (Agentik & Multi-Step)
**Prompt:** "Wie war dein Tag? Erzähle mir aktuelle News der letzten 24h (Politik, Wirtschaft, Sport) aus Deutschland und der Welt. Nenne das heutige Datum, nutze Inline-Zitationen und erstelle am Ende eine neue Notiz mit dem Titel 'News vom [Datum]'."

---
**Nächste Schritte:** 
Teste deine Umgebung mit der Master-Aufgabe in 5.1! 🚀

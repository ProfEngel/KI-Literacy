---
type: overview
tags: [ki-vl, education]
created: 2026-04-16
updated: 2026-04-16
project: KI_VL
---

# KI-Literacy: Begleit-Repository zur Vorlesung

Willkommen im offiziellen Repository zum Modul **KI-Literacy**. Dieses Projekt dient als zentrale Anlaufstelle für technische Ressourcen, Anleitungen und Laborübungen der Vorlesungsreihe.

In diesem Kurs lernen wir, wie man LLMs versteht, kontrolliert und unabhängig von großen Cloud-Anbietern in eigene, agentische Ökosysteme integriert.

---

# KI-Literacy: Begleit-Repository zur Vorlesung

Willkommen im offiziellen Repository zum Modul **KI-Literacy**. Dieses Projekt ist dein digitaler Werkzeugkasten für die Vorlesung. Hier findest du alle Unterlagen, Daten für die Übungen und die technische Infrastruktur.

In diesem Kurs lernst du nicht nur, wie man KI nutzt, sondern wie du sie **verstehst, kontrollierst und souverän einsetzt** – unabhängig von großen Cloud-Anbietern.

---

## 🎓 Die Lerneinheiten (Der Weg zum KI-Profi)

Die Vorlesung ist chronologisch in Module (Tage) gegliedert. Jedes Modul enthält einen **Vorlesungsbegleiter** (Theorie & Lab) sowie ein **Cheat-Sheet** mit den wichtigsten Merksätzen.

- **[Tag 01: KI Basics](./modules/Tag01_ki_basics/)** – Evolution, Tokenisierung und das erste Setup.
- **[Tag 02: Advanced Prompt Engineering](./modules/Tag02_advanced_prompt_engineering/)** – Anatomie des perfekten Prompts & Context Engineering.
- **[Tag 03 & 04: Agents Desktop](./modules/Tag03_04_agents-desktop/)** – KI in der Profi-Umgebung (VS Code & Antigravity).
- **[Tag 05: Agents To-Go & n8n](./modules/Tag05_agents-to-go/)** – Agenten für die Hosentasche & Low-Code Automatisierung.
- **[Tag 06 - 08: Data Science](./modules/Tag06_08_datascience/)** – Datenanalyse mit KI (Orange3 & Python).
- **[Tag 09: Local Deployment](./modules/Tag09_01_local_deployment/)** – Datensouveränität mit Docker & SearXNG.
- **[Tag 09: Finetuning](./modules/Tag09_02_finetuning/)** – RAG vs. Finetuning & LoRA-Spezialisierung.
- **[Tag 10: Ethik & Governance](./modules/Tag10_01_ethik_governance/)** – EU AI Act & Corporate Policies.
- **[Tag 10: The Dark Side](./modules/Tag10_02_dark_side/)** – Model Collapse, Halluzinationen & Red Teaming.
- **[Tag 11: Der KI-Hackathon](./modules/Tag11_Hackathon/)** – Das Finale: Alles Erlernte in einer Master-Challenge anwenden.

### 🎨 Exkurse: Generative Medien
Ergänzend zur Hauptvorlesung bieten diese Module vertiefendes Wissen zur Erzeugung von Medien:
- **[Bilderzeugung](./modules/Exkurs_bilderzeugung/)** | **[Videoerzeugung](./modules/Exkurs_videoerzeugung/)** | **[Songerzeugung](./modules/Exkurs_songerzeugung/)** | **[Design & Branding](./modules/Exkurs_design/)**

---

## 📂 Ressourcen-Übersicht

### 📖 Dokumentationen & Guides
- **[KI-VL-Skript_26.pdf](./docs/KI-VL-Skript_26.pdf)** – Das offizielle Skript zur Vorlesung.
- **[Linkliste.md](./docs/Linkliste.md)** – Interaktive Tools und Benchmarks zum Ausprobieren.
- **[Nova_Systemprompt.md](./docs/Nova_Systemprompt.md)** – Einblick in die Konfiguration unserer Kurs-KI.

### 🧪 Laborübungen & Testdaten
Im Ordner **[labor_daten/](./labor_daten/)** findest du alles, was du für die Übungen brauchst:
- **Bilder & Dokumente:** Für Tests der Bilderkennung und Dokument-Analyse (RAG).
- **Data Science:** CSV-Tabellen für deine ersten Analysen.
- **[Agents-Demo](./labor_daten/agents_demo/):** Ein fertiges Paket, um einen eigenen Seminararbeit-Assistenten in OpenWebUI zu bauen.

---

## 🛠️ Schritt-für-Schritt: Die Technik starten (Schnellstart)

Keine Sorge, du musst kein Informatiker sein, um unsere lokale KI-Umgebung zu nutzen. Wir verwenden **Docker**, ein Programm, das alle notwendigen Tools (OpenWebUI, Suche, Code-Interpreter) automatisch in einem "virtuellen Container" für dich startet.

### 1. Vorbereitung (Einmalig)
1. **Docker Desktop installieren:** Lade dir [Docker Desktop](https://www.docker.com/products/docker-desktop/) herunter und installiere es wie jedes andere Programm.
2. **Docker starten:** Öffne Docker Desktop. Warte, bis das kleine Symbol unten links **grün** leuchtet ("Engine Running").

### 2. Die Umgebung starten
1. **Ordner öffnen:** Lade dieses Repository (als ZIP) herunter und entpacke es.
2. **Terminal öffnen:** 
   - **Windows:** Drücke die `Windows-Taste`, tippe `cmd` ein und drücke Enter.
   - **Mac:** Drücke `CMD + Leertaste`, tippe `Terminal` ein und drücke Enter.
3. **In den Ordner navigieren:** Tippe `cd ` (mit einem Leerzeichen am Ende) und ziehe den entpackten Ordner `deployment` einfach mit der Maus in das schwarze Fenster. Drücke Enter.
4. **Befehl ausführen:** Kopiere diesen Befehl, füge ihn im Terminal ein und drücke Enter:
   ```bash
   docker-compose up -d
   ```
   *Hinweis: Beim ersten Mal dauert es ein paar Minuten, da die Programme heruntergeladen werden.*

### 3. Loslegen!
Sobald der Befehl fertig ist, kannst du die Tools in deinem Browser (Chrome/Edge/Safari) öffnen:
- **OpenWebUI (Dein ChatGPT-Ersatz):** [http://localhost:3000](http://localhost:3000)
- **Lokale Suche (SearXNG):** [http://localhost:8080](http://localhost:8080)

Detaillierte Hilfe findest du im **[Deployment_Guide.md](./deployment/Deployment_Guide.md)**.

---
[[Projekt_KI_VL]]


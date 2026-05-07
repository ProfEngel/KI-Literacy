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

## 🚀 Schnellstart (Infrastruktur)

Um die gesamte Kurs-Umgebung (OpenWebUI, Jupyter-Interpreter, SearXNG-Suche) mit einem Klick zu starten, nutze die bereitgestellte Docker-Konfiguration:

1.  **Repository klonen** oder Dateien herunterladen.
2.  **Docker Desktop** starten.
3.  Im Terminal in den Ordner `deployment/` navigieren und diesen Befehl ausführen:
    ```bash
    docker-compose up -d
    ```

Detaillierte Anweisungen und alternative Deployment-Wege findest du im [Deployment_Guide.md](./deployment/Deployment_Guide.md).

---

## 📂 Ressourcen-Übersicht

### 📖 Dokumentationen & Guides
- **[Deployment_Guide.md](./deployment/Deployment_Guide.md)** – Der vollständige Master-Guide für das Setup von Docker, OpenWebUI, Jupyter und MCP-Servern.
- **[KI-VL-Skript_26.pdf](./docs/KI-VL-Skript_26.pdf)** – Aktuelles Vorlesungsbegleit-Skript.
- **[Linkliste.md](./docs/Linkliste.md)** – Kuratierte Links zu Visualisierungen (Transformer, Tokenizer) und Benchmarks.
- **[Nova_Systemprompt.md](./docs/Nova_Systemprompt.md)** – Das "Gehirn" unserer Kurs-Agentin.

### 🧪 Laborübungen & Multimodale Demodaten
Der Ordner `labor_daten/` enthält spezielles Testmaterial für verschiedene KI-Fähigkeiten. Alle Dateien in diesem Ordner wurden mittels KI generiert und sind somit lizenzfrei für Lehrzwecke nutzbar:
- **Vision:** Bilder für Objekterkennung und Detail-Analysen (z. B. Parkplatz-Check, Wimmelbilder).
- **RAG & Long-Context:** Komplexe PDFs und Word-Dokumente für die "Nadel im Heuhaufen"-Suche.
- **Audio:** Beispieldateien für Transkriptions-Tests.
- **Data Science:** CSV-Dateien für Analysen mittels Code Interpreter.
- **Agentik & Seminararbeit:** 
    - **[agents_demo/](./labor_daten/agents_demo/)** – Ein vollständiges Demo-Paket für einen **OpenWebUI Seminararbeit-Agenten**. Enthält System-Prompts, Skills (didaktisch & poetisch), aktuelle Literaturquellen (RAG) und **Demoprompts** zum Testen.
    - [demoaufgabe_agents_oui.md](./labor_daten/demodokumente/demoaufgabe_agents_oui.md) – Die ursprüngliche Schritt-für-Schritt-Anleitung zur Erstellung von Agenten. *(Falls sich diese im Ordner befand)*

### 🎓 Lerneinheiten (Module)
- **[Tag 01: KI Basics](./modules/Tag01_ki_basics/)** – Die historische Evolution, Tokenisierung und grundlegendes Setup (Cloud & Parameter).
- **[Tag 02: Advanced Prompt Engineering](./modules/Tag02_advanced_prompt_engineering/)** – Anatomie des perfekten Prompts, Few-Shot, Chain-of-Thought und Context Engineering.
- **[Tag 03 & 04: Agents Desktop](./modules/Tag03_04_agents-desktop/)** – KI-Agenten in der professionellen Entwicklungsumgebung (VS Code, Codex, Antigravity).
- **[Tag 05: Agents To-Go & n8n](./modules/Tag05_agents-to-go/)** – Mobile und portable KI-Lösungen für maximale Datensouveränität sowie Low-Code Automatisierung.
- **[Tag 06 - 08: Data Science](./modules/Tag06_08_datascience/)** – Ein umfassendes Modul für KI-gestützte Datenanalyse (Orange3 & Python). Enthält EDA, statistische Modellierung und Business Insights.
- **[Tag 09: Local Deployment](./modules/Tag09_01_local_deployment/)** – Ein Deep Dive für Datensouveränität: Docker, OpenWebUI, Jupyter Sandbox und SearXNG (Demo).
- **[Tag 09: Finetuning](./modules/Tag09_02_finetuning/)** – Wirtschaftlichkeit von RAG vs. Finetuning, Datensatz-Erstellung (.jsonl) und LoRA.
- **[Tag 10: Ethik & Governance](./modules/Tag10_01_ethik_governance/)** – Der EU AI Act, Bias in Daten, Schatten-KI und das Erstellen einer Corporate AI Policy.
- **[Tag 10: The Dark Side](./modules/Tag10_02_dark_side/)** – Model Collapse, Halluzinationen, Flash Wars und das Red Teaming (Jailbreaks & Prompt Injection).

#### Exkurs: Generative Medien
- **[Exkurs: Bilderzeugung](./modules/Exkurs_bilderzeugung/)** – Technische Einführung, Anatomie des Bildprompts, Cheat Sheet und In-/Outpainting.
- **[Exkurs: Videoerzeugung](./modules/Exkurs_videoerzeugung/)** – Kamerasteuerung, Charakter-Konsistenz, Storyboarding und Post-Produktions-Workflows.
- **[Exkurs: Songerzeugung](./modules/Exkurs_songerzeugung/)** – Anatomie des Klangs, Prompting-Techniken (Suno/Udio) und Vocal-Synthesis.
- **[Exkurs: Design & Branding](./modules/Exkurs_design/)** – Gestaltgesetze und KI-Beschleunigung für UI/UX Mockups und Logo-Entwicklung.

### 🛠️ Konfigurationen (`deployment/`)
- `deployment/docker-compose.yml` – Orchestrierung aller Dienste.
- `deployment/searxng_settings.yml` – Konfiguration für die datenschutzkonforme lokale Suche.
- `deployment/requirements_jupyter.txt` – Notwendige Python-Bibliotheken für den Code-Interpreter.

---
*Dieses Repository wird kontinuierlich während der Vorlesungsreihe aktualisiert.*

---
[[Projekt_KI_VL]]

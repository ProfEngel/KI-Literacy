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
3.  Im Terminal diesen Befehl im Ordner ausführen:
    ```bash
    docker-compose up -d
    ```

Detaillierte Anweisungen und alternative Deployment-Wege findest du im [Deployment_Guide.md](./Deployment_Guide.md).

---

## 📂 Ressourcen-Übersicht

### 📖 Dokumentationen & Guides
- **[Deployment_Guide.md](./Deployment_Guide.md)** – Der vollständige Master-Guide für das Setup von Docker, OpenWebUI, Jupyter und MCP-Servern.
- **[KI-VL-Skript_26.pdf](./KI-VL-Skript_26.pdf)** – Aktuelles Vorlesungsbegleit-Skript.
- **[Linkliste.md](./Linkliste.md)** – Kuratierte Links zu Visualisierungen (Transformer, Tokenizer) und Benchmarks.
- **[Nova_Systemprompt.md](./Nova_Systemprompt.md)** – Das "Gehirn" unserer Kurs-Agentin.

### 🧪 Laborübungen & Multimodale Demodaten
Der Ordner `demodokumente/` enthält spezielles Testmaterial für verschiedene KI-Fähigkeiten. Alle Dateien in diesem Ordner wurden mittels KI generiert und sind somit lizenzfrei für Lehrzwecke nutzbar:
- **Vision:** Bilder für Objekterkennung und Detail-Analysen (z. B. Parkplatz-Check, Wimmelbilder).
- **RAG & Long-Context:** Komplexe PDFs und Word-Dokumente für die "Nadel im Heuhaufen"-Suche.
- **Audio:** Beispieldateien für Transkriptions-Tests.
- **Data Science:** CSV-Dateien für Analysen mittels Code Interpreter.
- **Agentik & Seminararbeit:** 
    - **[agents_demo/](./agents_demo/)** – Ein vollständiges Demo-Paket für einen **OpenWebUI Seminararbeit-Agenten**. Enthält System-Prompts, Skills (didaktisch & poetisch), aktuelle Literaturquellen (RAG) und **Demoprompts** zum Testen.
    - [demoaufgabe_agents_oui.md](./demoaufgabe_agents_oui.md) – Die ursprüngliche Schritt-für-Schritt-Anleitung zur Erstellung von Agenten.
- **[Bilderzeugung (Modul)](./bilderzeugung/)** – Ein vollständiges Lehrmodul zur systematischen KI-Bildgenerierung. Enthält eine technische Einführung ([BilderzeugungVerstehen.md](./bilderzeugung/BilderzeugungVerstehen.md)), eine Anleitung mit 16 Aufgaben, ein Cheat Sheet, einen umfangreichen [Prompt-Katalog](./bilderzeugung/diffusion_prompts.md) und multimodale Referenzbilder.


### 🛠️ Konfigurationen
- `docker-compose.yml` – Orchestrierung aller Dienste.
- `searxng_settings.yml` – Konfiguration für die datenschutzkonforme lokale Suche.
- `requirements_jupyter.txt` – Notwendige Python-Bibliotheken für den Code-Interpreter.

---
*Dieses Repository wird kontinuierlich während der Vorlesungsreihe aktualisiert.*

---
[[Projekt_KI_VL]]

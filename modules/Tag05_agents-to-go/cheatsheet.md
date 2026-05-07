# Cheat-Sheet: Agents & Low-Code (Tag 05)

Dieses Cheat-Sheet bündelt die wichtigsten Begriffe und Konzepte für Klausur und Praxis.

## 1. Die Evolution der KI (Stufenmodell)
1. **Chatbots (System 1):** Schnell, reaktiv, probabilistisch (GPT-4o).
2. **Reasoners (System 2):** Denken vor dem Sprechen (Chain-of-Thought), langsamer, präziser bei Logik (OpenAI o1, DeepSeek-R1).
3. **Agents:** Handlungsfähig, bedienen Werkzeuge (Tools) zielorientiert.

## 2. Infrastruktur & Automatisierung
- **API (Application Programming Interface):** Eine Schnittstelle für Maschinen. Nutzt standardisierte Befehle (GET, POST).
- **JSON (JavaScript Object Notation):** Die Sprache der APIs. Key-Value Paare: `{"Kunde": "Müller", "Alter": 42}`.
- **Webhook:** Ein Briefkasten (URL). Meldet Ereignisse sofort per "Push" (z.B. wenn eine E-Mail ankommt), ohne ständiges Nachfragen (Polling).
- **n8n:** Open-Source-Plattform für visuelle Automatisierung (Knoten & Verbindungen).
- **LLM als Router:** Ein Sprachmodell wird in n8n genutzt, um unstrukturierten Text (z.B. eine E-Mail) zu lesen, die Intention zu erkennen und den Workflow entsprechend zu verzweigen.

## 3. Agentic Systems
- **ReAct-Loop:** Das Herzstück eines Agenten.
  - **Thought:** Die KI denkt laut nach ("Ich brauche Umsatzzahlen").
  - **Action:** Die KI ruft ein Tool auf (z.B. `search_database`).
  - **Observation:** Die KI erhält das Ergebnis und beginnt wieder bei *Thought*, bis die Aufgabe gelöst ist.
- **Model Context Protocol (MCP):** Der "USB-C-Stecker" für KIs. Standardisiert die Verbindung zwischen Modellen (Clients) und Datenquellen/Werkzeugen (Servern). So kann eine KI direkt lokale Dateien lesen oder GitHub steuern, ohne Copy & Paste.
- **Guardrails:** Sicherheitsleitplanken, z.B. "Human-in-the-Loop" (ein Mensch muss den Senden-Button einer von KI verfassten E-Mail klicken).
- **Context Engineering:** Das Vorbereiten von Regeln, Ressourcen und Tools (*"Die Axt schärfen"*), bevor man einen Agenten auf eine Aufgabe loslässt.

---
[[Projekt_KI_VL]]

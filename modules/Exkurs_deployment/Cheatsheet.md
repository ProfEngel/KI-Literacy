# Cheatsheet: KI Consulting & Deployment

Nutze diesen Spickzettel für schnelle Architektur-Entscheidungen im Consulting-Alltag.

---

## 1. Cloud vs. Local (Die schnelle Checkliste)

| Kriterium | Managed API (z.B. OpenAI) | GPU Cloud (z.B. Runpod) | On-Premise (Lokaler Server) |
| :--- | :--- | :--- | :--- |
| **Datenschutz** | Niedrig (Datenabfluss) | Mittel (EU-Server möglich) | Sehr Hoch (100% Kontrolle) |
| **Setup-Aufwand** | Sehr Gering | Mittel (Docker/vLLM Setup) | Sehr Hoch (Hardware, Kühlung) |
| **Kosten (CAPEX)** | 0 € | 0 € | Sehr Hoch (Hardwarekauf) |
| **Kosten (OPEX)** | Pay-per-Token (Hoch bei Dauerlast) | Pay-per-Hour (Planbar) | Niedrig (nur Strom/Wartung) |
| **Empfohlen für...** | Prototypen, Private, Startups | Skalierbare Apps, Agilität | Konzerne, Banken, Kliniken |

---

## 2. SWOT-Matrix: Lokales Deployment (On-Premise)

*   **Stärken (Strengths):** Maximale Datensicherheit (DSGVO), planbare Dauerlastkosten (kein Pay-per-Token).
*   **Schwächen (Weaknesses):** Hohe Initialkosten (GPU-Hardware), IT-Know-how für Wartung zwingend.
*   **Chancen (Opportunities):** Aufbau von IP-Wissen (Finetuning), Unabhängigkeit von API-Anbietern.
*   **Risiken (Threats):** Schneller Hardware-Verfall, Engpässe bei plötzlichen Lastspitzen.

---

## 3. Hybrides LLM Routing (Best Practice)

Kombiniere lokale und Cloud-Ressourcen für das beste Kosten-Nutzen-Verhältnis:
1. **Gatekeeper (Lokal):** Nimmt Prompt entgegen. PII (personenbezogene Daten) werden gefiltert/maskiert.
2. **Der Router:** Bewertet die Aufgabe.
    *   *Einfach (Klassifikation, Extraktion):* Route zu lokalem **Llama-3-8B** (Schnell, gratis).
    *   *Komplex (Reasoning, Code-Gen):* Route zu Cloud **Claude 3.5 Sonnet** (Mächtig, kostenpflichtig).
3. **Execution:** Antwort generieren, Maskierung entfernen, an den User ausspielen.

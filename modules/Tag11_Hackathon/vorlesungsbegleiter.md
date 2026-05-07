# Vorlesungsbegleiter: KI-Hackathon (Tag 11)

Heute seid ihr die Architekten einer neuen Arbeitswelt. Dieser Begleiter führt euch durch die Phasen der Master-Challenge.

![KI-Orchestrierung und Hackathon](media/hackathon_orchestration.jpg)
*(Schaubild: Die Orchestrierung aller Kursinhalte in einem Projekt)*

## 1. Die Strategie-Phase (Vormittag)
Bevor ihr programmiert, müsst ihr die "Axt schärfen" (Context Engineering).

- **Team-Diskussion:** Welches Unternehmen wählen wir? Wo brennt es dort am meisten (Zeitfresser-Prozesse)?
- **Prompting-Architektur:** Schreibt nicht nur "einen Chatbot". Definiert klare Rollenverteilungen zwischen verschiedenen Agenten. Nutzt Few-Shot Beispiele für den Tone of Voice.

## 2. Die Bau-Phase (Mittag)
Verbindet das "Gehirn" mit den "Händen".

- **n8n / MCP:** Nutzt die in Tag 05 gelernten Webhooks. Wenn eine neue Datei/E-Mail reinkommt, soll die KI diese nicht nur lesen, sondern eine Handlung auslösen (z.B. einen Kalendereintrag erstellen oder ein PDF generieren).
- **Daten-Check:** Nutzt die Data Science Tools aus Tag 06-08, um zu beweisen, dass eure Automatisierung auf validen Business-Daten basiert.

## 3. Die Audit-Phase (Nachmittag)
Kein System geht ohne Sicherheits-Check live.

- **Bias-Check:** Schaut in eure Datenanalyse. Benachteiligt euer Algorithmus bestimmte Gruppen?
- **Jailbreak-Test:** Versucht, euren eigenen Firmen-Agenten dazu zu bringen, Firmengeheimnisse preiszugeben oder die AUP zu verletzen. Baut dann Guardrails ein, um dies zu verhindern.

## 📅 Abgabe-Checkliste
- [ ] Ordner `Team_[Name]` im Lab-Verzeichnis angelegt.
- [ ] Dokument `strategie_und_governance.md` (AUP & Prompts).
- [ ] Screenshot / Export des n8n Workflows.
- [ ] Data Science Report (Visualisierungen).
- [ ] Kurzes Fazit zum Red Teaming.

---
Viel Erfolg! Zeigt uns, wie die Zukunft der Arbeit aussieht.

---
[[Projekt_KI_VL]]

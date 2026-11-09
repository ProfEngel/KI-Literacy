# Phase 3 · Hugo, der begrenzte Lerncoach

Arbeite in einer separaten Kopie der KI-Lernwerkstatt. Die reine Offline-PWA bleibt unverändert. Baue einen kleinen modelagnostischen Agenten „Hugo“, nutzbar im Harness-Chat/CLI und optional über lokale HTML-UI. Der erste Agent erscheint bereits als Kachel in einem kleinen Hub. Keine schöne UI als Agent ausgeben.

Auftrag: Lernantworten zu Software 1.0, Chatbot und Agent verstehen; freigegebenes Memory vor jeder Beurteilung nachschlagen; bei Unsicherheit rückfragen; nur bei belegter richtiger Antwort erlaubten Fortschritt markieren und danach kontrollieren. Regeln kurz in AGENTS.md, Vorgehen als Skill; deterministische Werkzeuge für Karten, Memory und Fortschritt. Maximal vier Tools je Auftrag, höchstens eine Rückfrage, kein Shell-/Netzwerkzugriff für den Laufzeitagenten. Modell austauschbar, kleinere Modelle erst nach denselben Tests zulassen.

Nutze material/agent/coach.py als lokal begrenztes Werkzeug und dessen SQLite-Memory. Browserdaten sind NICHT automatisch im Harness: nur expliziter validierter Import/Export mit Freigabe; eine Datenwahrheit je Ausbaustand. Keine API-Schlüssel in Browser, Git oder localStorage; für echte Modellaufrufe den vorhandenen Harness nutzen. Eine Schrittanimation muss als Simulation gekennzeichnet sein.

Zeige Tool-Protokoll und prüfe die fünf Fallaufgaben plus Wiederholung: richtige Paraphrase, Teilantwort → Rückfrage, falsche Antwort → nicht abschließen, Prompt-Injection → keine zusätzlichen Rechte, ungültige Tooldaten → keine Änderung; Wiederholung zählt nicht doppelt. IT-Sicherheitsprüfung nach diesem Schritt; optional unabhängige LLM-Reviews mit klaren Grenzen. Vor Senden, Löschen, Veröffentlichung oder Zugriff auf private Daten immer stoppen und fragen.

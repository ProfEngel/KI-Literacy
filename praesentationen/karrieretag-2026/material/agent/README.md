# Hugo · Demoordner für den Harness

Dieser Ordner enthält Regeln, einen Skill und deterministische SQLite-Werkzeuge. Er ist allein noch kein autonom laufender Agent. Öffne ihn in Deinem bereits vorhandenen Harness, lasse AGENTS.md und SKILL.md lesen und gib einen klaren Auftrag. Das Harness-Modell interpretiert die Antwort und wählt die erlaubten Werkzeuge; coach.py erledigt konkrete Datenoperationen. Keine zusätzliche kostenpflichtige API wird eingerichtet.

Start ohne UI: „Prüfe meine Antwort zur Karte agent: Ein Helfer sucht passende Tools aus und kontrolliert das Ergebnis. Nutze zuerst Dein Memory; bleibe innerhalb AGENTS.md.“

`python3 coach.py memory agent` · `python3 coach.py status`

Die lokale Datei coach.sqlite wird beim ersten Aufruf erzeugt, nicht veröffentlicht. PWA-localStorage bleibt getrennt. Ein Import/Companion wäre ein weiterer, gesondert geprüfter Ausbauschritt, nicht bereits vorhanden. Für iPhone/iPad ist die reine PWA vorgesehen.

Abnahmekatalog in tests.md. Nach jeder Erweiterung erneut prüfen. Keine tatsächlichen Testresultate des LLM vorgegeben. Keine Sicherheitszertifizierung.

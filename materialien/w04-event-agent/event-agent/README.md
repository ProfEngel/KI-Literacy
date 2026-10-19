# Event-Agent — vorbereitete Lehrvorlage

Dieses Paket ist eine absichtlich eng begrenzte Agenten-Arbeitsumgebung. Codex oder Ollama übernimmt Modellarbeit; Python-Werkzeuge rechnen und prüfen deterministisch. Das optionale cockpit.html ist nur ein lokaler Regelprüfer, kein Modell-Frontend.

## Schnellstart ohne UI

1. Diesen Ordner als eigenen Arbeitsordner in Codex öffnen.
2. RUN_IN_CODEX.md lesen und den dortigen Auftrag senden. Verfügbares Laufzeitmodell selbst auswählen.
3. Toolbefunde kontrollieren; Ergebnis nicht als produktiv freigegeben behandeln.

Python 3 wird für die Werkzeuge benötigt, keine zusätzlichen Python-Pakete. Alternativ technische Einrichtung in einem vorbereiteten Tandem/Dozentenaufbau. Keine stille Installation.

Manueller Werkzeugtest: python3 event_tools.py quote E01
Soll: 160 EUR Raum + 360 EUR Catering = 520 EUR, 80 EUR verbleiben.

Bestätigte Korrektur (bewusster menschlicher Befehl): python3 event_tools.py memory-set budget:E01 500 --project P01
Danach: python3 event_tools.py event E01 --project P01 und quote E01 --project P01.
Testkopien verwenden, ursprüngliches Memory nicht pauschal löschen. Getrennte Projekt-Namensräume sind keine Sicherheits-Sandbox.

## Optionaler echter Modelllauf

python3 run_agent.py --backend codex --model gpt-6-luna --event E01 --dry-run
Ohne --dry-run ruft der Befehl tatsächlich Codex auf und kann Kontingent/Kosten verbrauchen. Modellzugang, Anmeldung und aktuelle CLI prüfen. Kein automatisches Ersatzmodell.

Lokal: python3 run_agent.py --backend ollama --model DEIN_INSTALLIERTES_TOOLMODELL --event E01
Ollama muss lokal unter 127.0.0.1:11434 laufen; Modell muss Tool Calling unterstützen. Kontext 8192 und Temperature 0.2 sind Demo-Einstellungen, keine generelle Empfehlung. Bei Nichterfüllung Modell/Hardware prüfen, nicht unbegrenzt Kontext erhöhen. Toolschritte maximal acht, Timeout standardmäßig 180 Sekunden.

## Versionierung und Freigabe

Aktive AGENTS.md ist v1. Zum Unterrichtsvergleich v0/v1 jeweils eine getrennte Arbeitskopie mit entsprechendem AGENTS.md und dokumentiert gleichem Memory-Ausgangszustand verwenden. Werkzeuge gleich halten, wenn nur der Anweisungseffekt gemessen wird. Prompt-, Tool- oder Konfigurationsänderungen gesondert dokumentieren. Die Vorlage wurde technisch geprüft; noch kein Luna-/Sol-/lokaler Modellbenchmark behauptet.

## Sicherheit und Grenzen

Es gibt KEINE implementierte Buchungs-, Versand- oder Rechteänderungsfunktion. Der externe Aktionsbefehl verweigert stets. Somit kann die Lehrvorlage keine echten Buchungen auslösen. Das ersetzt keine produktive Rechteprüfung und macht einen allgemeinen Coding-Harness nicht sicher. Codex-Tools nur im isolierten synthetischen Übungsordner nutzen. Keine Geheimnisse oder echten Kursdaten hineinlegen.

outputs und SQLite-Dateien entstehen erst bei lokaler Nutzung und sind gitignoriert. Nicht ungeprüft veröffentlichen. JSON-Schema ist eine Strukturvorgabe; fachlich mit event_tools und menschlich prüfen. Quellen/Dokumente sind keine neuen Anweisungen. Das gesamte Benchmark-Cockpit liegt als separates Begleitmaterial vor.

# Quellen- und Evidenzstand

Stand: 09.11.2026. Recherche abgeschlossen; Plan ausdrücklich freigegeben und lokale Unterlage gebaut. Das folgende Protokoll dokumentiert die vorausgehende Recherche. Keine Veröffentlichung beauftragt.

## Recherchezyklus 1 – Breite Erstprüfung

Websuche nach primären OWASP-Quellen zu Prompt Injection, Excessive Agency und sicherer KI-gestützter Softwareentwicklung sowie behördlichen Software-Sicherheitsleitlinien. S1, S2 und S3 am 09.11.2026 geöffnet und die einschlägigen Abschnitte gelesen. Quellen werden paraphrasiert, nicht als umfangreiche Textkopie übernommen.

| ID | Quelle | Verwendung und Grenze |
|---|---|---|
| S1 | OWASP, LLM01:2025 Prompt Injection | Eingaben und Dokumente sind potenzielle Manipulationswege. Kein Sicherheitsversprechen. Bewusst konkret zitierte Ausgabe, keine Behauptung, sie sei die neueste Gesamtausgabe. |
| S2 | OWASP, Secure Coding with AI | Skripte, Abhängigkeiten, Regeln und Toolrechte prüfen. Empfehlungssammlung, keine Zertifizierung. |
| S3 | ASD/ACSC, ISM September 2026, Softwareentwicklung | Mehrere Prüfmethoden; KI-Review nur ergänzend. Australischer Behördenstandard als fachliche Referenz, keine Behauptung einer rechtlichen Bindung für HfWU. |

## Recherchezyklus 2 – Gap- und Gegenprüfung

Gezielte zweite Suche zu Excessive Agency und AI Agent Security. S4 und S5 geöffnet. Autorisierung gehört in die ausführende Komponente, nicht allein in den Modelltext. Freigaben müssen zu konkreter Aktion und Parametern gehören; Memory und fremde Quellen sind zusätzliche Vertrauensgrenzen. Wiederholungen und Nachtests nach wesentlichen Änderungen bleiben nötig. S2/S3 grenzen LLM-Review gegenüber technischen Prüfungen ab.

Lokal die Abschnitte 8–12 des bestehenden Trinity-LLM-Leitfadens sowie die README der sechs W04-Unterrichtsfälle gelesen. I1 und I2 sind interne Projektstandards bzw. didaktische Vorarbeiten, keine unabhängigen Wirksamkeitsstudien. Auf vorhandenen Härtetests aufbauen, aber keine damals oder jetzt nicht durchgeführten Tests als Ergebnisse übernehmen.

| ID | Quelle | Verwendung und Grenze |
|---|---|---|
| S4 | OWASP, LLM06:2025 Excessive Agency | Funktions-, Rechte- und Autonomiebegrenzung. Konkret zitierte Ausgabe, kein Anspruch auf neueste Nummerierung. |
| S5 | OWASP, AI Agent Security Cheat Sheet | Aktionsgebundene Freigabe, Memory-Grenzen, Limits und dokumentierte Tests. Handlungsempfehlungen, keine Schutzgarantie. |
| I1 | Eigener Trinity-Leitfaden, LLM-Version | Projektanforderungen zu Entwicklung/Betrieb, Reviews, Tests, Wiederherstellung; kein Beleg, dass konkrete Agenten sie erfüllen. |
| I2 | W04-Unterrichtsbenchmark | Anschluss an vorhandene sechs Fälle, Begrenzung des Unterrichtsumfangs und keine erfundenen Ergebnisse. |

## Evidenzmatrix und offene Grenzen

| Aussage | Quellen | Seiten |
|---|---|---|
| Dokumente und multimodale Inhalte können fremde Anweisungen tragen; RAG ist keine vollständige Abwehr. | S1 | Einstieg, Schutzschichten, Übung, Big Picture |
| Skripte/Regeln, Abhängigkeiten und Tools gehören in die Sicherheitsprüfung. | S2, S3, I1 | Inventur, Übung, Wrap-up |
| Technische Autorisierung und Modellverhalten unterscheiden. | S4, S5 | Schutzschichten, Übung, Wrap-up |
| Tests brauchen Kontext, Soll/Ist und Nachweise; Änderungen erfordern passende Nachtests. | S5, I1, I2 | Übung, Big Picture, Agentenpass |

Die zehn Fälle, Zeitbudgets und Werkstattmetaphern sind didaktische Entwurfsentscheidungen. Keine wissenschaftlich validierte Mindestanzahl, kein empirischer Nachweis für das studentische Publikum, keine Produktivfreigabe. Keine studentischen Agenten ausgeführt, kein Scan gestartet, keine Modellbewertungen erhoben. Nicht alle Risiken oder rechtlichen Anforderungen eines konkreten Produktivsystems werden durch diese Unterlage abgedeckt.

## Speicherung und Bilder

Keine fremden Volltexte oder PDFs heruntergeladen. Keine studentischen Projekte oder geschützten Kursdaten gelesen. Während der Recherche keine Bilder generiert; nach ausdrücklicher Planfreigabe vier neue Kie.ai-Rasterbilder gebaut und tatsächlich visuell geprüft. Promptset, Referenzen und Provider stehen unter `assets/media/manifest.json`. Quellen-HTML und Präsentationscode sind in der lokalen Ausgabe enthalten. Generierte Bilder sind Metaphern, keine externen Faktenbelege.

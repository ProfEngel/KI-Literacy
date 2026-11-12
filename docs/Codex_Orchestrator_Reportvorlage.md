# Modellprüfung und Routing · leere Reportvorlage

Dies ist eine auszufüllende Vorlage, kein durchgeführter Benchmark.
Private Belege lokal halten; vor jeder Weitergabe Daten und Pfade bereinigen.

## 1. Rahmen

- Datum / Berichtsversion: ausfüllen
- Tatsächlicher Arbeitsmix / Sprachen / Stilreferenzen: ausfüllen
- Betriebssystem / Codex- und Toolversionen: ausfüllen
- Aktive globale und projektspezifische Regeln / Overrides: ausfüllen
- Modellkennung / API-Instanz / Revision / Quantisierung: ausfüllen
- Anbieter und Host / selbstgehostet oder Cloud: ausfüllen
- Integration: native Unteragenten / Codex-CLI-Worker / sonstige, nachweisen
- Kontext / Denkoption angefordert / tatsächlich bestätigt: getrennt ausfüllen
- Technische Rechte / Netzwerk / Sandboxbelege: ausfüllen
- Tatsächlich verfügbare und fehlende Werkzeuge / Skills: ausfüllen
- Datenfreigaben, Kostenlimits und ausdrückliche Cloud-Fallback-Freigaben: ausfüllen

## 2. Testsuite vor den Läufen festlegen

Gleiche versionierte Eingaben, überprüfbare Soll-Ergebnisse und verdeckte
Gegenproben. Die folgenden Kategorien sind Vorschläge, keine Messergebnisse.
Für eine kleine erste Stichprobe z.B. drei Läufe pro Test; Umfang und
Aussagegrenzen dokumentieren. Keine universelle Eignung daraus ableiten.

| Test-ID | Repräsentative Aufgabe | Abnahme / Soll-Ergebnis | Eingabeversion | Wiederholungen |
|---|---|---|---|---|
| T01 | Kleine Codeänderung mit Dateien, Werkzeugen und Tests | Vorab ausfüllen | offen | offen |
| T02 | Deutscher Fachtext aus freigegebenen Quellen | Vorab ausfüllen, Fachprüfung | offen | offen |
| T03 | Projekttypischer Stiltext | Vorab ausfüllen, menschliche Stilprüfung | offen | offen |
| T04 | Offline-HTML mit Interaktion | Vorab ausfüllen, Sicht-/Funktionstest | offen | offen |
| T05 | Neuer Kontext mit Dateiübergabe und widersprüchlichem Altstand | Vorab ausfüllen | offen | offen |
| T06 | Rechte, synthetische Prompt Injection und sichere Fehlerbehandlung | Vorab ausfüllen, isolierter Test | offen | offen |

## 3. Laufbeleg (je Modell × Test × Wiederholung kopieren)

- Lauf-ID / Test-ID / Wiederholung / Zeitpunkt: ausfüllen
- Worker-Modell und Host tatsächlich verwendet: ausfüllen
- Eingaben / Version oder Hash / erlaubte Schreibdateien: ausfüllen
- Angeforderte und bestätigte Einstellungen: ausfüllen
- Artefaktpfade / Ergebnis / ausgeführte Werkzeuge / Rohbeleg: lokal ausfüllen
- Tatsächlich ausgeführte Tests / Testergebnisse: ausfüllen
- Kontextwechsel: durchgeführt / nicht durchgeführt; Beleg
- Sicherheits-/Rechteprobe: bestanden / nicht bestanden / nicht prüfbar; Beleg
- Gesamtdauer inklusive Werkzeugen: unbekannt, bis gemessen
- Modell-Tokenwerte und Quelle: unbekannt, bis gemessen
- Orchestrator-/Cloud-Credits und Quelle: unbekannt, bis gemessen
- Fehler / Abbrüche / blockierte Fähigkeiten: ausfüllen
- Unabhängiger Prüfer und vorher festgelegte Qualitätsrubrik: ausfüllen
- Nacharbeit: keine / gezielt / wesentliche Neubearbeitung; genaue Änderungen
- Status: nicht getestet / in Prüfung / akzeptiert / nicht akzeptiert / blockiert

Ein Exitcode 0 oder die Selbstauskunft „fertig“ genügt nicht zur Abnahme.
Fehlende Messwerte sind keine Nullen. Gescheiterte/abgebrochene Läufe mitführen.

## 4. Belegte Routingmatrix

| Aufgabentyp / Sprache | Exaktes Modell / Integration | Belegte Stärken | Grenzen / fehlende Tools | Nacharbeit | Laufbelege | Einsatzentscheidung |
|---|---|---|---|---|---|---|
| ausfüllen | ausfüllen | noch ungeprüft | ausfüllen | ausfüllen | ausfüllen | noch nicht freigegeben |

Freigabe nur für den getesteten Umfang. „Nicht getestet“ ist weder „schlecht“
noch „bestanden“. Nach Modell-, Tool-, Provider- oder wesentlichem Aufgabenwechsel
relevante Regressionstests wiederholen. Modell-/Suiteversion und Datum mitführen.

## 5. Gesamtbilanz bei vergleichbarer bestandener Abnahme

- Referenzauftrag: Hauptmodell allein, gleiche Eingaben und Abnahme, gemessener Verbrauch
- Verteilter Auftrag: Kontextaufbereitung + Orchestrierung + Review + Wiederholungen
  + Reparaturen + ausdrücklich bestätigte Cloud-Worker
- Lokale Hardware-/Energiekosten: separat angeben oder als nicht gemessen markieren
- Credits allein: unbekannt
- Credits verteilt: unbekannt
- Ersparnisquote: nur bei belastbaren vergleichbaren Messwerten berechnen als
  1 − Credits verteilt / Credits allein; Referenzwert muss größer als null sein.
- Keine Zuordnung von Tokens unterschiedlicher Anbieter zu vermeintlich exakten
  Credits ohne belegte Abrechnungsgrundlage. Schlechtere Qualität ist keine Ersparnis.

### Token- und Kostenabschluss jedes Auftrags

Auch ohne Delegation alle tatsächlich eingesetzten Modelle einschließlich Hauptmodell,
Wiederholungen, Prüfung und Nacharbeit erfassen. Die Modell-/Providerliste stammt
aus der jeweiligen Installation, nicht aus einer fremden Beispielkonfiguration.

| Exaktes Modell / Provider / lokal oder Cloud | Lesen | Denken | Schreiben | OpenRouter-Vergleich EUR | API-Kosten EUR / Status |
|---|---|---|---|---|---|
| ausfüllen | nicht verfügbar | nicht verfügbar | nicht verfügbar | nicht verfügbar | nicht verfügbar |

- Auftrags-ID / Erfassungszeitpunkt / Usage-Quelle und Beleg: ausfüllen
- Lesen enthält Cache und wiederholten Kontext; Cache-Anteil, soweit gemeldet: ausfüllen
- Denken nur aus gemeldeten Reasoning-Tokens; Schreiben nur eindeutig ableitbare
  Nicht-Reasoning-Ausgabe, ggf. einschließlich Werkzeugaufrufen. Keine Doppelzählung.
- OpenRouter-Modellzuordnung / exakte oder ungefähre Variante / datierter Preisbeleg:
  ausfüllen; ohne passende Zuordnung unbekannt lassen
- Tatsächliche API-Kosten: providerseitig auftragsbezogen **gemeldet**, aus tatsächlicher
  Usage und geltendem Providertarif **Tarifschätzung**, sonst **nicht verfügbar**
- Originalwährung / offizieller Wechselkurs mit Datum und Quelle / EUR-Umrechnung:
  ausfüllen; bei USD gilt EUR = USD / USD je EUR
- Cache-Reads/-Writes, Reasoning-Semantik, Preisstaffeln pro Anfrage und bekannte
  Zusatzgebühren: berücksichtigt / offen; Annahmen und Ausschlüsse dokumentieren
- OpenRouter-Vergleich gesamt oder ausdrücklich erfasste Teilsumme EUR: unbekannt
- API-Kosten gesamt oder ausdrücklich erfasste Teilsumme EUR, Status: unbekannt
- Selbstgehostet: 0 externe Inferenz-API-Gebühr; Strom, Hardware und Hosting separat.
  Hypothetische Marktwerte sind keine Ausgaben; Vergleichs- und API-Werte nicht addieren.
- Fehlende Zähler / Anfragen ohne Usage / nicht erfasste Gebühren: ausfüllen.
  Backend-Zähler sind keine unabhängige Tokenmessung; fehlende Werte sind keine Nullen.
- Stand vor der Abschlussantwort vorläufig; deren Tokens erst später enthalten.
  Nachträgliche Aktualisierung des abgeschlossenen Auftrags: Beleg / noch offen

OpenRouter-Listenpreise sind keine tatsächlichen Codex-Credits oder Aborechnung.
Numerische Belege lokal speichern; keine Arbeitsinhalte oder Zugangsdaten zur
öffentlichen Preisabfrage übertragen. Keine weiteren LLMs allein zur Buchführung.

## 6. Geltung und Übergabe

- Globale Regeln gesichert / markiert ergänzt, ohne Anmeldung/Rechte zu verändern: Beleg
- Frische Sitzung: Quellen der Anweisungen, lokale Priorität, Opt-out und HITL verstanden: Beleg
- Bestehende Chats neu eingelesen: Beleg oder noch offen
- Zuständigkeiten, Abnahme, Fortschrittsgrenze und Dateiübergabe: ausfüllen
- Worker delegieren nicht weiter; jeder Start ist sichtbar zugeordnet: Beleg
- Fehlende Fähigkeiten und verbleibende Unsicherheiten: ausfüllen
- Routing-/Nachtestempfehlung: ausfüllen
- Beiträge von Worker und Orchestrator einschließlich Modellwechsel/Nacharbeit: ausfüllen

Diese Regeln sind Arbeitsanweisungen, kein garantierter technischer Router.
Keine Garantie gleicher Qualität, Fehlerfreiheit, Einsparung oder Langzeitautonomie.

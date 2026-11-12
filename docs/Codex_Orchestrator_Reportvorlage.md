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

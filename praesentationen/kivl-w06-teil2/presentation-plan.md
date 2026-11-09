# W06 · Teil 2: Mein Agent unter Sicherheitsprüfung

**Status: Nutzer erteilt am 09.11.2026 ausdrücklich FREIGABE; lokaler Bau und Qualitätsprüfung abgeschlossen. Anschließend als Woche 6 · Teil 2 zur Veröffentlichung beauftragt; siehe FREIGABE.md.**

## Bestätigter Anlass und Annahmen

- Nutzer beauftragt eine verständliche Unterlage zu Daten-, agentischer und IT-Sicherheit mit Skriptprüfung, Prompt Injection, Guardrails und nachweislichem Testing des eigenen Agenten.
- Folgende Nutzerentscheidung: **Teil 2 für Donnerstag, 12. November 2026, nach Dokumenten/RAG/Memory.**
- Teil 1 bleibt die bestehende 30-Minuten-W06-Fassung. Vorschlag Teil 2: **40 Minuten, sieben kompakte Workshopseiten**. Zusammen ca. 70 Minuten; kein neues W07-Theorieprogramm.
- Zielgruppe: BWL-Studierende mit unterschiedlichen technischen Vorkenntnissen; vorhandene Projekte, kein Neubau und keine Pflichtinstallation.
- Ergänzter Nutzerwunsch: Metaphern, echte Bilder und zweckmäßige Interaktionen bis hin zur Simulation sind ausdrücklich erwünscht. Die Simulation ist Erklärung, kein Testnachweis des eigenen Agenten.
- Sprache Deutsch; 16:9; `trinity-klar` / **Trinity Klar – bewährter Standard**. Creme/Petrol/Salbei, große Schrift, runde Bildkanten, dezente Schatten. Aktuelle W04–W06-Workshopführung, nicht historischer 32-Folien-Stil.
- Bestätigte kompakte Architektur analog zur W06-Ausnahme: Agenda und Initialfrage im Einstieg; Quellenverzeichnis als ausdrücklich benannter Schlussreiter. Keine separaten leeren Frage-/Agenda-/Pausenfolien.
- **Nach Sichtung Veröffentlichung dieses neuen Teils beauftragt:** https://profengel.github.io/KI-Literacy/praesentationen/kivl-w06-teil2/ Bisherige Wocheninhalte, Buch, Warehouse und Intern unverändert; README/Kursseite erhalten die W06-Teil-2-Verlinkung.

## Lernziel und roter Faden

**Was darf mein Agent – und wie zeige ich, dass seine Grenzen funktionieren?**

Studierende unterscheiden Anweisung, technisch erzwungene Grenze und beobachteten Testnachweis. Sie kennen ihre Datenwege, erkennen Manipulationsversuche und können offene Risiken benennen. Die Unterlage vermittelt Awareness und begrenzte Lehrtests, keine IT-Security-Zertifizierung.

Ein fiktiver Event-Agent begleitet alle Beispiele. Übertragung auf den eigenen Agenten bleibt ausdrücklich erwünscht. Hugo arbeitet in einer Werkstatt: Arbeitsauftrag = Regeln; Schlüssel = technische Rechte; Werkstückprüfung = Tests; ProfEngel/Mensch = Entscheidung und Verantwortung. Das Sprachmodell ist Technik, kein menschlicher Verantwortlicher.

## Sieben Seiten · 40 Minuten

| Zeit | Seite / ID | Inhalt und Aussage | Bild / Interaktion | Evidenz |
|---|---|---|---|---|
| 0–2 | 1 · `safety-01-start` · **Mein Agent unter Sicherheitsprüfung** | Brücke aus RAG: Dokumente liefern Wissen, können aber auch fremde Anweisungen enthalten. Leitfrage, Mini-Fahrplan „Ansehen – Begrenzen – Nachweisen“. | Neue zusammenhängende Werkstattmetapher: Hugo mit begrenztem Schlüsselbund, Dokumentenpost und Prüfprotokoll. Handzeichen: „Wenn mein Agent höflich ablehnt, ist er damit technisch abgesichert?“ | S1, S4, I1 |
| 2–9 | 2 · `safety-02-inventur` · **Was steckt drin – und wohin gehen meine Daten?** | Zwei getrennte Prüfobjekte: Skripte/Abhängigkeiten/Skills prüfen und tatsächliche Datenwege/Rechte prüfen. Auch Ausgaben sind Eingaben für nachfolgende Systeme: generierte Befehle nicht blind ausführen, HTML nicht ungeprüft aktiv darstellen. Lokal ≠ automatisch privat; UI ≠ Backend. | Werkstatt-Inventar mit fünf anklickbaren Gegenständen: Skript, Datenordner, Schlüssel, Netzwerkleitung, Not-Aus. Je ein BWL-Beispiel statt Fachwortliste. Kopierbarer, zunächst nur lesender Inventur-/Reviewprompt. | S2, S3, I1 |
| 9–17 | 3 · `safety-03-guardrails` · **Bitte nicht ist kein Schloss.** | Drei Schutzebenen: klare Regeln; technische Grenzen für Dateien, Tools, Netzwerk, Laufzeit; aussagekräftige Prüfung und menschliche Freigabe. Direkte Anfrage vs. versteckte Anweisung im Dokument; Memory kann falsche Regeln dauerhaft weitertragen. | Neue Rastermetapher plus lokale, ausdrücklich didaktische Schalter: erlaubter Auftrag / manipuliertes Dokument; nur Hinweiszettel / zusätzlich abgeschlossenes Werkzeugfach. Sichtbar: was Modell, Rechteprüfung und Mensch jeweils entscheiden. Kein echtes Modell und keine behauptete bestandene Prüfung. | S1, S4, S5, I1 |
| 17–32 | 4 · `safety-04-eigenpruefung` · **Drei Gegenproben für meinen Agenten** | 2 Min sichere Vorbereitung, 10 Min drei Fälle, 3 Min Befunde/Agentenpass: Normalfall; fremde Anweisung im Dokument; unerlaubte Aktion. Soll vorher notieren; danach Antwort, Toolversuch, technische Sperre und Außenwirkung unterscheiden. | Eigenständige Arbeit, kein Tandemzwang. Eigenes Produktbild eines Testcockpits. Auftrag, Prompt, Material, Checkliste und Timer auf EINER Seite. Kleine 15-Min-Uhr rechts oben, Start/Pause/Reset; Teststatus offen/bestanden/fehlgeschlagen/nicht durchführbar/nicht anwendbar mit Begründung. Eine technisch blockierte Aktion ist ein mögliches Soll-Ergebnis, kein eigener Teststatus. Kein Gesamtsiegel aus drei Fällen. | S1, S4, S5, I2 |
| 32–36 | 5 · `safety-05-wrapup` · **Was hat die Grenze tatsächlich bewirkt?** | Ein belegter Befund, ein offener Punkt, ein nächster Schritt. Einmal freundlich verweigert ≠ technisch gesperrt; dokumentierter Toolversuch und blockierte Ausführung ≠ tatsächlicher Datenabfluss. | Eine Wrap-up-Seite, diskrete 4-Min-Uhr. Erwartete Erkenntnisse zunächst eingeklappt. Einfache Vergleichskarten „Behauptung / Beobachtung / Nachweis“. Nachbesserungsvorschlag darf keine automatische Codeänderung auslösen. | S2, S4, S5 |
| 36–39 | 6 · `safety-06-big-picture` · **Der sichere Arbeitsweg – mit offenen Grenzen** | Quelle/Eingabe → begrenzter Agent mit geprüften Tools und Daten → konkrete Freigabe → Aktion/Ergebnis → Protokoll/Stop/Wiederherstellung. Veränderung an Agent, Modell, Tool oder Memory-Regeln verlangt passende Wiederholungsprüfungen. | Zwingend neu generierte Raster-Infografik; Hugo in der Werkstatt, Mensch am Freigabepunkt. Keine Textwüste, kein SVG-Ersatz, keine „100 % sicher“-Plakette. Vergrößerbar, exakte Kernaussagen zusätzlich als HTML. | S1, S4, S5, I1 |
| 39–40 | 7 · `safety-07-agentenpass` · **Mein Agentenpass & Quellenverzeichnis** | Pass und Prüfstand sichern; Grenzen statt Sicherheitszertifikat dokumentieren. Quellen in ausdrücklich benanntem Reiter; vollständiger Anhang offline. | Pass/Checkliste als lokale Downloads; leerer bzw. synthetischer Zustand. Export nur bewusst, kein Cloudsync, kein öffentliches Hochladen von Projektberichten. | S1–S5, I1–I2 |

## Unterricht und Vertiefung klar trennen

**Live:** nur drei Kernfälle (T01, T04, T06). Für nicht laufende oder nicht sicher isolierbare Projekte: lesende Inventur und Testplanung, alle nicht ausgeführten Fälle offen. Kein gefährlicher Ausführungsversuch, um einen Haken zu erhalten.

**Danach:** zehnteilige Checkliste mit Transferfällen, Wiederholung, Memory, fremdem Projekt, Ausfall, Limits und Wiederherstellung. Skript-/Abhängigkeiten-/Secretprüfung mit passenden vorhandenen Werkzeugen; fehlende Voraussetzungen offen. Bei unabhängigem Modellreview Codeweitergabe und Kosten vorher klären. Die bestehende Trinity-Forderung nach 2–3 unabhängigen Reviews für eine vollständige Freigabe bleibt erhalten, wird aber nicht als in 40 Minuten automatisch erfüllt dargestellt.

Kein Nachweis vollständiger Produktionsreife, keine neue unangekündigte Prüfungsanforderung. Kritische Rechte-/Datenbefunde: betroffene Funktion deaktiviert lassen und fachkundige Hilfe einholen. Eine begrenzte, beaufsichtigte Lehrdemo ist von einem Pilot- oder Produktivbetrieb zu unterscheiden.

## Medienplan nach FREIGABE

### Intuitive Simulation: Hugos Werkstatt und die fremde Nachricht

Ein Fall, drei Ansichten: (1) legitimer Auftrag, (2) manipulierter Beipackzettel in einer Datei, (3) unerlaubter Zugriff. Schalter für **nur eine Regel** und **zusätzlich technische Grenzen** verändern den sichtbaren Ablauf. Ein animierter Auftragszettel läuft von der Eingangspost zu Hugo und dann zum Werkzeugfach. Angeforderte Aktion und tatsächlich erlaubte Ausführung erscheinen getrennt; eine Schranke verhindert bei aktivierten Rechten die unerlaubte Ausführung. Ein weiterer Reiter zeigt das konkrete Freigabefenster mit Ziel, Daten und Aktion.

Das Modellverhalten ist ein vorgegebenes didaktisches Szenario, keine behauptete Vorhersage jedes LLM-Verhaltens. Ein echter, rein lokaler JavaScript-Regelprüfer kann die fiktiven Berechtigungen in dieser Demo auswerten; er schützt damit nicht automatisch die Umgebung der Studierenden. Dauerhafte Kennzeichnung **Simulation – kein Sicherheitsnachweis**. Keine echten Dateien/Netzziele, kein Modellaufruf, keine ausführbaren Nutzerbefehle. Bei reduzierter Bewegung dieselben Zustände ohne Animation zeigen.

Eine Zusatzfrage macht drei IT-Sicherheitsziele greifbar: **Vertraulichkeit** (wer darf lesen?), **Integrität** (wer darf ändern?) und **Verfügbarkeit** (bleibt der Dienst nutzbar bzw. lässt er sich wiederherstellen?). Technische Details nur als aufklappbare Hilfe.

Vier neue echte Rastermotive, bevorzugt über tatsächlich verfügbare Kie.ai-Pipeline:
1. Titel/Werkstatt mit begrenztem Schlüsselbund; für Inventar wieder nutzbar.
2. Schutzschichten als Werkstatt mit Hinweiszettel, Schloss, Prüftisch und menschlicher Freigabe.
3. Übungsprodukt: schlichtes Testcockpit mit Soll/Ist/Beleg und offenem Fall.
4. Schlussinfografik des vollständigen kontrollierten Arbeitswegs.

Keine Generierungsjobs vor Planfreigabe. Figurenreferenzen bei Verwendung vorab wirklich als Bilder öffnen und analysieren. Kein Provider wird ohne tatsächlichen Aufruf behauptet. Prompt, Modell, Datum, Referenzen und Lizenz-/Provenienzstatus dokumentieren. Keine vorhandene Bilddatei in dieser Planphase semantisch aus Dateinamen „geprüft“.

## Geplante Lieferung nach Freigabe

- Vollständige AA-Startdatei `AA_W06_Teil_2_Agentensicherheit.html`, kompatible Vollfassung `presentation.html`, Review, Theme, Druck und Tastaturbedienung.
- Folienweiser Dozentenleitfaden mit Beispiel, Moderation, Stolperstellen und Übergängen.
- Interaktiver lokaler Testbogen und Agentenpass, manueller JSON-/Markdown-Export, Druckansicht; keine Modell-/API-Verbindung im Testbogen.
- Synthetische Testdateien, kopierbare Prompts für Inventur, sichere Gegenproben und unabhängiges Review. Keine Schadsoftware, produktiven Zugänge oder fremden Angriffsziele.
- Erklärende Read-only-Rückfallvariante ohne Agentenstart.
- Aktuelle W06-Teil-1-Dateien nicht inhaltlich umschreiben. Nach Fertigstellung portable W06-Teile eindeutig verlinken/verpacken; keine unabhängigen Redaktionskopien in `Vorlesungen`.
- ZIP/Nutzungspaket erst aus geprüfter Werkstattfassung erzeugen. GitHub-Publikation separat freigeben lassen.
- Prüfung: Quellen, Medien, Timer, Export/Import, Tastatur, Dark/Light, Offline, Quellenverzeichnis, Druck und keine erfundenen Prüfresultate.

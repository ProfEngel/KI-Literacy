# Dozentenleitfaden · W03 · LLM und Prompting

180 Minuten inklusive Pause. Moderations-/Zeitplanbutton auf jeder Folie. Startzeiten sind relative Richtwerte. Keine KI-Antworten oder Modell-Erfolge vorwegnehmen.
## 01 · LLM und Prompting: verstehen, ausprobieren, bauen

ID: w03-cover · Block 0–5 Minuten · Typ O

Begrüßen Sie mit dem konkreten Ziel: Heute entsteht ein benutzbares lokales Produkt. Keine Agentenarchitektur vorweg erklären. Fragen Sie, wer schon eine von KI erzeugte Datei tatsächlich außerhalb des Chats verwendet hat.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1, M1

## 02 · Erst experimentieren, dann eine eigene Anwendung bauen

ID: w03-agenda · Block 0–5 Minuten · Typ O

Ordnen Sie die erste Hälfte als kurze Experimente, die zweite als längere Bauphase ein. Der Newsflash und zwei Demos folgen erst, wenn der große Bau läuft. Die Folien bleiben übersichtlich; Prompts und Erkenntnisse werden bei Bedarf aufgeklappt.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1

## 03 · Wie wird aus einer ungenauen Anfrage eine zuverlässige Anwendung?

ID: w03-question · Block 0–5 Minuten · Typ R

Initialfrage zunächst stehen lassen. Zwei spontane Vermutungen reichen; noch keine Musterlösung zeigen. Die Abschlussinfografik beantwortet dieselbe Frage anhand der Arbeitsschritte.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1

## 04 · Text wird in modellabhängige Bausteine zerlegt

ID: w03-token · Block 5–20 Minuten · Typ T/I

Lassen Sie zwei Bausteine einzeln entstehen. Machen Sie ausdrücklich klar, dass das Beispiel ein Spielzeug-Vokabular verwendet. Der tatsächliche Tokenizer ist modellabhängig; es gibt keine universelle Regel „vier Zeichen sind ein Token“.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P3, REV-TOK

## 05 · Ähnliche Verwendungen können ähnliche Repräsentationen erzeugen

ID: w03-space · Block 5–20 Minuten · Typ T/I

Drehen Sie den Raum, wählen Sie Kaffee und Fußball. Fragen Sie, welche Nachbarn erwartet wurden. Die Zahlenbeispiele bezeichnen verschiedene Modellgrößen: interne Repräsentationsbreite versus ausgegebenen Text-Embedding-Vektor. Nicht gleichsetzen, keine Ähnlichkeitsmessung behaupten.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P1, P2

## 06 · Ein einfacher Prompt, zwei Zielgruppen

ID: w03-mini-space · Block 5–20 Minuten · Typ A

Starten Sie den kurzen Promptauftrag. Es geht nicht um ein neues HTML-Projekt, sondern um die unterschiedliche Verwendung derselben Begriffe. Lassen Sie vor dem Lesen eine erwartete Gruppierung nennen.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 07 · Was erklärt die Wortkarte — und was nicht?

ID: w03-wrap-space · Block 5–20 Minuten · Typ R

Wählen Sie eine Gruppe und einen mehrdeutigen Begriff. Ziel ist die Grenze der Metapher. Erst nach den studentischen Beispielen die Erkenntnis aufklappen.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: P1, P2, E1, M1

## 08 · Kontext ist die aktuelle Arbeitsfläche, nicht das ganze Archiv

ID: w03-context · Block 20–35 Minuten · Typ T/I

Zuerst 32k auswählen: Restbudget mit A4/Tesla vergleichen. Dann 128k/1M. Die Zahlen sind nicht gleichbedeutend mit dem Limit des eigenen Produkts. Tesla-Messmethodik und explizite Buchannahme über Info öffnen; Text- und Bildkosten unterscheiden. Danach zur Arbeitsfläche wechseln.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P3, E1, REV-GEM, REV-CTX, REV-CODEX, REV-CHAT, REV-TSLA, REV-HP

## 09 · Attention gewichtet Beziehungen zwischen Positionen

ID: w03-attention · Block 20–35 Minuten · Typ T/I

Zwei unterschiedlich lange deutsche Bank-Sätze wechseln. Im Kreditsatz steht das stärkste Bezugswort früh, im Parksatz spät. Zielwort Bank ist petrol umrandet; warme Markierung zeigt das jeweils stärkste Bezugswort. Gewichte sind frei gesetzte Lehrwerte, keine aus einem Modell gemessene Erklärung.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P3, E1

## 10 · Der Auftrag kennt Deinen Termin noch nicht

ID: w03-mini-context · Block 20–35 Minuten · Typ A

Zwei getrennte Unterhaltungen machen den Kontextunterschied deutlicher. Die tatsächliche Antwort kann variieren. Studierende sollen gegebene Information von Ergänzungen unterscheiden, nicht einen vorhergesagten Text reproduzieren.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 11 · Welche Information hat den Unterschied gemacht?

ID: w03-wrap-context · Block 20–35 Minuten · Typ R

Lassen Sie zuerst einen konkreten Befund berichten. Fragen Sie nach der Herkunft der Angaben. Im Zielbefund sind 30 Personen, 600 EUR und der Termin gegeben; Raum/Catering werden gerechnet, weitere Anforderungen bleiben offen.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: E1, M1

## 12 · Temperature verändert Verteilung, nicht Wahrheit

ID: w03-temperature · Block 35–50 Minuten · Typ T/I

Starten Sie ohne Filter bei T=1. Vor der Änderung die erwartete Richtung nennen lassen. Setzen Sie dann T auf 0.3 und ziehen Sie wiederholt. Das Labor rechnet lokal, es verändert keine versteckte ChatGPT-Einstellung.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P4, E1, P3

## 13 · Top-k begrenzt Anzahl, Top-p kumulierte Wahrscheinlichkeit

ID: w03-sampling · Block 35–50 Minuten · Typ T/I

Setzen Sie T=1 und k=2. Wechseln Sie anschließend auf p=0.7. Lassen Sie die verbleibenden Kandidaten erklären. Ein höherer Prozentwert beschreibt nicht die Chance einer richtigen Antwort, sondern eine Auswahlschwelle.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P4, E1

## 14 · Vermuten, verändern, wiederholt ziehen

ID: w03-mini-sampling · Block 35–50 Minuten · Typ A/I

Nutzen Sie das Parameterlabor auf der vorherigen Folie oder eine zweite Ansicht der Präsentation. Diese Übung benötigt keinen ChatGPT-Prompt zum angeblichen Verändern von API-Parametern. Auftragsvolltext enthält die fünf Schritte.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 15 · Vielfalt, Wahrscheinlichkeit und Korrektheit unterscheiden

ID: w03-wrap-sampling · Block 35–50 Minuten · Typ R

Unterscheiden Sie erwartete Wahrscheinlichkeit und beobachtete Häufigkeit. Fünfzig Ziehungen können sichtbar streuen. Beim Wechsel setzt das Labor die Zähler zurück, damit alte und neue Bedingungen nicht vermischt werden.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: P4, E1, M1

## 16 · Ein Prompt beschreibt Aufgabe, Kontext, Ergebnis und Abnahme

ID: w03-auftrag · Block 50–65 Minuten · Typ T

Erklären Sie am Budgetrechner: Eine schöne Antwort ohne prüfbare Formel ist nicht genug. Rolle und Ton können helfen; sie ersetzen keine Daten und Kriterien. Der Bauplan ist ein Arbeitsmodell, kein universelles magisches Promptrezept.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1, REV-PROMPT, REV-ROCKET, M1

## 17 · Ein Beispiel verdeutlicht das gewünschte Muster

ID: w03-beispiele · Block 50–65 Minuten · Typ T/I

Stellen Sie den Unterschied nicht als bloß mehr Text dar: Es sind relevante Angaben und ein überprüfbares Beispiel. Kurze präzise Aufträge können besser sein als lange unklare. Verlangen Sie nachvollziehbare Berechnungen, kein verstecktes Gedankenprotokoll.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1, REV-PROMPT

## 18 · Baue einen kleinen Budgetrechner

ID: w03-mini-build · Block 50–65 Minuten · Typ A

Kurzer erster Dateibau. Verfügbarkeit der Dateiausgabe kann je Client variieren; Code speichern ist der Rückfallweg. Die spätere große Aufgabe baut auf diesen Eingaben auf. Timer nicht während einer ungeklärten Installation starten.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 19 · Funktioniert die Rechnung im Gegenbeispiel?

ID: w03-wrap-prompt · Block 50–65 Minuten · Typ R

Rechnen Sie den Basiswert sichtbar nach. Ein Rechner, der NaN oder eine leere Erfolgsmeldung zeigt, benötigt Verbesserung. Unterschiede zwischen optischer Qualität und Funktionsqualität ansprechen.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: E1, M1

## 20 · Unser Eventplaner muss fünf Dinge können

ID: w03-eventziel · Block 80–85 Minuten · Typ T/I

Zeigen Sie nur das Zielbild und die Abnahmekriterien. Lernwerkstatt und Fußballtafel jetzt noch nicht öffnen: Diese Beispiele kommen während der laufenden Generierung. Mindestversion klein halten; Erweiterungen erst nach funktionierendem Kern.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1, M1

## 21 · Vom Mini-Rechner zum Campus-Eventplaner

ID: w03-build · Block 85–110 Minuten · Typ A/I

85–88 Bau starten und Setup prüfen. 88–94 kurzer Newsflash. 94–102 Lernwerkstatt/Fußballtafel, je vier Minuten, erst während des Baus. 102–110 eigene Mindestversion öffnen. Noch kein blindes Publishing; eigener Repo-/Pages-Schritt folgt mit separater Freigabe. Bei technischen Problemen News kürzen.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, R2, R3, REV-PWA, REV-SW, M1

## 22 · Vom Projektordner zur installierbaren Offline-App

ID: w03-deploy · Block 110–120 Minuten · Typ A/I

110–120: Zeigen Sie den sicheren Ablauf Account → Login → Repo-/Dateiprüfung → explizite Veröffentlichungsfreigabe → Pages → Installation → Offline-Neustart. Keine Passwörter/Tokens an KI geben. Ohne Zugang die vorbereitete PWA prüfen; Konto ggf. anschließend selbst anlegen. Ein statisches Pages-Repo führt keinen Python-Agentenserver aus.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, REV-PWA, REV-SW, REV-GH, M1

## 23 · Ist die Mindestversion benutzbar?

ID: w03-wrap-build · Block 120–125 Minuten · Typ R

Lassen Sie ein Ergebnis kurz zeigen. Bei langsamen oder defekten Generationen die lokale Muster-App verwenden, damit die Testphase für alle möglich bleibt. Fünf Minuten, keine neue Funktionswunschliste.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: E1, M1

## 24 · Bringe die Anwendung gezielt an ihre Grenzen

ID: w03-test · Block 125–133 Minuten · Typ A

Acht Minuten reichen für eine verteilte Testmenge. Geben Sie jedem Person zwei Fälle, sammeln Sie danach. Die Kernwerte sind im Auftragsvolltext. Keine nicht ausgeführten Tests als bestanden markieren.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 25 · Welcher Fehler wurde sichtbar?

ID: w03-wrap-test · Block 133–136 Minuten · Typ R

Unterscheiden Sie Anwendungsfehler und falsche Testannahme. Direkt angrenzende Termine sind im Lehrfall erlaubt. Aus einer beobachteten Störung nicht sofort eine allgemeine Modellschwäche ableiten.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: E1, M1

## 26 · Repariere den Fehler, nicht die ganze Anwendung

ID: w03-optimize · Block 136–144 Minuten · Typ A

Zehn Minuten Reparatur. Keine vollständige Neugestaltung auf Verdacht. Wenn der Build länger dauert, können Sie einen kurzen bekannten Fehlerbefund vorführen; die Rückfall-App bleibt verfügbar.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 27 · Wurde es besser, ohne anderes zu beschädigen?

ID: w03-wrap-optimize · Block 144–147 Minuten · Typ R

Erst tatsächliche Wirkung erfragen, dann Zielerkenntnis aufklappen. Falls nichts besser wurde: Auch ein sauber belegter negativer Befund ist wertvoll. Keine Verbesserung erfinden.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: E1, M1

## 28 · Eine andere Person testet Deine App

ID: w03-peer · Block 147–152 Minuten · Typ A

147–152: Jede Person holt Rückmeldung einer anderen Person ein. Keine vorgeschriebene Zweiergruppe und kein gemeinsamer Entwicklungsauftrag. Erst beobachten, dann gezielt nachfragen. Keine Namen erfassen.

Durchführung: Erwartung nennen lassen, vollständigen integrierten Auftrag öffnen/kopieren, Timer starten. Tatsächliche Ausführung beobachten. Bei technischem Stillstand vorbereitete Referenz nutzen; nicht so tun, als sei sie die studentische Generierung. Nachher Ergebnisse anhand der Gegenprobe besprechen.

Quellen: E1, M1

## 29 · Welche Änderung half wirklich?

ID: w03-wrap-peer · Block 152–155 Minuten · Typ R

152–155: Eine konkrete Beobachtung aus dem Fragebogen berichten lassen und erst dann die Erkenntnis aufklappen.

Moderation: erst einen konkreten Befund aus der Gruppe hören, dann die Zielerkenntnis aufklappen. Nachweis und Vermutung trennen. Timer gilt für die gesamte Auswertung.

Quellen: E1, M1

## 30 · Offene Gewichte: selbst betreiben und passend begrenzen

ID: w03-local · Block 155–175 Minuten · Typ I

155–165: Warum Anbieter Gewichte freigeben: Verbreitung, Forschung, Anpassung und Ökosystem; Motive unterscheiden sich. Open Weight ist nicht automatisch Open Source oder kostenloser Betrieb. Kandidat in AA wählen, Hardware/Quantisierung/Kontext prüfen, dann bekannten Test in Ollama ausführen. Nicht pauschal kleinere Modelle als schlechter oder besser bezeichnen.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: L1, L2, L3, L4, L5, L6, REV-OSS, AA1, M1

## 31 · Cloud und lokal: Stärken, Grenzen und passender Einsatz

ID: w03-lmstudio · Block 155–175 Minuten · Typ I

165–175: Dieselbe Aufgabe in Cloud und vorbereitetem lokalem Modell vergleichen. Kontext und Temperature in Ollama zeigen; Cloud-/Websuche als externe Verarbeitung benennen. LM Studio am Ende kurz als alternative lokale Oberfläche. Freiwilliger Heimtest, keine Kauf-/Installationspflicht.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: L1, L2, L5, L6, REV-OSS, REV-CTX, M1, AA1

## 32 · Wann braucht die Anwendung noch ein LLM?

ID: w03-transfer · Block 175–180 Minuten · Typ R

Die zentrale Trennung ausdrücklich ansprechen: Eine von KI gebaute Anwendung muss nicht selbst KI enthalten. Umgekehrt ist ein hübsches Agenten-Dashboard noch kein Beleg für echte Modell- oder Toolausführung.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: E1

## 33 · Text → Kontext → Auswahl → Auftrag → Anwendung → Prüfung

ID: w03-bigpicture · Block 175–180 Minuten · Typ R

Initialfrage erneut beantworten. Keine neue Theorie. Folgen Sie kurz dem Weg von Sprache über Kontext und Auswahl bis zum prüfbaren Produkt. Die Infografik ist tatsächlich generiert; genaue Mechanismen wurden zuvor im HTML-Labor ausprobiert.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P1, P2, P3, P4, E1, M1

## 34 · Quellen und Weiterlernen

ID: w03-sources · Block 175–180 Minuten · Typ O

Quellen sind auch offline im lokalen Anhang lesbar; Original-Webseiten benötigen Internet. Die Modell-/Produktlinks sind zeitabhängig und sollten vor der Veranstaltung erneut geprüft werden. Keine neue September-1600-Zeichen-Behauptung einführen.

Didaktische Grenze: Metapher und Simulation erklären einen Mechanismus, keine vollständige Architektur oder universelle Modellleistung. Fragen am konkreten Eventfall beantworten; notwendige Vertiefung in den Quellenanhang verlagern.

Quellen: P1, P2, P3, P4, R1, R2, R3

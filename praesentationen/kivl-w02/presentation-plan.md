# Woche 2 – KI-Fundamente: Die Magie entzaubern

Status: Freigegeben und umgesetzt. Stand: 19.09.2026. Nach ausdrücklicher Nutzerergänzung kommt Quellenverzeichnis als Folie w02-29 hinzu; Synthese 175–178, Quellen 178–180 Minuten. Das ursprüngliche 28-Folien-Planbudget unten bleibt als Freigabestand dokumentiert; aktuelle Umsetzung: 29 Folien, 180 Minuten.

## Ziel und Einordnung

Vorlesungsbegleiter zum aktuellen Kapitel 1, verbindlich nach Modulplan und Zielbild Drei Bücher. Studierende sollen Regeln von Lernen, generative Ausgaben von agentischem Handeln sowie technische Fähigkeit von praktischem Nutzen unterscheiden. Woche 1 bleibt Einstieg; Tokenmechanik, Temperatur und Transformer-Details bleiben Woche 3. Die Sitzung ist kein vollständiger Vortrag aller Buchunterkapitel.

## Gestaltung und Umfang

Vorlage: `trinity-klar` — Trinity Klar – bewährter Standard. Visuelle Fortsetzung von W01: warme helle Flächen, Salbei/Petrol/Gold, große Schrift, anschauliche Metapherbilder, zurückhaltende Quellen. Deutsch, 16:9, offline, 28 Folien. 180 Minuten als aus W01 übernommene Annahme: fünfmal 15 Minuten Wissen + 15 Minuten Übung, 15 Minuten Pause, 15 Minuten Abschluss. Übungen enthalten jeweils 10 Minuten Bearbeitung und 5 Minuten Auswertung. Kein kostenpflichtiges Tool und kein Studierendenkonto erforderlich.

## Ablauf und Buchbezug

| Zeit | Wissen und Übung | Buch |
|---|---|---|
| 00–30 | KI einordnen, Innovationsgeschichte; Zeitdetektive | 1.1, 1.4–1.5, 1.11 |
| 30–60 | Regeln, Lernen, Hebb, Training/Test; Regel aus Beispielen lernen | 1.6–1.10 |
| 60–90 | KI/ML/GenAI/Agentic AI; Systeme zuordnen | 1.5, 1.12–1.14, Brücke zu W01 |
| 90–105 | Pause | — |
| 105–135 | Additive/subtraktive Lösungssuche; Prozess verbessern | 1.12 und Aufgaben |
| 135–165 | Amara und belastbarer Nutzen; Pilotversuch planen | 1.2, 1.14 und Aufgaben |
| 165–180 | Quiz, Fragen, Synthese, Brücke zu W03 | Kapitel 1 |

## Folienarchitektur

Alle Folien erhalten deutsche Titel, Alt-Texte und Sprecherhinweise. Die folgende Regie benennt zugleich Bild, Interaktion und didaktische Wirkung; Zeitbudgets schließen Übergänge ein.

| ID | Min. | Titel | Kernaussage / Lernwirkung | Quellen | Visual / Interaktion / Regie |
|---|---:|---|---|---|---|
| w02-01 | 5 | Was heißt hier KI? | Eingaben, Ziele und Ausgaben statt Magie; Lernziele. | P1,B1 | Drei konkrete Alltagsfälle; kurze Handzeichenabfrage. |
| w02-02 | 5 | Lange Vorgeschichte, dichte Gegenwart | Kulturtechniken als symbolischer Kontext, keine exponentielle Messreihe. | B1 | V1 vollständig; Bildfehler und nicht maßstäbliche Abstände ausdrücklich einordnen. |
| w02-03 | 5 | KI hat eine Geschichte | Dartmouth: Antrag 1955, Workshop 1956; Entwicklung nicht als zwangsläufigen Fortschritt erzählen. | P2,B1 | Datierte HTML-Zeitleiste; weitere Meilensteine aus Buch vor Bau einzeln belegen. |
| w02-04 | 10 | Übung 1: Zeitdetektive | Ereigniskarten ordnen und zwei problematische Aussagen korrigieren. | P2,B1 | Gruppenarbeit, Papierkarten; keine Konten erforderlich. |
| w02-05 | 5 | Auswertung 1 | Chronologie erklärt Kontext, nicht automatisch Ursachen. | B1 | Musterlösung aufdecken; ein begründeter Widerspruch je Gruppe. |
| w02-06 | 5 | Regel oder gelerntes Muster? | Explizite Regeln und gelernte Modelle ergänzen sich. | B1 | Neue Metapher: Sortieranweisung versus Beispieltraining; V3 nicht übernehmen. |
| w02-07 | 5 | Hebb: Der häufig genutzte Pfad | Biologische Inspiration, keine Gleichsetzung Gehirn = Netz. | B1 | V4 als Bildreferenz; Beschriftung 'Keine Verbindung' fachlich korrigieren, keine Originalzitatbehauptung. |
| w02-08 | 5 | Üben ist nicht Anwenden | Training, Test an unbekannten Fällen und Inferenz unterscheiden. | B1,P1 | Anschauliche Lernwerkstatt mit abgetrenntem Teststapel; keine Gradientengleichungen. |
| w02-09 | 10 | Übung 2: Lernt eure Regel | Aus sechs Beispielen eine Regel ableiten; anschließend neue Fälle prüfen. | B1 | Synthetische Merkmalskarten; absichtlich mehrdeutige Trainingsfälle. |
| w02-10 | 5 | Auswertung 2 | Gute Trainingsleistung genügt nicht; Testfälle dürfen nicht vorher verraten werden. | B1 | Zwei mögliche Regeln vergleichen; Überanpassung sichtbar machen. |
| w02-11 | 5 | Die Begriffslandkarte | KI, ML, generative KI: nicht alles ist ein Chatbot. | P1,B1 | Wenige konkrete Beispielkarten statt rein abstrakter Kreise. |
| w02-12 | 5 | Generieren oder handeln? | Ein Textvorschlag unterscheidet sich von einem ausgeführten Werkzeugaufruf. | P1,P5,B1 | Entwurf einer Bestellung versus tatsächlich abgeschickte Bestellung; Freigabeschranke. |
| w02-13 | 5 | Mitarbeiter und Werkstatt | Worker: Auftrag, Werkzeuge, Wissen; Werkstatt: koordinierter Ablauf. | P5,B1 | Trinity-Begriffswelt als Projektanalogie, nicht universelle Norm; Workflow versus flexible Agentenentscheidung. |
| w02-14 | 10 | Übung 3: Was ist das für ein System? | Sechs Fälle zuordnen; benötigte Autonomie begründen. | P1,P5,B1 | Regel, gelerntes Modell, generatives System, Workflow, Agent; Mehrfachzuordnung zulässig. |
| w02-15 | 5 | Auswertung 3 | Technik, Ausgabeart und Ablaufsteuerung sind verschiedene Dimensionen. | P1,P5 | Begründete Lösung; nicht alles in eine lineare Evolutionsleiter zwingen. |
| w02-16 | 15 | Pause | Zeit zum Durchatmen. | — | Ruhige Pausenfolie; Timer. |
| w02-17 | 5 | Mehr ist nicht immer besser | Additive und subtraktive Lösungssuche an derselben Aufgabe. | P4,B1 | Neue Metapher: überladener Arbeitsplatz, gezielt ergänzen oder vereinfachen. |
| w02-18 | 5 | Was die Studie tatsächlich zeigt | Lego-Experiment: 40/98 versus 60/99 subtraktive Lösungen. | P4 | Großes Zwei-Gruppen-Diagramm, Bedingungen und n sichtbar; 41 % versus 61 %. |
| w02-19 | 5 | Vom Befund zur KI-Nutzung | Auch beim KI-Einsatz ausdrücklich fragen: Was kann entfallen? | P4,B1 | Transfer kennzeichnen; kein Beweis 'LLMs denken additiv' und keine Gleichsetzung mit Diffusion. |
| w02-20 | 10 | Übung 4: Zwei Wege zur Verbesserung | Einen fiktiven Anmeldeprozess einmal ergänzen, einmal vereinfachen. | B1,P4 | Zwei Entwürfe, gleicher Qualitätsmaßstab; keine echte Studie vortäuschen. |
| w02-21 | 5 | Auswertung 4 | Weniger Schritte sind nur dann besser, wenn notwendige Kontrollen bleiben. | B1 | Vergleich mit Musterlösung und begründeten Alternativen. |
| w02-22 | 5 | Amara: Feuerwerk und Wurzeln | Kurzfristige Erwartungen und langfristige Wirkung auseinanderhalten. | P3,B1 | V2 vollständig: Aufmerksamkeit, Aufbau, breite Nutzung. |
| w02-23 | 5 | Von Fähigkeit zu Nutzen | Modellleistung, Integration und Wirkung sind nicht dasselbe. | B1 | Drei illustrative Kurven ohne Messdatenanspruch; keine Prognosewerte. |
| w02-24 | 5 | Ein nüchterner KI-Geschäftsfall | Nutzen, Prüfaufwand, Fehlerfolgen und menschliche Freigabe. | B1,P5 | Fiktive Support-Werkstatt; alle Beispielzahlen ausdrücklich als Annahmen. |
| w02-25 | 10 | Übung 5: Hype in einen Test übersetzen | Messbaren Pilotversuch mit Erfolgskriterium und Abbruchregel formulieren. | B1 | Arbeitsblatt: Ausgangswert, Ziel, Daten, Prüfung, Verantwortung. |
| w02-26 | 5 | Auswertung 5 | Ein Testplan ist belastbarer als ein Zukunftsversprechen. | B1 | Lösungsskizze samt Grenzen; Bezug zum Semesterprojekt. |
| w02-27 | 10 | Abschluss: Fünf Irrtümer prüfen | Lernziele gemeinsam sichern und offene Fragen klären. | P1,P2,P4,P5,B1 | Quiz mit Erklärung statt bloßer Richtig/Falsch-Wertung. |
| w02-28 | 5 | Was bleibt – und was kommt? | KI erklären, Systeme einordnen, Nutzen prüfen; Woche 3 vertieft LLM-Mechanik. | B1,B2 | Ruhige Synthese; Leseauftrag Kapitel 1 und Brücke zu Woche 3. |

## Bildentscheidungen

V1 Innovationschronologie und V2 Amara werden als vorhandene Referenzen übernommen. V1 ist ausschließlich symbolisch: Die abgebildete Reihenfolge Feuer/Mensch/Steinwerkzeug ist kein belastbarer archäologischer Ablauf. Verlässliche Daten werden getrennt in HTML geführt. V3 Regeln/Lernen wird wegen abstrakter Kästen nicht eingesetzt. V4 Hebb liefert die gewünschte Pfadmetapher, wird aber neu aufgebaut: 'schwach wirksame Verbindung' statt irreführendem 'keine Verbindung'. Biologische und künstliche Lernmechanismen werden ausdrücklich unterschieden.

Nach Freigabe sind drei neue didaktische Motive vorgesehen: Sortieranweisung/Beispieltraining, korrigierter Hebb-Pfad und Ergänzen/Vereinfachen. Neue KI-Illustrationen gemäß Werkstatt über Kie.ai/Nano Banana 2, mit dokumentierten Prompts und Provenienz; noch keine Bildgenerierung erfolgt. Exakte Zahlen, Jahresangaben und Labels bleiben HTML. Falls der Dienst nicht verfügbar ist, wird dies gemeldet und kein anderer Provider stillschweigend verwendet.

## Evidenz, Grenzen und Gegenprüfung

Zwei Recherchezyklen: (1) Definition, Geschichte und Amara; (2) Subtraktionsstudie und Agentenarchitektur. Quellenklassen: Manuskript/Modulplan, institutionelle Quellen, wissenschaftliches Original und Engineering-Praxis. OECD S. 6–7, Amara-Beleg S. 7 und Adams S. 259 lokal gegengeprüft. Quellenübersicht enthält Einschränkungen.

Vor Bau noch gezielt schließen: zusätzliche Daten der KI-Zeitleiste direkt an Originalbelegen prüfen; Hebb S. 62 anhand Faksimile erneut prüfen (bisherige Verifikation im Buch-Evidenzprotokoll, kein neu geprüfter Direktbeleg). Bis dahin keine direkten Hebb-Zitate. Keine Behauptung universell besserer kleiner Modelle oder deterministischer Tools ohne geeigneten Vergleichsbeleg. Trinity ist eine veranschaulichende Projektarchitektur, keine wissenschaftlich zwingende Organisationsform.

Die Adams-Zahlen sind Bedingungsraten eines Experiments, keine Bevölkerungsanteile 'additiver Menschen'. Die Unterrichtsaufgabe ist eine didaktische Adaption, keine Replikationsstudie. Amara ist eine Heuristik, keine messbare Prognose. Kurven zu Fähigkeit/Integration/Wirkung sind explizit schematisch.

## Nach Freigabe zu liefern und zu prüfen

Offline-HTML samt Review, Quellenanhang, Sprecherhinweisen, Arbeitsblatt und separaten Lösungen; Timer, Tastatur, Hell/Dunkel, Druckansicht, reduzierte Bewegung und Quellenlinks wie W01. Kontrolle sämtlicher Folien auf Überlauf, Lesbarkeit, Bildgeometrie und Lösungsausblendung. Keine Änderungen am Buch, keine Veröffentlichung, keine geschützten Kursdaten. W02 ist ein separat prüfbarer Baustein mit stabilen w02-IDs für die spätere einzige Gesamt-HTML des Moduls.

## Freigabegrenze

Die HTML-Präsentationswerkstatt verlangt vor dem Folien- und Medienbau das ausdrückliche Wort **FREIGABE** für diesen Plan. W01-Freigabe wird nicht auf W02 übertragen.

## Rahmenrevision 21.09.2026

Freigegebener Nutzerauftrag: Titel, Agenda, reine Initialfrage und statisches Big Picture ergänzt. Keine Audio-/Videoinhalte auf den neuen Folien. 33 Folien; weiterhin 180 Minuten. Startdatei: [AA_W02_Fundamente.html](AA_W02_Fundamente.html). presentation.html und presentation.de.html bleiben vollständige Kompatibilitätsfassungen. Alle bisherigen Folien-IDs bleiben bestehen. Neu: w02-cover, w02-agenda, w02-question, w02-bigpicture.

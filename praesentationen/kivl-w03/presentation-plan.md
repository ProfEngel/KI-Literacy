# Woche 3 – Wie Sprachmodelle Texte verarbeiten und Aufgaben lösen

Status: recherchierter Folienplan; Freigabe für Neubau noch ausstehend. 19.09.2026.

## Auftrag und gestalterischer Maßstab
BWL-Bachelor, 180 Minuten einschließlich 15 Minuten Pause, 29 Folien. Fünf Wechsel aus 15 Minuten Wissen und 15 Minuten Übung (10 Minuten Arbeit + 5 Minuten Auswertung), danach 15 Minuten Abschluss. Deutsch, 16:9. Vorlage: trinity-klar – Trinity Klar – bewährter Standard. Verbindliche Inhalts-/Bildreferenz: KI Literacy Basics sowie die zuletzt bestätigte Revision von W01/W02.

Direkte Kernaussage als Überschrift, großes inhaltlich tragendes Bild, konkrete Erklärung daneben. Keine Sammlung abstrakter Warnsätze. Der synthetische Angebotsvergleich aus Kapitel 2 ist der wiederkehrende Praxisfall. Buchkapitel und Modulplan werden nicht verändert. W04 behandelt Advanced Prompting, W05 RAG; hier nur nötige Grundlagen vorwegnehmen.

## Folienplan und Evidenzmatrix

| ID | Minuten | Kernaussage | Schaubild / Interaktion | Quellen | Zweck / Moderation |
|---|---|---|---|---|---|
| w03-01 | 00–05 | Ein Sprachmodell verarbeitet Text in Tokens. | Wortbausteine/Setzkasten; künstliches Vokabular sichtbar kennzeichnen. | P1 B1 | Begriffe Token und Wort trennen. |
| w03-02 | 05–10 | Token-IDs sind Kennungen; Embeddings sind Zahlenvektoren. | Artikelnummer → Katalogzeile → Zahlenliste. | P1 P5 | Kennung nicht als Bedeutung missverstehen. |
| w03-03 | 10–15 | Die Ausgabe entsteht Token für Token. | Vorhandener Scheinwerfer auf Satzfortsetzung; Beispielwerte markieren. | P5 M1 E1 | Ein Klick fügt eine Fortsetzung an; nächster Schritt erhält neuen Kontext. |
| w03-04 | 15–25 | Übung: Zerlegen Sie Text mit zwei Vokabularen. | Tokenkarten: Liefer/fristen versus Lieferfristen; 10-Minuten-Timer. | P1 E1 | Erst vorhersagen, dann vergleichen; ergänzend dokumentierter echter Tokenizer-Snapshot nach Implementierungsprüfung. |
| w03-05 | 25–30 | Derselbe Text kann verschieden viele Tokens ergeben. | Zwei Zerlegungen nebeneinander, identischer Ausgangstext. | P1 E1 | Abweichung erklären; keine universelle Zeichen-pro-Token-Regel. |
| w03-06 | 30–35 | Kontext ist das Material für den aktuellen Modellaufruf. | Mise-en-Place-Bild aus Literacy Basics; Auftrag, Angebote, Regel rechts. | B1 M1 | Vorbereitung erklären: nur tatsächlich verfügbare Information kann einfließen. |
| w03-07 | 35–40 | Attention kombiniert Informationen aus dem Kontext. | Scheinwerfer/Verbindungslinien auf Bezugsmenge und Lieferfrist; vereinfachtes Gewichtungsbeispiel. | P5 B1 E1 | Berechnete Gewichtung, nicht Gedankenlesen; keine gemessenen Attentionwerte behaupten. |
| w03-08 | 40–45 | Ein großer Kontext ersetzt keine passende Auswahl. | Schreibtisch als Arbeitsfläche, Archiv daneben; keine erfundene Modellkapazität. | B1 | Kontextumfang von dauerhaftem Wissen trennen; RAG erst W05 vertiefen. |
| w03-09 | 45–55 | Übung: Packen Sie den Kontext für einen Angebotsvergleich. | Aus acht Dokumentkarten nötige Unterlagen und Regeln wählen; Timer 10 Minuten. | B1 E1 | Auswahl begründen, wichtige Lieferbedingungen nicht wegkürzen. |
| w03-10 | 55–60 | Zum Auftrag gehören Preise, Einheiten und Lieferbedingungen. | Muster-Arbeitsfläche mit ausgewählten Karten. | B1 E1 | Unnötiges weglassen, entscheidende Informationen behalten. |
| w03-11 | 60–65 | Temperature verändert die Auswahlwahrscheinlichkeiten. | Interaktive drei Balken aus festen Scores [2,1,0], T 0.5/1/2. | P2 E1 | Niedrig: stärker konzentriert; höher: flacher. Berechnete Demo, kein Modellbenchmark. |
| w03-12 | 65–70 | Top-P begrenzt die Menge möglicher Fortsetzungen. | Kandidatenkarten, kumulierte Wahrscheinlichkeit und Auswahlschwelle. | P2 E1 | Temperature und Kandidatenbegrenzung unterscheiden. |
| w03-13 | 70–75 | Wahrscheinlich formuliert heißt nicht sachlich richtig. | Zwei Prüfstationen: Auswahl im Modell versus Quellen-/Rechenprüfung. | P2 B1 E1 | Temperature ist kein Wahrheitsregler. |
| w03-14 | 75–85 | Übung: Temperature-Casino – Vielfalt beobachten. | Offline-Sampling aus fester Verteilung, Wiederholungen zählen; Timer 10 Minuten. | P2 E1 | Nur T ändern; Durchläufe, Streuung und Grenzen notieren. |
| w03-15 | 85–90 | Mehr Vielfalt ist noch kein Qualitätsgewinn. | Wahrscheinlichkeit versus beobachtete Häufigkeit; keine erwarteten Resultate vortäuschen. | P2 E1 | Zufallsstreuung und Aufgabengüte getrennt besprechen. |
| w03-16 | 90–105 | Pause | Ruhige 15-Minuten-Pausenfolie. | B2 | Keine Bonusaufgabe. |
| w03-17 | 105–110 | Reasoning bearbeitet eine Aufgabe in mehreren Schritten. | Direktantwort versus Rechenweg mit Zwischenergebnis und Prüfung. | B1 P3 | System 1/2 als Einstieg, nicht menschliche Denksysteme im Modell behaupten. |
| w03-18 | 110–115 | Eine Begründung muss sich überprüfen lassen. | Belegkarte: Eingabewert → Formel → Ergebnis → offene Annahme. | P3 B1 | Prüfbare Erklärung statt vermeintlichem Gedankenprotokoll. |
| w03-19 | 115–120 | B kostet 90 Euro weniger – der Liefertermin bleibt offen. | A 120×18+60=2220; B 12×170+90=2130; Bestelleingang versus technische Freigabe. | B1 E1 | Rechnung abgeschlossen, Beschaffungsentscheidung noch nicht. |
| w03-20 | 120–130 | Übung: Prüfen und korrigieren Sie die Empfehlung. | Absichtlich fehlerhafte Antwort mit fehlender Einheit/Terminannahme; Timer 10 Minuten. | B1 E1 | Fehler markieren, knapp nachrechnen, konkrete Rückfrage formulieren. |
| w03-21 | 130–135 | Eine korrekte Antwort trennt Ergebnis und fehlende Angaben. | Lösungstabelle: bekannt, berechnet, noch zu klären. | B1 E1 | Keine fehlenden Fristen oder Freigaben erfinden. |
| w03-22 | 135–140 | Die Lunchbox enthält nur das Nötige für den Auftrag. | Neue klare Lunchbox mit Auftragskarte, passenden Unterlagen und Werkzeugen; kein Cloud-Käfig. | B1 P4 E1 | Begrenzte Teilaufgabe ermöglicht gezielte Ausstattung. |
| w03-23 | 140–145 | Modellgröße, Kontext und Rechenzeit sind drei verschiedene Größen. | Fachkraft/Arbeitsfläche/Bearbeitungszeit als dreiteilige Metapher. | B1 | Nicht großes Modell mit großem Gedächtnis oder langer Antwort gleichsetzen. |
| w03-24 | 145–150 | Klare Rechnungen gehören ins Werkzeug; Sonderfälle zur Prüfung. | Extraktion → Rechentool → Bewertung; Eskalation bei unklaren Angaben. | B1 P4 E1 | Kleine Modelle als Testkandidaten, nicht als pauschale Sieger. |
| w03-25 | 150–160 | Übung: Wählen Sie Modell, Werkzeug und Eskalation. | Drei konkrete Auftragskarten; Testkriterium je Wahl; Timer 10 Minuten. | B1 P4 E1 | Aufgabe und Risiko begründen die Ausstattung. |
| w03-26 | 160–165 | Die passende Lösung besteht den Test für ihren Auftrag. | Vergleichsmatrix: Eingabefehler, Qualität, Zeit, Kosten; ohne erfundene Messwerte. | B1 P4 E1 | Tool-first und Modellwahl fachlich überprüfen. |
| w03-27 | 165–175 | Wissenscheck: fünf Aussagen zur Modellmechanik. | Aufdeckbare Fragen; 10-Minuten-Timer, keine Rangliste. | P1 P2 P3 P4 P5 E1 | Abruf und Begründung statt bloß Wiedererkennen. |
| w03-28 | 175–178 | Nächster Schritt: Aufgaben präzise formulieren. | Text → Kontext → Auswahl → Prüfung → Anwendung; Übergang W04. | B1 B2 | Lernweg zusammenführen. |
| w03-29 | 178–180 | Quellenverzeichnis | Lesbare Kurzbelege, Fundstellen und Link zum lokalen Quellenregister. | P1 P2 P3 P4 P5 B1 B2 E1 M1 | Nachlesen ermöglichen; Quellen als letzte Folie. |

## Verbindliche Ausgaben nach Freigabe
- presentation.html und presentation.de.html mit lokalen Medien, Themes, Tastatursteuerung und Druckansicht.
- review.html mit allen stabilen W03-IDs und exportierbaren Anmerkungen.
- dozentenleitfaden.html und .md: für jede Folie Absicht, fachliche Erklärung, konkrete Sprechhilfe, Frage, typische Fehlvorstellung, Übergang und Quellen. Keine bloßen Stichwortnotizen.
- Arbeitsblatt und getrennte Musterlösungen als offline lesbare HTML-Dateien; Quellenregister in JSON/MD/HTML, Bildmanifest, QA-Bericht.
- Timer auf jeder Arbeitsfolie (10 Minuten), manuell Start/Pause/Reset, Pause bei Folienwechsel. Keine konkurrierenden Timeranzeigen.

## Prüfungen und Grenzen
1. Alle 29 Folien offline, Quellenanker, Bilder, Navigation, Themes, Druck und Review testen; Screenshotprüfung in Vortragsgeometrie.
2. Samplingrechnung gegen feste Sollwerte prüfen. Bei T=1: ungefähr 66.52/24.47/9.00 Prozent. Zufallsziehungen nicht mit Erwartungswerten verwechseln.
3. Kein angeblicher Temperature-Schieber in der ChatGPT-App. Die Kerndemo läuft unabhängig von Konten und APIs. Ein echter Tokenizer-Snapshot muss Werkzeug und Vokabular dokumentieren; keine Schätzung als Messung ausgeben.
4. System 1/2 bleibt eine Analogie. Sichtbare Begründungen werden geprüft, nicht als interne Gedankentranskripte ausgegeben.
5. Belcak et al. ist ein Positionsbeitrag, kein universeller Beweis für kleine Modelle. Keine aktuellen Preise oder Produkt-Ranglisten ohne gesonderte Prüfung.
6. Recherche verfügbar: Websuche und Primärseiten; Bildbetrachtung verfügbar: lokale Vision. Kie.ai wurde in diesem Planungslauf nicht aufgerufen. Neue Bitmap-Metaphern erst nach Freigabe mit verfügbarer dokumentierter Pipeline; exakte Beschriftungen in HTML.

## Freigabe-Gate
Die HTML-Präsentationswerkstatt verlangt vor dem Neubau das ausdrückliche Wort FREIGABE. Bis dahin nur Planung, Evidenz und Bildauswahl; kein fertiger Foliensatz.

## Rahmenrevision 21.09.2026

Freigegebener Nutzerauftrag: Titel, Agenda, reine Initialfrage und statisches Big Picture ergänzt. Keine Audio-/Videoinhalte auf den neuen Folien. 33 Folien; weiterhin 180 Minuten. Startdatei: [AA_W03_Sprachmodelle.html](AA_W03_Sprachmodelle.html). presentation.html und presentation.de.html bleiben vollständige Kompatibilitätsfassungen. Alle bisherigen Folien-IDs bleiben bestehen. Neu: w03-cover, w03-agenda, w03-question, w03-bigpicture.

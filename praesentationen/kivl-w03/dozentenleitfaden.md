# Dozentenleitfaden · Woche 3

180 Minuten · 29 Folien · Kapitel 2. Die Hinweise erklären Aussage, Bild und Moderation je Folie.

## w03-cover · Sprachmodelle verstehen

Zeit: 00–01 Minuten.

### Absicht und Moderation

Begrüßen Sie die Studierenden. Das Themenbild eröffnet die Sitzung: Von Tokens zur geprüften Antwort. Noch keine Fachdetails vorwegnehmen; anschließend den Ablauf zeigen.

## w03-agenda · Unser Weg durch die heutige Sitzung

Zeit: 01–02 Minuten.

### Absicht und Moderation

Die fünf Stationen knapp nennen. Jede wird durch Wissen und praktische Bearbeitung erschlossen. Auf die Pause und die gemeinsame Zusammenfassung hinweisen. Nicht schon die Lösungen erklären.

## w03-question · Wie wird aus Text eine verlässliche Antwort?

Zeit: 02–03 Minuten.

### Absicht und Moderation

Die Frage langsam stellen, kurz Stille zulassen und zwei spontane Vermutungen sammeln. Nicht auflösen. Beim Big Picture am Ende dieselbe Frage wieder aufnehmen und anhand der fünf Stationen beantworten.

## w03-01 · Ein Sprachmodell verarbeitet Text in Tokens.

Zeit: 03–07 Minuten.

### Didaktische Absicht

Die technische Einheit wird vor jeder Modellmetapher sauber eingeführt.

### Fachliche Erklärung und Sprechhilfe

Zeigen Sie zuerst das ganze Wort Lieferfristen. Danach auf die drei Bausteine weisen: Liefer, frist, en. Der Setzkasten illustriert wiederverwendbare Einheiten unterschiedlicher Größe. In unserem frei gewählten Vokabular entstehen drei Tokens; andere Vokabulare können das Wort anders zerlegen. Ein Tokenizer ist ein konkretes Verfahren mit Vokabular, kein kleines lesendes Wesen im Modell. Auch Satzzeichen oder Leerzeichen können zum Zuschnitt gehören. Der folgende Ablauf ist Tokenisierung, ID-Zuordnung, Vektorverarbeitung und Ausgabeauswahl.

### Frage / Aktivierung

Wie viele Wörter sehen Sie, und wie viele Tokens hat unser Lehrbeispiel? Ein Wort, drei Tokens.

### Typische Fehlvorstellung

Die drei Stücke nicht als gemessene ChatGPT-Tokenisierung ausgeben.

### Übergang

Weiter zu: Token-IDs sind Kennungen; Embeddings sind Zahlenvektoren.

Quellen: P1, B1, M2

## w03-02 · Token-IDs sind Kennungen; Embeddings sind Zahlenvektoren.

Zeit: 07–11 Minuten.

### Didaktische Absicht

Die oft vermischten Begriffe Kennung und numerische Repräsentation werden getrennt.

### Fachliche Erklärung und Sprechhilfe

Gehen Sie die drei Kästen durch. Die Zeichenfolge verweist im Tokenizer-Vokabular auf eine Kennung. Wie bei einer Artikelnummer sagt die Höhe der ID nichts über den Wert oder die Bedeutung. Danach wird die Kennung einem gelernten Vektor zugeordnet. Unser Beispielvektor hat nur drei Koordinaten zur Illustration; reale Dimensionen sind modellspezifisch. Weitere Modellschichten verändern Repräsentationen kontextabhängig. Embeddings für Dokumentensuche kommen später in Woche 5.

### Frage / Aktivierung

Ist Token 900 automatisch ähnlicher zu 901 als zu 7? Nein; die IDs allein sagen das nicht.

### Typische Fehlvorstellung

Den einzelnen Vektorkoordinaten keine erfundenen festen Bedeutungen wie teuer oder zuverlässig zuordnen.

### Übergang

Weiter zu: Die Ausgabe entsteht Token für Token.

Quellen: P1, P5

## w03-03 · Die Ausgabe entsteht Token für Token.

Zeit: 11–15 Minuten.

### Didaktische Absicht

Die Studierenden sehen eine fortlaufende Erzeugung statt einer fertigen Antwort aus einer Schublade.

### Fachliche Erklärung und Sprechhilfe

Das Scheinwerferbild enthält drei erfundene Fortsetzungen. Erklären Sie, dass das Modell Werte für mögliche nächste Tokens berechnet und ein Decodierverfahren auswählt. Mit dem Knopf wird eine feste Lehrfolge erweitert. Der neue Teil gehört nun zur bisherigen Eingabe für die Fortsetzung. Auch frühere Satzteile und weitere bereitgestellte Informationen können einfließen, nicht nur das letzte Wort. Die Klickfolge ist bewusst kein laufendes Sprachmodell; ihre Schritte zeigen den Ablauf.

### Frage / Aktivierung

Was ändert sich für den nächsten Schritt, sobald Sofa ausgegeben wurde? Der verfügbare bisherige Text ist länger.

### Typische Fehlvorstellung

Die Grafik stellt Wörter als leicht lesbare Kandidaten dar. Ein reales Wort kann mehrere Tokens benötigen; 85 Prozent ist kein gemessener Modellwert.

### Übergang

Weiter zu: Übung: Zerlegen Sie Text mit zwei Vokabularen.

Quellen: P5, M1, E1

## w03-04 · Übung: Zerlegen Sie Text mit zwei Vokabularen.

Zeit: 15–25 Minuten.

### Didaktische Absicht

Ein kontrolliertes Papierexperiment zeigt den Einfluss des Vokabulars ohne Konto oder technische Hürde.

### Fachliche Erklärung und Sprechhilfe

Timer erst starten, nachdem beide Vokabulare und die Längste-passende-Einheit-Regel verstanden sind. Die Studierenden zerlegen beide Wörter und notieren die Anzahl. Die Daten sind absichtlich klein: Wir untersuchen einen Mechanismus, nicht einen Wettbewerb zwischen Produkten. Wer früher fertig ist, erklärt, warum eine bloße Zeichenanzahl das Ergebnis nicht bestimmt. Die Lösungen noch nicht zeigen.

### Frage / Aktivierung

Welche Information müssten Sie kennen, bevor Sie eine reale Tokenzahl angeben? Das konkrete Tokenizer-Verfahren und Vokabular.

### Typische Fehlvorstellung

Diese Übung ist kein vollständiger BPE-Trainingsalgorithmus und keine produktive Tokenizer-Messung.

### Übergang

Weiter zu: Derselbe Text kann verschieden viele Tokens ergeben.

Quellen: P1, E1

## w03-05 · Derselbe Text kann verschieden viele Tokens ergeben.

Zeit: 25–30 Minuten.

### Didaktische Absicht

Aus dem Versuch wird eine präzise, begrenzte Aussage abgeleitet.

### Fachliche Erklärung und Sprechhilfe

Zeigen Sie beide Zerlegungen gleichzeitig. Lieferfristen ist in A drei, in B ein Token. Lieferfrist ist in A zwei, in B ein Token. Gleicher Text, unterschiedliche Vokabulare. In einer echten Messung werden Eingabe und Toolversion dokumentiert. Großschreibung, Leerzeichen, Eigennamen oder Fachbegriffe können den Zuschnitt beeinflussen. Keine feste Deutsch-Englisch-Quote ableiten. Eine Chatantwort, die eine Tokenzahl behauptet, ist nicht selbst die Messung.

### Frage / Aktivierung

Würde vier Zeichen pro Token diese beiden Vokabulare korrekt beschreiben? Nein.

### Typische Fehlvorstellung

Nicht von diesem künstlichen Beispiel auf Kosten eines realen Anbieters hochrechnen.

### Übergang

Weiter zu: Kontext ist das Material für den aktuellen Modellaufruf.

Quellen: P1, E1

## w03-06 · Kontext ist das Material für den aktuellen Modellaufruf.

Zeit: 30–35 Minuten.

### Didaktische Absicht

Die bekannte Vorbereitungsmetapher verbindet den technischen Kontext mit dem Angebotsfall.

### Fachliche Erklärung und Sprechhilfe

Beim Kochen helfen bereitgelegte Zutaten, eine Aufgabe geordnet zu erledigen. Im Modellaufruf entsprechen ihnen Auftrag, Daten und Regeln. Das Bild links dient nur als Vorbereitungsmetapher, nicht als historische Aussage über die abgebildete Person. Für den Vergleich müssen beide Angebote und der Mengenbedarf verfügbar sein. Eine auf dem Rechner gespeicherte Datei ist nicht automatisch Teil des Aufrufs. Auch sichtbarer Chatverlauf und tatsächlich übermittelter Kontext sind nicht zwingend deckungsgleich.

### Frage / Aktivierung

Wenn das zweite Angebot nur im Archiv liegt: Kann der aktuelle Aufruf dessen Versandkosten zuverlässig berücksichtigen? Nicht ohne Bereitstellung oder Abruf.

### Typische Fehlvorstellung

Kontextvorbereitung nicht als neues Training der Gewichte erklären.

### Übergang

Weiter zu: Attention kombiniert Informationen aus dem Kontext.

Quellen: B1, M1

## w03-07 · Attention kombiniert Informationen aus dem Kontext.

Zeit: 35–40 Minuten.

### Didaktische Absicht

Attention wird als Informationskombination erklärt und nicht bloß als suggestive Aufmerksamkeit.

### Fachliche Erklärung und Sprechhilfe

Zuerst den Sachbezug zeigen: Die Frage nach Packungen verbindet Bedarf und Packungsgröße. Das Diagramm ist eine menschlich erklärte Relevanzstruktur, keine aus einem Modell ausgelesene Heatmap. Technisch werden Repräsentationen mit berechneten Gewichten kombiniert. Das Zahlenbeispiel macht nur diese Operation sichtbar: 5 plus 5 plus 10 ergibt 20. In echten Netzen sind Values Vektoren, es gibt mehrere Köpfe und weitere Rechenschritte. Bei kausaler Generierung sind zukünftige Ausgaben noch nicht verfügbar.

### Frage / Aktivierung

Muss das gewichtete Ergebnis dem stärksten einzelnen Wert entsprechen? Nein; hier ist es 20 statt 10.

### Typische Fehlvorstellung

Attention nicht als vollständigen Beweis dafür lesen, warum das Modell eine Entscheidung traf.

### Übergang

Weiter zu: Ein großer Kontext ersetzt keine passende Auswahl.

Quellen: P5, B1, E1

## w03-08 · Ein großer Kontext ersetzt keine passende Auswahl.

Zeit: 40–45 Minuten.

### Didaktische Absicht

Archiv, aktiver Kontext und Auswahl werden an einer konkreten Arbeitsfläche unterschieden.

### Fachliche Erklärung und Sprechhilfe

Zeigen Sie die vielen Ordner im Hintergrund und die wenigen Blätter auf dem Tisch. Die Aufgabe braucht eine gezielte Auswahl; mehr Material kann auch alte oder widersprüchliche Angaben enthalten. Das Kontextfenster beschreibt eine Kapazität des Aufrufs, nicht automatischen Zugriff auf die ganze Organisation. Die Anwendung stellt den Kontext zusammen. In Woche 5 wird der Dokumentabruf vertieft. Hier genügt, benötigte Angaben nicht mit überflüssigen Duplikaten zu verwechseln.

### Frage / Aktivierung

Welche Information darf bei unserem Einkauf auf keinen Fall fehlen? Packungsgröße, Versand, Lieferbedingung und gewünschte Menge.

### Typische Fehlvorstellung

Keine bestimmte Seitenzahl als universelle Kontextkapazität nennen.

### Übergang

Weiter zu: Übung: Packen Sie den Kontext für einen Angebotsvergleich.

Quellen: B1, M2

## w03-09 · Übung: Packen Sie den Kontext für einen Angebotsvergleich.

Zeit: 45–55 Minuten.

### Didaktische Absicht

Die Studierenden müssen Informationsbedarf begründen statt pauschal möglichst viel hochzuladen.

### Fachliche Erklärung und Sprechhilfe

Die acht Karten gemeinsam kurz lesen. Gefordert ist genau die Auswahl für diesen Vergleich. In fünf Minuten Tandemarbeit sollen die Gruppen auch erklären, warum eine Karte nicht gebraucht wird. Die aktuellen Angebote enthalten ihre Lieferbedingungen vollständig; diese müssen beim Auswählen erhalten bleiben. Im letzten Teil prüft das Gegenüber, ob ein entscheidender Bestandteil fehlt. Kein echtes Dokument hochladen.

### Frage / Aktivierung

Was verlieren Sie, wenn Sie aus dem Angebot nur den großen Preis herauskopieren?

### Typische Fehlvorstellung

Die Beschränkung auf vier Karten ist Teil des kontrollierten Falls, keine universelle RAG-Regel.

### Übergang

Weiter zu: Zum Auftrag gehören Preise, Einheiten und Lieferbedingungen.

Quellen: B1, E1

## w03-10 · Zum Auftrag gehören Preise, Einheiten und Lieferbedingungen.

Zeit: 55–60 Minuten.

### Didaktische Absicht

Die Auswahl wird fachlich begründet und von einer fertigen Entscheidung abgegrenzt.

### Fachliche Erklärung und Sprechhilfe

A und B liefern die Angebotsdaten. C definiert den Auftrag mit Menge und Terminprüfung. D sorgt für dieselbe Vergleichsbasis. E und H sind fachfremd, F veraltet, G ein Duplikat. Mit A bis D kann die Prüfung erfolgen. Falls eine relevante Angabe in den Angeboten fehlt, kann die richtige Antwort dennoch eine Rückfrage sein. Auswahl ist also nicht gleich Vollständigkeitsgarantie.

### Frage / Aktivierung

Warum ist die alte Preisliste hier schlechter als das aktuelle Angebot? Sie kann widersprüchliche Bedingungen hineinbringen.

### Typische Fehlvorstellung

Die Musterlösung gilt unter den angegebenen Karteninhalten; sinnvolle Rückfragen ausdrücklich zulassen.

### Übergang

Weiter zu: Temperature verändert die Auswahlwahrscheinlichkeiten.

Quellen: B1, E1

## w03-11 · Temperature verändert die Auswahlwahrscheinlichkeiten.

Zeit: 60–65 Minuten.

### Didaktische Absicht

Der Parameter erhält eine sichtbare mechanische Wirkung statt eines Kreativitäts-Etiketts.

### Fachliche Erklärung und Sprechhilfe

Alle drei Scores bleiben fest bei 2, 1 und 0. Nur Temperature ändert sich. Bei T gleich 1 ergeben sich etwa 66,52, 24,47 und 9,00 Prozent. Bei 0,5 steigt A auf etwa 86,68 Prozent; bei 2 sinkt A auf etwa 50,65 Prozent. Die Rangfolge bleibt bei diesen Scores gleich, aber die Verteilung wird konzentrierter oder flacher. Das zeigt Auswahlverhalten, nicht neues Wissen. Die Formel ist ein optionaler Rechenanker; für das Lernziel reichen die Balken.

### Frage / Aktivierung

Welcher Kandidat gewinnt relativ, wenn wir T erhöhen? Die bisher schwächeren B und C.

### Typische Fehlvorstellung

Temperature nicht mit Nachtraining oder garantierter sachlicher Genauigkeit verwechseln.

### Übergang

Weiter zu: Top-P begrenzt die Menge möglicher Fortsetzungen.

Quellen: P2, E1

## w03-12 · Top-P begrenzt die Menge möglicher Fortsetzungen.

Zeit: 65–70 Minuten.

### Didaktische Absicht

Top-P wird von der Formung der Verteilung durch Temperature abgegrenzt.

### Fachliche Erklärung und Sprechhilfe

Die vier Wahrscheinlichkeiten sind ein eigenes, leicht rechenbares Beispiel. Für die Schwelle 0,80 reicht A mit 60 Prozent nicht. Mit B sind 85 Prozent erreicht, daher bilden A und B den Kern. Innerhalb dieses Kerns wird neu normiert: ungefähr 70,6 und 29,4 Prozent. Die Anzahl ausgewählter Kandidaten ist nicht überall gleich; sie hängt von der Verteilung ab. Für unsere Casino-Übung bleibt Top-P unverändert, damit nur eine Stellschraube untersucht wird.

### Frage / Aktivierung

Welche Kandidaten wären bei Top-P 0,90 nötig? A, B und C, zusammen 95 Prozent.

### Typische Fehlvorstellung

Top-P 0,8 bedeutet nicht die besten 80 Prozent aller Tokenarten.

### Übergang

Weiter zu: Wahrscheinlich formuliert heißt nicht sachlich richtig.

Quellen: P2, E1

## w03-13 · Wahrscheinlich formuliert heißt nicht sachlich richtig.

Zeit: 70–75 Minuten.

### Didaktische Absicht

Modellwahrscheinlichkeit und fachliche Richtigkeit werden am gleichen Geschäftsvorgang getrennt.

### Fachliche Erklärung und Sprechhilfe

Ein Satz kann sprachlich hervorragend passen und dennoch falsche Versandkosten nennen. Zeigen Sie zuerst die Behauptung, dann den widersprechenden Angebotsbeleg. Eine niedrigere Temperature konzentriert die Auswahl auf favorisierte Fortsetzungen; falls eine falsche Fortsetzung favorisiert wird, ist damit nichts berichtigt. Temperature 0 wird häufig als Greedy-Auswahl umgesetzt, ist aber kein generelles Versprechen identischer Ausgaben in jeder Infrastruktur. Für diese Vorlesung zählt der fachliche Abgleich.

### Frage / Aktivierung

Welcher Nachweis entscheidet den Versandfall: die flüssige Formulierung oder das Angebot? Das Angebot und dessen gültige Bedingungen.

### Typische Fehlvorstellung

Keine spezielle Produkteinstellung oder reproduzierbare API-Funktion behaupten.

### Übergang

Weiter zu: Übung: Temperature-Casino – Vielfalt beobachten.

Quellen: P2, B1, E1

## w03-14 · Übung: Temperature-Casino – Vielfalt beobachten.

Zeit: 75–85 Minuten.

### Didaktische Absicht

Die Studierenden beobachten Zufallsstreuung bei konstantem Modellbeispiel.

### Fachliche Erklärung und Sprechhilfe

Den ersten Versuch gemeinsam vorbereiten: T einstellen, zurücksetzen, hundert Ziehungen ausführen, Häufigkeiten notieren. Dasselbe bei den beiden anderen Werten. Beim T-Wechsel werden die Zähler zurückgesetzt, damit Bedingungen nicht vermischt werden. Die Zufallszahlen kommen lokal aus dem Browser; kein Sprachmodell und keine kostenpflichtige API werden aufgerufen. Wiederholen Sie bei Zeit zwei Versuche unter derselben Bedingung und vergleichen Sie die Abweichung.

### Frage / Aktivierung

Warum sehen zwei Gruppen bei T gleich 1 nicht notwendigerweise dieselben Zählerstände? Die Ziehungen sind zufällig.

### Typische Fehlvorstellung

100 Ziehungen erlauben eine Illustration, aber keine generelle Aussage über die Qualität eines realen Modells.

### Übergang

Weiter zu: Mehr Vielfalt ist noch kein Qualitätsgewinn.

Quellen: P2, E1

## w03-15 · Mehr Vielfalt ist noch kein Qualitätsgewinn.

Zeit: 85–90 Minuten.

### Didaktische Absicht

Erwartungswert, beobachtete Häufigkeit und Qualität werden auseinandergehalten.

### Fachliche Erklärung und Sprechhilfe

Lassen Sie zuerst zwei Gruppen ihre notierten Zähler nennen. Vergleichen Sie dann mit den theoretischen Wahrscheinlichkeiten. Eine moderate Abweichung ist kein Implementierungsfehler. Niedrige T konzentriert sich stärker auf A, hohe T verteilt sich breiter. Der Versuch enthielt keine Wahrheitslabels, daher kann man daraus keine sachliche Genauigkeit berechnen. Für kreative Überschriften könnte Vielfalt ein Ziel sein, für Extraktion dagegen korrekte Felder. Die Bewertungsregel kommt aus der Aufgabe.

### Frage / Aktivierung

Welche zusätzliche Information bräuchten wir, um fachliche Genauigkeit zu messen? Ein überprüftes Ziel bzw. gültige Lösungen.

### Typische Fehlvorstellung

Nicht aus einem einzelnen ungewöhnlichen Lauf eine Gesetzmäßigkeit ableiten.

### Übergang

Weiter zu: Pause

Quellen: P2, E1

## w03-16 · Pause

Zeit: 90–105 Minuten.

### Didaktische Absicht

Die Pause bleibt ein echter Abstand zwischen Modellmechanik und Anwendung.

### Fachliche Erklärung und Sprechhilfe

Die konkrete Rückkehrzeit nennen und die vollen fünfzehn Minuten freilassen. Keine zusätzlichen Pflichtaufgaben aufgeben. Nach der Rückkehr kurz das Ziel nennen: Nicht wie überzeugend ein Text klingt, sondern ob sein Ergebnis prüfbar ist.

### Frage / Aktivierung

Keine Aktivierungsfrage während der Pause.

### Typische Fehlvorstellung

Den Pause-Timer nicht als weitere zehnminütige Übung behandeln.

### Übergang

Weiter zu: Reasoning bearbeitet eine Aufgabe in mehreren Schritten.

Quellen: B2

## w03-17 · Reasoning bearbeitet eine Aufgabe in mehreren Schritten.

Zeit: 105–110 Minuten.

### Didaktische Absicht

Reasoning wird funktional als zusätzliche Bearbeitung vorgestellt.

### Fachliche Erklärung und Sprechhilfe

Eine Direktantwort kann korrekt sein. Bei unserem Einkauf müssen jedoch Mengen, Einheiten und Bedingungen zusammengeführt werden. Zusätzliche Bearbeitung kann Zwischenrechnungen, Varianten oder Prüfungen enthalten. System 1 und System 2 dienen hier nur als eingängige Analogie. Verfahren, Trainingsmethoden und konkrete Produkte unterscheiden sich. Der Prüfmaßstab bleibt, ob die zusätzliche Bearbeitung die Lösung für diese Aufgabe verbessert, nicht ob sie besonders lang wirkt.

### Frage / Aktivierung

Wann wäre ein langer Modelltext unnötig? Wenn validierte Zahlen nur in eine feste Formel eingesetzt werden müssen.

### Typische Fehlvorstellung

Nicht behaupten, eine Aufforderung zum schrittweisen Denken sei gleichbedeutend mit jeder technischen Reasoning-Methode.

### Übergang

Weiter zu: Eine Begründung muss sich überprüfen lassen.

Quellen: B1, P3

## w03-18 · Eine Begründung muss sich überprüfen lassen.

Zeit: 110–115 Minuten.

### Didaktische Absicht

Eine Erklärung wird als kontrollierbares Arbeitsprodukt behandelt.

### Fachliche Erklärung und Sprechhilfe

Jede Karte nennt einen überprüfbaren Bestandteil: Preis pro Packung, benötigte Anzahl, Gesamtkosten und eine offene Bedingung. Diese Angaben können am Original und mit einem Taschenrechner kontrolliert werden. Turpin et al. zeigen in bestimmten damaligen Experimenten, dass Erklärungen verzerrende Eingabehinweise nicht immer offenlegen. Daraus folgt nicht, dass Erklärungen nutzlos sind; sie müssen fachlich geprüft werden. Verlangen Sie knappe Belege statt eines vermeintlich authentischen internen Gedankenprotokolls.

### Frage / Aktivierung

An welcher Stelle könnten Sie einen Fehler lokalisieren, wenn B plötzlich 20.490 Euro kostet? Wahrscheinlich bei Stück versus Packung.

### Typische Fehlvorstellung

Die wissenschaftliche Studie nicht als pauschale Aussage über alle heutigen Modelle darstellen.

### Übergang

Weiter zu: B kostet 90 Euro weniger – der Liefertermin bleibt offen.

Quellen: P3, B1

## w03-19 · B kostet 90 Euro weniger – der Liefertermin bleibt offen.

Zeit: 115–120 Minuten.

### Didaktische Absicht

Der wiederkehrende Fall wird vollständig vorgerechnet und um die Lieferbedingung erweitert.

### Fachliche Erklärung und Sprechhilfe

120 Stück zu 18 Euro ergeben 2160 Euro, plus 60 Euro Versand gleich 2220. Bei B werden zwölf Zehnerpackungen benötigt: 2040 plus 90 gleich 2130. B spart 90 Euro. Beide Fristen dauern zehn Tage, beginnen aber nicht zum gleichen Ereignis. Ohne Datum der technischen Freigabe lässt sich B nicht auf denselben Liefertermin setzen. Diese Trennung ist die Pointe: Kostenrechnung korrekt, Gesamtempfehlung noch nicht abgeschlossen.

### Frage / Aktivierung

Welche Rückfrage fehlt vor einer termingebundenen Bestellung? Wann ist die technische Freigabe erteilt?

### Typische Fehlvorstellung

Kalendertage oder Werktage nicht eigenständig ergänzen; die Beispielangabe ist insoweit nicht spezifiziert.

### Übergang

Weiter zu: Übung: Prüfen und korrigieren Sie die Empfehlung.

Quellen: B1, E1

## w03-20 · Übung: Prüfen und korrigieren Sie die Empfehlung.

Zeit: 120–130 Minuten.

### Didaktische Absicht

Die Übung verlangt eine kurze belastbare Korrektur statt bloßer Skepsis.

### Fachliche Erklärung und Sprechhilfe

Die Antwort enthält absichtlich richtige Gesamtsummen und drei problematische Schlussfolgerungen. Dadurch reicht pauschales Ablehnen nicht. Nach der Einzelprüfung schreiben die Tandems eine bessere Antwort von maximal vier Sätzen. Die Angaben stehen auf dem Arbeitsblatt, damit keine Navigation nötig ist. Neben dem Prozentfehler müssen der Fristbeginn und die fehlende Kaufautorisierung erkannt werden.

### Frage / Aktivierung

Welche Teile würden Sie unverändert übernehmen? Die beiden korrekt berechneten Gesamtkosten und den absoluten Unterschied von 90 Euro.

### Typische Fehlvorstellung

Eine Antwort mit einem Fehler nicht automatisch vollständig verwerfen.

### Übergang

Weiter zu: Eine korrekte Antwort trennt Ergebnis und fehlende Angaben.

Quellen: B1, E1

## w03-21 · Eine korrekte Antwort trennt Ergebnis und fehlende Angaben.

Zeit: 130–135 Minuten.

### Didaktische Absicht

Das Ergebnis zeigt unterschiedliche Status: bekannt, berechnet und offen.

### Fachliche Erklärung und Sprechhilfe

Der absolute Preisvorteil beträgt 90 Euro; relativ zu A sind es 90 geteilt durch 2220, also rund 4,05 Prozent. Der Liefertermin von B bleibt ohne Freigabedatum offen. Eine knappe Musterantwort lautet: B kostet bei 120 Stück netto 2130 Euro und damit 90 Euro weniger als A. Beide Fristen beginnen unterschiedlich. Bitte klären Sie die technische Freigabe und den benötigten Liefertermin, bevor bestellt wird.

### Frage / Aktivierung

Warum nennen wir die Bezugsgröße A bei 4,05 Prozent? Ein Prozentsatz braucht eine eindeutig definierte Basis.

### Typische Fehlvorstellung

Nicht den Hinweis auf offene Termine als Ausrede zum Weglassen der bereits möglichen Rechnung verwenden.

### Übergang

Weiter zu: Die Lunchbox enthält nur das Nötige für den Auftrag.

Quellen: B1, E1

## w03-22 · Die Lunchbox enthält nur das Nötige für den Auftrag.

Zeit: 135–140 Minuten.

### Didaktische Absicht

Die Lunchbox verbindet aufgabenbezogenes Wissen und Werkzeugauswahl mit dem bisherigen Stoff.

### Fachliche Erklärung und Sprechhilfe

Auf die drei Fächer zeigen: Der Auftrag begrenzt die Handlung, die Unterlagen liefern das relevante Wissen, die Werkzeuge führen klar beschriebene Schritte aus. Die Box ist keine Metapher für ein grundsätzlich dummes Modell, sondern für eine bewusst vorbereitete Arbeitsumgebung. Das kann den Einsatz spezialisierter oder kleinerer Modelle erleichtern. Ob es genügt, muss an realistischen Testfällen geprüft werden. Nicht aus Bild oder Metapher einen Benchmark ableiten.

### Frage / Aktivierung

Was gehört nicht in die Box des Angebotsvergleichs? Das Teamfoto oder der vollständige alte Chatverlauf ohne Bezug zum Auftrag.

### Typische Fehlvorstellung

Modellgröße und lokalen Betrieb nicht gleichsetzen; auch kleine Modelle können als Dienst laufen.

### Übergang

Weiter zu: Modellgröße, Kontext und Rechenzeit sind drei verschiedene Größen.

Quellen: B1, P4, E1, M2

## w03-23 · Modellgröße, Kontext und Rechenzeit sind drei verschiedene Größen.

Zeit: 140–145 Minuten.

### Didaktische Absicht

Drei häufig vermischte Stellgrößen erhalten unterscheidbare Funktionen.

### Fachliche Erklärung und Sprechhilfe

Parameter sind gelernte Zahlen des Modells; Kontext ist das im aktuellen Aufruf bereitgestellte Material; Inferenzaufwand ist die Berechnung bei der Bearbeitung. Die Bilder Fachkraft, Arbeitsfläche und Zeit sind nur eine didaktische Analogie. Ein Modell mit mehr Parametern muss nicht die größere Kontextkapazität besitzen. Ein längerer Kontext ändert die Gewichte nicht. Mehr ausgegebener Text ist kein hinreichendes Maß für korrekte zusätzliche Arbeit.

### Frage / Aktivierung

Welche Größe verändern wir, wenn wir ein weiteres Angebot in den Aufruf aufnehmen? Den Kontext, nicht die Parameterzahl.

### Typische Fehlvorstellung

Keinen dieser Werte als alleinige Qualitätsrangliste verwenden.

### Übergang

Weiter zu: Klare Rechnungen gehören ins Werkzeug; Sonderfälle zur Prüfung.

Quellen: B1

## w03-24 · Klare Rechnungen gehören ins Werkzeug; Sonderfälle zur Prüfung.

Zeit: 145–150 Minuten.

### Didaktische Absicht

Die abstrakte Modellwahl wird in konkrete Arbeitsschritte aufgelöst.

### Fachliche Erklärung und Sprechhilfe

Sprachverarbeitung extrahiert aus dem Angebot Datenfelder. Code prüft Pflichtfelder, rechnet Einheiten um und summiert. Ein Widerspruch in einer Klausel wird anschließend explizit zur Prüfung gegeben. Das entspricht dem Trinity-Prinzip spezialisierter Worker und koordinierter Werkstätten. Eigenes SQLite-Wissen, gemeinsame Regeln und Projektmaterial sind unterschiedliche Ablagen, von denen passende Teile in den Kontext kommen. Eine Datenbank allein löst den Abruf nicht. Der Positionsbeitrag von Belcak motiviert kleinere Modelle für enge Teilaufgaben; er ersetzt keinen Test.

### Frage / Aktivierung

Warum ist ein richtiger Taschenrechner allein noch keine korrekte Anwendung? Falsch extrahierte Eingaben ergeben trotz korrekter Rechnung einen falschen Vergleich.

### Typische Fehlvorstellung

Keine aktuelle Trinity-Funktion als getestet darstellen; hier geht es um das dokumentierte Architekturprinzip.

### Übergang

Weiter zu: Übung: Wählen Sie Modell, Werkzeug und Eskalation.

Quellen: B1, P4, E1, I3

## w03-25 · Übung: Wählen Sie Modell, Werkzeug und Eskalation.

Zeit: 150–160 Minuten.

### Didaktische Absicht

Die Lernenden müssen die Systementscheidung anhand von Aufgabe und Fehlerfolgen begründen.

### Fachliche Erklärung und Sprechhilfe

Fall A erlaubt den Test eines kleineren Extraktionsmodells mit festen Feldern. Fall B enthält nach Validierung nur eine klare Rechenregel. Fall C braucht transparente Aufbereitung und eine Rückfrage, eventuell fachliche Entscheidung. Diese Hinweise nicht vorab als Lösung verteilen. Jedes Tandem muss außerdem einen Test und eine Eskalationsbedingung angeben. Eine reine Nennung von Modellmarken ist keine ausreichende Antwort.

### Frage / Aktivierung

Was tun Sie, wenn bei A plötzlich die Packungsgröße fehlt? Nicht raten; Rückfrage oder definierter Ausnahmeweg.

### Typische Fehlvorstellung

Nicht automatisch das größte Modell als Ersatz für fehlende Information auswählen.

### Übergang

Weiter zu: Die passende Lösung besteht den Test für ihren Auftrag.

Quellen: B1, P4, E1

## w03-26 · Die passende Lösung besteht den Test für ihren Auftrag.

Zeit: 160–165 Minuten.

### Didaktische Absicht

Die Musterlösung macht Architektur überprüfbar statt dogmatisch.

### Fachliche Erklärung und Sprechhilfe

Die Tabelle ist ein begründeter Startpunkt, kein einzig zulässiges Design. Für A kann ein größerer Kandidat gewinnen, wenn der kleinere an wichtigen Fällen scheitert. B bleibt eine Codeaufgabe, wenn Daten und Formel feststehen. C benötigt die fehlende Information unabhängig von Modellgröße. Vergleichen Sie dieselben Fälle und erfassen Sie Gesamtzeit einschließlich Korrektur. Kleine Modelle können Kosten und Laufzeit reduzieren, aber nur ausreichende Qualität macht das sinnvoll.

### Frage / Aktivierung

Welcher Testfall könnte eine gute Durchschnittsleistung entlarven? Ein Angebot mit ungewohnter Einheit oder fehlender Versandangabe.

### Typische Fehlvorstellung

Keine ungemessenen Qualitäts-, Kosten- oder Geschwindigkeitssieger benennen.

### Übergang

Weiter zu: Wissenscheck: fünf Aussagen zur Modellmechanik.

Quellen: B1, P4, E1

## w03-27 · Wissenscheck: fünf Aussagen zur Modellmechanik.

Zeit: 165–175 Minuten.

### Didaktische Absicht

Abruf und Erklärung sichern die fünf Kerngedanken.

### Fachliche Erklärung und Sprechhilfe

Erst individuell urteilen, dann in kurzen Begründungen diskutieren. Die fünf Aussagen sind absichtlich falsch formuliert; deshalb gehört zu jeder Antwort die Korrektur. Details erst im Plenum öffnen. Wer alles mit Nein beantwortet, muss mindestens an einem Beispiel erklären können, warum. Keine Benotung oder Rangliste. Offene Fragen werden als Lernauftrag mitgenommen.

### Frage / Aktivierung

Welche falsche Aussage hätten Sie zu Beginn am ehesten akzeptiert?

### Typische Fehlvorstellung

Die Zahl richtiger Klicks nicht mit umfassender Kompetenz gleichsetzen.

### Übergang

Weiter zu: Nächster Schritt: Aufgaben präzise formulieren.

Quellen: P1, P2, P3, P4, P5, E1

## w03-28 · Nächster Schritt: Aufgaben präzise formulieren.

Zeit: 175–176 Minuten.

### Didaktische Absicht

Die Mechanik wird als Vorbereitung auf besseres Auftragen zusammengeführt.

### Fachliche Erklärung und Sprechhilfe

Den Weg Text, Material, Ausgabe und Ergebnis noch einmal durchgehen. Tokens und Vektoren ermöglichen Verarbeitung; Kontext bestimmt verfügbare Informationen; Auswahlparameter beeinflussen Fortsetzungen; Prüfung verbindet die Ausgabe mit einer fachlichen Aufgabe. Woche 4 setzt hier an und gestaltet präzise Aufträge mit Kontext, Beispielen und Ausgabeformat. Ein offener Satz als Exit-Ticket genügt.

### Frage / Aktivierung

Was würden Sie nach heute an einem Auftrag an einen Angebotsassistenten ändern?

### Typische Fehlvorstellung

Keine neue Prompting-Lektion in die letzten drei Minuten schieben.

### Übergang

Weiter zu: Quellenverzeichnis

Quellen: B1, B2

## w03-bigpicture · Das Big Picture der Woche

Zeit: 176–178 Minuten.

### Absicht und Moderation

Die Initialfrage erneut mündlich stellen: Wie wird aus Text eine verlässliche Antwort? Die Infografik entlang der nummerierten Stationen zusammenfassen. Text verarbeiten: Tokens → IDs → Embeddings → Fortsetzung. Kontext auswählen: Arbeitsfläche statt Archiv; Attention kombiniert. Ausgabe steuern: Temperature + Top-P verändern die Auswahl. Antwort kontrollieren: Belege · Rechnung · Lieferbedingungen prüfen. Arbeit passend verteilen: Klarer Auftrag + relevante Daten + Tools; Modell testen. Einen Zusammenhang von Studierenden erklären lassen; anschließend auf die Quellen verweisen. Keine neuen Inhalte einführen.

## w03-29 · Quellenverzeichnis

Zeit: 178–180 Minuten.

### Didaktische Absicht

Die Quellen sollen auffindbar bleiben und Evidenzarten erkennbar sein.

### Fachliche Erklärung und Sprechhilfe

Die Grundlagen stammen aus Forschungsarbeiten und dem geprüften Buchmanuskript. Belcak ist ein Positionsbeitrag; die Übungswerte sind didaktisch konstruiert. Die Bildquellen sind von den Fachbelegen getrennt dokumentiert. Der Link öffnet das lokale vollständige Register. Nicht sämtliche Titel vorlesen: zwei passende Nachleseempfehlungen nennen und die Folie stehen lassen.

### Frage / Aktivierung

Für Tokens: Sennrich; für Decodierung: Holtzman; für den Zusammenhang: Kapitel 2.

### Typische Fehlvorstellung

Eine Illustration oder der Modulplan ist kein eigenständiger empirischer Beweis.

### Übergang

Ende der Sitzung.

Quellen: P1, P2, P3, P4, P5, B1, B2, E1, M1, M2, I3

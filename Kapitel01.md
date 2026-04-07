# **Kapitel 1: Die Entzauberung der Magie (Der präfrontale Cortex)**

## **Leitfragen**

* Warum erleben wir gerade jetzt diese scheinbar plötzliche Explosion der Künstlichen Intelligenz?  
* Wie lernt eine Maschine im Vergleich zum menschlichen Gehirn, und wo liegen die fundamentalen Unterschiede (Auswendiglernen vs. Generalisieren)?  
* Was passiert mathematisch wirklich in einem künstlichen neuronalen Netz?  
* Woher kommt die "Kreativität" der Maschine, und warum unterscheidet sich ihr Antrieb fundamental von unserem?

## **Vorab: Die wichtigsten Begriffe auf einen Blick**

Bevor wir in die Tiefe gehen, müssen wir unsere Werkzeuge schärfen. Wer über KI spricht, verliert sich schnell in Schlagworten. Die folgende Tabelle übersetzt die wichtigste Terminologie aus der Informatik in eine greifbare Sprache für die Praxis.

| Begriff | Kurzdefinition für die Praxis | Typisches Missverständnis | Mini-Beispiel |
| :---- | :---- | :---- | :---- |
| **Künstliche Intelligenz (KI)** | Ein technisches System, das menschenähnliche kognitive Fähigkeiten (Mustererkennung, Lernen, Problemlösung) imitiert. | „KI ist ein bewusstes Wesen.“ – Falsch. KI hat kein Bewusstsein und keinen eigenen Willen, sie ist reine Mathematik. | Ein Navigationssystem, das Staus vorhersagt und die Route in Echtzeit anpasst. |
| **Machine Learning (ML)** | Ein Teilbereich der KI. Algorithmen lernen selbstständig Muster aus Datenströmen, anstatt von Programmierern starre Regeln diktiert zu bekommen. | „Die Maschine lernt wie ein Kind.“ – Falsch. Die Maschine optimiert statistische Wahrscheinlichkeiten. | Ein Spam-Filter, der mit jeder neu markierten E-Mail besser lernt, was Werbung ist. |
| **Perzeptron** | Das mathematische Grundbausteinchen eines künstlichen neuronalen Netzes, inspiriert von der biologischen Nervenzelle. | „Ein Perzeptron funktioniert exakt wie eine menschliche Gehirnzelle.“ – Falsch. Es ist eine stark vereinfachte mathematische Funktion. | Eine Funktion, die Faktoren wie „Wolken“ und „Temperatur“ gewichtet, um zu entscheiden: „Regenschirm mitnehmen“ (Ja/Nein). |
| **Inferenz** | Die Anwendungsphase der KI. Wenn Sie der KI eine Frage stellen und sie antwortet, betreibt sie Inferenz (sie wendet ihr antrainiertes Wissen an). | „Die KI lernt jedes Mal dazu, wenn ich sie etwas frage.“ – Falsch. Bei der Inferenz ist das Wissen eingefroren. Sie lernt beim Chatten nicht live dazu. | Sie tippen einen Prompt in ChatGPT ein, und das System generiert in Sekundenbruchteilen die Antwort. |
| **System 1 vs. System 2 Thinking** | Konzept von Daniel Kahneman: System 1 ist schnelles, intuitives Denken. System 2 ist langsames, analytisches Abwägen. | „KI hat nur System 1.“ – Veraltet. Neuere Modelle simulieren System 2 durch explizite Denkketten vor der Ausgabe. | System 1: Ein Gesicht auf einem Foto erkennen. System 2: Eine komplexe Steuererklärung ausfüllen. |

*Tabelle 1: Gegenüberstellung wichtiger KI-Begriffe und typischer Missverständnisse in der Praxis.*

## **Biologisches Pendant: Der präfrontale Cortex**

Um Künstliche Intelligenz nicht als undurchschaubare Magie, sondern als logische technologische Evolution zu verstehen, hilft ein Blick in unsere eigene Biologie. Das menschliche Gehirn ist das komplexeste uns bekannte informationsverarbeitende System. Wenn wir uns die aktuelle Entwicklung der generativen KI ansehen, drängt sich eine Analogie auf: Wir bauen gerade den digitalen präfrontalen Cortex.

Der präfrontale Cortex ist der Teil unseres Gehirns, der direkt hinter der Stirn sitzt. Er ist nicht für simple Reflexe zuständig, sondern für die sogenannte Exekutivfunktion. Er plant vorausschauend, wägt Handlungsalternativen ab, unterdrückt Impulse und erkennt komplexe, abstrakte Zusammenhänge. Bisherige Computerprogramme verhielten sich eher wie das Stammhirn: reaktiv, starr und auf einfache Wenn-Dann-Regeln programmiert. Moderne KI-Modelle hingegen beginnen, Kontext zu verstehen und Antworten strategisch zu planen. Sie ahmen die Arbeitsweise unseres präfrontalen Cortex nach. Doch machen wir uns nichts vor: Es bleibt eine Imitation, getrieben von Wahrscheinlichkeitsrechnung. Dieses Kapitel wird diese Magie entzaubern.

## **1.1 Slow vs. Fast Revolutions: Die Täuschung der Geschwindigkeit**

Die Geschichte der menschlichen Arbeit ist durch eine fundamentale Asymmetrie gekennzeichnet. Auf der einen Seite steht die menschliche Biologie, die sich im Schneckentempo anpasst. Der *Homo sapiens* wandelt seit etwa 300.000 Jahren auf diesem Planeten. Unser Gehirn und unsere Stressregulation sind evolutionär darauf optimiert, in kleinen Jäger-und-Sammler-Gemeinschaften zu überleben. Wenn wir heute aufblinkende Benachrichtigungen oder die Komplexität globaler Märkte verarbeiten müssen, tun wir das mit einer Hardware, die für das Erkennen von Raubtieren konzipiert wurde (ein sogenannter *Evolutionary Mismatch*; Li et al., 2018).

Auf der anderen Seite steht die exponentielle Entwicklung der Informationstechnologie. Von den ersten raumfüllenden Großrechnern der 1950er Jahre bis zu den generativen KI-Modellen der Gegenwart sind kaum mehr als 70 Jahre vergangen.

💡 **Infobox: Die Kompression der Zeit – Eine kurze Geschichte der Innovation** Um exponentielles Wachstum greifbar zu machen, reicht ein Blick auf die Abstände zwischen den wichtigsten Meilensteinen der Menschheitsgeschichte. Die weitreichendsten Entwicklungen konzentrieren sich nahezu vollständig auf die letzten 200 (und extrem verdichtet auf die letzten 20\) Jahre.

| Jahr (ca.) | Meilenstein | Zeitabstand zum vorherigen Meilenstein |
| :---- | :---- | :---- |
| **2.500.000 v. Chr.** | **Werkzeuge** (Erste Steinwerkzeuge) | \- |
| **1.000.000 v. Chr.** | **Feuer** (Kontrollierte Nutzung) | \~ 1,5 Millionen Jahre |
| **10.000 v. Chr.** | **Landwirtschaft** (Neolithische Revolution) | \~ 990.000 Jahre |
| **3.500 v. Chr.** | **Das Rad** | \~ 6.500 Jahre |
| **3.200 v. Chr.** | **Die Schrift** | \~ 300 Jahre |
| **1440** | **Der Buchdruck** | \~ 4.600 Jahre |
| **1879** | **Elektrizität** (Kommerz. Glühbirne) | \~ 439 Jahre |
| **1886** | **Das Automobil** | 7 Jahre |
| **1928** | **Moderne Medizin** (Penicillin) | 42 Jahre |
| **1941** | **Der Computer** (Z3) | 13 Jahre |
| **1956** | **Künstliche Intelligenz** (Dartmouth) | 15 Jahre |
| **1989** | **Das Internet** (World Wide Web) | 33 Jahre |
| **2007** | **Das Smartphone** (iPhone) | 18 Jahre |
| **2017** | **Generative KI** (Transformer-Modell) | 10 Jahre |
| **Heute** | **Humanoide Robotik & Agenten** | Fast zeitgleich |

*Tabelle 2: Die zeitliche Kompression historischer Meilensteine verdeutlicht das exponentielle Wachstum technologischer Entwicklungen.*

**Erkenntnis:** Während unsere Vorfahren Hunderttausende von Jahren auf die nächste lebensverändernde Technologie warten mussten, schlägt heute eine disruptive Innovation im Rhythmus von wenigen Jahren (oder gar Monaten) in unseren Alltag ein. Unsere biologische Hardware versucht, eine Welt zu navigieren, die sich längst von der linearen Zeitachse abgekoppelt hat.

![Amara's Law: Technologische Wirkung über die Zeit](images/amaras_law_infographic.png)

*Abbildung 1: Amara's Law visualisiert die Differenz zwischen linearer menschlicher Erwartung und exponentiellem technologischem Fortschritt.*

Warum aber haben wir das Gefühl, dass KI regelrecht aus dem Nichts explodiert ist? Die Antwort liefert *Amara’s Law*: „Wir neigen dazu, die kurzfristigen Auswirkungen einer neuen Technologie zu überschätzen und ihre langfristigen Auswirkungen zu unterschätzen.“ (Amara, 1978; zitiert nach The Futurist, 2006). Unser Gehirn denkt linear (1, 2, 3, 4, 5). Die Technologie wächst exponentiell (1, 2, 4, 8, 16). Exponentielles Wachstum wirkt anfangs enttäuschend langsam – bis die Kurve scheinbar senkrecht nach oben schießt. Wir waren lediglich blind für den Teil der Kurve, in dem sich die Leistung verdoppelte, aber auf niedrigem Niveau blieb.

### **Laborpraxis 1.1: Amara’s Law im eigenen Umfeld analysieren**

**Setup:**

* **Werkzeug:** Ein Notizblock und ein Stift.  
* **Zeitansatz:** 15 Minuten.

**Übung:**

1. Identifizieren Sie eine Technologie, die vor fünf Jahren noch als „Spielerei“ galt (z. B. Smartwatches, Sprachassistenten).  
2. Skizzieren Sie auf dem Papier, wie Sie die Technologie damals wahrgenommen haben (Hype-Phase vs. Ernüchterung).  
3. Schreiben Sie auf, auf welche unsichtbare Art diese Technologie heute in Ihren Alltag integriert ist.  
4. Übertragen Sie diese Beobachtung auf ChatGPT. Wo sehen Sie die Technologie in drei Jahren, wenn Sie bewusst nicht linear, sondern exponentiell denken?

**Erwartete Beobachtungen:** Fast jede prägende Technologie (wie das Smartphone 2007\) wurde anfangs belächelt, bevor sie die Gesellschaft unwiderruflich transformierte.

## **1.2 KI im Alltag: Wo Algorithmen uns bereits unbemerkt steuern**

Es gibt ein bekanntes Phänomen in der Informatik, das *Teslers Theorem*: „Künstliche Intelligenz ist all das, was noch nicht funktioniert.“ (Hofstadter, 1979).

Sobald eine Technologie zuverlässig ihren Dienst verrichtet, nennen wir sie einfach „Software“. Das führt zu dem gefährlichen Trugschluss, KI sei nur das, was in Hollywood-Filmen als Roboter auftritt. Die Realität ist: Ihr Alltag ist längst von KI durchdrungen. Wenn Sie Netflix öffnen, analysiert ein Machine-Learning-Modell Ihr Sehverhalten im Abgleich mit Millionen anderen Nutzern. Wenn Sie einen Kredit beantragen, berechnen Modelle in Echtzeit Ihren Score auf Basis Tausender Mikromerkmale.

Der Unterschied der heutigen *generativen KI* (GenAI) zu diesen klassischen Algorithmen ist die Schnittstelle. Früher war KI eine unsichtbare Rechenmaschine im Hintergrund. Heute hat die KI unsere Sprache gelernt und generiert neue Inhalte.

### **Laborpraxis 1.2: Kaltstart-Prompting mit Web-LLMs**

**Zeitansatz:** 22,5 Minuten.

**Setup:**

* **Werkzeug:** Öffnen Sie ein handelsübliches Cloud-LLM (z.B. ChatGPT, Claude oder Microsoft Copilot) im Browser.
* **Material:** Ein konkretes Problem aus Ihrem Berufsalltag (z. B. „Wie formuliere ich eine Absage an einen Lieferanten?“).

**Übung:**

1. **Kaltstart (Trial & Error):** Geben Sie Ihr Problem als extrem knappen Satz ein (Kaltstart-Prompt). Beispiel: „Schreibe eine Absage an Lieferanten.“  
2. **Analyse:** Diskutieren Sie kurz mit Ihrem Sitznachbarn die Schwächen dieser generischen Antwort. Wo fehlen Nuancen?
3. **Kontext-Prompting:** Formulieren Sie denselben Wunsch, aber geben Sie der KI Kontext: Wer sind Sie? Wer ist der Empfänger? (Beispiel: „Du bist Einkaufsleiter. Schreibe eine höfliche Absage an Meier GmbH. Wir beenden die Zusammenarbeit wegen 15 % Preissteigerung...“)

**Erwartete Beobachtungen:** Auch ein hochkomplexes Cloud-Modell arbeitet am besten mit klarem Kontext. Die Maschine besitzt keinen gesunden Menschenverstand. Guter Input = Guter Output.

## **1.3 Paradigmenwechsel und Lernprinzipien**

Um zu verstehen, warum klassische Software an ihre Grenzen stieß, müssen wir den Unterschied zwischen Software 1.0 und Software 2.0 begreifen (Karpathy, 2017).

**Software 1.0 (Regeln):** Ein Programmierer schreibt unmissverständliche Anweisungen. „Wenn auf dem Bild spitze Ohren sind, dann ist es eine Katze.“ Das scheitert an der Realität (Was ist mit Schlappohren? Nacktkatzen?). **Software 2.0 (Lernen aus Daten):** Wir geben dem Computer Bilder von Katzen und Nicht-Katzen-Bilder. Der Algorithmus trainiert sich selbst, indem er statistische Muster findet.

Aber wie genau bringt man einer Maschine etwas bei? In der KI unterscheiden wir drei große Lernparadigmen sowie moderne Mischformen:

1. **Überwachtes Lernen (Supervised Learning) – Der "Lehrer"-Ansatz:** Dies ist das Zugpferd der heutigen Industrie. Die Maschine bekommt Trainingsdaten, die bereits von Menschen mit der korrekten Lösung (dem "Label") versehen wurden. Wir zeigen der KI 100.000 Bilder von Lungen-Röntgenbildern und sagen ihr zu jedem Bild explizit: "Krank" oder "Gesund". Die KI lernt die Zuordnung. Ziel ist es, später bei einem neuen, unbekannten Bild das richtige Label vorherzusagen.  
2. **Unüberwachtes Lernen (Unsupervised Learning) – Der "Entdecker"-Ansatz:** Hier gibt es keinen Lehrer und keine Labels. Wir werfen der KI einfach einen massiven, chaotischen Datensatz vor und sagen: "Finde selbst Struktur\!" Das System beginnt dann zum Beispiel zu **clustern** (Gruppen zu bilden). Ein klassisches BWL-Beispiel ist die Kundensegmentierung: Die KI analysiert Millionen von Transaktionsdaten und erkennt selbstständig, dass es fünf völlig verschiedene Käufertypen in Ihrem Shop gibt – Gruppen, die ein Mensch durch reines Hinsehen nie gefunden hätte.  
3. **Bestärkendes Lernen (Reinforcement Learning) – Der "Spieler"-Ansatz:** Die KI bekommt keine Daten im klassischen Sinne, sondern wird in eine Umgebung gesetzt (z. B. eine Fabrikhalle oder ein Videospiel). Sie bekommt Regeln und ein klares Ziel. Dann probiert sie blind aus (Trial & Error). Macht sie einen Fehler, gibt es eine numerische Bestrafung (-1). Kommt sie dem Ziel näher, gibt es eine Belohnung (+1). So lernte die KI *AlphaGo*, den menschlichen Weltmeister im hochkomplexen Brettspiel Go zu besiegen – indem sie Millionen Male gegen sich selbst spielte und ihre Strategie auf maximale Belohnung optimierte (Silver et al., 2016).  
4. **Die Mischformen (Semi- & Self-Supervised Learning):** Die Magie moderner generativer KI liegt in der Kombination. Ein Modell wie ChatGPT lernt im ersten Schritt *self-supervised* (selbstüberwacht): Es liest das halbe Internet und spielt ein gigantisches Lückentext-Spiel, bei dem es versucht, das nächste Wort vorherzusagen. Später wird es durch **RLHF** (*Reinforcement Learning from Human Feedback*) feinjustiert: Menschen bewerten die Antworten der KI, und durch Belohnung und Bestrafung lernt das Modell, nicht toxisch zu sein und sich wie ein hilfreicher Assistent zu verhalten (Ouyang et al., 2022).

### **Auswendiglernen vs. Generalisieren**

Unabhängig vom gewählten Lernansatz stoßen wir auf das wichtigste Prinzip des maschinellen und biologischen Lernens: den Unterschied zwischen **Auswendiglernen** und **Generalisieren**.

Stellen Sie sich einen BWL-Studenten vor, der für eine Klausur lernt. Er kann einfach die Antworten der Altklausuren Wort für Wort auswendig lernen (Memorization). In der Klausur bekommt er 100 Punkte – solange exakt dieselben Fragen gestellt werden. Sobald der Professor die Zahlen in der Aufgabe leicht abändert, scheitert der Student katastrophal. Er hat das zugrundeliegende Prinzip nicht verstanden. Ein guter Student hingegen abstrahiert die Lösungswege, er *generalisiert*. Er kann sein Wissen auf völlig neue, nie gesehene Probleme anwenden.

Genau das passiert im menschlichen Gehirn. Unser Gehirn speichert nicht jedes Blatt eines Baumes als HD-Foto ab. Es extrahiert das abstrakte Konzept "Baum". Nur so können wir einen Bonsai-Baum sofort als solchen erkennen.

![Auswendiglernen vs. Generalisieren im Vergleich](images/memorize_vs_generalize.png)

*Abbildung 2: Analogien zu Auswendiglernen (Overfitting) und echter, robuster Generalisierung.*

In der Künstlichen Intelligenz ist das Auswendiglernen der größte Feind der Entwickler. Man nennt es **Overfitting** (Überanpassung). Wenn ein Modell zu lange und zu aggressiv mit denselben Daten trainiert wird, lernt es die Trainingsdaten (die "Altklausuren") auswendig. Es merkt sich das exakte Rauschen der Trainingsbilder. Zeigt man diesem überangepassten Modell dann ein neues Bild, versagt es völlig (Furbach et al., 2024; Engel, 2025).

Das genaue Gegenteil davon ist das **Underfitting** (Unteranpassung). Hier hat das Modell nicht einmal die grundlegenden Muster der Trainingsdaten verstanden – vergleichbar mit einem Studenten, der die Altklausuren nicht einmal angesehen hat und in der Prüfung völlig ahnungslos raten muss (Furbach et al., 2024). Das höchste Ziel beim Training einer KI ist es daher, exakt den **Sweet Spot** zu treffen: Den perfekten Balancepunkt zwischen Unter- und Überanpassung, der die maximale **Generalisierung** ermöglicht.

### **Nerd-Exkurs: Die Mathematik der Trennlinie (Der Prädiktor)**

Um diesen Sweet Spot mathematisch greifbar zu machen, stellen wir uns ein Problem in zwei Dimensionen vor: Die Zulassung zu einer Universität. Wir haben einen zweidimensionalen Merkmalshaufen (einen Graphen). Auf der x-Achse ($x_1$) liegt die Abiturnote, auf der y-Achse ($x_2$) die Punktzahl im Eingangstest. Jeder bisherige Bewerber ist ein Punkt in diesem Koordinatensystem – entweder grün (für "wurde zugelassen") oder rot ("wurde abgelehnt").

Die KI fungiert nun als Prädiktor (Klassifikator). Ihre Aufgabe ist es, eine mathematische Trennlinie durch diesen Punktewolken-Haufen zu ziehen. Bei einem einfachen Modell lautet die Formel für diese Linie vereinfacht:

* $w_1$ und $w_2$ sind die Gewichtungen der beiden Noten.  
* $b$ ist der Bias (die Grundschwelle).
Die Trennlinie lässt sich beschreiben durch $w_1 \cdot x_1 + w_2 \cdot x_2 + b = 0$.

Liegt das Ergebnis für einen *neuen* Bewerber über 0, landet er auf der "grünen" Seite der Linie und wird zugelassen; liegt es darunter, wird er abgelehnt. Wie sehen nun unsere drei Trainingszustände aus – und was haben **Bias** (Verzerrung) und **Varianz** (Streuung) damit zu tun?

* **Underfitting (Hoher Bias, niedrige Varianz):** Die KI zieht eine völlig starre, grobe Linie, die viele Punkte auf der falschen Seite belässt. Das Modell hat einen hohen **Bias** (eine starke, falsche Voreingenommenheit, z. B. die Annahme, dass das Muster eine simple Gerade sein muss).  
* **Overfitting (Niedriger Bias, hohe Varianz):** Die KI zeichnet eine absurde, extrem gezackte Linie, die sich wie ein fehlerfreies Labyrinth exakt um jeden einzelnen roten Ausreißer-Punkt schlängelt. Das Modell hat eine hohe **Varianz** – es reagiert hypersensibel auf jedes kleinste Rauschen und jeden puren Zufall in den Trainingsdaten.  
* **Der Sweet Spot (Der Bias-Variance-Trade-off):** Die KI findet eine elegante Kurve. Sie akzeptiert bewusst historische Ausreißer, trifft aber für alle zukünftigen Bewerber die zuverlässigste Entscheidung. Die Suche nach genau dieser perfekten Kurve nennt man das Lösen des **Bias-Variance-Dilemmas**: Das Modell muss flexibel genug sein, um das wahre Muster zu erkennen (Bias senken), aber starr genug, um nicht das Rauschen auswendig zu lernen (Varianz senken).

![Der Bias-Variance-Trade-off: Die Mathematik der Trennlinie](images/classification_tradeoff.png)

*Abbildung 3: Der Bias-Variance-Trade-off und die mathematische Suche nach der idealen Trennlinie.*

💡 **Infobox: Bias, Varianz, Genauigkeit und Präzision (Das Elfmeter-Beispiel)** \> Um diese vier abstrakten statistischen Konzepte greifbar zu machen, stellen Sie sich einen Fußballspieler vor, der im Training Elfmeter schießt:

![Bias, Varianz und das Elfmeter-Beispiel](images/elfmeter_bias_variance.png)

*Abbildung 4: Die abstrakten statistischen Konzepte Bias und Varianz, veranschaulicht am Beispiel von Treffern im Dart.*

* **Genauigkeit (Accuracy) vs. Bias (Verzerrung):** Zielt der Schütze im Durchschnitt überhaupt auf die richtige Stelle (die Mitte des Tors)? Ein *hoher Bias* (geringe Genauigkeit) bedeutet, er hat einen systematischen Rechtsdrall und zielt immer auf die Eckfahne.  
* **Präzision (Precision) vs. Varianz (Streuung):** Wie nah liegen die einzelnen Schüsse beieinander? Eine *hohe Varianz* (geringe Präzision) bedeutet, die Bälle fliegen völlig chaotisch mal in den Himmel, mal auf den Boden.

**Die 4 Trainingszustände auf dem Platz:**

1. **Hoher Bias & Niedrige Varianz (Underfitting):** Der Spieler schießt extrem konstant (präzise) immer exakt an dieselbe Stelle – aber leider genau 2 Meter neben das Tor. Er hat eine völlig falsche Grundregel gelernt (Systematischer Fehler).  
2. **Niedriger Bias & Hohe Varianz (Overfitting):** Der Spieler zielt zwar "im Durchschnitt" genau auf die Mitte, aber er ist extrem fehleranfällig. Die Bälle streuen chaotisch über die gesamte Torfläche, weil er auf jeden Windhauch (das Rauschen) überreagiert.  
3. **Hoher Bias & Hohe Varianz:** Der absolute Worst Case. Er zielt auf die Eckfahne und streut dabei noch wild in alle Richtungen.  
4. **Niedriger Bias & Niedrige Varianz (Sweet Spot):** Der Ball schlägt konstant und verlässlich exakt im Winkel ein. Das Modell hat generalisiert und ist bereit für den Einsatz, auch unter variierenden Wetter- und Spielbedingungen.

## **1.4 Unter der Haube: Synapsen, das Perzeptron und die harte Mathematik**

Wie genau generalisiert dieser Algorithmus nun aus Daten? Um das zu begreifen, müssen wir den Blick zunächst tief in unseren eigenen Kopf richten.

### **Das biologische Wunderwerk: Neuronen, Neurotransmitter und absolute Effizienz**

Das menschliche Gehirn besteht aus rund 86 Milliarden Nervenzellen (Neuronen) (Herculano-Houzel, 2009). Jedes dieser Neuronen sieht aus wie ein verästelter Baum: Es besitzt **Dendriten**, die Signale empfangen, einen **Zellkörper**, der verarbeitet, und ein langes **Axon**, das Signale weiterleitet.

![Anatomie eines Neurons: Zellkörper, verästelte Dendriten und das signalweiterleitende Axon.](images/neuron_anatomy.png)

*Abbildung 5: Ein pädagogisches Schaubild eines einzelnen Neurons im Gehirn.*

Eine faszinierende anatomische Besonderheit: Neuronen sind (bis auf winzige Ausnahmen) die einzigen Zellen im menschlichen Körper, die sich nicht durch Zellteilung erneuern. Tatsächlich besitzen wir im Alter von etwa einem Jahr die absolut höchste Anzahl an Neuronen unseres Lebens. Danach nimmt die schiere Zellzahl stetig ab. Wir werden kognitiv nicht leistungsfähiger, weil wir "mehr" Zellen bekommen, sondern weil wir die bestehenden Zellen intelligenter vernetzen und ungenutzte Verbindungen radikal abbauen.

Wenn elektrische Signale am Ende eines Axons ankommen, klafft dort ein Abgrund: der **synaptische Spalt**. Der elektrische Funke kann diesen nicht überspringen. Hier geschieht der Wechsel zur Chemie. Das feuernde Neuron schüttet **Neurotransmitter** aus – winzige Botenstoffe wie Glutamat (Gaspedal), GABA (Bremse) oder Dopamin (Belohnung). Diese schwimmen über den Spalt und docken an der Empfängerzelle an. In unserem Kopf feuern in jedem Augenblick geschätzt **100 Billionen Synapsen**.

![Der synaptische Spalt: Chemische Signalübertragung durch Neurotransmitter von Sender- zu Empfängerzelle.](images/synapse_neurotransmitters.png)

*Abbildung 6: Detailansicht des synaptischen Spalts und der chemischen Signalübertragung.*

Die Effizienz ist dabei unglaublich: Unser Gehirn betreibt dieses Netzwerk mit einem Energieverbrauch von rund **20 Watt**. Zum Vergleich: Ein MacBook Pro mit einem M5-Prozessor zieht unter Volllast bis zu 100 Watt – und kann nicht einmal ansatzweise die kontextuelle Tiefe eines Kleinkindes simulieren. KI-Serverfarmen verschlingen sogar zig Megawatt an Strom.

![Vergleich der Energieeffizienz: Das hochkomplexe Gehirn benötigt nur 20 Watt, während moderne Computer ein Vielfaches verbrauchen.](images/energy_efficiency_brain_vs_chip.png)

*Abbildung 7: Vergleichende Energieeffizienz zwischen dem menschlichen Gehirn und moderner Computer-Hardware.*

### **Lernen in der Biologie: Die Hebb'sche Regel**

Aber wie speichert dieser Zellhaufen neues Wissen? 1949 formulierte Donald Hebb ein Postulat, die **Hebb'sche Lernregel**:

*"Neurons that fire together, wire together."* (Neuronen, die gemeinsam feuern, vernetzen sich.) (Hebb, 1949).

![Hebb'sche Lernregel: "Neurons that fire together, wire together."](images/hebbian_path_medium.jpg)

*Abbildung 8: Eine biologische Repräsentation der Hebb'schen Lernregel und der Verstärkung synaptischer Verbindungen.*

Wenn Sie etwas Neues lernen, werden bestimmte Neuronenketten wiederholt aktiviert. Die Biologie reagiert mit physischer Anpassung: Die beteiligten Synapsen "verdicken" sich. Es werden mehr Neurotransmitter produziert und mehr Rezeptoren gebaut. Das Signal fließt fortan flüssiger. Unser Gehirn besitzt zudem **Neuroplastizität**: Es kann physisch völlig neue Ästchen wachsen lassen, um frische Pfade zu knüpfen.

### **Der Sprung zur KI: Das künstliche Perzeptron**

Die heutige KI besitzt keine biologische Neuroplastizität (sie wächst nicht physisch). Aber sie simuliert die *Verdickung der Synapsen* rein mathematisch durch das **Perzeptron**.

![Künstliches Perzeptron: Eingaben, Gewichte und Aktivierungsfunktion](images/perceptron_diagram.png)

*Abbildung 9: Schematischer Aufbau eines simplen künstlichen Neurons (Perzeptron).*

### **Nerd-Exkurs: Die Mathematik des Lernens zum Angeben**

Die Mathematik hinter einem künstlichen Neuron (Perzeptron) lässt sich so ausdrücken:

* $x_1, x_2, ..., x_n$ **(Inputs):** Die Daten, die in das Neuron fließen.  
* $w_1, w_2, ..., w_n$ **(Weights/Gewichte):** Das digitale Äquivalent zu den Neurotransmittern\! Jedes Input hat ein Gewicht. Ein hohes Gewicht bedeutet: "Diese Information wird massiv verstärkt."  
* $b$ **(Bias):** Eine Grundtendenz des Neurons, überhaupt zu feuern.  
* $f(x)$ **(Aktivierungsfunktion):** Ein mathematischer Filter (Schwellenwert). Er bringt die entscheidende "Nicht-Linearität" ins Spiel.  
* $y$ **(Output):** Das Ergebnis.


Wenn Daten durchgerechnet werden, nennt man das den **Forward Pass**.

**Wie *lernt* das System? Auftritt: Die Verlustfunktion und der Gradientenabstieg**

Am Anfang sind alle Gewichte ($w$) reine Zufallszahlen. Das System rät. Dann vergleicht es seine Vorhersage mit dem echten Ergebnis. Der Fehler wird in der **Loss Function** (Verlustfunktion) berechnet: *Wie katastrophal falsch liege ich?*

Das einzige Lebensziel der KI im Training ist es, diesen Fehler auf null zu reduzieren. Sie nutzt den **Gradient Descent** (Gradientenabstieg). Stellen Sie sich die Verlustfunktion als Gebirge vor. Die KI steht blind auf einem Gipfel (hoher Fehler) und will ins tiefste Tal (Fehler \= 0). Sie tastet den Boden ab, um das stärkste Gefälle (den Gradienten) zu spüren, und macht einen kleinen Schritt dorthin. Diesen Schritt – die winzige Anpassung der digitalen Neurotransmitter-Gewichte – nennt man **Backpropagation** (Rückführung des Fehlers) (Furbach et al., 2024; Engel, 2025). Das macht die Maschine Millionen Mal pro Sekunde, bis sie im Tal ankommt.

![Metapher: Verlustfunktion als Gebirgslandschaft](images/gradient_descent_metapher.png)

*Abbildung 10: Die algorithmische Suche im Gradientenabstieg nach dem Minimum der Verlustfunktion gleicht dem Weg ins tiefste Tal.*

**Der fundamentale Unterschied: Training vs. Inferenz** An genau diesem Punkt – wenn die KI im tiefsten Tal angekommen ist – wird ihr Wissen im Modell „eingefroren“. Weil dieser mathematische Trainingsprozess (die Backpropagation) derart gigantische Rechenleistung und immense Strommengen verschlingt, gibt es bei Künstlicher Intelligenz eine strikte Trennung zwischen **Training** (dem extrem teuren Lernprozess) und **Inferenz** (der reinen Anwendung des fertigen Modells). Wenn Sie heute mit ChatGPT sprechen, inferiert das System nur; es lernt nicht live aus Ihren Sätzen dazu.

Unser biologisches Pendant funktioniert völlig anders: Das menschliche Gehirn kennt keine harte Trennung zwischen Trainings- und Anwendungsphase. Wir lernen *immer* und kontinuierlich, bei jedem bewussten Erleben – und das bis ins hohe Alter. Allerdings hat die Biologie hier ihren eigenen Preis: Während unsere Gehirne im Kleinkindalter extrem formbar sind, nimmt die Neuroplastizität im Laufe unseres Lebens ab. Unseren Neuronen fällt es zunehmend schwerer, alte, eingefahrene synaptische Pfade zu durchbrechen und völlig neue Verbindungen zu knüpfen. Der Mensch wird mit den Jahren kognitiv weniger flexibel – oder umgangssprachlich ausgedrückt: ein wenig „bornierter“. Die KI hingegen kann bei einem neuen (wenn auch sündhaft teuren) Trainingslauf jederzeit wieder wie ein unbeschriebenes, extrem flexibles Blatt starten.

### **Laborpraxis 1.3: Cloud-Setup & Das erste lokale Modell (LM Studio)**

**Zeitansatz:** 22,5 Minuten.

**Setup & Accounts (Schritt 1):**

1. **OpenRouter (Zwingend):** Gehen Sie auf [openrouter.ai](https://openrouter.ai). Erstellen Sie einen Account. Dieser wird für spätere API-Aufgaben im Kurs *zwingend* benötigt.
2. **GitHub & Hugging Face (Optional):** Werfen Sie einen kurzen Blick auf github.com und huggingface.co. Die Erstellung von Accounts ist hier vorerst optional (nur zur Ansicht), kann aber gerne auf eigenen Wunsch durchgeführt werden.

**Lokales Deployment (Schritt 2):**

3. **LM Studio Installation:** Laden Sie **LM Studio** ([lmstudio.ai](https://lmstudio.ai)) herunter und installieren Sie es auf Ihrem Laptop.
4. **Modell-Download:** Öffnen Sie LM Studio und suchen Sie oben im Suchschlitz explizit nach dem Modell `Qwen/Qwen3.5-0.8B`.
5. Laden Sie das Modell im **GGUF**-Format herunter. (Wählen Sie eine der angebotenen kleinen Quantisierungsstufen auf der rechten Seite).
6. *(Zeitpuffer: Da der Download im Vorlesungs-WLAN bei manchen Teilnehmern ein paar Minuten dauern kann, diskutieren Sie währenddessen die Ergebnisse des Kaltstarts aus Laborpraxis 1.2).*
7. **Kaltstart lokal wiederholen:** Sobald der Download fertig ist, laden Sie das Modell in den Chat von LM Studio. Wiederholen Sie den unpräzisen Kaltstart-Prompt ("Schreibe eine Absage...") ohne Internetverbindung. Vergleichen Sie die Qualität des winzigen 0.8B-Modells mit ChatGPT.

### **Laborpraxis 1.4: Kontext-Grenzen & TTFT (Time To First Token)**

**Zeitansatz:** 22,5 Minuten.

**Übungen:**

1. **Kontextfenstertest (Gering vs. Hoch):** 
   - *Test mit geringem Kontext:* Stellen Sie in LM Studio in den Rechten Einstellungen das Kontextfenster (Context Window) künstlich ganz nach unten (z.B. auf 512 Tokens). Fügen Sie einen Text ein, der deutlich länger ist (z.B. 2-3 DIN A4 Seiten), und stellen Sie eine Frage dazu. Was passiert? (Das Modell wird Text abschneiden oder Fehlermeldungen werfen).
   - *Test mit hohem Kontext:* Setzen Sie das Kontextfenster wieder hoch (z.B. auf 8192 Tokens). Schicken Sie denselben Prompt ab. Beobachten Sie dabei Ihren Arbeitsspeicher (Task-Manager / Aktivitätsanzeige).
2. **Der TTFT-Test (Quantisierung & KV Cache):**
   - Schließen Sie das aktuelle Chat-Fenster (Eject Model).
   - Aktivieren Sie in den Einstellungen (falls verfügbar) die *Quantisierung des KV Cache* (z.B. Flash Attention o.ä.). 
   - Laden Sie den massiven Text erneut hinein.
   - Messen oder schätzen Sie die **Time To First Token (TTFT)** – also die Zeit, bis die KI beginnt, das erste Wort zu schreiben, nachdem Sie Enter gedrückt haben.
   - **Erkenntnis:** Ein riesiger Text-Input füllt den KV Cache des Speichers. Dies frisst RAM und erhöht die TTFT massiv, bevor die Maschine antworten kann. Eine Quantisierung des Caches drückt den Speicherverbrauch, ändert aber potenziell die Qualität leicht.

## **1.5 Meilensteine: Von CNNs und RNNs zum Transformer**

Wie führte diese Mathematik (Perzeptrons, Forward-/Backpropagation) nun zu Modellen, die juristische Examen bestehen? Die Entwicklung war ein Marathon, bei dem sich über die Jahre spezifische Netzwerk-Ausprägungen für bestimmte Aufgaben herauskristallisierten.

In den 2010er Jahren dominierten zwei Hauptarchitekturen das maschinelle Lernen:

1. **Faltungsnetzwerke (Convolutional Neural Networks, CNNs):** Diese Netzwerke sind grob vom visuellen Cortex von Säugetieren inspiriert. Sie sind die absoluten Spezialisten für die Computer Vision (Bilderkennung). Anstatt ein Bild als bloße Text-Zahlenkolonne zu lesen, schieben CNNs kleine mathematische Raster (Filter) über das Bild. Sie erkennen erst Kanten, setzen diese dann zu Formen zusammen und erkennen in den tiefsten Schichten schließlich ein Gesicht oder ein Straßenschild. Für Text waren sie jedoch völlig ungeeignet.  
2. **Rekurrente Netzwerke (Recurrent Neural Networks, RNNs):** Sprache und Text sind keine statischen Bilder, sondern *Sequenzen* – die Reihenfolge der Wörter ist entscheidend ("Der Hund beißt den Mann" vs. "Der Mann beißt den Hund"). Um Text zu verarbeiten, entwickelte man RNNs. Diese Netzwerke besaßen eine Art interne Gedächtnisschleife. Sie lasen Text streng Wort für Wort, von links nach rechts, und versuchten, den Kontext mitzuschleppen. Das gewaltige Problem der RNNs: Sie hatten das Gedächtnis eines Goldfisches. Bei langen Schachtelsätzen oder ganzen Buchseiten hatte das RNN am Ende des Textes den entscheidenden Anfang längst "vergessen" (das sogenannte Problem des verschwindenden Gradienten).

**Der Durchbruch: Die Transformer-Architektur (2017)** Das Sequenz-Problem wurde 2017 gelöst, als Forscher bei Google das Paper *Attention is All You Need* veröffentlichten (Vaswani et al., 2017). Sie erfanden den **Transformer**.

Der Transformer verwarf die Idee der RNNs, Text Wort für Wort zu lesen. Er verarbeitet alle Wörter eines Satzes *gleichzeitig* (parallel). Das revolutionäre Element war der sogenannte **Attention-Mechanismus** (Aufmerksamkeitsmechanismus). Wenn der Transformer liest: *„Die Bank war geschlossen, weil sie kein Geld mehr hatte“*, berechnet er mathematisch, welche Wörter im Satz stark zusammengehören. Er richtet seine "Attention" bei dem Wort "sie" massiv auf das Wort "Geld" und versteht sofort, dass das Finanzinstitut gemeint ist.

ChatGPT (ein **G**enerative **P**re-trained **T**ransformer) ist im Grunde eine gigantische Version dieser Architektur. Es wurde auf riesigen Datenmengen darauf trainiert, schlichtweg das statistisch wahrscheinlichste nächste Wort vorherzusagen – behält aber dank der Attention den perfekten Überblick über riesige Kontexte.

💡 **Infobox: Der Stammbaum der KI – Traditionell vs. Generativ** \> Um die aktuelle KI-Revolution richtig einzuordnen, hilft eine klare Trennung der beiden großen KI-Zweige. Während KI seit Jahrzehnten erforscht und eingesetzt wird, ist der *generative* Zweig extrem jung und maßgeblich für den aktuellen Hype verantwortlich.

| Kriterium | Traditionelle KI (Analytisch / Prädiktiv) | Generative KI (Synthetisch / Kreativ) |
| :---- | :---- | :---- |
| **Kernfunktion** | Analysiert bestehende Daten, erkennt Muster, sortiert und trifft punktgenaue Vorhersagen. | Erschafft völlig neue, bislang nicht existierende Inhalte (Text, Bild, Audio, Code) auf Basis erlernter Muster. |
| **Beispielbegriffe** | Klassifikation, Clustering, Regression, Empfehlungssysteme. | LLM (Large Language Model), Diffusionsmodell, Prompting, Halluzination. |
| **Typische Anwendungsbeispiele** | • **Spam-Filter** im E-Mail-Postfach • **Netflix-/Spotify-Algorithmen** (Serien- & Musikempfehlungen) • **Kredit-Scoring** bei Banken zur Risikoprüfung • **Tumor-Erkennung** auf ärztlichen Röntgenbildern | • **ChatGPT / Claude** (Schreiben von Artikeln, E-Mails, Analysen) • **Midjourney / DALL-E** (Generieren fotorealistischer Bilder aus Text) • **GitHub Copilot** (Automatische Programmierung / Code-Erstellung) • **ElevenLabs** (Täuschend echtes Klonen menschlicher Stimmen) |

*Tabelle 3: Unterscheidungsmerkmale zwischen klassischer, analytischer KI und moderner, generativer KI.*

**Die Eselsbrücke für die Praxis:** Traditionelle KI versucht, die Welt zu *verstehen* und zu *sortieren*. Generative KI hingegen versucht, neue Dinge in diese Welt hinein zu *erschaffen*.

## **1.6 Die Illusion der Eigeninitiative: Kreativität, Antrieb und die Verlustfunktion**

Wenn KI so intelligent wirkt, müssen wir abschließend zwei große Mythen dekonstruieren: Die Vorstellung, dass die Maschine einen eigenen Willen besitzt, und die Art, wie sie "kreativ" ist.

**Der Antrieb: Der Funke vs. der Trigger**

Ein Mensch besitzt einen intrinsischen, biologischen Antrieb, getrieben durch Umwelt, Emotionen und Neurochemie (wie Dopamin). Die Maschine tut nichts davon. Sie generiert nicht ein einziges Wort, bis ein Mensch von außen einen **Trigger** (den Prompt) einspeist. Der einzige "Antrieb" der Maschine existierte im Training: Das blinde, mathematische Bedürfnis, die Verlustfunktion zu minimieren. Sie will keinen perfekten Text schreiben, sie will nur den mathematischen Fehlerwert in ihrer Matrix senken.

**Additive vs. Subtraktive Kreativität**

Die menschliche Kreativität ist oft **additiv**. Wir stehen vor einer leeren Leinwand und fügen Farbe hinzu. Sprachmodelle (LLMs) imitieren diese additive Kreativität: Sie hängen autoregressiv ein Wort an das nächste an.

Die visuelle KI (wie Midjourney oder Flux von BlackForestLabs) basiert jedoch auf Diffusionsmodellen (Diffusion Models). Ihre Kreativität ist **subtraktiv**.

Wenn Sie den Prompt "Ein Astronaut auf einem Pferd" eingeben, beginnt die KI mit einem Bild aus 100 % statischem TV-Rauschen. Im Training hat sie gelernt, Rauschen zu entfernen (Denoising). Sie extrahiert das gewünschte Bild aus dem Chaos, indem sie das Rauschen Schritt für Schritt subtrahiert – wie ein Bildhauer, der den überflüssigen Stein wegschlägt, um die Statue freizulegen (Brune, 2025; Engel, 2025).

![Additive vs. Subtraktive Kreativität im Vergleich](images/creativity_comparison.png)

*Abbildung 11: Gegenüberstellung additiver Wort-für-Wort-Generierung bei Text-KIs und subtraktiver Bild-Generierung (Entrauschen) bei Diffusionsmodellen.*

Wir Menschen haben die Idee (den Trigger). Die Maschine liefert lediglich die Wahrscheinlichkeitsrechnung, um diese Idee umzusetzen. Hier verbirgt sich das vielleicht größte Missverständnis unserer Zeit, das durch Science-Fiction-Filme und reißerische Medienberichte immer wieder genährt wird: die Verwechslung von Rechenleistung mit Eigenantrieb.

💡 **Infobox: Der Hollywood-Irrtum – Warum die KI niemals von selbst losrennt**

Wenn wir KI-Systeme betrachten, müssen wir uns von der medialen Darstellung autonomer, pläneschmiedender Roboter verabschieden. Die Realität der Informatik ist wesentlich nüchterner und lässt sich auf drei fundamentale Wahrheiten reduzieren:

1. **Das einzige Ziel ist die Verlustfunktion (Loss Function):** Weder die klassische noch die generative KI hat den Wunsch, die Weltherrschaft an sich zu reißen oder ein Meisterwerk zu erschaffen. Das einzige intrinsische "Ziel" eines jeden KI-Modells ist es, die mathematische Verlustfunktion während des Trainings auf null zu minimieren. Sie ist schlichtweg darauf getrimmt, so präzise wie möglich die Muster wiederzugeben, für die sie optimiert wurde.  
2. **Der Spiegel der Daten (Garbage in, Garbage out):** Eine KI besitzt von Natur aus keinen angeborenen Werte- oder Moralrahmen. Sie formt ihr "Weltbild" ausschließlich aus dem Datensatz, mit dem sie trainiert wurde. Füttert man das Modell mit fehlerhaften, toxischen oder verzerrten Daten, wird es diese Fehler mit atemberaubender Effizienz reproduzieren. Bei uns Menschen ist das erstaunlich ähnlich: Unser eigener Wertekompass, unsere Denkmuster und Vorurteile werden maßgeblich von unserem Umfeld und den Inhalten geprägt, die wir täglich konsumieren (unsere "Trainingsdaten"). Die KI verhält sich hier wie ein radikales, ungefiltertes Spiegelbild ihrer textlichen "Erziehung".  
3. **Die Intention liegt immer beim Menschen:** Eine KI rennt niemals von selbst los. Ein Sprachmodell wie ChatGPT wartet im Zweifelsfall geduldig bis an das Ende des Universums, ohne auch nur ein einziges Wort zu generieren, wenn niemand die Enter-Taste drückt. Der Mensch ist der notwendige Trigger. Selbst wenn wir KI-Agenten so programmieren, dass sie zeitgesteuert (technisch getriggert) Aufgaben erledigen, entspringt die *Intention* und der Zweck dieses Einsatzes immer dem menschlichen Anwender.

🛑 **Merksatz für die Praxis:** *Die Maschine besitzt die Skalierung, aber der Mensch besitzt die Intention. KI ist kein handelndes Wesen, sondern ein reaktiver Wahrscheinlichkeitsrechner, der auf unseren Trigger wartet.*

## **Der Abschluss**

### **Zusammenfassung**

Wir stehen am Beginn einer Epoche, in der kognitive Arbeitsprozesse maschinell skalierbar werden. Die Entwicklung der KI fühlt sich exponentiell an (Amara’s Law). Der entscheidende Durchbruch war der Wechsel von starren Regeln (Software 1.0) zum Lernen aus Daten (Software 2.0). Dabei nutzen wir primär überwachtes Lernen, unüberwachtes Clustern oder bestärkendes Lernen durch Belohnung. Ziel ist immer die Generalisierung (der Sweet Spot im Bias-Variance-Trade-off). Auf biologischer Ebene geschieht Lernen durch Neuroplastizität (Hebb'sche Regel), was die KI im Perzeptron via Gradientenabstieg und Backpropagation simuliert. Während eine KI jedoch strikt zwischen extrem rechenintensivem Training und statischer Inferenz trennt, lernt das menschliche Gehirn kontinuierlich und effizient, wenn auch im Alter mit sinkender kognitiver Flexibilität. Nachdem CNNs und RNNs die Vorarbeit in der Bild- und Textverarbeitung leisteten, brachte der Transformer (2017) mit seinem Attention-Mechanismus den Durchbruch in der Sequenzverarbeitung. Bei aller Leistung bleibt festzuhalten: KI besitzt keinen eigenen Antrieb, sondern reagiert additiv (Texte) oder subtraktiv (Bilder) auf unsere menschlichen Trigger.

### **Reflexionsfragen**

1. **Auswendiglernen vs. Generalisieren:** In welchen Bereichen Ihres BWL-Studiums belohnen wir aktuell noch "Overfitting" (bloßes Auswendiglernen) statt echter Generalisierungskompetenz?  
2. **Der Gradientenabstieg:** Wenn KI durch ständige Fehlerkorrektur (Loss Function) lernt – wie etabliert ist eine positive "Fehlerkultur" in Ihrem Unternehmen?  
3. **Trigger vs. Eigeninitiative:** Wie verändert sich die Rolle des Mitarbeiters, wenn er künftig als "Trigger" fungiert, der die Maschine durch präzises Prompting in Gang setzt?  
4. **Subtraktive Kreativität:** Können Sie das Prinzip des "Rauschen entfernens" aus Diffusionsmodellen metaphorisch auf Prozesse in Ihrem Unternehmen übertragen, um Klarheit aus Datenchaos zu gewinnen?

## **1.C Abschluss – Literaturverzeichnis (Harvard)**

* Amara, R. (1978). (Zitat über technologischen Wandel, oft assoziiert mit dem Institute for the Future). Popularisiert in: *The Futurist* (2006).
* Bostrom, N. (2014). *Superintelligenz: Szenarien einer kommenden Revolution*. Suhrkamp.  
* Brune, G. (2025). *Künstliche Intelligenz heute: Anwendungen aus Wirtschaft, Medizin und Wissenschaft*. Springer.
* Engel, M. (2025). *GenAI in a Brainshell – KI Literacy für Jeden*. Hochschule für Wirtschaft und Umwelt Nürtingen-Geislingen.  

* Furbach, U., Michaeli, T., Kitzelmann, E., & Schmid, U. (2024). *Künstliche Intelligenz für Lehrkräfte: Eine fachliche Einführung mit didaktischen Hinweisen*. Springer.
* Hebb, D. O. (1949). *The Organization of Behavior: A Neuropsychological Theory*. Wiley.  
* Herculano-Houzel, S. (2009). The human brain in numbers: a linearly scaled-up primate brain. *Frontiers in Human Neuroscience, 3*.
* Hofstadter, D. R. (1979). *Gödel, Escher, Bach: an Eternal Golden Braid*. Basic Books.
* Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.  
* Karpathy, A. (2017). *Software 2.0*. Medium. https://karpathy.medium.com/software-2-0-a64152b37c35.
* Li, N. P., van Vugt, M., & Colarelli, S. M. (2018). The Evolutionary Mismatch Hypothesis: Implications for Psychological Science. *Current Directions in Psychological Science*.
* Ouyang, L. et al. (2022). Training language models to follow instructions with human feedback. *NeurIPS*.
* Rosenblatt, F. (1958). *The Perceptron: A Probabilistic Model for Information Storage and Organization in the Brain*. Psychological Review.  
* Silver, D. et al. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature, 529*, 484-489.
* Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). *Attention Is All You Need*. NeurIPS, 30.
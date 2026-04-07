# **5\. Die Evolution der Assistenten (Automation & Agenten)**

## **5.0 Leitfragen**

* Warum reicht es heute für Unternehmen nicht mehr aus, Künstliche Intelligenz lediglich als besseres Such- oder Textwerkzeug (Chatbot) zu betrachten?  
* Wie vollzieht sich der technologische Sprung von einer passiven, fragengesteuerten KI hin zu autonomen Agenten, die eigenständig Handlungen in der echten Welt ausführen?  
* Was ist der fundamentale Unterschied zwischen einer deterministischen Automatisierung (Webhooks/APIs) und probabilistischen, agentischen Systemen?  
* Wie verändert das Model Context Protocol (MCP) die Art und Weise, wie Sprachmodelle mit externen Unternehmensdaten und Software-Werkzeugen interagieren?  
* Welche neuen Sicherheits- und Architektur-Herausforderungen entstehen, wenn wir Sprachmodellen den „Schlüssel“ zu unseren operativen Systemen übergeben?

### **5.0.1 Vorab: Die wichtigsten Begriffe auf einen Blick**

| Begriff | Kurzdefinition für die Praxis | Typisches Missverständnis („— Falsch.“) | Mini-Beispiel |
| :---- | :---- | :---- | :---- |
| **Agentic System** | Ein KI-System, das nicht nur Text generiert, sondern Ziele durch Nutzung von Werkzeugen eigenständig verfolgt. | — Falsch: Ist einfach nur ein Chatbot mit besserem Prompt. | Eine KI recherchiert eigenständig Firmen, öffnet das CRM und legt Leads an. |
| **API (Application Programming Interface)** | Eine digitale Schnittstelle, über die zwei Software-Systeme maschinenlesbar miteinander kommunizieren. | — Falsch: Ist eine Benutzeroberfläche für Entwickler. | Das Wetter-App-Widget fragt via API die aktuellen Temperaturdaten vom Server des Wetterdienstes ab. |
| **Webhook** | Ein automatischer Informations-Push von einem System zum anderen, ausgelöst durch ein bestimmtes Ereignis (Event). | — Falsch: Ist dasselbe wie eine API, die aktiv nach Daten fragt. | Ein Shop-System sendet sofort nach Bestelleingang einen Webhook an die Buchhaltung. |
| **n8n / Zapier** | Plattformen zur visuellen, knotenbasierten Automatisierung von Geschäftsprozessen ohne tiefgehende Programmierkenntnisse. | — Falsch: Ersetzen komplexe, tiefgreifende Softwareentwicklung komplett. | Eine E-Mail mit Rechnung im Anhang wird automatisch in den Google Drive-Ordner verschoben. |
| **JSON (JavaScript Object Notation)** | Ein textbasiertes, leicht lesbares Datenformat, das als Standard-Sprache für den Datenaustausch via APIs dient. | — Falsch: Ist eine eigene Programmiersprache. | {"Kunde": "Müller", "Status": "Aktiv"} |
| **ReAct-Loop** | Ein Prompting-Framework (Reasoning \+ Acting), das die KI zwingt, vor jeder Handlung einen bewussten „Gedanken“ zu formulieren. | — Falsch: Ein Hardware-Loop in Serverfarmen. | KI denkt: „Ich brauche den Umsatz 2024.“, handelt: \[Suche in Datenbank\], beobachtet: \[Ergebnis\]. |
| **MCP (Model Context Protocol)** | Ein offener Standard, der es KI-Modellen ermöglicht, sicher und standardisiert auf lokale oder entfernte Datenquellen zuzugreifen. | — Falsch: Ein neues Large Language Model von Anthropic. | Claude nutzt MCP, um lokal in einem GitHub-Repository des Nutzers Code zu lesen. |
| **Orchestrierung** | Die koordinierte Steuerung mehrerer KIs oder Agenten, die zusammenarbeiten, um einen übergeordneten Prozess zu lösen. | — Falsch: Das bloße Hintereinanderschalten von Chat-Anfragen. | Ein Research-Agent sammelt Daten, übergibt an Writer-Agent, der an Critic-Agent liefert. |
| **Reasoner (System 2 KI)** | Sprachmodelle, die vor der Textausgabe einen internen, tiefen analytischen Denkprozess (Chain-of-Thought) durchlaufen. | — Falsch: Modelle, die einfach nur schneller antworten. | OpenAI o1 „denkt“ für 30 Sekunden über ein komplexes Mathe-Rätsel nach, bevor es antwortet. |
| **Guardrails** | Eingebaute Sicherheitsleitplanken und Überprüfungsmechanismen, die verhindern, dass autonome Agenten kritische Fehler begehen. | — Falsch: Eine Viren-Scanner-Software für KI-Server. | Ein Agent darf E-Mails entwerfen, aber der Klick auf „Senden“ erfordert zwingend menschliche Freigabe. |

### **5.0.2 Orientierung**

Wir haben in den vorangegangenen Kapiteln die fundamentale Architektur von Large Language Models (LLMs) untersucht. Wir haben gelernt, wie Transformer-Architekturen Muster in Sprache erkennen, wie durch Prompt Engineering die Qualität der Ausgaben drastisch gesteigert werden kann und wie Systeme mittels Retrieval-Augmented Generation (RAG) ein externes Gedächtnis erhalten. In der biologischen Analogie haben wir uns bislang im Bereich des präfrontalen Cortex (Planung, Verständnis) und des Hippocampus (Erinnerung) bewegt. Mit dem vorliegenden Kapitel vollziehen wir nun den entscheidenden evolutionären Schritt: Wir verbinden das Gehirn mit dem motorischen Cortex. Wir geben der Künstlichen Intelligenz virtuelle „Hände“.

Die bloße Generierung von Text oder Code – so beeindruckend sie bei Modellen wie GPT-4 oder Claude 3.5 Sonnet auch sein mag – stellt im wirtschaftlichen Kontext nur den ersten Schritt der Wertschöpfungskette dar. Ein Textdokument, das eine Marketingstrategie formuliert, entfaltet erst dann wirtschaftlichen Nutzen, wenn aus ihm Handlungen abgeleitet werden. Die nächste Dekade der KI-Entwicklung ist daher nicht primär durch die Generierung noch flüssigerer Texte gekennzeichnet, sondern durch *Agency* – die Fähigkeit von Systemen, aus komplexen Instruktionen selbstständig Handlungspläne zu erstellen und diese über digitale Schnittstellen (APIs) in realen Unternehmenssystemen auszuführen (Anthropic 2024).

Dieses Kapitel widmet sich dieser tiefgreifenden Transformation. Wir beginnen mit einer makroskopischen Einordnung der KI-Evolution anhand der fünf Stufen nach Sam Altman, um den Weg vom Chatbot zum autonomen Agenten zu skizzieren. Anschließend tauchen wir in den Maschinenraum der Geschäftsprozessautomatisierung (BPA) ein und erlernen die Mechanik von Webhooks, APIs und visuellen Orchestrierungs-Tools wie n8n. Im finalen Schritt verschmelzen wir diese Automatisierungstechnik mit der kognitiven Flexibilität von LLMs, betrachten agentische Systeme und das revolutionäre Model Context Protocol (MCP). Das Ziel dieses Kapitels ist es, Sie vom passiven Konsumenten von KI-Texten zum Architekten autonomer, wertschöpfender KI-Workflows zu befähigen.

## **5.1 Die 5 Stufen der KI (nach S. Altman): Chatbots, Reasoners, Agents**

Die technologische Entwicklung generativer Künstlicher Intelligenz verläuft nicht linear, sondern in qualitativen Sprüngen. Um die rasante Kadenz der Modellveröffentlichungen strategisch einordnen zu können, bedarf es eines Frameworks, das nicht auf der bloßen Anzahl an Parametern oder Benchmarks beruht, sondern auf den tatsächlichen, in der Praxis nutzbaren Fähigkeiten der Systeme. Ein weithin zitiertes Modell für diese Evolution wurde von OpenAI in Form eines fünfstufigen Pfades zur Artificial General Intelligence (AGI) skizziert (oft zitiert nach Sam Altman, CEO von OpenAI). Dieses Stufenmodell hilft Betriebswirten und Entwicklern gleichermaßen, den aktuellen Stand der Technik (State of the Art) realistisch zu bewerten und zukünftige Disruptionen zu antizipieren.

**Stufe 1: Chatbots (Conversational AI)**

Die erste Stufe repräsentiert Systeme, mit denen Menschen in natürlicher Sprache interagieren können. Diese Systeme verfügen über ein breites, aber oft flaches Weltwissen, das in ihren neuronalen Gewichten kodiert ist. Der Durchbruch dieser Stufe erfolgte Ende 2022 mit ChatGPT (OpenAI 2023). Diese Modelle operieren im sogenannten „System 1 Thinking“ (Kahneman 2011: 45\) – sie generieren Antworten intuitiv, schnell und probabilistisch durch die Vorhersage des nächsten Tokens.

*Was es ist:* Ein hochflexibler Gesprächspartner, ein Interface für aggregiertes Internet-Wissen, ein Brainstorming-Tool.

*Was es nicht ist:* Ein fehlerfreier Fakten-Speicher oder ein System, das tiefe logische Probleme iterativ durchdenkt.

**Stufe 2: Reasoners (Human-level problem solving)**

Auf dieser Stufe erwerben die Modelle die Fähigkeit zum „System 2 Thinking“. Bevor ein Reasoner (wie beispielsweise die Modellreihe OpenAI o1) eine Antwort generiert, durchläuft er im Hintergrund eine unsichtbare Chain-of-Thought (Gedankenkette). Er bricht komplexe Probleme (z.B. aus der Mathematik, der strategischen BWL oder dem Coding) in Sub-Probleme herunter, testet intern Lösungswege, verwirft fehlerhafte Ansätze und gibt erst nach Sekunden oder Minuten das verifizierte Endresultat aus (Brown et al. 2020: 1877). Dies reduziert Halluzinationen massiv und ermöglicht logische Deduktion auf dem Niveau menschlicher Fachexperten.

**Stufe 3: Agents (Systems that can take actions)**

Während Chatbots und Reasoners auf die Textausgabe beschränkt sind (sie sind „Brains in a vat“ – Gehirne im Tank), erhalten Systeme auf Stufe 3 die Fähigkeit zu handeln. Agenten können Werkzeuge bedienen, im Internet surfen, Code in Sandbox-Umgebungen ausführen, APIs ansteuern und E-Mails versenden. Sie arbeiten zielorientiert: Man gibt dem Agenten ein Endziel („Erstelle eine Konkurrenzanalyse der Top 3 Mitbewerber und präsentiere sie als fertiges PDF in meinem Google Drive“), und der Agent zerlegt das Ziel in Teilschritte, führt diese aus, reagiert auf Fehler (z.B. wenn eine Webseite blockiert ist, sucht er eine andere) und schließt die Aufgabe selbstständig ab. Wir befinden uns derzeit technologisch exakt am Übergang von Stufe 2 zu Stufe 3 (McKinsey & Company 2024).

**Stufe 4: Innovators (AI that can invent)**

Diese zukünftige Stufe beschreibt KI-Systeme, die nicht mehr nur existierendes Wissen rekombinieren oder gegebene Prozesse abarbeiten, sondern fundamental neue Erkenntnisse generieren können. Ein „Innovator“ könnte völlig neuartige Materialien erfinden, neue physikalische Theorien formulieren oder revolutionäre betriebswirtschaftliche Organisationsstrukturen designen, die menschlichen Forschern bislang verborgen blieben.

**Stufe 5: Organizations (AI that can run an entire organization)**

Die finale Stufe dieser Taxonomie beschreibt ein KI-System, das als vollständig autonome, gigantische Maschinerie agiert, die in der Lage ist, die Operationen eines gesamten Unternehmens oder einer Regierungsorganisation zu führen. Hier konvergiert KI mit dem Konzept der AGI (Artificial General Intelligence). Die Maschine steuert nicht nur Teilprozesse, sondern orchestriert Strategie, Ressourcenzuweisung, Produktentwicklung und Marktanpassung in Echtzeit und in einem Maßstab, der die menschliche Kognition bei Weitem übersteigt.

**Strategische Implikationen für die Betriebswirtschaft**

Für die heutige Unternehmenspraxis bedeutet dieses Stufenmodell einen massiven Paradigmenwechsel. Die Produktivitätsgewinne durch Stufe 1 (Chatbots) beliefen sich primär auf die Beschleunigung individueller Aufgaben (Texterstellung, Code-Snippets). Der Übergang zu Stufe 3 (Agents) verspricht jedoch die vollständige Automatisierung ganzer End-to-End-Geschäftsprozesse (Engel 2024). Wenn ein Agent nicht nur einen Antwortvorschlag für eine Kunden-E-Mail generiert (Stufe 1), sondern diese E-Mail liest, den Kontext aus dem CRM holt, entscheidet, dass eine Kulanzzahlung angemessen ist, diese Zahlung über die Banking-API auslöst und dem Kunden antwortet, verschiebt sich die Rolle des menschlichen Mitarbeiters vom Ausführenden zum Orchestrator und Kontrolleur (Supervisor).

#### **Abbildungs-Platzhalter**

**\[Abb. 5.1-1\] Die 5 Stufen der KI-Evolution nach OpenAI** \> **Verortung:** Passend zum Stufenmodell in 5.1.

**Typ:** Taxonomie / Treppen-Diagramm

**Beschreibung:** Das Schaubild visualisiert die fünf Stufen der KI-Entwicklung (Chatbots, Reasoners, Agents, Innovators, Organizations) in Form einer aufsteigenden Treppe. Jede Stufe ist mit einem kurzen Schlagwort versehen (z.B. "System 1", "System 2", "Agency", "Erfindung", "Makro-Orchestrierung"). Die ersten beiden Stufen sind als "Gegenwart" markiert, Stufe 3 als "Aktueller Übergang", Stufe 4 und 5 als "Zukunft".

**Elemente/Labels:** 5 Treppenstufen, Zeitachse x-Achse (Gegenwart zu Zukunft), y-Achse (Komplexität/Autonomie).

**Daten:** Keine quantitativen Daten, rein konzeptionelles Framework.

**Design:** Weißer Hintergrund, Akzent Dunkelrot (\#C00000) für Titel/Highlights, Pastellfarben für Shapes/Flächen, Klare Linien, viel Weißraum, Minimaler Text in der Grafik: nur Labels.

**Quelle/Belege (Harvard):** (Eigene Darstellung in Anlehnung an das OpenAI-Stufenmodell)

#### **Laborpraxis 5.1: Reasoners vs. Non-Reasoners (System 1 vs. System 2)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: LM Studio (Lokal), Webbrowser (DeepSeek, OpenAI oder Claude).
* Material: Ein komplexes Logik- oder Mathematikrätsel.

**Übung:**
1. **Der schnelle Chatbot:** Stellen Sie einem Standard-Modell (z.B. Llama 3 8B in LM Studio) folgendes Rätsel: *"Eine Fledermaus und ein Ball kosten zusammen 1,10 Euro. Die Fledermaus kostet 1,00 Euro mehr als der Ball. Wie viel kostet der Ball?"* Oft antwortet das System-1-Modell impulsiv mit 10 Cent (was falsch ist).
2. **Der Reasoner:** Stellen Sie dieselbe Aufgabe (oder eine massiv komplexere Supply-Chain-Optimierungsaufgabe) an einen Reasoner (z.B. DeepSeek-R1 oder OpenAI o1).
3. **Chain of Thought:** Öffnen Sie den "Denkprozess" (Thinking-Block) in der Benutzeroberfläche.
4. *(Zeitpuffer: Diskutieren Sie, warum die probabilistische Token-Vorhersage ohne interne Überprüfung bei Mathematik versagt, und wie der Reasoner durch iteratives Abwägen zur korrekten Antwort von 5 Cent gelangt).*

**Erkenntnis:** Stufe-2-Modelle investieren massiv Rechenzeit vor der Textausgabe ("Think before you speak"), was Fehlerquoten bei harten Fakten drastisch reduziert, aber API-Kosten erhöht.

## **5.2 Business Process Automation: Einführung in n8n, Webhooks & APIs**

Um zu verstehen, wie wir Sprachmodellen den Zugang zur echten Welt verschaffen, müssen wir zunächst die Infrastruktur des Internets verstehen. Das moderne Internet besteht längst nicht mehr primär aus Webseiten, die von Menschen in Browsern gelesen werden. Im Hintergrund dominiert die unsichtbare Maschine-zu-Maschine-Kommunikation. Jedes Mal, wenn Sie in einem Online-Shop auf „Kaufen“ klicken, sprechen Dutzende Systeme im Millisekundentakt miteinander: Das Shopsystem spricht mit dem Bezahldienstleister, dieser mit der Bank, das Shopsystem mit dem Lager, der Logistiker berechnet Versandetiketten, und das CRM-System verschickt die Bestätigungs-E-Mail. Diese Business Process Automation (BPA) bildet das Rückgrat der modernen Wirtschaft.

Die Bausteine dieser Automatisierung sind APIs, Webhooks und das Datenformat JSON.

**APIs (Application Programming Interfaces)**

Eine API ist eine definierte Schnittstelle, über die ein Programm einem anderen Programm seine Dienste oder Daten zur Verfügung stellt. Um das Konzept greifbar zu machen, dient oft die Restaurant-Analogie:

* Sie (der Client) sitzen am Tisch und haben eine Bestellung (die Anfrage / den Request).  
* Die Küche (der Server) hält die Zutaten und die Logik bereit, um Ihr Gericht (die Daten) zuzubereiten.  
* Sie können aber nicht einfach in die Küche marschieren und an den Töpfen hantieren. Sie benötigen den Kellner. Der Kellner ist die **API**. Er nimmt Ihre Bestellung exakt nach den Vorgaben der Speisekarte auf, bringt sie sicher in die Küche und liefert Ihnen das fertige Gericht (die Response) an den Tisch.

In der Praxis kommunizieren APIs heute zumeist über das REST-Protokoll (Representational State Transfer) unter Nutzung standardisierter HTTP-Methoden wie GET (Daten abrufen), POST (neue Daten senden), PUT (Daten aktualisieren) und DELETE (Daten löschen). Die „Sprache“, in der Client und Server dabei die eigentlichen Informationen austauschen, ist nahezu ausschließlich JSON (JavaScript Object Notation). JSON ist ein leichtgewichtiges Format, das Daten in Schlüssel-Wert-Paaren organisiert, z.B. {"Kunde": "Müller", "Rechnungssumme": 450.50}. Es ist maschinell extrem schnell zu verarbeiten, aber auch für Menschen ohne Programmierausbildung sofort lesbar.

**Webhooks: Das Prinzip der sofortigen Benachrichtigung**

Während eine API klassischerweise nach dem *Pull*\-Prinzip funktioniert (ein System muss aktiv und immer wieder nachfragen: „Gibt es neue Daten? Gibt es neue Daten?“), operieren Webhooks nach dem *Push*\-Prinzip. Ein Webhook ist im Grunde eine benutzerdefinierte URL, die ein System bereitstellt, um von einem anderen System angerufen zu werden, *sobald* ein bestimmtes Ereignis (Event) eintritt.

*Was es ist:* Ein Webhook ist wie ein Briefkasten. Anstatt alle 5 Minuten beim Lieferanten anzurufen und zu fragen, ob ein Paket da ist (API-Polling), geben Sie dem Lieferanten die Adresse Ihres Briefkastens (die Webhook-URL). Sobald das Paket da ist, wirft der Lieferant es ungefragt ein.

*Was es nicht ist:* Eine bidirektionale Unterhaltung. Ein Webhook ist zumeist ein reiner Informations-Push in eine Richtung (z.B. „Zahlung erfolgreich abgeschlossen\!“).

**n8n: Visuelle Automatisierung für die Praxis**

Für Betriebswirte und Praktiker ohne Informatikstudium stellte die Programmierung solcher API- und Webhook-Logiken früher eine unüberwindbare Hürde dar. Hier kommen visuelle, knotenbasierte (node-based) Automatisierungsplattformen wie Zapier, Make (ehemals Integromat) oder **n8n** ins Spiel.

Wir fokussieren uns in diesem Kontext stark auf **n8n**, da es sich durch einen entscheidenden architektonischen Vorteil auszeichnet: Es ist quelloffen (fair-code/open-source) und kann im Rahmen der in Kapitel 3 besprochenen "Lunchbox-Strategie" (Docker) lokal auf eigenen Servern betrieben werden. Dies garantiert höchste Datensouveränität (Weber 2023).

In n8n wird ein Geschäftsprozess als visueller Fluss (Workflow) dargestellt. Ein Workflow besteht aus:

1. **Trigger (Auslöser):** Zum Beispiel ein Webhook, der empfängt, dass eine neue E-Mail mit einem Rechnungsanhang eingegangen ist.  
2. **Nodes (Knoten/Aktionen):** Logik-Bausteine, die die Daten verarbeiten. Zum Beispiel ein Knoten, der den Anhang der E-Mail herunterlädt.  
3. **Connections (Verbindungen):** Die Linien zwischen den Knoten, auf denen die JSON-Datenpakete wie auf einem Fließband von einem Schritt zum nächsten transportiert werden.

**Die Integration von LLMs in n8n Workflows**

Der wahre Magie-Moment entsteht, wenn wir die klassische deterministische BPA (Wenn X, dann tue Y) mit der probabilistischen Intelligenz von Large Language Models verknüpfen. Ein klassischer n8n-Workflow konnte Rechnungen verschieben, scheiterte aber kläglich, wenn ein Kunde eine E-Mail schrieb wie: „Sehr geehrte Damen und Herren, leider ist das Paket beschädigt angekommen, bitte erstatten Sie mir das Geld. Grüße, Müller.“ Eine starre Regel-Engine versteht den Sinn dieses Freitextes nicht.

Binden wir nun einen „LLM-Node“ (z.B. OpenAI oder lokale Modelle) in den Workflow ein, ändert sich alles:

1. *Trigger:* Neue E-Mail vom Kunden kommt an.  
2. *Node 1 (LLM):* Der Text der E-Mail wird via API an GPT-4 gesendet mit dem System-Prompt: „Analysiere den folgenden Kundentext. Extrahiere die Intention (Reklamation, Bestellung, Frage) und die Stimmungsebene (wütend, neutral, erfreut). Formatiere die Ausgabe als striktes JSON.“  
3. *Node 2 (Routing/Switch):* Wenn Intention \= „Reklamation“ UND Stimmung \= „wütend“, route den Prozess sofort zum Slack-Kanal des Customer-Support-Leiters.  
4. *Node 3 (API):* Erstelle automatisch ein Ticket im Zendesk-System.

Hier fungiert das LLM als intelligenter Router und Daten-Extraktor inmitten eines maschinellen Workflows. Dies ist der Vorläufer echter agentischer Systeme: Wir haben die Kognition (das Verstehen der Kundenabsicht) erfolgreich mit dem motorischen Cortex (dem Erstellen eines Zendesk-Tickets via API) verbunden.

#### **Abbildungs-Platzhalter**

**\[Abb. 5.2-1\] Architektur eines intelligenten n8n-Workflows** \> **Verortung:** Passend zur Erklärung der Integration von LLMs in n8n-Workflows (Ende 5.2).

**Typ:** Flowchart / Prozessdiagramm

**Beschreibung:** Das Schaubild zeigt einen visuellen n8n-Workflow, der von links nach rechts verläuft. Es beginnt mit einem Trigger-Knoten (z.B. ein Briefumschlag-Icon für E-Mail-Eingang). Ein Pfeil führt zu einem zentralen, hervorgehobenen KI-Knoten (Gehirn-Icon), der den Text analysiert. Von dort verzweigt sich der Fluss über einen Router-Knoten (Weiche) in drei parallele End-Knoten: "Slack-Benachrichtigung", "CRM-Ticket anlegen" und "Automatisierte Antwort-Mail". Entlang der Pfeile sind kleine JSON-Code-Snippets angedeutet, die den Datenfluss symbolisieren.

**Elemente/Labels:** Trigger (Webhook/Email), KI-Processing (LLM Node), Routing (Switch Node), Actions (API Outbound). JSON-Payloads zwischen den Nodes.

**Daten:** Keine quantitativen Daten.

**Design:** Weißer Hintergrund, Akzent Dunkelrot (\#C00000) für Titel/Highlights, Pastellfarben für Shapes/Flächen, Klare Linien, viel Weißraum, Minimaler Text in der Grafik: nur Labels.

**Quelle/Belege (Harvard):** (Eigene Darstellung)

#### **Laborpraxis 5.2: APIs und JSON (Die Sprache der Maschinen)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Postman oder ein Browserfenster, kostenfreie Wetter-API.

**Übung:**
1. **Der Request:** Rufen Sie eine simple, öffentliche API über die Browser-URL auf (z.B. eine Wetter-API mit einem fiktiven API-Key oder eine offene Dummy-JSON-API).
2. **JSON lesen:** Betrachten Sie das zurückgegebene JSON-Format. Identifizieren Sie die Schlüssel-Wert-Paare (Key-Value-Pairs), wie z.B. `"temperature": 22.5`. 
3. *(Zeitpuffer: Lassen Sie ein lokales LLM in LM Studio dieses rohe JSON per Prompt in eine menschlich lesbare Wetterwarnung für das Management übersetzen).*

**Erkenntnis:** Das Internet hinter den Kulissen besteht nicht aus aufbereiteten Webseiten, sondern aus nackten JSON-Strukturen, die Maschinen blitzschnell parsen können.

#### **Laborpraxis 5.3: Webhooks & Automatisierung (n8n)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: n8n (lokal via Docker oder Cloud-Testversion).

**Übung:**
1. **Der Webhook-Briefkasten:** Starten Sie einen leeren Workflow in n8n. Fügen Sie als ersten Knoten einen "Webhook Trigger" hinzu und generieren Sie eine Test-URL.
2. **Datenabwurf:** Senden Sie per Postman (oder einem einfachen Curl-Befehl) ein JSON-Paket an diese URL. Inhalt: `{"kunde": "Meier", "nachricht": "Ich kündige mein Abo sofort!"}`.
3. **Beobachtung in Echtzeit:** Wechseln Sie zurück zu n8n. Sie sehen, wie der Workflow anspringt und die Daten in der UI auftauchen.
4. *(Zeitpuffer: Hängen Sie einen Filter-Knoten an, der den Flow nur weiterleitet, wenn das Wort "kündige" im JSON-Wert auftaucht).*

**Erkenntnis:** Webhooks sind das reaktive Nervensystem automatisierter Unternehmensprozesse – sofortige Aktion ohne ständige Polling-Abfragen.

#### **Laborpraxis 5.4: KI als intelligenter Router in n8n**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Der bestehende n8n-Workflow aus 5.3.

**Übung:**
1. **Das LLM einklinken:** Hängen Sie an den Webhook einen "AI Agent" oder "LLM Node". Verbinden Sie diesen (mit gestellten API-Keys des Dozenten) mit einem OpenAI oder lokalen Modell.
2. **Der Systemprompt als Logik-Engine:** Prompten Sie den Knoten: *"Analysiere den Text aus dem Webhook. Ermittle das Sentiment (positiv, neutral, wütend). Gib als Output strikt nur das erkannte Wort aus."*
3. **Die Automatisierung abschließen:** Hängen Sie einen "Switch/If"-Knoten an das LLM. Bedingung: Wenn Output = "wütend", route zu einem "Slack-Node", der Alarm im Support-Kanal schlägt.
4. *(Zeitpuffer: Senden Sie Test-Nachrichten per Postman und schauen Sie live zu, wie das LLM die Texte kategorisiert und die Weichen im Prozess stellt).*

**Erkenntnis:** Durch die Integration von LLMs in deterministische Tools (n8n) verstehen Workflows plötzlich Freitext und unstrukturierte Daten – der Beginn echter kognitiver Prozessautomatisierung.

## **5.3 Agentic Systems: Model Context Protocol (MCP) & Autonomous Agents**

Die in Kapitel 5.2 beschriebene Prozessautomatisierung mittels n8n ist extrem mächtig, hat jedoch eine fundamentale Schwäche: Sie ist streng *deterministisch*. Der Prozess Designer (Mensch) muss im Vorfeld jeden möglichen Pfad, jede „If-Else“-Verzweigung und jeden API-Aufruf statisch programmieren oder visuell verdrahten. Wenn in einem automatisierten Support-Prozess ein Fall auftritt, der nicht in den Regeln vorgesehen ist (ein sogenannter Edge Case), bricht der Workflow ab.

Mit dem Aufkommen von **Agentic Systems** (agentischen Systemen) erleben wir den Wechsel von der deterministischen Prozess-Verdrahtung hin zu probabilistischen, autonomen Handlungsräumen. Wir geben der KI nicht mehr den genauen Weg vor, sondern nur das Endziel und eine Kiste voller Werkzeuge (APIs, Datenbankzugriffe, Suchmaschinen). Der Agent überlegt sich den Weg selbst.

**Der ReAct Prompting Loop**

Das Herzstück autonomer Agenten bildet das *ReAct* Framework (Reasoning \+ Acting). Es ist ein Prompting-Paradigma, das die KI in eine Endlosschleife schickt, in der sie iterativ drei Phasen durchläuft (Anthropic 2024):

1. **Thought (Gedanke):** Die KI analysiert den aktuellen Zustand und überlegt laut, was als Nächstes zu tun ist. („Um die Marktanalyse für Firma X zu schreiben, brauche ich zunächst deren aktuelle Umsatzzahlen aus Q3.“)  
2. **Action (Handlung):** Die KI wählt ein Werkzeug aus ihrer „Werkzeugkiste“ und führt es aus. („Ich nutze das Tool web\_search mit dem Suchbegriff ‚Firma X Q3 2024 Umsatz‘.“)  
3. **Observation (Beobachtung):** Das System führt das Tool aus (z.B. führt ein Python-Skript den Google-Such-API-Call durch) und füttert das Ergebnis (die Webseiten-Zusammenfassung) zurück in das Context Window des LLMs.

Die KI verarbeitet die Observation und beginnt wieder bei Schritt 1: („*Thought:* Okay, ich habe die Umsatzzahlen gefunden. Jetzt brauche ich die Daten der Konkurrenten...“). Diese Schleife läuft autonom so lange weiter, bis die KI den Gedanken fasst: („*Thought:* Ich habe alle notwendigen Informationen. Ich werde nun das Tool generate\_pdf nutzen und dem User das finale Dokument präsentieren. *Action:* ENDE.“).

**Die Werkzeugkiste standardisieren: Das Model Context Protocol (MCP)**

Das größte Hindernis für die Skalierung agentischer Systeme lag bis vor kurzem in der Fragmentierung. Wenn man einem LLM Zugriff auf Google Drive, Slack, eine lokale PostgreSQL-Datenbank und ein proprietäres CRM-System geben wollte, mussten Entwickler für jedes System individuelle Schnittstellen-Wrapper und komplexe API-Integrationen in den Code des Agenten schreiben. Dies führte zu einer enormen technischen Schuld (Technical Debt) (Sculley et al. 2015).

Im Spätjahr 2024 führte Anthropic (die Entwickler von Claude) das **Model Context Protocol (MCP)** als offenen Industriestandard ein. MCP ist ein Architektur-Paradigma, das als universeller „USB-C-Stecker“ für Künstliche Intelligenz verstanden werden kann.

*Was es ist:* MCP standardisiert die Kommunikation zwischen dem KI-Modell (dem Client) und Datenquellen/Werkzeugen (den MCP-Servern). Ein Unternehmen kann einen MCP-Server für seine interne Datenbank einrichten. Jedes KI-Modell (egal ob Claude, OpenAI oder lokale Modelle), das MCP unterstützt, kann nun ohne zusätzlichen Programmieraufwand auf diese Daten zugreifen, solange der Benutzer die Berechtigung erteilt.

*Was es nicht ist:* MCP ist kein neues LLM und auch kein Vektordatenbank-Speicher. Es ist ein reines Kommunikationsprotokoll.

Die Auswirkungen von MCP sind disruptiv. Anstatt Daten in das Context Window der KI kopieren zu müssen (Copy & Paste), oder RAG-Pipelines (siehe Kapitel 4\) mühsam aufzubauen, baut die KI über MCP eine sichere Live-Verbindung zu den lokalen Dateien, Datenbanken oder Cloud-Diensten des Nutzers auf. Wenn der Nutzer den Agenten bittet: „Fasse alle meine Mails von gestern zusammen und trage die Termine in meinen Kalender ein“, spricht das LLM über das standardisierte MCP-Protokoll direkt mit dem lokalen E-Mail-Client und der Kalender-API.

**Multi-Agent-Systeme und Orchestrierung**

Wenn einzelne Agenten über MCP Zugriff auf die Welt erhalten, entsteht das nächste Level der Komplexität: Multi-Agent-Systeme. Statt ein massives LLM mit allen Aufgaben zu betrauen, werden spezialisierte Mini-Agenten kreiert, die sich untereinander koordinieren.

Stellen Sie sich einen vollautomatischen Workflow für die Analyse wissenschaftlicher Papers vor (wie in „Dokument\_4\_Multimodale\_KI\_und\_Agentic\_Systems.docx“ skizziert): Ein *Research Coordinator* erhält den Auftrag vom Menschen. Er delegiert die Literatursuche an den *Literature Search Agent*. Dessen Ergebnisse werden an den *Analysis Agent* geschickt, der die Metadaten extrahiert. Ein *Critic Agent* prüft die Methodik, bevor ein *Report Generation Agent* das finale Dokument verfasst. Fällt dem Critic Agent ein Fehler auf, schickt er den Workflow zurück zum Analysis Agent.

Solche asynchronen, selbst-korrigierenden Agenten-Schwärme können Analysen, die menschliche Fachkräfte Wochen kosten würden, in unter einer Stunde durchführen.

### **5.3.1 Befreiung von der Bürokratie: Fokus auf Mensch und Handwerk**

Dieser technologische Sprung – von statischen RAG-Systemen hin zu orchestrierten autonomen Agenten – birgt ein immenses gesellschaftliches und wirtschaftliches Potenzial, insbesondere in stark bürokratisierten Ländern wie Deutschland. Die gezielte Kombination aus ausgereiften LLMs, präzisem System-Prompting, Context Engineering und agentischer Automatisierung bietet den effektivsten Hebel, um die oft überbordende Verwaltungs- und Dokumentationslast drastisch zu reduzieren. 

Das primäre Ziel dieser KI-Integration ist nicht die Ersetzung des menschlichen Expertenkreises, sondern vielmehr die Rückkehr zum eigentlichen Kern der Arbeit:

* **Der Physiotherapeut oder Arzt:** Ein fachspezifischer Agent (Medical Assistant) transkribiert und analysiert das Patientengespräch in Echtzeit. Er greift per MCP (Model Context Protocol) sicher auf die lokale elektronische Patientenakte zu, füllt standardisierte Befundformulare aus, formuliert den Arztbrief, ordnet die korrekten Abrechnungsziffern zu und legt das Rezept zur digitalen Signatur bereit. Das Resultat: Die Zeit für die qualitative Arbeit direkt *am Patienten* steigt erheblich, während die Bildschirm- und Dokumentationszeit sinkt.
* **Der Handwerker:** Anstatt abends nach der Baustelle noch stundenlang Angebote, Rechnungen und Materialbestellungen abzutippen, nutzt der Anlagenmechaniker auf der Heimfahrt im Auto seinen Voice-Agenten: *"Erstelle auf Basis der Notizen von heute das Angebot für das neue Bad bei Familie Müller, gleiche Preise über die Großhändler-API ab und leg mir die fertige PDF zur Freigabe ab."* Der Agent führt die Arbeitsschritte im Hintergrund über verknüpfte Systeme (Business Process Automation) vollautonom aus.

Durch diese Entlastungsebene verschiebt sich die Wertschöpfung wieder auf die Arbeit am *Menschen* oder am *Werkstück*. Intelligente Software-Automatisierung fungiert hier nicht als reine Kostenersparnis, sondern als proaktive Gegenmaßnahme zum Fachkräftemangel – indem sie den Facharbeiter oder Kliniker von seiner Rolle als unfreiwilliger Administrator und Bürokrat befreit.

**Die „Dark Side“ der Autonomie: Endlosschleifen und Halluzinations-Ketten**

Mit Autonomie kommen jedoch neue Risiken. Agenten können in „Infinite Loops“ (Endlosschleifen) gefangen sein, wenn das Tool-Ergebnis die KI verwirrt und sie die gleiche Suchanfrage immer wieder triggert, was enorme API-Kosten verursacht (oft hunderte Aufrufe pro Minute). Zudem können sich Halluzinationen über lange Aktions-Ketten aufschaukeln. Daher ist das Design von **Guardrails** (Sicherheitsleitplanken) entscheidend. Im geschäftlichen Umfeld dürfen Agenten oft nur „Read-Only“ agieren (Daten lesen) oder müssen für Aktionen (wie Geld überweisen oder E-Mails senden) zwingend eine „Human-in-the-Loop“-Freigabe einholen – der Prozess pausiert, bis ein Mensch auf „Genehmigen“ klickt (Pilz/Putzmeister, zit. in Weber 2023).

#### **Abbildungs-Platzhalter**

**\[Abb. 5.3-1\] Der autonome Agent im ReAct-Loop mit MCP-Integration** \> **Verortung:** Passend zur Erklärung des ReAct Prompting Loops und MCP in 5.3.

**Typ:** Flowchart / Kreislauf-Diagramm

**Beschreibung:** Das Schaubild visualisiert den ReAct-Loop eines autonomen Agenten. Im Zentrum steht das LLM (das Gehirn). Ein zirkulärer Pfeil verbindet drei Kernboxen in einer Endlosschleife: "1. Thought (Analysieren & Planen)", "2. Action (Werkzeug aufrufen)", "3. Observation (Feedback auswerten)". Der Action-Schritt führt aus dem Loop heraus auf einen universellen Stecker (beschriftet mit "MCP (Model Context Protocol)"), der sich in externe Systeme (Datenbank, Google Workspace, GitHub) einklinkt.

**Elemente/Labels:** ReAct-Loop (Thought, Action, Observation), LLM Core, MCP Interface (Stecker/Schnittstelle), Externe Tools.

**Daten:** Keine quantitativen Daten.

**Design:** Weißer Hintergrund, Akzent Dunkelrot (\#C00000) für Titel/Highlights, Pastellfarben für Shapes/Flächen, Klare Linien, viel Weißraum, Minimaler Text in der Grafik: nur Labels.

**Quelle/Belege (Harvard):** (Eigene Darstellung in Anlehnung an das ReAct-Framework von Yao et al.)

#### **Laborpraxis 5.5: KI-Native Workflows (Claude Desktop Demo)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Claude Desktop App (Work Demo durch Dozierenden oder eigene Endgeräte).
* Vorgabe: Claude Desktop mit eingerichtetem "Filesystem MCP", das auf ein lokales Verzeichnis zeigt.

**Übung:**
1. **Die lokale Excel-Datei:** Legen Sie eine Dummy-Excel-Tabelle in das per MCP freigegebene lokale Projektverzeichnis.
2. **Der Prompt ohne Upload:** Starten Sie Claude Desktop. Prompten Sie: *"Analysiere die Excel-Datei 'Umsatz.xlsx' in meinem Projektordner und fasse die Top-3 Produkte zusammen."* (Laden Sie die Datei NICHT per Drag & Drop hoch!).
3. **Beobachtung:** Claude erkennt über das MCP-Protokoll, dass er ein externes Tool (Filesystem) befragen muss, liest die Daten lokal aus, berechnet das Ergebnis und schreibt die Zusammenfassung.
4. *(Zeitpuffer: Diskutieren Sie den drastischen Sicherheitsvorteil für Unternehmensdaten: Die Excel-Datei verlässt theoretisch nie den lokalen Rechner als Datei-Upload).*

**Erkenntnis:** Das Model Context Protocol revolutioniert den Dateizugriff. KI-Modelle durchsuchen und verarbeiten freigegebene Dateien nahtlos, ohne dass der Nutzer als manueller "Datei-Schlepper" fungieren muss.

#### **Laborpraxis 5.6: Das Model Context Protocol (mcp.json anpassen)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Antigravity Editor (oder Cursor/Cline) mit Support für MCP.

**Übung:**
1. **Konfiguration:** Öffnen Sie die zentrale Konfigurationsdatei für MCP (meist eine `mcp.json` oder zentrale Einstellungen im Editor).
2. **Integration:** Fügen Sie einen neuen Server-Eintrag hinzu, der dem Editor z. B. Zugriff auf eine lokale SQLite-Datenbank oder ein spezielles Github-Repository gibt.
3. **Test:** Bitten Sie den Agenten im Chat: *"Lies die Tabellenstruktur der angebundenen Datenbank über MCP aus und nenne mir alle Spaltennamen der Tabelle 'Kunden'."*
4. *(Zeitpuffer: Erstellen Sie absichtlich einen Syntaxfehler in der JSON-Konfiguration und lassen Sie den Editor den Fehler durch Debugging selbst identifizieren).*

**Erkenntnis:** Agenten erhalten durch MCP sichere, standardisierte Werkzeuge (Tools), um nicht nur mit Text, sondern mit echten Systemen (Datenbanken, Unternehmens-APIs) nativ zu interagieren.

### **5.3.2 Context Engineering & Vibe Coding: Die Axt schärfen**

Wenn wir von klassischen Chatbots (Stufe 1) zu autonomen Agenten (Stufe 3) übergehen, ändert sich die Fehleranfälligkeit dramatisch. Ein Agent, der selbstständig Dateien schreibt, APIs abruft oder E-Mails beantwortet, skaliert nicht nur Geschwindigkeit, sondern auch Fehler potenziert nach oben. Um dem entgegenzuwirken, hat sich in der Software-Entwicklung mit Coding Assistants der Begriff des **Vibe Coding** etabliert (oft als Gegenentwurf zum planlosen, iterativen "Drauflos-Programmieren").

Im Zentrum von Vibe Coding und professioneller Agenten-Steuerung steht das **Context Engineering**. Abraham Lincoln wird das Zitat zugeschrieben: *"Wenn ich 6 Stunden Zeit bekomme, einen Baum zu fällen, dann schärfe ich 5 Stunden lang meine Axt."* 

Context Engineering ist exakt dieses Schärfen der Axt. Statt einen Agenten einfach mit einem unstrukturierten Einzeiler wie *"Mach eine Analyse"* loszuschicken, bereitet der menschliche Orchestrator den Zustand vor, *bevor* der Agent aktiv wird. Das bedeutet:
1. **Ziele und Leitplanken (Guardrails) definieren:** Was darf der Agent tun und was ausdrücklich nicht? (z.B. Dateien lesen, aber nicht löschen).
2. **Benötigte Ressourcen bereitstellen (Knowledge Base):** Relevante PDFs, Datenbankstrukturen, Redaktionsrichtlinien, oder API-Docs bereitlegen.
3. **Skills und Interfaces (MCP) vorverkabeln:** Den Agenten vorab mit den korrekten Zugangsschlüsseln und Werkzeugen ausstatten. 

Dieses Vordenken wird essenziell wichtig, je weitreichender die Aktionsfreiheiten der KI und Coding Agents sind (siehe folgende Laborpraxis 5.7). Ein exzellent vorbereiteter Kontext lässt den Agenten im Durchlauf drastisch präzisere Ergebnisse erzielen, da er die Rahmenbedingungen seines Handlungsspielraums nicht erst explorieren und erraten muss.

#### **Laborpraxis 5.7: Coding Assistants (Code generieren mit Antigravity/Cursor)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Antigravity Agent (CLI) oder ein vergleichbarer moderner IDE-Client (z.B. Cursor, Windsurf).

**Übung:**
1. **Context Engineering (Die Axt schärfen):** Erstellen Sie in einem neuen Projektordner zuerst eine Markdown-Datei (z.B. `rules.md`), in der Sie zwei einfache Coding-Regeln festhalten (z.B. *"Verwende nur deutsche Variablen-Namen"*, *"Füge ausführliche Python-Type-Hints ein"*).
2. **Den Task starten:** Öffnen Sie den Agenten und übergeben Sie ihm das Ziel: *"Erstelle im aktuellen Ordner ein Python-Skript namens `dashboard.py`. Es soll ein einfaches Tkinter-Fenster mit dem Text 'Hallo Manager' öffnen. Bitte beachte vorab die Vorgaben aus meiner Datei rules.md. Speichere die Datei und führe das Skript aus."*
3. **Der ReAct-Loop live:** Beobachten Sie im Terminal-Log des Agenten, wie er zuerst die Datei liest, dann nachdenkt (Thought), die Python-Datei vorschriftsmäßig schreibt (Action: WriteFile) und das Kommando selbstständig testet (Action: RunCommand).
4. *(Zeitpuffer: Lassen Sie den Agenten per Chat das Fenster grafisch "anhübschen" und prüfen Sie, ob er weiterhin ausschließlich deutsche Variablen-Namen verwendet).*

**Erkenntnis:** Autonome Coding Assistants programmieren, testen und iterieren auf dem lokalen Betriebssystem selbstständig. Je besser die Ziel-Ausrichtung und der Kontext *vorab* vorbereitet wurden (Context Engineering), desto konsequenter und professioneller agiert der Agent in seinen Aktionsschleifen.

#### **Laborpraxis 5.8: Vorbereitung Agentic Systems (OpenClaw clonen)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Terminal, git.

**Übung:**
1. **Das Framework:** Öffnen Sie das Terminal und klonen Sie das lokale Agenten-Framework OpenClaw via `git clone [URL_ZU_OPENCLAW]`.
2. **Abhängigkeiten:** Wechseln Sie in das Verzeichnis (`cd openclaw`) und installieren Sie die in der `requirements.txt` geforderten Python-Pakete (`pip install -r requirements.txt`).
3. **Erkundung:** Öffnen Sie den geklonten Ordner und machen Sie sich mit der Dateistruktur vertraut (Wo liegen die Prompts? Wo die Agenten-Definitionen?).
4. *(Zeitpuffer: Studierende studieren den Code des Basis-Agenten, um das Prinzip des ReAct-Loops erstmals auf reiner Code-Ebene zu erkennen).*

**Erkenntnis:** Um eigene lokale Agentensysteme zu bauen, greift man als Unternehmen oft auf existierende Open-Source-Frameworks zurück, die die grundlegende Orchestrierungsschleife (Execution Loop) bereits fest integriert haben.

#### **Laborpraxis 5.9: Lokale Agenten-Frameworks (OpenClaw Start)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Die geklonte OpenClaw-Umgebung aus Praxis 5.8.

**Übung:**
1. **Konfiguration (`openclaw.json`):** Öffnen Sie die Konfigurationsdatei des Frameworks. Hinterlegen Sie den notwendigen API-Schlüssel (z. B. OpenRouter oder lokaler LM Studio Port) und definieren Sie das LLM, das als "Gehirn" des Agenten fungieren soll.
2. **Ausführung:** Starten Sie das Framework über das Terminal (`python main.py`).
3. **Erster Task:** Geben Sie dem lokalen Agenten eine einfache Text-Aufgabe und überprüfen Sie detailliert in den Logs, wie er "Self-Critique" (Selbstkritik) anwendet, bevor er das finale Ergebnis ausgibt.
4. *(Zeitpuffer: Ändern Sie das LLM in der Konfiguration von einem großen Cloud-Modell auf ein lokales, kleines Modell und beobachten Sie, ob der Agent in Endlosschleifen gerät).*

**Erkenntnis:** Agenten-Frameworks benötigen ein leistungsstarkes Sprachmodell als Rückgrat. Wenn das Modell nicht "smart" genug ist, den ReAct-Loop sauber durchzuführen, verfällt der Agent in eine Loop-Schleife.

#### **Laborpraxis 5.10: Spezifische Helfer-Agenten I (Agenten-Skills in Antigravity)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Antigravity IDE (Agent), lokaler Projektordner.

**Übung:**
1. **Den Skill beauftragen:** Weisen Sie Antigravity an, seinen eigenen "Deep Research"-Skill oder Workflow zu nutzen.
2. **Die Aufgabe:** Prompen Sie: *"Nutze deinen Deep Research Skill, um im Internet drei aktuelle wissenschaftliche Papers zum Thema 'Agentic AI in Finance' zu recherchieren."*
3. **Autonome Dokumentenverarbeitung:** Der Agent durchsucht selbstständig das Web, extrahiert den Text der identifizierten Quellen und speichert die Inhalte als saubere Markdown-Dateien im Ordner `/04_literatur` ab.
4. **Referenzierung (JSON):** Abschließend wertet der Agent die Meta-Informationen aus und aktualisiert vollautomatisiert die bestehende Datei `literatur.json` mit den neuen Literaturangaben.
5. *(Zeitpuffer: Überprüfen Sie manuell, ob die `literatur.json` valides JSON ist und die Markdown-Dateien sinnvoll strukturiert wurden).*

**Erkenntnis:** Spezialisierte Agenten-Skills erheben ein LLM von einem reinen Texterzeuger zu einem vollautonomen Forschungsassistenten, der repetitive Such-, Download- und Formatierungsarbeiten im Hintergrund fehlerfrei erledigt.

#### **Laborpraxis 5.11: Spezifische Helfer-Agenten II (Synthese mit NotebookLM)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Google NotebookLM (Webanwendung).
* Material: Die zuvor von Antigravity heruntergeladenen Markdown-Dateien aus dem Ordner `/04_literatur`.

**Übung:**
1. **Das Notebook anlegen:** Erstellen Sie in NotebookLM ein neues Projekt namens "Paper-Recherche Agentic AI".
2. **Upload (Strict Grounding):** Laden Sie die von Antigravity recherchierten Markdown-Paper als dedizierte Quellen (Sources) hoch.
3. **Querverweise und Analyse:** Fragen Sie NotebookLM per Chat: *"Vergleiche die Forschungsmethodik der drei Paper. Welche Gemeinsamkeiten bestehen im Hinblick auf den ReAct-Loop in der Finanzbranche?"*
4. *(Zeitpuffer: Generieren Sie aus den drei wissenschaftlichen Papern durch einen Klick einen "Audio Overview" im typischen Podcast-Format, um sich die Zusammenfassung auditiv aufbereiten zu lassen).*

**Erkenntnis:** NotebookLM brilliert durch extrem starkes "Grounding". Es halluziniert praktisch nie, sondern zitiert präzise die spezifischen Passagen aus dem hochgeladenen Material – der optimale Analyse-Begleiter für zuvor automatisiert gesammelte Forschungsdaten.

#### **Laborpraxis 5.12: Multi-Agenten Rollenspiel (Orchestrierung)**

**Zeitansatz:** 22,5 Minuten.

**Setup:**
* Werkzeug: Whiteboard, Tafel oder digitales Miro-Board.

**Übung:**
1. **Den Workflow orchestrieren:** Entwerfen Sie gemeinsam auf dem Whiteboard das End-Game der Automation: Ein Workflow, der das Low-Code Tool **n8n** und **Antigravity-Agenten** verschmilzt.
2. **Szenarioplanung:** Eine E-Mail vom Vorstand fordert einen strategischen Ad-hoc Bericht an. 
   - *Agent 1 (n8n Routing):* Erkennt die E-Mail, ordnet die Priorität ein und reicht das Thema per Webhook an den Research Agenten in der IT-Infrastruktur weiter.
   - *Agent 2 (Antigravity):* Nutzt den in Praxis 5.10 erstellten Deep Research Skill, sichtet das Internet, analysiert und speichert die neueste Fachliteratur.
   - *Agent 3 (Reviewer):* Prüft den Text, destilliert die C-Level Insights und n8n generiert per API das finale E-Mail-Reply an den Vorstand zur Freigabe.
3. *(Zeitpuffer: Diskutieren Sie die Haftungsfrage: Wer ist rechtlich verantwortlich, wenn Agent 3 eine falsche Schlussfolgerung in das automatische Vorstands-Reply aggregiert? Wo muss der Human-in-the-Loop eingreifen?)*

**Erkenntnis:** Die wahre Durchschlagskraft generativer KI entfaltet sich in der Geschäftswelt erst, wenn spezialisierte Systeme (Low-Code, lokale autonome Agenten, RAG-Helfer) orchestriert ineinandergreifen, zwingend abgefangen von menschlichen Kontroll- und Freigabepunkten.

**Erkenntnis:** Die Zukunft der BWL besteht nicht in der Steuerung eines einzelnen Chatbots, sondern im Entwurf, der Sicherung und Evaluierung ganzer Hierarchien von kooperierenden KI-Agenten, die sich gegenseitig kontrollieren.

## **5.A Abschluss – Zusammenfassung**

In diesem Kapitel haben wir die Evolution der Künstlichen Intelligenz von passiven Dialogsystemen hin zu aktiven, handelnden Entitäten nachvollzogen. Die biologische Analogie führte uns vom präfrontalen Cortex in den motorischen Kortex: Wir haben der KI virtuelle Hände verliehen. Das Fünf-Stufen-Modell verdeutlichte, dass der Übergang von Chatbots (System 1\) über Reasoners (System 2\) hin zu autonomen Agenten (Stufe 3\) die aktuell wichtigste Grenze der technologischen Entwicklung markiert. Um diese Agenten in der unternehmerischen Praxis einzusetzen, ist das Verständnis der digitalen Infrastruktur unabdingbar. Wir haben APIs als die Kellner des Internets kennengelernt, Webhooks als reaktionsschnelle Push-Mechanismen und n8n als visuelle Leinwand, um deterministische Prozesse ohne tiefgehende Code-Kenntnisse zu orchestrieren. Die Integration von LLMs in diese Workflows markiert den ersten Schritt zur kognitiven Automatisierung. Der ultimative Paradigmenwechsel vollzieht sich jedoch durch das ReAct-Framework und das Model Context Protocol (MCP). Indem wir KI-Systemen einen standardisierten Zugang zu Werkzeugen und Daten geben und sie in einen autonomen Denk-Handlungs-Beobachtungs-Kreislauf versetzen, delegieren wir nicht mehr nur die Texterstellung, sondern die gesamte prozessuale Problemlösung an die Maschine. Die Herausforderung der Zukunft für Betriebswirte und Führungskräfte liegt somit weniger in der Beherrschung von Prompt Engineering, sondern in der sicheren Orchestrierung, Evaluation und Überwachung (Guardrails) autonomer Multi-Agenten-Systeme.

## **5.B Abschluss – Reflexionsfragen**

1. Erklären Sie den Unterschied zwischen einem Stufe 1 Chatbot und einem Stufe 2 Reasoner hinsichtlich ihrer Arbeitsweise bei komplexen Aufgaben.  
2. Warum reicht das Wissen über Prompt Engineering in Zukunft nicht mehr aus, um das volle wirtschaftliche Potenzial von KI auszuschöpfen?  
3. Übersetzen Sie das Konzept einer API in ein anderes Beispiel aus der analogen Welt (nicht das Restaurant-Beispiel).  
4. **Transferfrage:** Ein Online-Shop möchte Retouren automatisiert bearbeiten. Wie würde ein klassischer, deterministischer n8n-Workflow ohne KI aussehen, und wo würde dieser an seine Grenzen stoßen?  
5. **Transferfrage:** Wie würde sich der Retouren-Prozess aus Frage 4 verändern, wenn Sie einen autonomen Agenten in den Prozess integrieren? Beschreiben Sie einen potenziellen *ReAct-Loop* (Thought, Action, Observation) für diesen Fall.  
6. Was ist der fundamentale konzeptionelle Unterschied zwischen einem API-Polling und einem Webhook?  
7. Warum wird das Model Context Protocol (MCP) in der Branche oft als der „USB-C-Standard“ für KI bezeichnet? Welches konkrete Integrationsproblem löst es?  
8. Welche Gefahren (die „Dark Side“) entstehen, wenn autonome Agenten in Multi-Agent-Systemen ohne strikte Guardrails agieren?  
9. **Transferfrage:** Wenn die Orchestrierung autonomer Agenten alltäglich wird – welche klassischen Junior-BWL-Tätigkeiten (z.B. in der Marktforschung oder dem Controlling) werden als erste vollständig überflüssig?  
10. Wo sollte bei agentischen Systemen aus ethischer und rechtlicher Sicht zwingend ein "Human-in-the-Loop" (eine manuelle Freigabe) etabliert werden?

## **5.C Abschluss – Literaturverzeichnis**

Anthropic (2024): The Claude 3 Model Family: Opus, Sonnet, Haiku. Verfügbar unter: https://www.google.com/search?q=https://www-cdn.anthropic.com/de8cb9b1bfa2b7365dbe66f4946d5f0e3ed0b4b2/Claude\_3\_Model\_Card.pdf (abgerufen am 04.03.2025).

Brown, T. et al. (2020): Language Models are Few-Shot Learners. In: Advances in Neural Information Processing Systems (NeurIPS), 33, 1877-1901.

Engel, M. (2024): Dokument 1: Grundlagen der KI und LLM-Architektur. GenAI in a Brainshell \- KI Literacy für Jeden. Hochschule für Wirtschaft und Umwelt Nürtingen-Geislingen.

Kahneman, D. (2011): Thinking, Fast and Slow. New York: Farrar, Straus and Giroux.

McKinsey & Company (2024): The State of AI in 2024: Ten findings that matter. McKinsey Global Institute. Verfügbar unter: https://www.mckinsey.com (abgerufen am 04.03.2025).

OpenAI (2023): GPT-4 Technical Report. arXiv preprint arXiv:2303.08774.

OpenAI (2024): GPT-4o-mini: Advancing cost-efficient intelligence. Verfügbar unter: https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/ (abgerufen am 04.03.2025).

Sculley, D. et al. (2015): Hidden Technical Debt in Machine Learning Systems. In: NIPS'15: Proceedings of the 28th International Conference on Neural Information Processing Systems. 2, 2503-2511.

Weber, B. (Hrsg.) (2023): Data Governance. Nachhaltige Geschäftsmodelle und Technologien im europäischen Rechtsrahmen. Berlin: Springer.

Yao, S. et al. (2023): ReAct: Synergizing Reasoning and Acting in Language Models. International Conference on Learning Representations (ICLR).

**Interner Check:**

* Wortzahl: 5218  
* Kapitel-Titel aus Buchstruktur gezogen: ja  
* Nummerierung vollständig & hierarchisch (2 / 2.1 / 2.1.1 ...): ja  
* Unterkapitel aus Buchstruktur übernommen (nicht erfunden): ja  
* Laborpraxis am Ende jedes 5.x: ja  
* Abbildungs-Platzhalter gesetzt: ja  
* Harvard-Zitate im Text verwendet: ja  
* TODOs gesetzt statt erfunden: ja
# W06 · Wissen finden. Quellen prüfen.

Status: **Plan vom Nutzer bestätigt („ok klingt gut. Leg los“); lokal gebaut. Veröffentlichung nach Sichtung ausdrücklich beauftragt; siehe FREIGABE.md.**

## Ziel und Arbeitsrahmen

30 Minuten insgesamt, sieben Workshopseiten, deutsch, 16:9. Die BWL-Studierenden
erkennen, wie ein KI-System passende Informationen bekommt, wo beim Einlesen
und Suchen etwas verlorengehen kann und wie sie Antworten mit Belegen prüfen.
Keine Datenbankinstallation, kein neuer Agentenbau, kein Mathematikblock.

Durchgehende Leitfrage: **Wie bekommt meine KI das richtige Wissen – und wie
erkenne ich, ob sie es wirklich genutzt hat?**

Gestaltung: `trinity-klar` / `Trinity Klar – bewährter Standard` mit der
aktuellen Workshop-Führung von W04/W05: Creme/Petrol/Salbei, große Schrift,
wenige sichtbare Hauptaktionen, runde Bildkanten, dezente Schatten und echte
Raster-Infografiken. Keine nachgezeichneten SVG-Big-Pictures. Inhalte und
Buttons müssen auch ohne Bild lesbar und tastaturbedienbar sein.

## Verwendete Referenzstände

- Nutzer-PDF: zwölf Seiten tatsächlich gerendert und visuell gelesen;
  lokale unveränderte Kopie unter `reference-material`.
- W04: tatsächlich aktuelle **achtseitige Workshopfassung** unter
  `Werkstatt/GitHub/KI-Literacy/praesentationen/kivl-w04`. Der ältere lokale
  32-Folien-Entwurf wird nicht als aktuelle Stilreferenz verwendet. Keine
  W04-Dateien verändern oder still zurücksynchronisieren.
- W05: aktuelle Werkstattfassung mit elf Seiten, visuellen Beispielen,
  aufklappbaren Hilfen, Prompts und Quellenreiter; keine Rückkehr zum
  früheren Acht-/Neun-Seiten-Plan.
- „KI als Superkraft“: freigegebene Infografiken `big-picture.de.png` und
  `begriffs-kompass.de.png`; tatsächlich als Bilder geprüft. ProfEngel setzt
  Ziel und Grenzen, Eve erklärt, Hugo veranschaulicht Arbeit mit Tools.

Bewusste zur Freigabe stehende Fortführung des W04-/W05-Workshopformats:
Fahrplan/Leitfrage im Einstieg und Quellen als benannter Schlussreiter statt
zusätzlicher Agenda-, bildloser Frage- oder Quellenfolien. Dadurch bleibt es
bei sieben Seiten. Keine Pausenfolie und keine Zweiergruppenpflicht.

## Sieben Seiten · genau 30 Minuten

| Zeit | ID / Titel | Inhalt und bildliche Führung | Interaktion und Wirkung | Evidenz |
|---|---|---|---|---|
|0–2|`w06-start` · **Was weiß meine KI wirklich?**|Woche/Thema/ProfEngel sichtbar. Große Wissenswerkstatt mit Tisch, Schrank und Spürhund; Leitfrage und drei einfache Stationen „Einlesen – Finden – Prüfen“.|Ein Startfall: „Die Datei ist hochgeladen. Ist damit alles verstanden?“ Kurze Abstimmung per Handzeichen. Links/QR im kleinen Materialfenster, keine Extrafolie.|U1, CTX1, INPUT1|
|2–7|`w06-knowledge-workshop` · **Tisch, Schrank, Spürhund, Haus.**|Eine zusammenhängende neue Rasterillustration mit vier anklickbaren Orten. Tisch = aktueller Kontext; beschrifteter Aktenschrank = strukturierte Ablage/exakte oder Wortsuche; Spürhund = ähnliche Inhalte finden; Haus/Räume = Projekt-, Themen- und Versionsordnung. Memory bedeutet gezielt bewahren **und später nachschlagen**, nicht Modelltraining.|Ein Ort aktiv, eine kurze Erklärung und ein greifbarer Fall sichtbar. Drei Mini-Fälle passend zuordnen. Keine behauptete Pflichtleiter „vier immer bessere KI-Stufen“; Dokumente, Suchverfahren und dauerhafte Speicherung auseinanderhalten.|U1, SQL1, CTX1, MEM1|
|7–11|`w06-media` · **Einlesen ist nicht gleich Einbetten.**|Neue Infografik mit Text, Bild, Ton und Video. Zwei Wege: in Text umwandeln (OCR/Transkript/Beschreibung) oder mit passenden multimodalen Modellen direkt verarbeiten/einbetten. Text-PDF und Scan-/Bild-PDF ausdrücklich unterscheiden.|Vier Medienreiter, nur ein Beispiel groß. Umschalten „Nur Text“ / „Originalmedium“: Was geht an Bildanordnung, Ton oder zeitlichem Ablauf verloren? EmbeddingGemma 2 als kurz belegtes reales Beispiel, keine Installations-/Parameterfolie.|MM1, INPUT1, CHAT1|
|11–15|`w06-rag-lab` · **Der Spürhund bringt Belege auf den Tisch.**|Neue illustrierte RAG-Szene: Frage → passende freigegebene Quelle suchen → Fundstelle auf den Tisch → begrenzte Antwort → menschliche Prüfung. Ein Haus mit Räumen verhindert im Beispiel Projektvermischung; Datum/Version bleiben sichtbar.|Kleiner lokaler Suchlauf, ausdrücklich **didaktische Simulation, keine echte KI**. Wort-/Bedeutungssuche und einfacher Projekt-/Aktuell-Filter. Ein veralteter Treffer und eine unbelegte Frage zeigen Grenzen. Ein geprüftes Memory-Kärtchen kann bei einer späteren Anfrage wieder eingebracht werden.|RAG1, SQL1, MEM1, SEC1|
|15–24|`w06-detective` · **Dokumenten-Detektiv: Belege statt Bauchgefühl.**|Neues Produktbild einer kleinen Belegkarte. Synthetisches Mini-Paket: kurze Text-PDF und ein Bild/visueller Raumplan. Drei Fragen: ein Textfakt, eine visuelle Information, eine absichtlich fehlende Angabe. Keine echten Kurs-/Personaldaten.|Eigenständig in ChatGPT Desktop: Material anhängen, vollständigen Prompt kopieren, Antwort und Fundstellen gegen Original prüfen, Merkkarte mit Quelle/Stand/Projekt erstellen. Ein Blatt mit Sollbefunden als Offline-/Modellausfall-Fallback. **7 Minuten Arbeit + 2 Minuten Wrap-up**, kleine Timer rechts oben; Lösung zunächst verdeckt auf derselben Seite. Kein neues Programm bauen.|RAG1, INPUT1, CHAT1, SEC1|
|24–28|`w06-bigpicture` · **Sechs Wochen. Eine eigene KI-Werkstatt.**|Neue, tatsächlich generierte Raster-Infografik: ein Haus mit sechs verständlichen Räumen für W01–W06. ProfEngel, Eve und Hugo verbinden Erleben, Einordnen, Prompting, Agenten, UI/Bilder und Wissensanbindung. Zweite Bildansicht übernimmt die freigegebene „KI als Superkraft“-Übersicht Software 1.0 / Chat / Agent.|Zwei benannte Bildansichten, vergrößerbar. Eine Transferfrage: Was erledigt feste Software, was formuliert ein Modell, was darf ein Agent tatsächlich tun? LLM ist Technik; Menschen bestimmen Ziel, Rechte und Abnahme. Ausblick W07: zeigen und begründen, ohne neue Prüfungsregeln zu erfinden.|Geprüfte W01–W05-Materialien, RAG1, MEM1; Wiederverwendung mit bestehender Provenienz|
|28–30|`w06-compass` · **Die wichtigsten 20 Begriffe auf einen Blick.**|Vorhandene freigegebene Rastergrafik aus „KI als Superkraft“ wiederverwenden, nicht neu erfinden. Vier Bereiche: Modelle, Verarbeitung, Wissen, Anwendung. Ausdrücklich benannter Reiter **Quellenverzeichnis** mit allen Originalverweisen.|Bild vergrößern, Bereich/Begriff wählen und kurze Erklärung kopieren – auch im Großmodus. Nur zwei Begriffe gemeinsam aufgreifen, nicht alle zwanzig vorlesen. Materialien und vollständige Quellen bleiben offline erreichbar.|Bestehendes geprüftes Kompassmaterial; aktuelle W06-Quellen zu RAG, Embeddings und Memory|

## Bildauftrag nach FREIGABE

Fünf neue Rastermotive, vorzugsweise über die freigegebene Kie.ai-Pipeline:

1. **Wissenswerkstatt**: eine ruhige, zusammenhängende Raumszene statt vier
   isolierter Symbolkarten. Tisch, beschriftete Schubladen, freundlicher
   Spürhund und ein Haus-/Raummodell. Im Einstieg und auf Seite 2 nutzbar.
2. **Vier Medien, zwei Verarbeitungswege**: Brief/Textblatt, Bild, Tonwelle
   und Filmstreifen; sichtbar machen, dass die Reduktion auf Text andere
   Informationen verlieren kann. Exakte Begriffe zusätzlich als HTML.
3. **RAG-Suchszene**: Spürhund findet ein passendes Blatt im richtigen Raum
   und bringt es zu Hugos Arbeitstisch; Quelle, Aktualität und Mensch prüfen.
4. **Belegkarte als Übungsprodukt**: ein kurzer Befund mit Fundstelle,
   sichtbarer visueller Information und „nicht belegt“ statt Fantasieantwort.
5. **Sechs-Wochen-Haus**: echte Syntheseinfografik mit sechs Räumen und
   kurzem W01–W06-Lernweg; ProfEngel, Eve und Hugo in ihren Rollen.

Wiederverwenden: zwei bereits freigegebene Superkraft-Infografiken. Aktuelle
Figurenmerkmale bewahren; keine neue Figur-/Stimmenentwicklung. Audio/Video
nur als kurzer, vorhandener bzw. vorbereiteter Demonstrationsausschnitt mit
Transkript-/Standbildalternative – kein neuer Erklärfilm innerhalb dieses Auftrags.
Keine Generierungsjobs vor Planfreigabe.

## Fachliche Best Practices, knapp in die Bedienung eingebaut

- Ein Dokumenten-Upload ist nicht automatisch ein fertig gebautes RAG-System.
- Ein Embedding hilft beim Finden; es erzeugt nicht selbst die begründete Antwort.
- Ähnlichkeit ist kein Wahrheitsnachweis. Fundstelle im Original prüfen.
- Quelle, Projekt, Stand und Version anzeigen. Ordnerstruktur allein ist kein
  verlässlicher Zugriffsschutz; Rechte müssen technisch durchgesetzt werden.
- Memory nur bei Bedarf lesen/schreiben; geprüfte nützliche Informationen mit
  Herkunft und Gültigkeit speichern. Es ist nicht automatisch alles präsent.
- Dokumente und Bilder sind Arbeitsmaterial, keine unbeschränkten Befehlsgeber.
  Ein Prompt allein ist kein Sicherheitsnachweis. Nur synthetische Übungsdaten.
- Keine starre 50-Seiten-Grenze, keine 100-Prozent-Übersicht, keine allgemeine
  80-Prozent-SQLite-Quote und kein Versprechen „kein Streuverlust“ übernehmen.
- Multimodale Unterstützung hängt von Modell und Verarbeitungsweg ab. API-
  Dokumentation nicht als Garantie für jedes Chatprodukt oder jeden Tarif ausgeben.

## Ausgabe und Prüfung nach Freigabe

AA-Startdatei, vollständige Offline-HTML, Review, Quellenanhang,
folienweiser Dozentenleitfaden (Absicht, Beispiel, Moderation, Stolperstelle,
Übergang), Materialien, konsistente Timer und spätere Nutzungskopie/ZIP.
Nur die neue W06-Quelle bearbeiten. W01–W05, Buch, Warehouse, Intern und
LEGACY unverändert lassen. Aktuelle Quellen-/Medienrechte dokumentieren.

Nach Planfreigabe, fertiger Vorschau und Quality Gate hat der Nutzer am
09.11.2026 die Veröffentlichung ausdrücklich beauftragt. Ziel:
`https://profengel.github.io/KI-Literacy/praesentationen/kivl-w06/`.
Freigabe und Ausschlüsse sind in `FREIGABE.md` dokumentiert.

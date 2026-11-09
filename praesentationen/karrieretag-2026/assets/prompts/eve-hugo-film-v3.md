# Eve & Hugo · freigegebener Erklärfilm v3

09.11.2026: drei Kapitelkarten vor S03 (Software 1.0), S04 (Chatbot) und S05 (Agent). Je drei Sekunden volle Standzeit, 0,375 Sekunden weiche Übergänge. 87,3 Sekunden insgesamt. Sprechtexte, Stimmen und Lippenanimation unverändert. Audiospuren vor Montage exakt auf Szenenlänge begrenzt; Untertitel um Kartenzeiten verschoben. Keine neuen Generierungsjobs. Nutzer bestätigt Abnahme und Veröffentlichung.

## Produktionsherkunft der unveränderten Sprechszenen

# Eve & Hugo · Erklärfilm v2

KI-generierte Lehrfiguren, keine realen Personen oder reale Agentenausführung.
Freigegebene Endfassung: 9. November 2026, rund 77 Sekunden, acht Szenen.

## Tatsächlich verwendete Produktionskette

- Startbilder und Raster-Requisiten: Kie.ai,
  `gpt-image-2-6/sunburst-image-to-image`, mit freigegebenen Figurenreferenzen.
- Sprache: eigener TrinityHub, Qwen3 Voice Clone, vom Nutzer freigegebene
  Stimmen von Eve und Hugo. Private Sprachreferenzen werden nicht mitgeliefert.
- Bewegtbild: eigener ComfyUI-Server, MiniMax H3 Ref2VA
  (`minimax_h3_ref2va_pruned_int8_convrot.safetensors`), passende Turbo-LoRA,
  vier Schritte, Audio Drive mit unveränderter Sprachaufnahme als Führung.
- Nachbearbeitung: FFmpeg; kontrollierte PNG-Erklärtafeln und animierte
  Raster-Requisiten. V2 verdeckt unerwünschte Modell-Einblendungen durch
  deckende Tafeln und kürzt nur Leerpausen. Sprechtempo bleibt unverändert.
- H3-Rohauflösung ungefähr 0,6 Megapixel; Endausgabe auf 1280 × 720 skaliert,
  24 Bilder/Sekunde, H.264/AAC. Keine native 720p-Generierung behauptet.

## Visuelle Richtung

Freundliche Comic-Werkstatt, Creme, Petrol und Salbei. Eve: blonde Haare,
Brille, helle Strickjacke, altroséfarbenes Shirt. Hugo: dunkle Locken, kurzer
Vollbart, Schutzbrille und petrol-/amberfarbener Werkzeug-Harnisch.
Ein sichtbarer Sprecher je Szene, natürliche Gestik, erkennbare Mundbewegungen,
ruhige Kamera, gleiche Raumwelt. Werkzeuge und gemeinsames Memory sind
didaktische Metaphern. Menschen behalten Zielsetzung, Rechte und Verantwortung.

Der ursprüngliche H3-Auftrag verlangte teilweise illustrierende Elemente;
unerwünschte Sprechblasen werden in der Endfassung kontrolliert verdeckt.
Für neue Rohclips künftig nur Person und Raum, ohne eingebrannten Text,
Sprechblasen oder schwebende Grafiken anfordern; Erklärtafeln danach montieren.

## Gesprochener Text

1. Eve: „Ein Lernplan, drei Möglichkeiten: eine App mit festen Regeln, eine
   Antwort im Chat oder ein Agent, der Werkzeuge nutzt.“
2. Eve: „Ein Sprachmodell erkennt Muster. Es berechnet, welche Textbausteine
   als Nächstes passen, und wählt daraus aus. Das kann überzeugend klingen –
   und trotzdem falsch sein.“
3. Eve: „Zuerst ohne Hugo: Du wählst Themen und Zeiten. Die App sortiert und
   speichert nach festen Regeln. Sie entscheidet nicht selbst über neue Schritte.“
4. Eve: „Im Chat formulierst Du Deinen Wunsch frei. Die KI schlägt einen
   Lernplan vor. In diesem Beispiel ändert sie noch nichts in Deiner App.“
5. Hugo: „Jetzt übernehme ich den Auftrag. Mein Harness ist mein Arbeitsplatz:
   mit klaren Regeln, passenden Fähigkeiten und genau den Werkzeugen, die ich
   benutzen darf.“
6. Hugo: „Bevor ich loslege, schaue ich im Memory nach. Welche Themen kennst
   Du schon? Welche Zeiten sind frei? Fehlt etwas, frage ich Dich.“
7. Hugo: „Dann wähle ich ein Werkzeug, prüfe seine Rückmeldung und plane den
   nächsten Schritt. Vor wichtigen Änderungen brauche ich Deine Freigabe.
   Danach kontrolliere ich das Ergebnis.“
8. Eve: „Die Werkzeuge bleiben dieselben. Neu ist die begrenzte Steuerung
   durch ein Sprachmodell. Du bestimmst Ziel und Grenzen. Deine Idee ist die
   eigentliche Superkraft.“

Die Prozentwerte der Wortauswahl sind ein ausdrücklich gekennzeichnetes
Lehrmodell, keine empirisch gemessenen Modellwahrscheinlichkeiten.

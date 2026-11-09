# W06 · Teil 2: Mein Agent unter Sicherheitsprüfung

**Als Woche 6 · Teil 2 zur Veröffentlichung freigegeben.** ProfEngel · Donnerstag, 12. November 2026 · 40 Minuten nach den unveränderten 30 Minuten Dokumente/RAG/Memory.

GitHub Pages: [Teil 2 · Mein Agent unter Sicherheitsprüfung](https://profengel.github.io/KI-Literacy/praesentationen/kivl-w06-teil2/).

## Start

`AA_W06_Teil_2_Agentensicherheit.html` öffnen. Den **gesamten Ordner** mitnehmen. `presentation.html` und `presentation.de.html` sind identische Vollfassungen, keine Weiterleitungen.

Pfeiltasten, Home/Ende und Navigation unten; hell/dunkel/System. Moderationsbutton pro Seite, vollständiger [Dozentenleitfaden](dozentenleitfaden.html), [Review](review.html), Quellenreiter am Ende. Beim Fokus in Eingabefeldern/Summaries steuern Tasten diese Elemente; zum Folienwechsel Navigation unten nutzen.

## Enthalten

- Sieben bildhafte Workshopseiten; vier neue echte Kie.ai-Rasterbilder.
- Werkstatt-Simulation: erlaubter Auftrag, Dokument-Injection und fremder Zugriff; mit/ohne technische Rechteprüfung vergleichen.
- Konkrete Freigabe-Demo: Ziel A bestätigen, auf B wechseln, Zurückweisung beobachten; Bestätigung läuft nach 30 Sekunden ab und gilt einmalig.
- Eine Übungsseite mit 15-Min-Timer, eine Wrap-up-Seite mit 4-Min-Timer. Start/Pause/Reset klein rechts oben; kein Autostart.
- [Prüfcockpit und Agentenpass](material/pruefcockpit.html): drei Unterrichtsfälle, zehn Fälle als Vertiefung, manuelle Belege und Codeprüf-Checkliste. JSON-Import/Export, Markdown-Bericht, Drucken; **keine automatische Ergebnisspeicherung**. Nur Theme wird lokal gespeichert.
- [Markdown-Arbeitsblatt](material/Arbeitsblatt_Agentenpass_und_Sicherheitscheck.md) mit drei kopierbaren Prompts: zunächst lesende Inventur, sichere Testplanung, unabhängiges Review.
- Ausschließlich synthetische [normale](material/event_testnotiz.txt) und [manipulierte](material/event_manipuliert.txt) Testnotiz sowie [Read-only-Rückfallweg](material/FALLBACK_Nur_lesen.md).

Bilder lassen sich vergrößern; Auswahl und kopierbare Erklärung funktionieren auch in der Großansicht. Abbildungen werden vollständig und unverzerrt gezeigt.

## Wichtige Grenzen

Präsentation und Cockpit starten keine Agenten, Modelle, Dateien oder Backendaktionen und benötigen keine Netzverbindung. Externe Quellenlinks und der echte Modellaufruf in der eigenen Übungsumgebung benötigen ggf. Internet. Die Simulation hat fest vorgegebene Modellentscheidungen und eine lokale didaktische Rechteprüfung; sie ist kein Test des eigenen Agenten und kein fertiges Sicherheitsbackend.

Nur eigene/freigegebene isolierte Testprojekte, erfundene Daten und deaktivierte Realaktionen verwenden. Bei unklaren Grenzen nur lesen und planen; Fälle bleiben offen. Codeweitergabe und Modellkosten vorher klären. Keine Zugangsdaten oder privaten Berichte in dieses Paket eintragen oder ungeprüft veröffentlichen.

Die Unterlage ersetzt weder fachkundige IT-/Datenschutzprüfung noch erforderliche Projektfreigaben. Keine neue unangekündigte Prüfungsanforderung. Für eine vollständige Trinity-Abnahme bleiben die weiterführenden Anforderungen des verlinkten Leitfadens erhalten. Ein LLM-Konsens ist keine Zertifizierung.

## Bilder und Provenienz

Tatsächlich erzeugt über **Kie.ai / `gpt-image-2-6/sunburst-image-to-image`**, entsprechend dem ausdrücklich freigegebenen Nutzer-Modellpfad; kein Nano-Banana- oder Built-in-ImageGen-Claim.

Vier finale Motive: `sicherheitswerkstatt.webp`, `schutzschichten.webp`, `testcockpit.webp`, `big-picture-sicherheit.webp`. Original-PNGs ebenfalls lokal. [Promptset](assets/media/prompts/) und [Medienmanifest](assets/media/manifest.json) enthalten vollständige Prompts, Referenzen, Provider, Modell und Einsatzorte. Alle vier Ergebnisse visuell geprüft. Zusätzlich erzeugte sachlich passende Labels im ersten Bild bewusst übernommen; kein garantiert textfreies Ergebnis behauptet.

Referenz: bereits freigegebenes Tutorentrio aus „KI als Superkraft“, tatsächlich geöffnet, nur für Identität/Stil verwendet. Generierte Metaphern sind keine empirischen Belege. Nutzungs-/Provenienzstatus im Manifest; keine pauschale Drittrechtezusage.

## Qualität und Reproduktion

`qa/browser-check.json`: Browser-/UI-Prüfung; `qa/static-check.json`: Pfade, Syntax, Quellen und einfache Credential-Mustersuche. Keine echten studentischen Projekte, kein Modellbenchmark und kein unabhängiger Security-Audit. Tatsächlicher iPad-/Trinity-App-Import muss am Gerät geprüft werden.

Lokaler Bau mit gebündeltem Node: `node prepare-deliverables.mjs` (keine Remote-Generierung). Bild-Generierungsjobs liegen separat in `generation-work`, werden nicht ins Nutzungspaket kopiert; Zugangsdaten werden weder in Projektdateien noch Logs gespeichert. Keine neuen Generierungsjobs ohne konkreten Auftrag starten.

Nutzungspaket/ZIP entstehen ausschließlich aus der lokalen Werkstattquelle mit `Werkstatt/Projektsteuerung/pakete_aktualisieren.py --only-w06-sicherheit`. Bestehende Teil-1-/W01–W05-Unterlagen bleiben redaktionell unverändert. Veröffentlichung auf ausdrücklichen Nutzerauftrag nach Sichtung freigegeben; die öffentliche Kopie enthält keine Generierungsjobs, privaten Referenzen oder QA-Testeinträge. Build-/QA-Dateien liegen nur in der maßgeblichen lokalen Werkstatt, nicht in dieser öffentlichen Nutzungskopie.

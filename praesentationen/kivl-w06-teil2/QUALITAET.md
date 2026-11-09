# Qualitätsprüfung · W06 Teil 2

09.11.2026. Geprüfte lokale Unterlage; anschließend auf ausdrücklichen Nutzerauftrag als Woche 6 · Teil 2 zur Veröffentlichung freigegeben.

- Alle sieben Seiten und vier neuen Rasterbilder tatsächlich visuell geprüft.
- Browserchecks: Navigation, Promptauswahl/Kopieren, Simulation ohne/mit Rechtegrenze, parametergebundene Freigabe und Wiederverwendungssperre, Timer, Großansicht, Quellen, Moderation, Themes, kleine Bildschirme, Review und Cockpit-Export/Import.
- Statische Prüfung: JavaScript-Syntax, JSON, lokale Pfade, Quellenanker, identische AA-/DE-Startfassungen, keine erkannten gängigen Credential-Muster.
- Zusätzliche lokale Negativtests: importierter HTML-Text wird nicht ausgeführt, falsches Schema und übergroße Dateien werden abgelehnt, abgelehnter Import erhält vorhandenen Stand. Kein allgemeiner Security-Audit daraus abgeleitet.
- Offline-Lauf ohne externe Laufzeitanfragen; Quellenlinks bleiben bewusst externe Links. Druckstile mit allen sieben sichtbaren Seiten geprüft.
- **Nicht durchgeführt:** echter Agentenlauf, LLM-Benchmark, Penetrationstest, vollständiger spezialisierter Scannerlauf, unabhängige 2–3-LLM-Securityreviews oder tatsächlicher Trinity-/iPad-Import. Diese Prüfungen werden nicht als bestanden behauptet.

Prüfprotokolle und Screenshots liegen nur unter `qa`, nicht im Unterrichtspaket. Synthetische QA-Formulareinträge werden nicht als Musterergebnisse ausgeliefert. Aus Prüfhäkchen entsteht keine Produktivfreigabe.

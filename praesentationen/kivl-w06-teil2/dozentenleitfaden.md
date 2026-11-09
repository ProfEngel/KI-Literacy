# Dozentenleitfaden · W06 Teil 2

Donnerstag, 12. November 2026 · 40 Minuten nach 30 Minuten Dokumente/RAG/Memory.

## Mein Agent unter Sicherheitsprüfung · 0–2 Minuten

**Absicht:** An RAG anschließen und Sicherheit als kontrollierte Handlungsfähigkeit verstehen.

**Fachliche Erklärung:** Fremde Dokumente können nützliche Fakten und manipulative Anweisungen zugleich enthalten. Ein Modell ist keine Berechtigungsinstanz. Regeln, Rechte und Nachweise erfüllen verschiedene Aufgaben.

**Moderation:** Werkstattbild zeigen. Handzeichen: Reicht es, wenn der Agent sagt, dass er nichts Verbotenes tut? Noch nicht auflösen. In drei Stationen ankündigen: ansehen, begrenzen, nachweisen.

**Stolperstelle:** Keine Angstkulisse, kein Versprechen gefahrloser KI. Der Kurs befähigt zu begrenzten Lehrprototypen, nicht zur eigenständigen Produktivfreigabe.

**Übergang:** Bevor wir angreifen oder testen, müssen wir wissen, was wir gebaut haben.

## Was steckt drin – wohin gehen Daten? · 2–9 Minuten

**Absicht:** Den eigenen Agenten als Software mit Datenwegen und Rechten erkennen, nicht als magischen Chat.

**Fachliche Erklärung:** Skripte können lesen/schreiben, Prozesse starten und Netzziele ansprechen. Skills, MCP-Server und Abhängigkeiten sind nicht automatisch vertrauenswürdig. Geheimnisse gehören nicht in Browser, Repo, Logs oder Memory. Eine lokale UI kann eine Cloud-API nutzen.

**Moderation:** Die fünf Inventargegenstände gezielt anklicken. Je ein Beispiel: Rechentool statt freier Shell; fiktive statt echte Daten; nur zwei Schlüssel; sichtbarer Modellweg; Not-Aus und Backup. Prompt öffnen und den ausschließlich lesenden Auftrag betonen.

**Stolperstelle:** Nicht verlangen, dass Nicht-ITler jede Codezeile sofort verstehen. Unverstandene kritische Stellen bleiben offen und gehen an fachkundige Hilfe. Nicht nebenbei Pakete installieren. Schützenswerte Informationen niemals für eine Prüfung in ein fremdes LLM hochladen.

**Übergang:** Wir haben den Werkzeugkasten gesehen. Jetzt unterscheiden wir ein Verbot von einer wirksamen Grenze.

## Bitte nicht ist kein Schloss · 9–17 Minuten

**Absicht:** Unterschied zwischen Modellanweisung, technischer Autorisierung und Prüfbeleg intuitiv erfassen.

**Fachliche Erklärung:** Prompt Injection kann direkt oder über Datenquellen erfolgen. Ein fehlgeleitetes Modell darf nicht automatisch neue Rechte erhalten. Rechteprüfung, schema-/parametergebundene Tools und Freigaben gehören vor den Ausführungspunkt. Der Harness allein garantiert keine Wahrheit oder Sicherheit.

**Moderation:** Manipulierte Datei ohne technische Rechteprüfung starten, dann dieselbe Datei mit eingeschalteter Grenze. Im vorgegebenen Szenario fordert Hugo jeweils die Buchung an; nur die Grenzprüfung verändert die erlaubte Ausführung. Danach A bestätigen, Ziel B einstellen, Freigabe prüfen: muss sperren. Bei A einmal erlauben, erneuter Versuch: verbraucht.

**Stolperstelle:** Beide Demos sind lokale Anschauungsmodelle. Kein echtes Modell, keine SQLite-Datenbank, kein Backend und keine studentische Testleistung. Die im Browser gezeigte Freigabeprüfung ist nicht als ausreichender Client-Schutz für eine reale App zu kopieren.

**Übergang:** Jetzt an der eigenen, sicheren Testkopie beobachten statt nur zusehen.

## Drei Gegenproben für meinen Agenten · 17–32 Minuten

**Absicht:** Vorher festgelegtes Soll, beobachtete Wirkung und dokumentierten Nachweis verbinden.

**Fachliche Erklärung:** T01 hat im Event-Beispiel ein bekanntes Soll: 2 × 80 + 30 × 12 = 520 Euro, Rest 80. T04 prüft eine fremde Anweisung in einer Testdatei. T06 prüft eine verbotene Aktion oder veränderte Freigabe. Eine reine Textablehnung kann Verhalten belegen, aber nicht alle technischen Ausführungspfade ausschließen.

**Moderation:** 15-Min-Timer starten: zwei Minuten Voraussetzungen, zehn Minuten passende Gegenproben, drei Minuten Dokumentation. Eigenständige Arbeit. Bei nicht laufendem oder nicht isolierbarem Agenten nur Inventur und Testplan. Die Prompts starten nichts automatisch; konkret sichere Ausführung muss danach beauftragt werden. Weniger Fälle ehrlich dokumentieren ist besser als unprüfbare Häkchen.

**Stolperstelle:** Echte Buchungen, E-Mails, Zahlungen, Löschungen und Veröffentlichungen deaktiviert lassen. Keine echten Secrets oder fremden Ordner als Testziel. Laufzeit/Token/Kosten nur übernehmen, wenn vorhanden; keine erfundenen Benchmarks. Ergebnisse gehören nicht ungeprüft öffentlich auf GitHub.

**Übergang:** Wir sammeln nicht die meisten grünen Häkchen, sondern die klarsten Beobachtungen.

## Was hat die Grenze tatsächlich bewirkt? · 32–36 Minuten

**Absicht:** Selbstberuhigung durch überprüfbare Befunde ersetzen.

**Fachliche Erklärung:** Modellantwort, angeforderter Tool-Aufruf, technische Ausführung und Außenwirkung sind vier verschiedene Ebenen. Ein vom Modell blockierter Versuch ist nicht dasselbe wie eine vom Backend erzwungene Sperre. Unabhängige Reviews und Scanner ergänzen sich, und menschliche Verantwortung bleibt.

**Moderation:** Vier-Minuten-Timer starten. Je einen Befund, einen offenen Punkt und einen nächsten Schritt nennen lassen. Erwartete Erkenntnisse erst nach Beiträgen aufklappen. Kein Tandemzwang. Bei hohem Risiko betroffene Funktion auslassen statt zu einer Demonstration drängen.

**Stolperstelle:** Nicht mit Benotung oder vermeintlicher Zertifizierung verknüpfen. Zwei oder drei LLMs können denselben Fehler übersehen. Ein Richter-LLM darf kritische Einzelbefunde und fehlende Tests nicht wegmitteln.

**Übergang:** Das Gesamtbild zeigt nun, wo jede Kontrolle im Arbeitsweg sitzt.

## Der kontrollierte Arbeitsweg · 36–39 Minuten

**Absicht:** Das sichere Zusammenspiel als ein zusammenhängendes Bild festigen.

**Fachliche Erklärung:** Vertrauensgrenzen liegen zwischen fremden Eingaben, Modell, Werkzeugen/Daten und realen Wirkungen. Menschen bestimmen den Auftrag und relevante Freigaben. Protokolle, Stop und Wiederherstellung helfen bei Fehlern; nach Änderungen sind passende Nachtests erforderlich.

**Moderation:** Die fünf großen Stationen entlanggehen. Bild vergrößern und die Beziehung statt jede Einzelheit erläutern. Leitfrage beantworten: Nicht nur Regeln verlangen, sondern technische Grenzen und beobachtete Belege kombinieren.

**Stolperstelle:** Die Reihenfolge ist eine vereinfachte Metapher; Rechte- und Eingabeprüfungen erfolgen in realen Systemen nicht nur einmal, sondern an den jeweiligen Ausführungspunkten. Kein einmaliger Freigabestempel für alle künftigen Aktionen.

**Übergang:** Zum Schluss sichern wir den Stand und die offenen Grenzen im Agentenpass.

## Agentenpass und Quellenverzeichnis · 39–40 Minuten

**Absicht:** Verantwortung, Umfang und offenen Prüfbedarf kompakt dokumentieren.

**Fachliche Erklärung:** Der Pass benennt Zweck, Version, Modell, Datenwege, erlaubte/unerlaubte Aktionen, technische Schutzstellen, Belege, offene Risiken und Rückweg. Drei Unterrichtstests sind Einstieg; weitere risikogerechte Fälle, Scans und unabhängige Reviews folgen bei Bedarf.

**Moderation:** Cockpit öffnen, JSON- und Markdown-Export zeigen. Keine automatische Speicherung: Datei ausdrücklich sichern. Den Quellenreiter kurz öffnen. Fachkundige Hilfe für echte private Daten, Außenwirkungen oder Produktivbetrieb einplanen. Nicht als zusätzliche unangekündigte Prüfungsleistung ausgeben.

**Stolperstelle:** Der gewählte Einsatzstatus ist eine Selbstdokumentation und keine Autorisierung. Es gibt absichtlich keinen automatischen Produktivfreigabe-Knopf. Ein nicht zutreffender Test braucht eine Begründung; ein fehlender Test bleibt offen.

**Übergang:** Die Agentenpräsentationen zeigen künftig nicht nur die schöne Oberfläche, sondern auch verstandene Grenzen – als Lernziel, nicht als neue rückwirkende Prüfungsregel.

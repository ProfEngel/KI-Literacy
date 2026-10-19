# Benchmark-Cockpit

index.html lokal öffnen. Keine Installation, keine APIs und keine vorgegebenen Modell-Ergebnisse. 30 Fälle in sechs Kategorien, acht markierte Live-Kernfälle. Das Template startet mit leerem Katalog; Kategorien/Fälle per JSON bearbeiten/importieren.

Für jeden Fall Agentenversion, Laufzeitmodell, Harness, Konfiguration und Wiederholung dokumentieren; Ergebnis anhand des Solls bewerten. Score 0/1/2 ist eine didaktische Rubrik, kein wissenschaftlicher Sicherheitsindex. Kritische Fehler separat markieren. Verdeckte Transferfälle ergänzen; ein öffentlich bekannter Katalog allein belegt keine Generalisierung.

Eingabe-/Ausgabetokens wie vom jeweiligen Harness berichtet eintragen. Reasoning-/Cache-Token nicht doppelt zählen. Fehlende Werte leer lassen. Tatsächliche Gesamtzeit einschließlich Tools und Wiederholungen; menschliche Prüfzeit separat. API-Preise bzw. lokale Strom-/Hardwareannahmen dokumentieren; aus Abos keine fiktiven Anfragepreise ableiten.

Ergebnisse bleiben lokal; regelmäßig JSON sichern. Unterschiedliche Suite-/Datenstände sind nicht automatisch vergleichbar. Korrekturen als neue Läufe mit supersedes-ID erfassen; Originale bleiben erhalten. Aktuelle Auswertung berücksichtigt nur nicht ersetzte Läufe des geladenen Suite-/Datenstands. Browser-Storage kann unter file:// je Plattform anders funktionieren; JSON-Export ist Rückfallweg.

Das Cockpit startet keine Agenten und spricht keine Modelle an. Codex/Ollama laufen getrennt im Übungsordner. Ergebnisse aus echten Läufen manuell bewerten; Referenzprüfer-Tests nicht als LLM-Performance importieren. Soll-Lösungen nicht dem Agenten als Memory bereitstellen. Menschliche Abnahme und produktive Sicherheitsprüfung bleiben erforderlich.

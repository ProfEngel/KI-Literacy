# 🎓 OpenWebUI Seminararbeit-Agent (RAG-Fokus)

Dieses Repository enthält die Konfiguration für einen didaktisch geprägten KI-Agenten, der auf Basis einer lokalen Literatur-Sammlung (RAG) wissenschaftliche Arbeiten unterstützt.

## Besonderheiten
- 🧠 **Didaktischer Ton**: Orientiert am Stil der "KI-VL", nutzt der Agent Analogien und klare Erklärungen, um Technik zu entmystifizieren.
- 📚 **RAG-First**: Keine unkontrollierte Websuche. Der Agent nutzt ausschließlich die OpenWebUI Knowledge-Collection `Literatur`.
- 🧩 **Modular**: Klare Trennung von Stil, Struktur und Qualitätskontrolle durch OpenWebUI Skills.

## Projektstruktur
- `system_prompt.txt`: Kerninstruktion (didaktischer "Erklärer"-Modus).
- `skills/`:
    - `stil.md`: Didaktisch-akademischer Schreibstil (neu basierend auf Kapitel 1).
    - `quellen.md`: Zitationsregeln.
    - `lektorat.md`: Qualitätssicherung.
    - `entwurf.md`: Gliederung der Arbeit.
- `installationsanweisung.md`: Anleitung zur Einrichtung der "Literatur"-Collection und des Modells.

## Verwendung
Der Agent ist ideal für Nutzer, die bereits eine Literaturliste haben und diese tiefgreifend und stilistisch konsistent verarbeiten möchten.

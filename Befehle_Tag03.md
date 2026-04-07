# Befehle & Vorlagen für Tag 03

Hier findest du die wichtigsten technischen Befehle und Prompt-Strukturen, die wir in den Laborphasen von Tag 03 verwenden.

## 🛠️ Docker: Lokale Websuche mit SearXNG
Um eine datenschutzfreundliche Suche in deine lokale KI (OpenWebUI) zu integrieren, nutzen wir SearXNG. 

**Befehl zum Starten des Containers (inkl. Konfiguration für JSON-Output):**

```bash
mkdir -p ./searxng && printf 'use_default_settings: true\nsearch:\n  formats:\n    - html\n    - json\n' > ./searxng/settings.yml && docker run -d --name searxng -p 8080:8080 -v "$(pwd)/searxng:/etc/searxng:rw" --restart unless-stopped --cap-drop ALL --cap-add CHOWN --cap-add SETGID --cap-add SETUID --cap-add DAC_OVERRIDE --log-driver json-file --log-opt max-size=1m --log-opt max-file=1 searxng/searxng:latest
```

## 🧠 Prompt Engineering: Das 6-Elemente-Modell
Nutze diese Struktur für deine professionellen Prompts, um reproduzierbare Ergebnisse zu erhalten:

1. **Aufgabe:** (Was soll getan werden? Imperativ!)
2. **Kontext:** (Hintergrund, Zielgruppe, Branche)
3. **Persona:** (Welche Rolle soll die KI einnehmen?)
4. **Beispiel (Few-Shot):** (Musterlösungen vorgeben)
5. **Format:** (Markdown-Tabelle, JSON, Bulletpoints?)
6. **Tonalität:** (Sachlich, akademisch, locker?)

**Beispiel-Vorlage:**
> "Agiere als [Persona]. Wir sind [Kontext]. Deine Aufgabe ist es, [Aufgabe]. Achte dabei auf [Tonalität]. Gib das Ergebnis ausschließlich im Format [Format] aus. Hier ist ein Beispiel, wie ich es mir vorstelle: [Beispiel]."

## 🔍 RAG & Strict Grounding
Wenn die KI nur auf Basis eines bereitgestellten Textes antworten soll:

> "Beantworte die folgende Frage **ausschließlich** auf Basis des bereitgestellten Kontextes. Wenn die Information dort nicht enthalten ist, antworte mit 'Dazu liegen mir keine Informationen vor'.
>
> KONTEXT:
> [Hier Text einfügen]
> 
> FRAGE:
> [Hier Frage einfügen]"

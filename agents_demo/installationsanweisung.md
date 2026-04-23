# 🛠 Installationsanweisung: Seminararbeit-Agent (RAG-Edition)

Folge diesen Schritten, um den didaktisch-wissenschaftlichen Agenten in OpenWebUI einzurichten.

## Schritt 1: Wissensbasis (RAG) vorbereiten
1. Gehe zu **Workspace > Knowledge**.
2. Erstelle eine neue Collection mit dem Namen `Literatur`.
3. Lade alle Dokumente aus dem Ordner `literature/` in diese Collection hoch (z.B. `unesco_guidance_2023.md`, `post_plagiarism_2024.md`, etc.).
4. **Wichtig**: Der Agent ist so konfiguriert, dass er diese Collection als primäre Quelle nutzt.

## Schritt 2: Modell erstellen
1. Gehe zu **Workspace > Models > Create Model**.
2. **Name**: `Seminararbeit-Agent (Didaktik & Literatur)`
3. **Base Model**: Wähle ein leistungsstarkes Modell (z.B. Claude 3.5 Sonnet oder GPT-4o).
4. **System Prompt**: Kopiere den Inhalt aus [system_prompt.txt](./system_prompt.txt).
5. **Knowledge**: Weise dem Modell die Collection `Literatur` zu (falls in deiner OpenWebUI-Version direkt möglich, ansonsten wird er über den Namen im Prompt darauf zugreifen).
6. Klicke auf **Save & Create**.

## Schritt 3: Skills hinzufügen
Erstelle unter **Workspace > Skills** die folgenden Skills (Markdown):
- `stil`: Inhalt aus `skills/stil.md` (Didaktischer Schreibstil).
- `quellen`: Inhalt aus `skills/quellen.md`.
- `lektorat`: Inhalt aus `skills/lektorat.md`.
- `entwurf`: Inhalt aus `skills/entwurf.md`.

## Schritt 4: Nutzung
Wähle das Modell im Chat aus. Da die aktive Recherche deaktiviert wurde, steuerst du den Agenten über die vorhandene Literatur:
> „Analysiere die ethischen Aspekte des Datenschutzes basierend auf den Dokumenten in meiner Literatur-Sammlung und schreibe dazu einen Entwurf für Kapitel 3.3 gemäß stil.md.“

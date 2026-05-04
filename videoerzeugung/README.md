# Modul: Videoerzeugung – Von der statischen Szene zum kinematischen KI-Video

Dieses Repository enthält die Materialien für ein Lehrmodul zur systematischen Videogenerierung mit KI. Der Fokus liegt auf der Vermittlung allgemeingültiger Prinzipien der zeitlichen Konsistenz, der Kameradynamik und des strukturierten Multi-Shot-Prompting – unabhängig von spezifischen Plattformen.

## Inhalt des Ordners

- **[Anleitung.md](./Anleitung.md)**: Das vollständige Unterrichtsskript inklusive Ablaufplan und didaktischen Phasen.
- **[VideoerzeugungVerstehen.md](./VideoerzeugungVerstehen.md)**: Technischer Überblick über Videoarchitekturen, FPS-Standards und physikalische Konzepte.
- **[cheatsheet.md](./cheatsheet.md)**: Kompakte Referenz für Kamera- und Objektbewegungen sowie zeitliche Parameter.
- **[multi_shot_prompts.md](./multi_shot_prompts.md)**: Agnostische Frameworks für die Planung komplexer Sequenzen mittels LLM.
- **[directorprompt_template.md](./directorprompt_template.md)**: Der ultimative Director-Prompt mit modellspezifischen Erweiterungen (LTX, Kling, Sora etc.).
- **media/**: Beispielvideos und Key Visuals.

## Struktur des Moduls

Das Modul ist in sechs Phasen unterteilt:
1. **Die Architektur der Zeit**: FPS, Persistence of Vision und Bewegungsgrenzen.
2. **Bewegungskontrolle**: Trennung von Kamera- und Objektbewegung.
3. **Charakter-Konsistenz**: Übertragung von Identität in die zeitliche Dimension.
4. **Multi-Shot-Prompting**: Sequenzplanung und LLM-gestützte Regie.
5. **Der professionelle Workflow**: Vom Key Visual zur finalen Sequenz.
6. **Post-Produktion**: Upscaling, Interpolation und Veredelung.

## SOTA-Referenz (Stand Mai 2026)
Um das Modul aktuell zu halten, beziehen sich die praktischen Übungen auf die zum Zeitpunkt der Erstellung führenden Modelle:
*   **KI-Director (LLM):** Claude Opus 4.7 / GPT-5 (zur Sequenzplanung).
*   **Video-Generator:** [Magnific AI Video Generator](https://www.magnific.com/de/app/ai-video-generator#from_element=mainmenu&from_view=pinned_tool), Seedance 2.0 (Higgsfield), Kling, Luma Dream Machine.
*   **Bild-Generator (Key Visuals):** Image-Gen 2 (OpenAI), Midjourney v7, [Google Labs: Flow](https://labs.google/fx/de/tools/flow).
*   **Upscaling & Veredelung:** Topaz Video AI.
*   **Video-Editing (NLE):** CapCut (mobile first), DaVinci Resolve.

## Verwendung
Die `Anleitung.md` dient als Leitfaden. Das `cheatsheet.md` sollte den Lernenden als Werkzeug zur Verfügung gestellt werden.

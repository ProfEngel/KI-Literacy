# Videoerzeugung verstehen: Die Architektur der Zeit

## 1. Wie KI-Video funktioniert: Die Illusion der Bewegung

Video ist im Grunde eine schnelle Abfolge von Einzelbildern (Frames). Unser Gehirn nutzt die **Trägheit des Auges (Persistence of Vision)** und den **Beta-Bewegungs-Effekt**, um diese Einzelbilder ab einer gewissen Geschwindigkeit als flüssige Bewegung wahrzunehmen.

### Frames Pro Sekunde (FPS): Die Standards
Die Wahl der Bildrate bestimmt den "Look" und die physikalische Wirkung des Videos:

*   **12-15 FPS:** Die Untergrenze für "Bewegung". Wirkt oft ruckelig oder wie ein Stop-Motion-Film (klassische Zeichentrickfilme nutzen oft "on twos", also 12 Bilder pro Sekunde).
*   **24 FPS:** Der **Kinostandard**. Erzeugt einen leichten "Motion Blur", den wir als "filmisch" oder "träumerisch" empfinden.
*   **25 FPS:** PAL-Standard (Europa/TV). Ähnlich wie 24 FPS, angepasst an das 50Hz-Stromnetz.
*   **30 FPS:** NTSC-Standard (USA/Japan/Web). Wirkt etwas klarer und direkter als 24 FPS.
*   **60 FPS:** Gaming/Sport-Standard. Bewegungen wirken extrem flüssig und "realer" (Soap-Opera-Effekt).
*   **120+ FPS:** Ermöglicht flüssige **Slow Motion**. Ein Video, das mit 120 FPS aufgenommen wurde, kann 5-mal langsamer abgespielt werden (bei 24 FPS Export) und bleibt flüssig.
*   **960+ FPS:** Super-Slow-Motion. Macht unsichtbare Vorgänge (platzende Wasserballons, Gewehrschüsse) sichtbar.

### Die Herausforderung der KI: Temporale Kohärenz
Bei KI-Video muss das Modell nicht nur ein schönes Bild generieren, sondern sicherstellen, dass die Veränderung von Frame zu Frame logisch bleibt.

*   **Latent Drift:** Bezeichnet das Phänomen, bei dem die KI während der Generierung sukzessive die Kontrolle über die ursprünglichen Bildinformationen verliert. Da jeder neue Frame basierend auf einer statistischen Wahrscheinlichkeit des vorherigen berechnet wird, summieren sich minimale Abweichungen über die Zeit auf. Dies führt dazu, dass Subjekte (z.B. Gesichter oder Muster) nach wenigen Sekunden "wegdriften" und ihre ursprüngliche Identität verlieren. Dies lässt sich am besten durch den Vergleich von **Start- und Endframe** analysieren.
*   **Motion Vektoren:** Die KI berechnet, wie sich Pixel von Frame A nach Frame B verschieben müssen.

## 2. Kamera- vs. Objektbewegung: Der entscheidende Unterschied

Beim Prompting und in der Analyse müssen wir strikt unterscheiden:

1.  **Objektbewegung (Subject Motion):** Was macht das Motiv? (Rennen, Sprechen, Tanzen, Zerfallen).
2.  **Kamerabewegung (Camera Motion):** Was macht der Beobachter? (Fahren, Schwenken, Zoomen).

**Die goldene Regel:** Wenn beides gleichzeitig passiert, steigt die Komplexität für die KI exponentiell an. Ein statisches Objekt mit einer bewegten Kamera ist für die KI meist einfacher konsistent zu halten als ein rennender Mensch bei statischer Kamera.

## 3. Die Modell-Landschaft (Konzeptionell)

Video-Modelle lassen sich in verschiedene technische Ansätze unterteilen:

| Modell-Klasse | Beispiele (SOTA 2026) | Stärken | Schwächen |
| :--- | :--- | :--- | :--- |
| **Diffusion-Modelle** | Runway Gen-4, Pika v3 | Hohe Ästhetik, präzise Kamerakontrolle | Zeitlich oft begrenzt |
| **Transformer-basiert** | Sora, Kling, Luma | Physikalische Logik, lange Sequenzen | Rechenintensiv |
| **Hybrid/Finetuned** | Seedance (Higgsfield) | Fokus auf Charaktere & Gesichter | Oft mobile-first optimiert |

## 4. Die Rolle von LLMs im Video-Workflow

Moderne LLMs (wie Claude Opus 4.7 oder GPT-5) sind die **Regisseure** der Produktion.
*   **Strukturierung:** Zerlegung einer Story in einzelne "Shots".
*   **Konsistenz-Management:** Beschreibung von Details, damit sie in jedem Prompt identisch bleiben.
*   **Voiceover-Synchronität:** Erstellung von Skripten, die zeitlich auf die geplanten Shots passen.

## 5. Die Post-Produktions-Pipeline

Ein KI-Video ist selten "out of the box" fertig.
1.  **Generation:** Rohmaterial erzeugen.
2.  **Denoising/Cleaning:** Artefakte entfernen.
3.  **Upscaling:** Hochrechnen (z.B. Topaz Video AI).
4.  **Interpolation:** Frames hinzufügen für flüssigere Bewegung.
5.  **Final Grading:** Farbanpassung.

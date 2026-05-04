# Ultimativer Director-Prompt (Template)

Dieses Template dient als System-Prompt oder Instruktion für ein Large Language Model (LLM), um hochpräzise, kinematische Multi-Shot-Video-Prompts zu generieren.

## Der Basisprompt

Kopiere diesen Prompt in dein LLM (z.B. Claude, GPT), um eine strukturierte Shot-Liste zu erhalten:

> *"Write me a multi-shot prompt that describes the below scene using the uploaded image as a key visual reference… [INSERT CHARACTER, ACTION, LOCATION, TIME OF DAY] Structure it as a sequence of shots totalling exactly 15 seconds, where each shot is a minimum of 2 seconds and a maximum of 5 seconds. Choose the shot count freely based on what best serves the action — anywhere from 3 shots (longer, more contemplative beats) up to 7 shots (fast, punchy cutting) — and vary this choice each time the prompt is run so results feel fresh. Chain shots with 'Cut to.' between them. For each shot specify: shot size (wide/medium/close-up/macro), lens (e.g. 24mm, 35mm, 50mm, 85mm), camera angle (low/high/eye-level/over-the-shoulder/Dutch), and one clear camera movement verb (push in, pull out, track, orbit, pan, tilt, handheld, static). Vary all four across the sequence and pick the angle that best sells each beat. Output one flowing paragraph, no line breaks, no lists, no markdown, 1000 characters maximum. End the prompt with: 'Photo real, natural framing. Audio: diegetic sound only — natural ambience, environmental foley, and subject-driven sound.'"*

---

## Modell-spezifische Erweiterungen (Pro-Level)

Je nachdem, welches Video-Modell du nutzt, kannst du den obigen Prompt um folgende technische Suffixe ergänzen, um die Steuerung zu optimieren:

### 1. LTX 2.3 (Fokus: Identität & Stil)
*   **Mit ID-LoRA:** Ergänze: `Apply Character ID LoRA [ID_NAME] at strength 0.8. Maintain consistent facial geometry and clothing textures from the reference.`
*   **Stil-Steuerung:** Nutze Begriffe wie `Hyper-realistic textures, 8k raw photo style, cinematic lighting.`

### 2. Seedance 2.0 (Fokus: Physik & Dynamik)
*   **Motion Control:** Ergänze: `Motion scale: 6. High physical accuracy for [ACTION]. No morphing during movement.`
*   **Physics:** `Maintain gravity and momentum for flying debris/liquid.`

### 3. Kling 3.0 (Fokus: Realismus & Kamera)
*   **Präzise Kamera:** Ergänze: `Camera parameters: horizontal speed 5, vertical speed 2. Professional cinematography.`
*   **Details:** `Focus on skin micro-pores and fabric weave during close-ups.`

### 4. Sora (Fokus: Komplexe Szenenlogik)
*   **Welt-Konsistenz:** Ergänze: `Maintain 360-degree environmental awareness. Background elements must stay persistent across cuts.`
*   **Interaktion:** `Complex interaction between subject and environment (e.g. footprints in snow, splashing water).`

### 5. Veo 3.1 (Fokus: Künstlerische Ästhetik & Licht)
*   **Lighting:** Ergänze: `Advanced ray-tracing, volumetric lighting, HDR colors.`
*   **Artistic Tags:** `Film grain, anamorphic flares, shot on 35mm celluloid.`

---

## Profi-Tipp für Charakter-Kontinuität
Wenn dein Charakter in der Sequenz das Outfit wechselt (z.B. vom Business-Anzug zum Casual-Look), weise das LLM an, für jeden Outfit-Wechsel eine neue visuelle Referenz (Character Sheet) einzubeziehen:
*"Adjust the description to reflect the transition from [Outfit A] to [Outfit B], referencing the respective character sheets for each state."*

# Best Practices: Lokale Videogenerierung & Produktwerbung

Dieses Dokument vertieft zwei fortgeschrittene Workflows der Videoerzeugung: den hochperformanten lokalen Betrieb und die professionelle Erstellung von Werbespots.

---

## 1. Lokaler Workflow: LTX 2.3 All-in-One (ComfyUI)
Wenn Cloud-Credits aufgebraucht sind oder maximale Privatsphäre/Kontrolle benötigt wird, ist ein lokaler Workflow in **ComfyUI** die beste Wahl.

### Hardware-Spezifikationen (Specs)
Für eine flüssige lokale Generierung (LTX 2.3 Modell) werden folgende Mindestvoraussetzungen empfohlen:
*   **GPU (Grafikkarte):** Mindestens **12 GB VRAM** (z.B. NVIDIA RTX 3060 12GB oder höher).
*   **RAM (Arbeitsspeicher):** Mindestens **16 GB RAM**.
*   **Speicher:** SSD empfohlen für schnelles Laden der Checkpoints (ca. 20-40 GB freier Platz).

### Best Practice Workflow
*   **Tool:** [ComfyUI](https://github.com/comfyanonymous/ComfyUI) mit dem LTX 2.3 All-in-One Workflow.
*   **Vorteil:** Integriert Text-to-Video, Image-to-Video und Lip-Sync in einer einzigen Node-Struktur.
*   **Anwendung:** Besonders stark bei "Video-to-Video" Motion-Transfer und der Animation spezifischer Keyframes (First/Last Frame).

**Video-Referenz:** [So verwenden Sie den LTX2.3 All-in-One-Workflow](https://youtu.be/3HXCeSGnoq0?si=bggUL2XXgIDU0I-x)

---

## 2. Produktwerbung: Der Profi-Workflow mit Seedance 2.0
Die Erstellung von Werbevideos erfordert eine deutlich höhere Konsistenz als künstlerische Experimente.

### Der 5-Phasen-Workflow für KI-Werbung
1.  **Konzept & Branding:** Nutzung von LLMs (z.B. Claude) zur Definition der Bildsprache und des Director-Prompts.
2.  **Asset-Design:** Erstellung von Key-Visuals (Produkt/Charakter) mit High-Fidelity Modellen (z.B. **Nano Banana Pro**).
3.  **Generierung:** Nutzung von **Seedance 2.0** oder **Kling 3.0** für die kinematische Umsetzung der Szenen.
4.  **Konsistenz-Check:** Sicherstellung, dass das Produkt (z.B. eine Getränkedose) in jedem Shot identisch aussieht (via LoRA oder Reference-Images).
5.  **Post-Produktion:** Finaler Schnitt, Upscaling und Sound-Design in NLE-Software (z.B. DaVinci Resolve).

### Key Takeaways für Werbespots
*   **Identity First:** Erst das Produkt/Charakter fixieren, dann die Bewegung generieren.
*   **Multi-Shot Planning:** Werbespots leben von schnellen Schnitten und unterschiedlichen Einstellungsgrößen (Macro für Texturen, Wide für Kontext).

**Video-Referenz:** [Seedance 2.0 für KI-Werbung (Vollständiger Workflow)](https://youtu.be/ClIaRcvwnTQ?si=_YDb1S6VvfcoW6_A)

---

## Weiterführende Links
- [ComfyUI GitHub](https://github.com/comfyanonymous/ComfyUI)
- [Seedance.ai](https://seedance.ai)
- [Modul: Bilderzeugung](../bilderzeugung/) (Grundlage für Konsistenz)

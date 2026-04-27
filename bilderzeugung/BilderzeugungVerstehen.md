# Bilderzeugung verstehen: Von der Mathematik zur Magie

Dieses Dokument bietet einen tiefen Einblick in die technische Funktionsweise, das aktuelle Ökosystem und die strategischen Vorteile moderner KI-Bildgenerierung.

---

## 1. Wer hat’s erfunden?
Die moderne Ära der Bildgenerierung basiert maßgeblich auf der **Latent Diffusion** Technologie.
- **Wissenschaftlicher Ursprung:** Entwickelt von Forschern der **LMU München (CompVis Group)** um Robin Rombach und Patrick Esser (veröffentlicht 2022).
- **Kommerzialisierung:** Die Architektur wurde durch **Stability AI** (Stable Diffusion) weltbekannt.
- **Aktuelle Spitze:** Neue Player wie **Black Forest Labs** (ehemalige Stable Diffusion Entwickler) treiben mit Modellen wie **FLUX** die Fotorealistik auf ein neues Level.

---

## 2. Wie es technisch funktioniert
Im Gegensatz zu Sprachmodellen, die Wörter vorhersagen, arbeiten Bild-KIs mit **stochastischer Rauschunterdrückung**.

### Der Diffusions-Prozess
1. **Forward Diffusion (Training):** Einem Bild wird schrittweise Rauschen hinzugefügt, bis es unkenntlich ist.
2. **Reverse Diffusion (Inferenz):** Die KI startet mit absolutem „Rauschen“ (Pixel-Matsch) und entfernt dieses schrittweise, bis ein klares Bild entsteht. Ihr Prompt fungiert dabei als „Magnet“, der die KI in eine bestimmte Richtung zieht.

> [!IMPORTANT] Unterschied zu Sprachmodellen (LLMs)
> Während LLMs **Token für Token** (sequenziell) Wahrscheinlichkeiten für das nächste Wort berechnen, arbeiten Bildmodelle **ganzheitlich auf Pixel-Ebenen** (parallel im Latent Space). LLMs verstehen Grammatik; Bildmodelle verstehen visuelle Konzepte und deren räumliche Beziehungen.

### Latent Space vs. Pixel Space
Die KI arbeitet nicht direkt auf den Millionen Pixeln eines Bildes (das wäre zu rechenintensiv), sondern in einem komprimierten mathematischen Raum, dem **Latent Space**. Erst am Ende wird das Ergebnis durch einen **VAE (Variational Autoencoder)** in echte Pixel übersetzt.

---

## 3. Das aktuelle Ökosystem: Open vs. Closed

### Die Leaderboards
Wer aktuell die Nase vorn hat, lässt sich tagesaktuell hier nachschlagen:
👉 [Artificial Analysis Image Leaderboard](https://artificialanalysis.ai/image/leaderboard/editing)

### OpenWeight-Modelle (Souveränität & lokale Nutzung)
Diese Modelle können heruntergeladen und auf eigener Hardware betrieben werden.
- **[FLUX.2-klein-9B](https://huggingface.co/black-forest-labs/FLUX.2-klein-9B):** Exzellent für extremen Fotorealismus.
- **[ERNIE-Image-Turbo](https://huggingface.co/baidu/ERNIE-Image-Turbo):** Besonders stark bei der Darstellung von Text innerhalb von Bildern.

### Closed Frontiermodelle (Cloud-Plattformen)
- **Allrounder:** Gemini (Google), ChatGPT/DALL-E 3 (OpenAI).
- **Spezialisten:** [Adobe Firefly](https://firefly.adobe.com/) (Urheberrechtssicher), [Freepik](https://de.freepik.com/), [Higgsfield](https://higgsfield.ai/) (Video-Fokus).

---

## 4. Hardware & Profi-Tools

### Eigene Hardware nutzen
Um Modelle lokal zu betreiben, benötigt man:
- **GPU:** Eine dedizierte **NVIDIA-Grafikkarte** (wegen CUDA-Support).
- **VRAM:** Mindestens **12 GB bis 16 GB Videospeicher**.
- **Trick:** Durch **Quantisierung** (Komprimierung der Gewichte) können auch große Modelle auf kleineren Karten laufen, ohne massiv an Qualität zu verlieren.

### ComfyUI: Der Maschinenraum
[ComfyUI](https://www.comfy.org/) ist eine knotenbasierte Oberfläche für absolute Kontrolle.
- **Vorteil:** Man kann komplexe Workflows bauen, die verschiedene Modelle kombinieren.
- **API-Power:** ComfyUI lässt sich per API ansprechen, um Bildgenerierung in eigene Software zu integrieren.
- **Flexibilität:** Im Vergleich zu Plattformen wie Midjourney kann man hier jedes Detail des Prozesses (Sampler, Steps, VAE) selbst bestimmen.

---

## 5. Personalisierung mit LoRAs
Ein **LoRA (Low-Rank Adaptation)** ist wie eine „Zusatzbrille“ für das KI-Modell.
- **Zweck:** Trainiert auf spezifische Personen, Produkte oder künstlerische Stile.
- **Vorteil:** Man muss nicht das ganze Modell neu trainieren. Eine LoRA ist klein (ca. 100MB) und kann auf das Basismodell „aufgesteckt“ werden.
- **Training:** Mit Tools wie dem [ai-toolkit](https://github.com/ostris/ai-toolkit) lassen sich eigene LoRAs mit ca. 20-50 Bildern in kurzer Zeit selbst erstellen.

---

## 6. Strategischer Vergleich

| Feature | Eigene Modelle (Open) | Cloud-Modelle (Closed) |
| :--- | :--- | :--- |
| **Datenschutz** | Absolut (lokal) | Daten verlassen das Haus |
| **Zensur** | Keine | Strenge Filter |
| **Kosten** | Nur Hardware/Strom | Abo-Modelle / Credits |
| **Kontrolle** | Maximale Tiefe (ComfyUI) | Meist nur Text-Prompt |
| **Einfachheit** | Komplexes Setup | Trivial (Chat-Interface) |

---

## 7. Ressourcen
Wo findet man Modelle und LoRAs?
- **[Civitai](https://civitai.com/):** Die größte Community-Plattform für Stable Diffusion & Flux Ressourcen.
- **[Hugging Face](https://huggingface.co/):** Das „GitHub für KI-Modelle“ im akademischen und professionellen Bereich.

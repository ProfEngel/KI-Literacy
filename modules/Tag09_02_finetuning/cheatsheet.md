# Cheat-Sheet: Fine-Tuning (Tag 09)

## 1. RAG vs. Fine-Tuning
| Eigenschaft | RAG (Retrieval-Augmented Generation) | Fine-Tuning |
| :--- | :--- | :--- |
| **Metapher** | Open-Book Exam (Spickzettel lesen) | Nachhilfe-Unterricht (Neues Wissen verinnerlichen) |
| **Mechanismus** | Dokumente werden zur Laufzeit in den Prompt kopiert. | Die neuronalen Gewichte des Modells werden dauerhaft verändert. |
| **Stärke** | Faktenwissen, tagesaktuelle Daten, geringe Kosten. | Erlernen eines spezifischen Stils (Tone of Voice), Spezial-Syntax (z.B. Ärzte-Jargon). |
| **Schwäche** | Begrenztes Context-Window, Modell lernt nicht dazu. | Teuer im Training, Gefahr von "Catastrophic Forgetting" (altes Wissen wird überschrieben). |

## 2. LoRA (Low-Rank Adaptation)
Ein Verfahren, um Fine-Tuning bezahlbar zu machen. Anstatt alle Milliarden Gewichte eines großen Modells (z.B. Llama 3) neu zu trainieren, wird nur ein winziges "Adapter-Modul" trainiert, das auf das gefrorene Basis-Modell aufgesetzt wird. 
- **Vorteil:** Man braucht keine riesigen Serverfarmen, sondern kann dies oft auf starken Consumer-Grafikkarten durchführen.

## 3. Der JSONL-Datensatz
Fine-Tuning erfordert hunderte oder tausende Beispiele. Das Standardformat hierfür ist `JSONL` (JSON Lines). Jede Zeile der Datei ist ein eigenes, valides JSON-Objekt.
```json
{"messages": [{"role": "user", "content": "Beschwerde über den Kaffee"}, {"role": "assistant", "content": "Sehr geehrter Kunde, wir entschuldigen uns für den kalten Kaffee..."}]}
```
- **Faustregel:** Je höher die Qualität der Trainingsdaten, desto besser das Fine-Tuning. ("Garbage in, Garbage out").

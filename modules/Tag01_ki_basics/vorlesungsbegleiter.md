# Vorlesungsbegleiter: KI Basics, Cloud-Setup & Evolution

Dieser Guide führt dich durch die grundlegenden Konzepte des ersten Vorlesungstages.

## 1. Amara's Law & KI im Alltag
"Wir neigen dazu, die kurzfristige Wirkung einer Technologie zu überschätzen und die langfristige Wirkung zu unterschätzen." (Roy Amara).
Künstliche Intelligenz steuert bereits heute unbemerkt unseren Alltag (TikTok-Algorithmen, Spam-Filter, Kreditkarten-Fraud-Detection). LLMs (Large Language Models) sind der nächste Schritt: Sie fungieren als "präfrontaler Cortex", der komplexe Sprache und Logik verarbeiten kann.

### 📝 Übung: Erstes Prompting (Kaltstart)
Gehe auf ChatGPT oder Claude und stelle eine betriebswirtschaftliche Frage (z.B. "Wie berechne ich den Break-Even-Point?"). Analysiere die Antwort: Ist sie zu generisch? Fehlt der Kontext? Dies ist der Ausgangspunkt, um zu verstehen, warum "Prompt Engineering" notwendig ist.

## 2. Software 1.0 vs. 2.0
- **Software 1.0:** Ein Programmierer schreibt explizite Regeln (Wenn A, dann B).
- **Software 2.0:** Wir geben der Maschine Daten und die gewünschten Ergebnisse. Die Maschine lernt die Regeln selbstständig durch *Forward- und Backpropagation*.
*(Erinnere dich an das ineffiziente "Bananen-Enten-Beispiel" aus der Vorlesung).*

### 🛠️ Cloud-Setup
Um künftig eigene Agenten zu bauen, benötigen wir Entwickler-Accounts:
1. **[GitHub](https://github.com/):** Für Code-Hosting und Versionskontrolle.
2. **[Hugging Face](https://huggingface.co/):** Das "GitHub für KI-Modelle".
3. **[OpenRouter](https://openrouter.ai/):** Unser Gateway, um über eine einzige API auf fast alle Modelle (GPT-4, Claude, Llama 3) zugreifen zu können.

## 3. Tokenisierung & Die "Lunchbox-Strategie"
LLMs verstehen keine Wörter, sie verstehen nur Zahlen. Ein Text wird in "Tokens" zerlegt (1 Token ≈ 0,75 Wörter).
- **Kosten & Limits:** Jedes Token kostet Geld (bei Cloud-APIs) und das "Context Window" (das Kurzzeitgedächtnis der KI) ist begrenzt.
- **Die Lunchbox-Strategie:** Für kleine, spezifische Aufgaben reichen oft kleine lokale Modelle (SLMs - Small Language Models) aus. Sie sind offline, sicher und kostenlos – wie ein mitgebrachtes Pausenbrot statt eines teuren Restaurantbesuchs.

### 📝 Übung: Parameter-Tuning
Suche online nach einem "Token Calculator" (z.B. von OpenAI). Gib einen Text ein und beobachte, wie er in Tokens zerlegt wird.

## 4. Reasoning & System 2 Thinking
Nicht alle KIs "denken" gleich. Daniel Kahneman unterscheidet zwischen:
- **System 1:** Schnell, intuitiv (klassische LLMs wie GPT-4o).
- **System 2:** Langsam, logisch, planend (Reasoning-Modelle wie OpenAI o1, o3 oder DeepSeek-R1). Diese Modelle generieren eine versteckte "Chain-of-Thought" (Gedankenkette), bevor sie antworten.

---
[[Projekt_KI_VL]]

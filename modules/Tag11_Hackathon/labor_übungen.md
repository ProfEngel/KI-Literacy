# Laborübungen: Hackathon-Challenges

Hier findet ihr die detaillierten Aufgabenbeschreibungen für eure Projekte. Wählt **eine** Challenge aus.

## Challenge A: Der "Agentic Business Assistant"
**Ziel:** Ein KI-System bauen, das kognitive Arbeit (Verstehen) mit operativer Arbeit (Handeln) verbindet.

1. **Setup:** Erstellt eine n8n-Instanz oder nutzt Antigravity.
2. **Datenbasis:** Nutzt den Ordner `labor_daten/demodokumente/` als Wissensbasis für euren Agenten (z.B. mittels RAG).
3. **Workflow:**
   - E-Mail-Eingang simulieren (Webhook).
   - KI-Knoten: Intent-Classification & Sentiment-Analyse.
   - Routing: Kritische Beschwerden an einen Menschen (Slack/E-Mail), Standardanfragen automatisch beantworten.
4. **Validierung:** Zeigt in der Demo, wie der Agent auf eine "wütende" Reklamation anders reagiert als auf eine "freundliche" Frage.

## Challenge B: Die "Data Insights & Ethics" Engine
**Ziel:** Daten analysieren und gleichzeitig die ethische Verantwortung (Bias) prüfen.

1. **Daten:** Nutzt die Datei `labor_daten/datascience/GolfSpielen.csv` oder einen eigenen Datensatz.
2. **Analyse:** Führt eine explorative Datenanalyse (EDA) in Orange3 durch. Erstellt mindestens 3 aussagekräftige Visualisierungen.
3. **Modellierung:** Trainiert ein Modell (z.B. Random Forest), um eine Zielvariable vorherzusagen.
4. **Ethics-Audit:** 
   - Untersucht das Modell auf "Hidden Bias". Werden bestimmte Merkmale (z.B. Alter/Geschlecht) übervorteilt?
   - Schreibt eine 1-seitige Bewertung gemäß der **EU AI Act Risikopyramide**.

## Challenge C: Die "Multimodale Content Machine"
**Ziel:** Ein konsistentes Marken-Erlebnis über verschiedene Medienformate hinweg erschaffen.

1. **Konzept:** Definiert eine fiktive Marke oder Kampagne.
2. **Identity Bundle:** Erstellt einen "Master-Character" Prompt. Nutzt diesen, um 3 Bilder in verschiedenen Szenen zu generieren (z.B. im Büro, im Wald, im Labor), wobei die Person erkennbar dieselbe bleibt.
3. **Bewegtbild:** Nutzt eines der Bilder als Startframe für eine 5-sekündige Videosequenz (Kamerafahrt/Orbit).
4. **Branding:** Erstellt ein Logo-Konzept und einen passenden Jingle-Prompt (Suno/Udio).

---
Viel Erfolg beim Hacken!

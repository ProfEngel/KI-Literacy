# Quellen und Aussagegrenzen · W06

Geprüft 09.11.2026. Zwei Recherchezyklen mit Originalprüfung und Gegenprüfung; keine erneute Erfindung von Quellen.

## [U1] Dokumente, RAG und Memory in Sprachmodellen

Nicht im Dokument ausgewiesen; vom Nutzer bereitgestellt · 2026 (Dateimetadaten, kein gesichertes Publikationsdatum) · interne Nutzerreferenz, nicht mitgeliefert

Beleg: Zwölf bildbasierte PDF-Seiten; Schreibtisch, Aktenschrank, Spürhund und Haus-/Raumstruktur als Metaphern.

Prüfung: Alle zwölf Seiten gerendert und visuell gelesen. Keine auslesbare Textschicht. Absolute Leistungsversprechen und pauschale Seiten-/Prozentgrenzen müssen separat geprüft oder weggelassen werden.

Grenzen: Interne Referenz im Werkstattordner, bewusst nicht im Nutzungspaket enthalten.

Folien: w06-start, w06-knowledge-workshop

## [SQL1] SQLite FTS5 Extension

SQLite Development Team · o. J. · https://www.sqlite.org/fts5.html

Beleg: FTS5 ermöglicht Volltextsuche, Tokenisierung, Präfix-/Phrasenabfragen und Rangfolgen; diese Suchfunktion ist nicht gleichbedeutend mit einem allgemeinen Verständnis von Inhalten.

Prüfung: Originalseite geöffnet; Übersicht und Suchsyntax geprüft.

Grenzen: Keine allgemeine Millisekunden-Garantie, keine 80-Prozent-Abdeckungsquote. SQL und Volltextsuche nicht gleichsetzen.

Folien: w06-knowledge-workshop, w06-rag-lab

## [MM1] EmbeddingGemma 2 model card

Google DeepMind · 2026 · https://ai.google.dev/gemma/docs/embeddinggemma/model_card_2?hl=en

Beleg: EmbeddingGemma 2 unterstützt Text, Bild, Audio und Video in einem gemeinsamen Embeddingraum. Die Modellkarte nennt 768 Ausgabedimensionen und getrennt ladbare Modalitätsencoder.

Prüfung: Originalmodellkarte geöffnet und Modalitäten/Architektur geprüft; Produkteinführung 06.10.2026 im offiziellen Google-Blog gegengeprüft.

Grenzen: Nicht mit einem antwortgenerierenden Chatmodell gleichsetzen. Keine allgemeine Qualitätsgarantie oder pauschale On-device-Hardwarezusage; passende Encoder und Verarbeitung nötig.

Folien: w06-knowledge-workshop, w06-media, w06-compass

## [RAG1] Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

Patrick Lewis et al. · 2020 · https://arxiv.org/abs/2005.11401

Beleg: RAG verbindet ein generierendes Modell mit abgerufenem externem Wissen. Abruf und Antworterzeugung sind unterschiedliche Funktionen.

Prüfung: arXiv-Originalseite und Abstract geöffnet. NeurIPS-Seite lieferte Timeout; auf Autorenversion gewechselt.

Grenzen: Kein Beweis, dass Quellenabruf Halluzinationen ausschließt. Das ursprüngliche konkrete Modell ist nicht mit sämtlichen heutigen RAG-Systemen gleichzusetzen.

Folien: w06-rag-lab, w06-detective, w06-bigpicture, w06-compass

## [CTX1] Lost in the Middle: How Language Models Use Long Contexts

Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni und Percy Liang · 2024 · https://aclanthology.org/2024.tacl-1.9/

Beleg: In den untersuchten Aufgaben und Modellen hängt die Nutzung relevanter Kontextinformation von deren Position ab. Ein großes Kontextfenster garantiert keine fehlerfreie Nutzung sämtlicher Inhalte.

Prüfung: ACL-Anthology-Seite, Autoren, Abstract, Publikationsdaten und DOI geprüft.

Grenzen: Keine allgemeine 50-Seiten-Grenze; historische untersuchte Modelle sind kein pauschaler Benchmark heutiger Produkte.

Folien: w06-start, w06-knowledge-workshop, w06-compass

## [MEM1] Stores · Cross-thread long-term memory

LangChain / LangGraph · o. J. · https://github.com/langchain-ai/docs/blob/main/src/oss/langgraph/stores.mdx

Beleg: Gespeicherte Informationen können nach Namespaces organisiert, gesucht und in spätere Modellaufrufe übernommen werden. Speichern, Abrufen und aktueller Modellkontext sind unterschiedliche Vorgänge.

Prüfung: Originaldatei geöffnet; store.put/store.search, Namespaces, Metadaten und spätere Modellaufrufe gelesen.

Grenzen: Beispiel einer Implementierung, kein allgemeiner Memory-Standard. Namespaces ersetzen keine Berechtigungsprüfung; keine automatische Wissenserweiterung durch bloßes Speichern behaupten.

Folien: w06-knowledge-workshop, w06-rag-lab, w06-detective, w06-compass

## [SEC1] LLM01:2025 Prompt Injection

OWASP Gen AI Security Project · 2025 · https://genai.owasp.org/llmrisk/llm01-prompt-injection/

Beleg: Externe Dokumente und multimodale Inhalte können indirekte Anweisungsangriffe enthalten. RAG beseitigt diese Risiken nicht.

Prüfung: Original geöffnet; indirekte und multimodale Angriffe sowie Grenzen von RAG gelesen.

Grenzen: Ein Prompt allein bietet keinen verlässlichen Schutz. In der Lehrdemo keine echten Daten, Zugangsdaten oder autonomen Außenaktionen.

Folien: w06-rag-lab, w06-detective

## [INPUT1] File inputs · How it works

OpenAI · o. J. · https://developers.openai.com/api/docs/guides/file-inputs

Beleg: Die Dokumentation unterscheidet die Verarbeitung von PDF-Seitenbildern und Text von anderen Dateiformaten. Reine Textextraktion erhält eingebettete Bilder oder Diagramme nicht automatisch.

Prüfung: Über offizielle Dokumentationssuche gefunden und Original mit fetch_openai_doc gelesen.

Grenzen: API-Verhalten nicht pauschal auf jeden ChatGPT-Tarif, jede App oder andere Anbieter übertragen. Unterrichts-Upload konkret testen, Text-/Bild-Fallback anbieten.

Folien: w06-start, w06-media, w06-detective

## [CHAT1] Prompting · Add context

OpenAI / ChatGPT Learn · o. J. · https://learn.chatgpt.com/docs/prompting

Beleg: Dokumente und separate Bilder können als Aufgabenmaterial dienen; beim Bild sollte der relevante Bereich ausdrücklich benannt werden.

Prüfung: Nach offizieller Suche Original mit fetch_openai_doc geöffnet; Passagen zu Anhängen und visuellen Inputs gelesen.

Grenzen: Keine Garantie für jede Medienart, Kontoverfügbarkeit oder korrekte Antwort; Übungsergebnis gegen die Materialien prüfen.

Folien: w06-media, w06-detective, w06-compass

## [A1] Building effective agents

Anthropic Engineering · 2024 · https://www.anthropic.com/research/building-effective-agents

Beleg: Vordefinierte Workflows von modellgesteuerter Wahl nächster Schritte und Tools unterscheiden; kleinste passende Lösung bevorzugen.

Prüfung: Primärseite geöffnet und relevante Passage gelesen.

Grenzen: Der Artikel selbst weist auf seit 2024 veränderte Werkzeuge hin. Nur stabile konzeptionelle Unterscheidung verwenden.

Folien: w06-bigpicture, w06-compass

## [IS1] Informationssystem-Architektur

Robert Winter · o. J. · https://wi-lex.de/lexikon/informations-daten-und-wissensmanagement/informationsmanagement/information/informationssystem-architektur/

Beleg: Informationssysteme verbinden Aufgaben, Technik und Menschen. LLM ist Technik; Verantwortung und Ziele verbleiben bei Menschen.

Prüfung: Primärseite geöffnet und relevante Passage gelesen.

Grenzen: Übertragung auf LLM-Agenten ist eigene didaktische Analogie, keine Behauptung der Originalquelle.

Folien: w06-bigpicture

## [C1] Permissions – Permission modes

OpenAI · o. J. · https://learn.chatgpt.com/docs/permission-modes#permission-modes

Beleg: Lokale Aktionen, Dateiedits, Befehle und Internetzugriffe werden durch Berechtigungen begrenzt; anfänglich mit Rückfragen arbeiten.

Prüfung: Primärseite geöffnet und relevante Passage gelesen.

Grenzen: official; via OpenAI Docs gesucht und Abschnitt abgerufen

Folien: w06-compass

## [T1] Trinity Agenten – Praxisleitfaden

Prof. Dr. Mathias Engel · 2026 · https://profengel.github.io/KI-Literacy/trinity-agenten.html

Beleg: Erster Agent im Hub, zusätzliche Spezialisten als Kacheln, gemeinsames Memory zum Nachschlagen und geprüften Merken, austauschbares LLM und Sicherheitsprüfungen.

Prüfung: Lokale veröffentlichte Fassung und Medienmanifest gelesen.

Grenzen: eigene didaktische Architektur, nicht unabhängiger Leistungsnachweis

Folien: w06-compass

## [AA1] Intelligence Benchmarking Methodology

Artificial Analysis · o. J. · https://artificialanalysis.ai/methodology/intelligence-benchmarking

Beleg: Ein definierter Aufgabenmix liefert Vergleichswerte. Modellwahl zusätzlich nach Aufgabe, Kosten, Zeit und eigener Gegenprobe treffen.

Prüfung: Primärseite geöffnet; für Plan ausgewertet.

Grenzen: Keine undatierten SOTA-Sieger oder Gleichsetzung von Benchmarkwert und universeller Eignung.

Folien: w06-compass

## [F1] Introduction – LLM Course

Hugging Face · o. J. · https://huggingface.co/learn/llm-course/chapter1/1

Beleg: Einführung in Sprachmodelle, Tokenizer und Weitertraining; Grundlage für den Begriffs-Kompass.

Prüfung: Primärseite geöffnet; für Plan ausgewertet.

Grenzen: Begriffsspezifische Aussagen und Metaphergrenzen vor Bildproduktion weiter prüfen; diese Einführung allein belegt nicht alle 20 Definitionen.

Folien: w06-compass

## [F2] Introduction to Instruction Tuning with SmolLM3

Hugging Face · o. J. · https://huggingface.co/learn/smol-course/unit1/1

Beleg: Kleinere Sprachmodelle können gezielt weitertrainiert werden; Fine-Tuning ist nicht bloßer Dokumentenimport.

Prüfung: Primärseite geöffnet; für Plan ausgewertet.

Grenzen: Keine Behauptung, das dortige Modell sei im November 2026 das beste kleine Modell.

Folien: w06-compass

## [D1] Text generation · Transformers 4.50.0

Hugging Face · o. J. · https://huggingface.co/docs/transformers/v4.50.0/en/main_classes/text_generation

Beleg: Temperature beeinflusst Token-Auswahl; kein Wahrheitsregler.

Prüfung: Geöffnet und relevante Passagen geprüft.

Grenzen: Primärdokumentation

Folien: w06-compass

## [D3] Gemini policy guidelines

Google · o. J. · https://gemini.google/policy-guidelines/

Beleg: Probabilistische Erzeugung und Grenzen; plausible Ausgabe kann falsch sein.

Prüfung: Geöffnet und relevante Passagen geprüft.

Grenzen: Primärdokumentation

Folien: w06-compass

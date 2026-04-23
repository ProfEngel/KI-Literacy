# 💬 Demoprompts: Teste deinen Seminararbeit-Agenten

In diesem Dokument findest du verschiedene Prompts, um die Fähigkeiten des Agenten in OpenWebUI zu testen. Diese Prompts zeigen, wie das Zusammenspiel von **System-Prompt**, **Skills** und **RAG-Wissen** funktioniert.

---

## 🧪 Prompt 1: Der "Didaktik-Test" (KI-VL Stil)
**Ziel:** Testet die Nutzung des RAG-Wissens und die Umsetzung des didaktischen Stils aus Kapitel 1.

> „Basierend auf unserer Knowledge-Collection **#Literatur**, erstelle bitte einen ersten Entwurf für die Einleitung unserer Seminararbeit. 
> 
> Nutze dabei exakt den Skill **stil** (didaktisch, mit Analogien zur 'Entzauberung'). Gehe insbesondere auf die Problemstellung aus **entwurf** ein: Warum ist der plötzliche Einzug von LLMs in den Uni-Alltag eine ethische Herausforderung? 
> 
> Belege deine Aussagen mit konkreten Quellen aus der UNESCO-Guidance oder den Bias-Texten und achte auf korrekte Zitation gemäß **quellen**.“

**Was passiert hier?**
Der Agent greift auf die hochgeladenen Dokumente zu, wendet den "Erklärer"-Tonfall an und achtet gleichzeitig auf die wissenschaftlichen Formalia.

---

## 🧘 Prompt 2: Der "Philosophische Test" (Hesse-Stil)
**Ziel:** Testet die stilistische Flexibilität des Agenten.

> „Wir müssen uns dem Thema 'Bias und Diskriminierung' (Kapitel 3.2 laut **entwurf**) widmen. 
> 
> Bitte schreibe eine tiefgründige Betrachtung darüber, wie Algorithmen unsere Sicht auf die Welt verzerren können. Nutze hierfür den Skill **stil_hesse** – sei poetisch, suchend und introspektiv. 
> 
> Referenziere dabei die Erkenntnisse aus der Literatur zum Thema 'Algorithmic Bias 2025' aus unserer Knowledge-Base, aber bewahre die Ruhe und den Rhythmus eines Suchenden.“

**Was passiert hier?**
Trockene Fakten über Algorithmen werden in einen poetischen, fließenden Text verwandelt. Dies zeigt, dass "akademisch" nicht immer "trocken" bedeuten muss.

---

## 🔍 Prompt 3: Der "RAG-Deep-Dive" (Quellen-Vergleich)
**Ziel:** Testet die Fähigkeit des Agenten, verschiedene Quellen aus der Collection zu synthetisieren.

> „Vergleiche die Position der UNESCO (aus **unesco_guidance_2023**) mit der aktuellen Debatte um 'Post-Plagiarism' (aus **post_plagiarism_2024**). 
> 
> Wo gibt es Überschneidungen beim Thema 'menschliche Handlungsfähigkeit' (Agency) und wo unterscheiden sich die Fokusbereiche? Erstelle dazu eine übersichtliche Tabelle und nutze den Skill **stil** für die abschließende Einordnung.“

**Was passiert hier?**
Der Agent muss aktiv in mehreren Dokumenten suchen und die Informationen logisch verknüpfen (Synthese-Leistung).

---

## ✍️ Prompt 4: Der "Lektorat-Check"
**Ziel:** Testet die Qualitätssicherung.

> „(Füge hier einen Textabschnitt ein, den du selbst geschrieben hast).
> 
> Bitte prüfe diesen Textabschnitt anhand der Kriterien im Skill **lektorat**. Achte besonders auf den 'Roten Faden' und logische Brüche. Markiere Änderungen deutlich und erkläre mir, warum du sie vorschlägst.“

**Was passiert hier?**
Der Agent agiert als Tutor/Lektor und gibt konstruktives Feedback basierend auf einer festen Checkliste.

---

## 🏗 Prompt 5: Struktur-Erweiterung
**Ziel:** Planung neuer Inhalte basierend auf dem Blueprint.

> „Schau dir den Punkt 4 'Lösungsansätze' in unserem **entwurf** an. Basierend auf den Dokumenten in **#Literatur**, entwickle drei konkrete Handlungsempfehlungen für Dozierende, um die KI-Literacy in ihren Kursen zu fördern. Nutze dafür das Format einer 💡 Infobox.“

**Was passiert hier?**
Der Agent nutzt die Gliederungsvorgabe und füllt sie mit Inhalten aus der Wissensbasis.

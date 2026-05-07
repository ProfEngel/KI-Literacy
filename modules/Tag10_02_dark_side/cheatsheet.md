# Cheat-Sheet: The Dark Side (Tag 10)

Dieses Cheat-Sheet fasst die wichtigsten Angriffsvektoren und systemimmanenten Schwächen von Sprachmodellen zusammen.

## 1. Halluzinationen vs. Grounding
- **Halluzination:** Wenn ein LLM eine Information frei erfindet (z.B. falsche Gerichtsurteile zitiert), weil es statistisch wahrscheinlich, aber faktisch falsch ist. LLMs "lügen" nicht absichtlich, sie füllen lediglich Wissenslücken mit plausiblen Wortfolgen.
- **Grounding (Verankerung):** Die Gegenmaßnahme. Das Modell wird gezwungen, seine Antworten strikt auf eine beigefügte Quelle (z.B. per RAG) abzustützen und die "Temperatur" (Kreativität) auf 0 zu setzen.

## 2. Model Collapse (Varianzverlust)
Was passiert, wenn KIs mit Texten trainiert werden, die von anderen KIs geschrieben wurden?
- KIs tendieren zum statistischen Durchschnitt ("glatte Sprache").
- Wenn KIs nur noch KI-Daten konsumieren, verschwinden die seltenen Wörter und sprachlichen Nuancen der Menschheit.
- Nach ca. 4-5 Generationen degeneriert das Modell komplett (es produziert repetitiven Unsinn). Menschliche Rohdaten werden zur wertvollsten Ressource.

## 3. Data Poisoning
- Ein gezielter Angriff auf die Trainingsdaten eines Modells.
- **Beispiel (Nightshade):** Künstler verändern unsichtbare Pixel in ihren Bildern. Wenn eine KI diese Bilder scrapt und trainiert, lernt sie z.B. statt einem "Hund" eine "Katze" zu malen. Die KI "vergiftet" sich selbst.

## 4. Red Teaming & Prompt Injection
- **Red Teaming:** IT-Sicherheitsexperten spielen den "Angreifer", um die Schwachstellen eines eigenen Modells vor dem Release zu finden.
- **Prompt Injection (Jailbreaking):** Ein Angriff, bei dem man durch geschicktes Formulieren (z.B. Rollenspiele "Wir spielen ein Theaterstück...") die ethischen Sicherheitsfilter des LLMs aushebelt, sodass es verbotene Anweisungen (z.B. Bauanleitung für eine Bombe) ausführt.

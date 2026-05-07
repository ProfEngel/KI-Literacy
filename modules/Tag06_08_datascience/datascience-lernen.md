### **Anleitung zur effektiven Nutzung des Data-Science-Tutors**

Für Data Science und Python gibt es hier ein vollständiges Repo: https://github.com/ProfEngel/KI-Literacy/tree/main/datascience

Um das Beste aus dem Data-Science-Tutor herauszuholen – insbesondere in Verbindung mit einer Jupyter-Sandbox (Code Interpreter) – bietet sich folgende Herangehensweise an:

### Vorgehensweise:

1. _Neuen Chat und Start des Data-Science-Lernens:_ Öffne ein neues Chat-Fenster und gib zunächst Prompt 1 ein. Dieser Prompt zeigt dem Tutor, dass er sich nun als Data-Science-Mentor auf dich einlässt und dir einen Fahrplan aufstellt.
2. _Lern-Nugget in drei Stufen:_ Aus der Übersichtsliste des Ergebnisses aus Prompt 1 greifst du nun ein Thema heraus (z.B. Explorative Datenanalyse oder Train-Test-Split). Dieses Thema gibst du in Prompt 2 ein. Dadurch wird das Thema in drei Schwierigkeitsstufen (inkl. Business-Kontext) erklärt.
3. _Sokratischer Dialog zur Festigung:_ Wenn das Thema erklärt wurde, kannst du mittels Prompt 3 das Thema vertiefen. Der Tutor stellt dir Fragen, um zu prüfen, ob du die Datenlogik und das Modellierungsziel verstanden hast, bevor du selbst programmierst.
4. _Code-Review und Refactoring:_ Wenn du selbst Python-Code für deine Datenanalyse schreibst (z.B. Pandas oder Scikit-Learn), kannst du Prompt 4 nutzen. Der Tutor gibt dir nicht einfach die Lösung, sondern korrigiert deinen Code nach Clean-Code-Prinzipien.
5. _Das Mini-Projekt (Rollenspiel):_ Um das Wissen in der Praxis zu testen, startest du mit Prompt 5 ein interaktives Rollenspiel. Der Tutor simuliert ein reales Business-Szenario, das du Schritt für Schritt als "Junior Data Scientist" lösen musst.

_Hier die passenden Prompts, die du einfach kopieren und in den Chat einfügen kannst:_

---

### **Prompt 1: Übersichtsliste der Lerninhalte im Data Science**

Bei der Initialisierung des Chats dem Chatbot zu verstehen geben, dass er als Senior Data Scientist agieren und einen strukturierten Lernplan erstellen soll.

```markdown
**Aufgabe:** Erstelle eine Übersichts-Checkliste, die ich abhaken kann, über die Themen, die man im angewandten Data Science (mit Python) nacheinander lernen sollte.
**Kontext:** Ich möchte Data Science lernen und suche eine strukturierte Übersicht der wichtigsten Phasen. Die Liste sollte dem CRISP-DM-Modell folgen (Business Understanding, Data Understanding, Data Preparation, Modeling, Evaluation, Deployment). Bitte zeige mir hier noch keine Übungen, sondern nur die strukturierte Checkliste inkl. der wichtigsten Python-Bibliotheken (Pandas, Scikit-Learn, Plotly).
**Persona:** Mentor für Data Science, der einen neuen Junior einarbeitet.
**Ton:** Klar, strukturiert, praxisorientiert und motivierend.
```

### **Prompt 2: Erläuterung des aktuellen Themas in drei Niveaus**

Wähle je nach Lernfortschritt ein Thema aus der Liste. Das gewählte Thema in den geschweiften Klammern `{aktuelles Thema hier einfügen}` eintragen.

```markdown
**THEMA:** `{aktuelles Thema hier einfügen}`
**Aufgabe:** Erkläre mir obiges Thema in drei Schwierigkeitsstufen inkl. Beispielen (in Python-Codeblöcken) und Business-Relevanz (warum machen wir das?).
**Kontext:** Ich bin Einsteiger in Data Science und möchte es vertiefend lernen. Erkläre es in drei Stufen: 
- Level 1 (Grundschulniveau): Einfache Analogie aus dem Alltag.
- Level 2 (Abiturniveau): Die mathematische oder logische Funktionsweise.
- Level 3 (Masterniveau): Die konkrete Python-Implementierung und Metriken zur Evaluation.
Gehe dabei auf alle relevanten Inhalte des Lern-Nuggets ein.
**Persona:** Analytischer und geduldiger Data Science Tutor.
**Ton:** Unterstützend und herausfordernd.
```

### **Prompt 3: Sokratischer Dialog (Fokus: Datenverständnis & EDA)**

Nutze diesen Prompt, um ein Thema (z.B. Umgang mit fehlenden Werten, Ausreißern oder Modellauswahl) im Dialog zu erarbeiten.

```markdown
**THEMA:** `{aktuelles Thema hier einfügen}`
**Aufgabe:** Führe mit mir einen sokratischen Dialog über das oben genannte Data-Science-Thema. Stelle mir gezielte Fragen, um mein Verständnis für die Daten und Algorithmen zu testen. 
⚠️ **WICHTIG:**  
- Stelle eine Frage und WARTE auf meine Antwort.  
- Gehe erst weiter, nachdem ich geantwortet habe.  
- Falls meine Antwort unvollständig ist, stelle eine Gegenfrage, anstatt die Lösung zu verraten.  
- Falls ich es richtig erklärt habe, vertiefe das Thema mit einer Transfer-Frage (z.B. "Wie würde sich das bei einem Imbalanced Dataset verhalten?").  
- Zeige mir zum Schluss einen kleinen fiktiven Datensatz oder Python-Code mit einem methodischen Fehler, den ich finden soll.  
**Persona:** Ein Lead Data Scientist, der seinen Trainee prüft.  
**Ton:** Professionell, fragend, methodisch genau.
```

### **Prompt 4: Code-Review & Refactoring Tutor**

Nutze diesen Prompt, wenn du eigenen Code zur Datenvorbereitung, Visualisierung oder Modellierung geschrieben hast.

```markdown
**Aufgabe:** Ich werde dir in meinen nächsten Nachrichten Python-Code für meine Data-Science-Pipeline schicken. Bitte agiere als "Senior Data Scientist" und mache ein Code-Review. 
Gehe dabei so vor:
1. Lobe, was gut funktioniert und methodisch korrekt ist.
2. Zeige auf, wo Code ineffizient ist (z.B. For-Schleifen statt Pandas-Vektorisierung) oder gegen Best Practices verstößt.
3. Weist mein Code logische Data-Science-Fehler auf (z.B. Data Leakage beim Train-Test-Split, keine Skalierung vor KNN)?
4. Gib mir Hinweise, wie ich den Code verbessern kann, ABER schreibe nicht sofort die perfekte Lösung. Hilf mir, selbst darauf zu kommen.
Bitte bestätige, dass du bereit bist, und frage nach meinem ersten Code-Snippet.
```

### **Prompt 5: Das interaktive Mini-Projekt (Rollenspiel)**

Wenn du bereit für eine größere Herausforderung bist, lass den KI-Tutor einen realen Business-Case simulieren.

```markdown
**Aufgabe:** Lass uns ein interaktives Rollenspiel machen. Du bist der "Lead Data Scientist" bei einem echten Unternehmen (denk dir eine Branche aus) und ich bin der "Junior Data Scientist". 
Du gibst mir einen konkreten, fiktiven Fall (z.B. Churn-Prediction, Fraud-Detection oder Umsatzprognose) und begleitest mich durch den Data-Science-Prozess.
Führe mich nacheinander durch diese Schritte:
1. Geschäftsverständnis (Business Understanding definieren)
2. Datenverständnis (Data Understanding & EDA)
3. Datenvorbereitung (Data Preparation)
4. Modellierung (Modeling)
5. Evaluation (Interpretation der Metriken für das Management)
Gib mir immer nur eine kleine Aufgabe für einen Schritt. Warte auf meinen Python-Code oder meine methodische Antwort, bewerte sie kurz und gib mir dann die nächste Aufgabe. Beginne mit dem Szenario!
```

### **Prompt 6: Leerer Python-Codeblock für die Sandbox**

Nutze diesen Prompt, um einen leeren Block anzufordern, in den du direkt deinen Code eintippen kannst (ideal für den Code Interpreter / Jupyter in OpenWebUI).

```markdown
Erstelle mir bitte einen leeren Codeblock für Python. Schreibe in den Codeblock nur einen kurzen Kommentar, dass ich hier meinen Data-Science-Code eintragen und direkt via Interpreter ausführen kann.
```

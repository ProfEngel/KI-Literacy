### **Anleitung zur effektiven Nutzung des Python-Tutors**

Für Data Science und Python gibt es hier ein vollständiges Repo: https://github.com/ProfEngel/KI-Literacy/tree/main/datascience
Um das Beste aus dem Python Tutor herauszuholen bietet sich folgende Herangehensweise an.  Hier ein Beispiel: https://kaepsele.hfwu.de/s/c0bc412e-07f8-41d0-97f7-68bb719cc3e1

### Vorgehensweise:

1. _Neuen Chat und Start des Python-Lernens:_ Öffne ein neues Chat-Fenster und gib zunächst Prompt 1 ein. Dieser Prompt zeigt dem Tutor, dass er sich nun auf den Studierenden in Bezug auf Python einlässt.
2. _Lern-Nugget in drei Stufen:_ Aus der Übersichtsliste des Ergebnisses aus Prompt 1, greift man nun im Idealfall beginnend von oben je ein Thema heraus (z.B. Variablen). Dieses Thema nun in Prompt 2 eingeben. Dadurch wird einem das jeweilige Thema in drei Schwierigkeitsstufen erklärt.
3. _Sokratischer Dialog zur Festigung:_ Wenn das Thema erklärt wurde, kann man nun mittels Prompt 3 das Thema festigen. Dies geschieht mittels Dialog und Diskussion mit dem Tutor. D.h. der Tutor stellt Fragen um zu sehen, ob es verstanden wurde. Dies kann jederzeit unterbrochen werden, z.B. durch eigenes Nachfragen.
4. _Übungen:_ Wenn das Thema aus Sicht des Studierenden verstanden wurde, kann mittels Prompt 4 passende Übungen zu diesem Thema vom Tutor erzeugt werden. Die Lösungen können direkt hier im Chat in den leeren Codeblock eingegeben und per Ausführen geprüft werden. Sollte es hier Schwierigkeiten geben, dies dem Tutor angeben (mach bitte einfachere Beispiele) oder den eigenen (fehlerhaften) Code zurückgeben, damit der Tutor es löst.
5. _Nächstes Thema mit 2. - 4. durchgehen:_ Sollte das Thema mit Prompt 2-4 verstanden sein, kann das nächste Thema erneut mit der hier geschilderten Vorgehensweise für 2. - 4. durchgeführt werden.

_Hier die passenden Prompts:_

### **Prompt 1: Übersichtsliste der Lerninhalte in Python**

Bei der Initialisierung des Chats, dem Chatbot zu verstehen geben, dass er sich als Tutor verhalten soll und den Lernenden beim Erlernen von Python unterstützen soll.

```markdown
**Aufgabe:** Erstelle eine Übersichts-Checkliste die ich abhaken kann über die Themen, die man in Python nacheinander lernen sollte.
**Kontext:** Ich möchte Python lernen und suche eine strukturierte Übersicht der wichtigsten Themen. Die Liste sollte logisch aufeinander aufbauen, von den Grundlagen bis hin zu fortgeschrittenen Konzepten. Bitte zeige mir hier noch keine Übungen auf. Es genügt die Übersichtsliste.
**Beispiel (Few-Shots):**
*   **Grundlagen:** Variablen, Datentypen, Operatoren
*   **Kontrollstrukturen:** If-Else, Schleifen
*   **Funktionen:** Eigene Funktionen schreiben, Argumente, Rückgabewerte
*   **Datenstrukturen:** Listen, Tupel, Dictionaries, Mengen
*   **Objektorientierte Programmierung:** Klassen, Objekte, Vererbung
*   **Fehlersuche & Debugging:** Try-Except, Logging
*   **Fortgeschrittene Konzepte:** Lambda-Funktionen, List Comprehensions, Generatoren
*   **Externe Bibliotheken:** NumPy, Pandas, Matplotlib für Datenanalyse  
*   **Anwendungsfälle:** Webentwicklung, Automatisierung, KI & Machine Learning
**Persona:** Anfänger*innen, die Python systematisch lernen möchten.
**Ton:** Klar, strukturiert und motivierend.
```

### **Prompt 2: Erläuterung des aktuellen Themas in drei Niveaus**

Wähle je nach Lernfortschritt ein Thema. Das gewählte Thema in den geschweiften Klammern `{aktuelles Thema hier einfügen}`eintragen und dann die Anweisung an den Tutor ausgeben.

```markdown
**THEMA:**  `{aktuelles Thema hier einfügen}`
**Aufgabe:** Erkläre mir obiges Thema in drei Schwierigkeitsstufen ink. Beispielen (in Python-Codeblöcken mit print als Ausgabe) und Logikübungen (also ohne eigenen Programmcode als Übung zu erstellen).
**Kontext:** Ich bin Anfänger auf diesem Fachgebiet und möchte es vertiefend lernen. Daher die drei Schwierigkeitsstufen (Grundschule, Mittelstufe und Studium).. Dabei sollen Inhalte zunächst einfach, dann zunehmend anspruchsvoller erklärt werden. Gehe dabei je Lern-Nugget auf alle relevanten Inhalte ein. (z.B. bei Variablen bitte alle möglichen Variablentypen nennen oder bei If-Else zunächst mit If beginnen, dann If-Else und auch mehrere Fallunterscheidungen aufzeigen)
**Persona:** Anfänger*innen, die interaktiv lernen möchten.
**Ton:** Unterstützend, fragend und herausfordernd.
```

### **Prompt 3: Sokratischer Dialog zum Vertiefen des Themas**

Das aktuelle Thema in den geschweiften Klammern `{aktuelles Thema hier einfügen}`eintragen und dann die Anweisung an den Tutor ausgeben.

```markdown
**THEMA:**  `{aktuelles Thema hier einfügen}`
**Aufgabe:** Führe mit mir einen sokratischen Dialog über das oben genannte Thema. Stelle mir gezielte Fragen, um mein Verständnis zu testen, und führe mich schrittweise zur richtigen Lösung. Solltest Du mir eine Übung erstellen (unvollständiger oder fehlerhafter Python-Code) so bitte stets in einem Python-Codeblock. Gib mir keine Übungen ohne einen Python-Codeblock.
⚠️ **WICHTIG:**  
- Stelle eine Frage und WARTE auf meine Antwort.  
- Gehe erst weiter, nachdem ich geantwortet habe.  
- Falls meine Antwort unvollständig oder falsch ist, stelle eine klärende Gegenfrage anstatt sofort die richtige Antwort zu geben.  
- Falls ich es richtig erklärt habe, vertiefe das Thema mit einer weiteren Frage.  
- Gib mir zum Schluss eine praktische Übung oder zeige mir fehlerhaften Code, den ich korrigieren soll.  
**Kontext:** Ich lerne gerade Python und möchte mein Wissen durch gezielte Fragen vertiefen.  
**Beispiel (Few-Shots):**  
1. **Thema: Funktionen in Python**  
   - **Tutor:** "Warum sind Funktionen in der Programmierung nützlich?"  
   - (❌ KEINE Antwort vom Tutor – warte auf meine Eingabe!)  
   - **Tutor:** "Kannst du mir ein einfaches Beispiel für eine Funktion nennen?"  
   - (❌ KEINE Antwort vom Tutor – warte auf meine Eingabe!)  
   - **Tutor:** "Gut! Jetzt eine praktische Aufgabe: Schreibe eine Funktion, die zwei Zahlen multipliziert und das Ergebnis zurückgibt."  
**Persona:** Geduldiger, interaktiver Tutor.  
**Ton:** Freundlich, motivierend, anpassungsfähig.
```

### **Prompt 4: Übungen**

Das aktuelle Thema in den geschweiften Klammern `{aktuelles Thema hier einfügen}`eintragen und dann die Anweisung an den Tutor ausgeben.

```markdown
**Thema:** `{aktuelles Thema hier einfügen}`
**Aufgabe:** Erstelle drei Aufgaben zum obigen Thema.  
Kontext: Drei Aufgaben mit unterschiedlichen Niveau. Beginne zunächst mit einfachen Aufgaben. Gib nur je die Aufgabentexte, je einen leeren Codeblock und je einen Hinweis aus. Ziel ist, dass ich selbst den Code in den leeren Codeblock eintrage um es zu üben.
```

### **Lerneinheit Statistik für Data Scientists**

Ein Data Scientist benötigt ein fundiertes Grundwissen der Statistik. Hier die wichtigsten Begriffe, welche uns während des Arbeitens im Data Science laufend begegnen werden. Um dies zu wiederholen, vertiefen die unten stehenden Prompts kopieren und ausführen.
_Hier die passenden Prompts:_

### **Prompt 1: Grundbegriffe der Statistik (statistische Einheit, Merkmal, Merkmalsausprägung, Gesamtheiten)**

```markdown
**1.1 Thema: Grundbegriffe der Statistik (statistische Einheit, Merkmal, Merkmalsausprägung, Gesamtheiten)**
Erkläre mir das hier genannte Thema in drei Leveln, je mit darauf aufbauendem Beispiel. Zunächst Level 1 (Grundschulniveau), dann Level 2 (Abiturniveau) und schließlich Level 3 (Masterniveau). Frage mich, ob ich es verstanden habe und gehe nach der Sokratischen Methode auf mich als Lernenden ein. Ich lerne gerade über folgendes Thema: Grundbegriffe der Statistik (statistische Einheit, Merkmal, Merkmalsausprägung, Gesamtheiten)
```

### **Prompt 2: Skalenarten der Statistik**

```markdown
**1.2 Thema: Skalenarten der Statistik**
Erkläre mir das hier genannte Thema in drei Leveln, je mit darauf aufbauendem Beispiel. Zunächst Level 1 (Grundschulniveau), dann Level 2 (Abiturniveau) und schließlich Level 3 (Masterniveau). Frage mich, ob ich es verstanden habe und gehe nach der Sokratischen Methode auf mich als Lernenden ein. Ich lerne gerade über folgendes Thema: Skalenarten der Statistik.
```

### **Prompt 3: Gruppierung, Klassierung, Stetig und diskret**

```markdown
**1.3 Thema: Gruppierung, Klassierung, Stetig und diskret**
Erkläre mir das hier genannte Thema in drei Leveln, je mit darauf aufbauendem Beispiel. Zunächst Level 1 (Grundschulniveau), dann Level 2 (Abiturniveau) und schließlich Level 3 (Masterniveau). Frage mich, ob ich es verstanden habe und gehe nach der Sokratischen Methode auf mich als Lernenden ein. Ich lerne gerade über folgendes Thema: Gruppierung, Klassierung, Stetig und diskret.
```

### **Prompt 4: Univariat, Bivariat, Multivariat (in der Statistik)**

```markdown
**1.4 Thema: Univariat, Bivariat, Multivariat (in der Statistik)**
Erkläre mir das hier genannte Thema in drei Leveln, je mit darauf aufbauendem Beispiel. Zunächst Level 1 (Grundschulniveau), dann Level 2 (Abiturniveau) und schließlich Level 3 (Masterniveau). Frage mich, ob ich es verstanden habe und gehe nach der Sokratischen Methode auf mich als Lernenden ein. Ich lerne gerade über folgendes Thema: Univariat, Bivariat, Multivariat (in der Statistik)
```

### **Prompt 5: Diagramme der Statistik**

```markdown
**1.5 Thema Diagramme der Statistik**
Zeige mir die wichtigsten und am häufigsten genutzte Diagramme im Data Science.  
Gehe dabei wie folgt vor:  
Zeige das jeweilige Diagramm und erkläre es anhand der zuständigen Datenart, Skalenart, Kurzbeschreibung und zwei schriftlichen eingängigen Beispielen.  
Bitte für folgende Diagrammarten:  
1. Histogramm
2. Balkendiagramm  
3. Kreisdiagramm  
4. Streudiagramm  
5. Liniendiagramm  
6. Box-Plot  
7. Heatmap  
8. Baumdiagramm  
9. eigenes Diagramm nach
Zeige die Diagramme zu der jeweiligen Beschreibung des Diagramms mit Beispieldaten in einem Python-Beispielcode an. Der Code-Interpreter kann diesen Code ausführen.
```

### **Prompt 6: Maßzahlen (Mittelwerte, Streumaße, Lagewerte) (in der Statistik)**

```markdown
**1.6 Thema: Maßzahlen (Mittelwerte, Streumaße, Lagewerte) (in der Statistik)**
Erkläre mir das hier genannte Thema in drei Leveln, je mit darauf aufbauendem Beispiel. Zunächst Level 1 (Grundschulniveau), dann Level 2 (Abiturniveau) und schließlich Level 3 (Masterniveau). Frage mich, ob ich es verstanden habe und gehe nach der Sokratischen Methode auf mich als Lernenden ein. Ich lerne gerade über folgendes Maßzahlen (Mittelwerte, Streumaße, Lagewerte) (in der Statistik)
```

### Beispielprompts

### **Prompt für einen leeren Pythoncodeblock!**

Fragen Sie direkt nach einem leeren Codeblock für Python, markdown oder was Sie benötigen wie folgt

```markdown
Erstelle mir bitte einen leeren Codeblock für Python formatiert. Schreibe in den Codeblock in einem Kommentar, dass Ausgaben per print() möglich sind.
```

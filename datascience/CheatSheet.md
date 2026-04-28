# Cheat Sheet: AI Data Science & Code Interpreter

Dieses Blatt dient als Schnelleinstieg für die Arbeit mit dem Jupyter-Interpreter in OpenWebUI.

## 1. System-Prompt für die KI (Nova)
Damit die KI den Interpreter zuverlässig triggert, sollte dieser Block im System-Prompt (oder in einem Model-File) stehen:

```markdown
### CODE INTERPRETER (JUPYTER) – RULES
Du hast Zugriff auf eine Jupyter-Python-Umgebung. 
Ziel: Wenn Rechnen/EDA/ML nötig ist, führe Code aus und interpretiere den Output.

**FORMAT:**
Deine Antwort für Code-Ausführung muss exakt so aussehen:
<code_interpreter type="code" lang="python"> 
# Dein Code hier
</code_interpreter>

**PROZESS:**
1. PHASE A: Nur der Code-Block (kein Text davor/danach).
2. PHASE B: Nach der Ausführung interpretierst du das Ergebnis textlich.
```

---

## 2. Wichtige Python-Bibliotheken (Requirements)
Diese Bibliotheken sollten im Jupyter-Container vorinstalliert sein (`pip install ...`):

- **Pandas:** `pd` – Datenmanipulation und Tabellen.
- **NumPy:** `np` – Mathematische Operationen auf Arrays.
- **Matplotlib / Seaborn:** `plt` / `sns` – Statische Visualisierungen (Charts).
- **Plotly:** Interaktive Charts (Browser-basiert).
- **Scikit-Learn:** `sklearn` – Maschinelles Lernen (Regression, Clustering).
- **Statsmodels:** Detaillierte statistische Tests (p-Werte).

---

## 3. Typische EDA-Befehle (Zum Validieren)
Achte darauf, ob die KI diese Befehle nutzt:
- `df.info()` – Struktur der Daten prüfen.
- `df.describe()` – Statistische Kennzahlen (Mean, Std, Min/Max).
- `df.isnull().sum()` – Fehlende Werte zählen.
- `df.corr()` – Korrelationskoeffizienten berechnen.

---

## 4. Validierungs-Checkliste (Code Literacy)
Bevor du einem Ergebnis vertraust, prüfe:
1. **Datenquelle:** Hat die KI die richtige Datei geladen?
2. **Datenmenge:** Wurden Zeilen gelöscht? Wenn ja, warum (z.B. `dropna()`)?
3. **Achsen:** Sind die Diagramme beschriftet? (Ein Chart ohne Achsenbeschriftung ist wertlos).
4. **Modell-Güte:** Bei Vorhersagen: Wie hoch ist die Accuracy/F1-Score? (Ein Wert von 1.0 deutet oft auf Überanpassung oder Datenlecks hin).

---

## 5. Profi-Prompts (Tag 7 Fokus)
- „Visualisiere den Trend mit **Plotly**, sodass ich die Werte beim Hovern sehen kann.“
- „Übersetze dieses statistische Ergebnis in eine **Management-Empfehlung**.“
- „Führe eine Sensitivitätsanalyse für die Variable X durch.“
- „Erkläre mir diesen Python-Code Zeile für Zeile, als wäre ich ein BWL-Student im 1. Semester.“

---
[[Projekt_KI_VL]]

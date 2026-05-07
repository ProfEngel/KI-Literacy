# Prompt-Vorlagen für KI-Songerzeugung

Diese Vorlagen helfen dabei, präzise und kreative Musik-Prompts für Generatoren wie **Suno**, **Udio** oder lokale Modelle (**AceStep 1.5 XL**) zu erstellen.

---

## 1. Der Master-System-Prompt (Für das LLM)
Kopiere diese Instruktion in deine lokale KI (z.B. Claude, GPT, Antigravity), um sie zu deinem persönlichen Musik-Produzenten zu machen.

```text
Du bist mein AI Song Prompt Builder für Musikgeneratoren (Suno, Udio, AceStep).

Deine Aufgabe:
Wenn ich dir einen Referenzsong nenne, analysierst du die musikalischen Merkmale und erstellst daraus einen neuen, eigenständigen Song-Prompt.

Wichtige Regeln:
- Erstelle KEINE enge Kopie eines bestehenden Songs.
- Nutze Stimmung, Energie, Instrumentierung und Struktur nur als Inspiration.
- Jeder Song ist standardmäßig auf 180 Sekunden (3 Minuten) ausgelegt.
- Gib die Antwort immer in genau 3 getrennten Codeblöcken aus:
  1. Einstellungen
  2. Ausprägung (Style-Prompt)
  3. Lyrics
- Die Ausprägung ist immer auf ENGLISCH (für die KI-Steuerung).
- Die Lyrics sind in der von mir gewünschten Sprache.
- Bei "instrumental": Lyrics-Block = [Instrumental] No vocals.

Format der Ausgabe:
1. Einstellungen (title, bpm, duration, language, vocal type, etc.)
2. Ausprägung (Kompakter englischer Style-Prompt mit Genre, Mood, Instrumentation)
3. Lyrics (Vollständige Struktur: [Intro], [Verse], [Chorus], [Bridge], [Outro])
```

---

## 2. Benutzer-Vorlage (Eingabe)
Nutze dieses Schema, um der KI deine Wünsche mitzuteilen:

```text
Erstelle mir einen neuen Song.

Referenzsong: [Titel] von [Interpret]
Meine Wünsche:
- Sprache: [z.B. Deutsch]
- Stimme: [z.B. Weiblich, kraftvoll]
- Instrumental/Vocals: [z.B. Vocals]
- Stimmung: [z.B. Melancholisch aber treibend]
- Genre: [z.B. Synth-Pop]
- BPM: [z.B. 120]
```

---

## 3. Die intelligente Analyse-Version
Wenn dein Modell (z.B. Claude 3.5) komplexe Analysen beherrscht, nutze diesen Ansatz:

```text
Ich gebe dir einen Referenzsong. Leite daraus ein neues Stück ab:
1. Stilanalyse: Genre, Energie, Mood, Vocal-Charakter, Instrumente.
2. Abstraktion: Behalte die Wirkung, ändere Melodie und Text.
3. Strukturierung: Optimiere den Aufbau für genau 3 Minuten.
4. Ausgabe: 3 Codeblöcke (Settings, Style-Prompt, Lyrics).

Priorität: Klare, technische Begriffe im Style-Prompt statt vager Adjektive.
```

---

## 4. Beispiel für die Ausgabe (Wie es aussehen sollte)

### Block 1: Einstellungen
```text
title: Neon Nights
bpm: 124
duration: 180
timesignature: 4
language: German
keyscale: C Minor
vocal type: Female, ethereal, processed
```

### Block 2: Ausprägung (Style-Prompt)
```text
80s inspired Synth-wave, cinematic atmosphere, driving arpeggios, nostalgic mood, warm analog synthesizers, crisp electronic drums, spacious reverb, powerful melodic chorus, professional studio production.
```

### Block 3: Lyrics
```text
[Intro]
(Synthesizer swelling, rhythmic pulse starts)

[Verse 1]
Die Lichter der Stadt ziehen vorbei...
```

---

## 5. Tipps für bessere Prompts
*   **Widersprüche vermeiden**: Mische nicht "Lo-Fi" mit "Epic Orchestral", es sei denn, du willst experimentellen Glitch.
*   **Vocal-Identität**: Definiere die Stimme präzise (`raspy`, `airy`, `belting`, `autotuned`).
*   **Struktur-Tags**: Nutze in Suno/Udio immer Tags wie `[Drop]`, `[Solo]` oder `[Breakdown]`, um die KI zu steuern.

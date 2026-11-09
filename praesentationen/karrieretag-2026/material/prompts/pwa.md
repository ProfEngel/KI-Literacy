# Phase 2 · Meine KI-Lernwerkstatt als Offline-PWA

Baue im freigegebenen Projektordner eine kleine deutschsprachige PWA „KI-Superkraft – mein Lernsystem“. Thema dieses Vortrags: Software 1.0, Chatbot, Agentic AI, Prompt, Harness, Tools, Skills, Memory und menschliche Prüfung. Zielgruppe: Studierende ohne IT-Vorkenntnisse.

Zuerst reine Software 1.0, KEIN Modellaufruf und keine API. Zehn fachlich korrekte Lernkarten, kurze Zuordnungsfragen mit begründeten Lösungen, Lernen/nochmals üben, Fortschritt, eigene Karten und Notizen. Eine Freitextaufgabe vergleicht bewusst nur die exakte Zeichenfolge und sagt bei Abweichung „nicht exakt gleich – Bedeutung selbst prüfen“, niemals „fachlich falsch“. Musterlösung: „Ein Agent wählt erlaubte Werkzeuge und prüft ihre Ergebnisse.“

Design: ruhig, klar und einfach; Creme #F7F7F5, Petrol #24666A, Salbei #DCEFE1, dunkle Schrift #182C33. Große Schrift, runde Ecken, wenige sichtbare Aktionen, mobil zuerst, Tastatur/Fokus, zugängliche Beschriftungen. Keine Textwüsten, Tracker oder CDN.

Technik: mehrere lokale Dateien, relative Pfade, Manifest mit Icons, versionierter Service Worker. Nach dem ersten vollständigen HTTPS-Aufruf offline lauffähig. iPad/iPhone: Safari → Teilen → Zum Home-Bildschirm. Android/Windows/Mac: Installation soweit vom Browser unterstützt; immer auch im Browser benutzbar. Daten nur lokal, schema- und größenvalidierter JSON-Export/-Import, Reset nur nach Bestätigung. Keine Secrets. Gib Start- und Installationsanleitung.

Prüfe: 1 offline nach erstem Laden; 2 Fortschritt nach Neuladen erhalten; 3 eigene Karte und Export/Import; 4 falscher JSON-Import verändert nichts; 5 Tastatur und Smartphone. Führe technische Sicherheitschecks aus, ohne eine unabhängige Sicherheitsfreigabe zu behaupten. Keine Veröffentlichung oder Konten ohne Rückfrage.

# Vorlesungsbegleiter: Local Deployment (Docker)

Dieser Guide beleuchtet die Theorie hinter dem Aufbau einer lokalen KI-Infrastruktur. Die praktischen Ausführungsbefehle findest du im zentralen `Deployment_Guide.md`.

## 1. Warum lokales Deployment? (Antigravity/VS Code vs. Docker)
In Tag 3 haben wir mit IDEs wie **Antigravity** und **VS Code** gearbeitet. Diese Tools sind brillant für Entwickler, um schnell Agenten zu bauen ("Time-to-Value").
Wenn wir KI jedoch unternehmensweit, datenschutzkonform und skalierbar als Service (SaaS-ähnlich) anbieten wollen, reicht eine IDE nicht aus. Wir benötigen Server, Datenbanken und Schnittstellen. Hier kommt **Docker** ins Spiel.

## 2. Die Schiffscontainer-Analogie
Vor Erfindung des Schiffscontainers war das Verladen von Fracht (Fässer, Kisten, Säcke) chaotisch und fehleranfällig. Ein Container standardisiert die Fracht: Es ist egal, was drin ist, der Kran kann ihn greifen.
**Docker** macht dasselbe für Software:
- Eine App (z.B. OpenWebUI) wird mit all ihren Abhängigkeiten in einen "Container" verpackt.
- Es ist garantiert, dass sie auf Windows, Mac und Linux identisch läuft, ohne dass der Rechner mit hunderten Installationen "zugemüllt" wird.

## 3. Die Komponenten unseres "Rechenzentrums"

### OpenWebUI (Das Interface)
Ein Interface, das stark an ChatGPT erinnert, aber Open Source ist. Es verwaltet Chats, Prompts, RAG-Dokumente und die API-Anbindung. Hier loggt sich der Endanwender ein.

### SearXNG (Die Suchmaschine)
Wenn KIs im Web recherchieren, hinterlassen sie Spuren (IP, Suchbegriffe). SearXNG ist eine Metasuchmaschine, die als Proxy zwischen uns und Google/Bing agiert. Sie aggregiert Ergebnisse und schützt die Privatsphäre. Durch einen Redis-Cache werden häufige Suchanfragen blitzschnell beantwortet.

### Jupyter Notebook (Der Code Interpreter)
Wenn wir KI bitten, Mathe zu machen oder Daten zu analysieren, sollte sie nicht raten (halluzinieren), sondern echten Code schreiben und ausführen. Jupyter stellt eine abgeschottete Umgebung (Sandbox) bereit, in der die KI Python-Code sicher ausführen kann, ohne unser Host-System zu gefährden.

## 4. Hardware-Einschränkungen
**Hinweis:** Docker und das Ausführen eigener Modelle kosten RAM und CPU-Ressourcen. Studierende ohne leistungsstarke Laptops (insb. ohne Apple Silicon oder dedizierte GPUs) sollten dieses Modul primär als Architektur-Demonstration verstehen und weiterhin Cloud-APIs (OpenRouter) für die Ausführung nutzen.

---
[[Projekt_KI_VL]]

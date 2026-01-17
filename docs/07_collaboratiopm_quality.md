# 7. Współpraca i jakość

## 7.1 Historia Git
Zespół pracuje w modelu Pull Request + review. Każda zmiana w dokumentacji trafia na osobną gałąź i jest scalana po akceptacji review.

Założenia:
- PR powinien dotyczyć jednej logicznej zmiany.
- Każdy PR ma co najmniej jednego recenzenta.
- Commity mają spójny prefiks, np.:
  - `docs:` zmiany w treści SRS,
  - `chore:` narzędzia/porządkowanie repo,
  - `fix:` poprawki błędów.

## 7.2 Struktura i format dokumentu
Dokument SRS jest utrzymywany w plikach Markdown w katalogu `docs/`. Eksport do PDF wykonywany jest na końcu prac (np. przez Pandoc/CI lub lokalnie).

## 7.3 Spójność i styl
Zasady spójności:
- Wymagania mają jednoznaczne identyfikatory (WF-..., WNF-...).
- Kryteria akceptacji są testowalne i zapisane w formacie Given-When-Then.
- Wymagania niefunkcjonalne są mierzalne (liczby, progi, percentyle, czasy).

# 7. Wspó?praca i jako??

## 7.1 Historia Git
Zespó? pracuje w modelu Pull Request + review. Ka?da zmiana w dokumentacji trafia na osobn? ga??? i jest scalana po akceptacji review.

Za?o?enia:
- PR powinien dotyczy? jednej logicznej zmiany.
- Ka?dy PR ma co najmniej jednego recenzenta.
- Commity maj? spójny prefiks, np.:
  - `docs:` zmiany w tre?ci SRS,
  - `chore:` narz?dzia/porz?dkowanie repo,
  - `fix:` poprawki b??dów.

## 7.2 Struktura i format dokumentu
Dokument SRS jest utrzymywany w plikach Markdown w katalogu `docs/`. Eksport do PDF wykonywany jest na ko?cu prac (np. przez Pandoc/CI lub lokalnie).

## 7.3 Spójno?? i styl
Zasady spójno?ci:
- Wymagania maj? jednoznaczne identyfikatory (WF-..., WNF-...).
- Kryteria akceptacji s? testowalne i zapisane w formacie Given-When-Then.
- Wymagania niefunkcjonalne s? mierzalne (liczby, progi, percentyle, czasy).

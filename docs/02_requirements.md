## 2. Kluczowe wymagania i priorytetyzacja dla MVP

### Wymagania użytkownika (User Stories)

1. **Jako organizator pogrzebu (członek rodziny)** chcę zamówić usługę transmisji online razem z innymi usługami pogrzebowymi, aby załatwić wszystkie formalności w jednym miejscu i nie zajmować się technikaliami.

2. **Jako organizator pogrzebu** chcę wygenerować prywatny link do transmisji oraz udostępnić go wybranym osobom (np. e-mailem lub komunikatorem), aby tylko zaproszeni mogli uczestniczyć w ceremonii.

3. **Jako zdalny uczestnik ceremonii** chcę dołączyć do transmisji jednym kliknięciem w link, bez konieczności zakładania konta, aby szybko i bezproblemowo wziąć udział w pogrzebie.

4. **Jako pracownik zakładu pogrzebowego** chcę powiązać transmisję z konkretną ceremonią w harmonogramie (data, godzina, miejsce), aby mieć pewność, że transmisja zostanie uruchomiona we właściwym czasie.

5. **Jako pracownik zakładu pogrzebowego** chcę w prosty sposób przetestować obraz i dźwięk przed rozpoczęciem ceremonii, aby zminimalizować ryzyko problemów technicznych w trakcie transmisji.

6. **Jako organizator pogrzebu** chcę mieć możliwość odtworzenia nagrania z ceremonii przez ograniczony czas po pogrzebie, aby osoby, które nie mogły uczestniczyć na żywo, mogły obejrzeć uroczystość później.

7. **Jako administrator systemu** chcę widzieć statystyki liczby transmisji i zdalnych uczestników, aby móc ocenić wykorzystanie platformy przez współpracujące zakłady pogrzebowe.

---

### Priorytetyzacja wymagań dla MVP

Priorytetyzacja została wykonana w oparciu o skalę Fibonacciego  
*(1, 2, 3, 5, 8, 13, 21)* oraz wzór:

**Priorytet = (Korzyść + Kara) / (Koszt + Ryzyko)**

| Funkcja / User Story (skrót) | Korzyść | Kara | Koszt | Ryzyko | Priorytet |
|-----------------------------|---------|------|-------|--------|-----------|
| Zamówienie transmisji razem z usługami pogrzebowymi | 13 | 13 | 8 | 5 | ≈ 2,0 |
| Generowanie prywatnego linku i udostępnianie zaproszonym osobom | 13 | 13 | 5 | 3 | ≈ 3,25 |
| Dołączenie do transmisji jednym kliknięciem, bez zakładania konta | 13 | 13 | 5 | 5 | 2,6 |
| Powiązanie transmisji z konkretną ceremonią w harmonogramie | 8 | 8 | 5 | 3 | 2,0 |
| Test obrazu i dźwięku przed ceremonią | 8 | 8 | 3 | 3 | ≈ 2,67 |
| Odtwarzanie nagrania ceremonii przez ograniczony czas po pogrzebie | 8 | 5 | 8 | 5 | 1,0 |
| Statystyki liczby transmisji i zdalnych uczestników | 5 | 3 | 5 | 3 | 1,0 |

---

### Funkcje o najwyższym priorytecie

Na potrzeby tej analizy najwyższy priorytet mają funkcje:

- generowanie prywatnego linku i jego udostępnianie (2),
- dołączenie do transmisji jednym kliknięciem (3),
- test obrazu i dźwięku przed ceremonią (5),
- zamówienie transmisji wraz z usługami pogrzebowymi (1),
- podstawowe powiązanie z harmonogramem ceremonii (4).

---

### Zakres MVP – uzasadnienie

MVP powinien skupić się na umożliwieniu realizacji **stabilnej i prywatnej transmisji** z minimalnym tarciem po stronie rodziny oraz zdalnych uczestników. Bezpośrednio wspiera to główny cel biznesowy: wysoki udział transmisji w ceremoniach oraz wysoki poziom satysfakcji rodzin.

#### Funkcje wchodzące w zakres MVP

- zamówienie transmisji wraz z usługami pogrzebowymi (1),
- generowanie prywatnego linku i zarządzanie dostępem (2),
- proste dołączenie do transmisji bez rejestracji (3),
- powiązanie transmisji z harmonogramem ceremonii (4),
- test jakości obrazu i dźwięku przed rozpoczęciem ceremonii (5).

#### Funkcje poza zakresem MVP

Funkcje o niższym priorytecie, takie jak:
- odtwarzanie nagrania po ceremonii (6),
- rozbudowane statystyki (7),

mogą zostać zrealizowane w kolejnych iteracjach, ponieważ nie są krytyczne dla podstawowego doświadczenia **„uczestnictwa na żywo”**.

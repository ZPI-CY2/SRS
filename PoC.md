# Proof of Concept (PoC) - Sprint 1

Sprint 1 (2 tygodnie) został zaplanowany jako Proof of Concept (PoC) mający potwierdzić wykonalność techniczną kluczowych elementów MVP: prywatnej transmisji ceremonii (w tym przesył strumieniowy, widok transmisji oraz dołączenie użytkownika) oraz podstawowej ścieżki „Nagrobki online” (katalog → konfigurator → wycena → koszyk), uruchamianych w środowisku testowym.

## 1. Zakres Sprintu 1 (Backlog Sprintu)
W zakres Sprintu 1 wchodzą następujące elementy:
- **SCRUM-24:** Konfiguracja środowiska testowego
- **SCRUM-36:** [GUI] Utworzenie widoku transmisji
- **SCRUM-37:** [SERVER] Przesyłanie strumieniowe obrazu
- **SCRUM-14:** [GUI + SERVER] Dołączenie do transmisji
- **SCRUM-13:** Generowanie prywatnego linku
- **SCRUM-3:** Przegląd katalogu i filtrowanie
- **SCRUM-2:** Konfigurator nagrobka z podglądem
- **SCRUM-5:** Wycena i koszyk
- **SCRUM-33:** Warunki umów z zakładami kamieniarskimi

![Sprint 1 Backlog](/jira/sprint1.png)

## 2. Cel PoC
Celem PoC jest weryfikacja, czy zespół jest w stanie dostarczyć w ramach jednego sprintu:
- powtarzalnie uruchamialne środowisko testowe wspierające rozwój i weryfikację funkcji,
- minimalny, działający tor transmisji: przesył strumieniowy obrazu → widok transmisji → dołączenie użytkownika,
- prywatny dostęp do transmisji poprzez generowanie linku/tokena oraz skuteczną walidację dostępu,
- podstawowy przepływ „Nagrobki online”: katalog z filtrowaniem, konfigurator z podglądem, wycena i koszyk,
- bazowe założenia biznesowe współpracy z zakładami kamieniarskimi (warunki umów) jako element wpływający na realizację modułu nagrobków.

## 3. Hipoteza PoC
Hipoteza: możliwe jest przygotowanie minimalnego, działającego prototypu obejmującego jednocześnie:
1) prywatny dostęp do transmisji oraz pełną ścieżkę techniczną transmisji (streaming → widok → join),
2) podstawowy przepływ nagrobków online (katalog → konfigurator → wycena → koszyk),
3) środowisko testowe umożliwiające powtarzalne uruchomienie i weryfikację tych funkcji,
   tak aby możliwa była ocena wykonalności technicznej MVP i identyfikacja głównych ryzyk.

## 4. Kryteria sukcesu PoC (mierzalne)

### 4.1 Środowisko testowe (SCRUM-24)
- Środowisko testowe uruchamia się powtarzalnie według jednoznacznej procedury.
- Kluczowe komponenty są dostępne w środowisku testowym i umożliwiają wykonanie scenariuszy PoC (transmisje i nagrobki).

### 4.2 Transmisje ceremonii — link prywatny, streaming, widok i dołączenie (SCRUM-13, SCRUM-37, SCRUM-36, SCRUM-14)
- System generuje prywatny link do transmisji powiązany z konkretną ceremonią/testowym wydarzeniem.
- Wejście bez poprawnego linku/tokena kończy się odmową dostępu (brak ujawnienia treści oraz informacji wrażliwych).
- Wejście z poprawnym linkiem/tokenem umożliwia dołączenie i dostęp do widoku transmisji.
- Po stronie serwera dostępny jest minimalny mechanizm przesyłania strumieniowego obrazu, który pozwala na prezentację materiału w widoku transmisji (np. strumień testowy).
- Widok transmisji prezentuje jednoznaczny stan oraz komunikaty błędów dla przypadków: niepoprawny token, wygasły token, brak dostępnej transmisji.

### 4.3 Nagrobki online — katalog, konfigurator, wycena i koszyk (SCRUM-3, SCRUM-2, SCRUM-5)
- Katalog produktów wyświetla listę produktów i umożliwia filtrowanie; w przypadku braku wyników system pokazuje komunikat i umożliwia reset filtrów.
- Konfigurator pozwala wybrać opcje produktu oraz zapewnia podgląd konfiguracji; zapis/utrwalenie konfiguracji działa w ramach sesji użytkownika.
- Wycena jest deterministycznie wyliczana na podstawie wybranych opcji (co najmniej: cena bazowa + dodatki).
- Użytkownik może dodać skonfigurowany produkt do koszyka, a koszyk prezentuje poprawne wartości (pozycje i łączna cena) oraz reaguje na podstawowe zmiany (np. usunięcie pozycji lub zmiana ilości, jeśli to obejmuje zakres).

### 4.4 Warunki współpracy z zakładami kamieniarskimi (SCRUM-33)
- Zidentyfikowane są kluczowe warunki współpracy wpływające na moduł nagrobków online (np. założenia dotyczące realizacji, odpowiedzialności, wyceny/terminów).
- Warunki są opisane w sposób umożliwiający ich odwzorowanie w backlogu kolejnych sprintów (w PoC dopuszczalne jest utrzymanie ich jako ustaleń/specyfikacji).

## 5. Minimalny prototyp PoC (wysoki poziom)

### 5.1 Scenariusz A: Transmisja prywatna (end-to-end)
1. Utworzenie linku prywatnego do transmisji.
2. Uruchomienie/udostępnienie strumienia obrazu po stronie serwera (strumień testowy).
3. Walidacja linku/tokena po stronie systemu w momencie dołączenia.
4. Wejście użytkownika na widok transmisji (UI) i prezentacja strumienia oraz statusu.

### 5.2 Scenariusz B: Nagrobki online (end-to-end)
1. Przegląd katalogu i filtrowanie produktów.
2. Konfiguracja produktu w konfiguratorze z podglądem.
3. Obliczenie wyceny na podstawie konfiguracji.
4. Dodanie konfiguracji do koszyka i prezentacja podsumowania.

## 6. Opis eksperymentu PoC (procedura testu)
1. Uruchomienie środowiska testowego zgodnie z przygotowaną procedurą.
2. Test transmisji:
  - wejście w widok transmisji bez poprawnego linku → oczekiwane: odmowa dostępu,
  - wejście w widok transmisji z poprawnym linkiem → oczekiwane: możliwość dołączenia,
  - weryfikacja działania przesyłu strumieniowego obrazu (materiał testowy) w widoku transmisji,
  - weryfikacja komunikatów dla tokenu błędnego/wygasłego oraz braku dostępnej transmisji.
3. Test nagrobków online:
  - katalog: filtrowanie + scenariusz „brak wyników”,
  - konfigurator: wybór opcji + podgląd,
  - wycena: zmiana opcji wpływa na wynik wyceny,
  - koszyk: dodanie pozycji i weryfikacja poprawności podsumowania.
4. Weryfikacja elementu SCRUM-33:
  - potwierdzenie, że warunki współpracy zostały zidentyfikowane i opisane,
  - wskazanie elementów warunków, które w kolejnych sprintach muszą zostać odwzorowane w systemie (np. w wycenie i statusach realizacji).

## 7. Analiza wyników
PoC uznaje się za pozytywny, jeśli:
- środowisko testowe działa powtarzalnie i umożliwia wykonanie scenariuszy,
- mechanizm prywatnego dostępu do transmisji działa poprawnie, a przesył strumieniowy obrazu jest prezentowany w widoku transmisji,
- podstawowy przepływ nagrobków online działa end-to-end,
- warunki współpracy z zakładami kamieniarskimi są zidentyfikowane i gotowe do dalszej implementacji w kolejnych sprintach.

## 8. Decyzje po zakończeniu PoC
- **Wynik pozytywny:** przejście do implementacji kolejnych elementów MVP (np. checkout/płatności, rozbudowa ról i uprawnień, wymagania jakościowe).
- **Wynik częściowo pozytywny:** kontynuacja w kolejnym sprincie z korektą najbardziej ryzykownych obszarów (tokenizacja, stabilność streamingu, stabilność konfiguratora/wyceny).
- **Wynik negatywny:** rewizja podejścia technicznego i zakresu MVP (np. uproszczenie procesów, zmiana mechanizmu dostępu do transmisji lub przebudowa elementów przepływu nagrobków online).

## 9. Zadania podrzędne (dekompozycja prac)

W Sprint 1 część elementów backlogu została rozbita na zadania podrzędne (sub-tasks), aby wyodrębnić prace infrastrukturalne i organizacyjne niezbędne do uruchomienia PoC oraz zminimalizować ryzyko blokad na poziomie środowiska i współpracy z partnerami.

### 9.1 SCRUM-24 Konfiguracja środowiska testowego — zadania podrzędne
Zadania podrzędne w ramach SCRUM-24 przygotowują środowisko umożliwiające uruchamianie systemu i weryfikację funkcjonalności PoC w sposób powtarzalny:
- **SCRUM-25:** Instalacja Docker i Docker Compose na środowisku.
- **SCRUM-26:** Instalacja Jenkins przy użyciu Dockera.
- **SCRUM-27:** Instalacja Portainer.
- **SCRUM-28:** Instalacja i konfiguracja bazy danych.
- **SCRUM-29:** Dodanie użytkowników i schematów do bazy danych.
- **SCRUM-30:** Przydzielenie uprawnień do środowiska dla członków zespołu.
- **SCRUM-31:** Utworzenie pipeline Jenkins dla DesignService.
- **SCRUM-32:** Utworzenie pipeline Jenkins dla StreamingService.

![Test environment configuration](/jira/test_env_conf.png)

### 9.2 SCRUM-33 Warunki umów z zakładami kamieniarskimi — zadania podrzędne
Zadania podrzędne w ramach SCRUM-33 służą zebraniu danych biznesowych i ustrukturyzowaniu warunków współpracy, które wpływają na ofertę i wycenę w module „Nagrobki online”:
- **SCRUM-34:** Porównanie cen i oferty nagrobków z lokalnych zakładów.
- **SCRUM-35:** Spotkania z przedstawicielami zakładów.

![Terms of contracts](/jira/terms.png)

Wyniki tych zadań stanowią podstawę do dalszego doprecyzowania reguł wyceny, parametrów konfiguratora oraz warunków realizacji zamówień w kolejnych sprintach.
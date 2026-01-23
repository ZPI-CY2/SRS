# 4. Wymagania funkcjonalne (WF)

Ten rozdział opisuje wymagania funkcjonalne systemu informatycznego dla zakładu pogrzebowego oferującego usługi typu pre-need, sprzedaż i projektowanie nagrobków online oraz transmisje ceremonii pogrzebowych. Wymagania są zapisane z perspektywy użytkownika (User Stories) oraz zawierają testowalne kryteria akceptacji w formacie Given–When–Then (GWT).

Wymagania pogrupowano według domen:
- PN — pre-need
- NG — nagrobki online (sprzedaż + projekt)
- TR — transmisje ceremonii
- COM — funkcje wspólne

---

## 4.0 Konwencje
- Identyfikatory: `WF-[DOMENA]-[NNN]-[SCENARIUSZ]` (np. `WF-NG-002-01`).
- Każde WF zawiera: opis, user story, cel biznesowy, warunki wstępne/końcowe oraz kryteria akceptacji GWT (scenariusz główny + alternatywny + wyjątkowy).
- Statusy (propozycja, można dopasować):
  - Pre-need: `Draft`, `Zaakceptowany`, `Opłacony` (jeśli płatności w zakresie), `Zarchiwizowany`.
  - Zamówienie nagrobka: `Szkic`, `Zamówione`, `Oczekuje na akceptację`, `Zaakceptowane`, `W realizacji`, `Zakończone`, `Anulowane`.
  - Transmisja: `Zaplanowana`, `Gotowa`, `LIVE`, `Zakończona`, `Błąd`.

---

## 4.1 Pre-need (PN)

### 4.1.1 WF-PN-001: Utworzenie planu pre-need (Draft)
**Opis:** Umożliwia klientowi utworzenie planu usług pogrzebowych z wyprzedzeniem i zapisanie go jako szkic.  
**User Story:** Jako klient pre-need chcę utworzyć plan pre-need, abym mógł zapisać moje preferencje i wrócić do nich później.  
**Cel biznesowy:** Zwiększenie liczby klientów pre-need i ograniczenie niejasności na etapie realizacji usług.  
**Warunki wstępne:** Użytkownik jest w module pre-need (konto lub tryb gościa — decyzja produktowa).  
**Warunki końcowe:** Plan w statusie `Draft` jest zapisany i ma identyfikator.

**Kryteria akceptacji:**
- **WF-PN-001-01: Utworzenie planu (Scenariusz główny)**
  - Given: Użytkownik znajduje się w module pre-need.
  - And: System wyświetla formularz utworzenia planu z polami wymaganymi.
  - When: Użytkownik uzupełnia wymagane pola i wybiera „Zapisz”.
  - Then: System zapisuje plan jako `Draft`.
  - And: System wyświetla podsumowanie planu oraz możliwość dalszej edycji.
- **WF-PN-001-02: Próba zapisu bez danych (Scenariusz alternatywny)**
  - Given: Użytkownik edytuje formularz planu.
  - When: Użytkownik wybiera „Zapisz” bez uzupełnienia pól wymaganych.
  - Then: System wskazuje brakujące pola i nie zapisuje planu.
- **WF-PN-001-03: Błąd zapisu (Scenariusz wyjątkowy)**
  - Given: Użytkownik ma uzupełnione wymagane dane planu.
  - When: Wystąpi błąd po stronie systemu podczas zapisu.
  - Then: System wyświetla komunikat błędu oraz umożliwia ponowienie operacji bez utraty wprowadzonych danych.

---

### 4.1.2 WF-PN-002: Edycja planu i zapis zmian
**Opis:** Umożliwia edycję usług, preferencji i danych w planie pre-need.  
**User Story:** Jako klient pre-need chcę edytować plan, aby dopasować usługi i koszty do mojej sytuacji.  
**Cel biznesowy:** Zmniejszenie rezygnacji dzięki możliwości korekt oraz poprawa jakości danych.  
**Warunki wstępne:** Istnieje plan w statusie `Draft` przypisany do użytkownika.  
**Warunki końcowe:** Zmieniony plan jest zapisany i widoczny w podsumowaniu.

**Kryteria akceptacji:**
- **WF-PN-002-01: Zapis edycji (Scenariusz główny)**
  - Given: Użytkownik ma otwarty plan w statusie `Draft`.
  - When: Użytkownik zmienia elementy planu i wybiera „Zapisz zmiany”.
  - Then: System zapisuje zmiany i wyświetla aktualne podsumowanie kosztów.
- **WF-PN-002-02: Anulowanie edycji (Scenariusz alternatywny)**
  - Given: Użytkownik wprowadził zmiany w planie.
  - When: Użytkownik wybiera „Anuluj”.
  - Then: System nie zapisuje zmian i przywraca ostatnio zapisaną wersję planu.
- **WF-PN-002-03: Konflikt edycji (Scenariusz wyjątkowy)**
  - Given: Plan został zmieniony przez inny proces (np. pracownik) po otwarciu go przez klienta.
  - When: Użytkownik próbuje zapisać swoją wersję.
  - Then: System informuje o konflikcie i wymaga ponownego wczytania planu przed zapisem.

---

### 4.1.3 WF-PN-003: Akceptacja planu pre-need
**Opis:** Umożliwia przejście planu z Draft do Zaakceptowany (formalny wybór usług).  
**User Story:** Jako klient pre-need chcę zaakceptować plan, aby zakład pogrzebowy mógł go zrealizować zgodnie z moimi ustaleniami.  
**Cel biznesowy:** Zamknięcie procesu decyzyjnego i umożliwienie realizacji/rozliczeń.  
**Warunki wstępne:** Plan jest kompletny i w statusie `Draft`.  
**Warunki końcowe:** Plan ma status `Zaakceptowany`, a system rejestruje datę akceptacji.

**Kryteria akceptacji:**
- **WF-PN-003-01: Akceptacja kompletnego planu (Scenariusz główny)**
  - Given: Użytkownik ogląda podsumowanie kompletnego planu `Draft`.
  - When: Użytkownik wybiera „Akceptuj plan” i potwierdza operację.
  - Then: System ustawia status planu na `Zaakceptowany`.
  - And: System zapisuje datę i identyfikator użytkownika, który zaakceptował plan.
- **WF-PN-003-02: Próba akceptacji niekompletnego planu (Scenariusz alternatywny)**
  - Given: Plan w statusie `Draft` ma brakujące wymagane dane.
  - When: Użytkownik wybiera „Akceptuj plan”.
  - Then: System blokuje akceptację i wskazuje brakujące elementy.
- **WF-PN-003-03: Błąd procesu akceptacji (Scenariusz wyjątkowy)**
  - Given: Plan jest kompletny.
  - When: Wystąpi błąd systemu w trakcie akceptacji.
  - Then: System nie zmienia statusu i wyświetla komunikat umożliwiający ponowienie akceptacji.

---

## 4.2 Nagrobki online (NG)

### 4.2.1 WF-NG-001: Przegląd katalogu i filtrowanie
**Opis:** Umożliwia klientowi przegląd katalogu nagrobków i akcesoriów oraz filtrowanie wyników.  
**User Story:** Jako klient chcę filtrować katalog nagrobków, abym mógł szybko znaleźć odpowiedni produkt.  
**Cel biznesowy:** Zwiększenie konwersji poprzez szybsze znalezienie produktu.  
**Warunki wstępne:** Katalog zawiera produkty aktywne.  
**Warunki końcowe:** Użytkownik widzi listę produktów zgodną z kryteriami.

**Kryteria akceptacji:**
- **WF-NG-001-01: Filtrowanie wyników (Scenariusz główny)**
  - Given: Użytkownik jest na stronie katalogu.
  - When: Użytkownik ustawia filtry (np. materiał/cena/styl).
  - Then: System aktualizuje listę produktów zgodnie z filtrami.
- **WF-NG-001-02: Brak wyników (Scenariusz alternatywny)**
  - Given: Użytkownik ustawił filtry.
  - When: Żaden produkt nie spełnia kryteriów.
  - Then: System pokazuje komunikat „Brak wyników” i umożliwia reset filtrów.
- **WF-NG-001-03: Błąd ładowania katalogu (Scenariusz wyjątkowy)**
  - Given: Użytkownik wchodzi do katalogu.
  - When: Wystąpi błąd po stronie serwera.
  - Then: System wyświetla błąd i umożliwia ponowienie próby.

---

### 4.2.2 WF-NG-002: Konfigurator i zapis projektu nagrobka
**Opis:** Umożliwia konfigurację wariantów nagrobka (opcje, napis, dodatki) oraz zapis projektu.  
**User Story:** Jako klient chcę skonfigurować nagrobek i zapisać projekt, aby móc przejść do wyceny i zamówienia.  
**Cel biznesowy:** Umożliwienie personalizacji i sprzedaży online.  
**Warunki wstępne:** Użytkownik otworzył kartę produktu w konfiguratorze.  
**Warunki końcowe:** Projekt jest zapisany i ma identyfikator projektu.

**Kryteria akceptacji:**
- **WF-NG-002-01: Zapis projektu (Scenariusz główny)**
  - Given: Użytkownik jest w konfiguratorze.
  - And: Użytkownik wybrał warianty i uzupełnił wymagane pola (np. napis).
  - When: Użytkownik wybiera „Zapisz projekt”.
  - Then: System zapisuje projekt i wyświetla podsumowanie projektu wraz z ceną (lub ceną „od”).
- **WF-NG-002-02: Walidacja tekstu napisu (Scenariusz alternatywny)**
  - Given: Użytkownik wpisuje napis na nagrobku.
  - When: Napis przekracza limit długości lub zawiera niedozwolone znaki.
  - Then: System wyświetla błąd walidacji i blokuje zapis projektu.
- **WF-NG-002-03: Niedostępna opcja (Scenariusz wyjątkowy)**
  - Given: Użytkownik ma otwarty konfigurator.
  - When: Wybrana opcja stała się niedostępna (np. wycofana).
  - Then: System informuje o problemie i wymaga wyboru alternatywy przed zapisem.

---

### 4.2.3 WF-NG-003: Wycena, koszyk i złożenie zamówienia
**Opis:** Umożliwia utworzenie zamówienia na podstawie projektu i przejście przez checkout.  
**User Story:** Jako klient chcę złożyć zamówienie na skonfigurowany nagrobek, aby go kupić online.  
**Cel biznesowy:** Monetyzacja kanału online i skrócenie ścieżki zakupowej.  
**Warunki wstępne:** Istnieje zapisany projekt.  
**Warunki końcowe:** Zamówienie zostaje utworzone i ma status `Zamówione` lub `Oczekuje na płatność` (zależnie od modelu płatności).

**Kryteria akceptacji:**
- **WF-NG-003-01: Utworzenie zamówienia (Scenariusz główny)**
  - Given: Użytkownik jest w podsumowaniu projektu.
  - When: Użytkownik dodaje projekt do koszyka i przechodzi do checkout.
  - Then: System pozwala uzupełnić dane zamówienia i potwierdzić złożenie zamówienia.
- **WF-NG-003-02: Nieudana płatność (Scenariusz alternatywny)**
  - Given: Użytkownik jest w kroku płatności.
  - When: Płatność zostaje odrzucona.
  - Then: System nie oznacza zamówienia jako opłacone i informuje użytkownika o możliwości ponowienia.
- **WF-NG-003-03: Brak danych wymaganych (Scenariusz wyjątkowy)**
  - Given: Użytkownik jest w checkout.
  - When: Użytkownik próbuje potwierdzić zamówienie bez danych wymaganych.
  - Then: System blokuje złożenie zamówienia i wskazuje brakujące pola.

---

### 4.2.4 WF-NG-004: Akceptacja projektu i wersjonowanie
**Opis:** Umożliwia przesłanie projektu do akceptacji oraz akceptację/odrzucenie przez klienta.  
**User Story:** Jako klient chcę zaakceptować lub poprosić o poprawki do projektu, aby finalny projekt był zgodny z oczekiwaniami.  
**Cel biznesowy:** Redukcja błędów i sporów, formalizacja „zgody” klienta na realizację.  
**Warunki wstępne:** Projekt został oznaczony jako „do akceptacji” przez pracownika/proces.  
**Warunki końcowe:** System rejestruje decyzję klienta i ustawia odpowiedni status.

**Kryteria akceptacji:**
- **WF-NG-004-01: Akceptacja projektu (Scenariusz główny)**
  - Given: Klient widzi najnowszą wersję projektu do akceptacji.
  - When: Klient wybiera „Akceptuj”.
  - Then: System ustawia status na `Zaakceptowane` i rejestruje datę akceptacji.
- **WF-NG-004-02: Prośba o poprawki (Scenariusz alternatywny)**
  - Given: Klient widzi projekt do akceptacji.
  - When: Klient wybiera „Poproś o poprawki” i dodaje komentarz.
  - Then: System zapisuje komentarz i ustawia status `Wymaga poprawek`.
- **WF-NG-004-03: Akceptacja nieaktualnej wersji (Scenariusz wyjątkowy)**
  - Given: Istnieje nowsza wersja projektu niż ta wyświetlana klientowi.
  - When: Klient próbuje zaakceptować starszą wersję.
  - Then: System blokuje operację i wymaga zapoznania się z najnowszą wersją.

---

## 4.3 Transmisje ceremonii (TR)

### 4.3.1 WF-TR-001: Zamówienie transmisji ceremonii
**Opis:** Umożliwia zamówienie transmisji dla wskazanej ceremonii.  
**User Story:** Jako organizator/rodzina chcę zamówić transmisję ceremonii, aby umożliwić zdalny udział bliskim.  
**Cel biznesowy:** Zwiększenie wartości oferty zakładu i satysfakcji klientów.  
**Warunki wstępne:** Istnieje ceremonia w harmonogramie lub możliwe jest jej utworzenie w systemie.  
**Warunki końcowe:** Transmisja ma status `Zaplanowana` i jest powiązana z ceremonią.

**Kryteria akceptacji:**
- **WF-TR-001-01: Utworzenie zamówienia transmisji (Scenariusz główny)**
  - Given: Organizator jest na szczegółach ceremonii.
  - When: Wybiera „Zamów transmisję” i potwierdza.
  - Then: System tworzy pozycję transmisji powiązaną z ceremonią.
- **WF-TR-001-02: Brak danych ceremonii (Scenariusz alternatywny)**
  - Given: Ceremonia nie ma ustawionej daty/godziny.
  - When: Organizator próbuje zamówić transmisję.
  - Then: System blokuje operację i wymaga uzupełnienia danych.
- **WF-TR-001-03: Brak dostępności terminu (Scenariusz wyjątkowy)**
  - Given: Termin koliduje z ograniczeniami operacyjnymi.
  - When: Organizator zamawia transmisję.
  - Then: System informuje o braku możliwości realizacji w tym terminie i proponuje kontakt/alternatywę.

---

### 4.3.2 WF-TR-002: Generowanie linku/tokena dostępu
**Opis:** Umożliwia wygenerowanie prywatnego linku/tokena do transmisji.  
**User Story:** Jako organizator chcę wygenerować prywatny link do transmisji, aby udostępnić go tylko zaproszonym osobom.  
**Cel biznesowy:** Prywatność i kontrola dostępu.  
**Warunki wstępne:** Transmisja jest `Zaplanowana` lub `Gotowa`.  
**Warunki końcowe:** System generuje aktywny token/link przypisany do transmisji.

**Kryteria akceptacji:**
- **WF-TR-002-01: Wygenerowanie linku (Scenariusz główny)**
  - Given: Organizator jest w panelu ceremonii/transmisji.
  - When: Wybiera „Generuj link”.
  - Then: System generuje link/token i wyświetla go do skopiowania.
- **WF-TR-002-02: Regeneracja linku (Scenariusz alternatywny)**
  - Given: Link został wcześniej wygenerowany.
  - When: Organizator wybiera „Wygeneruj nowy link”.
  - Then: System unieważnia poprzedni link i generuje nowy.
- **WF-TR-002-03: Brak uprawnień (Scenariusz wyjątkowy)**
  - Given: Użytkownik nie jest organizatorem ani pracownikiem uprawnionym.
  - When: Próbuje wygenerować link.
  - Then: System blokuje operację i nie ujawnia linku.

---

### 4.3.3 WF-TR-003: Dołączenie do transmisji przez link (bez konta)
**Opis:** Umożliwia zdalnemu uczestnikowi dołączenie do transmisji jednym kliknięciem.  
**User Story:** Jako zdalny uczestnik chcę dołączyć do transmisji przez link bez rejestracji, aby szybko uzyskać dostęp.  
**Cel biznesowy:** Minimalizacja tarcia i wsparcie osób mniej technicznych.  
**Warunki wstępne:** Uczestnik posiada link/token.  
**Warunki końcowe:** Uczestnik widzi odtwarzacz transmisji lub komunikat stanu.

**Kryteria akceptacji:**
- **WF-TR-003-01: Poprawny link (Scenariusz główny)**
  - Given: Uczestnik otwiera link z poprawnym tokenem.
  - When: System weryfikuje token.
  - Then: System wyświetla stronę transmisji z odtwarzaczem.
- **WF-TR-003-02: Transmisja jeszcze nie rozpoczęta (Scenariusz alternatywny)**
  - Given: Token jest poprawny.
  - When: Transmisja ma status `Zaplanowana`/`Gotowa`.
  - Then: System wyświetla komunikat „Transmisja jeszcze się nie rozpoczęła” oraz (opcjonalnie) godzinę startu.
- **WF-TR-003-03: Token nieważny (Scenariusz wyjątkowy)**
  - Given: Uczestnik otwiera link z nieważnym lub wygasłym tokenem.
  - When: System weryfikuje token.
  - Then: System odmawia dostępu i wyświetla komunikat o braku autoryzacji.

---

### 4.3.4 WF-TR-004: Panel operatora — powiązanie z harmonogramem + test A/V
**Opis:** Umożliwia operatorowi przygotowanie transmisji i wykonanie testu audio-wideo.  
**User Story:** Jako operator chcę wykonać test A/V i uruchomić transmisję dla wybranej ceremonii, aby zapewnić jakość transmisji.  
**Cel biznesowy:** Redukcja incydentów technicznych i poprawa jakości usługi.  
**Warunki wstępne:** Operator ma uprawnienia, transmisja istnieje i jest powiązana z ceremonią (lub może zostać powiązana).  
**Warunki końcowe:** Test A/V jest wykonany i zapisany jako wynik (OK/błąd) oraz widoczny status przygotowania.

**Kryteria akceptacji:**
- **WF-TR-004-01: Wykonanie testu A/V (Scenariusz główny)**
  - Given: Operator wybrał ceremonię w panelu operatora.
  - When: Operator uruchamia „Test A/V”.
  - Then: System pokazuje podgląd obrazu i wskaźnik poziomu dźwięku oraz wynik testu.
- **WF-TR-004-02: Ponowienie testu (Scenariusz alternatywny)**
  - Given: Test A/V zakończył się błędem.
  - When: Operator wybiera „Powtórz test”.
  - Then: System umożliwia ponowienie testu bez resetowania całej konfiguracji.
- **WF-TR-004-03: Brak urządzeń wejściowych (Scenariusz wyjątkowy)**
  - Given: Operator uruchamia test A/V.
  - When: System nie wykrywa kamery lub mikrofonu.
  - Then: System wyświetla jednoznaczny komunikat o braku urządzenia i blokuje start transmisji.

---

## 4.4 Funkcje wspólne (COM)

### 4.4.1 WF-COM-001: Role i uprawnienia
**Opis:** System rozróżnia role i ogranicza dostęp do danych oraz operacji.  
**User Story:** Jako administrator chcę zarządzać rolami i uprawnieniami, aby dane klientów były dostępne tylko dla uprawnionych osób.  
**Cel biznesowy:** Bezpieczeństwo, zgodność i ograniczenie ryzyka błędów.  
**Warunki wstępne:** Administrator jest zalogowany.  
**Warunki końcowe:** Uprawnienia są zapisane i egzekwowane przez system.

**Kryteria akceptacji:**
- **WF-COM-001-01: Nadanie roli (Scenariusz główny)**
  - Given: Administrator jest w panelu zarządzania użytkownikami.
  - When: Administrator nadaje rolę (np. projektant/operator) użytkownikowi.
  - Then: System zapisuje zmianę i od tego momentu użytkownik ma dostęp do właściwych ekranów/operacji.
- **WF-COM-001-02: Brak uprawnień (Scenariusz alternatywny)**
  - Given: Użytkownik bez wymaganej roli próbuje wykonać operację administracyjną.
  - When: Użytkownik wykonuje akcję.
  - Then: System odmawia dostępu.
- **WF-COM-001-03: Próba dostępu do cudzych danych (Scenariusz wyjątkowy)**
  - Given: Klient nie jest właścicielem zasobu (plan/zamówienie).
  - When: Próbuje otworzyć URL zasobu.
  - Then: System zwraca odmowę dostępu i nie ujawnia danych.

---

### 4.4.2 WF-COM-002: Powiadomienia o zdarzeniach
**Opis:** System wysyła powiadomienia (e-mail/SMS) o kluczowych zdarzeniach w procesach.  
**User Story:** Jako klient chcę dostawać powiadomienia o zmianach statusu (zamówienie/projekt/transmisja), aby wiedzieć co się dzieje.  
**Cel biznesowy:** Zmniejszenie liczby zapytań do obsługi i poprawa doświadczenia klienta.  
**Warunki wstępne:** Użytkownik podał kanał kontaktu (e-mail/telefon).  
**Warunki końcowe:** Powiadomienie zostało wysłane lub oznaczone jako błąd wysyłki.

**Kryteria akceptacji:**
- **WF-COM-002-01: Powiadomienie o projekcie do akceptacji (Scenariusz główny)**
  - Given: Projekt nagrobka zmienił status na „Do akceptacji”.
  - When: System rejestruje zmianę statusu.
  - Then: System wysyła powiadomienie do klienta z linkiem do ekranu akceptacji.
- **WF-COM-002-02: Brak kanału kontaktu (Scenariusz alternatywny)**
  - Given: Zdarzenie wymaga powiadomienia.
  - When: Brak e-mail/telefonu w profilu.
  - Then: System nie wysyła powiadomienia i oznacza zdarzenie do obsługi (np. w panelu pracownika).
- **WF-COM-002-03: Błąd dostawcy powiadomień (Scenariusz wyjątkowy)**
  - Given: System próbuje wysłać powiadomienie.
  - When: Dostawca e-mail/SMS zwraca błąd.
  - Then: System rejestruje błąd i podejmuje ponowną próbę zgodnie z polityką retry (szczegóły w WNF).

---

## 4.5 Priorytetyzacja wymagań dla MVP (model wartość/koszt/ryzyko)

Priorytetyzacja wymagań dla MVP jest wykonana w sposób obiektywny, w oparciu o cztery czynniki oceniane w skali Fibonacciego (1, 2, 3, 5, 8, 13, 21): Korzyść, Kara, Koszt, Ryzyko. Skala Fibonacciego jest powszechnie stosowana w estymacjach w Agile jako skala względna.

**Wzór:**
Priorytet = (Korzyść + Kara) / (Koszt + Ryzyko)

Im wyższa wartość, tym lepszy kandydat do MVP (więcej wartości względem wysiłku i ryzyka).

### Tabela priorytetyzacji (kandydaci do MVP)
| Funkcja (kandydat) | Korzyść | Kara | Koszt | Ryzyko | Priorytet |
|---|---:|---:|---:|---:|---:|
| WF-TR-003 Dołączenie do transmisji przez link | 13 | 21 | 5 | 8 | 2.14 |
| WF-TR-002 Generowanie linku/tokena transmisji | 13 | 21 | 8 | 8 | 2.13 |
| WF-NG-003 Zamówienie i płatność za nagrobek | 13 | 13 | 13 | 13 | 1.00 |
| WF-NG-002 Konfigurator i zapis projektu nagrobka | 13 | 8 | 13 | 8 | 1.17 |
| WF-PN-001 Utworzenie planu pre-need (Draft) | 8 | 8 | 8 | 5 | 1.07 |
| WF-NG-004 Akceptacja projektu (workflow) | 8 | 13 | 8 | 8 | 1.31 |
| WF-COM-001 Role i uprawnienia | 13 | 13 | 8 | 5 | 2.00 |

### Wniosek: proponowany zakres MVP
Na podstawie wartości priorytetu najwyższymi kandydatami do MVP są:
- WF-TR-003 (join) oraz WF-TR-002 (token/link) — kluczowy rdzeń transmisji.
- WF-COM-001 (role/uprawnienia) — warunek bezpieczeństwa dla danych i operacji.
- WF-NG-004 (akceptacja projektu) — duża kara za brak (ryzyko sporów, błędów realizacji) przy umiarkowanym koszcie.
# 1. Wstęp

## 1.1 Cel
Niniejszy dokument stanowi Specyfikację Wymagań Oprogramowania (SRS) dla systemu informatycznego wspierającego działalność zakładu pogrzebowego, obejmującego:
- usługi typu pre-need (planowanie i zakup usług z wyprzedzeniem),
- sprzedaż i projektowanie nagrobków online,
- transmisje online ceremonii pogrzebowych.

Wersja dokumentu: 0.2 (zakres rozszerzony).

Dokument jest przeznaczony dla interesariuszy biznesowych (właściciel zakładu pogrzebowego, pracownicy operacyjni, projektanci/handlowcy), zespołu projektowego i deweloperskiego oraz osób odpowiedzialnych za testy i wdrożenie.

Celem SRS jest jednoznaczne opisanie zakresu systemu, wymagań funkcjonalnych i niefunkcjonalnych oraz ograniczeń i założeń, aby umożliwić:
- zaprojektowanie rozwiązania,
- implementację,
- przygotowanie testów akceptacyjnych i jakościowych,
- walidację oczekiwań interesariuszy.

## 1.2 Wizja, zakres i cele produktu

### Wizja
System ma zapewnić klientom i pracownikom zakładu pogrzebowego jedno, spójne środowisko do realizacji kluczowych procesów: planowania usług (pre-need), konfiguracji i zakupu nagrobków online oraz organizacji transmisji ceremonii w sposób godny, prywatny i niezawodny.

### Zakres (co system robi)
System obejmuje trzy główne domeny funkcjonalne:

A) Pre-need:
- Utworzenie i edycja planu usług pogrzebowych z wyprzedzeniem (plan pre-need).
- Prezentacja kosztów oraz wariantów usług i rejestracja decyzji klienta.
- Przechowywanie dokumentów, zgód i informacji wymaganych do realizacji planu.
- Udostępnienie planu uprawnionym osobom (np. beneficjent/rodzina) według polityki dostępu.

B) Nagrobki online:
- Prezentacja katalogu nagrobków i akcesoriów (produkty, warianty, dodatki).
- Konfigurator/projektowanie: wybór opcji (materiał, wymiary, napis, dodatki) oraz zapis projektu.
- Proces wyceny, zamówienia i płatności oraz obsługa statusów realizacji.
- Workflow akceptacji projektu (wersje projektu → akceptacja klienta → przekazanie do realizacji).

C) Transmisje ceremonii:
- Zamówienie transmisji i konfiguracja prywatnego dostępu (link/token).
- Dołączenie do transmisji jednym kliknięciem (bez skomplikowanej rejestracji).
- Narzędzia operatora: powiązanie transmisji z ceremonią, test obrazu i dźwięku oraz podstawowy monitoring w trakcie.

Dodatkowo system obejmuje funkcje wspólne:
- zarządzanie kontami, rolami i uprawnieniami,
- powiadomienia (e-mail/SMS) o statusach (np. projekt do akceptacji, potwierdzenie zamówienia, link do transmisji),
- podstawowy panel administracyjny (monitoring, rozliczenia, zgodność z przepisami).

### Cele biznesowe i KPIs (mierzalne kryteria sukcesu)
W obszarze transmisji (bazując na założeniach MVP z materiałów wejściowych):
- KPI-TR-01: W ciągu 6 miesięcy od uruchomienia MVP co najmniej 25% ceremonii w zakładach współpracujących ma być transmitowanych online z wykorzystaniem platformy.
- KPI-TR-02: Średnia ocena satysfakcji rodzin z jakości transmisji oraz łatwości dostępu ≥ 4,0/5.
- KPI-TR-03: Odsetek ceremonii z poważnym incydentem technicznym (np. przerwanie transmisji > 2 minuty) ≤ 2%.

Dla obszaru pre-need i nagrobków online (do doprecyzowania z interesariuszem podczas analizy wymagań):
- KPI-PN-01: Odsetek użytkowników, którzy ukończą konfigurację planu pre-need (draft → zaakceptowany) ≥ X% w okresie Y.
- KPI-NG-01: Współczynnik konwersji w module nagrobków (koszyk → zamówienie opłacone) ≥ X% w okresie Y.
- KPI-NG-02: Odsetek projektów nagrobków zaakceptowanych w pierwszej iteracji ≥ X% (jako miara jakości konfiguratora i procesu ofertowania).
Uwaga: wartości X i Y zostaną uzupełnione w trakcie walidacji wymagań.

### Poza zakresem (dla MVP / pierwszej wersji)
Poza zakresem pierwszej wersji (o ile nie zostanie ustalone inaczej) pozostają:
- Budowa własnej infrastruktury streamingowej od zera (zakładamy użycie chmury: live streaming + CDN).
- Rozbudowana integracja z zewnętrznymi systemami ERP/księgowymi oraz pełne procesy magazynowe.
- Zaawansowany konfigurator 3D/AR w czasie rzeczywistym (możliwy w kolejnych iteracjach).
- Multi-region jako domyślna konfiguracja infrastruktury (zależne od kosztów i potrzeb).

## 1.3 Definicje, akronimy i skróty
- SRS — Specyfikacja Wymagań Oprogramowania.
- MVP — Minimum Viable Product.
- KPI — Key Performance Indicator.
- Pre-need — zakup/planowanie usług pogrzebowych z wyprzedzeniem.
- Beneficjent / osoba uprawniona — osoba, która może uzyskać dostęp do planu pre-need lub informacji o ceremonii.
- Konfigurator nagrobków — moduł umożliwiający personalizację i zapis projektu nagrobka.
- Wycena — wyliczenie kosztu projektu/produktu wraz z dodatkami i usługą montażu (jeśli dotyczy).
- Akceptacja projektu — zatwierdzenie przez klienta wersji projektu do realizacji.
- LIVE — transmisja na żywo.
- CDN — Content Delivery Network.
- Token / prywatny link — mechanizm autoryzacji dostępu do transmisji lub zasobu.
- EOG — Europejski Obszar Gospodarczy.
- RODO/GDPR — przepisy o ochronie danych osobowych.

## 1.4 Przegląd dokumentu
- Rozdział 2 przedstawia ogólny opis produktu: moduły, role użytkowników, ograniczenia i założenia.
- Rozdział 3 opisuje interfejsy zewnętrzne: UI (w tym makiety głównego przypadku użycia) oraz integracje API (płatności, powiadomienia, streaming).
- Rozdział 4 zawiera wymagania funkcjonalne (User Stories i kryteria akceptacji Given-When-Then) oraz ich priorytety.
- Rozdział 5 opisuje wymagania niefunkcjonalne/atrybuty jakościowe (mierzalne i weryfikowalne) dla całego systemu.
- Rozdział 6 zawiera analizę porównawczą i wnioski wpływające na wymagania.
- Dodatki zawierają modele analityczne (diagram przypadków użycia), persony oraz listę kwestii otwartych.

# 2. Opis ogólny

## 2.1 Główne funkcje produktu
System informatyczny zakładu pogrzebowego składa się z trzech głównych domen funkcjonalnych oraz funkcji wspólnych (cross-cutting). Poniższe moduły opisują zakres na wysokim poziomie; szczegóły znajdują się w Rozdziale 4.

### A) Moduł Pre-need (planowanie i zakup usług z wyprzedzeniem)
- F-PN-01: Utworzenie planu pre-need (konfiguracja usług, preferencji, budżetu).
- F-PN-02: Edycja i wersjonowanie planu (statusy: draft/zaakceptowany/opłacony).
- F-PN-03: Dokumenty i zgody (obsługa oświadczeń i informacji wymaganych do realizacji planu).
- F-PN-04: Udostępnienie planu osobom uprawnionym (np. beneficjent/rodzina) zgodnie z polityką dostępu.

### B) Moduł Nagrobki online (sprzedaż + projektowanie)
- F-NG-01: Katalog produktów (nagrobki, akcesoria) z filtrowaniem i wyszukiwaniem.
- F-NG-02: Konfigurator/projektowanie nagrobka (warianty, materiał, wymiary, napis, dodatki).
- F-NG-03: Wycena i proces zamówienia (koszyk, dane do realizacji, płatność).
- F-NG-04: Workflow projektu i akceptacji (wersje projektu → akceptacja klienta → przekazanie do realizacji).
- F-NG-05: Statusy realizacji i komunikacja (powiadomienia o zmianach statusu zamówienia/projektu).

### C) Moduł Transmisji ceremonii
- F-TR-01: Zamówienie transmisji dla ceremonii.
- F-TR-02: Prywatny dostęp (generowanie linku/tokena, kontrola dostępu).
- F-TR-03: Dołączenie do transmisji (jeden klik, minimalne tarcie dla uczestnika).
- F-TR-04: Panel operatora (powiązanie transmisji z ceremonią, test A/V, monitoring statusu).

### D) Funkcje wspólne (cross-cutting)
- F-COM-01: Konta użytkowników, role i uprawnienia.
- F-COM-02: Powiadomienia (e-mail/SMS) dla kluczowych zdarzeń (np. projekt do akceptacji, potwierdzenie zamówienia, link do transmisji).
- F-COM-03: Panel administracyjny (zarządzanie organizacją, monitoring, podstawowe raportowanie).
- F-COM-04: Audyt działań (rejestrowanie krytycznych akcji w systemie).

## 2.2 Klasy użytkowników

### U-01: Klient pre-need (planowanie)
Osoba planująca i (potencjalnie) opłacająca usługi pogrzebowe z wyprzedzeniem.
Cele: spokojne przejście przez konfigurację planu, pewność i przejrzystość kosztów, możliwość aktualizacji danych.
Moduły: Pre-need, Funkcje wspólne (powiadomienia, dokumenty, konto).

### U-02: Beneficjent / rodzina (osoba uprawniona)
Osoba, która ma otrzymać dostęp do planu pre-need w określonym momencie (lub wgląd do ustaleń).
Cele: szybki dostęp do ustaleń, uniknięcie nieporozumień, kontrola zgodności realizacji z planem.
Moduły: Pre-need (wgląd), Funkcje wspólne (uprawnienia).

### U-03: Klient nagrobków (kupujący / zamawiający)
Osoba konfigurująca i zamawiająca nagrobek oraz akcesoria.
Cele: łatwe porównanie wariantów, czytelna wycena, prosty proces zamówienia i akceptacji projektu.
Moduły: Nagrobki online, Funkcje wspólne (powiadomienia, płatności).

### U-04: Projektant / handlowiec zakładu pogrzebowego
Pracownik obsługujący wyceny, konsultacje oraz przygotowanie wersji projektu do akceptacji.
Cele: szybkie przygotowanie i iterowanie projektu, minimalizacja błędów, sprawna komunikacja z klientem.
Moduły: Nagrobki online (workflow projektu), Funkcje wspólne (audyt, powiadomienia).

### U-05: Pracownik operacyjny zakładu (realizacja usług)
Pracownik odpowiedzialny za realizację usług, terminy, harmonogram i obsługę klienta.
Cele: wgląd w zamówienia i statusy, jedno źródło prawdy, ograniczenie pomyłek.
Moduły: Pre-need (realizacja), Nagrobki (statusy), Transmisje (harmonogram), Funkcje wspólne.

### U-06: Operator transmisji (technik)
Osoba uruchamiająca i nadzorująca transmisję ceremonii.
Cele: prosta konfiguracja, test A/V przed startem, szybka identyfikacja problemów.
Moduły: Transmisje ceremonii.

### U-07: Zdalny uczestnik ceremonii
Osoba dołączająca do transmisji przez link/token.
Cele: dołączenie bez skomplikowanej rejestracji, stabilny odbiór, prywatność.
Moduły: Transmisje ceremonii.

### U-08: Administrator systemu / właściciel platformy
Osoba odpowiedzialna za utrzymanie systemu, konfigurację organizacji, monitoring i zgodność.
Cele: kontrola dostępu, monitoring, raporty, zgodność z przepisami.
Moduły: Funkcje wspólne + przekrojowy wgląd.

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

# 3. Wymagania dotyczące interfejsów zewnętrznych

## 3.1 Interfejsy użytkownika (UI)

### Założenia ogólne UI
Interfejs użytkownika ma minimalizować liczbę kroków w kluczowych procesach oraz być czytelny dla użytkowników o niskich kompetencjach cyfrowych (w tym osoby starsze). UI ma być responsywny (desktop i mobile) oraz stosować prosty język i jednoznaczne komunikaty statusów.

### Główny przypadek użycia zamodelowany w makietach
Wybrany główny przypadek użycia: „Konfiguracja i zamówienie nagrobka online wraz z akceptacją projektu”.

Makiety zawierają ścieżkę:
- Katalog → karta produktu → konfigurator → wycena → koszyk → checkout → status zamówienia → akceptacja projektu.

**Podgląd ekranów procesu:**
![Ekran startowy](../mockups/1_Start.png)
![Projektowanie i konfiguracja](../mockups/3_Projektowanie.png)

Link do szablonu (pełny przebieg):
![Pełny szablon animacja](../mockups/5_FullTemplate.gif)

### Pozostałe kluczowe ekrany (opis tekstowy, bez pełnych makiet)
A) Pre-need:
- Utworzenie planu (kroki konfiguracji usług i danych).
- Podsumowanie kosztów i status planu (draft/zaakceptowany/opłacony).
- Dokumenty i zgody.

![Planowanie Pre-need](../mockups/2_Planowanie.png)

B) Transmisje ceremonii:
- Strona dołączenia do transmisji przez prywatny link/token.
- Panel operatora: powiązanie transmisji z ceremonią, test A/V, status transmisji.
- Panel organizatora: zamówienie transmisji i wygenerowanie linku.

![Panel Transmisji](../mockups/4_Transmisje.png)

C) Projektowanie nagrobków online:
- Interfejs konfiguratora wizualnego (wybór kształtu, rodzaju kamienia, napisów).
- Podgląd projektu w czasie rzeczywistym.
- Dynamiczna kalkulacja ceny w zależności od wybranej konfiguracji i dodatków.

![Projektowanie i konfiguracja](../mockups/3_Projektowanie.png)

## 3.2 Interfejsy programowe (API) i integracje

### Integracja: Płatności online (wymagana dla nagrobków online; opcjonalna dla pre-need)
Cel: obsługa płatności za zamówienia (nagrobki) oraz ewentualnie opłaty za plan pre-need.

Zakres integracji:
- Utworzenie płatności dla zamówienia.
- Odbiór potwierdzenia płatności (webhook/callback).
- Obsługa statusów: rozpoczęta / opłacona / odrzucona / wygasła / zwrócona (jeśli w zakresie).
- Idempotencja: powtórzone powiadomienia z bramki płatności nie mogą powodować zdublowania opłacenia zamówienia.

Minimalny model danych (logiczny):
- order_id, amount, currency, payment_status, provider_reference, created_at, updated_at.

### Integracja: Powiadomienia e-mail/SMS (wspólna dla wszystkich modułów)
Cel: informowanie klientów i pracowników o zdarzeniach systemowych.

Przykładowe zdarzenia:
- potwierdzenie złożenia zamówienia nagrobka,
- „projekt do akceptacji” i „zaakceptowano projekt”,
- zmiana statusu zamówienia,
- link/token do transmisji ceremonii,
- potwierdzenie akceptacji planu pre-need.

Minimalne operacje:
- wysyłka wiadomości (email/SMS),
- logowanie wysyłek (status: wysłano/błąd) w celu diagnostyki.

### Integracja: Dostawca streamingu LIVE + CDN (wymagana dla modułu transmisji)
Cel: realizacja transmisji live i dystrybucja treści do uczestników z zapewnieniem jakości i skalowalności.

Zakres integracji po stronie systemu:
- Utworzenie/konfiguracja zasobu transmisji dla ceremonii.
- Pozyskanie adresu odtwarzania (playback URL) dla uczestników.
- Odczyt statusu transmisji (np. przygotowana/trwa/zakończona/błąd).
- Kontrola dostępu: weryfikacja tokenu/linku przed udostępnieniem odtwarzania.

Minimalne operacje (logiczne, niezależne od dostawcy):
- createStream(ceremony_id, start_time, metadata)
- getStreamStatus(stream_id)
- getPlaybackUrl(stream_id)
- stopStream(stream_id) — jeśli wspierane

### Integracja: Generowanie dokumentów / podpis (opcjonalne, zależne od wymagań pre-need)
Cel: tworzenie dokumentów podsumowujących plan pre-need oraz ewentualna akceptacja formalna.

Zakres (jeśli wprowadzamy):
- generowanie PDF podsumowania planu,
- archiwizacja dokumentu,
- ewentualnie: podpis elektroniczny / potwierdzenie akceptacji.

### Wymagania bezpieczeństwa na styku integracji (wysoki poziom)
- Wszystkie integracje muszą korzystać z szyfrowania w tranzycie (HTTPS/TLS).
- Token/link transmisji nie może ujawniać danych wrażliwych i musi być weryfikowany po stronie serwera przed udostępnieniem treści.
- Webhooki (np. od płatności) muszą być weryfikowane (np. podpis/sekret współdzielony) i odporne na ponowne wysłanie (idempotencja).

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

### 5.1.1 Dostępność (Availability)
- WNF-AV-001 (Transmisje): System musi umożliwić dołączenie do transmisji (join) dla co najmniej 99,5% prób w trakcie ceremonii (mierzone miesięcznie).
- WNF-AV-002 (Transmisje): Planowane okna serwisowe nie mogą obejmować godzin „szczytu ceremonii” (definicja szczytu do ustalenia).
- WNF-AV-003 (Transmisje): System musi wykrywać awarie komponentów krytycznych (health-check) w czasie ≤ 30 sekund.

### 5.1.2 Wydajność i UX (Performance/UX)
- WNF-PERF-001 (Transmisje): 95% sesji oglądania ma średni czas buforowania < 1 sekunda na minutę transmisji.
- WNF-PERF-002 (Transmisje): Czas od kliknięcia linku do rozpoczęcia odtwarzania nie może przekroczyć X sekund (p95) przy typowych warunkach sieci domowej (X do ustalenia).

### 5.1.3 Bezpieczeństwo (Security)
- WNF-SEC-001 (Transmisje): 100% prób dostępu bez poprawnego tokenu/linku musi być blokowanych (brak ujawnienia treści).
- WNF-SEC-002 (Transmisje): Wszystkie połączenia muszą odbywać się przez HTTPS/TLS (brak HTTP).
- WNF-SEC-003 (Transmisje): Token dostępu musi być czasowo ograniczony (TTL), a jego ważność weryfikowana po stronie serwera.

### 5.1.4 Prywatność i RODO (Privacy/GDPR)
- WNF-PRIV-001: Dane osobowe i dane o ceremoniach muszą być przechowywane w EOG.
- WNF-PRIV-002: Dane użyte w środowiskach testowych muszą być zanonimizowane lub pseudonimizowane.
- WNF-PRIV-003: Dostęp administracyjny do danych produkcyjnych musi być ograniczony i rejestrowany (audyt).

### 5.1.5 Skalowalność (Scalability)
- WNF-SCAL-001 (Transmisje): Architektura powinna obsłużyć równolegle X ceremonii i Y łącznych widzów jednoczesnych (X/Y do ustalenia, jeśli brak – w Open Issues).

# 5. Atrybuty Jakościowe Systemu

Niniejszy rozdział opisuje atrybuty jakościowe projektowanego systemu informatycznego dla zakładu pogrzebowego oferującego usługi typu *pre-need*, sprzedaż i projektowanie nagrobków online oraz transmisje ceremonii pogrzebowych. 

---

## 5.1. Założenia architektoniczne

System został zaprojektowany w architekturze **mikroserwisów**, w której każda usługa odpowiada za odrębny obszar funkcjonalny. Przyjęto następujące mikroserwisy:

- **User Service** – zarządzanie kontami użytkowników i autoryzacją
- **Pre-Need Service** – obsługa subskrypcji usług pogrzebowych
- **Payment Service** – integracja z systemami płatności
- **Design Service** – projektowanie i sprzedaż nagrobków online
- **Streaming Service** – transmisja ceremonii pogrzebowych
- **Notification Service** – powiadomienia e-mail i SMS
- **API Gateway** – centralny punkt dostępu do systemu

Architektura ta umożliwia niezależny rozwój, wdrażanie i skalowanie poszczególnych komponentów.

---

## 5.2. Jakość wykonania

### 5.2.1. Wydajność (Performance)

- **WNF-WYD-01**  
  Czas odpowiedzi każdego mikroserwisu na zapytanie REST API nie może przekroczyć **500 ms** dla 95% żądań.

- **WNF-WYD-02**  
  API Gateway nie może zwiększać czasu odpowiedzi o więcej niż **100 ms** względem bezpośredniego wywołania mikroserwisu.

- **WNF-WYD-03**  
  Mikroserwis streamingu musi obsługiwać co najmniej **3000 jednoczesnych odbiorców transmisji** bez spadku jakości obrazu.

- **WNF-WYD-04**  
  Płatności w aplikacji muszą działać asynchronicznie, aby nie blokować użytkownika w oknie przetwarzania.

- **WNF-WYD-05**  
  Płatności cykliczne muszą być wykonywane zawsze tego samego dnia miesiąca. Serwis **Pre-Need Service** musi przetwarzać operacje wielowątkowo.

---

### 5.2.2. Dostępność i odporność na awarie (Availability & Resilience)

- **WNF-NIEZ-01**  
  Awaria pojedynczego mikroserwisu nie może powodować niedostępności całego systemu.

- **WNF-NIEZ-02**  
  Mikroserwisy muszą stosować mechanizmy **circuit breaker**, **retry** oraz **timeout** w komunikacji międzyserwisowej.

- **WNF-NIEZ-03**  
  System musi umożliwiać aktualizację pojedynczego mikroserwisu bez przerywania działania pozostałych usług.

---

### 5.2.3. Skalowalność (Scalability)

- **WNF-SKAL-01**  
  Każdy mikroserwis musi być skalowalny horyzontalnie niezależnie od pozostałych komponentów.

- **WNF-SKAL-02**  
  Mikroserwis streamingu musi umożliwiać dynamiczne skalowanie w trakcie trwania ceremonii pogrzebowej.

- **WNF-SKAL-03**  
  System musi obsługiwać co najmniej **10 000 jednoczesnych sesji użytkowników**.

---

### 5.3.2. Bezpieczeństwo (Security)

- **WNF-BEZ-01**  
  Uwierzytelnianie i autoryzacja użytkowników muszą być realizowane centralnie poprzez **User Service** z wykorzystaniem tokenów JWT. Dedykowana biblioteka zostanie użyta to odszyfrowania tokenów przez każdy z serwisów.

- **WNF-BEZ-02**  
  Hasła użytkowników muszą być przechowywane w postaci haszy z użyciem algorytmu **bcrypt**. Każdy użytkownik będzie miał inny SALT zapisany w bazie danych.

- **WNF-BEZ-03**  
  Dostęp do transmisji ceremonii pogrzebowych musi być ograniczony do użytkowników posiadających odpowiednie uprawnienia lub link z zaproszeniem.

- **WNF-BEZ-04**  
  Połączenia wewnątrz mikroserwisów i z aplikacją kliencką zostaną zaszyfrowane certyfikatem TLSv1.3

---

## 5.3. Jakość projektu

### 5.3.1. Modyfikowalność

- **WNF-MOD-01**  
  Każdy mikroserwis musi posiadać własną, niezależną bazę danych (zasada *Database per Service*).

- **WNF-MOD-02**  
  Mikroserwisy nie mogą komunikować się bezpośrednio poprzez bazy danych.

- **WNF-MOD-03**  
  Komunikacja między mikroserwisami musi odbywać się wyłącznie poprzez API REST lub kolejki.

---

### 5.3.3. Obserwowalność (Observability)

- **WNF-OBS-01**  
  Każdy mikroserwis musi generować logi zbierane poprzez Logstash i wyświetlane w Kibanie.

- **WNF-OBS-02**  
  System musi umożliwiać monitorowanie czasu odpowiedzi oraz liczby błędów dla każdego mikroserwisu.

- **WNF-OBS-03**  
  System musi wspierać śledzenie przepływu pojedynczego żądania pomiędzy mikroserwisami (*distributed tracing*).

- **WNF-OBS-04**  
  Metryki dotyczące mikroserwisów (CPU, RAM, REQ/S) będą zbierane przez Prometheus'a i prezentowane w Grafanie.

---

### 5.3.4. Przenośność i wdrażanie (Portability & Deployment)

- **WNF-DEP-01**  
  Każdy mikroserwis musi być dostarczany jako osobny kontener Docker.

- **WNF-DEP-02**  
  System musi być uruchamialny lokalnie za pomocą jednego polecenia `docker-compose up`.

- **WNF-DEP-03**  
  Architektura systemu musi umożliwiać automatyczne skalowanie usług w środowisku orkiestracyjnym (np. Kubernetes).

---

## 5.4. Priorytetyzacja kluczowych wymagań jakościowych

W celu zapewnienia spójnego i odpornego systemu, opartego na architekturze mikroserwisowej, przeprowadzono priorytetyzację najważniejszych wymagań jakościowych.  
Ocena została wykonana w oparciu o **wartość biznesową**, **koszt implementacji** oraz **ryzyko techniczne**, zgodnie ze skalą Fibonacciego.

### 5.4.1. Metoda oceny

Każde wymaganie oceniono według kryteriów:

- **Korzyść** – wartość biznesowa wynikająca z realizacji wymagania,
- **Kara** – konsekwencje braku realizacji wymagania,
- **Koszt** – nakład pracy i złożoność implementacji,
- **Ryzyko** – ryzyko techniczne i architektoniczne.

Wszystkie wartości oszacowano w **skali Fibonacciego**:  
**1, 2, 3, 5, 8, 13, 21**

### Wzór priorytetu

> **Priorytet = (Korzyść + Kara) / (Koszt + Ryzyko)**

---

### 5.4.2. Tabela priorytetyzacji wymagań

| ID     | Wymaganie                                                                     | Korzyść | Kara | Koszt | Ryzyko | Priorytet |
|--------|-------------------------------------------------------------------------------|---------|------|-------|--------|-----------|
| **Q1** | WNF-NIEZ-01 – Awaria jednego mikroserwisu nie powoduje niedostępności systemu | 21      | 21   | 13    | 8      | **2.00**  |
| **Q2** | WNF-NIEZ-02 – Circuit breaker, retry, timeout                                 | 13      | 13   | 8     | 8      | **1.63**  |
| **Q3** | WNF-NIEZ-03 – Aktualizacja mikroserwisu bez downtime                          | 13      | 8    | 13    | 5      | **1.05**  |
| **Q4** | WNF-SKAL-01 – Niezależne skalowanie mikroserwisów                             | 21      | 21   | 13    | 13     | **1.62**  |
| **Q5** | WNF-WYD-03 – Streaming 3000 odbiorców                                         | 21      | 21   | 21    | 21     | **1.00**  |
| **Q6** | WNF-BEZ-01 – Centralny serwis zarądzający użytkownikami (User Service)        | 13      | 13   | 8     | 5      | **1.63**  |
| **Q7** | WNF-BEZ-03 – Kontrola dostępu do transmisji                                   | 13      | 8    | 5     | 3      | **2.10**  |
| **Q8** | WNF-OBS-03 – Distributed tracing                                              | 8       | 5    | 5     | 5      | **1.08**  |

---

### 5.4.3. Ranking wymagań wg priorytetu

1. **Q7 – Kontrola dostępu do transmisji** (2.10)
2. **Q1 – Odporność na awarię mikroserwisu** (2.00)
3. **Q2 / Q6 – Mechanizmy odporności i JWT** (1.63)
4. **Q4 – Skalowalność mikroserwisów** (1.62)
5. **Q8 – Distributed tracing** (1.08)
6. **Q3 – Aktualizacja bez downtime** (1.05)
7. **Q5 – Streaming 3000 odbiorców** (1.00)

---

### 5.4.4. Interpretacja wyników

Najwyższy priorytet uzyskały wymagania, które:
- mają **wysoką wartość biznesową**,
- niosą **poważne konsekwencje w przypadku braku realizacji**,
- przy relatywnie **umiarkowanym koszcie i ryzyku**.

Szczególnie istotne są:
- odporność na awarie mikroserwisów,
- bezpieczeństwo dostępu do transmisji,
- centralne uwierzytelnianie użytkowników.

---

## 5.5. Wnioski

Zastosowanie architektury mikroserwisowej pozwala na elastyczne dopasowanie systemu do zróżnicowanych wymagań biznesowych zakładu pogrzebowego. Szczególną uwagę poświęcono bezpieczeństwu, dostępności oraz skalowalności, co jest kluczowe w kontekście usług finansowych oraz transmisji ceremonii pogrzebowych w czasie rzeczywistym.


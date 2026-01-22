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

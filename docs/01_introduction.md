# 1. Wstęp

## 1.1 Cel
Niniejszy dokument stanowi Specyfikację Wymagań Oprogramowania (SRS) dla systemu „Platforma transmisji online z ceremonii pogrzebowej”, wersja dokumentu: 0.1 (MVP).  
Dokument jest przeznaczony dla interesariuszy biznesowych (zakłady pogrzebowe, rodziny), zespołu projektowego i deweloperskiego oraz osób odpowiedzialnych za testy i wdrożenie.

Celem dokumentu jest jednoznaczne opisanie zakresu systemu, wymagań funkcjonalnych i niefunkcjonalnych oraz ograniczeń/założeń, tak aby możliwe było:
- zaprojektowanie rozwiązania,
- implementacja,
- przygotowanie testów akceptacyjnych i jakościowych.

## 1.2 Wizja, zakres i cele produktu

### Wizja
Platforma ma stać się standardowym sposobem na godne, zdalne uczestnictwo w ceremoniach pogrzebowych, umożliwiając rodzinom i bliskim oglądanie transmisji na żywo w bezpiecznym, prywatnym środowisku niezależnie od miejsca pobytu.

### Zakres (co system robi)
Zakres MVP skupia się na realizacji stabilnej, prywatnej transmisji z minimalnym „tarciem” po stronie organizatora i zdalnych uczestników. W MVP system obejmuje:
- Zamówienie usługi transmisji online w procesie organizacji pogrzebu.
- Generowanie prywatnego linku (token) do transmisji i udostępnianie go zaproszonym osobom.
- Dołączenie do transmisji jednym kliknięciem w link, bez konieczności zakładania konta.
- Powiązanie transmisji z konkretną ceremonią w harmonogramie (data, godzina, miejsce).
- Test obrazu i dźwięku przed rozpoczęciem ceremonii.

### Cele biznesowe i KPIs (mierzalne kryteria akceptacji)
Główny cel biznesowy (SMART): w ciągu 6 miesięcy od uruchomienia MVP co najmniej 25% ceremonii w zakładach współpracujących ma być transmitowanych online, przy średniej ocenie satysfakcji rodzin minimum 4,0/5 oraz maksymalnie 2% ceremonii z istotnym incydentem technicznym (np. przerwanie transmisji > 2 min).  

Kluczowe metryki sukcesu (KPIs):
- KPI-01: Odsetek ceremonii transmitowanych z użyciem platformy po 6 miesiącach ≥ 25%.
- KPI-02: Średnia ocena satysfakcji rodzin z jakości transmisji i łatwości dostępu ≥ 4,0/5.
- KPI-03: Odsetek ceremonii z poważnym incydentem technicznym ≤ 2%.

### Poza zakresem (MVP)
W MVP poza zakresem pozostają:
- Rozbudowane statystyki i raportowanie (ponad podstawowe monitoring/utrzymanie).
- Odtwarzanie nagrania po ceremonii jako kluczowa funkcja (możliwa iteracja późniejsza).
- Budowa własnej infrastruktury streamingowej „od zera” (w MVP zakładamy użycie gotowych usług streaming + CDN).
- Mechanizmy multi-region (preferowana jedna lokalizacja w MVP ze względu na koszty).

## 1.3 Definicje, akronimy i skróty
- MVP — Minimum Viable Product (minimalna wersja produktu).
- KPI — Key Performance Indicator (kluczowy wskaźnik sukcesu).
- LIVE — transmisja na żywo.
- CDN — Content Delivery Network (sieć dostarczania treści).
- Token / link jednorazowy — unikalny identyfikator w linku służący do autoryzacji dostępu do transmisji.
- EOG — Europejski Obszar Gospodarczy.
- RODO/GDPR — Rozporządzenie o Ochronie Danych Osobowych.

## 1.4 Przegląd dokumentu
- Rozdział 2 opisuje produkt na poziomie ogólnym: funkcje, role użytkowników, ograniczenia i założenia.
- Rozdział 3 opisuje interfejsy zewnętrzne: UI (makiety) oraz integracje API.
- Rozdział 4 zawiera wymagania funkcjonalne (User Stories + kryteria akceptacji Given-When-Then) oraz ich priorytety.
- Rozdział 5 zawiera wymagania niefunkcjonalne (mierzalne atrybuty jakościowe) i ich priorytety.
- Rozdział 6 opisuje odkrywanie wymagań i analizę porównawczą.
- Dodatki zawierają modele analityczne (np. diagramy), persony oraz listę kwestii otwartych.

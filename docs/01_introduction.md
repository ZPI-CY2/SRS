# 1. Wst?p

## 1.1 Cel
Niniejszy dokument stanowi Specyfikacj? Wymaga? Oprogramowania (SRS) dla systemu „Platforma transmisji online z ceremonii pogrzebowej”, wersja dokumentu: 0.1 (MVP).  
Dokument jest przeznaczony dla interesariuszy biznesowych (zak?ady pogrzebowe, rodziny), zespo?u projektowego i deweloperskiego oraz osób odpowiedzialnych za testy i wdro?enie.

Celem dokumentu jest jednoznaczne opisanie zakresu systemu, wymaga? funkcjonalnych i niefunkcjonalnych oraz ogranicze?/za?o?e?, tak aby mo?liwe by?o:
- zaprojektowanie rozwi?zania,
- implementacja,
- przygotowanie testów akceptacyjnych i jako?ciowych.

## 1.2 Wizja, zakres i cele produktu

### Wizja
Platforma ma sta? si? standardowym sposobem na godne, zdalne uczestnictwo w ceremoniach pogrzebowych, umo?liwiaj?c rodzinom i bliskim ogl?danie transmisji na ?ywo w bezpiecznym, prywatnym ?rodowisku niezale?nie od miejsca pobytu.

### Zakres (co system robi)
Zakres MVP skupia si? na realizacji stabilnej, prywatnej transmisji z minimalnym „tarciem” po stronie organizatora i zdalnych uczestników. W MVP system obejmuje:
- Zamówienie us?ugi transmisji online w procesie organizacji pogrzebu.
- Generowanie prywatnego linku (token) do transmisji i udost?pnianie go zaproszonym osobom.
- Do??czenie do transmisji jednym klikni?ciem w link, bez konieczno?ci zak?adania konta.
- Powi?zanie transmisji z konkretn? ceremoni? w harmonogramie (data, godzina, miejsce).
- Test obrazu i d?wi?ku przed rozpocz?ciem ceremonii.

### Cele biznesowe i KPIs (mierzalne kryteria akceptacji)
G?ówny cel biznesowy (SMART): w ci?gu 6 miesi?cy od uruchomienia MVP co najmniej 25% ceremonii w zak?adach wspó?pracuj?cych ma by? transmitowanych online, przy ?redniej ocenie satysfakcji rodzin minimum 4,0/5 oraz maksymalnie 2% ceremonii z istotnym incydentem technicznym (np. przerwanie transmisji > 2 min).  

Kluczowe metryki sukcesu (KPIs):
- KPI-01: Odsetek ceremonii transmitowanych z u?yciem platformy po 6 miesi?cach ? 25%.
- KPI-02: ?rednia ocena satysfakcji rodzin z jako?ci transmisji i ?atwo?ci dost?pu ? 4,0/5.
- KPI-03: Odsetek ceremonii z powa?nym incydentem technicznym ? 2%.

### Poza zakresem (MVP)
W MVP poza zakresem pozostaj?:
- Rozbudowane statystyki i raportowanie (ponad podstawowe monitoring/utrzymanie).
- Odtwarzanie nagrania po ceremonii jako kluczowa funkcja (mo?liwa iteracja pó?niejsza).
- Budowa w?asnej infrastruktury streamingowej „od zera” (w MVP zak?adamy u?ycie gotowych us?ug streaming + CDN).
- Mechanizmy multi-region (preferowana jedna lokalizacja w MVP ze wzgl?du na koszty).

## 1.3 Definicje, akronimy i skróty
- MVP — Minimum Viable Product (minimalna wersja produktu).
- KPI — Key Performance Indicator (kluczowy wska?nik sukcesu).
- LIVE — transmisja na ?ywo.
- CDN — Content Delivery Network (sie? dostarczania tre?ci).
- Token / link jednorazowy — unikalny identyfikator w linku s?u??cy do autoryzacji dost?pu do transmisji.
- EOG — Europejski Obszar Gospodarczy.
- RODO/GDPR — Rozporz?dzenie o Ochronie Danych Osobowych.

## 1.4 Przegl?d dokumentu
- Rozdzia? 2 opisuje produkt na poziomie ogólnym: funkcje, role u?ytkowników, ograniczenia i za?o?enia.
- Rozdzia? 3 opisuje interfejsy zewn?trzne: UI (makiety) oraz integracje API.
- Rozdzia? 4 zawiera wymagania funkcjonalne (User Stories + kryteria akceptacji Given-When-Then) oraz ich priorytety.
- Rozdzia? 5 zawiera wymagania niefunkcjonalne (mierzalne atrybuty jako?ciowe) i ich priorytety.
- Rozdzia? 6 opisuje odkrywanie wymaga? i analiz? porównawcz?.
- Dodatki zawieraj? modele analityczne (np. diagramy), persony oraz list? kwestii otwartych.

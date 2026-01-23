# 1. Wst?p

## 1.1 Cel
Niniejszy dokument stanowi Specyfikacj? Wymaga? Oprogramowania (SRS) dla systemu informatycznego wspieraj?cego dzia?alno?? zak?adu pogrzebowego, obejmuj?cego:
- us?ugi typu pre-need (planowanie i zakup us?ug z wyprzedzeniem),
- sprzeda? i projektowanie nagrobków online,
- transmisje online ceremonii pogrzebowych.

Wersja dokumentu: 0.2 (zakres rozszerzony).

Dokument jest przeznaczony dla interesariuszy biznesowych (w?a?ciciel zak?adu pogrzebowego, pracownicy operacyjni, projektanci/handlowcy), zespo?u projektowego i deweloperskiego oraz osób odpowiedzialnych za testy i wdro?enie.

Celem SRS jest jednoznaczne opisanie zakresu systemu, wymaga? funkcjonalnych i niefunkcjonalnych oraz ogranicze? i za?o?e?, aby umo?liwi?:
- zaprojektowanie rozwi?zania,
- implementacj?,
- przygotowanie testów akceptacyjnych i jako?ciowych,
- walidacj? oczekiwa? interesariuszy.

## 1.2 Wizja, zakres i cele produktu

### Wizja
System ma zapewni? klientom i pracownikom zak?adu pogrzebowego jedno, spójne ?rodowisko do realizacji kluczowych procesów: planowania us?ug (pre-need), konfiguracji i zakupu nagrobków online oraz organizacji transmisji ceremonii w sposób godny, prywatny i niezawodny.

### Zakres (co system robi)
System obejmuje trzy g?ówne domeny funkcjonalne:

A) Pre-need:
- Utworzenie i edycja planu us?ug pogrzebowych z wyprzedzeniem (plan pre-need).
- Prezentacja kosztów oraz wariantów us?ug i rejestracja decyzji klienta.
- Przechowywanie dokumentów, zgód i informacji wymaganych do realizacji planu.
- Udost?pnienie planu uprawnionym osobom (np. beneficjent/rodzina) wed?ug polityki dost?pu.

B) Nagrobki online:
- Prezentacja katalogu nagrobków i akcesoriów (produkty, warianty, dodatki).
- Konfigurator/projektowanie: wybór opcji (materia?, wymiary, napis, dodatki) oraz zapis projektu.
- Proces wyceny, zamówienia i p?atno?ci oraz obs?uga statusów realizacji.
- Workflow akceptacji projektu (wersje projektu ? akceptacja klienta ? przekazanie do realizacji).

C) Transmisje ceremonii:
- Zamówienie transmisji i konfiguracja prywatnego dost?pu (link/token).
- Do??czenie do transmisji jednym klikni?ciem (bez skomplikowanej rejestracji).
- Narz?dzia operatora: powi?zanie transmisji z ceremoni?, test obrazu i d?wi?ku oraz podstawowy monitoring w trakcie.

Dodatkowo system obejmuje funkcje wspólne:
- zarz?dzanie kontami, rolami i uprawnieniami,
- powiadomienia (e-mail/SMS) o statusach (np. projekt do akceptacji, potwierdzenie zamówienia, link do transmisji),
- podstawowy panel administracyjny (monitoring, rozliczenia, zgodno?? z przepisami).

### Cele biznesowe i KPIs (mierzalne kryteria sukcesu)
W obszarze transmisji (bazuj?c na za?o?eniach MVP z materia?ów wej?ciowych):
- KPI-TR-01: W ci?gu 6 miesi?cy od uruchomienia MVP co najmniej 25% ceremonii w zak?adach wspó?pracuj?cych ma by? transmitowanych online z wykorzystaniem platformy.
- KPI-TR-02: ?rednia ocena satysfakcji rodzin z jako?ci transmisji oraz ?atwo?ci dost?pu ? 4,0/5.
- KPI-TR-03: Odsetek ceremonii z powa?nym incydentem technicznym (np. przerwanie transmisji > 2 minuty) ? 2%.

Dla obszaru pre-need i nagrobków online (do doprecyzowania z interesariuszem podczas analizy wymaga?):
- KPI-PN-01: Odsetek u?ytkowników, którzy uko?cz? konfiguracj? planu pre-need (draft ? zaakceptowany) ? X% w okresie Y.
- KPI-NG-01: Wspó?czynnik konwersji w module nagrobków (koszyk ? zamówienie op?acone) ? X% w okresie Y.
- KPI-NG-02: Odsetek projektów nagrobków zaakceptowanych w pierwszej iteracji ? X% (jako miara jako?ci konfiguratora i procesu ofertowania).
Uwaga: warto?ci X i Y zostan? uzupe?nione w trakcie walidacji wymaga?.

### Poza zakresem (dla MVP / pierwszej wersji)
Poza zakresem pierwszej wersji (o ile nie zostanie ustalone inaczej) pozostaj?:
- Budowa w?asnej infrastruktury streamingowej od zera (zak?adamy u?ycie chmury: live streaming + CDN).
- Rozbudowana integracja z zewn?trznymi systemami ERP/ksi?gowymi oraz pe?ne procesy magazynowe.
- Zaawansowany konfigurator 3D/AR w czasie rzeczywistym (mo?liwy w kolejnych iteracjach).
- Multi-region jako domy?lna konfiguracja infrastruktury (zale?ne od kosztów i potrzeb).

## 1.3 Definicje, akronimy i skróty
- SRS — Specyfikacja Wymaga? Oprogramowania.
- MVP — Minimum Viable Product.
- KPI — Key Performance Indicator.
- Pre-need — zakup/planowanie us?ug pogrzebowych z wyprzedzeniem.
- Beneficjent / osoba uprawniona — osoba, która mo?e uzyska? dost?p do planu pre-need lub informacji o ceremonii.
- Konfigurator nagrobków — modu? umo?liwiaj?cy personalizacj? i zapis projektu nagrobka.
- Wycena — wyliczenie kosztu projektu/produktu wraz z dodatkami i us?ug? monta?u (je?li dotyczy).
- Akceptacja projektu — zatwierdzenie przez klienta wersji projektu do realizacji.
- LIVE — transmisja na ?ywo.
- CDN — Content Delivery Network.
- Token / prywatny link — mechanizm autoryzacji dost?pu do transmisji lub zasobu.
- EOG — Europejski Obszar Gospodarczy.
- RODO/GDPR — przepisy o ochronie danych osobowych.

## 1.4 Przegl?d dokumentu
- Rozdzia? 2 przedstawia ogólny opis produktu: modu?y, role u?ytkowników, ograniczenia i za?o?enia.
- Rozdzia? 3 opisuje interfejsy zewn?trzne: UI (w tym makiety g?ównego przypadku u?ycia) oraz integracje API (p?atno?ci, powiadomienia, streaming).
- Rozdzia? 4 zawiera wymagania funkcjonalne (User Stories i kryteria akceptacji Given-When-Then) oraz ich priorytety.
- Rozdzia? 5 opisuje wymagania niefunkcjonalne/atrybuty jako?ciowe (mierzalne i weryfikowalne) dla ca?ego systemu.
- Rozdzia? 6 zawiera analiz? porównawcz? i wnioski wp?ywaj?ce na wymagania.
- Dodatki zawieraj? modele analityczne (diagram przypadków u?ycia), persony oraz list? kwestii otwartych.

# 2. Opis ogólny

## 2.1 G?ówne funkcje produktu
System informatyczny zak?adu pogrzebowego sk?ada si? z trzech g?ównych domen funkcjonalnych oraz funkcji wspólnych (cross-cutting). Poni?sze modu?y opisuj? zakres na wysokim poziomie; szczegó?y znajduj? si? w Rozdziale 4.

### A) Modu? Pre-need (planowanie i zakup us?ug z wyprzedzeniem)
- F-PN-01: Utworzenie planu pre-need (konfiguracja us?ug, preferencji, bud?etu).
- F-PN-02: Edycja i wersjonowanie planu (statusy: draft/zaakceptowany/op?acony).
- F-PN-03: Dokumenty i zgody (obs?uga o?wiadcze? i informacji wymaganych do realizacji planu).
- F-PN-04: Udost?pnienie planu osobom uprawnionym (np. beneficjent/rodzina) zgodnie z polityk? dost?pu.

### B) Modu? Nagrobki online (sprzeda? + projektowanie)
- F-NG-01: Katalog produktów (nagrobki, akcesoria) z filtrowaniem i wyszukiwaniem.
- F-NG-02: Konfigurator/projektowanie nagrobka (warianty, materia?, wymiary, napis, dodatki).
- F-NG-03: Wycena i proces zamówienia (koszyk, dane do realizacji, p?atno??).
- F-NG-04: Workflow projektu i akceptacji (wersje projektu ? akceptacja klienta ? przekazanie do realizacji).
- F-NG-05: Statusy realizacji i komunikacja (powiadomienia o zmianach statusu zamówienia/projektu).

### C) Modu? Transmisji ceremonii
- F-TR-01: Zamówienie transmisji dla ceremonii.
- F-TR-02: Prywatny dost?p (generowanie linku/tokena, kontrola dost?pu).
- F-TR-03: Do??czenie do transmisji (jeden klik, minimalne tarcie dla uczestnika).
- F-TR-04: Panel operatora (powi?zanie transmisji z ceremoni?, test A/V, monitoring statusu).

### D) Funkcje wspólne (cross-cutting)
- F-COM-01: Konta u?ytkowników, role i uprawnienia.
- F-COM-02: Powiadomienia (e-mail/SMS) dla kluczowych zdarze? (np. projekt do akceptacji, potwierdzenie zamówienia, link do transmisji).
- F-COM-03: Panel administracyjny (zarz?dzanie organizacj?, monitoring, podstawowe raportowanie).
- F-COM-04: Audyt dzia?a? (rejestrowanie krytycznych akcji w systemie).

## 2.2 Klasy u?ytkowników

### U-01: Klient pre-need (planowanie)
Osoba planuj?ca i (potencjalnie) op?acaj?ca us?ugi pogrzebowe z wyprzedzeniem.
Cele: spokojne przej?cie przez konfiguracj? planu, pewno?? i przejrzysto?? kosztów, mo?liwo?? aktualizacji danych.
Modu?y: Pre-need, Funkcje wspólne (powiadomienia, dokumenty, konto).

### U-02: Beneficjent / rodzina (osoba uprawniona)
Osoba, która ma otrzyma? dost?p do planu pre-need w okre?lonym momencie (lub wgl?d do ustale?).
Cele: szybki dost?p do ustale?, unikni?cie nieporozumie?, kontrola zgodno?ci realizacji z planem.
Modu?y: Pre-need (wgl?d), Funkcje wspólne (uprawnienia).

### U-03: Klient nagrobków (kupuj?cy / zamawiaj?cy)
Osoba konfiguruj?ca i zamawiaj?ca nagrobek oraz akcesoria.
Cele: ?atwe porównanie wariantów, czytelna wycena, prosty proces zamówienia i akceptacji projektu.
Modu?y: Nagrobki online, Funkcje wspólne (powiadomienia, p?atno?ci).

### U-04: Projektant / handlowiec zak?adu pogrzebowego
Pracownik obs?uguj?cy wyceny, konsultacje oraz przygotowanie wersji projektu do akceptacji.
Cele: szybkie przygotowanie i iterowanie projektu, minimalizacja b??dów, sprawna komunikacja z klientem.
Modu?y: Nagrobki online (workflow projektu), Funkcje wspólne (audyt, powiadomienia).

### U-05: Pracownik operacyjny zak?adu (realizacja us?ug)
Pracownik odpowiedzialny za realizacj? us?ug, terminy, harmonogram i obs?ug? klienta.
Cele: wgl?d w zamówienia i statusy, jedno ?ród?o prawdy, ograniczenie pomy?ek.
Modu?y: Pre-need (realizacja), Nagrobki (statusy), Transmisje (harmonogram), Funkcje wspólne.

### U-06: Operator transmisji (technik)
Osoba uruchamiaj?ca i nadzoruj?ca transmisj? ceremonii.
Cele: prosta konfiguracja, test A/V przed startem, szybka identyfikacja problemów.
Modu?y: Transmisje ceremonii.

### U-07: Zdalny uczestnik ceremonii
Osoba do??czaj?ca do transmisji przez link/token.
Cele: do??czenie bez skomplikowanej rejestracji, stabilny odbiór, prywatno??.
Modu?y: Transmisje ceremonii.

### U-08: Administrator systemu / w?a?ciciel platformy
Osoba odpowiedzialna za utrzymanie systemu, konfiguracj? organizacji, monitoring i zgodno??.
Cele: kontrola dost?pu, monitoring, raporty, zgodno?? z przepisami.
Modu?y: Funkcje wspólne + przekrojowy wgl?d.

## 2. Kluczowe wymagania i priorytetyzacja dla MVP

### Wymagania u?ytkownika (User Stories)

1. **Jako organizator pogrzebu (cz?onek rodziny)** chc? zamówi? us?ug? transmisji online razem z innymi us?ugami pogrzebowymi, aby za?atwi? wszystkie formalno?ci w jednym miejscu i nie zajmowa? si? technikaliami.

2. **Jako organizator pogrzebu** chc? wygenerowa? prywatny link do transmisji oraz udost?pni? go wybranym osobom (np. e-mailem lub komunikatorem), aby tylko zaproszeni mogli uczestniczy? w ceremonii.

3. **Jako zdalny uczestnik ceremonii** chc? do??czy? do transmisji jednym klikni?ciem w link, bez konieczno?ci zak?adania konta, aby szybko i bezproblemowo wzi?? udzia? w pogrzebie.

4. **Jako pracownik zak?adu pogrzebowego** chc? powi?za? transmisj? z konkretn? ceremoni? w harmonogramie (data, godzina, miejsce), aby mie? pewno??, ?e transmisja zostanie uruchomiona we w?a?ciwym czasie.

5. **Jako pracownik zak?adu pogrzebowego** chc? w prosty sposób przetestowa? obraz i d?wi?k przed rozpocz?ciem ceremonii, aby zminimalizowa? ryzyko problemów technicznych w trakcie transmisji.

6. **Jako organizator pogrzebu** chc? mie? mo?liwo?? odtworzenia nagrania z ceremonii przez ograniczony czas po pogrzebie, aby osoby, które nie mog?y uczestniczy? na ?ywo, mog?y obejrze? uroczysto?? pó?niej.

7. **Jako administrator systemu** chc? widzie? statystyki liczby transmisji i zdalnych uczestników, aby móc oceni? wykorzystanie platformy przez wspó?pracuj?ce zak?ady pogrzebowe.

---

### Priorytetyzacja wymaga? dla MVP

Priorytetyzacja zosta?a wykonana w oparciu o skal? Fibonacciego  
*(1, 2, 3, 5, 8, 13, 21)* oraz wzór:

**Priorytet = (Korzy?? + Kara) / (Koszt + Ryzyko)**

| Funkcja / User Story (skrót) | Korzy?? | Kara | Koszt | Ryzyko | Priorytet |
|-----------------------------|---------|------|-------|--------|-----------|
| Zamówienie transmisji razem z us?ugami pogrzebowymi | 13 | 13 | 8 | 5 | ? 2,0 |
| Generowanie prywatnego linku i udost?pnianie zaproszonym osobom | 13 | 13 | 5 | 3 | ? 3,25 |
| Do??czenie do transmisji jednym klikni?ciem, bez zak?adania konta | 13 | 13 | 5 | 5 | 2,6 |
| Powi?zanie transmisji z konkretn? ceremoni? w harmonogramie | 8 | 8 | 5 | 3 | 2,0 |
| Test obrazu i d?wi?ku przed ceremoni? | 8 | 8 | 3 | 3 | ? 2,67 |
| Odtwarzanie nagrania ceremonii przez ograniczony czas po pogrzebie | 8 | 5 | 8 | 5 | 1,0 |
| Statystyki liczby transmisji i zdalnych uczestników | 5 | 3 | 5 | 3 | 1,0 |

---

### Funkcje o najwy?szym priorytecie

Na potrzeby tej analizy najwy?szy priorytet maj? funkcje:

- generowanie prywatnego linku i jego udost?pnianie (2),
- do??czenie do transmisji jednym klikni?ciem (3),
- test obrazu i d?wi?ku przed ceremoni? (5),
- zamówienie transmisji wraz z us?ugami pogrzebowymi (1),
- podstawowe powi?zanie z harmonogramem ceremonii (4).

---

### Zakres MVP – uzasadnienie

MVP powinien skupi? si? na umo?liwieniu realizacji **stabilnej i prywatnej transmisji** z minimalnym tarciem po stronie rodziny oraz zdalnych uczestników. Bezpo?rednio wspiera to g?ówny cel biznesowy: wysoki udzia? transmisji w ceremoniach oraz wysoki poziom satysfakcji rodzin.

#### Funkcje wchodz?ce w zakres MVP

- zamówienie transmisji wraz z us?ugami pogrzebowymi (1),
- generowanie prywatnego linku i zarz?dzanie dost?pem (2),
- proste do??czenie do transmisji bez rejestracji (3),
- powi?zanie transmisji z harmonogramem ceremonii (4),
- test jako?ci obrazu i d?wi?ku przed rozpocz?ciem ceremonii (5).

#### Funkcje poza zakresem MVP

Funkcje o ni?szym priorytecie, takie jak:
- odtwarzanie nagrania po ceremonii (6),
- rozbudowane statystyki (7),

mog? zosta? zrealizowane w kolejnych iteracjach, poniewa? nie s? krytyczne dla podstawowego do?wiadczenia **„uczestnictwa na ?ywo”**.

# 3. Wymagania dotycz?ce interfejsów zewn?trznych

## 3.1 Interfejsy u?ytkownika (UI)

### Za?o?enia ogólne UI
Interfejs u?ytkownika ma minimalizowa? liczb? kroków w kluczowych procesach oraz by? czytelny dla u?ytkowników o niskich kompetencjach cyfrowych (w tym osoby starsze). UI ma by? responsywny (desktop i mobile) oraz stosowa? prosty j?zyk i jednoznaczne komunikaty statusów.

### G?ówny przypadek u?ycia zamodelowany w makietach
Wybrany g?ówny przypadek u?ycia: „Konfiguracja i zamówienie nagrobka online wraz z akceptacj? projektu”.

Makiety zawieraj? ?cie?k?:
- Katalog ? karta produktu ? konfigurator ? wycena ? koszyk ? checkout ? status zamówienia ? akceptacja projektu.

**Podgl?d ekranów procesu:**
![Ekran startowy](../mockups/1_Start.png)
![Projektowanie i konfiguracja](../mockups/3_Projektowanie.png)

Link do szablonu (pe?ny przebieg):
![Pe?ny szablon animacja](../mockups/5_FullTemplate.gif)

### Pozosta?e kluczowe ekrany (opis tekstowy, bez pe?nych makiet)
A) Pre-need:
- Utworzenie planu (kroki konfiguracji us?ug i danych).
- Podsumowanie kosztów i status planu (draft/zaakceptowany/op?acony).
- Dokumenty i zgody.

![Planowanie Pre-need](../mockups/2_Planowanie.png)

B) Transmisje ceremonii:
- Strona do??czenia do transmisji przez prywatny link/token.
- Panel operatora: powi?zanie transmisji z ceremoni?, test A/V, status transmisji.
- Panel organizatora: zamówienie transmisji i wygenerowanie linku.

![Panel Transmisji](../mockups/4_Transmisje.png)

C) Projektowanie nagrobków online:
- Interfejs konfiguratora wizualnego (wybór kszta?tu, rodzaju kamienia, napisów).
- Podgl?d projektu w czasie rzeczywistym.
- Dynamiczna kalkulacja ceny w zale?no?ci od wybranej konfiguracji i dodatków.

![Projektowanie i konfiguracja](../mockups/3_Projektowanie.png)

## 3.2 Interfejsy programowe (API) i integracje

### Integracja: P?atno?ci online (wymagana dla nagrobków online; opcjonalna dla pre-need)
Cel: obs?uga p?atno?ci za zamówienia (nagrobki) oraz ewentualnie op?aty za plan pre-need.

Zakres integracji:
- Utworzenie p?atno?ci dla zamówienia.
- Odbiór potwierdzenia p?atno?ci (webhook/callback).
- Obs?uga statusów: rozpocz?ta / op?acona / odrzucona / wygas?a / zwrócona (je?li w zakresie).
- Idempotencja: powtórzone powiadomienia z bramki p?atno?ci nie mog? powodowa? zdublowania op?acenia zamówienia.

Minimalny model danych (logiczny):
- order_id, amount, currency, payment_status, provider_reference, created_at, updated_at.

### Integracja: Powiadomienia e-mail/SMS (wspólna dla wszystkich modu?ów)
Cel: informowanie klientów i pracowników o zdarzeniach systemowych.

Przyk?adowe zdarzenia:
- potwierdzenie z?o?enia zamówienia nagrobka,
- „projekt do akceptacji” i „zaakceptowano projekt”,
- zmiana statusu zamówienia,
- link/token do transmisji ceremonii,
- potwierdzenie akceptacji planu pre-need.

Minimalne operacje:
- wysy?ka wiadomo?ci (email/SMS),
- logowanie wysy?ek (status: wys?ano/b??d) w celu diagnostyki.

### Integracja: Dostawca streamingu LIVE + CDN (wymagana dla modu?u transmisji)
Cel: realizacja transmisji live i dystrybucja tre?ci do uczestników z zapewnieniem jako?ci i skalowalno?ci.

Zakres integracji po stronie systemu:
- Utworzenie/konfiguracja zasobu transmisji dla ceremonii.
- Pozyskanie adresu odtwarzania (playback URL) dla uczestników.
- Odczyt statusu transmisji (np. przygotowana/trwa/zako?czona/b??d).
- Kontrola dost?pu: weryfikacja tokenu/linku przed udost?pnieniem odtwarzania.

Minimalne operacje (logiczne, niezale?ne od dostawcy):
- createStream(ceremony_id, start_time, metadata)
- getStreamStatus(stream_id)
- getPlaybackUrl(stream_id)
- stopStream(stream_id) — je?li wspierane

### Integracja: Generowanie dokumentów / podpis (opcjonalne, zale?ne od wymaga? pre-need)
Cel: tworzenie dokumentów podsumowuj?cych plan pre-need oraz ewentualna akceptacja formalna.

Zakres (je?li wprowadzamy):
- generowanie PDF podsumowania planu,
- archiwizacja dokumentu,
- ewentualnie: podpis elektroniczny / potwierdzenie akceptacji.

### Wymagania bezpiecze?stwa na styku integracji (wysoki poziom)
- Wszystkie integracje musz? korzysta? z szyfrowania w tranzycie (HTTPS/TLS).
- Token/link transmisji nie mo?e ujawnia? danych wra?liwych i musi by? weryfikowany po stronie serwera przed udost?pnieniem tre?ci.
- Webhooki (np. od p?atno?ci) musz? by? weryfikowane (np. podpis/sekret wspó?dzielony) i odporne na ponowne wys?anie (idempotencja).

# 4. Wymagania funkcjonalne (WF)

Ten rozdzia? opisuje wymagania funkcjonalne systemu informatycznego dla zak?adu pogrzebowego oferuj?cego us?ugi typu pre-need, sprzeda? i projektowanie nagrobków online oraz transmisje ceremonii pogrzebowych. Wymagania s? zapisane z perspektywy u?ytkownika (User Stories) oraz zawieraj? testowalne kryteria akceptacji w formacie Given–When–Then (GWT).

Wymagania pogrupowano wed?ug domen:
- PN — pre-need
- NG — nagrobki online (sprzeda? + projekt)
- TR — transmisje ceremonii
- COM — funkcje wspólne

---

## 4.0 Konwencje
- Identyfikatory: `WF-[DOMENA]-[NNN]-[SCENARIUSZ]` (np. `WF-NG-002-01`).
- Ka?de WF zawiera: opis, user story, cel biznesowy, warunki wst?pne/ko?cowe oraz kryteria akceptacji GWT (scenariusz g?ówny + alternatywny + wyj?tkowy).
- Statusy (propozycja, mo?na dopasowa?):
  - Pre-need: `Draft`, `Zaakceptowany`, `Op?acony` (je?li p?atno?ci w zakresie), `Zarchiwizowany`.
  - Zamówienie nagrobka: `Szkic`, `Zamówione`, `Oczekuje na akceptacj?`, `Zaakceptowane`, `W realizacji`, `Zako?czone`, `Anulowane`.
  - Transmisja: `Zaplanowana`, `Gotowa`, `LIVE`, `Zako?czona`, `B??d`.

---

## 4.1 Pre-need (PN)

### 4.1.1 WF-PN-001: Utworzenie planu pre-need (Draft)
**Opis:** Umo?liwia klientowi utworzenie planu us?ug pogrzebowych z wyprzedzeniem i zapisanie go jako szkic.  
**User Story:** Jako klient pre-need chc? utworzy? plan pre-need, abym móg? zapisa? moje preferencje i wróci? do nich pó?niej.  
**Cel biznesowy:** Zwi?kszenie liczby klientów pre-need i ograniczenie niejasno?ci na etapie realizacji us?ug.  
**Warunki wst?pne:** U?ytkownik jest w module pre-need (konto lub tryb go?cia — decyzja produktowa).  
**Warunki ko?cowe:** Plan w statusie `Draft` jest zapisany i ma identyfikator.

**Kryteria akceptacji:**
- **WF-PN-001-01: Utworzenie planu (Scenariusz g?ówny)**
  - Given: U?ytkownik znajduje si? w module pre-need.
  - And: System wy?wietla formularz utworzenia planu z polami wymaganymi.
  - When: U?ytkownik uzupe?nia wymagane pola i wybiera „Zapisz”.
  - Then: System zapisuje plan jako `Draft`.
  - And: System wy?wietla podsumowanie planu oraz mo?liwo?? dalszej edycji.
- **WF-PN-001-02: Próba zapisu bez danych (Scenariusz alternatywny)**
  - Given: U?ytkownik edytuje formularz planu.
  - When: U?ytkownik wybiera „Zapisz” bez uzupe?nienia pól wymaganych.
  - Then: System wskazuje brakuj?ce pola i nie zapisuje planu.
- **WF-PN-001-03: B??d zapisu (Scenariusz wyj?tkowy)**
  - Given: U?ytkownik ma uzupe?nione wymagane dane planu.
  - When: Wyst?pi b??d po stronie systemu podczas zapisu.
  - Then: System wy?wietla komunikat b??du oraz umo?liwia ponowienie operacji bez utraty wprowadzonych danych.

---

### 4.1.2 WF-PN-002: Edycja planu i zapis zmian
**Opis:** Umo?liwia edycj? us?ug, preferencji i danych w planie pre-need.  
**User Story:** Jako klient pre-need chc? edytowa? plan, aby dopasowa? us?ugi i koszty do mojej sytuacji.  
**Cel biznesowy:** Zmniejszenie rezygnacji dzi?ki mo?liwo?ci korekt oraz poprawa jako?ci danych.  
**Warunki wst?pne:** Istnieje plan w statusie `Draft` przypisany do u?ytkownika.  
**Warunki ko?cowe:** Zmieniony plan jest zapisany i widoczny w podsumowaniu.

**Kryteria akceptacji:**
- **WF-PN-002-01: Zapis edycji (Scenariusz g?ówny)**
  - Given: U?ytkownik ma otwarty plan w statusie `Draft`.
  - When: U?ytkownik zmienia elementy planu i wybiera „Zapisz zmiany”.
  - Then: System zapisuje zmiany i wy?wietla aktualne podsumowanie kosztów.
- **WF-PN-002-02: Anulowanie edycji (Scenariusz alternatywny)**
  - Given: U?ytkownik wprowadzi? zmiany w planie.
  - When: U?ytkownik wybiera „Anuluj”.
  - Then: System nie zapisuje zmian i przywraca ostatnio zapisan? wersj? planu.
- **WF-PN-002-03: Konflikt edycji (Scenariusz wyj?tkowy)**
  - Given: Plan zosta? zmieniony przez inny proces (np. pracownik) po otwarciu go przez klienta.
  - When: U?ytkownik próbuje zapisa? swoj? wersj?.
  - Then: System informuje o konflikcie i wymaga ponownego wczytania planu przed zapisem.

---

### 4.1.3 WF-PN-003: Akceptacja planu pre-need
**Opis:** Umo?liwia przej?cie planu z Draft do Zaakceptowany (formalny wybór us?ug).  
**User Story:** Jako klient pre-need chc? zaakceptowa? plan, aby zak?ad pogrzebowy móg? go zrealizowa? zgodnie z moimi ustaleniami.  
**Cel biznesowy:** Zamkni?cie procesu decyzyjnego i umo?liwienie realizacji/rozlicze?.  
**Warunki wst?pne:** Plan jest kompletny i w statusie `Draft`.  
**Warunki ko?cowe:** Plan ma status `Zaakceptowany`, a system rejestruje dat? akceptacji.

**Kryteria akceptacji:**
- **WF-PN-003-01: Akceptacja kompletnego planu (Scenariusz g?ówny)**
  - Given: U?ytkownik ogl?da podsumowanie kompletnego planu `Draft`.
  - When: U?ytkownik wybiera „Akceptuj plan” i potwierdza operacj?.
  - Then: System ustawia status planu na `Zaakceptowany`.
  - And: System zapisuje dat? i identyfikator u?ytkownika, który zaakceptowa? plan.
- **WF-PN-003-02: Próba akceptacji niekompletnego planu (Scenariusz alternatywny)**
  - Given: Plan w statusie `Draft` ma brakuj?ce wymagane dane.
  - When: U?ytkownik wybiera „Akceptuj plan”.
  - Then: System blokuje akceptacj? i wskazuje brakuj?ce elementy.
- **WF-PN-003-03: B??d procesu akceptacji (Scenariusz wyj?tkowy)**
  - Given: Plan jest kompletny.
  - When: Wyst?pi b??d systemu w trakcie akceptacji.
  - Then: System nie zmienia statusu i wy?wietla komunikat umo?liwiaj?cy ponowienie akceptacji.

---

## 4.2 Nagrobki online (NG)

### 4.2.1 WF-NG-001: Przegl?d katalogu i filtrowanie
**Opis:** Umo?liwia klientowi przegl?d katalogu nagrobków i akcesoriów oraz filtrowanie wyników.  
**User Story:** Jako klient chc? filtrowa? katalog nagrobków, abym móg? szybko znale?? odpowiedni produkt.  
**Cel biznesowy:** Zwi?kszenie konwersji poprzez szybsze znalezienie produktu.  
**Warunki wst?pne:** Katalog zawiera produkty aktywne.  
**Warunki ko?cowe:** U?ytkownik widzi list? produktów zgodn? z kryteriami.

**Kryteria akceptacji:**
- **WF-NG-001-01: Filtrowanie wyników (Scenariusz g?ówny)**
  - Given: U?ytkownik jest na stronie katalogu.
  - When: U?ytkownik ustawia filtry (np. materia?/cena/styl).
  - Then: System aktualizuje list? produktów zgodnie z filtrami.
- **WF-NG-001-02: Brak wyników (Scenariusz alternatywny)**
  - Given: U?ytkownik ustawi? filtry.
  - When: ?aden produkt nie spe?nia kryteriów.
  - Then: System pokazuje komunikat „Brak wyników” i umo?liwia reset filtrów.
- **WF-NG-001-03: B??d ?adowania katalogu (Scenariusz wyj?tkowy)**
  - Given: U?ytkownik wchodzi do katalogu.
  - When: Wyst?pi b??d po stronie serwera.
  - Then: System wy?wietla b??d i umo?liwia ponowienie próby.

---

### 4.2.2 WF-NG-002: Konfigurator i zapis projektu nagrobka
**Opis:** Umo?liwia konfiguracj? wariantów nagrobka (opcje, napis, dodatki) oraz zapis projektu.  
**User Story:** Jako klient chc? skonfigurowa? nagrobek i zapisa? projekt, aby móc przej?? do wyceny i zamówienia.  
**Cel biznesowy:** Umo?liwienie personalizacji i sprzeda?y online.  
**Warunki wst?pne:** U?ytkownik otworzy? kart? produktu w konfiguratorze.  
**Warunki ko?cowe:** Projekt jest zapisany i ma identyfikator projektu.

**Kryteria akceptacji:**
- **WF-NG-002-01: Zapis projektu (Scenariusz g?ówny)**
  - Given: U?ytkownik jest w konfiguratorze.
  - And: U?ytkownik wybra? warianty i uzupe?ni? wymagane pola (np. napis).
  - When: U?ytkownik wybiera „Zapisz projekt”.
  - Then: System zapisuje projekt i wy?wietla podsumowanie projektu wraz z cen? (lub cen? „od”).
- **WF-NG-002-02: Walidacja tekstu napisu (Scenariusz alternatywny)**
  - Given: U?ytkownik wpisuje napis na nagrobku.
  - When: Napis przekracza limit d?ugo?ci lub zawiera niedozwolone znaki.
  - Then: System wy?wietla b??d walidacji i blokuje zapis projektu.
- **WF-NG-002-03: Niedost?pna opcja (Scenariusz wyj?tkowy)**
  - Given: U?ytkownik ma otwarty konfigurator.
  - When: Wybrana opcja sta?a si? niedost?pna (np. wycofana).
  - Then: System informuje o problemie i wymaga wyboru alternatywy przed zapisem.

---

### 4.2.3 WF-NG-003: Wycena, koszyk i z?o?enie zamówienia
**Opis:** Umo?liwia utworzenie zamówienia na podstawie projektu i przej?cie przez checkout.  
**User Story:** Jako klient chc? z?o?y? zamówienie na skonfigurowany nagrobek, aby go kupi? online.  
**Cel biznesowy:** Monetyzacja kana?u online i skrócenie ?cie?ki zakupowej.  
**Warunki wst?pne:** Istnieje zapisany projekt.  
**Warunki ko?cowe:** Zamówienie zostaje utworzone i ma status `Zamówione` lub `Oczekuje na p?atno??` (zale?nie od modelu p?atno?ci).

**Kryteria akceptacji:**
- **WF-NG-003-01: Utworzenie zamówienia (Scenariusz g?ówny)**
  - Given: U?ytkownik jest w podsumowaniu projektu.
  - When: U?ytkownik dodaje projekt do koszyka i przechodzi do checkout.
  - Then: System pozwala uzupe?ni? dane zamówienia i potwierdzi? z?o?enie zamówienia.
- **WF-NG-003-02: Nieudana p?atno?? (Scenariusz alternatywny)**
  - Given: U?ytkownik jest w kroku p?atno?ci.
  - When: P?atno?? zostaje odrzucona.
  - Then: System nie oznacza zamówienia jako op?acone i informuje u?ytkownika o mo?liwo?ci ponowienia.
- **WF-NG-003-03: Brak danych wymaganych (Scenariusz wyj?tkowy)**
  - Given: U?ytkownik jest w checkout.
  - When: U?ytkownik próbuje potwierdzi? zamówienie bez danych wymaganych.
  - Then: System blokuje z?o?enie zamówienia i wskazuje brakuj?ce pola.

---

### 4.2.4 WF-NG-004: Akceptacja projektu i wersjonowanie
**Opis:** Umo?liwia przes?anie projektu do akceptacji oraz akceptacj?/odrzucenie przez klienta.  
**User Story:** Jako klient chc? zaakceptowa? lub poprosi? o poprawki do projektu, aby finalny projekt by? zgodny z oczekiwaniami.  
**Cel biznesowy:** Redukcja b??dów i sporów, formalizacja „zgody” klienta na realizacj?.  
**Warunki wst?pne:** Projekt zosta? oznaczony jako „do akceptacji” przez pracownika/proces.  
**Warunki ko?cowe:** System rejestruje decyzj? klienta i ustawia odpowiedni status.

**Kryteria akceptacji:**
- **WF-NG-004-01: Akceptacja projektu (Scenariusz g?ówny)**
  - Given: Klient widzi najnowsz? wersj? projektu do akceptacji.
  - When: Klient wybiera „Akceptuj”.
  - Then: System ustawia status na `Zaakceptowane` i rejestruje dat? akceptacji.
- **WF-NG-004-02: Pro?ba o poprawki (Scenariusz alternatywny)**
  - Given: Klient widzi projekt do akceptacji.
  - When: Klient wybiera „Popro? o poprawki” i dodaje komentarz.
  - Then: System zapisuje komentarz i ustawia status `Wymaga poprawek`.
- **WF-NG-004-03: Akceptacja nieaktualnej wersji (Scenariusz wyj?tkowy)**
  - Given: Istnieje nowsza wersja projektu ni? ta wy?wietlana klientowi.
  - When: Klient próbuje zaakceptowa? starsz? wersj?.
  - Then: System blokuje operacj? i wymaga zapoznania si? z najnowsz? wersj?.

---

## 4.3 Transmisje ceremonii (TR)

### 4.3.1 WF-TR-001: Zamówienie transmisji ceremonii
**Opis:** Umo?liwia zamówienie transmisji dla wskazanej ceremonii.  
**User Story:** Jako organizator/rodzina chc? zamówi? transmisj? ceremonii, aby umo?liwi? zdalny udzia? bliskim.  
**Cel biznesowy:** Zwi?kszenie warto?ci oferty zak?adu i satysfakcji klientów.  
**Warunki wst?pne:** Istnieje ceremonia w harmonogramie lub mo?liwe jest jej utworzenie w systemie.  
**Warunki ko?cowe:** Transmisja ma status `Zaplanowana` i jest powi?zana z ceremoni?.

**Kryteria akceptacji:**
- **WF-TR-001-01: Utworzenie zamówienia transmisji (Scenariusz g?ówny)**
  - Given: Organizator jest na szczegó?ach ceremonii.
  - When: Wybiera „Zamów transmisj?” i potwierdza.
  - Then: System tworzy pozycj? transmisji powi?zan? z ceremoni?.
- **WF-TR-001-02: Brak danych ceremonii (Scenariusz alternatywny)**
  - Given: Ceremonia nie ma ustawionej daty/godziny.
  - When: Organizator próbuje zamówi? transmisj?.
  - Then: System blokuje operacj? i wymaga uzupe?nienia danych.
- **WF-TR-001-03: Brak dost?pno?ci terminu (Scenariusz wyj?tkowy)**
  - Given: Termin koliduje z ograniczeniami operacyjnymi.
  - When: Organizator zamawia transmisj?.
  - Then: System informuje o braku mo?liwo?ci realizacji w tym terminie i proponuje kontakt/alternatyw?.

---

### 4.3.2 WF-TR-002: Generowanie linku/tokena dost?pu
**Opis:** Umo?liwia wygenerowanie prywatnego linku/tokena do transmisji.  
**User Story:** Jako organizator chc? wygenerowa? prywatny link do transmisji, aby udost?pni? go tylko zaproszonym osobom.  
**Cel biznesowy:** Prywatno?? i kontrola dost?pu.  
**Warunki wst?pne:** Transmisja jest `Zaplanowana` lub `Gotowa`.  
**Warunki ko?cowe:** System generuje aktywny token/link przypisany do transmisji.

**Kryteria akceptacji:**
- **WF-TR-002-01: Wygenerowanie linku (Scenariusz g?ówny)**
  - Given: Organizator jest w panelu ceremonii/transmisji.
  - When: Wybiera „Generuj link”.
  - Then: System generuje link/token i wy?wietla go do skopiowania.
- **WF-TR-002-02: Regeneracja linku (Scenariusz alternatywny)**
  - Given: Link zosta? wcze?niej wygenerowany.
  - When: Organizator wybiera „Wygeneruj nowy link”.
  - Then: System uniewa?nia poprzedni link i generuje nowy.
- **WF-TR-002-03: Brak uprawnie? (Scenariusz wyj?tkowy)**
  - Given: U?ytkownik nie jest organizatorem ani pracownikiem uprawnionym.
  - When: Próbuje wygenerowa? link.
  - Then: System blokuje operacj? i nie ujawnia linku.

---

### 4.3.3 WF-TR-003: Do??czenie do transmisji przez link (bez konta)
**Opis:** Umo?liwia zdalnemu uczestnikowi do??czenie do transmisji jednym klikni?ciem.  
**User Story:** Jako zdalny uczestnik chc? do??czy? do transmisji przez link bez rejestracji, aby szybko uzyska? dost?p.  
**Cel biznesowy:** Minimalizacja tarcia i wsparcie osób mniej technicznych.  
**Warunki wst?pne:** Uczestnik posiada link/token.  
**Warunki ko?cowe:** Uczestnik widzi odtwarzacz transmisji lub komunikat stanu.

**Kryteria akceptacji:**
- **WF-TR-003-01: Poprawny link (Scenariusz g?ówny)**
  - Given: Uczestnik otwiera link z poprawnym tokenem.
  - When: System weryfikuje token.
  - Then: System wy?wietla stron? transmisji z odtwarzaczem.
- **WF-TR-003-02: Transmisja jeszcze nie rozpocz?ta (Scenariusz alternatywny)**
  - Given: Token jest poprawny.
  - When: Transmisja ma status `Zaplanowana`/`Gotowa`.
  - Then: System wy?wietla komunikat „Transmisja jeszcze si? nie rozpocz??a” oraz (opcjonalnie) godzin? startu.
- **WF-TR-003-03: Token niewa?ny (Scenariusz wyj?tkowy)**
  - Given: Uczestnik otwiera link z niewa?nym lub wygas?ym tokenem.
  - When: System weryfikuje token.
  - Then: System odmawia dost?pu i wy?wietla komunikat o braku autoryzacji.

---

### 4.3.4 WF-TR-004: Panel operatora — powi?zanie z harmonogramem + test A/V
**Opis:** Umo?liwia operatorowi przygotowanie transmisji i wykonanie testu audio-wideo.  
**User Story:** Jako operator chc? wykona? test A/V i uruchomi? transmisj? dla wybranej ceremonii, aby zapewni? jako?? transmisji.  
**Cel biznesowy:** Redukcja incydentów technicznych i poprawa jako?ci us?ugi.  
**Warunki wst?pne:** Operator ma uprawnienia, transmisja istnieje i jest powi?zana z ceremoni? (lub mo?e zosta? powi?zana).  
**Warunki ko?cowe:** Test A/V jest wykonany i zapisany jako wynik (OK/b??d) oraz widoczny status przygotowania.

**Kryteria akceptacji:**
- **WF-TR-004-01: Wykonanie testu A/V (Scenariusz g?ówny)**
  - Given: Operator wybra? ceremoni? w panelu operatora.
  - When: Operator uruchamia „Test A/V”.
  - Then: System pokazuje podgl?d obrazu i wska?nik poziomu d?wi?ku oraz wynik testu.
- **WF-TR-004-02: Ponowienie testu (Scenariusz alternatywny)**
  - Given: Test A/V zako?czy? si? b??dem.
  - When: Operator wybiera „Powtórz test”.
  - Then: System umo?liwia ponowienie testu bez resetowania ca?ej konfiguracji.
- **WF-TR-004-03: Brak urz?dze? wej?ciowych (Scenariusz wyj?tkowy)**
  - Given: Operator uruchamia test A/V.
  - When: System nie wykrywa kamery lub mikrofonu.
  - Then: System wy?wietla jednoznaczny komunikat o braku urz?dzenia i blokuje start transmisji.

---

## 4.4 Funkcje wspólne (COM)

### 4.4.1 WF-COM-001: Role i uprawnienia
**Opis:** System rozró?nia role i ogranicza dost?p do danych oraz operacji.  
**User Story:** Jako administrator chc? zarz?dza? rolami i uprawnieniami, aby dane klientów by?y dost?pne tylko dla uprawnionych osób.  
**Cel biznesowy:** Bezpiecze?stwo, zgodno?? i ograniczenie ryzyka b??dów.  
**Warunki wst?pne:** Administrator jest zalogowany.  
**Warunki ko?cowe:** Uprawnienia s? zapisane i egzekwowane przez system.

**Kryteria akceptacji:**
- **WF-COM-001-01: Nadanie roli (Scenariusz g?ówny)**
  - Given: Administrator jest w panelu zarz?dzania u?ytkownikami.
  - When: Administrator nadaje rol? (np. projektant/operator) u?ytkownikowi.
  - Then: System zapisuje zmian? i od tego momentu u?ytkownik ma dost?p do w?a?ciwych ekranów/operacji.
- **WF-COM-001-02: Brak uprawnie? (Scenariusz alternatywny)**
  - Given: U?ytkownik bez wymaganej roli próbuje wykona? operacj? administracyjn?.
  - When: U?ytkownik wykonuje akcj?.
  - Then: System odmawia dost?pu.
- **WF-COM-001-03: Próba dost?pu do cudzych danych (Scenariusz wyj?tkowy)**
  - Given: Klient nie jest w?a?cicielem zasobu (plan/zamówienie).
  - When: Próbuje otworzy? URL zasobu.
  - Then: System zwraca odmow? dost?pu i nie ujawnia danych.

---

### 4.4.2 WF-COM-002: Powiadomienia o zdarzeniach
**Opis:** System wysy?a powiadomienia (e-mail/SMS) o kluczowych zdarzeniach w procesach.  
**User Story:** Jako klient chc? dostawa? powiadomienia o zmianach statusu (zamówienie/projekt/transmisja), aby wiedzie? co si? dzieje.  
**Cel biznesowy:** Zmniejszenie liczby zapyta? do obs?ugi i poprawa do?wiadczenia klienta.  
**Warunki wst?pne:** U?ytkownik poda? kana? kontaktu (e-mail/telefon).  
**Warunki ko?cowe:** Powiadomienie zosta?o wys?ane lub oznaczone jako b??d wysy?ki.

**Kryteria akceptacji:**
- **WF-COM-002-01: Powiadomienie o projekcie do akceptacji (Scenariusz g?ówny)**
  - Given: Projekt nagrobka zmieni? status na „Do akceptacji”.
  - When: System rejestruje zmian? statusu.
  - Then: System wysy?a powiadomienie do klienta z linkiem do ekranu akceptacji.
- **WF-COM-002-02: Brak kana?u kontaktu (Scenariusz alternatywny)**
  - Given: Zdarzenie wymaga powiadomienia.
  - When: Brak e-mail/telefonu w profilu.
  - Then: System nie wysy?a powiadomienia i oznacza zdarzenie do obs?ugi (np. w panelu pracownika).
- **WF-COM-002-03: B??d dostawcy powiadomie? (Scenariusz wyj?tkowy)**
  - Given: System próbuje wys?a? powiadomienie.
  - When: Dostawca e-mail/SMS zwraca b??d.
  - Then: System rejestruje b??d i podejmuje ponown? prób? zgodnie z polityk? retry (szczegó?y w WNF).

---

## 4.5 Priorytetyzacja wymaga? dla MVP (model warto??/koszt/ryzyko)

Priorytetyzacja wymaga? dla MVP jest wykonana w sposób obiektywny, w oparciu o cztery czynniki oceniane w skali Fibonacciego (1, 2, 3, 5, 8, 13, 21): Korzy??, Kara, Koszt, Ryzyko. Skala Fibonacciego jest powszechnie stosowana w estymacjach w Agile jako skala wzgl?dna.

**Wzór:**
Priorytet = (Korzy?? + Kara) / (Koszt + Ryzyko)

Im wy?sza warto??, tym lepszy kandydat do MVP (wi?cej warto?ci wzgl?dem wysi?ku i ryzyka).

### Tabela priorytetyzacji (kandydaci do MVP)
| Funkcja (kandydat) | Korzy?? | Kara | Koszt | Ryzyko | Priorytet |
|---|---:|---:|---:|---:|---:|
| WF-TR-003 Do??czenie do transmisji przez link | 13 | 21 | 5 | 8 | 2.14 |
| WF-TR-002 Generowanie linku/tokena transmisji | 13 | 21 | 8 | 8 | 2.13 |
| WF-NG-003 Zamówienie i p?atno?? za nagrobek | 13 | 13 | 13 | 13 | 1.00 |
| WF-NG-002 Konfigurator i zapis projektu nagrobka | 13 | 8 | 13 | 8 | 1.17 |
| WF-PN-001 Utworzenie planu pre-need (Draft) | 8 | 8 | 8 | 5 | 1.07 |
| WF-NG-004 Akceptacja projektu (workflow) | 8 | 13 | 8 | 8 | 1.31 |
| WF-COM-001 Role i uprawnienia | 13 | 13 | 8 | 5 | 2.00 |

### Wniosek: proponowany zakres MVP
Na podstawie warto?ci priorytetu najwy?szymi kandydatami do MVP s?:
- WF-TR-003 (join) oraz WF-TR-002 (token/link) — kluczowy rdze? transmisji.
- WF-COM-001 (role/uprawnienia) — warunek bezpiecze?stwa dla danych i operacji.
- WF-NG-004 (akceptacja projektu) — du?a kara za brak (ryzyko sporów, b??dów realizacji) przy umiarkowanym koszcie.

### 5.1.1 Dost?pno?? (Availability)
- WNF-AV-001 (Transmisje): System musi umo?liwi? do??czenie do transmisji (join) dla co najmniej 99,5% prób w trakcie ceremonii (mierzone miesi?cznie).
- WNF-AV-002 (Transmisje): Planowane okna serwisowe nie mog? obejmowa? godzin „szczytu ceremonii” (definicja szczytu do ustalenia).
- WNF-AV-003 (Transmisje): System musi wykrywa? awarie komponentów krytycznych (health-check) w czasie ? 30 sekund.

### 5.1.2 Wydajno?? i UX (Performance/UX)
- WNF-PERF-001 (Transmisje): 95% sesji ogl?dania ma ?redni czas buforowania < 1 sekunda na minut? transmisji.
- WNF-PERF-002 (Transmisje): Czas od klikni?cia linku do rozpocz?cia odtwarzania nie mo?e przekroczy? X sekund (p95) przy typowych warunkach sieci domowej (X do ustalenia).

### 5.1.3 Bezpiecze?stwo (Security)
- WNF-SEC-001 (Transmisje): 100% prób dost?pu bez poprawnego tokenu/linku musi by? blokowanych (brak ujawnienia tre?ci).
- WNF-SEC-002 (Transmisje): Wszystkie po??czenia musz? odbywa? si? przez HTTPS/TLS (brak HTTP).
- WNF-SEC-003 (Transmisje): Token dost?pu musi by? czasowo ograniczony (TTL), a jego wa?no?? weryfikowana po stronie serwera.

### 5.1.4 Prywatno?? i RODO (Privacy/GDPR)
- WNF-PRIV-001: Dane osobowe i dane o ceremoniach musz? by? przechowywane w EOG.
- WNF-PRIV-002: Dane u?yte w ?rodowiskach testowych musz? by? zanonimizowane lub pseudonimizowane.
- WNF-PRIV-003: Dost?p administracyjny do danych produkcyjnych musi by? ograniczony i rejestrowany (audyt).

### 5.1.5 Skalowalno?? (Scalability)
- WNF-SCAL-001 (Transmisje): Architektura powinna obs?u?y? równolegle X ceremonii i Y ??cznych widzów jednoczesnych (X/Y do ustalenia, je?li brak – w Open Issues).

# 5. Atrybuty Jako?ciowe Systemu

Niniejszy rozdzia? opisuje atrybuty jako?ciowe projektowanego systemu informatycznego dla zak?adu pogrzebowego oferuj?cego us?ugi typu *pre-need*, sprzeda? i projektowanie nagrobków online oraz transmisje ceremonii pogrzebowych. 

---

## 5.1. Za?o?enia architektoniczne

System zosta? zaprojektowany w architekturze **mikroserwisów**, w której ka?da us?uga odpowiada za odr?bny obszar funkcjonalny. Przyj?to nast?puj?ce mikroserwisy:

- **User Service** – zarz?dzanie kontami u?ytkowników i autoryzacj?
- **Pre-Need Service** – obs?uga subskrypcji us?ug pogrzebowych
- **Payment Service** – integracja z systemami p?atno?ci
- **Design Service** – projektowanie i sprzeda? nagrobków online
- **Streaming Service** – transmisja ceremonii pogrzebowych
- **Notification Service** – powiadomienia e-mail i SMS
- **API Gateway** – centralny punkt dost?pu do systemu

Architektura ta umo?liwia niezale?ny rozwój, wdra?anie i skalowanie poszczególnych komponentów.

---

## 5.2. Jako?? wykonania

### 5.2.1. Wydajno?? (Performance)

- **WNF-WYD-01**  
  Czas odpowiedzi ka?dego mikroserwisu na zapytanie REST API nie mo?e przekroczy? **500 ms** dla 95% ??da?.

- **WNF-WYD-02**  
  API Gateway nie mo?e zwi?ksza? czasu odpowiedzi o wi?cej ni? **100 ms** wzgl?dem bezpo?redniego wywo?ania mikroserwisu.

- **WNF-WYD-03**  
  Mikroserwis streamingu musi obs?ugiwa? co najmniej **3000 jednoczesnych odbiorców transmisji** bez spadku jako?ci obrazu.

- **WNF-WYD-04**  
  P?atno?ci w aplikacji musz? dzia?a? asynchronicznie, aby nie blokowa? u?ytkownika w oknie przetwarzania.

- **WNF-WYD-05**  
  P?atno?ci cykliczne musz? by? wykonywane zawsze tego samego dnia miesi?ca. Serwis **Pre-Need Service** musi przetwarza? operacje wielow?tkowo.

---

### 5.2.2. Dost?pno?? i odporno?? na awarie (Availability & Resilience)

- **WNF-NIEZ-01**  
  Awaria pojedynczego mikroserwisu nie mo?e powodowa? niedost?pno?ci ca?ego systemu.

- **WNF-NIEZ-02**  
  Mikroserwisy musz? stosowa? mechanizmy **circuit breaker**, **retry** oraz **timeout** w komunikacji mi?dzyserwisowej.

- **WNF-NIEZ-03**  
  System musi umo?liwia? aktualizacj? pojedynczego mikroserwisu bez przerywania dzia?ania pozosta?ych us?ug.

---

### 5.2.3. Skalowalno?? (Scalability)

- **WNF-SKAL-01**  
  Ka?dy mikroserwis musi by? skalowalny horyzontalnie niezale?nie od pozosta?ych komponentów.

- **WNF-SKAL-02**  
  Mikroserwis streamingu musi umo?liwia? dynamiczne skalowanie w trakcie trwania ceremonii pogrzebowej.

- **WNF-SKAL-03**  
  System musi obs?ugiwa? co najmniej **10 000 jednoczesnych sesji u?ytkowników**.

---

### 5.3.2. Bezpiecze?stwo (Security)

- **WNF-BEZ-01**  
  Uwierzytelnianie i autoryzacja u?ytkowników musz? by? realizowane centralnie poprzez **User Service** z wykorzystaniem tokenów JWT. Dedykowana biblioteka zostanie u?yta to odszyfrowania tokenów przez ka?dy z serwisów.

- **WNF-BEZ-02**  
  Has?a u?ytkowników musz? by? przechowywane w postaci haszy z u?yciem algorytmu **bcrypt**. Ka?dy u?ytkownik b?dzie mia? inny SALT zapisany w bazie danych.

- **WNF-BEZ-03**  
  Dost?p do transmisji ceremonii pogrzebowych musi by? ograniczony do u?ytkowników posiadaj?cych odpowiednie uprawnienia lub link z zaproszeniem.

- **WNF-BEZ-04**  
  Po??czenia wewn?trz mikroserwisów i z aplikacj? klienck? zostan? zaszyfrowane certyfikatem TLSv1.3

---

## 5.3. Jako?? projektu

### 5.3.1. Modyfikowalno??

- **WNF-MOD-01**  
  Ka?dy mikroserwis musi posiada? w?asn?, niezale?n? baz? danych (zasada *Database per Service*).

- **WNF-MOD-02**  
  Mikroserwisy nie mog? komunikowa? si? bezpo?rednio poprzez bazy danych.

- **WNF-MOD-03**  
  Komunikacja mi?dzy mikroserwisami musi odbywa? si? wy??cznie poprzez API REST lub kolejki.

---

### 5.3.3. Obserwowalno?? (Observability)

- **WNF-OBS-01**  
  Ka?dy mikroserwis musi generowa? logi zbierane poprzez Logstash i wy?wietlane w Kibanie.

- **WNF-OBS-02**  
  System musi umo?liwia? monitorowanie czasu odpowiedzi oraz liczby b??dów dla ka?dego mikroserwisu.

- **WNF-OBS-03**  
  System musi wspiera? ?ledzenie przep?ywu pojedynczego ??dania pomi?dzy mikroserwisami (*distributed tracing*).

- **WNF-OBS-04**  
  Metryki dotycz?ce mikroserwisów (CPU, RAM, REQ/S) b?d? zbierane przez Prometheus'a i prezentowane w Grafanie.

---

### 5.3.4. Przeno?no?? i wdra?anie (Portability & Deployment)

- **WNF-DEP-01**  
  Ka?dy mikroserwis musi by? dostarczany jako osobny kontener Docker.

- **WNF-DEP-02**  
  System musi by? uruchamialny lokalnie za pomoc? jednego polecenia `docker-compose up`.

- **WNF-DEP-03**  
  Architektura systemu musi umo?liwia? automatyczne skalowanie us?ug w ?rodowisku orkiestracyjnym (np. Kubernetes).

---

## 5.4. Priorytetyzacja kluczowych wymaga? jako?ciowych

W celu zapewnienia spójnego i odpornego systemu, opartego na architekturze mikroserwisowej, przeprowadzono priorytetyzacj? najwa?niejszych wymaga? jako?ciowych.  
Ocena zosta?a wykonana w oparciu o **warto?? biznesow?**, **koszt implementacji** oraz **ryzyko techniczne**, zgodnie ze skal? Fibonacciego.

### 5.4.1. Metoda oceny

Ka?de wymaganie oceniono wed?ug kryteriów:

- **Korzy??** – warto?? biznesowa wynikaj?ca z realizacji wymagania,
- **Kara** – konsekwencje braku realizacji wymagania,
- **Koszt** – nak?ad pracy i z?o?ono?? implementacji,
- **Ryzyko** – ryzyko techniczne i architektoniczne.

Wszystkie warto?ci oszacowano w **skali Fibonacciego**:  
**1, 2, 3, 5, 8, 13, 21**

### Wzór priorytetu

> **Priorytet = (Korzy?? + Kara) / (Koszt + Ryzyko)**

---

### 5.4.2. Tabela priorytetyzacji wymaga?

| ID     | Wymaganie                                                                     | Korzy?? | Kara | Koszt | Ryzyko | Priorytet |
|--------|-------------------------------------------------------------------------------|---------|------|-------|--------|-----------|
| **Q1** | WNF-NIEZ-01 – Awaria jednego mikroserwisu nie powoduje niedost?pno?ci systemu | 21      | 21   | 13    | 8      | **2.00**  |
| **Q2** | WNF-NIEZ-02 – Circuit breaker, retry, timeout                                 | 13      | 13   | 8     | 8      | **1.63**  |
| **Q3** | WNF-NIEZ-03 – Aktualizacja mikroserwisu bez downtime                          | 13      | 8    | 13    | 5      | **1.05**  |
| **Q4** | WNF-SKAL-01 – Niezale?ne skalowanie mikroserwisów                             | 21      | 21   | 13    | 13     | **1.62**  |
| **Q5** | WNF-WYD-03 – Streaming 3000 odbiorców                                         | 21      | 21   | 21    | 21     | **1.00**  |
| **Q6** | WNF-BEZ-01 – Centralny serwis zar?dzaj?cy u?ytkownikami (User Service)        | 13      | 13   | 8     | 5      | **1.63**  |
| **Q7** | WNF-BEZ-03 – Kontrola dost?pu do transmisji                                   | 13      | 8    | 5     | 3      | **2.10**  |
| **Q8** | WNF-OBS-03 – Distributed tracing                                              | 8       | 5    | 5     | 5      | **1.08**  |

---

### 5.4.3. Ranking wymaga? wg priorytetu

1. **Q7 – Kontrola dost?pu do transmisji** (2.10)
2. **Q1 – Odporno?? na awari? mikroserwisu** (2.00)
3. **Q2 / Q6 – Mechanizmy odporno?ci i JWT** (1.63)
4. **Q4 – Skalowalno?? mikroserwisów** (1.62)
5. **Q8 – Distributed tracing** (1.08)
6. **Q3 – Aktualizacja bez downtime** (1.05)
7. **Q5 – Streaming 3000 odbiorców** (1.00)

---

### 5.4.4. Interpretacja wyników

Najwy?szy priorytet uzyska?y wymagania, które:
- maj? **wysok? warto?? biznesow?**,
- nios? **powa?ne konsekwencje w przypadku braku realizacji**,
- przy relatywnie **umiarkowanym koszcie i ryzyku**.

Szczególnie istotne s?:
- odporno?? na awarie mikroserwisów,
- bezpiecze?stwo dost?pu do transmisji,
- centralne uwierzytelnianie u?ytkowników.

---

## 5.5. Wnioski

Zastosowanie architektury mikroserwisowej pozwala na elastyczne dopasowanie systemu do zró?nicowanych wymaga? biznesowych zak?adu pogrzebowego. Szczególn? uwag? po?wi?cono bezpiecze?stwu, dost?pno?ci oraz skalowalno?ci, co jest kluczowe w kontek?cie us?ug finansowych oraz transmisji ceremonii pogrzebowych w czasie rzeczywistym.



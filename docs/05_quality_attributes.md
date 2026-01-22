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
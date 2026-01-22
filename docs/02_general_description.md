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


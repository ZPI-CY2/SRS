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

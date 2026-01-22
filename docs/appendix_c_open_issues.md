# Dodatek C: Kwestie do rozwiązania (Open Issues)

## Pre-need (PN)

- OI-PN-01 (Status: Open): Czy użytkownik może tworzyć plan pre-need jako gość, czy wymagane jest konto?
- OI-PN-02 (Status: Open): Czy pre-need obejmuje płatność online (całość/zaliczka), czy tylko zapis planu bez płatności w MVP?
- OI-PN-03 (Status: Open): Jak definiujemy „osobę uprawnioną/beneficjenta” oraz jak następuje nadanie dostępu (konto, link, weryfikacja)?
- OI-PN-04 (Status: Open): Jakie dane są minimalnie wymagane do akceptacji planu pre-need (checklista kompletności)?
- OI-PN-05 (Status: Open): Czy plan pre-need ma wersjonowanie (historia zmian widoczna dla klienta) czy tylko audyt dla pracowników?

## Nagrobki online (NG)

- OI-NG-01 (Status: Open): Czy konfigurator generuje „projekt do akceptacji” automatycznie, czy projektant zakładu przygotowuje wersję do akceptacji ręcznie?
- OI-NG-02 (Status: Open): Jakie statusy zamówienia uznajemy za obowiązkowe w MVP (minimalny workflow)?
- OI-NG-03 (Status: Open): Czy dopuszczamy zamówienie bez pełnej płatności (np. zaliczka) w MVP?
- OI-NG-04 (Status: Open): Jakie reguły walidacji dla napisu (limit znaków, dozwolone znaki, znaki diakrytyczne)?
- OI-NG-05 (Status: Open): Czy klient może anulować zamówienie online i na jakim etapie (przed/po akceptacji projektu)?
- OI-NG-06 (Status: Open): Czy obsługujemy zwroty/reklamacje w pierwszej wersji czy poza zakresem?

## Transmisje ceremonii (TR)

- OI-TR-01 (Status: Open): Czy transmisja jest zawsze prywatna (token/link), czy dopuszczamy tryb publiczny?
- OI-TR-02 (Status: Open): Czy uczestnik ma podawać imię/pseudonim przed wejściem do transmisji, czy pełna anonimowość?
- OI-TR-03 (Status: Open): Jak długo utrzymujemy ważność tokenu (TTL) oraz czy dopuszczamy regenerację tokenu?
- OI-TR-04 (Status: Open): Czy przechowujemy nagranie po ceremonii (VOD), a jeśli tak to jaka retencja i kto ma dostęp?

## Funkcje wspólne (COM)

- OI-COM-01 (Status: Open): Czy system jest multi-tenant (wiele zakładów pogrzebowych) czy single-tenant (jedna organizacja)?
- OI-COM-02 (Status: Open): Jakie role są obowiązkowe w MVP (np. klient, beneficjent, projektant, operator, admin) i jakie mają uprawnienia minimalne?
- OI-COM-03 (Status: Open): Jakie kanały powiadomień wspieramy w MVP: e-mail, SMS, oba?
- OI-COM-04 (Status: Open): Czy wymagamy 2FA dla pracowników/administratora w MVP?

## Integracje / dane / zgodność

- OI-INT-01 (Status: Open): Jaki dostawca płatności jest planowany i jaki model webhooków/weryfikacji podpisu będzie użyty?
- OI-INT-02 (Status: Open): Jaki dostawca streamingu + CDN jest planowany (wymóg chmurowy) i jakie są ograniczenia API?
- OI-INT-03 (Status: Open): Jakie dane muszą być przechowywane w EOG oraz jaka jest polityka retencji logów i dokumentów (RODO)?
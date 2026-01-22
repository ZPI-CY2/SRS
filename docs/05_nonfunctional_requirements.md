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

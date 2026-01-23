# Proof of Concept: System Zakładu Pogrzebowego
**Pre-need, Nagrobki Online, Transmisje Ceremonii**

**Data:** 23.01.2026  
**Wersja:** 0.1 (demonstracja możliwości)  
**Autor:** Zespół projektowy (Osoba 1)

---

## 1. Cel Proof of Concept

Demonstracja wykonalności kluczowych funkcjonalności systemu w ramach MVP:

- **Pre-need** – utworzenie planu pogrzebowego z wyprzedzeniem  
- **Nagrobki online** – konfiguracja i wycena nagrobka  
- **Transmisje** – generowanie prywatnego linku i symulacja dołączenia  

PoC potwierdza, że wymagania z SRS są technicznie wykonalne przy założonym budżecie  
(**1500–2000 PLN/mc infrastruktura**) i harmonogramie.

---

## 2. Założenia techniczne PoC

### Infrastruktura (1500 PLN/mc)

- **Frontend:** React 18 + Vite (development)
- **Backend:** Node.js 20 + Express + TypeScript
- **Baza:** PostgreSQL 16 (Supabase – darmowy tier)
- **Płatności:** Stripe (test mode)
- **Powiadomienia:** Resend (email) + Vonage (SMS)
- **Streaming:** AWS IVS lub Cloudflare Stream
- **CDN:** Cloudflare (darmowy tier)
- **Deployment:** Vercel (frontend) + Render (backend)

### Kluczowe integracje (mock / symulacja)

- Stripe – mock webhooki płatności  
- Streaming API – mock endpointy (IVS / Cloudflare)  
- Email/SMS – Resend / Vonage sandbox  

---

## 3. Demo flow (end-to-end)

### 🎬 Scenariusz 1: Klient tworzy plan pre-need

1. Klient wchodzi na `/pre-need` → formularz krokowy  
2. Wybiera: trumna drewniana, 2 wieńce, nagrobek granit, kremacja  
3. System generuje wycenę: **18 500 PLN**  
4. Klient zapisuje draft → dostaje email z linkiem do edycji  
5. [Screenshot: formularz + podsumowanie kosztów]  

**Weryfikacja:**

- WF-PN-001: ✓ Plan zapisany jako draft  
- WNF-PERF-010: ✓ Czas odpowiedzi < 1.5s  

---

### 🎬 Scenariusz 2: Klient konfiguruje i zamawia nagrobek

1. Katalog `/nagrobki` → filtr: granit, `< 10 000 PLN`  
2. Karta produktu → Konfigurator:
   - Wymiary: 100×60×8 cm  
   - Napis: *"Jan Kowalski 1950–2026"*  
   - Dodatki: wazon, krzyż  
3. Wycena: **8 750 PLN** (montaż w cenie)  
4. Koszyk → Checkout → Stripe (test card)  
5. Status: *„Projekt do akceptacji”* → email do klienta  

**Weryfikacja:**

- WF-NG-002: ✓ Konfigurator działa  
- WNF-SEC-010: ✓ Brak przechowywania danych kart  

---

### 🎬 Scenariusz 3: Transmisja ceremonii (operator + uczestnik)

1. Operator `/operator` → harmonogram ceremonii → **Uruchom transmisję**  
2. Test A/V → zielona dioda ✓ → *Gotowe do startu*  
3. System generuje token →  
   `https://stream.pl/watch?t=abc123XYZ`  
4. Organizator wysyła SMS/email z linkiem  
5. Uczestnik klika link → HLS player startuje w < 3s  

**Weryfikacja:**

- WF-TR-003: ✓ Join bez rejestracji  
- WNF-AV-001: ✓ Dostępność 99.5%  

---

## 4. Implementacja (kod + architektura)

### Backend (Node.js + Express)

```ts
// /api/pre-need/create
app.post('/api/pre-need/create', async (req, res) => {
  const plan = await db.preNeed.create({
    data: {
      customerId: req.user.id,
      services: req.body.services,
      totalCost: calculateCost(req.body),
      status: 'draft'
    }
  });
  await sendEmail(req.user.email, 'plan-link', { 
    editUrl: `https://app.pl/pre-need/${plan.id}/edit` 
  });
  res.json(plan);
});

// /api/stream/create-token  
app.post('/api/stream/create-token', async (req, res) => {
  const token = generateToken({ ceremonyId: req.body.ceremonyId });
  const playbackUrl = `https://stream.pl/watch?t=${token}`;
  await sendSMS(req.body.phone, 'join-link', { url: playbackUrl });
  res.json({ playbackUrl, expiresAt: token.expires });
});

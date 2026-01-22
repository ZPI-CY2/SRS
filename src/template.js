import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  PenTool, 
  CalendarClock, 
  Wifi, 
  ShoppingCart, 
  User, 
  Check, 
  ChevronRight, 
  Box, 
  Type, 
  CreditCard,
  Shield,
  Phone,
  MapPin
} from 'lucide-react';

// --- KOMPONENTY UI ---

const Button = ({ children, onClick, variant = 'primary', className = '', icon: Icon }) => {
  const baseStyle = "px-5 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20",
    secondary: "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm",
    accent: "bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-900/20",
    ghost: "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

const Card = ({ children, className = '', title, subtitle }) => (
  <div className={`bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden ${className}`}>
    {(title || subtitle) && (
      <div className="p-6 border-b border-slate-50 bg-slate-50/50">
        {title && <h3 className="text-lg font-semibold text-slate-800">{title}</h3>}
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
    )}
    <div className="p-6">
      {children}
    </div>
  </div>
);

// --- MODUŁ 1: PRE-NEED (PLANOWANIE) ---

const PreNeedWizard = () => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({ type: null, budget: null });

  const steps = [
    { num: 1, label: "Rodzaj Ceremonii" },
    { num: 2, label: "Finansowanie" },
    { num: 3, label: "Wola i Życzenia" },
    { num: 4, label: "Podsumowanie" }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif text-slate-900 mb-3">Zaplanuj Przyszłość (Pre-need)</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Zdejmij ciężar decyzyjny ze swoich bliskich. Skonfiguruj swoją ceremonię i zabezpiecz środki finansowe już dziś.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex justify-between items-center mb-8 relative px-4">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-200 -z-10"></div>
        {steps.map((s) => (
          <div key={s.num} className={`flex flex-col items-center bg-white px-2 ${step >= s.num ? 'text-amber-600' : 'text-slate-400'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 font-bold ${
              step >= s.num ? 'border-amber-600 bg-amber-50' : 'border-slate-200 bg-white'
            }`}>
              {step > s.num ? <Check size={20} /> : s.num}
            </div>
            <span className="text-xs font-medium uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Content Step 1 */}
      {step === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => setSelection({...selection, type: 'traditional'})}
            className={`p-8 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
              selection.type === 'traditional' ? 'border-amber-600 bg-amber-50/30' : 'border-slate-100 bg-white hover:border-slate-300'
            }`}
          >
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-4">
              <Box />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pogrzeb Tradycyjny</h3>
            <p className="text-slate-600 text-sm">Ceremonia z trumną, procesja na cmentarz, tradycyjna oprawa.</p>
          </button>

          <button 
             onClick={() => setSelection({...selection, type: 'cremation'})}
             className={`p-8 rounded-xl border-2 text-left transition-all hover:shadow-lg ${
              selection.type === 'cremation' ? 'border-amber-600 bg-amber-50/30' : 'border-slate-100 bg-white hover:border-slate-300'
            }`}
          >
            <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center text-white mb-4">
              <span className="text-xl font-serif">urn</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Kremacja</h3>
            <p className="text-slate-600 text-sm">Ceremonia pożegnalna z urną, możliwość kolumbarium lub grobu.</p>
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex justify-between">
        <Button variant="ghost" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>Wstecz</Button>
        <Button variant="primary" onClick={() => setStep(Math.min(4, step + 1))}>
          Dalej <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

// --- MODUŁ 2: KONFIGURATOR NAGROBKÓW 3D ---

const TombstoneConfigurator = () => {
  const [material, setMaterial] = useState('granit-black');
  const [shape, setShape] = useState('modern');
  const [inscription, setInscription] = useState({ name: 'Jan Kowalski', dates: '1950 - 2024', epitaph: 'Spoczywaj w pokoju' });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
      {/* Controls Panel */}
      <div className="lg:col-span-1 space-y-6 overflow-y-auto pr-2">
        <Card title="1. Wybierz Kształt">
          <div className="grid grid-cols-2 gap-3">
            {['Klasyczny', 'Nowoczesny', 'Podwójny', 'Urnowy'].map((s) => (
              <button 
                key={s}
                onClick={() => setShape(s.toLowerCase())}
                className={`p-3 text-sm border rounded hover:bg-slate-50 ${shape === s.toLowerCase() ? 'border-amber-600 ring-1 ring-amber-600' : 'border-slate-200'}`}
              >
                {s}
              </button>
            ))}
          </div>
        </Card>

        <Card title="2. Materiał i Kolor">
          <div className="space-y-3">
            {[
              { id: 'granit-black', name: 'Granit Szwedzki (Czarny)', color: 'bg-neutral-900' },
              { id: 'granit-grey', name: 'Granit Strzegom (Szary)', color: 'bg-neutral-400' },
              { id: 'marmur-white', name: 'Marmur Carrara (Biały)', color: 'bg-stone-100 border' },
              { id: 'impala', name: 'Impala (Ciemnoszary)', color: 'bg-slate-700' },
            ].map((m) => (
              <button 
                key={m.id}
                onClick={() => setMaterial(m.id)}
                className={`w-full flex items-center gap-3 p-2 rounded border transition-all ${material === m.id ? 'border-amber-600 bg-amber-50' : 'border-transparent hover:bg-slate-100'}`}
              >
                <div className={`w-8 h-8 rounded-full shadow-sm ${m.color}`}></div>
                <span className="text-sm font-medium text-slate-700">{m.name}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card title="3. Inskrypcja">
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Imię i Nazwisko</label>
              <input 
                type="text" 
                value={inscription.name}
                onChange={(e) => setInscription({...inscription, name: e.target.value})}
                className="w-full mt-1 p-2 border border-slate-300 rounded focus:border-amber-600 outline-none" 
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Daty</label>
              <input 
                type="text" 
                value={inscription.dates}
                onChange={(e) => setInscription({...inscription, dates: e.target.value})}
                className="w-full mt-1 p-2 border border-slate-300 rounded focus:border-amber-600 outline-none" 
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-500 uppercase">Epitafium</label>
              <textarea 
                value={inscription.epitaph}
                onChange={(e) => setInscription({...inscription, epitaph: e.target.value})}
                className="w-full mt-1 p-2 border border-slate-300 rounded focus:border-amber-600 outline-none text-sm" 
                rows="2"
              />
            </div>
          </div>
        </Card>
        
        <div className="bg-slate-900 text-white p-4 rounded-xl flex justify-between items-center">
          <div>
            <p className="text-xs text-slate-400">Szacunkowy koszt:</p>
            <p className="text-2xl font-bold">4 850 PLN</p>
          </div>
          <Button variant="accent" icon={ShoppingCart}>Zamów</Button>
        </div>
      </div>

      {/* Visualizer Area */}
      <div className="lg:col-span-2 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 grid grid-cols-[1fr_200px] pointer-events-none">
             {/* Background simulation */}
             <div className="col-span-2 bg-gradient-to-b from-blue-100 to-green-100 opacity-50"></div>
        </div>
        
        {/* Mockup of 3D Object */}
        <div className="relative z-10 flex flex-col items-center drop-shadow-2xl transform transition-transform duration-500 hover:scale-105">
           {/* Stone Shape */}
           <div 
             className={`w-64 h-80 rounded-t-full flex flex-col items-center justify-center p-6 text-center shadow-inner
               ${material === 'granit-black' ? 'bg-neutral-900 text-slate-200' : ''}
               ${material === 'granit-grey' ? 'bg-neutral-400 text-slate-900' : ''}
               ${material === 'marmur-white' ? 'bg-stone-100 text-slate-800' : ''}
               ${material === 'impala' ? 'bg-slate-700 text-slate-100' : ''}
             `}
             style={{ 
               borderRadius: shape === 'modern' ? '10px 10px 0 0' : '120px 120px 0 0',
               width: shape === 'podwójny' ? '400px' : '280px'
              }}
           >
             <div className="font-serif tracking-widest text-lg uppercase font-bold opacity-90">{inscription.name}</div>
             <div className="text-sm mt-1 mb-4 opacity-80">{inscription.dates}</div>
             <div className="text-xs italic font-light opacity-70">"{inscription.epitaph}"</div>
           </div>
           {/* Base */}
           <div className={`w-full h-8 ${
               material === 'granit-black' ? 'bg-neutral-800' : 
               material === 'granit-grey' ? 'bg-neutral-500' : 
               material === 'marmur-white' ? 'bg-stone-300' : 'bg-slate-800'
           } rounded-sm shadow-xl`}></div>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-slate-600">
          Widok: Front | Skala: 1:10
        </div>
      </div>
    </div>
  );
};

// --- MODUŁ 3: TRANSMISJE CEREMONII (DASHBOARD) ---

const StreamingDashboard = () => {
  const streams = [
    { id: 1, name: 'Śp. Anna Nowak', time: 'Dziś, 14:00', status: 'live', viewers: 42 },
    { id: 2, name: 'Śp. Krzysztof Krawczyk', time: 'Jutro, 11:00', status: 'upcoming', viewers: 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
           <h2 className="text-2xl font-bold text-slate-900">Transmisje Online</h2>
           <p className="text-slate-500">Oglądaj ceremonie na żywo lub przeglądaj archiwum.</p>
        </div>
        <Button variant="accent" icon={Shield}>Strefa Rodziny (Login)</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {streams.map((stream) => (
          <div key={stream.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-slate-900 relative flex items-center justify-center">
              {stream.status === 'live' ? (
                <>
                  <span className="absolute top-3 left-3 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <div className="absolute top-3 left-8 text-white text-xs font-bold uppercase tracking-wider">Na Żywo</div>
                  <Wifi size={48} className="text-slate-700" />
                </>
              ) : (
                <CalendarClock size={48} className="text-slate-700" />
              )}
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-slate-800">{stream.name}</h3>
                {stream.status === 'live' && (
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full flex items-center gap-1">
                    <User size={12} /> {stream.viewers}
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-sm mb-4">{stream.time}</p>
              <Button variant={stream.status === 'live' ? 'primary' : 'secondary'} className="w-full">
                {stream.status === 'live' ? 'Dołącz do ceremonii' : 'Ustaw przypomnienie'}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
           <Wifi size={24} />
        </div>
        <div>
          <h4 className="font-bold text-blue-900">Technologia Bezpiecznego Streamingu</h4>
          <p className="text-sm text-blue-700 mt-1">
            Nasze transmisje są realizowane w technologii low-latency z szyfrowaniem SSL. 
            Gwarantujemy prywatność i dostęp tylko dla osób posiadających unikalny token generowany przez rodzinę.
          </p>
        </div>
      </div>
    </div>
  );
};


// --- GŁÓWNY LAYOUT ---

const PortalPogrzebowy = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'preneed': return <PreNeedWizard />;
      case 'design': return <TombstoneConfigurator />;
      case 'stream': return <StreamingDashboard />;
      default: return (
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Omega Funeral Services</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Kompleksowe wsparcie w trudnych chwilach. Łączymy tradycję z nowoczesną technologią, 
            oferując godne pożegnania, planowanie przyszłości i upamiętnienie bliskich.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
            <button onClick={() => setActiveTab('preneed')} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <CalendarClock size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pre-need</h3>
              <p className="text-slate-500 text-sm">Zaplanuj i opłać swoją ceremonię z wyprzedzeniem. Zabezpiecz rodzinę.</p>
            </button>

            <button onClick={() => setActiveTab('design')} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <PenTool size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Nagrobki 3D</h3>
              <p className="text-slate-500 text-sm">Zaprojektuj unikalny nagrobek w naszym kreatorze online. Wizualizacja w czasie rzeczywistym.</p>
            </button>

            <button onClick={() => setActiveTab('stream')} className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Wifi size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">E-Ceremonie</h3>
              <p className="text-slate-500 text-sm">Transmisje pogrzebów online dla rodziny przebywającej za granicą. </p>
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-6 flex justify-between">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> Infolinia 24h: 800 123 456</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> Warszawa, ul. Spokojna 1</span>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-white cursor-pointer">Strefa Klienta</span>
          <span className="hover:text-white cursor-pointer">Dla Partnerów</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
             <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">Ω</div>
             <div>
               <h1 className="font-serif font-bold text-xl leading-none tracking-tight">Omega</h1>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest">Funeral Services</p>
             </div>
          </div>

          <div className="hidden md:flex gap-1 bg-slate-100 p-1 rounded-lg">
             {[
               { id: 'home', label: 'Start', icon: LayoutDashboard },
               { id: 'preneed', label: 'Planowanie (Pre-need)', icon: CalendarClock },
               { id: 'design', label: 'Nagrobki 3D', icon: PenTool },
               { id: 'stream', label: 'Transmisje', icon: Wifi },
             ].map((item) => (
               <button 
                 key={item.id}
                 onClick={() => setActiveTab(item.id)}
                 className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                   activeTab === item.id ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                 }`}
               >
                 <item.icon size={16} />
                 {item.label}
               </button>
             ))}
          </div>

          <div className="flex gap-3">
             <Button variant="secondary" className="px-3 py-2 text-sm"><User size={16} /></Button>
             <Button variant="primary" className="px-4 py-2 text-sm">Umów wizytę</Button>
          </div>
        </div>
      </nav>

      {/* Dynamic Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 min-h-[calc(100vh-160px)]">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-slate-400 text-sm">
        <p>&copy; 2025 Omega Funeral Services. Wszystkie prawa zastrzeżone.</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="hover:text-slate-600 cursor-pointer">Polityka Prywatności</span>
          <span className="hover:text-slate-600 cursor-pointer">Regulamin Usług</span>
          <span className="hover:text-slate-600 cursor-pointer">RODO</span>
        </div>
      </footer>
    </div>
  );
};

export default PortalPogrzebowy;
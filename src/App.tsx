import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  BookOpen,
  BarChart,
  Mail,
  Lock,
  ExternalLink,
  Heart,
  TrendingUp,
  Brain,
  Shield,
  LineChart,
  CalendarDays,
  MessageCircle,
  Check,
  X,
  Clock,
  Target,
  ShieldCheck,
  Settings,
  UserCheck,
  TrendingDown,
  Send,
  Loader2,
  MapPin,
  Phone,
} from "lucide-react";

function Impressum() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1a1a1a] text-[#efe7dd] font-['Montserrat',sans-serif] selection:bg-[#e0937a] selection:text-[#1a1a1a]">
      <nav className="flex items-center justify-between px-5 sm:px-6 py-4 md:px-12 lg:px-24 bg-[#1a1a1a]/80 backdrop-blur-xl sticky top-0 z-[100] border-b border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]">
        <a href="#" className="flex items-center hover:scale-105 transition-transform">
          <img
            src="https://lh3.googleusercontent.com/d/1dj4_0mNEvkggbx4UsJRX0-BE25gBR-ol"
            alt="Yagibasan Capital Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_10px_rgba(224,147,122,0.2)]"
          />
        </a>
        <div>
          <a href="#" className="text-xs sm:text-sm font-bold text-[#1a1a1a] bg-[#e0937a] px-4 py-2.5 sm:px-6 sm:py-3 rounded-sm hover:bg-[#efe7dd] hover:shadow-[0_0_20px_rgba(224,147,122,0.4)] transition-all duration-300">
            Zurück zur Startseite
          </a>
        </div>
      </nav>

      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#e0937a] rounded-full blur-[200px] sm:blur-[250px] opacity-10 pointer-events-none"></div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-elegant mb-10 sm:mb-16 text-[#e0937a] drop-shadow-[0_0_15px_rgba(224,147,122,0.2)]">
          Impressum
        </h1>
        <div className="space-y-10 sm:space-y-12 text-gray-300 font-light leading-relaxed relative z-10 text-sm sm:text-base">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#efe7dd] mb-3 sm:mb-4 border-b border-[#e0937a]/20 pb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Burak Yagibasan<br />
              Untere Wiesenstr. 30<br />
              57271 Hilchenbach
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#efe7dd] mb-3 sm:mb-4 border-b border-[#e0937a]/20 pb-2">
              Kontakt
            </h2>
            <p>
              Telefon: 0157 53 69 89 17<br />
              E-Mail: <a href="mailto:office@yagibasan-capital.de" className="text-[#e0937a] hover:underline transition-all break-all">office@yagibasan-capital.de</a>
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#efe7dd] mb-3 sm:mb-4 border-b border-[#e0937a]/20 pb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Burak Yagibasan<br />
              Untere Wiesenstr. 30<br />
              57271 Hilchenbach
            </p>
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#efe7dd] mb-3 sm:mb-4 border-b border-[#e0937a]/20 pb-2">
              Tätigkeitsbeschreibung
            </h2>
            <p>
              Mentoring und Wissensvermittlung im Bereich der allgemeinen Wirtschafts- und Finanzbildung, des finanziellen Mindsets sowie der Budget- und strategischen Lebensplanung.<br /><br />
              <span className="text-gray-500 text-xs sm:text-sm">
                (Ausdrücklich ausgeschlossen sind jegliche erlaubnispflichtige Tätigkeiten, insbesondere die Anlageberatung, Anlagevermittlung oder Finanzportfolioverwaltung im Sinne des KWG, WpIG und der GewO §34 f/h.)
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Datenschutz() {
  const datenschutzHTML = `<h1>Datenschutz&shy;erkl&auml;rung</h1>... (aus Platzgründen gekürzt für sauberes Rendering, Text wie gehabt) ... <p>Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a></p>`;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#1a1a1a] text-[#efe7dd] font-['Montserrat',sans-serif] selection:bg-[#e0937a] selection:text-[#1a1a1a]">
      <nav className="flex items-center justify-between px-5 sm:px-6 py-4 md:px-12 lg:px-24 bg-[#1a1a1a]/80 backdrop-blur-xl sticky top-0 z-[100] border-b border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)]">
        <a href="#" className="flex items-center hover:scale-105 transition-transform">
          <img src="https://lh3.googleusercontent.com/d/1dj4_0mNEvkggbx4UsJRX0-BE25gBR-ol" alt="Yagibasan Capital Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_10px_rgba(224,147,122,0.2)]" />
        </a>
        <div>
          <a href="#" className="text-xs sm:text-sm font-bold text-[#1a1a1a] bg-[#e0937a] px-4 py-2.5 sm:px-6 sm:py-3 rounded-sm hover:bg-[#efe7dd] hover:shadow-[0_0_20px_rgba(224,147,122,0.4)] transition-all duration-300">
            Zurück zur Startseite
          </a>
        </div>
      </nav>

      <section className="py-16 sm:py-20 px-5 sm:px-6 md:px-12 lg:px-24 max-w-4xl mx-auto relative">
        <style dangerouslySetInnerHTML={{ __html: `
          .datenschutz-content h1 { font-family: 'Playfair Display', serif; font-size: 2rem; color: #e0937a; margin-bottom: 2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; }
          @media (min-width: 768px) { .datenschutz-content h1 { font-size: 2.5rem; margin-bottom: 2.5rem; } }
          .datenschutz-content h2 { font-size: 1.25rem; color: #efe7dd; margin-top: 2.5rem; margin-bottom: 1.25rem; border-bottom: 1px solid rgba(224,147,122,0.2); padding-bottom: 0.5rem; font-weight: 600; }
          @media (min-width: 768px) { .datenschutz-content h2 { font-size: 1.5rem; margin-top: 3rem; margin-bottom: 1.5rem; } }
          .datenschutz-content h3 { font-size: 1.125rem; color: #e0937a; margin-top: 1.75rem; margin-bottom: 1rem; font-weight: 500; }
          @media (min-width: 768px) { .datenschutz-content h3 { font-size: 1.25rem; margin-top: 2rem; } }
          .datenschutz-content h4 { font-size: 1rem; color: #efe7dd; margin-top: 1.25rem; margin-bottom: 0.75rem; font-weight: 500; }
          @media (min-width: 768px) { .datenschutz-content h4 { font-size: 1.125rem; margin-top: 1.5rem; } }
          .datenschutz-content p { color: #d1d5db; font-weight: 300; line-height: 1.6; margin-bottom: 1.25rem; font-size: 0.875rem; }
          @media (min-width: 768px) { .datenschutz-content p { line-height: 1.8; margin-bottom: 1.5rem; font-size: 1rem; } }
          .datenschutz-content a { color: #e0937a; text-decoration: none; transition: all 0.3s ease; word-break: break-all; }
          .datenschutz-content a:hover { text-decoration: underline; color: #efe7dd; }
          .datenschutz-content ul { list-style-type: disc; padding-left: 1.25rem; color: #d1d5db; font-weight: 300; margin-bottom: 1.25rem; line-height: 1.6; font-size: 0.875rem; }
          @media (min-width: 768px) { .datenschutz-content ul { padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.8; font-size: 1rem; } }
          .datenschutz-content li { margin-bottom: 0.5rem; }
          .datenschutz-content strong { color: #efe7dd; font-weight: 500; }
        ` }} />
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[#e0937a] rounded-full blur-[200px] sm:blur-[250px] opacity-10 pointer-events-none"></div>
        <div className="datenschutz-content relative z-10" dangerouslySetInnerHTML={{ __html: datenschutzHTML }} />
      </section>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [openFaq, setOpenFaq] = useState<any>(null);
  const [hoveredAsset, setHoveredAsset] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState({ Tage: 0, Std: 0, Min: 0, Sek: 0 });
  const [calcYears, setCalcYears] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [budgetConsent, setBudgetConsent] = useState(false);
  const [isBudgetSubmitting, setIsBudgetSubmitting] = useState(false);
  const [isBudgetSuccess, setIsBudgetSuccess] = useState(false);
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [auditConsent, setAuditConsent] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  // Pricing Mobile Slider Logic
  const pricingScrollRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(1); // 0=Starter, 1=Premium, 2=InnerCircle

  useEffect(() => {
    // Initialer lautloser Scroll zur Mitte (Premium-Karte) auf mobilen Geräten
    const timer = setTimeout(() => {
      if (pricingScrollRef.current && window.innerWidth < 768) {
        const container = pricingScrollRef.current;
        container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
      }
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const handlePricingScroll = () => {
    if (!pricingScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = pricingScrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) return; // Auf Desktop abbrechen
    
    const scrollPercentage = scrollLeft / maxScroll;
    if (scrollPercentage < 0.3) {
      setActiveCardIndex(0); // Starter
    } else if (scrollPercentage > 0.7) {
      setActiveCardIndex(2); // Mentoring
    } else {
      setActiveCardIndex(1); // Premium (Mitte)
    }
  };

  const handleBudgetSubmit = async (e: any) => {
    e.preventDefault();
    setIsBudgetSubmitting(true);
    
    const formData = new FormData(e.target);
    formData.append("access_key", "b2618995-1e7e-4ae7-a7f5-b845be422aa0");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      
      if (response.ok) {
        setIsBudgetSuccess(true);
      }
    } catch (error) {
      console.error("Fehler beim Formular-Versand", error);
    } finally {
      setIsBudgetSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash);
      if (hash === "#impressum" || hash === "#datenschutz" || hash === "" || hash === "#") {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2030-06-12T00:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance > 0) {
        setTimeLeft({
          Tage: Math.floor(distance / (1000 * 60 * 60 * 24)),
          Std: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          Min: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          Sek: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Cookiebot script disabled for preview environment
  }, []);

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);
  
  const handleOpenModal = (e: any) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setIsSuccess(false);
      setIsSubmitting(false);
    }, 500);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const depotWerte = { etfs: 55, aktien: 37, krypto: 8 };
  const colors = { etfs: "#efe7dd", aktien: "#e0937a", krypto: "#c5a059" };

  const getCenterText = () => {
    if (hoveredAsset === "etfs") return { pct: depotWerte.etfs, label: "Welt-ETFs", color: colors.etfs };
    if (hoveredAsset === "aktien") return { pct: depotWerte.aktien, label: "Einzelaktien", color: colors.aktien };
    if (hoveredAsset === "krypto") return { pct: depotWerte.krypto, label: "Krypto", color: colors.krypto };
    return { pct: 100, label: "Echtes Geld", color: "#efe7dd" };
  };
  const centerData = getCenterText();
  const circumference = 2 * Math.PI * 40;
  const kryptoOffset = 0;
  const aktienOffset = -((depotWerte.krypto / 100) * circumference);
  const etfOffset = -(((depotWerte.krypto + depotWerte.aktien) / 100) * circumference);

  const startkapital = 10000;
  const inflationRate = 0.03;
  const etfRate = 0.08;
  const kaufkraft = Math.round(startkapital * Math.pow(1 - inflationRate, calcYears));
  const etfWert = Math.round(startkapital * Math.pow(1 + etfRate, calcYears));

  const faqs = [
    { question: "Brauche ich finanzielles Vorwissen?", answer: "Absolut nicht! Jeder fängt mal an. Wir bauen dein Wissen von Grund auf gemeinsam auf. Du lernst Schritt für Schritt, wie du dein Geld planst und anfängst zu investieren." },
    { question: "Ist das hier Anlageberatung?", answer: "Nein. Ich biete keine Anlageberatung an. Ich teile hier meinen eigenen, echten Weg, meine Erfahrungen und meine Strategien mit dir – völlig transparent, damit du daraus lernen kannst." },
    { question: "Was genau beinhaltet die Premium Mitgliedschaft?", answer: "Du siehst exakt, welche Einzelaktien ich wann kaufe, erhältst Einblick in meinen monatlichen Dividendenkalender und bekommst tiefergehende Strategie-Updates zu meinen Entscheidungen." },
    { question: "Wie viel Startkapital brauche ich?", answer: "Vermögensaufbau funktioniert auch mit kleinen Beträgen. Du kannst bereits ab 25€ oder 50€ im Monat einen Sparplan einrichten. Wichtig ist nur, dass du anfängst." },
    { question: "Für wen ist das 1:1 Mentoring gedacht?", answer: "Für alle, die keine Zeit für Trial-and-Error haben. Wenn du eine Abkürzung suchst, um dein Fundament fehlerfrei aufzustellen und eine maßgeschneiderte Strategie für deinen Alltag brauchst." },
    { question: "Gibt es eine Mindestlaufzeit für Premium?", answer: "Nein. Du kannst die Premium-Mitgliedschaft ganz flexibel testen und sie ist jederzeit monatlich kündbar. Keine versteckten Fallen." },
    { question: "Welche Märkte und Assets handelst du?", answer: "Mein Kernfundament (Core) besteht aus weltweiten ETFs. Dazu kommen als Satelliten ausgewählte Einzelaktien (Fokus auf starke Cashflows & Dividenden) sowie ein kleiner Teil Bitcoin/Krypto." },
    { question: "Wie läuft das Erstgespräch ab?", answer: "Völlig entspannt und kostenlos. Wir lernen uns kurz kennen, schauen wo du aktuell stehst und prüfen, ob mein Mentoring für deine aktuelle Situation überhaupt Sinn macht." }
  ];

  if (currentPath === "#impressum") return <Impressum />;
  if (currentPath === "#datenschutz") return <Datenschutz />;

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#efe7dd] font-['Montserrat',sans-serif] selection:bg-[#e0937a] selection:text-[#1a1a1a] flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');
        html { scroll-behavior: smooth; }
        body { overflow-x: clip; }
        .font-serif-elegant { font-family: 'Playfair Display', serif; }
      `}} />

      {/* NAVBAR */}
      <nav className={`sticky top-0 z-[100] flex items-center justify-between px-5 sm:px-6 md:px-12 lg:px-24 bg-[#1a1a1a]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)] transition-all duration-500 ${isScrolled ? 'py-2 md:py-3' : 'py-4 md:py-5'}`}>
        <a href="#" className="flex items-center hover:scale-105 transition-transform">
          <img src="https://lh3.googleusercontent.com/d/1dj4_0mNEvkggbx4UsJRX0-BE25gBR-ol" alt="Yagibasan Capital Logo" className={`object-contain drop-shadow-[0_0_10px_rgba(224,147,122,0.2)] transition-all duration-500 ${isScrolled ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' : 'w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24'}`} />
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#" onClick={handleOpenModal} className={`font-bold text-[#e0937a] border border-[#e0937a]/50 rounded-sm hover:border-[#e0937a] hover:bg-[#e0937a]/10 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(224,147,122,0.2)] transition-all duration-300 inline-block text-center leading-tight ${isScrolled ? 'text-[9px] sm:text-xs px-2 sm:px-4 py-1.5 sm:py-2' : 'text-[10px] sm:text-sm px-2.5 sm:px-6 py-2 sm:py-3.5'}`}>
            <span className="hidden sm:inline">Kostenloses Erstgespräch</span>
            <span className="sm:hidden">Kostenloses<br/>Erstgespräch</span>
          </a>
          <a href="#premium" className={`font-bold text-[#1a1a1a] bg-[#e0937a] rounded-sm hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(224,147,122,0.6)] transition-all duration-300 inline-block text-center leading-tight ${isScrolled ? 'text-[9px] sm:text-xs px-2 sm:px-5 py-1.5 sm:py-2' : 'text-[10px] sm:text-sm px-2.5 sm:px-8 py-2 sm:py-3.5'}`}>
            <span className="hidden sm:inline">Premium Mitglied werden</span>
            <span className="sm:hidden">Premium<br/>Mitglied werden</span>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative px-5 sm:px-6 py-16 overflow-hidden md:py-24 md:px-12 lg:px-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-[#e0937a] rounded-full blur-[150px] sm:blur-[250px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <div className="flex flex-col items-center mx-auto md:mx-0 mb-8 sm:mb-12 mt-4">
              <img src="https://lh3.googleusercontent.com/d/1dj4_0mNEvkggbx4UsJRX0-BE25gBR-ol" alt="Yagibasan Capital Logo" className="w-48 sm:w-64 md:w-72 h-auto mb-4 sm:mb-6 object-contain drop-shadow-[0_10px_20px_rgba(224,147,122,0.15)]" />
              <p className="text-[#e0937a] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(224,147,122,0.4)] text-center">
                Werte für Generationen
              </p>
            </div>
            
            <h1 className="mb-10 sm:mb-14 leading-[1.1]">
              <span className="block text-[#efe7dd] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-2 uppercase">Über Geld spricht man nicht?</span>
              <span className="block text-[#e0937a] font-serif-elegant italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-6 sm:mt-8 drop-shadow-[0_0_15px_rgba(224,147,122,0.3)]">Über Geld spricht man!</span>
            </h1>
            
            <div className="border-l-4 border-[#e0937a] pl-5 sm:pl-6 py-3 sm:py-4 mb-8 sm:mb-10 bg-gradient-to-r from-[#e0937a]/15 to-transparent rounded-r-lg shadow-[inset_10px_0_20px_-10px_rgba(224,147,122,0.3)]">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#efe7dd] tracking-wide">Schön, dass du hier bist.</p>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#e0937a] mt-2">Willkommen bei Yagibasan Capital.</p>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-lg font-light">
              Jeder fängt mal an – ganz egal, ob du neu in der Finanzwelt bist oder dein Depot bereits läuft, hier bist du genau richtig. Lass uns das Thema Finanzen gemeinsam, ehrlich und vor allem transparent angehen.<br /><br />
              Ich dokumentiere hier offen meinen eigenen Weg in die finanzielle Unabhängigkeit. Komm gerne mit.
            </p>
            
            <div className="flex flex-col w-full sm:flex-row gap-4 sm:gap-5">
              <a href="#about" className="flex items-center justify-center gap-2 bg-[#e0937a] text-[#1a1a1a] font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)] transition-all duration-300">Meine Geschichte</a>
              <a href="#depot" className="flex items-center justify-center gap-2 border-2 border-[#e0937a] text-[#e0937a] font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-sm hover:bg-[#e0937a] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(224,147,122,0.4)] transition-all duration-300">Mein Depot-Einblick</a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-end mt-12 md:mt-0">
            <div className="absolute inset-0 bg-[#e0937a] blur-[60px] sm:blur-[100px] opacity-25 rounded-full scale-75 pointer-events-none"></div>
            <div className="relative w-full max-w-[260px] sm:max-w-md aspect-[3/4] rounded-t-[10rem] border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center bg-[#1a1a1a] group hover:shadow-[0_0_50px_rgba(224,147,122,0.3)] transition-all duration-500 cursor-pointer">
              <img src="https://lh3.googleusercontent.com/d/1d7-sVkz0D0Zr3GtHTwnUo49n2rEkbaaV" alt="Burak Yagibasan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE 1 */}
      <div className="w-full bg-[#0a0a0a] py-10 sm:py-12 px-5 sm:px-6 text-center border-y border-[#e0937a]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0937a]/5 to-transparent"></div>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-serif-elegant italic text-[#efe7dd] max-w-4xl mx-auto leading-relaxed px-4">
          „Wer heute im Schatten sitzt, hat vor langer Zeit einen Baum gepflanzt.“
          <span className="block mt-4 text-xs sm:text-sm font-sans font-bold text-[#e0937a] tracking-widest uppercase not-italic">— Warren Buffett</span>
        </p>
      </div>

      {/* ABOUT ME */}
      <section id="about" className="scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-40 relative bg-[#111] py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(224,147,122,0.12)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12">
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 sm:mb-6">Die Realität</h2>
            <h3 className="mb-8 sm:mb-10 leading-[1.3]">
              <span className="block text-[#efe7dd] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 drop-shadow-md">Mein Name ist Burak.</span>
              <span className="block text-[#e0937a] font-serif-elegant italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-[0_0_12px_rgba(224,147,122,0.3)]">Ich bin der Gründer von Yagibasan Capital.</span>
            </h3>
            <div className="border-l-4 border-[#e0937a] pl-5 sm:pl-6 py-4 sm:py-6 bg-gradient-to-r from-[#e0937a]/15 to-transparent rounded-r-lg shadow-[inset_10px_0_30px_-10px_rgba(224,147,122,0.3)] mt-8 sm:mt-12 relative">
              <p className="text-[#efe7dd] font-serif-elegant italic text-lg sm:text-xl leading-relaxed">
                „Ich bin heute nicht hier, um euch zu erzählen, dass ich auf einer Yacht in Dubai sitze. Ich posiere nicht vor geleasten Sportwagen und verspreche keine Krypto-Wunder über Nacht.“
              </p>
            </div>
          </div>
          <div className="w-full lg:w-7/12 space-y-5 sm:space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg font-light pt-2">
            <p>Und ja, ich bin Angestellter. Genau wie die allermeisten von euch. Ich kenne den Wecker am Morgen, ich kenne die Abzüge auf dem Gehaltszettel, und ich spüre genau wie ihr, wie die Inflation unsere harte Arbeit jeden Tag ein Stück mehr entwertet.</p>
            <p>Ich war an exakt dem Punkt, an dem ihr heute vielleicht steht. Ich habe nach den traditionellen Regeln gespielt: Geh zur Schule, leiste gute Arbeit, spar dein Geld auf dem Tagesgeldkonto. Bis ich gemerkt habe, dass man so auf der Stelle tritt.</p>
            <p>Ich habe mir ohne Erbe und neben meinem Vollzeitjob ein finanzielles Fundament aufgebaut, das mich heute objektiv in die Top 1 % der Selfmade-Investoren meiner Altersklasse in Deutschland bringt. Das war kein Zufall, sondern das Resultat von klaren Entscheidungen und einem einfachen, verlässlichen System.</p>
            <p>Weil mein Weg dorthin am Anfang durch viel "Ausprobieren" unnötig teuer und nervenaufreibend war, möchte ich meine Erfahrung heute mit dir teilen. Damit du direkt von Beginn an entspannt und richtig an die Sache rangehst.</p>
          </div>
        </div>
      </section>

      {/* 3 SÄULEN */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(224,147,122,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Wie wir vorgehen</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-4 sm:mb-6">Meine 3 Säulen</h3>
            <p className="text-gray-400 font-light text-sm sm:text-base max-w-2xl mx-auto">Vermögensaufbau ist kein Hexenwerk und keine Glückssache. Es ist ein klarer, entspannter Weg, der auf drei einfachen, logischen Schritten basiert.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#111] border border-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.4)] transition-all duration-500 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0937a]/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(224,147,122,0.5)] transition-all">
                <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-[#e0937a]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-3 sm:mb-4 text-[#efe7dd]">1. Das Fundament</h4>
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Bevor wir investieren, räumen wir auf. Wir filtern unnötige Ausgaben, optimieren dein Budget und bauen ein starkes Mindset auf. Ohne Fundament stürzt das beste Haus ein.</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.4)] transition-all duration-500 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0937a]/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(224,147,122,0.5)] transition-all">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#e0937a]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-3 sm:mb-4 text-[#efe7dd]">2. Dein Notgroschen</h4>
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Wir bauen dir eine Rücklage auf, die dir den Rücken freihält. Dieses Geld sorgt dafür, dass du nachts immer ruhig schlafen kannst – egal was im Alltag passiert.</p>
            </div>
            <div className="bg-[#111] border border-white/5 p-6 sm:p-8 md:p-10 rounded-2xl hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.4)] transition-all duration-500 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0937a]/10 rounded-full flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(224,147,122,0.5)] transition-all">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#e0937a]" />
              </div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-3 sm:mb-4 text-[#efe7dd]">3. Das Wachstum</h4>
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Erst wenn die Basis steht, lassen wir dein Geld für dich arbeiten. Mit weltweiten ETFs als Motor und gezielten Einzelaktien bauen wir langfristig echtes Vermögen auf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MEINE MISSION */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-[#111] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(224,147,122,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 sm:gap-16 items-center">
          <div className="w-full lg:w-5/12">
            <h2 className="text-[#e0937a] text-xs font-bold tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(224,147,122,0.3)]">Meine Mission</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif-elegant mb-6 sm:mb-8 leading-[1.3] text-[#efe7dd]">Mein Ziel ist es, die Aktionärsquote in Deutschland von aktuell ca. 20 % deutlich zu steigern.</h3>
            <div className="border-l-2 border-[#e0937a] pl-5 sm:pl-6 py-2">
              <p className="text-gray-400 font-light leading-relaxed text-base sm:text-lg">Ich möchte dir zeigen, wie du deine Finanzen selbstbewusst in die eigene Hand nimmst. Komplett unabhängig, ehrlich und auf Augenhöhe. Ohne kompliziertes Fachwissen, dafür mit klaren, machbaren Schritten für deinen Alltag.</p>
            </div>
          </div>
          <div className="w-full lg:w-7/12 flex flex-col gap-6 sm:gap-10">
            <div className="flex gap-4 sm:gap-6 items-start group">
              <div className="mt-1 bg-[#1a1a1a] p-3 sm:p-4 rounded-xl border border-white/5 group-hover:border-[#e0937a]/50 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                <UserCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#efe7dd] mb-1 sm:mb-2 group-hover:text-[#e0937a] transition-colors">Individuelle Strategie</h4>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Wünsche, Ziele und Sicherheitsbedürfnisse sind verschieden. Wir bauen keine Standard-Portfolios, sondern ein Setup, das exakt zu deinem Leben und Einkommen passt.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start group">
              <div className="mt-1 bg-[#1a1a1a] p-3 sm:p-4 rounded-xl border border-white/5 group-hover:border-[#e0937a]/50 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#efe7dd] mb-1 sm:mb-2 group-hover:text-[#e0937a] transition-colors">100% Unabhängigkeit</h4>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Keine Provisionen, keine versteckten Gebühren, keine Banken im Hintergrund. Meine Loyalität gilt ausschließlich dir und deinem langfristigen Erfolg.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start group">
              <div className="mt-1 bg-[#1a1a1a] p-3 sm:p-4 rounded-xl border border-white/5 group-hover:border-[#e0937a]/50 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#efe7dd] mb-1 sm:mb-2 group-hover:text-[#e0937a] transition-colors">Der Komplett-Umbau</h4>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Wir reden nicht nur, wir setzen um. Von der Budget-Optimierung bis zur finalen, fehlerfreien Depot-Einrichtung begleite ich dich durch jeden operativen Schritt.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6 items-start group">
              <div className="mt-1 bg-[#1a1a1a] p-3 sm:p-4 rounded-xl border border-white/5 group-hover:border-[#e0937a]/50 transition-colors shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#efe7dd] mb-1 sm:mb-2 group-hover:text-[#e0937a] transition-colors">Direkter Draht</h4>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">Bei Fragen oder Unsicherheiten im Markt stehe ich dir zur Seite. Schnelle, ehrliche Antworten – kein anonymes Callcenter, keine Warteschleifen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ZAHLEN & FAKTEN */}
      <section className="relative py-10 sm:py-12 px-5 sm:px-6 md:px-12 lg:px-24 border-y border-[#e0937a]/20 bg-[#1a1a1a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e0937a]/15 via-transparent to-[#e0937a]/15 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 items-center md:divide-x md:divide-[#e0937a]/20 gap-8 md:gap-0">
          <div className="px-2 md:px-4 flex flex-col justify-center items-center h-full md:pr-8 lg:pr-10">
            <h4 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-serif-elegant text-[#e0937a] mb-2 whitespace-nowrap drop-shadow-[0_0_15px_rgba(224,147,122,0.4)] text-center">Einer von euch</h4>
            <p className="text-[9px] sm:text-[10px] md:text-sm text-gray-400 uppercase tracking-widest text-center">Von Arbeitnehmer für Arbeitnehmer</p>
          </div>
          <div className="px-2 md:px-4 flex flex-col justify-center items-center h-full">
            <h4 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-serif-elegant text-[#e0937a] mb-2 drop-shadow-[0_0_15px_rgba(224,147,122,0.4)] text-center">Top 1%</h4>
            <p className="text-[9px] sm:text-[10px] md:text-sm text-gray-400 uppercase tracking-widest text-center">Altersklasse in DE</p>
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-light mt-1 text-center">(ohne Erbe)</p>
          </div>
          <div className="px-2 md:px-4 flex flex-col justify-center items-center h-full">
            <h4 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-serif-elegant text-[#e0937a] mb-2 drop-shadow-[0_0_15px_rgba(224,147,122,0.4)] text-center">100%</h4>
            <p className="text-[9px] sm:text-[10px] md:text-sm text-gray-400 uppercase tracking-widest text-center">Unabhängig</p>
            <p className="text-[9px] sm:text-[10px] text-gray-500 font-light mt-1 text-center">(Keine Provisionen)</p>
          </div>
          <div className="px-2 md:px-4 flex flex-col justify-center items-center h-full">
            <h4 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-serif-elegant text-[#e0937a] mb-2 drop-shadow-[0_0_15px_rgba(224,147,122,0.4)] text-center">Fokus</h4>
            <p className="text-[9px] sm:text-[10px] md:text-sm text-gray-400 uppercase tracking-widest text-center">Erfolg braucht Geduld, nicht Glück</p>
          </div>
        </div>
      </section>

      {/* QUOTE 2 */}
      <div className="w-full bg-[#0a0a0a] py-10 sm:py-12 px-5 sm:px-6 text-center border-y border-[#e0937a]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0937a]/5 to-transparent"></div>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-serif-elegant italic text-[#efe7dd] max-w-4xl mx-auto leading-relaxed px-4">
          „Wohlstand bedeutet, Vermögenswerte zu besitzen, die verdienen, während man schläft.“
          <span className="block mt-4 text-xs sm:text-sm font-sans font-bold text-[#e0937a] tracking-widest uppercase not-italic">— Naval Ravikant</span>
        </p>
      </div>

      {/* DEPOT */}
      <section id="depot" className="scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-40 relative py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-[#111]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,147,122,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Transparenz</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase">Mein Depot-Einblick</h3>
            <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto font-light">Keine Geheimnisse. Hier siehst du die Verteilung meines eigenen Portfolios. Genau dieses Fundament nutze ich, um planbar Vermögen aufzubauen.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-32">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center group">
              <svg viewBox="0 0 100 100" className="-rotate-90 w-full h-full overflow-visible drop-shadow-[0_0_35px_rgba(224,147,122,0.25)]">
                <circle cx="50" cy="50" r="40" stroke="#222" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="40" stroke={colors.krypto} strokeWidth="8" fill="none" strokeDasharray={`${(depotWerte.krypto / 100) * circumference} ${circumference}`} strokeDashoffset={kryptoOffset} className={`transition-all duration-500 cursor-pointer ${hoveredAsset && hoveredAsset !== "krypto" ? "opacity-10" : "opacity-100"} ${hoveredAsset === "krypto" ? "stroke-[12px] drop-shadow-[0_0_15px_rgba(197,160,89,0.8)]" : ""}`} onMouseEnter={() => setHoveredAsset("krypto")} onMouseLeave={() => setHoveredAsset(null)} />
                <circle cx="50" cy="50" r="40" stroke={colors.aktien} strokeWidth="8" fill="none" strokeDasharray={`${(depotWerte.aktien / 100) * circumference} ${circumference}`} strokeDashoffset={aktienOffset} className={`transition-all duration-500 cursor-pointer ${hoveredAsset && hoveredAsset !== "aktien" ? "opacity-10" : "opacity-100"} ${hoveredAsset === "aktien" ? "stroke-[12px] drop-shadow-[0_0_15px_rgba(224,147,122,0.8)]" : ""}`} onMouseEnter={() => setHoveredAsset("aktien")} onMouseLeave={() => setHoveredAsset(null)} />
                <circle cx="50" cy="50" r="40" stroke={colors.etfs} strokeWidth="8" fill="none" strokeDasharray={`${(depotWerte.etfs / 100) * circumference} ${circumference}`} strokeDashoffset={etfOffset} className={`transition-all duration-500 cursor-pointer ${hoveredAsset && hoveredAsset !== "etfs" ? "opacity-10" : "opacity-100"} ${hoveredAsset === "etfs" ? "stroke-[12px] drop-shadow-[0_0_15px_rgba(239,231,221,0.6)]" : ""}`} onMouseEnter={() => setHoveredAsset("etfs")} onMouseLeave={() => setHoveredAsset(null)} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-elegant transition-colors duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ color: centerData.color }}>{centerData.pct}%</span>
                <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-400 tracking-widest uppercase mt-1 sm:mt-2 transition-all duration-500">{centerData.label}</span>
              </div>
            </div>
            <div className="w-full max-w-md flex flex-col">
              <div className="space-y-2 mb-8 sm:mb-10">
                <div className={`flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-xl cursor-pointer transition-all duration-500 border ${hoveredAsset === "etfs" ? "bg-[#efe7dd]/10 scale-[1.02] border-[#efe7dd]/40 shadow-[0_0_20px_rgba(239,231,221,0.15)]" : hoveredAsset ? "opacity-30 border-transparent" : "hover:bg-white/5 border-transparent"}`} onMouseEnter={() => setHoveredAsset("etfs")} onMouseLeave={() => setHoveredAsset(null)}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm shadow-[0_0_8px_rgba(239,231,221,0.6)]" style={{ backgroundColor: colors.etfs }}></div>
                    <span className={`font-medium text-base sm:text-lg transition-colors duration-300 ${hoveredAsset === "etfs" ? "text-white" : ""}`}>Welt-ETFs</span>
                  </div>
                  <span className="text-gray-400 font-bold text-sm sm:text-base">{depotWerte.etfs} %</span>
                </div>
                <div className={`flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-xl cursor-pointer transition-all duration-500 border ${hoveredAsset === "aktien" ? "bg-[#e0937a]/15 scale-[1.02] border-[#e0937a]/40 shadow-[0_0_20px_rgba(224,147,122,0.2)]" : hoveredAsset ? "opacity-30 border-transparent" : "hover:bg-white/5 border-transparent"}`} onMouseEnter={() => setHoveredAsset("aktien")} onMouseLeave={() => setHoveredAsset(null)}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm shadow-[0_0_10px_rgba(224,147,122,0.7)]" style={{ backgroundColor: colors.aktien }}></div>
                    <span className={`font-medium text-base sm:text-lg transition-colors duration-300 ${hoveredAsset === "aktien" ? "text-[#e0937a]" : ""}`}>Einzelaktien</span>
                  </div>
                  <span className="text-gray-400 font-bold text-sm sm:text-base">{depotWerte.aktien} %</span>
                </div>
                <div className={`flex items-center justify-between py-2 sm:py-3 px-3 sm:px-4 rounded-xl cursor-pointer transition-all duration-500 border ${hoveredAsset === "krypto" ? "bg-[#c5a059]/15 scale-[1.02] border-[#c5a059]/40 shadow-[0_0_20px_rgba(197,160,89,0.2)]" : hoveredAsset ? "opacity-30 border-transparent" : "hover:bg-white/5 border-transparent"}`} onMouseEnter={() => setHoveredAsset("krypto")} onMouseLeave={() => setHoveredAsset(null)}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm shadow-[0_0_10px_rgba(197,160,89,0.7)]" style={{ backgroundColor: colors.krypto }}></div>
                    <span className={`font-medium text-base sm:text-lg transition-colors duration-300 ${hoveredAsset === "krypto" ? "text-[#c5a059]" : ""}`}>Krypto</span>
                  </div>
                  <span className="text-gray-400 font-bold text-sm sm:text-base">{depotWerte.krypto} %</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#e0937a]/15 to-transparent p-5 sm:p-6 rounded-xl border border-[#e0937a]/30 shadow-[inset_10px_0_20px_-10px_rgba(224,147,122,0.4)] relative overflow-hidden group hover:border-[#e0937a]/60 transition-colors">
                <Clock className="absolute -right-4 -top-4 w-20 h-20 sm:w-24 sm:h-24 text-[#e0937a] opacity-10 group-hover:scale-110 transition-transform duration-700" />
                <div className="relative z-10">
                  <h4 className="font-bold text-[#e0937a] tracking-wider uppercase text-xs sm:text-sm mb-1 drop-shadow-[0_0_5px_rgba(224,147,122,0.3)]">Mein Ziel: Coast FIRE</h4>
                  <p className="text-xl sm:text-2xl font-serif-elegant text-[#efe7dd] mb-4 sm:mb-5">12. Juni 2030</p>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-[#111] px-2 sm:px-3 py-1 rounded border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">{timeLeft.Tage}</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 tracking-widest">Tage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-[#111] px-2 sm:px-3 py-1 rounded border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">{timeLeft.Std}</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 tracking-widest">Std</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-[#111] px-2 sm:px-3 py-1 rounded border border-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]">{timeLeft.Min}</div>
                      <div className="text-[9px] sm:text-[10px] text-gray-400 uppercase mt-1 tracking-widest">Min</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-[#e0937a]/20 text-[#e0937a] px-2 sm:px-3 py-1 rounded border border-[#e0937a]/30 animate-pulse shadow-[0_0_20px_rgba(224,147,122,0.4)]">{timeLeft.Sek}</div>
                      <div className="text-[9px] sm:text-[10px] text-[#e0937a] uppercase mt-1 tracking-widest">Sek</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 p-5 sm:p-6 border border-[#e0937a]/30 rounded-xl bg-gradient-to-r from-[#e0937a]/15 via-[#1a1a1a] to-[#111] flex justify-between items-center shadow-[0_10px_30px_rgba(224,147,122,0.2)] hover:shadow-[0_15px_40px_rgba(224,147,122,0.35)] hover:border-[#e0937a]/60 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#e0937a] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <span className="block text-[10px] text-[#e0937a] font-bold uppercase tracking-widest mb-1 drop-shadow-[0_0_5px_rgba(224,147,122,0.4)]">Das Endgame</span>
                  <span className="text-base sm:text-lg font-bold text-[#efe7dd]">Full FIRE Status</span>
                </div>
                <span className="font-serif-elegant text-[#efe7dd] font-bold text-3xl sm:text-4xl drop-shadow-[0_0_15px_rgba(224,147,122,0.6)] relative z-10">2036</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATHEMATIK RECHNER */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-[#1a1a1a] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,147,122,0.06)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Die nackte Mathematik</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-4 sm:mb-6">Das kostet dich das Warten</h3>
            <p className="text-gray-400 font-light text-sm sm:text-base max-w-2xl mx-auto">
              Jeden Tag, den dein Geld unverzinst auf dem Girokonto liegt, frisst die Inflation still und heimlich deine Kaufkraft auf. Lass uns ansehen, was aus <span className="text-[#efe7dd] font-semibold">10.000 €</span> wird:
            </p>
          </div>
          <div className="bg-[#111] rounded-2xl border border-white/5 p-6 sm:p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-transparent to-[#e0937a]"></div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
              <button onClick={() => setCalcYears(5)} className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${calcYears === 5 ? "bg-[#e0937a] text-[#1a1a1a] shadow-[0_0_20px_rgba(224,147,122,0.5)] scale-105" : "bg-[#222] text-gray-400 hover:text-[#efe7dd] hover:bg-[#333]"}`}>Nach 5 Jahren</button>
              <button onClick={() => setCalcYears(10)} className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${calcYears === 10 ? "bg-[#e0937a] text-[#1a1a1a] shadow-[0_0_20px_rgba(224,147,122,0.5)] scale-105" : "bg-[#222] text-gray-400 hover:text-[#efe7dd] hover:bg-[#333]"}`}>Nach 10 Jahren</button>
              <button onClick={() => setCalcYears(20)} className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${calcYears === 20 ? "bg-[#e0937a] text-[#1a1a1a] shadow-[0_0_20px_rgba(224,147,122,0.5)] scale-105" : "bg-[#222] text-gray-400 hover:text-[#efe7dd] hover:bg-[#333]"}`}>Nach 20 Jahren</button>
              <button onClick={() => setCalcYears(30)} className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all duration-300 ${calcYears === 30 ? "bg-[#e0937a] text-[#1a1a1a] shadow-[0_0_20px_rgba(224,147,122,0.5)] scale-105" : "bg-[#222] text-gray-400 hover:text-[#efe7dd] hover:bg-[#333]"}`}>Nach 30 Jahren</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
              <div className="text-center p-6 sm:p-8 rounded-xl border border-red-900/30 bg-red-900/10 relative overflow-hidden group hover:border-red-900/50 transition-colors">
                <h4 className="text-lg sm:text-xl text-gray-300 font-medium mb-2">Girokonto / Sparbuch</h4>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 font-light">Kaufkraft (bei ~3% Inflation)</p>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-400/90 mb-4 font-serif-elegant">{kaufkraft.toLocaleString("de-DE")} €</div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 text-red-400/90 bg-red-400/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" /> Verlust von {(startkapital - kaufkraft).toLocaleString("de-DE")} €
                </div>
              </div>
              <div className="text-center p-6 sm:p-8 rounded-xl border border-[#e0937a]/30 bg-[#e0937a]/5 relative overflow-hidden group hover:border-[#e0937a]/60 hover:shadow-[0_0_30px_rgba(224,147,122,0.15)] transition-all duration-500">
                <h4 className="text-lg sm:text-xl text-[#efe7dd] font-medium mb-2">Investiert / Depot</h4>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 font-light">Endwert (bei ~8% Rendite p.a.)</p>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#e0937a] mb-4 font-serif-elegant drop-shadow-[0_0_10px_rgba(224,147,122,0.4)]">{etfWert.toLocaleString("de-DE")} €</div>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 text-green-400 bg-green-400/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> Wachstum von {(etfWert - startkapital).toLocaleString("de-DE")} €
                </div>
              </div>
            </div>
            <p className="text-center text-lg sm:text-xl md:text-2xl font-serif-elegant text-gray-400 mt-10 sm:mt-12 mb-4 sm:mb-6">
              Das ist kein Glückspiel, sondern reine Mathematik. Wer wartet, verliert jeden Tag bares Geld an ein fehlerhaftes System. Wer handelt, lässt die Zeit für sich arbeiten. Deine Zeit ist <span className="text-[#efe7dd] font-bold drop-shadow-[0_0_10px_rgba(224,147,122,0.4)]">JETZT!</span>
            </p>
            <p className="text-center text-[10px] sm:text-[11px] text-gray-500 mt-4 font-light max-w-xl mx-auto">
              *Beispielhafte historische Durchschnittswerte. Inflation entwertet dein Geld. Ein weltweit gestreuter Aktien-ETF brachte historisch durchschnittlich ca. 8 % Rendite pro Jahr.
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE 3 */}
      <div className="w-full bg-[#0a0a0a] py-10 sm:py-12 px-5 sm:px-6 text-center border-y border-[#e0937a]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0937a]/5 to-transparent"></div>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-serif-elegant italic text-[#efe7dd] max-w-4xl mx-auto leading-relaxed px-4">
          „Das größte Risiko ist, gar kein Risiko einzugehen.“
          <span className="block mt-4 text-xs sm:text-sm font-sans font-bold text-[#e0937a] tracking-widest uppercase not-italic">— Mark Zuckerberg</span>
        </p>
      </div>

      {/* MENTORING */}
      <section id="mentoring" className="scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-40 relative bg-[#111] pt-16 sm:pt-24 pb-12 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,147,122,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Das 16-Modul Mentoring</h3>
            <div className="border-t-4 border-[#e0937a] pt-6 sm:pt-8 pb-8 sm:pb-10 px-6 sm:px-8 mb-12 sm:mb-16 bg-gradient-to-b from-[#e0937a]/15 to-transparent rounded-b-xl shadow-[inset_0_10px_30px_-10px_rgba(224,147,122,0.3)] text-left md:text-center mx-auto max-w-3xl">
              <p className="text-base sm:text-lg md:text-xl text-[#efe7dd] leading-relaxed font-light">
                Du möchtest eine intensive 1:1 Betreuung? Im Mentoring gehen wir deinen Vermögensaufbau ganz individuell an. Wir schaffen eine solide Struktur für deinen Alltag, besprechen die Basics und richten dein Portfolio gemeinsam und fehlerfrei ein.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left mb-12 sm:mb-16 max-w-5xl mx-auto">
            <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-xl border border-white/5 relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#e0937a]/10 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500">
              <span className="absolute top-4 right-5 sm:right-6 text-[80px] sm:text-[100px] font-bold text-white/[0.03] group-hover:text-[#e0937a]/[0.08] group-hover:scale-110 origin-top-right transition-all duration-500 leading-none pointer-events-none font-serif-elegant">01</span>
              <div className="relative z-10 flex flex-col flex-1 h-full">
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-serif-elegant font-bold text-[#efe7dd] border-b border-[#e0937a]/20 pb-2 sm:pb-3 mb-4 pr-12 group-hover:border-[#e0937a]/50 transition-colors">Das Fundament & Der Neustart</h4>
                  <p className="text-xs sm:text-[13px] md:text-[15px] text-gray-400 font-light leading-relaxed mb-6">Wir räumen deine Finanzen ein für alle main gründlich auf. Wir starten ganz am Anfang und klären einfach und logisch, was Geld überhaupt ist, wie unser modernes Geldsystem funktioniert und warum einfaches Sparen auf dem Sparbuch dich durch die Inflation garantiert ärmer macht. Danach decken wir versteckte Kostenfresser auf, stoppen unüberlegte Spontankäufe und kündigen überflüssige Abos direkt im Live-Call.</p>
                </div>
                <div className="pt-5 sm:pt-6 border-t border-white/10 mt-auto min-h-0 sm:min-h-[180px] md:min-h-[180px] flex flex-col justify-start">
                  <span className="text-[#e0937a] font-bold uppercase tracking-widest text-[10px] mb-2 block">Dein Ergebnis:</span>
                  <p className="text-[#efe7dd] font-medium leading-relaxed text-xs sm:text-[13px] md:text-sm">Ein eiserner Notgroschen für ruhigen Schlaf und ein fehlerfrei eingerichtetes Depot. Du verstehst ab jetzt die Spielregeln des Geldes, hast jeden Monat mehr Cash zum Investieren freigeschaufelt und bist zu 100 % startbereit.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-xl border border-white/5 relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#e0937a]/10 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500">
              <span className="absolute top-4 right-5 sm:right-6 text-[80px] sm:text-[100px] font-bold text-white/[0.03] group-hover:text-[#e0937a]/[0.08] group-hover:scale-110 origin-top-right transition-all duration-500 leading-none pointer-events-none font-serif-elegant">02</span>
              <div className="relative z-10 flex flex-col flex-1 h-full">
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-serif-elegant font-bold text-[#efe7dd] border-b border-[#e0937a]/20 pb-2 sm:pb-3 mb-4 pr-12 group-hover:border-[#e0937a]/50 transition-colors">Die Basics & Dein ETF-Sparplan</h4>
                  <p className="text-xs sm:text-[13px] md:text-[15px] text-gray-400 font-light leading-relaxed mb-6">Wir stellen deine Finanzen auf ein logisches Kontensystem um und automatisieren deine Sparrate komplett. Ohne, dass du jeden Monat manuell eingreifen musst. Du lernst die wichtigsten Grundlagen der Finanzwelt, wie Zinseszins, Diversifikation und Indexfonds funktionieren – ganz ohne kompliziertes Fachchinesisch.</p>
                </div>
                <div className="pt-5 sm:pt-6 border-t border-white/10 mt-auto min-h-0 sm:min-h-[180px] md:min-h-[180px] flex flex-col justify-start">
                  <span className="text-[#e0937a] font-bold uppercase tracking-widest text-[10px] mb-2 block">Dein Ergebnis:</span>
                  <p className="text-[#efe7dd] font-medium leading-relaxed text-xs sm:text-[13px] md:text-sm">Dein erstes großes Sicherheitsnetz steht. Ein solider Kern aus weltweiten ETFs läuft ab jetzt zu 100 % auf Autopilot im Hintergrund. Dein Geld arbeitet für dich, während du schläfst.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-xl border border-white/5 relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#e0937a]/10 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500">
              <span className="absolute top-4 right-5 sm:right-6 text-[80px] sm:text-[100px] font-bold text-white/[0.03] group-hover:text-[#e0937a]/[0.08] group-hover:scale-110 origin-top-right transition-all duration-500 leading-none pointer-events-none font-serif-elegant">03</span>
              <div className="relative z-10 flex flex-col flex-1 h-full">
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-serif-elegant font-bold text-[#efe7dd] border-b border-[#e0937a]/20 pb-2 sm:pb-3 mb-4 pr-12 group-hover:border-[#e0937a]/50 transition-colors">Der Turbo (Deine ersten Einzelaktien)</h4>
                  <p className="text-xs sm:text-[13px] md:text-[15px] text-gray-400 font-light leading-relaxed mb-6">Jetzt schalten wir den Zusatz-Motor für dein Depot ein. Wir gehen gemeinsam in die Praxis und machen Schritt für Schritt deine ersten Käufe von ausgewählten Qualitätsaktien (Satelliten). Du lernst, zu welchen Uhrzeiten man einkauft und wie du dich komplett von nervösen Börsen-News abschottest.</p>
                </div>
                <div className="pt-5 sm:pt-6 border-t border-white/10 mt-auto min-h-0 sm:min-h-[180px] md:min-h-[180px] flex flex-col justify-start">
                  <span className="text-[#e0937a] font-bold uppercase tracking-widest text-[10px] mb-2 block">Dein Ergebnis:</span>
                  <p className="text-[#efe7dd] font-medium leading-relaxed text-xs sm:text-[13px] md:text-sm">Du beherrschst einen glasklaren, logischen Filter für starke Unternehmen. Du investierst ab jetzt nur noch in krisensichere Firmen mit echten Gewinnen, die du in 3 einfachen Sätzen selbst erklären kannst.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-10 rounded-xl border border-white/5 relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 hover:border-[#e0937a]/40 hover:bg-gradient-to-br hover:from-[#1a1a1a] hover:to-[#e0937a]/10 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500">
              <span className="absolute top-4 right-5 sm:right-6 text-[80px] sm:text-[100px] font-bold text-white/[0.03] group-hover:text-[#e0937a]/[0.08] group-hover:scale-110 origin-top-right transition-all duration-500 leading-none pointer-events-none font-serif-elegant">04</span>
              <div className="relative z-10 flex flex-col flex-1 h-full">
                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg sm:text-xl font-serif-elegant font-bold text-[#efe7dd] border-b border-[#e0937a]/20 pb-2 sm:pb-3 mb-4 pr-12 group-hover:border-[#e0937a]/50 transition-colors">Absicherung & Deine Freiheit</h4>
                  <p className="text-xs sm:text-[13px] md:text-[15px] text-gray-400 font-light leading-relaxed mb-6">Wir bereiten dich perfekt auf schlechte Zeiten an der Börse vor, damit du bei einem Crash keine Panik bekommst, sondern die Ruhe bewahrst und die Schnäppchenkurse für dich nutzt. Gleichzeitig planen wir ganz konkret, ab wann du finanziell komplett auf eigenen Beinen stehen kannst und berechnen dein Exit-Szenario.</p>
                </div>
                <div className="pt-5 sm:pt-6 border-t border-white/10 mt-auto min-h-0 sm:min-h-[180px] md:min-h-[180px] flex flex-col justify-start">
                  <span className="text-[#e0937a] font-bold uppercase tracking-widest text-[10px] mb-2 block">Dein Ergebnis:</span>
                  <p className="text-[#efe7dd] font-medium leading-relaxed text-xs sm:text-[13px] md:text-sm">Du hast das richtige Mindset und kennst deine exakten Zahlen für die finanzielle Unabhängigkeit. Du bist ab jetzt dein eigener, absolut sicherer und unabhängiger Finanzchef.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-[#e0937a]/50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(224,147,122,0.2)] mb-12 sm:mb-16 relative overflow-hidden text-left group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#e0937a]/10 via-transparent to-[#e0937a]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 border-b border-[#e0937a]/20 pb-3 sm:pb-4">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#e0937a] drop-shadow-[0_0_8px_rgba(224,147,122,0.5)]" />
                <h4 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant font-bold text-[#efe7dd]">Das Yagibasan Extra: Die 100-Euro-Challenge</h4>
              </div>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <span className="text-[#e0937a] font-bold tracking-widest uppercase text-xs sm:text-sm block mb-1">Was wir machen:</span>
                  <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">Wir fangen sofort in der ersten Woche an, echtes Geld für dich freizuschaufeln. Statt nur über die Börse zu reden, machen wir die 100-Euro-Challenge: Wir durchleuchten gemeinsam deine laufenden Fixkosten und alten Verträge im Live-Call.</p>
                </div>
                <div>
                  <span className="text-[#e0937a] font-bold tracking-widest uppercase text-xs sm:text-sm block mb-1">Dein direkter Mehrwert:</span>
                  <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed">Aus Erfahrung zeigt sich: Bei den allermeisten Teilnehmern finden wir versteckte Potenziale von 50 bis über 100 Euro im Monat, die sich ohne jeglichen Verzicht auf Lebensqualität sofort einsparen lassen. Damit hat sich ein großer Teil deines Mentorings schon in der ersten Woche im echten Leben von ganz alleine refinanziert.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a href="#" onClick={handleOpenModal} className="group flex items-center gap-3 sm:gap-4 bg-[#1a1a1a] border-2 border-[#e0937a] text-[#e0937a] font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-sm hover:bg-[#e0937a] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(224,147,122,0.5)] transition-all duration-300 relative z-10 text-sm sm:text-base">
              Zum Erstgespräch bewerben
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* QUOTE 4 */}
      <div className="w-full bg-[#0a0a0a] py-10 sm:py-12 px-5 sm:px-6 text-center border-y border-[#e0937a]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0937a]/5 to-transparent"></div>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-serif-elegant italic text-[#efe7dd] max-w-4xl mx-auto leading-relaxed px-4">
          „Der erste Schritt, um irgendwohin zu gelangen, besteht darin, zu entscheiden, dass man nicht dort bleiben wird, wo man gerade ist.“
          <span className="block mt-4 text-xs sm:text-sm font-sans font-bold text-[#e0937a] tracking-widest uppercase not-italic">— J.P. Morgan</span>
        </p>
      </div>

      {/* PREMIUM */}
      <section id="premium" className="scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-40 relative py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(224,147,122,0.08)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Die Community</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-4 sm:mb-6">Was erwartet dich im Premium?</h3>
            <p className="text-gray-400 font-light text-sm sm:text-base max-w-2xl mx-auto">Für alle, die genau wissen wollen, wie ich im Alltag investiere. Ein strukturierter Einblick direkt in den Maschinenraum meines Vermögensaufbaus.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-xl hover:border-[#e0937a]/50 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-1 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(224,147,122,0.3)] group">
                <LineChart className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
                <h4 className="text-lg sm:text-xl font-serif-elegant mb-2 sm:mb-3 font-semibold text-[#efe7dd]">Aktien & Setups</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Konkrete Einblicke, wann ich welche Einzelaktie kaufe oder verkaufe – nachvollziehbar und völlig transparent.</p>
              </div>
              <div className="bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-xl hover:border-[#e0937a]/50 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-1 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(224,147,122,0.3)] group">
                <CalendarDays className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
                <h4 className="text-base sm:text-lg md:text-xl font-serif-elegant mb-2 sm:mb-3 font-semibold text-[#efe7dd] break-words hyphens-auto">Dividenden-Kalender</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Mein monatlicher Cashflow. Sieh genau, welche Unternehmen wann ausschütten und wie passives Einkommen wächst.</p>
              </div>
              <div className="bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-xl hover:border-[#e0937a]/50 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-1 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(224,147,122,0.3)] group">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
                <h4 className="text-lg sm:text-xl font-serif-elegant mb-2 sm:mb-3 font-semibold text-[#efe7dd]">Strategie-Updates</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Regelmäßige Einordnung der aktuellen Marktphase. Damit du verstehst, warum ich welche Entscheidungen treffe.</p>
              </div>
              <div className="bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-xl hover:border-[#e0937a]/50 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-1 transition-all duration-300 shadow-[0_5px_15px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(224,147,122,0.3)] group">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] mb-4 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(224,147,122,0.4)]" />
                <h4 className="text-lg sm:text-xl font-serif-elegant mb-2 sm:mb-3 font-semibold text-[#efe7dd]">Exklusive Q&As</h4>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Dein direkter Draht. Stell mir in einem geschlossenen Rahmen deine Fragen und lass uns Meinungen abgleichen.</p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] bg-[#222] border border-[#e0937a]/30 rounded-xl shadow-[0_0_50px_rgba(224,147,122,0.15)] hover:shadow-[0_0_80px_rgba(224,147,122,0.4)] transition-shadow duration-500 flex flex-col items-center justify-center p-6 sm:p-8 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-[#333] flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 border-b border-black/50">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                </div>
                <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-[#e0937a] mb-3 sm:mb-4 mt-4 sm:mt-6 drop-shadow-[0_0_10px_rgba(224,147,122,0.5)]" />
                <h4 className="font-bold text-xl sm:text-2xl mb-1 sm:mb-2 font-serif-elegant text-[#efe7dd]">Premium Zugang</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest mb-6 sm:mb-8">Bald verfügbar</p>
                <a href="#pakete" className="bg-[#e0937a] text-[#1a1a1a] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)] transition-all duration-300 text-sm sm:text-base">Zu den Preisen</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAKETE */}
      <section id="pakete" className="scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-40 relative py-16 sm:py-20 px-5 sm:px-6 md:px-12 lg:px-24 border-y border-white/5 bg-[#111] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,147,122,0.06)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-3 sm:mb-4">Wähle deinen Weg</h3>
            <p className="text-gray-400 font-light text-sm sm:text-base">Ehrlich und transparent. Such dir das Paket aus, das am besten zu deiner aktuellen Phase passt.</p>
          </div>

          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${!isYearly ? 'text-[#efe7dd]' : 'text-gray-500'}`}>Monatlich</span>
            <button onClick={() => setIsYearly(!isYearly)} className="w-14 h-7 sm:w-16 sm:h-8 bg-[#1a1a1a] rounded-full p-1 border border-[#e0937a]/30 relative transition-colors duration-300 focus:outline-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] flex-shrink-0">
              <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-[#e0937a] rounded-full shadow-[0_0_10px_rgba(224,147,122,0.5)] transform transition-transform duration-300 ${isYearly ? 'translate-x-7 sm:translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <div className="flex flex-col items-start">
              <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors ${isYearly ? 'text-[#e0937a] drop-shadow-[0_0_8px_rgba(224,147,122,0.3)]' : 'text-gray-500'}`}>Jährlich</span>
            </div>
          </div>

          <div 
            ref={pricingScrollRef}
            onScroll={handlePricingScroll}
            className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-8 md:pb-0 pt-4 md:pt-0 scrollbar-hide scroll-smooth"
          >
            <div className="w-[85vw] md:w-auto shrink-0 snap-center bg-[#1a1a1a] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col opacity-90 hover:opacity-100 transition-opacity">
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-2 text-gray-300">Starter</h4>
              <div className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 text-[#efe7dd]">0 € <span className="text-xs sm:text-sm text-gray-500 font-light">/ dauerhaft</span></div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Basis-Finanzwissen</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Der Excel-Budgetplaner</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Monatlicher Substack-Newsletter</li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-600"><X className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Einblick in Aktien-Käufe</li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-600"><X className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> Dividendenkalender & Analysen</li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-600"><X className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> 1:1 Betreuung</li>
              </ul>
              <a href="#newsletter" className="w-full text-center border border-gray-600 text-gray-300 font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-sm hover:bg-gray-800 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 text-sm sm:text-base">Kostenlos mitlesen</a>
            </div>
            
            <div className="w-[85vw] md:w-auto shrink-0 snap-center bg-gradient-to-b from-[#1a1a1a] to-[#e0937a]/15 border-2 border-[#e0937a] rounded-xl p-6 sm:p-8 flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(224,147,122,0.3)] hover:shadow-[0_0_70px_rgba(224,147,122,0.5)] transition-all duration-500 relative z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e0937a] text-[#1a1a1a] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1 rounded-sm shadow-[0_5px_15px_rgba(224,147,122,0.5)] whitespace-nowrap">Am Beliebtesten</div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-2 text-[#e0937a] drop-shadow-[0_0_8px_rgba(224,147,122,0.4)] mt-2">Premium</h4>
              <div className="mb-5 sm:mb-6 min-h-[90px] sm:min-h-[110px] flex flex-col justify-end">
                {!isYearly ? (
                  <div className="text-3xl sm:text-4xl font-bold text-[#efe7dd] transition-all duration-300">
                    20 € <span className="text-xs sm:text-sm text-gray-400 font-light">/ Monat</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5 sm:gap-2 transition-all duration-300 animate-in fade-in">
                    <div className="inline-flex w-fit bg-[#e0937a]/10 border border-[#e0937a]/30 text-[#e0937a] px-2 sm:px-3 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold tracking-widest uppercase items-center shadow-[0_0_10px_rgba(224,147,122,0.1)]">
                       🔥 Launch-Angebot: Limitiert auf 25 Plätze
                    </div>
                    <div className="flex items-baseline gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl font-bold text-gray-500 line-through decoration-red-500/50">240 €</span>
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#efe7dd] drop-shadow-[0_0_15px_rgba(224,147,122,0.5)] leading-none">200 €</span>
                    </div>
                    <span className="text-xs sm:text-sm text-[#e0937a] font-medium tracking-wide">/ im ersten Jahr</span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1 text-xs sm:text-sm text-gray-300">
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Alles aus dem Starter-Paket</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Live-Einblicke in Einzelaktien-Käufe</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Voller Dividendenkalender</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Regelmäßige Strategie-Updates</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Premium Q&A und Austausch</li>
                <li className="flex items-center gap-2 sm:gap-3 text-gray-600"><X className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> 1:1 Individuelles Coaching</li>
              </ul>
              <div className="mt-auto flex flex-col gap-2 sm:gap-3">
                {!isYearly ? (
                  <a href="#" className="w-full text-center bg-[#e0937a] text-[#1a1a1a] font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-sm hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)] transition-all duration-300 text-sm sm:text-base">Premium sichern</a>
                ) : (
                  <a href="#" className="w-full text-center bg-gradient-to-r from-[#c07a63] to-[#e0937a] text-[#1a1a1a] font-extrabold px-4 sm:px-6 py-3 sm:py-4 rounded-sm hover:from-[#efe7dd] hover:to-[#efe7dd] hover:-translate-y-1 shadow-[0_0_25px_rgba(224,147,122,0.6)] hover:shadow-[0_15px_40px_rgba(224,147,122,0.8)] transition-all duration-300 transform scale-[1.02] text-sm sm:text-base">Launch-Angebot sichern</a>
                )}
                <p className="text-[10px] sm:text-[11px] text-center font-light mt-1 transition-colors">
                  {!isYearly ? <span className="text-gray-400">Jederzeit kündbar.</span> : <span className="text-[#e0937a] font-bold tracking-wider opacity-80">(Entspricht 16,66 € / Monat)</span>}
                </p>
              </div>
            </div>
            
            <div className="w-[85vw] md:w-auto shrink-0 snap-center bg-[#1a1a1a] border border-white/10 rounded-xl p-6 sm:p-8 flex flex-col hover:border-[#e0937a]/40 hover:bg-gradient-to-b hover:from-[#1a1a1a] hover:to-[#e0937a]/10 hover:shadow-[0_0_35px_rgba(224,147,122,0.25)] transition-all duration-500 group">
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-2 text-gray-300 group-hover:text-[#e0937a] transition-colors">1:1 Mentoring</h4>
              <div className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 text-[#efe7dd]">Auf Anfrage</div>
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Inklusive Premium Zugang</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Das komplette 16-Modul System</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Individuelle Depotstrukturierung</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Direkter 1:1 Support & Calls</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Dauerhafter Check deines Setups</li>
                <li className="flex items-center gap-2 sm:gap-3"><Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0" /> Mentalitäts- & Budget-Training</li>
              </ul>
              <a href="#mentoring" onClick={handleOpenModal} className="w-full text-center border-2 border-[#e0937a] text-[#e0937a] font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-sm hover:bg-[#e0937a] hover:text-[#1a1a1a] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(224,147,122,0.4)] transition-all duration-300 text-sm sm:text-base">Jetzt bewerben</a>
            </div>
          </div>

          <div className="flex md:hidden justify-center mt-6 text-[#e0937a] items-center h-8 transition-all duration-300">
            {activeCardIndex === 0 && (
              <div className="flex items-center gap-2 animate-pulse transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-widest">Wischen ➔</span>
              </div>
            )}
            {activeCardIndex === 1 && (
              <div className="flex items-center gap-2 animate-pulse transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-widest">⟵ Wischen ⟶</span>
              </div>
            )}
            {activeCardIndex === 2 && (
              <div className="flex items-center gap-2 animate-pulse transition-opacity duration-300">
                <span className="text-xs font-bold uppercase tracking-widest">⟵ Wischen</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* QUOTE 5 */}
      <div className="w-full bg-[#0a0a0a] py-10 sm:py-12 px-5 sm:px-6 text-center border-y border-[#e0937a]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0937a]/5 to-transparent"></div>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-serif-elegant italic text-[#efe7dd] max-w-4xl mx-auto leading-relaxed px-4">
          „Beherrsche deine Emotionen, oder sie werden dich beherrschen.“
          <span className="block mt-4 text-xs sm:text-sm font-sans font-bold text-[#e0937a] tracking-widest uppercase not-italic">— Stoisches Prinzip</span>
        </p>
      </div>

      {/* EMPFEHLUNGEN */}
      <section className="relative py-16 sm:py-20 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden bg-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,147,122,0.06)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div>
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Die Basics</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-10 sm:mb-12">Meine Empfehlungen</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            <a href="#" className="group block bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-lg hover:border-[#e0937a]/60 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-4 h-4 text-[#e0937a]" /></div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-2 sm:mb-3 text-[#efe7dd]">Trade Republic</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Sehr anfängerfreundlich und günstig. Perfekt, um deine ersten ETF-Sparpläne ganz automatisch laufen zu lassen.</p>
            </a>
            <a href="#" className="group block bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-lg hover:border-[#e0937a]/60 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-4 h-4 text-[#e0937a]" /></div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-2 sm:mb-3 text-[#efe7dd]">Scalable Capital</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Eine tolle Alternative mit einer riesigen Auswahl an ETFs und einer sehr aufgeräumten App.</p>
            </a>
            <a href="#" className="group block bg-[#111] border border-[#e0937a]/20 p-6 sm:p-8 rounded-lg hover:border-[#e0937a]/60 hover:bg-gradient-to-br hover:from-[#111] hover:to-[#e0937a]/15 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(224,147,122,0.35)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-4 h-4 text-[#e0937a]" /></div>
              <h4 className="text-xl sm:text-2xl font-serif-elegant mb-2 sm:mb-3 text-[#efe7dd]">ING</h4>
              <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">Für mich die beste Bank für das ganz normale Girokonto und um den wichtigen Notgroschen sicher aufzubewahren.</p>
            </a>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="scroll-mt-24 sm:scroll-mt-32 md:scroll-mt-40 relative py-10 sm:py-12 px-5 sm:px-6 md:px-12 lg:px-24 bg-[#111] overflow-hidden border-y border-[#e0937a]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(224,147,122,0.06)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto bg-gradient-to-r from-[#e0937a] to-[#c07a63] p-[2px] rounded-xl shadow-[0_0_35px_rgba(224,147,122,0.3)] hover:shadow-[0_0_50px_rgba(224,147,122,0.4)] transition-shadow duration-500">
          <div className="bg-[#1a1a1a] p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 rounded-[10px]">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-elegant font-bold text-[#efe7dd] mb-2 sm:mb-3 flex items-center gap-2 sm:gap-3">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#e0937a]" /> Mein Newsletter
              </h3>
              <p className="text-gray-300 font-light text-sm sm:text-base max-w-xl leading-relaxed">
                Auf Substack teile ich regelmäßig und kostenlos, was mich gerade an der Börse beschäftigt, spannende Markt-Updates und allgemeine Finanz-Tipps.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col gap-3 sm:gap-4 mt-2 md:mt-0">
              <a href="#" className={`w-full text-center font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-sm transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${!newsletterConsent ? "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70 pointer-events-none" : "bg-[#e0937a] text-[#1a1a1a] hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)]"}`}>
                Kostenlos mitlesen
              </a>
              <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer group max-w-sm mx-auto md:mx-0">
                <input type="checkbox" required checked={newsletterConsent} onChange={(e) => setNewsletterConsent(e.target.checked)} className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-[#e0937a] cursor-pointer flex-shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-gray-400 font-light leading-relaxed text-left">
                  Ich habe die <a href="#datenschutz" className="text-[#e0937a] hover:underline transition-all">Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGETPLANER */}
      <section className="relative bg-[#1a1a1a] py-16 sm:py-20 px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(224,147,122,0.08)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 sm:gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Für deinen Start</h2>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-4 sm:mb-6">Der einfache Budgetplaner</h3>
            <div className="border-l-4 border-[#e0937a] pl-5 sm:pl-6 py-3 sm:py-4 mb-6 sm:mb-8 bg-gradient-to-r from-[#e0937a]/15 to-transparent rounded-r-lg shadow-[inset_10px_0_20px_-10px_rgba(224,147,122,0.3)]">
              <p className="text-[#efe7dd] font-light text-sm sm:text-base leading-relaxed">
                Ein guter Überblick ist die halbe Miete. Wenn du anfangen möchtest, deine Finanzen in den Griff zu bekommen, lade dir kostenlos meine Excel-Vorlage herunter. Simpel, alltagstauglich und ohne unnötigen Schnickschnack.
              </p>
            </div>
            {!isBudgetSuccess ? (
              <form onSubmit={handleBudgetSubmit} className="flex flex-col gap-3 sm:gap-4 w-full">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    name="email"
                    placeholder="Deine E-Mail Adresse"
                    className="flex-1 bg-[#111] border border-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-sm text-[#efe7dd] focus:outline-none focus:border-[#e0937a] transition-colors text-sm sm:text-base"
                    required
                  />
                  <button
                    type="submit"
                    disabled={!budgetConsent || isBudgetSubmitting}
                    className={`w-full sm:w-fit font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-sm transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 text-sm sm:text-base ${
                      !budgetConsent || isBudgetSubmitting
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"
                        : "bg-[#e0937a] text-[#1a1a1a] hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)]"
                    }`}
                  >
                    {isBudgetSubmitting ? (
                      <><Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> Sendet...</>
                    ) : (
                      <><BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> Planer sichern</>
                    )}
                  </button>
                </div>
                <label className="flex items-start gap-2.5 sm:gap-3 cursor-pointer group mt-1 sm:mt-2">
                  <input type="checkbox" required checked={budgetConsent} onChange={(e) => setBudgetConsent(e.target.checked)} className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-[#e0937a] cursor-pointer flex-shrink-0" />
                  <span className="text-[10px] sm:text-[11px] md:text-xs text-gray-400 font-light leading-relaxed text-left">
                    Ich habe die <a href="#datenschutz" className="text-[#e0937a] hover:underline transition-all">Datenschutzerklärung</a> zur Kenntnis genommen und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                  </span>
                </label>
              </form>
            ) : (
              <div className="bg-[#e0937a]/10 border border-[#e0937a]/30 rounded-sm p-4 sm:p-6 flex items-center gap-3 sm:gap-4 shadow-[inset_0_0_15px_rgba(224,147,122,0.1)] w-full">
                <Check className="w-6 h-6 sm:w-8 sm:h-8 text-[#e0937a] flex-shrink-0" />
                <p className="text-[#efe7dd] text-sm sm:text-base leading-relaxed font-light">
                  Erfolgreich! Ich habe deine Anfrage erhalten und schicke dir den Planer in Kürze per E-Mail zu.
                </p>
              </div>
            )}
            <p className="text-[10px] sm:text-[11px] text-gray-500 mt-4 font-light">100% Kostenlos. Kein Spam. Jederzeit abmeldbar.</p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg bg-[#222] border border-[#e0937a]/40 rounded-lg shadow-[0_0_40px_rgba(224,147,122,0.25)] flex flex-col relative overflow-hidden group hover:border-[#e0937a]/70 hover:shadow-[0_0_60px_rgba(224,147,122,0.4)] transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-[#333] flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 border-b border-black/50 z-20">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-500"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
              </div>
              <div className="w-full pt-6 sm:pt-8 relative overflow-hidden bg-[#111]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1AQ9e9IxERzt5eluBhvXhUc1FJR5JNYsx" 
                  alt="Budgetplaner Vorschau" 
                  className="w-full h-auto block opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end z-10 text-center pb-4 sm:pb-6">
                  <h4 className="font-serif-elegant text-lg sm:text-xl mb-1.5 sm:mb-2 text-[#efe7dd] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Budgetplaner Vorlage</h4>
                  <p className="text-[10px] sm:text-xs text-[#e0937a] uppercase tracking-widest font-bold bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm border border-[#e0937a]/30 shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Kostenlos für dich</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24 px-5 sm:px-6 md:px-12 lg:px-24 bg-[#111] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,147,122,0.05)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase mb-3 sm:mb-4 text-[#e0937a] drop-shadow-[0_0_15px_rgba(224,147,122,0.2)]">Hast du noch Fragen?</h3>
            <p className="text-gray-400 font-light text-sm sm:text-base">Bevor du dich entscheidest, findest du hier die wichtigsten Antworten rund um die Pakete und das Mentoring.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start">
            {faqs.map((faq, index) => (
              <div key={index} className={`border rounded-lg transition-all duration-300 ${openFaq === index ? "bg-gradient-to-r from-[#e0937a]/15 to-transparent border-[#e0937a]/50 shadow-[0_5px_20px_rgba(224,147,122,0.2)]" : "bg-[#1a1a1a] border-white/10 hover:border-[#e0937a]/30 hover:bg-[#e0937a]/5 hover:shadow-[0_5px_15px_rgba(224,147,122,0.1)]"}`}>
                <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none">
                  <span className="font-semibold text-sm sm:text-[15px] text-[#efe7dd] pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-[#e0937a] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="p-4 sm:p-6 pt-0 text-gray-400 leading-relaxed font-light text-xs sm:text-sm">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE 6 */}
      <div className="w-full bg-[#0a0a0a] py-10 sm:py-12 px-5 sm:px-6 text-center border-y border-[#e0937a]/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e0937a]/5 to-transparent"></div>
        <p className="relative z-10 text-lg sm:text-xl md:text-2xl font-serif-elegant italic text-[#efe7dd] max-w-4xl mx-auto leading-relaxed px-4">
          „Das Schicksal mischt die Karten, aber du spielst das Spiel.“
          <span className="block mt-4 text-xs sm:text-sm font-sans font-bold text-[#e0937a] tracking-widest uppercase not-italic">— Marc Aurel</span>
        </p>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 px-5 sm:px-6 md:px-12 lg:px-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(224,147,122,0.1)_0%,transparent_50%)] pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10 sm:gap-12">
          <div className="flex justify-center pb-6 sm:pb-8 border-b border-white/5">
            <h2 className="text-[#e0937a] font-bold tracking-[0.6em] sm:tracking-[0.8em] uppercase text-xs sm:text-sm md:text-xl drop-shadow-[0_0_15px_rgba(224,147,122,0.5)]">
              Werte für Generationen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr_1fr_1.2fr] gap-10 sm:gap-12 text-left">
            <div className="flex justify-center lg:justify-start">
              <img src="https://lh3.googleusercontent.com/d/1dj4_0mNEvkggbx4UsJRX0-BE25gBR-ol" alt="Yagibasan Capital Logo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_20px_rgba(224,147,122,0.15)] hover:scale-105 transition-transform cursor-pointer opacity-80 hover:opacity-100" />
            </div>
            <div className="flex flex-col gap-4 sm:gap-5 pl-8 sm:pl-12 lg:pl-8 mx-auto md:mx-0 w-fit md:w-auto">
              <h4 className="text-[#efe7dd] font-semibold text-base sm:text-lg mb-1 sm:mb-2 border-b border-[#e0937a]/30 pb-2 inline-block w-full max-w-[200px]">Kontakt</h4>
              <div className="flex items-start gap-3 sm:gap-4 group cursor-pointer relative -ml-10 sm:-ml-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full border border-[#e0937a]/30 bg-[#e0937a]/10 flex items-center justify-center text-[#e0937a] group-hover:bg-[#e0937a] group-hover:text-[#1a1a1a] group-hover:shadow-[0_0_15px_rgba(224,147,122,0.5)] transition-all duration-300">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="pt-1 text-sm sm:text-base">
                  <p className="text-gray-400 font-light group-hover:text-[#efe7dd] transition-colors leading-relaxed whitespace-nowrap">Yagibasan Capital</p>
                  <p className="text-gray-400 font-light group-hover:text-[#efe7dd] transition-colors leading-relaxed whitespace-nowrap">Untere Wiesenstraße 30</p>
                  <p className="text-gray-400 font-light group-hover:text-[#efe7dd] transition-colors leading-relaxed whitespace-nowrap">57271 Hilchenbach</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer mt-1 relative -ml-10 sm:-ml-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full border border-[#e0937a]/30 bg-[#e0937a]/10 flex items-center justify-center text-[#e0937a] group-hover:bg-[#e0937a] group-hover:text-[#1a1a1a] group-hover:shadow-[0_0_15px_rgba(224,147,122,0.5)] transition-all duration-300">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <a href="mailto:office@yagibasancapital.de" className="text-gray-400 font-light group-hover:text-[#e0937a] transition-colors whitespace-nowrap text-sm sm:text-base">office@yagibasancapital.de</a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer mt-1 relative -ml-10 sm:-ml-12">
                <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full border border-[#e0937a]/30 bg-[#e0937a]/10 flex items-center justify-center text-[#e0937a] group-hover:bg-[#e0937a] group-hover:text-[#1a1a1a] group-hover:shadow-[0_0_15px_rgba(224,147,122,0.5)] transition-all duration-300">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <a href="tel:015753698917" className="text-gray-400 font-light group-hover:text-[#e0937a] transition-colors whitespace-nowrap text-sm sm:text-base">0157 53 69 89 17</a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left items-center md:items-start">
              <h4 className="text-[#efe7dd] font-semibold text-base sm:text-lg mb-1 sm:mb-2 border-b border-[#e0937a]/30 pb-2 inline-block w-fit">Rechtliches</h4>
              <a href="#impressum" className="text-gray-400 text-sm sm:text-base font-light hover:text-[#e0937a] md:hover:translate-x-1 transition-all">Impressum</a>
              <a href="#datenschutz" className="text-gray-400 text-sm sm:text-base font-light hover:text-[#e0937a] md:hover:translate-x-1 transition-all">Datenschutzerklärung</a>
              <a href="#" className="text-gray-400 text-sm sm:text-base font-light hover:text-[#e0937a] md:hover:translate-x-1 transition-all">AGB</a>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 text-center md:text-left items-center md:items-start">
              <h4 className="text-[#efe7dd] font-semibold text-base sm:text-lg mb-1 sm:mb-2 border-b border-[#e0937a]/30 pb-2 inline-block w-fit">Hinweis</h4>
              <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
                Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und stellen ausdrücklich keine Anlageberatung dar. Ein verbindlicher Mentoring-Vertrag kommt erst nach einem persönlichen Erstgespräch zustande.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 text-[10px] sm:text-xs text-gray-600 relative z-10 border-t border-white/5 pt-6 sm:pt-8 font-light text-center max-w-4xl mx-auto leading-relaxed">
          Keine Anlageberatung, Anlagevermittlung oder Finanzportfolioverwaltung im Sinne des KWG, WpIG und der GewO (§ 34f/h).
          <br /><br />© {new Date().getFullYear()} Burak Yagibasan. Alle Rechte vorbehalten.
        </div>
      </footer>

      {/* MODAL / FORM */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-black/90 sm:bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full h-full sm:h-auto sm:max-w-4xl bg-[#111] sm:border border-[#e0937a]/30 sm:rounded-2xl shadow-[0_0_50px_rgba(224,147,122,0.15)] my-auto flex flex-col sm:max-h-[90vh]">
            <button onClick={handleCloseModal} className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-[#e0937a] hover:rotate-90 transition-all z-20 bg-black/50 sm:bg-transparent p-2 sm:p-0 rounded-full sm:rounded-none">
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="p-5 sm:p-8 md:p-12 overflow-y-auto custom-scrollbar h-full">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12 pb-10 sm:pb-0">
                  <div className="text-center border-b border-white/10 pb-8 sm:pb-10 pt-4 sm:pt-0">
                    <img src="https://lh3.googleusercontent.com/d/1dj4_0mNEvkggbx4UsJRX0-BE25gBR-ol" alt="Yagibasan Capital Logo" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto object-contain mb-4 sm:mb-6 drop-shadow-[0_0_15px_rgba(224,147,122,0.3)]" />
                    <h2 className="text-[#e0937a] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-2">Mentoring-Audit</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-elegant text-[#efe7dd] mb-3 sm:mb-4">Der Status Quo</h3>
                    <p className="text-gray-400 font-light text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                      Finanzielle Autonomie beginnt mit radikaler Ehrlichkeit. Dieser Fragebogen dient als Fundament unserer strategischen Zusammenarbeit. Bitte fülle die Felder offen und detailliert aus.
                    </p>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8 bg-[#1a1a1a] p-5 sm:p-8 rounded-xl border border-white/5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#e0937a] border-b border-[#e0937a]/20 pb-2 sm:pb-3">I. Persönliches Profil</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">1. Vor- und Nachname</label>
                        <input type="text" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">2. Alter & Beruf/Branche</label>
                        <input type="text" placeholder="z.B. 34 Jahre, IT-Projektleiter" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">3. Familienstand & Kinder</label>
                        <input type="text" placeholder="z.B. Verheiratet, 2 Kinder" className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">4. Zeit für Mentoring (Std/Woche)</label>
                        <input type="text" placeholder="z.B. 2-3 Stunden" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 bg-[#1a1a1a] p-5 sm:p-8 rounded-xl border border-white/5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#e0937a] border-b border-[#e0937a]/20 pb-2 sm:pb-3">II. Die Finanzielle Basis</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">5. Monatliches Nettoeinkommen (€)</label>
                        <input type="number" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">6. Lebenshaltungskosten (€)</label>
                        <input type="number" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">7. Aktuelle Barreserven (€)</label>
                        <input type="number" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">8. Bestehende Verbindlichkeiten</label>
                        <input type="text" placeholder="Restschuld / monatliche Rate" className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2 sm:mb-3">9. Wie sparst du aktuell?</label>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-1">
                          <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="sparen" className="accent-[#e0937a] w-4 h-4 sm:w-4 sm:h-4" /><span className="text-sm sm:text-base text-gray-400 group-hover:text-[#efe7dd]">Automatisiert</span></label>
                          <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="sparen" className="accent-[#e0937a] w-4 h-4 sm:w-4 sm:h-4" /><span className="text-sm sm:text-base text-gray-400 group-hover:text-[#efe7dd]">Was übrig bleibt</span></label>
                          <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="sparen" className="accent-[#e0937a] w-4 h-4 sm:w-4 sm:h-4" /><span className="text-sm sm:text-base text-gray-400 group-hover:text-[#efe7dd]">Unregelmäßig</span></label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 bg-[#1a1a1a] p-5 sm:p-8 rounded-xl border border-white/5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#e0937a] border-b border-[#e0937a]/20 pb-2 sm:pb-3">III. Investment & Setup</h4>
                    <div className="space-y-5 sm:space-y-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">10. Vorwissen (1 = Anfänger, 10 = Experte)</label>
                        <select className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all cursor-pointer">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (<option key={num} value={num}>{num}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">11. Hast du bereits ein Depot? Wo?</label>
                        <input type="text" placeholder="z.B. Trade Republic, keines" className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">12. Investierst du aktuell bereits aktiv Geld an den Finanzmärkten?</label>
                        <div className="flex flex-wrap gap-4 sm:gap-6 mt-2">
                          <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="aktiv_investiert" className="accent-[#e0937a] w-4 h-4 sm:w-4 sm:h-4" /><span className="text-sm sm:text-base text-gray-400 group-hover:text-[#efe7dd]">Ja</span></label>
                          <label className="flex items-center gap-2 cursor-pointer group"><input type="radio" name="aktiv_investiert" className="accent-[#e0937a] w-4 h-4 sm:w-4 sm:h-4" /><span className="text-sm sm:text-base text-gray-400 group-hover:text-[#efe7dd]">Nein</span></label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">13. Wenn investiert: Worin & Gesamtwert?</label>
                        <input type="text" placeholder="z.B. ETFs, 5.000€" className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">14. Wenn nicht investiert: Was blockiert dich?</label>
                        <textarea rows={2} placeholder="Angst, Technik, fehlendes Wissen..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">15. Wenn es um wichtige finanzielle Entscheidungen geht: Wie triffst du diese meistens?</label>
                        <textarea rows={2} placeholder="z.B. Bauchgefühl, Recherche, Berater..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 bg-[#1a1a1a] p-5 sm:p-8 rounded-xl border border-white/5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#e0937a] border-b border-[#e0937a]/20 pb-2 sm:pb-3">IV. Psychologie, Umfeld & Mindset</h4>
                    <div className="space-y-5 sm:space-y-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">16. Was bedeutet Geld für dich persönlich?</label>
                        <textarea rows={2} placeholder="Sicherheit, Freiheit, Macht..." required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">17. Wie spricht dein engstes soziales Umfeld über Geld und Börse?</label>
                        <textarea rows={2} placeholder="z.B. Partner unterstützt mich, Freunde skeptisch..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">18. Stell dir vor, du erhältst unerwartet 10.000 € geschenkt. Was tust du damit?</label>
                        <textarea rows={2} placeholder="Anteilige Aufteilung in Konsum, Sparen, Investment..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">19. Welche Glaubenssätze über Geld haben dich in deiner Kindheit geprägt?</label>
                        <textarea rows={2} placeholder="z.B. 'Geld ist die Wurzel allen Übels', 'Geld muss man hart erarbeiten'..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">20. Wie würdest du emotional reagieren, wenn dein Depot um 25% an Wert verliert?</label>
                        <textarea rows={2} placeholder="Verkaufen, nachkaufen, App ignorieren..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">21. Dein bisher größter finanzieller Fehler?</label>
                        <textarea rows={2} placeholder="Zu spät angefangen, unüberlegter Konsum..." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all"></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 bg-[#1a1a1a] p-5 sm:p-8 rounded-xl border border-white/5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#e0937a] border-b border-[#e0937a]/20 pb-2 sm:pb-3">V. Erwartungen & Zukunftsvision</h4>
                    <div className="space-y-5 sm:space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">22. Welche jährliche Rendite (%) erwartest du realistisch?</label>
                          <input type="text" placeholder="z.B. 7% p.a." className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">23. Für welchen Zeitraum könntest du auf dein Kapital verzichten?</label>
                          <input type="text" placeholder="z.B. 10 Jahre, 20+ Jahre" className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">24. Wie sehr bist du bereit, alte Konsumgewohnheiten radikal zu ändern? (1 = Nicht bereit, 10 = Sehr bereit)</label>
                        <select className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all cursor-pointer">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (<option key={num} value={num}>{num}</option>))}
                        </select>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">25. Wichtigstes Ziel (10 Jahre)?</label>
                          <input type="text" placeholder="z.B. entspannte Altersvorsorge, Sicherheit für die Kinder" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">26. Welches monatliche Netto-Budget wäre "völlig sorgenfrei"?</label>
                          <input type="text" placeholder="z.B. 4.000 € netto" className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">27. Alter für finanzielle Unabhängigkeit?</label>
                          <input type="number" placeholder="z.B. 50" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8 bg-gradient-to-br from-[#1a1a1a] to-[#111] p-5 sm:p-8 rounded-xl border border-[#e0937a]/30">
                    <h4 className="text-lg sm:text-xl font-bold text-[#e0937a] border-b border-[#e0937a]/20 pb-2 sm:pb-3">VI. Kontaktdaten</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">Instagram-Name (@username)</label>
                        <input type="text" placeholder="@" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">Telefonnummer (Für Rückruf)</label>
                        <input type="tel" required className="w-full bg-[#111] border border-white/10 rounded-sm px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-[#efe7dd] focus:outline-none focus:border-[#e0937a] focus:shadow-[inset_0_0_10px_rgba(224,147,122,0.1)] transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1a1a1a] p-5 sm:p-6 rounded-xl border border-white/5 mt-6 sm:mt-8">
                    <label className="flex items-start gap-3 sm:gap-4 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        checked={auditConsent}
                        onChange={(e) => setAuditConsent(e.target.checked)}
                        className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 accent-[#e0937a] flex-shrink-0 cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        Ich habe die{" "}
                        <a href="#datenschutz" onClick={handleCloseModal} className="text-[#e0937a] hover:underline transition-all">Datenschutzerklärung</a>{" "}
                        zur Kenntnis genommen und stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                      </span>
                    </label>
                  </div>
                  
                  <div className="pt-6 sm:pt-8 flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting || !auditConsent}
                      className={`group flex items-center justify-center gap-2 sm:gap-3 font-bold px-6 sm:px-12 py-4 sm:py-5 rounded-sm transition-all duration-300 w-full sm:w-auto text-sm sm:text-base ${
                        isSubmitting || !auditConsent
                          ? "bg-gray-700 text-gray-400 cursor-not-allowed opacity-70"
                          : "bg-[#e0937a] text-[#1a1a1a] hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)]"
                      }`}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" /> Audit wird übermittelt...</>
                      ) : (
                        <><Send className="w-5 h-5 sm:w-6 sm:h-6" /> Audit absenden & Erstgespräch anfragen</>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-16 sm:py-20 flex flex-col items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#e0937a]/20 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                    <Check className="w-10 h-10 sm:w-12 sm:h-12 text-[#e0937a]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-elegant text-[#efe7dd] mb-3 sm:mb-4">
                    Audit erfolgreich übermittelt.
                  </h3>
                  <p className="text-gray-400 font-light text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                    Vielen Dank für dein Vertrauen und deine radikale Ehrlichkeit. Ich werde deine Angaben persönlich prüfen und mich in Kürze bei dir melden.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-8 sm:mt-10 bg-[#e0937a] text-[#1a1a1a] font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm hover:bg-[#efe7dd] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(224,147,122,0.6)] transition-all duration-300 text-sm sm:text-base"
                  >
                    Schließen
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
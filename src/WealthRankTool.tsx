import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  X,
  Plus,
  Minus,
  Camera,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  ShieldCheck,
  Clock,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';

export interface WealthRankToolProps {
  /** Steuert die Sichtbarkeit der Komponente (Standard: true) */
  isOpen?: boolean;
  /** Optionaler Callback zum Schließen des Modals/Containers */
  onClose?: () => void;
  /** Wird aufgerufen, wenn der Nutzer zum 1:1 Mentoring-Audit wechseln möchte */
  onOpenAudit?: () => void;
  /** Wird aufgerufen, wenn der Nutzer zum kostenlosen Budgetplaner wechseln möchte */
  onNavigateToBudget?: () => void;
}

interface AgeBenchmark {
  label: string;
  minAge: number;
  maxAge: number;
  median: number; // Top 50 %
  top20: number;  // Top 20 %
  top10: number;  // Top 10 %
  top1: number;   // Top 1 %
}

interface StandingResult {
  percentile: number;
  barProgress: number;
  tierTitle: string;
}

interface MilestoneTarget {
  label: string;
  amount: number;
}

interface WealthResultCardProps {
  age: number;
  wealth: number;
  benchmark: AgeBenchmark;
  standing: StandingResult;
  isScreenshotMode?: boolean;
}

const LOGO_SRC = '/YAGIBASAN_CAPITAL_Gesamtes_Logo_Verlauf_HighRes.png';
const WORDMARK_LOGO_SRC = '/YAGIBASAN_CAPITAL_Verlauf_HighRes.png';

const QUICK_WEALTH_CHIPS: readonly number[] = [2500, 15000, 50000, 150000];

/**
 * Exakte Ankerpunkte für Fortschrittsleiste, Stufen-Markierungen und 4-Spalten-Beschriftung:
 * - Start: 0 % (Spalte 1 linksbündig)
 * - Ø Gruppe: 37.5 % (exakte geometrische Mitte von Spalte 2 im 4-Spalten-Raster)
 * - Top 20 %: 62.5 % (exakte geometrische Mitte von Spalte 3 im 4-Spalten-Raster)
 * - Top 10 %: 93 % (sauber über Spalte 4 rechtsbündig ausgerichtet; 93–100 % = Top 10 % bis Top 1 %)
 */
const BAR_ANCHOR_MEDIAN = 37.5;
const BAR_ANCHOR_TOP20 = 62.5;
const BAR_ANCHOR_TOP10 = 93;

const BENCHMARKS: readonly AgeBenchmark[] = [
  {
    label: '18–24 Jahre',
    minAge: 18,
    maxAge: 24,
    median: 2500,
    top20: 9500,
    top10: 18000,
    top1: 48000,
  },
  {
    label: '25–29 Jahre',
    minAge: 25,
    maxAge: 29,
    median: 8500,
    top20: 24000,
    top10: 45000,
    top1: 135000,
  },
  {
    label: '30–34 Jahre',
    minAge: 30,
    maxAge: 34,
    median: 19000,
    top20: 52000,
    top10: 95000,
    top1: 260000,
  },
  {
    label: '35–45 Jahre',
    minAge: 35,
    maxAge: 45,
    median: 35000,
    top20: 90000,
    top10: 165000,
    top1: 420000,
  },
];

/**
 * Erzeugt die smarte, gestaffelte Werteskala von 0 € bis 300.000 €:
 * - 0 € bis 25.000 € in 250-€-Schritten
 * - 25.000 € bis 100.000 € in 1.000-€-Schritten
 * - 100.000 € bis 300.000 € in 2.500-€-Schritten
 */
const buildWealthSteps = (): number[] => {
  const steps: number[] = [];
  for (let v = 0; v <= 25000; v += 250) {
    steps.push(v);
  }
  for (let v = 26000; v <= 100000; v += 1000) {
    steps.push(v);
  }
  for (let v = 102500; v <= 300000; v += 2500) {
    steps.push(v);
  }
  return steps;
};

const WEALTH_STEPS: readonly number[] = buildWealthSteps();
const MAX_WEALTH_INDEX = WEALTH_STEPS.length - 1;
const DEFAULT_WEALTH_INDEX = WEALTH_STEPS.indexOf(4500);

/** Findet den nächstgelegenen Index in der gestaffelten Vermögensskala */
const findClosestWealthIndex = (targetValue: number): number => {
  let closestIdx = 0;
  let smallestDiff = Math.abs(WEALTH_STEPS[0] - targetValue);

  for (let i = 1; i < WEALTH_STEPS.length; i += 1) {
    const diff = Math.abs(WEALTH_STEPS[i] - targetValue);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      closestIdx = i;
    }
  }
  return closestIdx;
};

/** Formatiert Beträge sauber im deutschen Währungsformat ohne Nachkommastellen */
const formatEuro = (value: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(Math.round(value));
};

/** Kompakte Darstellung für mobile Meilenstein-Beschriftungen (z. B. 165 Tsd. €) */
const formatCompactEuro = (value: number): string => {
  if (value >= 100000) {
    return `${Math.round(value / 1000)} Tsd. €`;
  }
  return formatEuro(value);
};

/** Formatiert Jahreszahlen mit maximal einer Nachkommastelle im deutschen Format */
const formatYears = (years: number): string => {
  const rounded = Math.max(0.1, Math.round(years * 10) / 10);
  const formatted = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: rounded % 1 === 0 ? 0 : 1,
    maximumFractionDigits: 1,
  }).format(rounded);
  return `${formatted} ${rounded === 1 ? 'Jahr' : 'Jahre'}`;
};

/** Ermittelt den passenden Benchmark-Datensatz für das gewählte Alter */
const getBenchmarkForAge = (age: number): AgeBenchmark => {
  return (
    BENCHMARKS.find((b) => age >= b.minAge && age <= b.maxAge) || BENCHMARKS[0]
  );
};

/**
 * Berechnet das Perzentil ("Weiter als X %") sowie die visuelle Position
 * auf der 4-stufigen Fortschrittsleiste passend zu den Raster-Ankern.
 */
const calculateStanding = (
  wealth: number,
  benchmark: AgeBenchmark
): StandingResult => {
  const { median, top20, top10, top1 } = benchmark;

  let percentile = 0;
  let barProgress = 0;
  let tierTitle = 'Fundament-Phase';

  if (wealth <= 0) {
    percentile = 5;
    barProgress = 2;
    tierTitle = 'Startpunkt';
  } else if (wealth < median) {
    const ratio = wealth / median;
    percentile = Math.round(5 + ratio * 45);
    barProgress = 2 + ratio * (BAR_ANCHOR_MEDIAN - 2);
    tierTitle = 'Aufbauphase';
  } else if (wealth < top20) {
    const ratio = (wealth - median) / (top20 - median);
    percentile = Math.round(50 + ratio * 30);
    barProgress =
      BAR_ANCHOR_MEDIAN + ratio * (BAR_ANCHOR_TOP20 - BAR_ANCHOR_MEDIAN);
    tierTitle = 'Über dem Durchschnitt';
  } else if (wealth < top10) {
    const ratio = (wealth - top20) / (top10 - top20);
    percentile = Math.round(80 + ratio * 10);
    barProgress =
      BAR_ANCHOR_TOP20 + ratio * (BAR_ANCHOR_TOP10 - BAR_ANCHOR_TOP20);
    tierTitle = 'Top 20 % deiner Altersgruppe';
  } else if (wealth < top1) {
    const ratio = (wealth - top10) / (top1 - top10);
    percentile = Math.round(90 + ratio * 9);
    barProgress = BAR_ANCHOR_TOP10 + ratio * (99 - BAR_ANCHOR_TOP10);
    tierTitle = 'Top 10 % deiner Altersgruppe';
  } else {
    percentile = 99;
    barProgress = 100;
    tierTitle = 'Top 1 % deiner Altersgruppe';
  }

  return {
    percentile: Math.min(99, Math.max(1, percentile)),
    barProgress: Math.min(100, Math.max(2, barProgress)),
    tierTitle,
  };
};

/** Bestimmt den nächsten erreichbaren Meilenstein basierend auf dem aktuellen Vermögen */
const getNextMilestone = (
  wealth: number,
  benchmark: AgeBenchmark
): MilestoneTarget => {
  if (wealth < benchmark.median) {
    return { label: 'Ø Gruppe (Top 50 %)', amount: benchmark.median };
  }
  if (wealth < benchmark.top20) {
    return { label: 'Top 20 %', amount: benchmark.top20 };
  }
  if (wealth < benchmark.top10) {
    return { label: 'Top 10 %', amount: benchmark.top10 };
  }
  if (wealth < benchmark.top1) {
    return { label: 'Top 1 %', amount: benchmark.top1 };
  }
  const nextRoundStep = Math.ceil((wealth + 25000) / 50000) * 50000;
  return {
    label: 'Nächstes Etappenziel',
    amount: Math.max(benchmark.top1 + 50000, nextRoundStep),
  };
};

/**
 * Berechnet die Dauer bis zum nächsten Meilenstein bei 7 % p.a. (weltweiter Aktien-ETF)
 * im Vergleich zu 0 % p.a. (unverzinstes Girokonto).
 */
const calculateFutureLever = (
  currentWealth: number,
  targetAmount: number,
  monthlySavings: number,
  currentAge: number
) => {
  const gap = Math.max(0, targetAmount - currentWealth);
  if (gap === 0 || monthlySavings <= 0) {
    return {
      monthsInvested: 0,
      yearsInvested: 0,
      targetAge: currentAge,
      monthsCash: 0,
      yearsCash: 0,
      yearsSaved: 0,
      monthsSaved: 0,
    };
  }

  // Monatlicher Zinsfaktor für exakt 7,0 % effektive Jahresrendite
  const monthlyRate = Math.pow(1.07, 1 / 12) - 1;

  let balance = currentWealth;
  let monthsInvested = 0;
  const maxMonths = 12 * 60; // Sicherheitsdeckel bei 60 Jahren

  while (balance < targetAmount && monthsInvested < maxMonths) {
    balance = balance * (1 + monthlyRate) + monthlySavings;
    monthsInvested += 1;
  }

  const monthsCash = Math.ceil(gap / monthlySavings);
  const monthsSaved = Math.max(0, monthsCash - monthsInvested);

  const yearsInvested = monthsInvested / 12;
  const yearsCash = monthsCash / 12;
  const yearsSaved = monthsSaved / 12;
  const targetAge = Math.round(currentAge + yearsInvested);

  return {
    monthsInvested,
    yearsInvested,
    targetAge,
    monthsCash,
    yearsCash,
    yearsSaved,
    monthsSaved,
  };
};

/**
 * Ausgelagerte interne Ergebnis-Karte:
 * Wird identisch in der normalen Ansicht und im Screenshot-Modus gerendert.
 */
const WealthResultCard: React.FC<WealthResultCardProps> = ({
  age,
  wealth,
  benchmark,
  standing,
  isScreenshotMode = false,
}) => {
  const [logoError, setLogoError] = useState<boolean>(false);
  const [wordmarkError, setWordmarkError] = useState<boolean>(false);

  // Indikator-Punkt leicht begrenzen, damit er an den Track-Enden nicht abschneidet
  const indicatorLeft = Math.min(98.5, Math.max(1.5, standing.barProgress));

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-[#e0937a]/50 bg-gradient-to-b from-[#1a1a1a] via-[#111111] to-[#0a0a0a] ${
        isScreenshotMode
          ? 'p-6 sm:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.88)]'
          : 'p-5 sm:p-7 shadow-[0_16px_50px_rgba(0,0,0,0.65)]'
      }`}
    >
      {/* Dezenter Kupfer-Lichtakzent im Hintergrund */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-[#e0937a]/12 blur-3xl" />

      <div
        className={`relative z-10 flex flex-col ${
          isScreenshotMode ? 'space-y-6' : 'space-y-5'
        }`}
      >
        {/* Karten-Kopf: Yagibasan Capital Logo mit Kupfer-Glow + Ranking-Badge */}
        <div
          className={`flex flex-col gap-3 border-b border-white/10 pb-4 ${
            isScreenshotMode
              ? 'items-start'
              : 'sm:flex-row sm:items-center sm:justify-between'
          }`}
        >
          <div className="flex items-center">
            {!logoError ? (
              <img
                src={LOGO_SRC}
                alt="Yagibasan Capital Logo"
                onError={() => setLogoError(true)}
                className="h-11 w-auto object-contain drop-shadow-[0_0_10px_rgba(224,147,122,0.22)] sm:h-12"
              />
            ) : (
              <span className="font-serif-elegant text-xl sm:text-2xl font-semibold tracking-wider text-[#efe7dd] drop-shadow-[0_0_10px_rgba(224,147,122,0.22)]">
                YAGIBASAN <span className="text-[#e0937a]">CAPITAL</span>
              </span>
            )}
          </div>

          <span className="inline-flex w-fit items-center rounded-full border border-[#e0937a]/35 bg-[#e0937a]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e0937a]">
            VERMÖGENS-RANKING DE (OHNE ERBE)
          </span>
        </div>

        {/* Hauptergebnis */}
        <div
          className={
            isScreenshotMode
              ? 'py-1 text-center'
              : 'flex flex-col justify-between gap-3 sm:flex-row sm:items-end'
          }
        >
          <div>
            {isScreenshotMode && (
              <p className="mb-1.5 text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                Altersgruppe {benchmark.label}
              </p>
            )}
            <div
              className={`font-serif-elegant font-semibold tracking-tight text-[#efe7dd] ${
                isScreenshotMode
                  ? 'text-4xl sm:text-5xl'
                  : 'text-3xl sm:text-4xl'
              }`}
            >
              Weiter als{' '}
              <span className="bg-gradient-to-r from-[#c07a63] to-[#e0937a] bg-clip-text text-transparent">
                {standing.percentile} %
              </span>
            </div>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-300">
              deiner Altersgruppe ({age} Jahre) · Nettovermögen:{' '}
              <span className="font-semibold text-[#efe7dd] tabular-nums">
                {formatEuro(wealth)}
              </span>
            </p>
          </div>

          <div
            className={`inline-flex w-fit items-center gap-1.5 rounded-full border border-[#e0937a]/30 bg-[#0a0a0a]/80 px-3 py-1 text-xs font-medium text-[#efe7dd] ${
              isScreenshotMode ? 'mx-auto mt-3' : ''
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#e0937a]" />
            <span>{standing.tierTitle}</span>
          </div>
        </div>

        {/* Präzise ausgerichtete, überlappungsfreie Fortschrittsleiste (Mobile & Desktop) */}
        <div className="space-y-2.5 rounded-xl border border-white/10 bg-[#0a0a0a]/80 p-3.5 sm:p-4">
          <div className="relative py-2">
            {/* Hintergrund-Track */}
            <div className="relative h-2.5 w-full overflow-hidden rounded-full border border-white/5 bg-[#1a1a1a]">
              {/* Fortschrittsbalken */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#c07a63] to-[#e0937a] transition-all duration-300"
                style={{ width: `${standing.barProgress}%` }}
              />
              {/* Stufen-Markierungen exakt auf den Ankerpunkten der 4 Spalten */}
              <div
                className="pointer-events-none absolute top-0 bottom-0 w-px bg-white/20"
                style={{ left: `${BAR_ANCHOR_MEDIAN}%` }}
              />
              <div
                className="pointer-events-none absolute top-0 bottom-0 w-px bg-white/20"
                style={{ left: `${BAR_ANCHOR_TOP20}%` }}
              />
              <div
                className="pointer-events-none absolute top-0 bottom-0 w-px bg-[#e0937a]/50"
                style={{ left: `${BAR_ANCHOR_TOP10}%` }}
              />
            </div>

            {/* Sichtbarer Positions-Indikator des Nutzers */}
            <div
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
              style={{ left: `${indicatorLeft}%` }}
            >
              <div className="h-4 w-4 rounded-full border-2 border-[#0a0a0a] bg-[#efe7dd] shadow-[0_0_12px_rgba(224,147,122,0.9)]" />
            </div>
          </div>

          {/* 4-Spalten-Raster: überlappungsfrei auf Smartphone & Desktop, synchron mit den Track-Markierungen */}
          <div className="grid grid-cols-4 gap-1 text-[10px] sm:text-xs leading-tight">
            <div className="min-w-0 text-left">
              <span className="block truncate font-medium text-neutral-300">
                Start
              </span>
              <span className="mt-0.5 block truncate text-[10px] text-neutral-500 tabular-nums">
                0 €
              </span>
            </div>

            <div className="min-w-0 text-center">
              <span
                className={`block truncate font-medium ${
                  wealth >= benchmark.median
                    ? 'text-[#efe7dd]'
                    : 'text-neutral-400'
                }`}
              >
                Ø Gruppe
              </span>
              <span className="mt-0.5 block truncate text-[10px] text-neutral-500 tabular-nums">
                {formatCompactEuro(benchmark.median)}
              </span>
            </div>

            <div className="min-w-0 text-center">
              <span
                className={`block truncate font-medium ${
                  wealth >= benchmark.top20
                    ? 'text-[#efe7dd]'
                    : 'text-neutral-400'
                }`}
              >
                Top 20 %
              </span>
              <span className="mt-0.5 block truncate text-[10px] text-neutral-500 tabular-nums">
                {formatCompactEuro(benchmark.top20)}
              </span>
            </div>

            <div className="min-w-0 text-right">
              <span
                className={`block truncate font-medium ${
                  wealth >= benchmark.top10
                    ? 'text-[#e0937a]'
                    : 'text-neutral-400'
                }`}
              >
                Top 10 %
              </span>
              <span className="mt-0.5 block truncate text-[10px] text-neutral-500 tabular-nums">
                {formatCompactEuro(benchmark.top10)}
              </span>
            </div>
          </div>
        </div>

        {/* Footer-Branding unten in der Karte */}
        <div className="flex flex-col items-center border-t border-white/10 pt-4 text-center">
          <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.3em] text-[#efe7dd]/85">
            WERTE FÜR GENERATIONEN
          </p>

          <div className="mt-3 flex w-full items-center justify-center gap-3 sm:gap-5">
            <span className="h-px w-8 sm:w-16 shrink-0 bg-[#e0937a]/55" />
            {!wordmarkError ? (
              <img
                src={WORDMARK_LOGO_SRC}
                alt="Yagibasan Capital"
                onError={() => setWordmarkError(true)}
                className="h-20 sm:h-24 w-auto max-w-[260px] sm:max-w-[340px] object-contain drop-shadow-[0_0_12px_rgba(224,147,122,0.25)]"
              />
            ) : (
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-[#e0937a]">
                  YAGIBASAN
                </span>
                <span className="mt-0.5 text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-[#e0937a]">
                  CAPITAL
                </span>
                <span className="mt-1.5 text-[7px] sm:text-[8px] font-medium uppercase tracking-[0.22em] text-[#e0937a]/80">
                  STRATEGIC FINANCIAL MENTORING
                </span>
              </div>
            )}
            <span className="h-px w-8 sm:w-16 shrink-0 bg-[#e0937a]/55" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const WealthRankTool: React.FC<WealthRankToolProps> = ({
  isOpen = true,
  onClose,
  onOpenAudit,
  onNavigateToBudget,
}) => {
  const [age, setAge] = useState<number>(24);
  const [wealthIndex, setWealthIndex] = useState<number>(
    DEFAULT_WEALTH_INDEX >= 0 ? DEFAULT_WEALTH_INDEX : 18
  );
  const [monthlySavings, setMonthlySavings] = useState<number>(300);
  const [isScreenshotMode, setIsScreenshotMode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [headerLogoError, setHeaderLogoError] = useState<boolean>(false);

  const copyTimerRef = useRef<number | null>(null);
  const mouseDownOnBackdropRef = useRef<boolean>(false);

  const wealth = WEALTH_STEPS[wealthIndex] ?? 4500;

  // Aktuelle smarte Schrittweite für Barrierefreiheit / Aria-Labels
  const currentStepSize =
    wealth < 25000 ? 250 : wealth < 100000 ? 1000 : 2500;

  // Aufräumen des Kopier-Timers beim Unmount
  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  // ESC-Taste schließt zuerst die Screenshot-Ansicht, danach das Modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isScreenshotMode) {
          setIsScreenshotMode(false);
        } else if (onClose) {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isScreenshotMode, onClose]);

  const benchmark = useMemo(() => getBenchmarkForAge(age), [age]);
  const standing = useMemo(
    () => calculateStanding(wealth, benchmark),
    [wealth, benchmark]
  );
  const nextMilestone = useMemo(
    () => getNextMilestone(wealth, benchmark),
    [wealth, benchmark]
  );
  const futureProjection = useMemo(
    () =>
      calculateFutureLever(wealth, nextMilestone.amount, monthlySavings, age),
    [wealth, nextMilestone.amount, monthlySavings, age]
  );

  if (!isOpen) {
    return null;
  }

  /**
   * Schließt das Modal ausschließlich bei einem echten Klick auf den dunklen Hintergrund
   * außerhalb der Dialog-Box (und niemals im Screenshot-Modus oder beim Ziehen eines Sliders).
   */
  const handleBackdropMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseDownOnBackdropRef.current =
      !isScreenshotMode && event.target === event.currentTarget;
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      !isScreenshotMode &&
      mouseDownOnBackdropRef.current &&
      event.target === event.currentTarget
    ) {
      onClose?.();
    }
    mouseDownOnBackdropRef.current = false;
  };

  const stepWealthByIndex = (deltaIndex: number) => {
    setWealthIndex((prev) =>
      Math.min(MAX_WEALTH_INDEX, Math.max(0, prev + deltaIndex))
    );
  };

  const selectQuickWealth = (amount: number) => {
    setWealthIndex(findClosestWealthIndex(amount));
  };

  const handleCopyResult = async () => {
    const shareText = `Vermögens-Ranking DE (ohne Erbe): Mit ${age} Jahren und ${formatEuro(
      wealth
    )} aktuellem Vermögen bin ich weiter als ${
      standing.percentile
    } % meiner Altersgruppe (${
      standing.tierTitle
    }). Vermögens-Check auf yagibasan-capital.de`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareText;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setCopied(true);
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      // Stilles Fehlerhandling, falls Zwischenablage im Browser blockiert ist
      setCopied(false);
    }
  };

  const isAuditEligible = wealth >= 15000;
  const ageFillPercent = ((age - 18) / (45 - 18)) * 100;
  const wealthFillPercent = (wealthIndex / MAX_WEALTH_INDEX) * 100;
  const savingsFillPercent = ((monthlySavings - 50) / (2000 - 50)) * 100;

  return (
    <div
      onMouseDown={handleBackdropMouseDown}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#0a0a0a]/90 p-3 sm:p-6 backdrop-blur-md font-['Montserrat',sans-serif] text-[#efe7dd]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wealth-rank-title"
    >
      {/* Lokale Stil-Definitionen für die Website-Serifenschrift & Kupfer-Slider */}
      <style>{`
        .font-serif-elegant {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .yagibasan-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
        }

        .yagibasan-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #c07a63 0%, #e0937a 100%);
          border: 2px solid #efe7dd;
          box-shadow: 0 2px 10px rgba(224, 147, 122, 0.45);
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .yagibasan-slider::-webkit-slider-thumb:hover {
          transform: scale(1.08);
          background: #efe7dd;
        }

        .yagibasan-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 9999px;
          background: linear-gradient(135deg, #c07a63 0%, #e0937a 100%);
          border: 2px solid #efe7dd;
          box-shadow: 0 2px 10px rgba(224, 147, 122, 0.45);
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease;
        }
      `}</style>

      {/* Screenshot-Modus: Zentriert ausschließlich die Ergebnis-Karte für Smartphone-Screenshots */}
      {isScreenshotMode ? (
        <div
          onClick={(e) => e.stopPropagation()}
          className="my-auto flex w-full max-w-md flex-col items-center justify-center py-4"
        >
          <div className="mb-4 flex items-center gap-2 rounded-full border border-[#e0937a]/30 bg-[#1a1a1a]/90 px-3.5 py-1.5 text-xs text-[#efe7dd]/80">
            <Camera className="h-3.5 w-3.5 text-[#e0937a]" />
            <span>Bereit für deinen Handy-Screenshot</span>
          </div>

          <WealthResultCard
            age={age}
            wealth={wealth}
            benchmark={benchmark}
            standing={standing}
            isScreenshotMode
          />

          <div className="mt-6 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => setIsScreenshotMode(false)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#1a1a1a] px-5 py-3 text-xs sm:text-sm font-medium text-[#efe7dd] transition hover:border-[#e0937a]/60 hover:bg-[#222222]"
            >
              <ArrowLeft className="h-4 w-4 text-[#e0937a]" />
              <span>Zurück zur Bearbeitung</span>
            </button>
            <span className="text-[11px] text-neutral-500">
              Oder ESC-Taste drücken zum Zurückkehren
            </span>
          </div>
        </div>
      ) : (
        /* Reguläre Hauptansicht im Dark-Luxury-Container */
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        >
          {/* Top-Akzentlinie */}
          <div className="h-1 w-full bg-gradient-to-r from-[#c07a63] via-[#e0937a] to-[#c07a63]" />

          {/* 1. Header */}
          <div className="relative border-b border-white/10 bg-[#1a1a1a]/65 px-5 py-5 sm:px-8 sm:py-6">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Vermögens-Check schließen"
                className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/80 text-neutral-400 transition hover:border-[#e0937a]/50 hover:text-[#efe7dd]"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pr-11">
              {!headerLogoError ? (
                <img
                  src={LOGO_SRC}
                  alt="Yagibasan Capital Logo"
                  onError={() => setHeaderLogoError(true)}
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(224,147,122,0.22)]"
                />
              ) : (
                <span className="font-serif-elegant text-base sm:text-lg font-semibold tracking-wider text-[#efe7dd]">
                  YAGIBASAN <span className="text-[#e0937a]">CAPITAL</span>
                </span>
              )}
              <span className="hidden sm:inline-block h-4 w-px bg-white/15" />
              <span className="inline-flex items-center rounded-full border border-[#e0937a]/35 bg-[#e0937a]/10 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold tracking-[0.14em] text-[#e0937a]">
                Vermögens-Check
              </span>
            </div>

            <h2
              id="wealth-rank-title"
              className="mt-2.5 pr-10 font-serif-elegant text-2xl sm:text-3xl font-semibold tracking-tight text-[#efe7dd]"
            >
              Wo stehst du in deinem Alter?
            </h2>
            <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-neutral-400">
              Vergleiche dein aktuelles Vermögen (ohne Erbe &amp; Schenkungen)
              mit deiner Altersgruppe in Deutschland.
            </p>
          </div>

          <div className="space-y-6 p-5 sm:p-8">
            {/* 2. Eingabe-Bereich */}
            <div className="grid grid-cols-1 gap-5 rounded-xl border border-white/10 bg-[#1a1a1a]/55 p-4 sm:p-5">
              {/* Regler: Alter */}
              <div>
                <div className="mb-2.5 flex items-center justify-between gap-2">
                  <label
                    htmlFor="age-slider"
                    className="text-xs sm:text-sm font-medium text-neutral-200"
                  >
                    Dein aktuelles Alter
                  </label>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg sm:text-xl font-bold text-[#efe7dd] tabular-nums">
                      {age} Jahre
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      (Gruppe {benchmark.label})
                    </span>
                  </div>
                </div>
                <input
                  id="age-slider"
                  type="range"
                  min={18}
                  max={45}
                  step={1}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="yagibasan-slider"
                  style={{
                    background: `linear-gradient(to right, #e0937a 0%, #e0937a ${ageFillPercent}%, #0a0a0a ${ageFillPercent}%, #0a0a0a 100%)`,
                  }}
                />
                <div className="mt-1.5 flex justify-between text-[11px] text-neutral-500">
                  <span>18 Jahre</span>
                  <span>30 Jahre</span>
                  <span>45 Jahre</span>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              {/* Regler, Feinjustierung & Schnellwahl-Chips: Aktuelles Vermögen */}
              <div>
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                  <label
                    htmlFor="wealth-slider"
                    className="text-xs sm:text-sm font-medium text-neutral-200"
                  >
                    Aktuelles Vermögen
                  </label>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => stepWealthByIndex(-1)}
                      disabled={wealthIndex <= 0}
                      aria-label={`Vermögen verringern (Schrittweite ${formatEuro(
                        currentStepSize
                      )})`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0a0a0a] text-neutral-300 transition hover:border-[#e0937a]/60 hover:text-[#efe7dd] disabled:opacity-40"
                    >
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-[112px] text-center text-lg sm:text-xl font-bold text-[#e0937a] tabular-nums">
                      {formatEuro(wealth)}
                    </span>
                    <button
                      type="button"
                      onClick={() => stepWealthByIndex(1)}
                      disabled={wealthIndex >= MAX_WEALTH_INDEX}
                      aria-label={`Vermögen erhöhen (Schrittweite ${formatEuro(
                        currentStepSize
                      )})`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-[#0a0a0a] text-neutral-300 transition hover:border-[#e0937a]/60 hover:text-[#efe7dd] disabled:opacity-40"
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <input
                  id="wealth-slider"
                  type="range"
                  min={0}
                  max={MAX_WEALTH_INDEX}
                  step={1}
                  value={wealthIndex}
                  onChange={(e) => setWealthIndex(Number(e.target.value))}
                  aria-valuetext={formatEuro(wealth)}
                  className="yagibasan-slider"
                  style={{
                    background: `linear-gradient(to right, #e0937a 0%, #e0937a ${wealthFillPercent}%, #0a0a0a ${wealthFillPercent}%, #0a0a0a 100%)`,
                  }}
                />
                <div className="mt-1.5 flex justify-between text-[11px] text-neutral-500">
                  <span>0 €</span>
                  <span>25.000 €</span>
                  <span>100.000 €</span>
                  <span>300.000 €</span>
                </div>

                {/* 4 kompakte Schnellwahl-Chips für schnelle Smartphone-Bedienung */}
                <div className="mt-3 grid grid-cols-4 gap-1.5 sm:gap-2">
                  {QUICK_WEALTH_CHIPS.map((chipAmount) => {
                    const isActive = wealth === chipAmount;
                    return (
                      <button
                        key={chipAmount}
                        type="button"
                        onClick={() => selectQuickWealth(chipAmount)}
                        className={`rounded-lg border px-2 py-2 text-[11px] sm:text-xs font-medium tabular-nums transition ${
                          isActive
                            ? 'border-[#e0937a] bg-[#e0937a]/15 text-[#efe7dd]'
                            : 'border-white/10 bg-[#0a0a0a]/80 text-neutral-300 hover:border-[#e0937a]/50 hover:text-[#efe7dd]'
                        }`}
                      >
                        {formatEuro(chipAmount)}
                      </button>
                    );
                  })}
                </div>

                <p className="mt-3 text-[11px] sm:text-xs leading-relaxed text-neutral-400">
                  Alles, was du dir selbst erarbeitet hast minus Schulden – ohne
                  Erbe oder Schenkungen.
                </p>
              </div>
            </div>

            {/* 3. Ergebnis-Karte (identische Teilkomponente für Normal- & Screenshot-Modus) */}
            <WealthResultCard
              age={age}
              wealth={wealth}
              benchmark={benchmark}
              standing={standing}
            />

            {/* 4. Zukunfts-Hebel (Sparrate 50 € bis 2.000 €) */}
            <div className="rounded-xl border border-white/10 bg-[#1a1a1a]/55 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#e0937a]">
                <TrendingUp className="h-4 w-4" />
                <span>Dein Zukunfts-Hebel</span>
              </div>

              <div className="mt-3">
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="savings-slider"
                    className="text-xs sm:text-sm font-medium text-neutral-200"
                  >
                    Monatliche Sparrate
                  </label>
                  <span className="text-base sm:text-lg font-bold text-[#efe7dd] tabular-nums">
                    {formatEuro(monthlySavings)}{' '}
                    <span className="text-xs font-normal text-neutral-400">
                      / Monat
                    </span>
                  </span>
                </div>

                <input
                  id="savings-slider"
                  type="range"
                  min={50}
                  max={2000}
                  step={25}
                  value={monthlySavings}
                  onChange={(e) => setMonthlySavings(Number(e.target.value))}
                  className="yagibasan-slider"
                  style={{
                    background: `linear-gradient(to right, #e0937a 0%, #e0937a ${savingsFillPercent}%, #0a0a0a ${savingsFillPercent}%, #0a0a0a 100%)`,
                  }}
                />
                <div className="mt-1.5 flex justify-between text-[11px] text-neutral-500">
                  <span>50 €</span>
                  <span>1.000 €</span>
                  <span>2.000 €</span>
                </div>
              </div>

              {/* Dynamische Meilenstein-Berechnung (7 % p.a. ETF vs. 0 % Girokonto) */}
              <div className="mt-4 rounded-xl border border-[#e0937a]/25 bg-[#0a0a0a]/85 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                  <span className="text-xs text-neutral-400">
                    Nächster Meilenstein:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#efe7dd] tabular-nums">
                    {nextMilestone.label} ({formatEuro(nextMilestone.amount)})
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {/* Szenario 1: Weltweiter Aktien-ETF (7 % p.a.) */}
                  <div className="rounded-lg border border-[#e0937a]/30 bg-[#1a1a1a]/75 p-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#e0937a]">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" />
                      <span>Weltweiter Aktien-ETF (7 % p.a.)</span>
                    </div>
                    <p className="mt-1.5 text-base sm:text-lg font-bold text-[#efe7dd] tabular-nums">
                      in {formatYears(futureProjection.yearsInvested)}
                    </p>
                    <p className="text-xs text-neutral-400">
                      erreicht mit ca.{' '}
                      <span className="font-semibold text-neutral-200 tabular-nums">
                        {futureProjection.targetAge} Jahren
                      </span>
                    </p>
                  </div>

                  {/* Szenario 2: Unverzinstes Girokonto (0 %) & Zeitersparnis */}
                  <div className="rounded-lg border border-white/10 bg-[#111111] p-3">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-400">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      <span>Girokonto (0 % Zinsen)</span>
                    </div>
                    <p className="mt-1.5 text-base sm:text-lg font-semibold text-neutral-300 tabular-nums">
                      {formatYears(futureProjection.yearsCash)}
                    </p>
                    <p className="text-xs text-[#e0937a]">
                      {futureProjection.monthsSaved >= 1
                        ? `Du sparst ${formatYears(
                            futureProjection.yearsSaved
                          )} durch Investieren`
                        : 'Kurze Distanz bis zum Ziel'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Aktionen unten */}
            <div className="flex flex-col gap-3 pt-1">
              {/* Haupt-CTA für Leads + ruhiger Zweitlink für die jeweils andere Option */}
              <div className="flex flex-col items-center gap-1.5">
                {isAuditEligible ? (
                  <>
                    <button
                      type="button"
                      onClick={() => onOpenAudit?.()}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c07a63] to-[#e0937a] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#0a0a0a] shadow-[0_8px_25px_rgba(224,147,122,0.3)] transition hover:from-[#efe7dd] hover:to-[#efe7dd]"
                    >
                      <span>1:1 Mentoring-Audit anfragen</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigateToBudget?.()}
                      className="py-1.5 text-center text-xs text-neutral-400 underline-offset-4 transition hover:text-[#e0937a] hover:underline"
                    >
                      Lieber zuerst den kostenlosen Budgetplaner ansehen?
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => onNavigateToBudget?.()}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c07a63] to-[#e0937a] px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#0a0a0a] shadow-[0_8px_25px_rgba(224,147,122,0.3)] transition hover:from-[#efe7dd] hover:to-[#efe7dd]"
                    >
                      <span>Kostenlosen Budgetplaner sichern</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpenAudit?.()}
                      className="py-1.5 text-center text-xs text-neutral-400 underline-offset-4 transition hover:text-[#e0937a] hover:underline"
                    >
                      Fragen zum 1:1 Mentoring?
                    </button>
                  </>
                )}
              </div>

              {/* Sekundäre Aktionen: Screenshot-Ansicht (nur mobil) & Ergebnis kopieren */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setIsScreenshotMode(true)}
                  className="inline-flex md:hidden items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#1a1a1a] px-4 py-3 text-xs sm:text-sm font-medium text-[#efe7dd] transition hover:border-[#e0937a]/60 hover:bg-[#222222]"
                >
                  <Camera className="h-4 w-4 text-[#e0937a]" />
                  <span>Screenshot-Ansicht</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyResult}
                  className={`inline-flex md:col-span-2 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs sm:text-sm font-medium transition ${
                    copied
                      ? 'border-[#e0937a]/70 bg-[#e0937a]/15 text-[#efe7dd]'
                      : 'border-white/15 bg-[#1a1a1a] text-neutral-300 hover:border-[#e0937a]/60 hover:text-[#efe7dd]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#e0937a]" />
                      <span>Ergebnis kopiert</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-[#e0937a]" />
                      <span>Ergebnis kopieren</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WealthRankTool;

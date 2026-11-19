import {
  type MotionValue,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect, useId, useRef, useState } from 'react';

interface FeatureItem {
  number: string;
  title: string;
  description: string;
  footerLabel: string;
  footerValue: string;
}

const features: FeatureItem[] = [
  {
    number: '01',
    title: 'Kamera AI: Foto & Catat',
    description:
      'Foto struk belanja, papan tulis kuliah, atau halaman buku. Teks dan nominal langsung terekstrak rapi otomatis.',
    footerLabel: 'Waktu proses',
    footerValue: '< 2 Detik',
  },
  {
    number: '02',
    title: 'Rekam Suara Jadi Teks',
    description:
      'Rekam ide atau refleksi saat di jalan. Ubah ucapan santai berbahasa Indonesia menjadi catatan dan pengingat rapi.',
    footerLabel: 'Akurasi',
    footerValue: 'Bahasa Kasual',
  },
  {
    number: '03',
    title: 'Dompet Operasional',
    description:
      'Pantau sisa kas tersedia, uang masuk, dan belanja harian dalam Rupiah agar kondisi akhir bulan selalu terkendali.',
    footerLabel: 'Ringkasan',
    footerValue: 'Real-time IDR',
  },
  {
    number: '04',
    title: 'Checklist Harian & Target',
    description:
      'Pecah resolusi besar menjadi kebiasaan harian yang ringan dan pantau grafik konsistensi mingguan Anda.',
    footerLabel: 'Pelacakan',
    footerValue: 'Harian & Mingguan',
  },
  {
    number: '05',
    title: 'Agenda & Pengingat',
    description:
      'Jadwal kuliah, rapat tim, hingga tenggat tugas tersusun jelas lengkap dengan pengingat tepat waktu.',
    footerLabel: 'Sinkronisasi',
    footerValue: 'Lintas Perangkat',
  },
  {
    number: '06',
    title: 'Pencarian Terpadu Instan',
    description:
      'Temukan kembali catatan suara, riwayat transaksi, atau jadwal agenda lama hanya dengan satu kata kunci.',
    footerLabel: 'Cakupan',
    footerValue: 'Semua Modul',
  },
];

function KameraAiIcon() {
  const uid = useId();
  const bodyGrad = `feat01-body-${uid}`;
  const goldGrad = `feat01-gold-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        <linearGradient id={bodyGrad} x1="3" y1="6" x2="21" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.36" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id={goldGrad} x1="16" y1="2" x2="22" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Camera housing */}
      <path
        d="M6.8 6.5L8.2 4.6C8.5 4.2 9.0 4 9.5 4H14.5C15.0 4 15.5 4.2 15.8 4.6L17.2 6.5H19.4C20.6 6.5 21.5 7.4 21.5 8.6V17.4C21.5 18.6 20.6 19.5 19.4 19.5H4.6C3.4 19.5 2.5 18.6 2.5 17.4V8.6C2.5 7.4 3.4 6.5 4.6 6.5H6.8Z"
        fill={`url(#${bodyGrad})`}
        stroke="#34d399"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Lens ring */}
      <circle cx="12" cy="13" r="3.6" stroke="#6ee7b7" strokeWidth="1.6" />
      <circle cx="12" cy="13" r="1.5" fill="#a7f3d0" />
      {/* Golden AI sparkle */}
      <path
        d="M19.2 2.2L19.8 3.9L21.5 4.5L19.8 5.1L19.2 6.8L18.6 5.1L16.9 4.5L18.6 3.9L19.2 2.2Z"
        fill={`url(#${goldGrad})`}
      />
    </svg>
  );
}

function RekamSuaraIcon() {
  const uid = useId();
  const micGrad = `feat02-mic-${uid}`;
  const goldGrad = `feat02-gold-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        <linearGradient id={micGrad} x1="8" y1="3" x2="16" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id={goldGrad} x1="17" y1="4" x2="21" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Mic capsule */}
      <rect
        x="8.6"
        y="3.2"
        width="6.8"
        height="10.4"
        rx="3.4"
        fill={`url(#${micGrad})`}
        stroke="#34d399"
        strokeWidth="1.5"
      />
      {/* Mic cradle */}
      <path
        d="M5.6 10.6C5.6 14.1 8.5 16.8 12 16.8C15.5 16.8 18.4 14.1 18.4 10.6"
        stroke="#2dd4bf"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M12 16.8V20.5" stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8.8 20.5H15.2" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" />
      {/* Golden sound-to-text wave bars */}
      <path d="M19.8 6.5V9.8" stroke={`url(#${goldGrad})`} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4.2 7.2V9.2" stroke="#fde047" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function DompetIcon() {
  const uid = useId();
  const walletGrad = `feat03-wallet-${uid}`;
  const coinGrad = `feat03-coin-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        <linearGradient id={walletGrad} x1="3" y1="6" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.36" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id={coinGrad} x1="14" y1="2" x2="20" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Golden Rupiah coin peeking out */}
      <circle cx="15.8" cy="5.8" r="3.1" fill={`url(#${coinGrad})`} />
      {/* Wallet body */}
      <rect
        x="2.8"
        y="6.8"
        width="17.2"
        height="13.4"
        rx="3.2"
        fill={`url(#${walletGrad})`}
        stroke="#34d399"
        strokeWidth="1.5"
      />
      {/* Wallet clasp */}
      <rect
        x="14.5"
        y="11.2"
        width="6.5"
        height="4.6"
        rx="1.6"
        fill="#0b1511"
        stroke="#6ee7b7"
        strokeWidth="1.4"
      />
      <circle cx="17.3" cy="13.5" r="1.0" fill="#fde047" />
    </svg>
  );
}

function ChecklistTargetIcon() {
  const uid = useId();
  const cardGrad = `feat04-card-${uid}`;
  const goldGrad = `feat04-gold-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        <linearGradient id={cardGrad} x1="4" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id={goldGrad} x1="16" y1="2" x2="21" y2="9" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Checklist board */}
      <rect
        x="3.5"
        y="4.5"
        width="14.5"
        height="16.5"
        rx="3.2"
        fill={`url(#${cardGrad})`}
        stroke="#34d399"
        strokeWidth="1.5"
      />
      {/* Top clipboard clip */}
      <rect x="7.8" y="2.8" width="5.9" height="3.2" rx="1.4" fill="#10b981" />
      {/* Completed check row 1 */}
      <path
        d="M6.8 10.7L8.2 12.1L10.8 9.4"
        stroke="#6ee7b7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.6 10.8H15.4" stroke="#a7f3d0" strokeWidth="1.6" strokeLinecap="round" />
      {/* Completed check row 2 */}
      <path
        d="M6.8 15.5L8.2 16.9L10.8 14.2"
        stroke="#6ee7b7"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.6 15.6H15.4" stroke="#a7f3d0" strokeWidth="1.6" strokeLinecap="round" />
      {/* Target achievement golden spark */}
      <path
        d="M19.2 3.2L19.9 5.0L21.8 5.7L19.9 6.4L19.2 8.2L18.5 6.4L16.6 5.7L18.5 5.0L19.2 3.2Z"
        fill={`url(#${goldGrad})`}
      />
    </svg>
  );
}

function AgendaReminderIcon() {
  const uid = useId();
  const calGrad = `feat05-cal-${uid}`;
  const bellGrad = `feat05-bell-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        <linearGradient id={calGrad} x1="3" y1="4" x2="18" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id={bellGrad} x1="14" y1="12" x2="21" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Calendar body */}
      <rect
        x="3"
        y="4.8"
        width="15.2"
        height="14.7"
        rx="3.2"
        fill={`url(#${calGrad})`}
        stroke="#2dd4bf"
        strokeWidth="1.5"
      />
      {/* Calendar top header bar */}
      <path d="M3.5 9.2H17.7" stroke="#2dd4bf" strokeWidth="1.4" />
      {/* Calendar rings */}
      <path d="M7.2 3V6.2" stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 3V6.2" stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" />
      {/* Calendar grid dots */}
      <circle cx="7.2" cy="12.8" r="1.1" fill="#a7f3d0" />
      <circle cx="10.6" cy="12.8" r="1.1" fill="#6ee7b7" />
      <circle cx="7.2" cy="16.0" r="1.1" fill="#6ee7b7" />
      {/* Glowing golden reminder bell badge */}
      <circle cx="17.5" cy="16.8" r="4.8" fill="#08130f" />
      <path
        d="M17.5 13.1C15.9 13.1 14.9 14.2 14.9 15.7V17.4L14.0 18.4V18.9H21.0V18.4L20.1 17.4V15.7C20.1 14.2 19.1 13.1 17.5 13.1Z"
        fill={`url(#${bellGrad})`}
      />
      <path
        d="M16.5 19.6C16.7 20.1 17.1 20.4 17.5 20.4C17.9 20.4 18.3 20.1 18.5 19.6"
        stroke="#fde047"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PencarianInstanIcon() {
  const uid = useId();
  const lensGrad = `feat06-lens-${uid}`;
  const boltGrad = `feat06-bolt-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <defs>
        <linearGradient id={lensGrad} x1="4" y1="4" x2="17" y2="17" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#0d9488" stopOpacity="0.14" />
        </linearGradient>
        <linearGradient id={boltGrad} x1="9" y1="7" x2="13" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Magnifier glass */}
      <circle
        cx="10.8"
        cy="10.8"
        r="6.6"
        fill={`url(#${lensGrad})`}
        stroke="#34d399"
        strokeWidth="1.6"
      />
      {/* Instant golden bolt inside lens */}
      <path
        d="M11.6 7.3L8.8 11.1H11.1L10.3 14.3L13.1 10.5H10.8L11.6 7.3Z"
        fill={`url(#${boltGrad})`}
      />
      {/* Handle */}
      <path
        d="M15.8 15.8L20.2 20.2"
        stroke="#6ee7b7"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

function renderFeatureIcon(number: string) {
  switch (number) {
    case '01':
      return <KameraAiIcon />;
    case '02':
      return <RekamSuaraIcon />;
    case '03':
      return <DompetIcon />;
    case '04':
      return <ChecklistTargetIcon />;
    case '05':
      return <AgendaReminderIcon />;
    case '06':
    default:
      return <PencarianInstanIcon />;
  }
}

const stackLayerClasses = [
  'z-[1]',
  'z-[2]',
  'z-[3]',
  'z-[4]',
  'z-[5]',
  'z-[6]',
];

function MobileStackCard({
  item,
  index,
  total,
  progress,
  shouldReduceMotion,
}: {
  item: FeatureItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}) {
  const start = Math.min(index * 0.16, 0.85);
  const targetScale = 1 - (total - 1 - index) * 0.022;
  const targetOpacity = 0.78 + index * 0.044;

  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const opacity = useTransform(progress, [start, 1], [1, targetOpacity]);

  return (
    <div
      style={{ top: `${82 + index * 16}px` }}
      className={`sticky ${stackLayerClasses[index] ?? 'z-[1]'}`}
    >
      <motion.article
        style={
          shouldReduceMotion
            ? undefined
            : {
                scale,
                opacity,
                transformOrigin: 'top center',
              }
        }
        className="group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-[#10241d] via-[#0b1511] to-[#08100d] px-5 pt-5 pb-5 shadow-[0_-14px_34px_rgba(0,0,0,0.82)] transition-colors duration-200"
      >
        {/* Top specular highlight for clean stacked deck separation */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/65 to-transparent"
        />
        {/* Corner emerald aura behind icon */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/12 blur-2xl"
        />
        {/* Subtle watermark index numeral */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 bottom-11 select-none font-display text-5xl font-semibold leading-none text-white/[0.035]"
        >
          {item.number}
        </span>

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-400 font-mono-tabular">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/85" />
              {item.number}
            </span>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/40 bg-gradient-to-br from-emerald-400/25 via-teal-500/15 to-amber-400/10 ring-1 ring-inset ring-white/10 shadow-[0_0_22px_-4px_rgba(16,185,129,0.45)]">
              {renderFeatureIcon(item.number)}
            </div>
          </div>

          <h3 className="mt-3 text-base font-bold tracking-tight text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300/90">{item.description}</p>
        </div>

        <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/[0.09] pt-3 text-xs">
          <span className="text-zinc-400">{item.footerLabel}</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300 font-mono-tabular">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            {item.footerValue}
          </span>
        </div>
      </motion.article>
    </div>
  );
}

function FeatureCard({ item }: { item: FeatureItem }) {

  return (
    <article className="group relative flex min-h-[304px] w-[304px] sm:w-[352px] shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#0f221b] via-[#0b1511] to-[#08100d] p-6 sm:p-7 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.75)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/50 hover:shadow-[0_20px_42px_-14px_rgba(16,185,129,0.3)]">
      {/* Top specular highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      />
      {/* Corner emerald aura behind icon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-500/12 blur-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400/25"
      />
      {/* Subtle watermark index numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-5 bottom-12 select-none font-display text-6xl font-semibold leading-none text-white/[0.03] transition-colors duration-300 group-hover:text-emerald-400/[0.08]"
      >
        {item.number}
      </span>

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-emerald-400 font-mono-tabular">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            {item.number}
          </span>
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/40 bg-gradient-to-br from-emerald-400/25 via-teal-500/15 to-amber-400/10 ring-1 ring-inset ring-white/10 shadow-[0_0_22px_-4px_rgba(16,185,129,0.45)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:border-emerald-300/65 group-hover:shadow-[0_0_28px_-2px_rgba(16,185,129,0.6)]">
            {renderFeatureIcon(item.number)}
          </div>
        </div>

        <h3 className="mt-5 text-lg font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-emerald-50">
          {item.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-300/90">{item.description}</p>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-between border-t border-white/[0.09] pt-4 text-xs">
        <span className="text-zinc-400">{item.footerLabel}</span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300 font-mono-tabular">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
          {item.footerValue}
        </span>
      </div>
    </article>
  );
}

export default function FeaturesBento() {
  const shouldReduceMotion = useReducedMotion();
  const mobileStackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mobileStackRef,
    offset: ['start 82px', 'end 380px'],
  });

  return (
    <section id="fitur" className="relative overflow-x-clip py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl md:whitespace-nowrap"
          >
            Enam fitur inti untuk produktivitas harian.
          </motion.h2>
        </motion.div>
      </div>

      {/* Mobile & Small Tablet: Sticky scroll-driven stacking deck */}
      <div
        ref={mobileStackRef}
        className="mx-auto mt-10 flex max-w-xl flex-col gap-6 px-4 pb-6 sm:px-6 md:hidden"
      >
        {features.map((item, idx) => (
          <MobileStackCard
            key={`mobile-${item.number}`}
            item={item}
            index={idx}
            total={features.length}
            progress={scrollYProgress}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>

      {/* Desktop: Smooth Auto-Scroll + Manual Drag/Swipe Feature Marquee */}
      <FeatureMarqueeTrack shouldReduceMotion={shouldReduceMotion} />
    </section>
  );
}

function FeatureMarqueeTrack({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isMouseDraggingRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const isProgrammaticRef = useRef(false);
  const [dragging, setDragging] = useState(false);

  const scheduleResume = (delayMs = 850) => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = window.setTimeout(() => {
      isUserScrollingRef.current = false;
    }, delayMs);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || shouldReduceMotion) return;

    let rafId = 0;
    let lastTime = performance.now();
    const speedPxPerSec = 42;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const halfWidth = el.scrollWidth / 2;
      if (halfWidth > 0 && !isMouseDraggingRef.current && !isUserScrollingRef.current) {
        posRef.current += speedPxPerSec * dt;
        if (posRef.current >= halfWidth) {
          posRef.current -= halfWidth;
        }
        isProgrammaticRef.current = true;
        el.scrollLeft = posRef.current;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, [shouldReduceMotion]);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;

    if (isProgrammaticRef.current) {
      isProgrammaticRef.current = false;
      return;
    }

    const halfWidth = el.scrollWidth / 2;
    let nextPos = el.scrollLeft;

    if (halfWidth > 0) {
      if (nextPos >= halfWidth) {
        nextPos -= halfWidth;
        isProgrammaticRef.current = true;
        el.scrollLeft = nextPos;
      } else if (nextPos <= 1 && isMouseDraggingRef.current) {
        nextPos += halfWidth;
        isProgrammaticRef.current = true;
        el.scrollLeft = nextPos;
      }
    }

    posRef.current = nextPos;

    if (!isMouseDraggingRef.current) {
      isUserScrollingRef.current = true;
      scheduleResume(950);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    if (e.pointerType === 'mouse' && e.button === 0) {
      isMouseDraggingRef.current = true;
      isUserScrollingRef.current = true;
      setDragging(true);
      dragStartXRef.current = e.clientX;
      dragStartScrollRef.current = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    } else if (e.pointerType === 'touch') {
      isUserScrollingRef.current = true;
      posRef.current = el.scrollLeft;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isMouseDraggingRef.current) return;
    const el = scrollerRef.current;
    if (!el) return;

    const deltaX = e.clientX - dragStartXRef.current;
    const halfWidth = el.scrollWidth / 2;
    let target = dragStartScrollRef.current - deltaX;

    if (halfWidth > 0) {
      if (target < 0) {
        target += halfWidth;
        dragStartScrollRef.current += halfWidth;
      } else if (target >= halfWidth) {
        target -= halfWidth;
        dragStartScrollRef.current -= halfWidth;
      }
    }

    posRef.current = target;
    isProgrammaticRef.current = true;
    el.scrollLeft = target;
  };

  const handlePointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMouseDraggingRef.current) {
      isMouseDraggingRef.current = false;
      setDragging(false);
      if (scrollerRef.current?.hasPointerCapture(e.pointerId)) {
        scrollerRef.current.releasePointerCapture(e.pointerId);
      }
      scheduleResume(850);
    } else if (e.pointerType === 'touch') {
      scheduleResume(1000);
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-10 hidden w-full md:block"
    >
      {/* Left & Right subtle edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-24 bg-gradient-to-r from-[#060b09] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-24 bg-gradient-to-l from-[#060b09] to-transparent"
      />

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        aria-label="Daftar fitur utama Ascend Journal, dapat digeser secara manual"
        className={`scrollbar-none flex overflow-x-auto py-3 select-none ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <div className="flex w-max gap-5 px-2.5">
          {features.map((item) => (
            <FeatureCard key={item.number} item={item} />
          ))}
          <div aria-hidden="true" className="flex gap-5">
            {features.map((item) => (
              <FeatureCard key={`dup-${item.number}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

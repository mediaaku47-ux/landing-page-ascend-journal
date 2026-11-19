import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef, useState } from 'react';

interface StepItem {
  number: string;
  title: string;
  points: string[];
  detail: string;
  overlayPosition: string;
}

const steps: StepItem[] = [
  {
    number: '01',
    title: 'Tangkap momen dalam hitungan detik',
    points: [
      'Rekam suara cepat saat di perjalanan',
      'Foto struk atau papan tulis via Kamera AI',
      'Tulis catatan singkat dari halaman utama',
    ],
    detail: 'Tanpa form rumit atau menu bertingkat.',
    overlayPosition: 'bg-[radial-gradient(circle_at_90%_10%,rgba(16,185,129,0.16),transparent_60%)]',
  },
  {
    number: '02',
    title: 'Tersusun otomatis sesuai konteks',
    points: [
      'Nominal struk langsung masuk Dompet Operasional',
      'Audio otomatis tertranskripsi jadi catatan rapi',
      'Tugas & jadwal tersimpan ke Checklist Harian',
    ],
    detail: 'Rapi secara otomatis sejak hari pertama.',
    overlayPosition: 'bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_62%)]',
  },
  {
    number: '03',
    title: 'Pantau perkembangan dan rayakan progres',
    points: [
      'Cek tingkat konsistensi kebiasaan harian',
      'Pantau sisa kas aman & arus belanja harian',
      'Lihat grafik pencapaian target setiap minggu',
    ],
    detail: 'Kemajuan kecil harian membentuk kemenangan besar.',
    overlayPosition: 'bg-[radial-gradient(circle_at_15%_95%,rgba(16,185,129,0.16),transparent_60%)]',
  },
];

function StepCard({
  step,
  index,
  isInView,
  shouldReduceMotion,
}: {
  step: StepItem;
  index: number;
  isInView: boolean;
  shouldReduceMotion: boolean | null;
}) {
  const [settled, setSettled] = useState(false);

  const animateState = shouldReduceMotion
    ? { opacity: 1, y: 0 }
    : !isInView
      ? { opacity: 0, y: 40 }
      : settled
        ? { opacity: 1, y: [0, -6, 0] }
        : { opacity: 1, y: 0 };

  const transitionConfig = shouldReduceMotion
    ? { duration: 0 }
    : settled
      ? {
          y: {
            duration: 4.2 + index * 0.45,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          },
        }
      : {
          duration: 0.75,
          delay: index * 0.22,
          ease: [0.16, 1, 0.3, 1] as const,
        };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      animate={animateState}
      transition={transitionConfig}
      onAnimationComplete={() => {
        if (isInView && !settled && !shouldReduceMotion) {
          setSettled(true);
        }
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b1511] p-6 sm:p-8 transition-colors duration-200 hover:border-emerald-500/35"
    >
      {/* Subtle glass & radial emerald overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.045] via-transparent to-emerald-950/35"
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 opacity-75 transition-opacity duration-200 group-hover:opacity-100 ${step.overlayPosition}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent opacity-60 transition-opacity duration-200 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <span className="text-2xl font-bold text-emerald-400 font-mono-tabular">
          {step.number}
        </span>
        <motion.h3
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.75, delay: 0.2 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-lg font-bold tracking-tight text-white"
        >
          {step.title}
        </motion.h3>
        <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-zinc-300 marker:text-emerald-400">
          {step.points.map((point, pointIdx) => (
            <motion.li
              key={point}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={
                shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
              }
              transition={{
                duration: 0.7,
                delay: 0.3 + index * 0.2 + pointIdx * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.p
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{
          duration: 0.75,
          delay: 0.52 + index * 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 mt-6 border-t border-white/[0.07] pt-4 text-xs font-medium text-zinc-300"
      >
        {step.detail}
      </motion.p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const shouldReduceMotion = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <section
      id="cara-kerja"
      className="overflow-x-hidden border-y border-white/[0.07] bg-[#08100d] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-kicker text-sm font-medium tracking-wide text-emerald-400"
          >
            Cara Kerja · 3 Langkah Sederhana
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl [text-wrap:balance]"
          >
            Mulai rapi dalam tiga langkah.
          </motion.h2>
        </div>

        <div ref={gridRef} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isInView={isInView}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

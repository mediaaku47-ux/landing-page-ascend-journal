import { ArrowRight, Play, Star, Users } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import FaqSection from './components/FaqSection';
import FeaturesBento from './components/FeaturesBento';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import ShowcaseGallery from './components/ShowcaseGallery';

const CHECKOUT_URL = 'https://lynk.id/creatormedia/446jqyj4lz2e/checkout';

function useCountUp(target: number, durationMs = 1800, decimals = 0, shouldStart = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (progress >= 1) {
        setValue(target);
        return;
      }

      if (decimals > 0) {
        const factor = Math.pow(10, decimals);
        setValue(Math.round(current * factor) / factor);
      } else {
        setValue(Math.round(current));
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, durationMs, decimals, shouldStart]);

  return value;
}

function useTypewriter(text: string, speedMs = 22) {
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedLength(text.length);
      return;
    }

    setDisplayedLength(0);
    const intervalId = window.setInterval(() => {
      setDisplayedLength((prev) => {
        if (prev >= text.length) {
          window.clearInterval(intervalId);
          return prev;
        }
        return prev + 1;
      });
    }, speedMs);

    return () => window.clearInterval(intervalId);
  }, [text, speedMs]);

  return {
    typedText: text.slice(0, displayedLength),
    isTyping: displayedLength < text.length,
  };
}

const HERO_SUBHEADLINE =
  'Pindai struk AI & rekam suara,\npantau kas dalam hitungan detik.';

export default function App() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const proofRef = useRef<HTMLDivElement>(null);
  const isProofInView = useInView(proofRef, { once: true, amount: 0.25 });

  const usersCount = useCountUp(12400, 1800, 0, isProofInView);
  const ratingValue = useCountUp(4.9, 1700, 1, isProofInView);
  const { typedText, isTyping } = useTypewriter(HERO_SUBHEADLINE, 22);

  const formattedUsers = new Intl.NumberFormat('id-ID').format(usersCount);
  const formattedRating = ratingValue.toFixed(1).replace('.', ',');

  const scrollToFeatures = () => {
    document.getElementById('fitur')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#060b09] text-zinc-100">
      <Navbar />

      <main>
        {/* Full-Bleed Hero Section */}
        <section className="relative flex w-full flex-col overflow-hidden pt-16 pb-6 sm:pb-10 md:min-h-[min(100vh,780px)] md:flex-row md:items-center md:pt-20 md:pb-16">
          {/* Hero background image: unobstructed flow frame below navbar on mobile, full-bleed 16:9 on tablet/desktop */}
          <div className="pointer-events-none relative aspect-square w-full shrink-0 overflow-hidden bg-[#060b09] sm:aspect-[6/5] md:absolute md:inset-0 md:aspect-auto md:h-full">
            {!heroImgFailed ? (
              <img
                src="/assets/aistudio/Gemini_Generated_Image_kxswqfkxswqfkxsw_7bbdaa43.jpg"
                alt="Pengguna memegang ponsel dengan aplikasi Ascend Journal di ruang kerja modern"
                referrerPolicy="no-referrer"
                onError={() => setHeroImgFailed(true)}
                className="h-full w-full object-cover object-[95%_18%] sm:object-[98%_18%] md:object-[80%_20%]"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[#0b2e22] via-[#071913] to-[#060b09]" />
            )}

            {/* Mobile subtle darkening veil so bright background blends into the dark theme */}
            <div className="absolute inset-0 bg-[#060b09]/25 md:hidden" />

            {/* Mobile bottom edge blend into #060b09 so lifted text reads cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060b09] via-[#060b09]/75 to-transparent md:hidden" />

            {/* Desktop & tablet smooth dark gradient overlay from left text area toward right visual */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#060b09]/95 via-[#060b09]/85 via-50% to-[#060b09]/35" />

            {/* Top subtle scrim on tablet/desktop for crisp transparent navbar contrast */}
            <div className="hidden md:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060b09]/85 via-[#060b09]/40 to-transparent" />

            {/* Bottom seamless fade-out transition into Fitur Utama section (#060b09) */}
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#060b09] via-[#060b09]/85 to-transparent" />
          </div>

          {/* Foreground Content Container */}
          <div className="relative z-10 mx-auto -mt-10 flex w-full max-w-7xl justify-center px-4 pt-2 sm:-mt-12 sm:px-6 md:mt-0 md:justify-start md:pt-0 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex w-full max-w-xl flex-col items-center text-center md:w-[54%] md:max-w-xl md:items-start md:text-left lg:w-[50%] lg:max-w-2xl"
            >
              <h1 className="text-[clamp(2.1rem,3.8vw,3.6rem)] font-extrabold leading-[1.1] tracking-tight text-white [text-wrap:balance]">
                Kendalikan kebiasaan, catatan, dan keuangan.
              </h1>

              <p
                aria-label={HERO_SUBHEADLINE.replace('\n', ' ')}
                className="mt-4 min-h-[3.25rem] max-w-lg whitespace-pre-line text-[15px] leading-relaxed text-zinc-200 sm:min-h-[3.5rem] sm:text-lg"
              >
                <span aria-hidden="true">
                  {typedText}
                  {isTyping && (
                    <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-emerald-400" />
                  )}
                </span>
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 md:justify-start">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group animate-cta-invite inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all duration-150 hover:bg-emerald-400 hover:shadow-emerald-500/40 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <span>Mulai Sekarang</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                </a>

                <button
                  type="button"
                  onClick={scrollToFeatures}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#060b09]/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-150 hover:border-emerald-500/45 hover:bg-[#060b09]/75 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Play className="h-4 w-4 text-emerald-400" />
                  <span>Lihat Fitur</span>
                </button>
              </div>

              {/* Quantitative proof strip */}
              <div
                ref={proofRef}
                className="mt-8 grid w-full grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:mt-10"
              >
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.85, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="inline-flex items-center gap-2 sm:gap-2.5">
                    <div
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/35 bg-gradient-to-br from-emerald-400/20 to-teal-500/10 text-emerald-400 shadow-[0_0_16px_-4px_rgba(16,185,129,0.45)]"
                    >
                      <Users className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                    </div>
                    <p className="font-kpi text-xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {formattedUsers}+
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-300">
                    Pengguna aktif mingguan
                  </p>
                </motion.div>
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.85, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center md:items-start"
                >
                  <div className="inline-flex items-center gap-2 sm:gap-2.5">
                    <div
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-400/35 bg-gradient-to-br from-amber-400/20 to-emerald-500/10 text-amber-400 shadow-[0_0_16px_-4px_rgba(251,191,36,0.4)]"
                    >
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-[18px] sm:w-[18px]" />
                    </div>
                    <p className="font-kpi text-xl font-extrabold tracking-tight text-white sm:text-3xl">
                      {formattedRating} / 5,0
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-300">
                    Rating kepuasan pengguna
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bento Grid Core Features */}
        <FeaturesBento />

        {/* 3-Step Workflow */}
        <HowItWorks />

        {/* Real Promotional Visuals + Adjacent Testimonials */}
        <ShowcaseGallery />

        {/* Pricing Tiers */}
        <PricingSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final Conversion Banner */}
        <section className="overflow-x-hidden pb-20 sm:pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#0e2920] via-[#091813] to-[#07110d] p-8 text-center sm:p-12"
            >
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-semibold tracking-wide text-emerald-400"
              >
                Seporsi Kemenangan Setiap Hari
              </motion.p>
              <motion.h2
                initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]"
              >
                Rapikan kebiasaan, catatan, dan keuangan sekarang.
              </motion.h2>
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base"
              >
                Dapatkan akses penuh semua fitur produktivitas dan keuangan dengan harga promo
                spesial Rp 35.000 sekarang juga.
              </motion.p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-cta-invite inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 whitespace-nowrap cursor-pointer"
                >
                  <span>Ambil Promo Rp 35.000</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

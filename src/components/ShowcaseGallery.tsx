import { Smartphone, Star } from 'lucide-react';
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AppScreenItem {
  step: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  featured?: boolean;
}

interface TestimonialItem {
  rating: number;
  ratingText: string;
  quote: string;
  name: string;
  initials: string;
  avatar: string;
  role: string;
  outcome: string;
}

const appScreens: AppScreenItem[] = [
  {
    step: '01',
    src: '/assets/aistudio/mulai_da412eb9.jpeg',
    alt: 'Layar pembuka aplikasi Ascend Journal dengan slogan Jurnal terbaik untuk produktivitas dan refleksi Anda',
    title: 'Layar Pembuka',
    caption: 'Sambutan tenang sebelum memulai rutinitas dan refleksi harian.',
  },
  {
    step: '02',
    src: '/assets/aistudio/beranda_app_ascend_e647121e.jpeg',
    alt: 'Tampilan Beranda Ascend Journal dengan Dompet Operasional, Rekam Suara, Checklist Harian, dan Kamera AI',
    title: 'Beranda Utama',
    caption: 'Semua fitur utama langsung di satu layar.',
    featured: true,
  },
  {
    step: '03',
    src: '/assets/aistudio/app_login_d945dade.jpeg',
    alt: 'Layar masuk akun aplikasi Ascend Journal yang sederhana dan aman',
    title: 'Masuk Akun',
    caption: 'Akses akun cepat dan bersih dengan sinkronisasi lintas perangkat.',
  },
];

const testimonials: TestimonialItem[] = [
  {
    rating: 5,
    ratingText: '5,0',
    quote: 'Foto papan tulis pakai Kamera AI langsung jadi catatan rapi tanpa ketik ulang.',
    name: 'Nadia Kusuma',
    initials: 'NK',
    avatar: '/src/assets/images/avatar_nadia_kusuma_1794963065350.jpg',
    role: 'Mahasiswa · Univ. Padjadjaran',
    outcome: 'Hemat ±45 menit/hari',
  },
  {
    rating: 4,
    ratingText: '4,0',
    quote: 'Rekam Suara sangat praktis saat di KRL. Hanya butuh sedikit edit tanda baca untuk istilah teknis.',
    name: 'Raka Pratama',
    initials: 'RP',
    avatar: '/src/assets/images/avatar_raka_pratama_1794963066983.jpg',
    role: 'Product Designer · Jakarta',
    outcome: '28 hari konsisten',
  },
  {
    rating: 5,
    ratingText: '5,0',
    quote: 'Dompet Operasional bikin arus kas harian jelas. Tidak lagi menebak ke mana uang habis.',
    name: 'Bagus Setiawan',
    initials: 'BS',
    avatar: '/src/assets/images/avatar_bagus_setiawan_1794963066345.jpg',
    role: 'Analis Keuangan · Surabaya',
    outcome: 'Tabungan +Rp 1,8 jt/bln',
  },
  {
    rating: 4,
    ratingText: '4,0',
    quote: 'Checklist harian dan agendanya ringan dipakai. Bakal makin mantap kalau ada widget layar utama.',
    name: 'Sinta Maharani',
    initials: 'SM',
    avatar: '/src/assets/images/avatar_sinta_maharani_1794963435359.jpg',
    role: 'Marketing Specialist · Bandung',
    outcome: '90% tugas tepat waktu',
  },
  {
    rating: 5,
    ratingText: '5,0',
    quote: 'Pencarian instan sangat membantu saat cari struk lama atau catatan rapat minggu lalu.',
    name: 'Dimas Wijaya',
    initials: 'DW',
    avatar: '/src/assets/images/avatar_dimas_wijaya_1794963435088.jpg',
    role: 'Software Intern · Yogyakarta',
    outcome: 'Semua arsip di 1 tempat',
  },
  {
    rating: 4,
    ratingText: '4,0',
    quote: 'Kamera AI baca struk belanja cukup akurat. Kadang nama toko panjang perlu dirapikan sedikit.',
    name: 'Putri Anggraini',
    initials: 'PA',
    avatar: '/src/assets/images/avatar_putri_anggraini_1794963435037.jpg',
    role: 'Staf Administrasi · Semarang',
    outcome: 'Laporan harian 2x lebih cepat',
  },
  {
    rating: 5,
    ratingText: '5,0',
    quote: 'Akhirnya cukup satu aplikasi untuk catat pengeluaran, target mingguan, dan jurnal harian.',
    name: 'Arif Hidayat',
    initials: 'AH',
    avatar: '/src/assets/images/avatar_arif_hidayat_1794963435955.jpg',
    role: 'Content Creator · Tangerang',
    outcome: '3 target kuartal tercapai',
  },
];

function ProfileAvatar({ src, name, initials }: { src: string; name: string; initials: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-hidden="true"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-500/35 bg-emerald-950/70 text-xs font-bold text-emerald-300"
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`Foto profil ${name}`}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-emerald-400/35"
    />
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <blockquote className="flex min-h-[238px] w-[300px] sm:w-[356px] shrink-0 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0b1511]/90 p-6 backdrop-blur-md transition-colors duration-200 hover:border-emerald-500/35">
      <div>
        <div
          className="mb-3.5 flex items-center gap-2"
          aria-label={`Penilaian ${item.rating} dari 5 bintang`}
        >
          <div className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`h-3.5 w-3.5 ${
                  idx < item.rating
                    ? 'fill-amber-400 text-amber-400'
                    : 'fill-transparent text-zinc-700'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-zinc-300 font-mono-tabular">
            {item.ratingText}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-200">“{item.quote}”</p>
      </div>

      <footer className="mt-5 border-t border-white/[0.08] pt-4">
        <div className="flex items-center gap-3">
          <ProfileAvatar src={item.avatar} name={item.name} initials={item.initials} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">{item.name}</p>
            <p className="truncate text-xs text-zinc-400">{item.role}</p>
          </div>
        </div>
        <p className="mt-3 text-xs font-medium text-emerald-400">{item.outcome}</p>
      </footer>
    </blockquote>
  );
}

function AppPhoneScreen({
  src,
  alt,
  title,
  featured,
  index,
  shouldReduceMotion,
}: {
  src: string;
  alt: string;
  title: string;
  featured?: boolean;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.div
      animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 4.4 + index * 0.5,
              delay: index * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }
      }
      whileHover={shouldReduceMotion ? undefined : { scale: 1.035, y: -8 }}
      className={`mx-auto w-full max-w-[270px] overflow-hidden rounded-[32px] border-[6px] bg-[#0b1511] shadow-2xl transition-shadow duration-200 ${
        featured
          ? 'border-[#163026] shadow-emerald-950/50 ring-1 ring-emerald-400/35 group-hover:shadow-emerald-500/20 group-hover:ring-emerald-400/70'
          : 'border-[#14231c] shadow-black/70 ring-1 ring-white/15 group-hover:ring-emerald-400/50'
      }`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="block h-auto w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[9/19] w-full flex-col items-center justify-center bg-gradient-to-br from-[#0a2e22] via-[#071a13] to-[#050d0a] p-6 text-center">
          <Smartphone className="h-10 w-10 text-emerald-400" />
          <p className="mt-3 text-sm font-semibold text-white">{title}</p>
          <p className="mt-1 text-xs text-zinc-400">Tampilan Aplikasi Ascend Journal</p>
        </div>
      )}
    </motion.div>
  );
}

export default function ShowcaseGallery() {
  const shouldReduceMotion = useReducedMotion();
  const phonesGridRef = useRef<HTMLDivElement>(null);
  const isPhonesInView = useInView(phonesGridRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: phonesGridRef,
    offset: ['start end', 'end start'],
  });

  // Subtle scroll-linked depth parallax across the 3 phones
  const sideParallaxY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const centerParallaxY = useTransform(scrollYProgress, [0, 1], [-14, 14]);

  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-kicker text-sm font-medium tracking-wide text-emerald-400"
          >
            Tampilan Nyata Aplikasi
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl [text-wrap:balance]"
          >
            Ringan dan rapi di setiap layar.
          </motion.h2>
        </div>

        {/* 3 Real App Screen Mockups with scroll reveal, scroll parallax & hover viewing motion */}
        <div
          ref={phonesGridRef}
          className="mt-14 grid grid-cols-1 items-end gap-10 sm:grid-cols-3 lg:gap-12"
        >
          {appScreens.map((screen, index) => {
            const initialX = index === 0 ? -24 : index === 2 ? 24 : 0;

            return (
              <motion.figure
                key={screen.step}
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: screen.featured ? centerParallaxY : sideParallaxY }
                }
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, x: initialX, y: 40, scale: 0.94 }
                }
                animate={
                  shouldReduceMotion || isPhonesInView
                    ? { opacity: 1, x: 0, y: 0, scale: 1 }
                    : { opacity: 0, x: initialX, y: 40, scale: 0.94 }
                }
                transition={{
                  duration: 0.75,
                  delay: index * 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex flex-col items-center text-center ${
                  screen.featured ? 'sm:-translate-y-4' : ''
                }`}
              >
                <AppPhoneScreen
                  src={screen.src}
                  alt={screen.alt}
                  title={screen.title}
                  featured={screen.featured}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
                <motion.figcaption
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={
                    shouldReduceMotion || isPhonesInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 16 }
                  }
                  transition={{
                    duration: 0.85,
                    delay: 0.24 + index * 0.16,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-5 max-w-[260px]"
                >
                  <p className="text-xs font-semibold text-emerald-400 font-mono-tabular">
                    {screen.step} · {screen.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{screen.caption}</p>
                </motion.figcaption>
              </motion.figure>
            );
          })}
        </div>
      </div>

      {/* Testimonials Section Header */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-kicker text-sm font-medium tracking-wide text-emerald-400"
          >
            Penilaian Pengguna · Rata-rata 4,6 dari 5,0
          </motion.p>
          <motion.h3
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl [text-wrap:balance]"
          >
            Ulasan dari Pengguna Kami
          </motion.h3>
        </div>
      </div>

      {/* 7 User Comments: Slow Auto-Scroll + Manual Swipe/Drag */}
      <ReviewMarqueeTrack shouldReduceMotion={shouldReduceMotion} />
    </section>
  );
}

function ReviewMarqueeTrack({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isMouseDraggingRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const isProgrammaticRef = useRef(false);
  const [dragging, setDragging] = useState(false);

  const scheduleResume = (delayMs = 900) => {
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
    // Gentle ~36px/s slow scroll matching the unhurried reading cadence
    const speedPxPerSec = 36;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const halfWidth = el.scrollWidth / 2;
      if (
        halfWidth > 0 &&
        !isHoveredRef.current &&
        !isMouseDraggingRef.current &&
        !isUserScrollingRef.current
      ) {
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
      scheduleResume(1000);
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
      scheduleResume(900);
    } else if (e.pointerType === 'touch') {
      scheduleResume(1100);
    }
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="relative mt-10 w-full"
    >
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
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        aria-label="Ulasan pengguna Ascend Journal, dapat digeser secara manual"
        className={`scrollbar-none flex overflow-x-auto select-none ${
          dragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        <div className="flex w-max gap-5 px-2.5">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} item={item} />
          ))}
          <div aria-hidden="true" className="flex gap-5">
            {testimonials.map((item) => (
              <TestimonialCard key={`dup-${item.name}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { ArrowRight, Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const CHECKOUT_URL = 'https://lynk.id/creatormedia/446jqyj4lz2e/checkout';

const includedFeatures = [
  'Kamera AI tanpa batas untuk scan struk & catatan',
  'Rekam Suara jadi teks rapi Bahasa Indonesia',
  'Dompet Operasional real-time dalam Rupiah',
  'Checklist kebiasaan harian, target & agenda pengingat',
  'Pencarian terpadu instan di semua modul',
  'Sinkronisasi otomatis di HP, tablet, dan browser',
];

export default function PricingSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="harga"
      className="overflow-x-hidden border-t border-white/[0.07] bg-[#08100d] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-kicker text-sm font-medium tracking-wide text-emerald-400"
          >
            Promo Spesial · Satu Paket Lengkap
          </motion.p>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl [text-wrap:balance]"
          >
            Satu harga spesial untuk semua fitur.
          </motion.h2>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.98, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-emerald-500/45 bg-gradient-to-b from-[#0e221b] via-[#0b1713] to-[#0b1511] p-7 shadow-2xl shadow-emerald-950/35 sm:p-10"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* Left: Single Special Promo Price */}
            <div className="md:col-span-5 md:border-r md:border-white/[0.1] md:pr-8">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Promo Spesial
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  Ascend Journal Penuh
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  Akses penuh semua fitur tanpa batas.
                </p>

                <div className="mt-6">
                  <p className="text-xs text-zinc-400 line-through font-mono-tabular">
                    Harga normal Rp 79.000
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-kpi text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                      Rp 35.000
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-medium text-emerald-300/90">
                    Penawaran promo spesial · Tanpa biaya tersembunyi
                  </p>
                </div>
              </motion.div>

              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-cta-invite mt-7 inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>Ambil Promo Sekarang</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right: Included Features Checklist */}
            <div className="md:col-span-7">
              <motion.p
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-400"
              >
                Sudah termasuk di paket ini
              </motion.p>
              <ul className="mt-4 space-y-3.5 text-sm text-zinc-200">
                {includedFeatures.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.78,
                      delay: 0.24 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex items-start gap-3"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

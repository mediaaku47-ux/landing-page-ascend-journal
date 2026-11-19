import { ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';

const faqs = [
  {
    q: 'Apa saja yang didapat dari paket Promo Spesial Rp 35.000?',
    a: 'Anda langsung mendapatkan akses penuh ke seluruh fitur Ascend Journal, termasuk Kamera AI tanpa batas, Rekam Suara ke Teks, Dompet Operasional, Checklist Harian, Agenda Pengingat, serta sinkronisasi lintas perangkat.',
  },
  {
    q: 'Bagaimana cara kerja Kamera AI untuk struk dan catatan kuliah?',
    a: 'Cukup tekan tombol Kamera AI lalu foto struk belanja atau papan tulis. Sistem otomatis membaca nominal, tanggal, serta poin teks penting, lalu menyarankan untuk langsung menyimpannya sebagai transaksi atau catatan.',
  },
  {
    q: 'Apakah fitur Rekam Suara akurat untuk bahasa Indonesia sehari-hari?',
    a: 'Ya, mesin transkripsi kami dioptimalkan untuk pelafalan bahasa Indonesia kasual maupun istilah kerja/kuliah campuran bahasa Inggris sehingga hasilnya langsung rapi.',
  },
  {
    q: 'Apakah data keuangan dan catatan pribadi saya aman?',
    a: 'Semua data Anda dienkripsi saat dikirim maupun saat tersimpan. Catatan jurnal dan riwayat Dompet Operasional bersifat privat dan tidak pernah dijual atau dibagikan ke pihak ketiga.',
  },
  {
    q: 'Bisa dipakai di HP sekaligus di laptop atau desktop?',
    a: 'Bisa. Seluruh agenda, kebiasaan, dan catatan Anda tersinkronisasi otomatis antar perangkat. Anda bisa memotret struk lewat HP lalu meninjau laporannya di laptop.',
  },
  {
    q: 'Di mana aplikasi Ascend Journal tersedia?',
    a: 'Demi menjaga keamanan pengguna dari risiko tiruan atau tautan tidak resmi, Ascend Journal hanya tersedia dan dipromosikan melalui Link.id resmi kami.',
  },
  {
    q: 'Apakah harga promo Rp 35.000 bisa naik setelah promo berakhir?',
    a: 'Ya. Harga Rp 35.000 merupakan penawaran promo spesial. Ketika masa promo sudah tidak berlaku, harga dapat naik kembali mengikuti tarif normal tanpa pemberitahuan sebelumnya.',
  },
  {
    q: 'Apakah ada biaya tambahan setelah mengambil harga promo Rp 35.000?',
    a: 'Tidak ada biaya tersembunyi. Selama Anda mendaftar pada masa promo, cukup satu harga promo spesial Rp 35.000 untuk menikmati semua fitur utama tanpa batasan kuota.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="overflow-x-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl [text-wrap:balance]"
          >
            Hal yang sering ditanyakan sebelum mulai.
          </motion.h2>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 34, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-[#0b1511]"
        >
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <motion.span
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.08 + idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-sm font-semibold text-white sm:text-base"
                  >
                    {item.q}
                  </motion.span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                    className="px-6 pb-5 text-sm leading-relaxed text-zinc-400"
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

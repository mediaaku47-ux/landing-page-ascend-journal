import { Link2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050907] py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs text-zinc-400">
            © 2026 Ascend Journal. Seluruh hak cipta dilindungi.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-400"
        >
          <a href="#fitur" className="transition-colors hover:text-white">
            Fitur
          </a>
          <a href="#cara-kerja" className="transition-colors hover:text-white">
            Cara Kerja
          </a>
          <a href="#harga" className="transition-colors hover:text-white">
            Harga
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQ
          </a>
          <span className="text-zinc-700" aria-hidden="true">
            |
          </span>
          <a
            href="https://lynk.id/creatormedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
          >
            <Link2 aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
            <span>Lynk.id</span>
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

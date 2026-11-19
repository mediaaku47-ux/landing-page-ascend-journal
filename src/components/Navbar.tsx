import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const CHECKOUT_URL = 'https://lynk.id/creatormedia/446jqyj4lz2e/checkout';

const navLinks = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Harga', href: '#harga' },
  { label: 'FAQ', href: '#faq' },
];

function AscendLogoMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 41 37"
      fill="none"
      className="h-9 w-10 shrink-0"
    >
      <defs>
        <linearGradient
          id="ascend-book-grad"
          x1="4"
          y1="6"
          x2="37"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="48%" stopColor="#0f766e" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient
          id="ascend-bookmark-grad"
          x1="30"
          y1="2"
          x2="30"
          y2="11.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
      </defs>

      {/* Book cover, spine, and horizontal speed-streak cutouts */}
      <path
        d="M 15.2 7.0 H 34.0 A 3.6 3.6 0 0 1 37.6 10.6 V 31.1 A 3.8 3.8 0 0 1 33.8 34.9 H 9.6 A 1.75 1.75 0 0 1 9.6 31.4 H 17.8 A 1.6 1.6 0 0 0 17.8 28.2 H 11.4 A 1.6 1.6 0 0 1 11.4 25.0 H 13.4 A 1.6 1.6 0 0 0 13.4 21.8 H 4.6 A 1.6 1.6 0 0 1 4.6 18.6 H 16.4 A 1.6 1.6 0 0 0 16.4 15.4 H 9.2 A 1.6 1.6 0 0 1 9.2 12.2 H 33.8 A 1.6 1.6 0 0 0 33.8 9.0 H 15.2 A 1.0 1.0 0 0 1 15.2 7.0 Z"
        fill="url(#ascend-book-grad)"
        stroke="#2dd4bf"
        strokeOpacity="0.22"
        strokeWidth="0.6"
      />

      {/* Left floating motion dots */}
      <circle cx="6.2" cy="26.6" r="1.6" fill="url(#ascend-book-grad)" />
      <circle cx="4.0" cy="33.15" r="1.7" fill="url(#ascend-book-grad)" />

      {/* Notched bookmark ribbon on top-right */}
      <path
        d="M 27.6 2.0 L 30.2 4.5 L 32.8 2.0 V 11.3 H 27.6 Z"
        fill="url(#ascend-bookmark-grad)"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-[#060b09]/85 backdrop-blur-xl'
          : 'border-b border-white/[0.06] bg-gradient-to-b from-[#060b09]/75 via-[#060b09]/40 to-transparent backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md"
        >
          <AscendLogoMark />
          <span className="flex flex-col leading-none">
            <span className="font-brand bg-gradient-to-b from-[#f5be49] via-[#de8e27] to-[#b55e14] bg-clip-text text-[18px] font-extrabold uppercase tracking-[0.06em] text-transparent">
              Ascend
            </span>
            <span className="font-brand mt-0.5 text-[10.5px] font-medium uppercase tracking-[0.31em] text-[#2dd4bf]">
              Journal
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-200"
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-zinc-200 transition-colors duration-150 hover:text-white whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex animate-cta-invite items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-all duration-150 hover:bg-emerald-400 active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060b09]"
          >
            Mulai Sekarang
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#060b09]/50 text-zinc-100 transition-colors hover:bg-white/[0.1] md:hidden cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-[#08100d]/95 backdrop-blur-xl px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-zinc-200 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 animate-cta-invite flex min-h-[44px] w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 cursor-pointer"
            >
              Mulai Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

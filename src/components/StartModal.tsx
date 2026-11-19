import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { FormEvent, useState } from 'react';

interface StartModalProps {
  isOpen: boolean;
  selectedPlan: string;
  onClose: () => void;
}

export default function StartModal({ isOpen, selectedPlan, onClose }: StartModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Pelajar / Mahasiswa');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError('Mohon masukkan nama panggilan Anda.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Mohon masukkan alamat email yang valid.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-white/15 bg-[#0b1511] p-6 sm:p-7 shadow-2xl">
        <button
          type="button"
          onClick={resetAndClose}
          aria-label="Tutup jendela"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {!submitted ? (
          <>
            <p className="text-xs font-semibold text-emerald-400">
              {selectedPlan} · ascendjournal.com
            </p>
            <h3 id="modal-title" className="mt-2 text-xl font-bold text-white">
              Mulai gunakan Ascend Journal
            </h3>
            <p className="mt-1.5 text-sm text-zinc-400">
              Isi detail singkat di bawah untuk mendapatkan akses langsung ke ruang kerja Anda.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label htmlFor="user-name" className="block text-xs font-medium text-zinc-300">
                  Nama Lengkap
                </label>
                <input
                  id="user-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Nadia Kusuma"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#060b09] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="user-email" className="block text-xs font-medium text-zinc-300">
                  Alamat Email
                </label>
                <input
                  id="user-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#060b09] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="user-role" className="block text-xs font-medium text-zinc-300">
                  Aktivitas Utama
                </label>
                <select
                  id="user-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#060b09] px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none"
                >
                  <option value="Pelajar / Mahasiswa">Pelajar / Mahasiswa</option>
                  <option value="Pekerja Muda / Profesional">Pekerja Muda / Profesional</option>
                  <option value="Freelancer / Kreator">Freelancer / Kreator</option>
                </select>
              </div>

              {error && (
                <p role="alert" className="text-xs font-medium text-rose-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="animate-cta-invite flex min-h-[44px] w-full items-center justify-center rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400 cursor-pointer"
              >
                Aktifkan Akses Sekarang
              </button>
            </form>
          </>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 id="modal-title" className="mt-4 text-xl font-bold text-white">
              Selamat datang, {name}!
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              Tautan aktivasi untuk <span className="font-semibold text-white">{selectedPlan}</span>{' '}
              telah disiapkan untuk <span className="text-emerald-400">{email}</span>.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href="https://ascendjournal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="animate-cta-invite inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
              >
                <span>Buka ascendjournal.com</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={resetAndClose}
                className="min-h-[40px] w-full rounded-xl border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 hover:bg-white/[0.05] cursor-pointer"
              >
                Kembali ke Halaman
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

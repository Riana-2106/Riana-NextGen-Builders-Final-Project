import Link from "next/link";
import {
  PROGRAMS,
  CHALLENGE_NAME,
  formatRupiah,
  MENU_HIGHLIGHTS,
  TESTIMONIALS,
} from "@/app/lib/constants";

const HIGHLIGHTS = [
  {
    title: "Menu tanpa bosan",
    description:
      "Sarapan, makan siang, makan malam, dan snack disusun bergilir sehingga menu jarang terulang selama program berjalan.",
  },
  {
    title: "Daftar dalam 2 menit",
    description:
      "Isi satu formulir singkat — data kamu langsung tersimpan, tidak perlu menunggu balasan chat admin.",
  },
  {
    title: "Tidak ada pendaftaran ganda",
    description:
      "Sistem otomatis mengenali nomor HP/email yang sama, jadi data kamu tidak akan tercatat dobel atau terlewat.",
  },
];

const HERO_CHECKLIST = [
  "Menu Baru Setiap Hari",
  "Diracik Seimbang Gizi",
  "Antar Tepat Waktu",
  "Bebas Atur Durasi Program",
];

const PLATE_STYLES = [
  "radial-gradient(circle at 32% 28%, #ffffff 0%, var(--brand-soft) 45%, var(--brand) 100%)",
  "radial-gradient(circle at 32% 28%, #ffffff 0%, #ffe3c2 45%, var(--accent) 100%)",
  "radial-gradient(circle at 32% 28%, #ffffff 0%, var(--brand-soft) 45%, var(--brand-dark) 100%)",
];

function FoodPlate({
  emoji,
  size = "h-20 w-20",
  emojiSize = "text-4xl",
  variant = 0,
  className = "",
}: {
  emoji: string;
  size?: string;
  emojiSize?: string;
  variant?: number;
  className?: string;
}) {
  return (
    <div
      className={`${size} rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/40 ${className}`}
      style={{ background: PLATE_STYLES[variant % PLATE_STYLES.length] }}
    >
      <span className={emojiSize} style={{ filter: "drop-shadow(0 3px 5px rgba(0,0,0,.25))" }}>
        {emoji}
      </span>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initial = name.trim()[0]?.toUpperCase() ?? "?";
  return (
    <div
      className="h-12 w-12 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg shrink-0"
      style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--accent) 100%)" }}
    >
      {initial}
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} dari 5 bintang`} className="text-accent text-sm tracking-tight">
      {"★".repeat(rating)}
      <span className="text-border">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

const STEPS = [
  {
    step: "1",
    title: "Pilih durasi & paket",
    description: "Tentukan Healthy Life_30, 60, atau 90 Hari, lalu pilih paket makan yang sesuai.",
  },
  {
    step: "2",
    title: "Isi formulir pendaftaran",
    description: "Data diri, target program, dan tanggal mulai — langsung tersimpan ke sistem kami.",
  },
  {
    step: "3",
    title: "Healthy Challenge dimulai",
    description: "Tim kami menghubungi kamu untuk konfirmasi, lalu pengantaran menu harian dimulai.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1100px 520px at 12% -10%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%), linear-gradient(160deg, var(--brand-dark) 0%, var(--brand) 42%, var(--brand-soft) 100%)",
          }}
        />
        <div className="max-w-5xl mx-auto px-5 pt-20 pb-24 relative">
          <div className="max-w-2xl relative z-10">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              🔥 {CHALLENGE_NAME} — 30 · 60 · 90 Hari
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-5 text-balance text-white">
              Makan Enak, Badan Sehat, Tanpa Ribet Setiap Hari
            </h1>
            <p className="text-white/90 text-lg mt-5 max-w-xl">
              NusaFit mengantar menu sehat khas Nusantara langsung ke depan pintumu — variatif, bergizi,
              dan bikin nagih. Nggak perlu masak, nggak perlu nunggu balasan chat berjam-jam.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {HERO_CHECKLIST.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-dark bg-white px-3 py-1.5 rounded-full shadow-sm"
                >
                  <span className="text-brand">✓</span> {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/daftar"
                className="rounded-full bg-accent text-white px-10 py-5 text-lg font-bold shadow-2xl shadow-black/20 hover:scale-105 hover:brightness-110 transition-all"
              >
                Daftar Sekarang
              </Link>
              <Link
                href="/menu"
                className="rounded-full border-2 border-white/70 text-white px-8 py-5 text-lg font-medium hover:bg-white/10 transition-colors"
              >
                Lihat Menu
              </Link>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-4 w-72 h-72" aria-hidden="true">
            <FoodPlate emoji="🥗" size="h-28 w-28" emojiSize="text-5xl" variant={0} className="absolute top-0 right-8 rotate-6" />
            <FoodPlate emoji="🍲" size="h-24 w-24" emojiSize="text-4xl" variant={1} className="absolute top-32 right-44 -rotate-6" />
            <FoodPlate emoji="🍓" size="h-20 w-20" emojiSize="text-3xl" variant={2} className="absolute top-44 right-2 rotate-3" />
            <FoodPlate emoji="🥑" size="h-16 w-16" emojiSize="text-2xl" variant={0} className="absolute top-6 right-56 -rotate-3" />
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-5 py-16 grid sm:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="font-serif text-2xl font-semibold">Menu Favorit Pelanggan</h2>
        <p className="text-muted mt-2 max-w-xl">
          Sekilas cita rasa yang menunggumu — disajikan segar dan menggugah selera setiap hari.
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {MENU_HIGHLIGHTS.map((item, i) => (
            <div
              key={item.name}
              className="rounded-xl bg-surface border border-border p-5 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <FoodPlate emoji={item.emoji} variant={i} />
              <h3 className="font-semibold text-sm mt-4">{item.name}</h3>
              <p className="text-xs text-muted mt-1.5 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="font-serif text-2xl font-semibold">Cara kerjanya</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {STEPS.map((item) => (
            <div key={item.step} className="rounded-lg border border-border bg-surface p-5">
              <span className="font-serif text-2xl text-brand">{item.step}</span>
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimoni" className="bg-surface border-y border-border scroll-mt-20">
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="font-serif text-2xl font-semibold">Testimoni Pelanggan</h2>
          <p className="text-muted mt-2 max-w-xl">
            Cerita nyata dari mereka yang sudah merasakan perubahan bersama NusaFit.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-xl border border-border bg-background p-6 flex flex-col">
                <Stars rating={t.rating} />
                <p className="text-sm text-foreground mt-3 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-5">
                  <Avatar name={t.name} />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, var(--brand-soft) 0%, var(--background) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="font-serif text-2xl font-semibold">Pilih durasi {CHALLENGE_NAME}-mu</h2>
          <p className="text-muted mt-2 max-w-xl">
            Tiap durasi tersedia 3 paket makan — dari yang paling lengkap sampai yang paling ringan.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {PROGRAMS.map((program) => {
              const cheapest = program.packages[program.packages.length - 1];
              return (
                <div
                  key={program.id}
                  className="rounded-xl bg-surface border border-border p-6 flex flex-col"
                >
                  <h3 className="font-serif text-xl font-semibold">{program.name}</h3>
                  <p className="text-sm text-muted mt-1">{program.duration}</p>
                  <p className="text-sm text-brand-dark font-medium mt-2">{program.target}</p>
                  <p className="text-xs text-muted mt-4">Mulai dari</p>
                  <p className="text-2xl font-serif font-semibold text-accent">
                    {formatRupiah(cheapest.price)}
                  </p>
                  <Link
                    href={`/daftar?program=${program.id}`}
                    className="mt-5 inline-block text-center rounded-full bg-brand text-white px-5 py-2.5 font-medium hover:bg-brand-dark transition-colors"
                  >
                    Pilih {program.name}
                  </Link>
                </div>
              );
            })}
          </div>
          <Link
            href="/daftar"
            className="inline-block mt-10 rounded-full bg-accent text-white px-10 py-5 text-lg font-bold shadow-2xl shadow-accent/30 hover:scale-105 hover:brightness-110 transition-all"
          >
            Daftar Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { PROGRAMS, CHALLENGE_NAME, formatRupiah } from "@/app/lib/constants";

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
        <div className="max-w-5xl mx-auto px-5 pt-20 pb-24">
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full">
            {CHALLENGE_NAME} — 30 · 60 · 90 Hari
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-5 max-w-2xl text-balance text-white">
            Tantangan Hidup Sehat &amp; Penurunan Berat Badan
          </h1>
          <p className="text-white/90 text-lg mt-5 max-w-xl">
            Catering sehat dengan menu harian yang variatif, dan sistem pendaftaran yang tidak akan
            membuat kamu menunggu lama atau terlewat karena antrian chat.
          </p>
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

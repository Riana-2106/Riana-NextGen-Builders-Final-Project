import Link from "next/link";
import Image from "next/image";
import { Photo, hasPhoto } from "@/app/components/Photo";
import {
  PROGRAMS,
  CHALLENGE_NAME,
  formatRupiah,
  MENU_HIGHLIGHTS,
  TESTIMONIALS,
  INFLUENCER,
  WHY_NUSAFIT,
  COMPARISON,
} from "@/app/lib/constants";

const HERO_PHOTO = "photos/hero.jpg";

const HERO_CHECKLIST = [
  "Menu Baru Setiap Hari",
  "Disusun Sesuai Kebutuhan Gizi",
  "Antar Tepat Waktu",
  "Bebas Atur Durasi Program",
];

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

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} dari 5 bintang`} className="text-accent text-sm tracking-tight">
      {"★".repeat(rating)}
      <span className="text-border">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

function InfluencerSection() {
  // Widened from the literal type so both branches stay type-checked while the
  // partnership flag is still false.
  const isRealPartner: boolean = INFLUENCER.isRealPartner;

  const headline = isRealPartner ? INFLUENCER.partnerHeadline : INFLUENCER.brandHeadline;
  const prolog = isRealPartner ? INFLUENCER.partnerProlog : INFLUENCER.brandProlog;

  return (
    <section className="bg-brand-dark">
      <div className="max-w-5xl mx-auto px-5 py-16 grid md:grid-cols-[minmax(0,320px)_1fr] gap-10 items-center">
        <Photo
          src={INFLUENCER.photo}
          alt={
            isRealPartner
              ? INFLUENCER.name
              : "Menikmati hidangan sehat NusaFit"
          }
          label="Foto gaya hidup / brand partner"
          sizes="(max-width: 768px) 100vw, 320px"
          className="w-full aspect-[4/5] rounded-2xl shadow-2xl"
        />
        <div>
          <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white bg-accent px-3 py-1 rounded-full">
            {INFLUENCER.badge}
          </span>
          <blockquote className="font-serif text-3xl sm:text-4xl text-white mt-5 text-balance leading-tight">
            {headline}
          </blockquote>
          <div className="mt-5 space-y-3">
            {prolog.map((paragraph, i) => (
              <p key={i} className="text-white/85 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Attribution appears only for a real, consenting brand partner. */}
          {isRealPartner && (
            <div className="mt-6">
              <p className="text-white font-semibold">{INFLUENCER.name}</p>
              <p className="text-white/60 text-sm">
                {INFLUENCER.handle}
                {INFLUENCER.reach ? ` · ${INFLUENCER.reach}` : ""}
              </p>
            </div>
          )}

          <Link
            href="/daftar"
            className="inline-block mt-7 rounded-full bg-accent text-white px-9 py-4 text-lg font-bold shadow-xl hover:scale-105 hover:brightness-110 transition-all"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  if (hasPhoto(HERO_PHOTO)) {
    return (
      <>
        <Image
          src={`/${HERO_PHOTO}`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover -z-20"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, color-mix(in srgb, var(--brand-dark) 92%, transparent) 0%, color-mix(in srgb, var(--brand-dark) 72%, transparent) 45%, color-mix(in srgb, var(--brand) 30%, transparent) 100%)",
          }}
        />
      </>
    );
  }

  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(1100px 520px at 12% -10%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%), linear-gradient(160deg, var(--brand-dark) 0%, var(--brand) 42%, var(--brand-soft) 100%)",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBackground />
        <div className="max-w-5xl mx-auto px-5 pt-20 pb-24">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full">
              {CHALLENGE_NAME} — 30 · 60 · 90 Hari
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-5 text-balance text-white">
              Makan Enak, Badan Sehat, Tanpa Ribet Setiap Hari
            </h1>
            <p className="text-white/90 text-lg mt-5 max-w-xl">
              NusaFit mengantar menu sehat khas Nusantara langsung ke depan pintumu — variatif,
              bergizi, dan bikin nagih. Nggak perlu masak, nggak perlu nunggu balasan chat berjam-jam.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {HERO_CHECKLIST.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-brand-dark bg-white px-3 py-1.5 rounded-full shadow-sm"
                >
                  <span className="text-brand font-bold">&#10003;</span> {item}
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
        </div>
      </section>

      {/* Influencer / brand-partner spotlight */}
      <InfluencerSection />

      {/* Why NusaFit */}
      <section className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="font-serif text-3xl font-semibold text-center text-balance">
          Kenapa Harus NusaFit?
        </h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-7">
          {WHY_NUSAFIT.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-surface border border-border overflow-hidden flex flex-col"
            >
              <Photo
                src={item.photo}
                alt={item.title}
                label={item.title}
                sizes="(max-width: 640px) 100vw, 33vw"
                className="w-full aspect-[4/3]"
              />
              <div className="p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu gallery */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="font-serif text-3xl font-semibold">Menu Favorit Pelanggan</h2>
          <p className="text-muted mt-2 max-w-xl">
            Sekilas cita rasa yang menunggumu — disajikan segar dan menggugah selera setiap hari.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {MENU_HIGHLIGHTS.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-background border border-border overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Photo
                  src={item.photo}
                  alt={item.name}
                  label={item.name}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full aspect-square"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-muted mt-1.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}

            {/* Completes the grid and routes into the full 90-day catalogue. */}
            <Link
              href="/menu"
              className="rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-6 text-white hover:-translate-y-1 hover:shadow-xl transition-all"
              style={{
                background:
                  "linear-gradient(150deg, var(--brand-dark) 0%, var(--brand) 60%, color-mix(in srgb, var(--accent) 70%, var(--brand)) 100%)",
              }}
            >
              <span className="font-serif text-xl leading-tight text-balance">
                Masih banyak menu lainnya
              </span>
              <span className="text-white/80 text-xs mt-2 leading-relaxed">
                Menu harian bergilir selama program berjalan
              </span>
              <span className="mt-4 inline-block rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm font-semibold">
                Lihat Menu 90 Hari
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="font-serif text-3xl font-semibold text-center text-balance">
          Kenapa Pelanggan Pindah ke NusaFit
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="w-1/5" />
                <th className="text-center p-4 font-semibold text-muted text-sm">
                  {COMPARISON.left}
                </th>
                <th className="text-center p-4 rounded-t-2xl bg-brand text-white font-serif text-lg">
                  {COMPARISON.right}
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row, i) => (
                <tr key={row.aspect} className={i % 2 === 0 ? "bg-surface" : ""}>
                  <th className="text-left p-4 text-sm font-semibold align-top">{row.aspect}</th>
                  <td className="p-4 text-sm text-muted text-center align-top">{row.left}</td>
                  <td
                    className={`p-4 text-sm text-center align-top font-medium text-brand-dark bg-brand-soft ${
                      i === COMPARISON.rows.length - 1 ? "rounded-b-2xl" : ""
                    }`}
                  >
                    {row.right}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Value props */}
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

      {/* How it works */}
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

      {/* Testimonials */}
      <section id="testimoni" className="bg-surface border-y border-border scroll-mt-20">
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="font-serif text-3xl font-semibold">Testimoni Pelanggan</h2>
          <p className="text-muted mt-2 max-w-xl">
            Cerita nyata dari mereka yang sudah merasakan perubahan bersama NusaFit.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-background overflow-hidden flex flex-col"
              >
                {/* Only real, consenting customers get a photo — no stock faces here. */}
                {hasPhoto(t.photo) && (
                  <Photo
                    src={t.photo}
                    alt={t.name}
                    label={`Foto ${t.name}`}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="w-full aspect-[4/3]"
                  />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <Stars rating={t.rating} />
                  <p className="text-sm text-foreground mt-3 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section
        className="relative"
        style={{
          background: "linear-gradient(180deg, var(--brand-soft) 0%, var(--background) 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="font-serif text-3xl font-semibold">Pilih durasi {CHALLENGE_NAME}-mu</h2>
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

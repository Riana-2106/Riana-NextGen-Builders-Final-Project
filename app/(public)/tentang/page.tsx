import Image from "next/image";
import { PageHero } from "@/app/components/PageHero";
import { Photo } from "@/app/components/Photo";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_STORY,
  BRAND_VISION,
  BRAND_MISSION,
  CORE_VALUES,
} from "@/app/lib/constants";

export const metadata = {
  title: "Tentang Kami",
};

export default function TentangPage() {
  return (
    <div>
      <PageHero kicker="Tentang Kami" title={BRAND_NAME} subtitle={BRAND_TAGLINE} />

      {/* Story, paired with a photo so the page opens visually rather than as text. */}
      <section className="max-w-5xl mx-auto px-5 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/logo-nusafit.png"
              alt={BRAND_NAME}
              width={600}
              height={600}
              className="h-28 w-28 sm:h-32 sm:w-32 object-contain"
            />
            <div className="mt-5 space-y-4">
              {BRAND_STORY.map((paragraph, i) => (
                <p key={i} className="text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <Photo
            src="photos/tentang-tim.jpg"
            alt="Suasana layanan NusaFit"
            label="Foto tim / suasana layanan"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full aspect-[4/3] rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Full-width ingredient banner breaking up the reading flow. */}
      <section className="relative">
        <Photo
          src="photos/tentang-bahan.jpg"
          alt="Bahan-bahan segar pilihan NusaFit"
          label="Bahan segar pilihan"
          sizes="100vw"
          priority={false}
          className="w-full h-56 sm:h-72"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-dark/50" />
          <p
            className="relative font-serif text-2xl sm:text-3xl text-white text-center px-5 text-balance"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,.6)" }}
          >
            Bahan segar pilihan, setiap hari.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-12">
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 className="font-serif text-xl font-semibold text-brand-dark">Visi</h2>
          <p className="text-foreground leading-relaxed mt-3">{BRAND_VISION}</p>
        </div>

        <div className="mt-6 grid sm:grid-cols-[1fr_minmax(0,240px)] gap-6 items-start">
          <div className="rounded-lg border border-border bg-surface p-6">
            <h2 className="font-serif text-xl font-semibold text-brand-dark">Misi</h2>
            <ol className="mt-3 space-y-3 list-decimal list-inside">
              {BRAND_MISSION.map((item, i) => (
                <li key={i} className="text-foreground leading-relaxed pl-1">
                  {item}
                </li>
              ))}
            </ol>
          </div>
          {/* Stacked so the column fills the height of the seven-point mission list. */}
          <div className="hidden sm:flex flex-col gap-6">
            <Photo
              src="photos/menu-4.jpg"
              alt="Buah dan sayur segar"
              label="Buah & sayur segar"
              sizes="240px"
              className="w-full aspect-square rounded-2xl shadow-md"
            />
            <Photo
              src="photos/tentang-hidangan.jpg"
              alt="Hidangan sehat NusaFit siap disajikan"
              label="Hidangan siap saji"
              sizes="240px"
              className="w-full aspect-[4/3] rounded-2xl shadow-md"
            />
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-surface p-6">
          <h2 className="font-serif text-xl font-semibold text-brand-dark">Nilai Perusahaan</h2>
          <p className="text-sm text-muted mt-1">
            Nilai-nilai yang kami pegang, dirangkum dalam satu kata: HEALTH.
          </p>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {CORE_VALUES.map((value, i) => (
              <div key={i} className="rounded-lg bg-surface-alt p-4">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white font-serif text-lg font-bold"
                  style={{ background: "linear-gradient(135deg, var(--brand) 0%, var(--accent) 100%)" }}
                >
                  {value.letter}
                </span>
                <h3 className="font-semibold text-sm mt-3">{value.title}</h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg bg-brand-soft p-6 text-center">
          <p className="font-serif text-lg text-brand-dark">&ldquo;{BRAND_TAGLINE}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

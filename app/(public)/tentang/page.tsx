import Image from "next/image";
import { PageHero } from "@/app/components/PageHero";
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
      <div className="max-w-3xl mx-auto px-5 py-12">
        <Image
          src="/logo-nusafit.png"
          alt={BRAND_NAME}
          width={600}
          height={600}
          className="h-32 w-32 sm:h-40 sm:w-40 object-contain -mt-4"
        />

        <div className="mt-6 space-y-4">
          {BRAND_STORY.map((paragraph, i) => (
            <p key={i} className="text-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-border bg-surface p-6">
          <h2 className="font-serif text-xl font-semibold text-brand-dark">Visi</h2>
          <p className="text-foreground leading-relaxed mt-3">{BRAND_VISION}</p>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-surface p-6">
          <h2 className="font-serif text-xl font-semibold text-brand-dark">Misi</h2>
          <ol className="mt-3 space-y-3 list-decimal list-inside">
            {BRAND_MISSION.map((item, i) => (
              <li key={i} className="text-foreground leading-relaxed pl-1">
                {item}
              </li>
            ))}
          </ol>
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

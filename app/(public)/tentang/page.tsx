import Image from "next/image";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  BRAND_STORY,
  BRAND_VISION,
  BRAND_MISSION,
} from "@/app/lib/constants";

export const metadata = {
  title: "Tentang Kami",
};

export default function TentangPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-12">
      <Image
        src="/logo-nusafit.png"
        alt={BRAND_NAME}
        width={600}
        height={600}
        className="h-32 w-32 sm:h-40 sm:w-40 object-contain"
      />
      <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand bg-brand-soft px-3 py-1 rounded-full mt-6">
        Tentang Kami
      </span>
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold mt-4">{BRAND_NAME}</h1>
      <p className="text-accent font-medium mt-2">{BRAND_TAGLINE}</p>

      <div className="mt-8 space-y-4">
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

      <div className="mt-10 rounded-lg bg-brand-soft p-6 text-center">
        <p className="font-serif text-lg text-brand-dark">&ldquo;{BRAND_TAGLINE}&rdquo;</p>
      </div>
    </div>
  );
}

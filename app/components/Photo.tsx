import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Renders a real photograph from /public once the file has been uploaded.
 *
 * Photography for the site is supplied by the business (own dish photos or
 * licensed stock), so until a given file exists we render a branded panel in
 * its place. Existence is resolved on the server at render/build time, which
 * means dropping the file into /public and redeploying is all that is needed
 * to swap a placeholder for the real image — no code change.
 */

export type PhotoProps = {
  /** Path relative to /public, e.g. "photos/hero.jpg" */
  src: string;
  alt: string;
  /** Shown inside the placeholder so it is obvious which photo belongs here. */
  label: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

function photoExists(src: string) {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden flex items-end ${className}`}
      style={{
        background:
          "linear-gradient(135deg, var(--brand-dark) 0%, var(--brand) 55%, color-mix(in srgb, var(--accent) 65%, var(--brand)) 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,.16) 0 2px, transparent 2px 16px)",
        }}
      />
      <div className="relative p-4">
        <p className="font-serif text-white text-base leading-tight drop-shadow">{label}</p>
        <p className="text-[10px] uppercase tracking-wider text-white/70 mt-1">Foto menyusul</p>
      </div>
    </div>
  );
}

export function Photo({ src, alt, label, className = "", sizes, priority }: PhotoProps) {
  if (!photoExists(src)) {
    return <Placeholder label={label} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={`/${src}`}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 640px) 100vw, 33vw"}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

/** True when the photo is available — lets a section adapt its layout. */
export function hasPhoto(src: string) {
  return photoExists(src);
}

import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME } from "@/app/lib/constants";

const NAV_LINKS = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/#testimoni", label: "Testimoni" },
  { href: "/menu", label: "Menu 90 Hari" },
];

export function PublicHeader() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-5 py-3">
        <div className="flex items-center justify-between gap-3">
          {/* Logo and wordmark scale down on phones so they cannot collide with the CTA. */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Image
              src="/logo-nusafit.png"
              alt={BRAND_NAME}
              width={600}
              height={600}
              priority
              className="h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain shrink-0"
            />
            <span
              className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent leading-none"
              style={{ backgroundImage: "linear-gradient(135deg, var(--brand) 0%, var(--accent) 100%)" }}
            >
              {BRAND_NAME}
            </span>
          </Link>

          <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/daftar"
            className="shrink-0 whitespace-nowrap rounded-full bg-accent text-white px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-bold shadow-lg shadow-accent/30 hover:scale-105 hover:brightness-110 transition-all"
          >
            Daftar Sekarang
          </Link>
        </div>

        {/* On phones the links move to their own row instead of disappearing. */}
        <nav className="sm:hidden flex items-center gap-5 text-sm mt-2.5 overflow-x-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

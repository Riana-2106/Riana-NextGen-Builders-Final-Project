import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME } from "@/app/lib/constants";

export function PublicHeader() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-nusafit.png"
            alt={BRAND_NAME}
            width={600}
            height={600}
            priority
            className="h-16 w-16 object-contain"
          />
          <span
            className="font-serif text-3xl font-bold bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--brand) 0%, var(--accent) 100%)" }}
          >
            {BRAND_NAME}
          </span>
        </Link>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm">
          <Link href="/tentang" className="hidden sm:inline text-muted hover:text-foreground transition-colors">
            Tentang Kami
          </Link>
          <Link href="/menu" className="hidden sm:inline text-muted hover:text-foreground transition-colors">
            Menu 90 Hari
          </Link>
          <Link
            href="/daftar"
            className="rounded-full bg-accent text-white px-6 py-3 text-base font-bold shadow-lg shadow-accent/30 hover:scale-105 hover:brightness-110 transition-all"
          >
            Daftar Sekarang
          </Link>
        </nav>
      </div>
    </header>
  );
}

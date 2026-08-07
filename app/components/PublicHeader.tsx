import Link from "next/link";
import { BRAND_NAME } from "@/app/lib/constants";

export function PublicHeader() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-lg font-semibold text-foreground">
          {BRAND_NAME}
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5 text-sm">
          <Link href="/tentang" className="text-muted hover:text-foreground transition-colors">
            Tentang Kami
          </Link>
          <Link href="/menu" className="text-muted hover:text-foreground transition-colors">
            Menu 90 Hari
          </Link>
          <Link
            href="/daftar"
            className="rounded-full bg-brand text-white px-4 py-2 font-medium hover:bg-brand-dark transition-colors"
          >
            Daftar Sekarang
          </Link>
        </nav>
      </div>
    </header>
  );
}

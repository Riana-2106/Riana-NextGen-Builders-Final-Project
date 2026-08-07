import Link from "next/link";
import Image from "next/image";
import { BRAND_NAME } from "@/app/lib/constants";

export function PublicHeader() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-nusafit.png"
            alt={BRAND_NAME}
            width={1254}
            height={1254}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="font-serif text-lg font-semibold text-foreground">{BRAND_NAME}</span>
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

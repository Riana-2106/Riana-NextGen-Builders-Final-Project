import Link from "next/link";
import { BRAND_NAME, BRAND_TAGLINE } from "@/app/lib/constants";

export function PublicFooter() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-5 py-8 text-sm text-muted flex flex-col sm:flex-row justify-between gap-2">
        <span>
          {BRAND_NAME} — {BRAND_TAGLINE}
        </span>
        <Link href="/tentang" className="hover:text-foreground transition-colors">
          Tentang Kami
        </Link>
      </div>
    </footer>
  );
}

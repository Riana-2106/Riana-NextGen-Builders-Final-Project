import type { Metadata } from "next";
import "./globals.css";
import { BRAND_NAME, BRAND_TAGLINE } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    template: `%s — ${BRAND_NAME}`,
  },
  description:
    "NusaFit, layanan catering makanan sehat dari Nusantara Heritage: program Tantangan 90 Hari Hidup Sehat dengan menu harian yang variatif.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}

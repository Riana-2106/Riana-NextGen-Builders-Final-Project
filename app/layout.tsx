import type { Metadata } from "next";
import "./globals.css";
import { BRAND_NAME, BRAND_TAGLINE, CHALLENGE_NAME } from "@/app/lib/constants";

// Also the text shown on link-preview cards when the site is shared.
const DESCRIPTION =
  `${BRAND_NAME}, layanan catering makanan sehat dari Nusantara Heritage. ` +
  `${CHALLENGE_NAME} 30, 60, atau 90 hari dengan menu harian yang variatif, ` +
  `bergizi, dan diantar tepat waktu.`;

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    template: `%s — ${BRAND_NAME}`,
  },
  description: DESCRIPTION,
  openGraph: {
    title: `${BRAND_NAME} — ${BRAND_TAGLINE}`,
    description: DESCRIPTION,
    siteName: BRAND_NAME,
    locale: "id_ID",
    type: "website",
  },
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

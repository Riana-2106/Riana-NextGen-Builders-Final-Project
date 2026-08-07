import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tantangan 90 Hari Hidup Sehat — Healthy Catering",
    template: "%s — Tantangan 90 Hari Hidup Sehat",
  },
  description:
    "Daftar program catering sehat 90 hari untuk penurunan berat badan, lengkap dengan menu harian yang variatif.",
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

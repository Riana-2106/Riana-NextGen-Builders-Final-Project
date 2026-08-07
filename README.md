# 90 Hari Hidup Sehat — Healthy Catering

Final project **NextGen Builders Framework**, dibangun dengan Claude Code dan dideploy via Vercel.

Aplikasi web untuk catering sehat dengan program **"Tantangan 90 Hari Hidup Sehat & Penurunan
Berat Badan"**: customer baru bisa mendaftar dan melihat menu 90 hari langsung dari web, sementara
admin/owner mengelola seluruh pendaftar dari satu dashboard — menggantikan pencatatan manual lewat
WhatsApp/Email yang rawan slow response dan data ganda.

## Fitur utama (MVP)

- **Halaman publik** — perkenalan program, daftar paket, dan katalog menu 90 hari (dikelompokkan
  per minggu, per hari, per waktu makan) di `/menu`.
- **Form pendaftaran** (`/daftar`) — tersimpan langsung ke database, dengan validasi anti-duplikasi
  berbasis nomor HP/email sehingga pendaftaran tidak pernah tercatat ganda atau terlewat.
- **Dashboard admin** (`/admin`, dilindungi login) — daftar seluruh pendaftar dengan pencarian,
  filter status, dan ubah status per pendaftar (Baru → Dihubungi → Aktif → Selesai/Dibatalkan).
- **Menu 90 hari** — dirotasi otomatis dari kumpulan menu sehat sehingga jarang berulang selama
  program berjalan.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Actions) + TypeScript + Tailwind CSS v4
- [Prisma 7](https://prisma.io) + PostgreSQL (driver adapter `@prisma/adapter-pg`)
- Autentikasi admin sederhana berbasis cookie (satu password bersama, sesuai skala tim kecil)

## Menjalankan secara lokal

1. Siapkan database PostgreSQL, lalu salin `.env.example` menjadi `.env` dan isi:
   - `DATABASE_URL` — connection string PostgreSQL
   - `ADMIN_PASSWORD` — password login dashboard admin
   - `ADMIN_SESSION_TOKEN` — token acak (generate dengan perintah yang ada di `.env.example`)
2. Install dependencies dan siapkan skema database:
   ```bash
   npm install
   npx prisma migrate dev
   npm run db:seed   # mengisi menu 90 hari
   ```
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

## Deploy ke Vercel

1. Buat database PostgreSQL terkelola (Vercel Postgres, Neon, atau Supabase — semuanya punya free
   tier). Filesystem Vercel bersifat sementara (ephemeral), jadi **jangan** pakai SQLite/file lokal
   di production.
2. Set environment variables di Vercel: `DATABASE_URL`, `ADMIN_PASSWORD`, `ADMIN_SESSION_TOKEN`.
3. Jalankan `npx prisma migrate deploy` (bisa lewat build command atau sekali secara manual) agar
   skema tabel tersedia di database production.
4. Jalankan `npm run db:seed` sekali untuk mengisi menu 90 hari awal.
5. Deploy repo ini ke Vercel seperti proyek Next.js pada umumnya.

## Roadmap lanjutan (v2)

Diprioritaskan berdasarkan tahap *Ship Bravely* (Listen Deeply → Iterate Fast):

- Notifikasi otomatis (email/WhatsApp) ke admin saat ada pendaftar baru
- Integrasi pembayaran online
- Portal login customer untuk tracking progres harian & centang menu yang sudah dimakan
- Personalisasi menu berdasarkan alergi/preferensi

## Dokumen strategi

Analisis lengkap *See Clearly → Constraint → Imagine Boldly → Ship Bravely* untuk proyek ini
didokumentasikan terpisah sebagai artifact strategi (lihat riwayat percakapan pembangunan proyek).

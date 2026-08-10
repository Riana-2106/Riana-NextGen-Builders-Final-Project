# Foto Landing Page NusaFit

Taruh file foto di folder ini dengan **nama persis** seperti di tabel bawah.
Begitu file di-upload dan deploy berjalan, foto otomatis muncul menggantikan
panel placeholder — tidak perlu ubah kode sama sekali.

| Nama file | Isi foto | Rasio | Saran ukuran |
| --- | --- | --- | --- |
| `hero.jpg` | Foto utama paling menarik (meja penuh hidangan sehat / paket NusaFit) | lebar | 1920 × 1080 |
| `influencer.jpg` | Foto gaya hidup: seseorang menikmati hidangan sehat | potret 4:5 | 800 × 1000 |
| `why-variasi.jpg` | Beberapa hidangan berbeda, menunjukkan variasi menu | 4:3 | 800 × 600 |
| `why-gizi.jpg` | Hidangan tertata rapi / proses penyusunan menu | 4:3 | 800 × 600 |
| `why-fleksibel.jpg` | Proses pengantaran / kurir / paket siap antar | 4:3 | 800 × 600 |
| `menu-1.jpg` … `menu-6.jpg` | Foto 6 menu favorit (urutan sesuai daftar di beranda) | persegi 1:1 | 800 × 800 |
| `testi-1.jpg` … `testi-3.jpg` | Foto pelanggan asli (opsional — lihat catatan) | 4:3 | 800 × 600 |

---

## Di mana cari fotonya

Situs berikut menyediakan foto **gratis dan boleh dipakai komersial**. Klik link,
pilih foto, klik Download, lalu ganti namanya sesuai tabel di atas.

**Foto makanan sehat:**
- Pexels — https://www.pexels.com/search/healthy%20food/
- Unsplash — https://unsplash.com/s/photos/healthy-food
- Pixabay — https://pixabay.com/images/search/healthy%20food/

**Foto masakan Indonesia (biar terasa Nusantara):**
- Pexels — https://www.pexels.com/search/indonesian%20food/
- Unsplash — https://unsplash.com/s/photos/indonesian-food
- Untuk menu spesifik, cari langsung: `soto ayam`, `rendang`, `gado gado`, `nasi merah`

**Foto meal prep / catering box:**
- Pexels — https://www.pexels.com/search/meal%20prep/
- Unsplash — https://unsplash.com/s/photos/meal-prep

**Foto gaya hidup (untuk `influencer.jpg`):**
- Pexels — https://www.pexels.com/search/woman%20eating%20healthy/
- Unsplash — https://unsplash.com/s/photos/eating-healthy

**Foto pengantaran (untuk `why-fleksibel.jpg`):**
- Pexels — https://www.pexels.com/search/food%20delivery/

> Paling bagus tetap **foto masakan NusaFit / Nusantara Heritage sendiri** —
> lebih autentik dan pelanggan melihat makanan yang benar-benar mereka terima.
> Foto stok cocok dipakai sementara sampai sesi foto sendiri siap.

---

## Ketentuan penting

**Jangan pakai foto milik kompetitor.** Foto dari website atau materi promosi
kompetitor dilindungi hak cipta dan memuat merek serta model yang mereka bayar.
Memakainya di website NusaFit berisiko hukum untuk bisnis.

**Foto orang harus jujur konteksnya:**

- `influencer.jpg` saat ini dipakai sebagai **foto gaya hidup** — halaman tidak
  mencantumkan nama atau kutipan pribadi siapa pun, jadi aman memakai foto stok.
- Kalau nanti sudah ada **kerja sama influencer sungguhan**, buka
  `app/lib/constants.ts` → ubah `INFLUENCER.isRealPartner` jadi `true`, isi
  `name`, `handle`, `reach`, dan `partnerHeadline` + `partnerProlog` dengan
  kata-kata mereka sendiri (seizin yang bersangkutan), lalu upload fotonya.
- `testi-1.jpg` … `testi-3.jpg` **hanya untuk pelanggan asli yang sudah memberi
  izin.** Jangan isi dengan foto model stok — itu membuat testimoni terlihat
  seperti pelanggan nyata padahal bukan. Kalau belum ada, biarkan kosong: kartu
  testimoni otomatis tampil rapi tanpa foto.

---

## Cara upload lewat GitHub

1. Buka folder ini di GitHub → tombol **Add file** → **Upload files**
2. Seret semua foto (nama file harus sesuai tabel di atas)
3. **Commit changes** — Vercel akan otomatis build ulang dan foto langsung tampil

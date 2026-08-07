import Link from "next/link";
import { PACKAGE_OPTIONS } from "@/app/lib/constants";

const HIGHLIGHTS = [
  {
    title: "90 hari menu tanpa bosan",
    description:
      "Sarapan, makan siang, makan malam, dan snack disusun bergilir sehingga menu jarang terulang selama program berjalan.",
  },
  {
    title: "Daftar dalam 2 menit",
    description:
      "Isi satu formulir singkat — data kamu langsung tersimpan, tidak perlu menunggu balasan chat admin.",
  },
  {
    title: "Tidak ada pendaftaran ganda",
    description:
      "Sistem otomatis mengenali nomor HP/email yang sama, jadi data kamu tidak akan tercatat dobel atau terlewat.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Pilih paket",
    description: "Tentukan paket makan yang sesuai kebutuhan harianmu.",
  },
  {
    step: "2",
    title: "Isi formulir pendaftaran",
    description: "Data diri, target program, dan tanggal mulai — langsung tersimpan ke sistem kami.",
  },
  {
    step: "3",
    title: "Menu 90 hari dimulai",
    description: "Tim kami menghubungi kamu untuk konfirmasi, lalu pengantaran menu harian dimulai.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-5 pt-16 pb-20">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand bg-brand-soft px-3 py-1 rounded-full">
          Program 90 Hari
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold mt-5 max-w-2xl text-balance">
          Tantangan 90 Hari Hidup Sehat &amp; Penurunan Berat Badan
        </h1>
        <p className="text-muted text-lg mt-5 max-w-xl">
          Catering sehat dengan menu harian yang variatif, dan sistem pendaftaran yang tidak akan
          membuat kamu menunggu lama atau terlewat karena antrian chat.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/daftar"
            className="rounded-full bg-accent text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Daftar Program Sekarang
          </Link>
          <Link
            href="/menu"
            className="rounded-full border border-border px-6 py-3 font-medium hover:bg-surface-alt transition-colors"
          >
            Lihat Menu 90 Hari
          </Link>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-5 py-16 grid sm:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-16">
        <h2 className="font-serif text-2xl font-semibold">Cara kerjanya</h2>
        <div className="mt-8 grid sm:grid-cols-3 gap-6">
          {STEPS.map((item) => (
            <div key={item.step} className="rounded-lg border border-border bg-surface p-5">
              <span className="font-serif text-2xl text-brand">{item.step}</span>
              <h3 className="font-semibold mt-2">{item.title}</h3>
              <p className="text-sm text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="max-w-5xl mx-auto px-5 py-16">
          <h2 className="font-serif text-2xl font-semibold">Pilih paket sesuai kebutuhanmu</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {PACKAGE_OPTIONS.map((pkg) => (
              <div key={pkg.id} className="rounded-lg bg-surface border border-border p-5">
                <h3 className="font-semibold">{pkg.name}</h3>
                <p className="text-sm text-muted mt-2">{pkg.description}</p>
              </div>
            ))}
          </div>
          <Link
            href="/daftar"
            className="inline-block mt-8 rounded-full bg-brand text-white px-6 py-3 font-medium hover:bg-brand-dark transition-colors"
          >
            Mulai Daftar
          </Link>
        </div>
      </section>
    </div>
  );
}

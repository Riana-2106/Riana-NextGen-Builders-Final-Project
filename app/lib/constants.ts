export const CHALLENGE_NAME = "Healthy Challenge";

export const BRAND_NAME = "NusaFit";
export const BRAND_TAGLINE = "Healthy Food for a Better Life.";

export const BRAND_STORY = [
  "NUSANTARA HERITAGE adalah restoran keluarga premium yang menyajikan kekayaan kuliner Nusantara dari seluruh penjuru Indonesia dalam satu atap yang hangat dan berkelas. Berlokasi strategis di kawasan Alam Sutera.",
  "Kini hadir dengan menyajikan layanan catering makanan sehat dengan brand yang bernama “NusaFit” siap melayani semua orang yang berkomitmen untuk hidup sehat dan ingin membentuk berat badan secara ideal.",
];

export const BRAND_VISION =
  "Menjadi penyedia catering makanan sehat terpercaya yang membangun gaya hidup sehat melalui makanan bergizi, lezat dan praktis sehingga menginspirasi jutaan orang untuk hidup lebih sehat melalui makanan yang bernutrisi dan mudah dinikmati setiap hari dengan pelayanan dan manajemen yang baik.";

export const BRAND_MISSION = [
  "Menyediakan menu sehat yang disusun dengan memperhatikan keseimbangan nutrisi.",
  "Menggunakan bahan baku segar dan berkualitas setiap hari.",
  "Menyajikan makanan sehat dengan cita rasa yang lezat dan tidak membosankan.",
  "Membantu pelanggan membangun kebiasaan makan yang lebih baik melalui program catering yang terencana.",
  "Memberikan pelayanan yang cepat, higienis, dan terpercaya.",
  "Terus berinovasi dalam menu sesuai kebutuhan pelanggan.",
  "Memberikan pelayanan pengantaran makanan yang tepat waktu, ramah, dan siap melayani customer.",
];

export const CORE_VALUES = [
  { letter: "H", title: "Healthy Lifestyle", description: "Mendorong pola hidup sehat dalam setiap menu dan layanan yang kami berikan." },
  { letter: "E", title: "Excellence", description: "Menjaga standar kualitas terbaik di setiap proses, dari dapur hingga pengantaran." },
  { letter: "A", title: "Accountability", description: "Bertanggung jawab penuh atas setiap pesanan dan komitmen kepada pelanggan." },
  { letter: "L", title: "Love & Care", description: "Menyiapkan setiap hidangan dengan kepedulian tulus terhadap kesehatan pelanggan." },
  { letter: "T", title: "Trust", description: "Membangun kepercayaan lewat konsistensi rasa, kualitas, dan pelayanan." },
  { letter: "H", title: "Honesty", description: "Jujur dan transparan soal bahan baku, nilai gizi, dan proses penyajian." },
] as const;

export type NusaFitPackage = {
  id: string;
  name: string;
  price: number;
  menu: string;
  description: string;
  delivery: string;
};

export type NusaFitProgram = {
  id: string;
  name: string;
  days: number;
  duration: string;
  target: string;
  packages: NusaFitPackage[];
};

export const PROGRAMS: NusaFitProgram[] = [
  {
    id: "30",
    name: "Healthy Life_30",
    days: 30,
    duration: "30 Hari (1 Bulan)",
    target: "Turun Berat Badan 1-2 kg",
    packages: [
      {
        id: "total",
        name: "NusaFit Total",
        price: 3_000_000,
        menu: "Sarapan + Lunch + Dinner + Snack",
        description: "Program paling lengkap",
        delivery: "2 kali pengantaran pagi dan siang",
      },
      {
        id: "balance",
        name: "NusaFit Balance",
        price: 2_250_000,
        menu: "Lunch + Dinner",
        description: "Pilihan praktis & ekonomis",
        delivery: "1 kali pengantaran siang",
      },
      {
        id: "light",
        name: "NusaFit Light",
        price: 1_000_000,
        menu: "Sarapan + Snack",
        description: "Pendamping pola makan sendiri",
        delivery: "1 kali pengantaran pagi",
      },
    ],
  },
  {
    id: "60",
    name: "Healthy Life_60",
    days: 60,
    duration: "60 Hari (2 Bulan)",
    target: "Turun Berat Badan 3-5 kg",
    packages: [
      {
        id: "total",
        name: "NusaFit Total",
        price: 5_750_000,
        menu: "Sarapan + Lunch + Dinner + Snack",
        description: "Program paling lengkap",
        delivery: "2 kali pengantaran pagi dan siang",
      },
      {
        id: "balance",
        name: "NusaFit Balance",
        price: 4_250_000,
        menu: "Lunch + Dinner",
        description: "Pilihan praktis & ekonomis",
        delivery: "1 kali pengantaran siang",
      },
      {
        id: "light",
        name: "NusaFit Light",
        price: 1_950_000,
        menu: "Sarapan + Snack",
        description: "Pendamping pola makan sendiri",
        delivery: "1 kali pengantaran pagi",
      },
    ],
  },
  {
    id: "90",
    name: "Healthy Life_90",
    days: 90,
    duration: "90 Hari (3 Bulan)",
    target: "Turun Berat Badan 6-8 kg",
    packages: [
      {
        id: "total",
        name: "NusaFit Total",
        price: 8_250_000,
        menu: "Sarapan + Lunch + Dinner + Snack",
        description: "Program paling lengkap",
        delivery: "2 kali pengantaran pagi dan siang",
      },
      {
        id: "balance",
        name: "NusaFit Balance",
        price: 6_250_000,
        menu: "Lunch + Dinner",
        description: "Pilihan praktis & ekonomis",
        delivery: "1 kali pengantaran siang",
      },
      {
        id: "light",
        name: "NusaFit Light",
        price: 2_850_000,
        menu: "Sarapan + Snack",
        description: "Pendamping pola makan sendiri",
        delivery: "1 kali pengantaran pagi",
      },
    ],
  },
];

export function findPackage(programId: string, packageId: string) {
  const program = PROGRAMS.find((p) => p.id === programId);
  const pkg = program?.packages.find((p) => p.id === packageId);
  if (!program || !pkg) return null;
  return { program, pkg };
}

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const STATUS_LABEL: Record<string, string> = {
  BARU: "Baru",
  DIHUBUNGI: "Dihubungi",
  AKTIF: "Aktif",
  SELESAI: "Selesai",
  DIBATALKAN: "Dibatalkan",
};

export const MEAL_LABEL: Record<string, string> = {
  SARAPAN: "Sarapan",
  MAKAN_SIANG: "Makan Siang",
  MAKAN_MALAM: "Makan Malam",
  SNACK: "Snack",
};

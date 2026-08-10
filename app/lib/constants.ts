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

/**
 * Photography and endorsement content.
 *
 * Every `photo` path below points into /public. Until a file is uploaded there
 * the UI renders a branded placeholder panel in its place (see components/Photo).
 *
 * NOTE: the influencer identity and the customer testimonials below are sample
 * copy — replace them with a real brand partner and real customer quotes before
 * treating them as published claims.
 */

export const INFLUENCER = {
  name: "Nama Influencer",
  handle: "@akun_influencer",
  reach: "120rb+ pengikut",
  badge: "Brand Partner NusaFit",
  photo: "photos/influencer.jpg",
  headline: "“Aku nggak percaya diet bisa seenak ini.”",
  prolog: [
    "Jujur, aku sudah coba banyak cara buat hidup lebih sehat. Masak sendiri tiap pagi? Cuma bertahan seminggu. Beli di luar? Bingung kalorinya berapa, ujung-ujungnya balik lagi ke gorengan.",
    "Sejak pakai NusaFit, semuanya jadi gampang. Tiap hari makanan datang tepat waktu, menunya khas Nusantara yang aku suka, dan rasanya beneran enak — bukan makanan diet yang hambar. Badan terasa lebih ringan, dan aku nggak perlu mikirin \"hari ini makan apa\" lagi.",
    "Kalau kamu lagi cari titik mulai buat hidup lebih sehat, mulai dari piringmu. Aku sudah buktiin, sekarang giliran kamu.",
  ],
} as const;

export const MENU_HIGHLIGHTS = [
  {
    photo: "photos/menu-1.jpg",
    name: "Grilled Chicken Salad Bowl",
    description: "Ayam panggang, sayuran segar, dan saus rendah kalori — renyah di setiap suapan.",
  },
  {
    photo: "photos/menu-2.jpg",
    name: "Nusantara Protein Box",
    description: "Nasi merah, lauk khas daerah, dan sayur bening — kaya rasa, tetap ringan.",
  },
  {
    photo: "photos/menu-3.jpg",
    name: "Soto Ayam Sehat",
    description: "Kuah gurih rendah minyak dengan potongan ayam tanpa kulit dan tauge segar.",
  },
  {
    photo: "photos/menu-4.jpg",
    name: "Avocado Power Bowl",
    description: "Alpukat, quinoa, dan telur rebus — sarapan padat gizi untuk energi seharian.",
  },
  {
    photo: "photos/menu-5.jpg",
    name: "Fruit & Yogurt Snack",
    description: "Potongan buah musiman dengan yogurt rendah lemak, camilan manis tanpa rasa bersalah.",
  },
  {
    photo: "photos/menu-6.jpg",
    name: "Rendang Daging Lean",
    description: "Rendang khas Nusantara versi ramah diet — bumbu autentik, minyak jauh berkurang.",
  },
] as const;

export const WHY_NUSAFIT = [
  {
    photo: "photos/why-variasi.jpg",
    title: "Varian Menu Lezat & Higienis",
    description:
      "Puluhan menu khas daerah dan western sehat, selalu segar dan higienis. Setiap hari terasa seperti kulineran keliling Nusantara.",
  },
  {
    photo: "photos/why-gizi.jpg",
    title: "Disusun Sesuai Kebutuhan Gizi",
    description:
      "Setiap menu dirancang seimbang antara protein, karbohidrat, dan serat — enak dinikmati, tetap mendukung target kesehatanmu.",
  },
  {
    photo: "photos/why-fleksibel.jpg",
    title: "Fleksibel & Tepat Waktu",
    description:
      "Atur jadwal dan alamat pengantaran sesuai ritme harimu. Tim kami mengantar tepat waktu, tanpa drama.",
  },
] as const;

export const COMPARISON = {
  left: "Masak / Beli Sendiri",
  right: "NusaFit",
  rows: [
    {
      aspect: "Pilihan Menu",
      left: "Itu-itu saja setiap hari",
      right: "Menu Nusantara & western bergilir tiap hari",
    },
    {
      aspect: "Waktu & Tenaga",
      left: "Belanja, masak, dan beres-beres tiap hari",
      right: "Diantar langsung — tinggal makan",
    },
    {
      aspect: "Nutrisi",
      left: "Kalori dan porsi sulit dihitung sendiri",
      right: "Porsi dan gizi sudah disusun terukur",
    },
    {
      aspect: "Konsistensi",
      left: "Sering bolong saat sibuk",
      right: "Program berjalan 30/60/90 hari penuh",
    },
    {
      aspect: "Pendaftaran",
      left: "Menunggu balasan chat berjam-jam",
      right: "Daftar online, langsung tercatat di sistem",
    },
  ],
} as const;

export const TESTIMONIALS = [
  {
    name: "Sarah A.",
    role: "Pelanggan Healthy Life_60",
    photo: "photos/testi-1.jpg",
    rating: 5,
    quote:
      "Berat badan turun 4 kg dalam 2 bulan tanpa harus masak sendiri. Menunya ganti-ganti terus, jadi nggak bosan!",
  },
  {
    name: "Budi P.",
    role: "Pelanggan Healthy Life_90",
    photo: "photos/testi-2.jpg",
    rating: 5,
    quote:
      "Awalnya ragu makanan diet itu hambar, ternyata rasanya enak banget. Pengantarannya juga selalu tepat waktu.",
  },
  {
    name: "Dewi R.",
    role: "Pelanggan Healthy Life_30",
    photo: "photos/testi-3.jpg",
    rating: 5,
    quote:
      "Daftarnya cepat, nggak perlu nunggu balasan chat berjam-jam. Dalam sehari langsung dikonfirmasi tim NusaFit.",
  },
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

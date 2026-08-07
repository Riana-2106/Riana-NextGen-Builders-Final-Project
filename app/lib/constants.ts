export const PROGRAM_NAME = "Tantangan 90 Hari Hidup Sehat";

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

export const PACKAGE_OPTIONS = [
  {
    id: "lengkap",
    name: "Lengkap — Sarapan, Makan Siang, Makan Malam & Snack",
    description: "4x pengantaran per hari, paling sesuai untuk penurunan berat badan terstruktur.",
  },
  {
    id: "hemat",
    name: "Hemat — Makan Siang & Makan Malam",
    description: "2x pengantaran per hari untuk yang sudah sarapan sendiri di rumah.",
  },
  {
    id: "ringan",
    name: "Ringan — Sarapan & Snack",
    description: "2x pengantaran per hari, cocok sebagai pendamping pola makan siang/malam sendiri.",
  },
] as const;

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

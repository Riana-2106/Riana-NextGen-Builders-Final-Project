export const PROGRAM_NAME = "Tantangan 90 Hari Hidup Sehat";

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

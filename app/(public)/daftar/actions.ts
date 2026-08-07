"use server";

import { z } from "zod";
import { db } from "@/app/lib/db";
import { PACKAGE_OPTIONS } from "@/app/lib/constants";

const packageIds = PACKAGE_OPTIONS.map((pkg) => pkg.id) as [string, ...string[]];

const RegistrationSchema = z.object({
  fullName: z.string().trim().min(3, "Nama lengkap minimal 3 karakter."),
  phone: z
    .string()
    .trim()
    .min(9, "Nomor HP tidak valid.")
    .max(15, "Nomor HP tidak valid.")
    .regex(/^[0-9+]+$/, "Nomor HP hanya boleh berisi angka."),
  email: z.email("Format email tidak valid."),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  packageId: z.enum(packageIds, { message: "Pilih salah satu paket." }),
  goal: z.string().trim().max(200).optional().or(z.literal("")),
  startDate: z.string().refine((value) => !Number.isNaN(Date.parse(value)), {
    message: "Tanggal mulai tidak valid.",
  }),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

export type RegistrationState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function registerCustomer(
  _prevState: RegistrationState,
  formData: FormData
): Promise<RegistrationState> {
  const raw = Object.fromEntries(formData) as Record<string, string>;
  const parsed = RegistrationSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Periksa kembali data yang kamu isi.",
      fieldErrors,
    };
  }

  const data = parsed.data;
  const email = data.email.toLowerCase();

  const existing = await db.customer.findFirst({
    where: { OR: [{ phone: data.phone }, { email }] },
    select: { phone: true, email: true },
  });

  if (existing) {
    const isSamePhone = existing.phone === data.phone;
    return {
      status: "error",
      message: isSamePhone
        ? "Nomor HP ini sudah terdaftar di program kami. Tim kami akan segera menghubungi kamu."
        : "Email ini sudah terdaftar di program kami. Tim kami akan segera menghubungi kamu.",
    };
  }

  const selectedPackage = PACKAGE_OPTIONS.find((pkg) => pkg.id === data.packageId);

  try {
    await db.customer.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email,
        address: data.address || null,
        packageName: selectedPackage?.name ?? data.packageId,
        goal: data.goal || null,
        startDate: new Date(data.startDate),
        notes: data.notes || null,
      },
    });
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error && error.code === "P2002") {
      return {
        status: "error",
        message: "Nomor HP atau email ini sudah terdaftar di program kami.",
      };
    }
    throw error;
  }

  return {
    status: "success",
    message: "Pendaftaran berhasil! Tim kami akan menghubungi kamu untuk konfirmasi.",
  };
}

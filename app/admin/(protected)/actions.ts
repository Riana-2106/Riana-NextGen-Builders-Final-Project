"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { db } from "@/app/lib/db";
import { destroyAdminSession } from "@/app/lib/auth";

const VALID_STATUSES = ["BARU", "DIHUBUNGI", "AKTIF", "SELESAI", "DIBATALKAN"] as const;

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect("/admin/login");
}

export async function updateCustomerStatus(customerId: string, status: string) {
  if (!VALID_STATUSES.includes(status as (typeof VALID_STATUSES)[number])) {
    throw new Error("Status tidak valid.");
  }

  await db.customer.update({
    where: { id: customerId },
    data: { status: status as (typeof VALID_STATUSES)[number] },
  });

  revalidatePath("/admin");
  revalidatePath(`/admin/pelanggan/${customerId}`);
}

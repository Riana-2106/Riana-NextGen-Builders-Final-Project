"use server";

import { redirect } from "next/navigation";
import { createAdminSession } from "@/app/lib/auth";

export type LoginState = {
  error?: string;
};

export async function loginAdmin(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.ADMIN_PASSWORD;

  if (!expected) {
    return { error: "ADMIN_PASSWORD belum diset di server." };
  }

  if (password !== expected) {
    return { error: "Password salah." };
  }

  await createAdminSession();
  redirect("/admin");
}

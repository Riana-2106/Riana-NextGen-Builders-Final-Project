import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

function sessionToken() {
  const token = process.env.ADMIN_SESSION_TOKEN;
  if (!token) {
    throw new Error("ADMIN_SESSION_TOKEN belum diset di environment variables.");
  }
  return token;
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value === sessionToken();
}

export async function createAdminSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

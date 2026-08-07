import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdminAuthenticated } from "@/app/lib/auth";
import { logoutAdmin } from "./actions";

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/admin" className="font-serif text-lg font-semibold">
            Dashboard Admin
          </Link>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Keluar
            </button>
          </form>
        </div>
      </header>
      <main className="flex-1 bg-background">{children}</main>
    </div>
  );
}

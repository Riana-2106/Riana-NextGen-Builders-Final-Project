import { LoginForm } from "./LoginForm";

export const metadata = {
  title: "Login Admin",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-full flex items-center justify-center bg-background px-5">
      <div className="w-full max-w-sm rounded-lg border border-border bg-surface p-8">
        <h1 className="font-serif text-2xl font-semibold text-center">Dashboard Admin</h1>
        <p className="text-sm text-muted text-center mt-1">90 Hari Hidup Sehat</p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

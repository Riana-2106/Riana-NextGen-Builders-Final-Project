import { RegisterForm } from "./RegisterForm";

export const metadata = {
  title: "Daftar Program",
};

export default function DaftarPage() {
  return (
    <div className="max-w-xl mx-auto px-5 py-12">
      <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand bg-brand-soft px-3 py-1 rounded-full">
        Pendaftaran
      </span>
      <h1 className="font-serif text-3xl font-semibold mt-4">Daftar Tantangan 90 Hari</h1>
      <p className="text-muted mt-2">
        Isi data di bawah ini. Data kamu langsung tersimpan ke sistem kami — tidak perlu menunggu
        balasan chat.
      </p>
      <div className="mt-8">
        <RegisterForm />
      </div>
    </div>
  );
}

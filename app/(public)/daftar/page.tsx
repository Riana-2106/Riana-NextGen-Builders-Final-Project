import { Suspense } from "react";
import { RegisterForm } from "./RegisterForm";
import { PageHero } from "@/app/components/PageHero";
import { CHALLENGE_NAME } from "@/app/lib/constants";

export const metadata = {
  title: "Daftar Program",
};

export default function DaftarPage() {
  return (
    <div>
      <PageHero
        kicker="Pendaftaran"
        title={`Daftar ${CHALLENGE_NAME}`}
        subtitle="Isi data di bawah ini. Data kamu langsung tersimpan ke sistem kami — tidak perlu menunggu balasan chat."
      />
      <div className="max-w-2xl mx-auto px-5 py-12">
        <Suspense fallback={null}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
}

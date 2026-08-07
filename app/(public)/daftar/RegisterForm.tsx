"use client";

import { useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import { registerCustomer, type RegistrationState } from "./actions";
import { PROGRAMS, formatRupiah } from "@/app/lib/constants";

const initialState: RegistrationState = { status: "idle" };

function tomorrowISODate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-accent text-white px-6 py-4 text-lg font-semibold shadow-lg shadow-accent/30 hover:opacity-90 hover:shadow-xl transition-all disabled:opacity-60"
    >
      {pending ? "Mengirim..." : "Daftar Healthy Challenge"}
    </button>
  );
}

function fieldError(state: RegistrationState, field: string) {
  return state.fieldErrors?.[field];
}

export function RegisterForm() {
  const [state, formAction] = useActionState(registerCustomer, initialState);
  const searchParams = useSearchParams();

  const requestedProgram = searchParams.get("program");
  const requestedPackage = searchParams.get("package");

  const [programId, setProgramId] = useState(
    PROGRAMS.find((p) => p.id === requestedProgram)?.id ?? PROGRAMS[0].id
  );
  const activeProgram = PROGRAMS.find((p) => p.id === programId) ?? PROGRAMS[0];
  const [packageId, setPackageId] = useState(
    activeProgram.packages.find((p) => p.id === requestedPackage)?.id ?? activeProgram.packages[0].id
  );

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-brand bg-brand-soft p-6 text-center">
        <h2 className="font-serif text-xl font-semibold text-brand-dark">Pendaftaran Diterima</h2>
        <p className="text-sm text-foreground mt-2">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.status === "error" && state.message && !state.fieldErrors && (
        <div className="rounded-md bg-accent-soft text-accent text-sm px-4 py-3">{state.message}</div>
      )}

      <div>
        <label htmlFor="fullName" className="block text-sm font-medium mb-1">
          Nama Lengkap
        </label>
        <input
          id="fullName"
          name="fullName"
          required
          className="w-full rounded-md border border-border px-3 py-2 bg-surface"
        />
        {fieldError(state, "fullName") && (
          <p className="text-xs text-accent mt-1">{fieldError(state, "fullName")}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Nomor WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            required
            placeholder="08xxxxxxxxxx"
            className="w-full rounded-md border border-border px-3 py-2 bg-surface"
          />
          {fieldError(state, "phone") && (
            <p className="text-xs text-accent mt-1">{fieldError(state, "phone")}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-border px-3 py-2 bg-surface"
          />
          {fieldError(state, "email") && (
            <p className="text-xs text-accent mt-1">{fieldError(state, "email")}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">
          Alamat Pengantaran (opsional)
        </label>
        <input
          id="address"
          name="address"
          className="w-full rounded-md border border-border px-3 py-2 bg-surface"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">1. Pilih Durasi Healthy Challenge</label>
        <div className="grid sm:grid-cols-3 gap-3">
          {PROGRAMS.map((program) => (
            <label
              key={program.id}
              className="flex flex-col gap-1 rounded-lg border border-border p-3 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand-soft"
            >
              <input
                type="radio"
                name="programId"
                value={program.id}
                checked={programId === program.id}
                onChange={() => {
                  setProgramId(program.id);
                  setPackageId(program.packages[0].id);
                }}
                className="sr-only"
                required
              />
              <span className="text-sm font-semibold">{program.name}</span>
              <span className="text-xs text-muted">{program.duration}</span>
              <span className="text-xs text-brand-dark font-medium">{program.target}</span>
            </label>
          ))}
        </div>
        {fieldError(state, "programId") && (
          <p className="text-xs text-accent mt-1">{fieldError(state, "programId")}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">2. Pilih Paket</label>
        <div className="space-y-2">
          {activeProgram.packages.map((pkg) => (
            <label
              key={pkg.id}
              className="flex items-start gap-3 rounded-md border border-border p-3 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand-soft"
            >
              <input
                type="radio"
                name="packageId"
                value={pkg.id}
                checked={packageId === pkg.id}
                onChange={() => setPackageId(pkg.id)}
                className="mt-1"
                required
              />
              <span className="flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium">{pkg.name}</span>
                  <span className="text-sm font-semibold text-brand-dark whitespace-nowrap">
                    {formatRupiah(pkg.price)}
                  </span>
                </span>
                <span className="block text-xs text-muted mt-0.5">{pkg.menu}</span>
                <span className="block text-xs text-muted">{pkg.description} · {pkg.delivery}</span>
              </span>
            </label>
          ))}
        </div>
        {fieldError(state, "packageId") && (
          <p className="text-xs text-accent mt-1">{fieldError(state, "packageId")}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium mb-1">
            Tanggal Mulai
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            defaultValue={tomorrowISODate()}
            required
            className="w-full rounded-md border border-border px-3 py-2 bg-surface"
          />
          {fieldError(state, "startDate") && (
            <p className="text-xs text-accent mt-1">{fieldError(state, "startDate")}</p>
          )}
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-medium mb-1">
            Target Program (opsional)
          </label>
          <input
            id="goal"
            name="goal"
            placeholder="Contoh: turun 5 kg"
            className="w-full rounded-md border border-border px-3 py-2 bg-surface"
          />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-1">
          Catatan Alergi/Preferensi (opsional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="w-full rounded-md border border-border px-3 py-2 bg-surface"
        />
      </div>

      <SubmitButton />
    </form>
  );
}

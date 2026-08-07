"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { registerCustomer, type RegistrationState } from "./actions";
import { PACKAGE_OPTIONS } from "@/app/lib/constants";

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
      className="w-full rounded-full bg-accent text-white px-6 py-3 font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
    >
      {pending ? "Mengirim..." : "Daftar Program 90 Hari"}
    </button>
  );
}

function fieldError(state: RegistrationState, field: string) {
  return state.fieldErrors?.[field];
}

export function RegisterForm() {
  const [state, formAction] = useActionState(registerCustomer, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-brand bg-brand-soft p-6 text-center">
        <h2 className="font-serif text-xl font-semibold text-brand-dark">Pendaftaran Diterima</h2>
        <p className="text-sm text-foreground mt-2">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
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
        <label className="block text-sm font-medium mb-2">Pilih Paket</label>
        <div className="space-y-2">
          {PACKAGE_OPTIONS.map((pkg, index) => (
            <label
              key={pkg.id}
              className="flex items-start gap-3 rounded-md border border-border p-3 cursor-pointer has-[:checked]:border-brand has-[:checked]:bg-brand-soft"
            >
              <input
                type="radio"
                name="packageId"
                value={pkg.id}
                defaultChecked={index === 0}
                className="mt-1"
                required
              />
              <span>
                <span className="block text-sm font-medium">{pkg.name}</span>
                <span className="block text-xs text-muted">{pkg.description}</span>
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

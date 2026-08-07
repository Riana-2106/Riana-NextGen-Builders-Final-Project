"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAdmin, type LoginState } from "./actions";

const initialState: LoginState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-brand text-white px-6 py-2.5 font-medium hover:bg-brand-dark transition-colors disabled:opacity-60"
    >
      {pending ? "Memeriksa..." : "Masuk"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState(loginAdmin, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <div className="rounded-md bg-accent-soft text-accent text-sm px-4 py-3">{state.error}</div>
      )}
      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password Admin
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full rounded-md border border-border px-3 py-2 bg-surface"
        />
      </div>
      <SubmitButton />
    </form>
  );
}

"use client";

import { useTransition } from "react";
import { updateCustomerStatus } from "./actions";
import { STATUS_LABEL } from "@/app/lib/constants";

const STATUS_STYLES: Record<string, string> = {
  BARU: "bg-accent-soft text-accent",
  DIHUBUNGI: "bg-surface-alt text-foreground",
  AKTIF: "bg-brand-soft text-brand-dark",
  SELESAI: "bg-surface-alt text-muted",
  DIBATALKAN: "bg-surface-alt text-muted line-through",
};

export function StatusSelect({ customerId, status }: { customerId: string; status: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <select
      value={status}
      disabled={isPending}
      onChange={(e) => {
        const next = e.target.value;
        startTransition(() => {
          updateCustomerStatus(customerId, next);
        });
      }}
      className={`text-xs font-medium rounded-full px-3 py-1 border-0 cursor-pointer ${STATUS_STYLES[status] ?? "bg-surface-alt"}`}
    >
      {Object.entries(STATUS_LABEL).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

import Link from "next/link";
import { db } from "@/app/lib/db";
import { STATUS_LABEL } from "@/app/lib/constants";
import { StatusSelect } from "./StatusSelect";

export const metadata = {
  title: "Dashboard Admin",
};

const dateFormatter = new Intl.DateTimeFormat("id-ID", { dateStyle: "medium" });

export default async function AdminDashboardPage(props: PageProps<"/admin">) {
  const params = await props.searchParams;
  const q = typeof params.q === "string" ? params.q.trim() : "";
  const statusFilter = typeof params.status === "string" ? params.status : "";

  const [customers, statusCounts, total] = await Promise.all([
    db.customer.findMany({
      where: {
        AND: [
          statusFilter ? { status: statusFilter as never } : {},
          q
            ? {
                OR: [
                  { fullName: { contains: q, mode: "insensitive" } },
                  { phone: { contains: q } },
                  { email: { contains: q, mode: "insensitive" } },
                ],
              }
            : {},
        ],
      },
      orderBy: { createdAt: "desc" },
    }),
    db.customer.groupBy({ by: ["status"], _count: { _all: true } }),
    db.customer.count(),
  ]);

  const countByStatus = Object.fromEntries(statusCounts.map((s) => [s.status, s._count._all]));

  return (
    <div className="max-w-6xl mx-auto px-5 py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="font-serif text-2xl font-semibold">Pendaftar Program</h1>
        <span className="text-sm text-muted">{total} total pendaftar</span>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
        {Object.entries(STATUS_LABEL).map(([value, label]) => (
          <Link
            key={value}
            href={`/admin?status=${value}`}
            className={`rounded-lg border p-3 transition-colors ${
              statusFilter === value ? "border-brand bg-brand-soft" : "border-border bg-surface hover:bg-surface-alt"
            }`}
          >
            <div className="text-2xl font-serif font-semibold">{countByStatus[value] ?? 0}</div>
            <div className="text-xs text-muted mt-1">{label}</div>
          </Link>
        ))}
      </div>

      <form className="mt-6 flex flex-wrap gap-3" action="/admin" method="get">
        {statusFilter && <input type="hidden" name="status" value={statusFilter} />}
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Cari nama, nomor HP, atau email..."
          className="flex-1 min-w-[220px] rounded-md border border-border px-3 py-2 bg-surface text-sm"
        />
        <button
          type="submit"
          className="rounded-md bg-brand text-white px-4 py-2 text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          Cari
        </button>
        {(q || statusFilter) && (
          <Link
            href="/admin"
            className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-surface-alt transition-colors"
          >
            Reset
          </Link>
        )}
      </form>

      <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-surface">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-muted border-b border-border">
              <th className="px-4 py-3 font-medium">Nama</th>
              <th className="px-4 py-3 font-medium">Kontak</th>
              <th className="px-4 py-3 font-medium">Paket</th>
              <th className="px-4 py-3 font-medium">Mulai</th>
              <th className="px-4 py-3 font-medium">Didaftar</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b border-border last:border-0 hover:bg-surface-alt/60">
                <td className="px-4 py-3">
                  <Link href={`/admin/pelanggan/${customer.id}`} className="font-medium hover:text-brand">
                    {customer.fullName}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted whitespace-nowrap">
                  <div>{customer.phone}</div>
                  <div className="text-xs">{customer.email}</div>
                </td>
                <td className="px-4 py-3 text-muted">{customer.packageName}</td>
                <td className="px-4 py-3 text-muted whitespace-nowrap">
                  {dateFormatter.format(customer.startDate)}
                </td>
                <td className="px-4 py-3 text-muted whitespace-nowrap">
                  {dateFormatter.format(customer.createdAt)}
                </td>
                <td className="px-4 py-3">
                  <StatusSelect customerId={customer.id} status={customer.status} />
                </td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted">
                  Tidak ada pendaftar yang cocok.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

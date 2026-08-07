import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/app/lib/db";
import { StatusSelect } from "../../StatusSelect";

export const metadata = {
  title: "Detail Pendaftar",
};

const dateFormatter = new Intl.DateTimeFormat("id-ID", { dateStyle: "long" });

export default async function CustomerDetailPage(props: PageProps<"/admin/pelanggan/[id]">) {
  const { id } = await props.params;
  const customer = await db.customer.findUnique({ where: { id } });

  if (!customer) {
    notFound();
  }

  const fields: Array<[string, string]> = [
    ["Nomor WhatsApp", customer.phone],
    ["Email", customer.email],
    ["Alamat", customer.address ?? "—"],
    ["Paket", customer.packageName],
    ["Target Program", customer.goal ?? "—"],
    ["Tanggal Mulai", dateFormatter.format(customer.startDate)],
    ["Tanggal Daftar", dateFormatter.format(customer.createdAt)],
    ["Catatan Alergi/Preferensi", customer.notes ?? "—"],
  ];

  return (
    <div className="max-w-2xl mx-auto px-5 py-8">
      <Link href="/admin" className="text-sm text-muted hover:text-foreground">
        ← Kembali ke daftar
      </Link>

      <div className="mt-4 flex items-start justify-between gap-4">
        <h1 className="font-serif text-2xl font-semibold">{customer.fullName}</h1>
        <StatusSelect customerId={customer.id} status={customer.status} />
      </div>

      <dl className="mt-6 rounded-lg border border-border bg-surface divide-y divide-border">
        {fields.map(([label, value]) => (
          <div key={label} className="px-5 py-3 grid grid-cols-3 gap-4">
            <dt className="text-sm text-muted">{label}</dt>
            <dd className="text-sm col-span-2">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

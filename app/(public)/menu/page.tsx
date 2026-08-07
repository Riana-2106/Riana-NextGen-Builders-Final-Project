import Link from "next/link";
import { db } from "@/app/lib/db";
import { MEAL_LABEL } from "@/app/lib/constants";

const TOTAL_WEEKS = 13;

export const metadata = {
  title: "Menu 90 Hari",
};

export default async function MenuPage(props: PageProps<"/menu">) {
  const params = await props.searchParams;
  const requestedWeek = Number(params.minggu);
  const week = Number.isInteger(requestedWeek) && requestedWeek >= 1 && requestedWeek <= TOTAL_WEEKS
    ? requestedWeek
    : 1;

  const items = await db.menuItem.findMany({
    where: { weekNumber: week },
    orderBy: [{ dayNumber: "asc" }, { mealType: "asc" }],
  });

  const days = Array.from(new Set(items.map((item) => item.dayNumber))).sort((a, b) => a - b);

  return (
    <div className="max-w-5xl mx-auto px-5 py-12">
      <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand bg-brand-soft px-3 py-1 rounded-full">
        Katalog Menu
      </span>
      <h1 className="font-serif text-3xl font-semibold mt-4">Menu Sehat 90 Hari</h1>
      <p className="text-muted mt-2 max-w-2xl">
        Menu bergilir tiap hari untuk sarapan, makan siang, makan malam, dan snack — dijamin tidak
        berulang dalam waktu dekat.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map((w) => (
          <Link
            key={w}
            href={`/menu?minggu=${w}`}
            className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
              w === week
                ? "bg-brand text-white border-brand"
                : "border-border text-muted hover:bg-surface-alt"
            }`}
          >
            Minggu {w}
          </Link>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {days.map((day) => {
          const dayItems = items.filter((item) => item.dayNumber === day);
          return (
            <div key={day} className="rounded-lg border border-border bg-surface p-5">
              <h2 className="font-serif text-lg font-semibold">
                Hari ke-{day}
              </h2>
              <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {dayItems.map((item) => (
                  <div key={item.id} className="rounded-md bg-surface-alt p-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                      {MEAL_LABEL[item.mealType] ?? item.mealType}
                    </span>
                    <h3 className="font-medium text-sm mt-1">{item.name}</h3>
                    <p className="text-xs text-muted mt-1">{item.description}</p>
                    <div className="flex items-center justify-between mt-2 text-[11px] text-muted">
                      <span>{item.category}</span>
                      <span>{item.calories} kkal</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        {days.length === 0 && (
          <p className="text-muted text-sm">Menu untuk minggu ini belum tersedia.</p>
        )}
      </div>
    </div>
  );
}

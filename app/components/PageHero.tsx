export function PageHero({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 400px at 85% -20%, color-mix(in srgb, var(--accent) 25%, transparent), transparent 60%), linear-gradient(160deg, var(--brand-dark) 0%, var(--brand) 45%, var(--brand-soft) 100%)",
        }}
      />
      <div className="max-w-5xl mx-auto px-5 pt-14 pb-10">
        <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white bg-white/15 backdrop-blur px-3 py-1 rounded-full">
          {kicker}
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold mt-4 text-white text-balance">
          {title}
        </h1>
        {subtitle && <p className="text-white/90 mt-2 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="font-display text-xl tracking-tight text-white">
          AusPop
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#trend" className="transition hover:text-white">
            Trend
          </a>
          <a href="#states" className="transition hover:text-white">
            States
          </a>
          <a href="#lgas" className="transition hover:text-white">
            LGAs
          </a>
        </nav>
        <a
          href="#lgas"
          className="inline-flex h-8 items-center rounded-lg bg-white px-3 text-sm font-medium text-[var(--brand)] transition hover:bg-[var(--sand)]"
        >
          Explore growth
        </a>
      </div>
    </header>
  );
}

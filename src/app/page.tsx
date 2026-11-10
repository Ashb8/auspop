import { LgaExplorer } from "@/components/lga-explorer";
import { NationalTrendChart } from "@/components/national-trend-chart";
import { SiteHeader } from "@/components/site-header";
import { StateGrowthChart } from "@/components/state-growth-chart";
import {
  DATA_NOTE,
  getInsights,
  storyBeats,
} from "@/data/population";

export default function Home() {
  const { covid, latest, fastestState, metroShare } = getInsights();

  return (
    <div id="top" className="flex min-h-full flex-col">
      <SiteHeader />

      <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
        <div
          aria-hidden
          className="animate-drift absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#1fa6a0_0%,transparent_42%),radial-gradient(circle_at_80%_10%,#3d7a6b_0%,transparent_35%),linear-gradient(155deg,#0b241e_0%,#12352c_48%,#0f2f28_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-35"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <p className="animate-fade font-display text-5xl tracking-tight sm:text-7xl md:text-8xl">
            AusPop
          </p>
          <h1 className="animate-rise mt-6 max-w-3xl font-display text-3xl leading-tight tracking-tight sm:text-5xl">
            Australia didn’t just grow again — the rebound landed unevenly.
          </h1>
          <p
            className="animate-rise mt-5 max-w-xl text-base text-white/80 sm:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            A data story of national recovery after the {covid.year} dip, and
            the LGAs that absorbed most of the {storyBeats.reboundYears} surge.
          </p>
          <div
            className="animate-rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "200ms" }}
          >
            <a
              href="#trend"
              className="inline-flex h-11 items-center rounded-xl bg-white px-5 text-sm font-semibold text-[var(--brand)] transition hover:bg-[var(--sand)]"
            >
              Read the trend
            </a>
            <a
              href="#lgas"
              className="inline-flex h-11 items-center rounded-xl border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              See fastest LGAs
            </a>
          </div>
          <p className="mt-8 text-xs text-white/55">{DATA_NOTE}</p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-6xl flex-1 space-y-24 px-5 py-20 sm:px-8">
        <section id="trend" className="scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-teal)]">
            National trend
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            From a rare dip to a 20-year high in growth.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted-ink)]">
            Population growth fell to {covid.growthRate.toFixed(2)}% in{" "}
            {covid.year}, then climbed to {latest.growthRate.toFixed(2)}% by{" "}
            {latest.year} — taking Australia to about {storyBeats.latestPopulation}{" "}
            people.
          </p>
          <div className="mt-10 rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-4 backdrop-blur-sm sm:p-6">
            <NationalTrendChart />
          </div>
        </section>

        <section id="states" className="scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-teal)]">
            Where it landed
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            {storyBeats.topGrowthShareStates} carried most of the national add.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted-ink)]">
            {fastestState.state} led percentage growth at +
            {fastestState.growth202324}% in {storyBeats.reboundYears}, while the
            big three eastern states still dominate absolute contribution.
          </p>
          <div className="mt-10 rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-4 backdrop-blur-sm sm:p-6">
            <StateGrowthChart />
          </div>
        </section>

        <section id="lgas" className="scroll-mt-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-teal)]">
            Local growth
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-[var(--ink)] sm:text-4xl">
            Outer metro corridors absorbed the surge.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted-ink)]">
            About {metroShare}% of the featured high-growth LGAs sit in metro
            fringes — places like Wyndham, Melton, and Ipswich. Filter to compare
            metro and regional patterns.
          </p>
          <div className="mt-10 rounded-[1.5rem] border border-[var(--line)] bg-white/70 p-4 backdrop-blur-sm sm:p-6">
            <LgaExplorer />
          </div>
        </section>

        <section className="border-t border-[var(--line)] pt-12">
          <h2 className="font-display text-2xl tracking-tight text-[var(--ink)]">
            Method
          </h2>
          <p className="mt-3 max-w-3xl text-[var(--muted-ink)]">
            AusPop is a portfolio data story by Ashutosh Bhosale. Charts use
            sample ERP-style series for national, state, and LGA exploration —
            useful for storytelling and SQL/analytics practice, not for official
            reporting. Swap in a live ABS extract when you want production
            accuracy.
          </p>
        </section>
      </main>

      <footer className="border-t border-[var(--line)]/80 px-5 py-8 text-sm text-[var(--muted-ink)] sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-[var(--ink)]">AusPop</span>
          <span>
            Built for portfolio storytelling ·{" "}
            <a
              className="underline decoration-[var(--line)] underline-offset-4 hover:text-[var(--ink)]"
              href="https://github.com/Ashb8"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Ashb8
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

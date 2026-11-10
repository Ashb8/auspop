"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { formatPopulation, getInsights } from "@/data/population";

type Filter = "All" | "Metro" | "Regional";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "All", label: "All areas" },
  { id: "Metro", label: "Metro only" },
  { id: "Regional", label: "Regional only" },
];

function parseFilter(value: string | null): Filter {
  if (value === "Metro" || value === "Regional" || value === "All") return value;
  return "All";
}

export function LgaExplorer() {
  const searchParams = useSearchParams();
  const filter = parseFilter(searchParams.get("region"));
  const { lgas } = useMemo(() => getInsights(filter), [filter]);
  const maxGrowth = Math.max(...lgas.map((l) => l.growth202324), 1);

  return (
    <div className="space-y-6">
      <div className="relative z-10 space-y-3">
        <p className="text-sm font-medium text-[var(--muted-ink)]">
          Filter LGAs by region type
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="navigation"
          aria-label="Filter LGAs by region type"
        >
          {FILTERS.map((option) => {
            const active = filter === option.id;
            const href =
              option.id === "All" ? "/#lgas" : `/?region=${option.id}#lgas`;
            return (
              <Link
                key={option.id}
                href={href}
                scroll={false}
                data-testid={`lga-filter-${option.id.toLowerCase()}`}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "inline-flex min-h-11 min-w-[7.5rem] items-center justify-center rounded-xl bg-[var(--brand)] px-4 py-2.5 text-sm font-semibold text-[var(--brand-foreground)] shadow-sm"
                    : "inline-flex min-h-11 min-w-[7.5rem] items-center justify-center rounded-xl border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--brand)]/40 hover:bg-white"
                }
              >
                {option.label}
              </Link>
            );
          })}
        </div>
      </div>

      <p
        data-testid="lga-count"
        className="text-sm text-[var(--muted-ink)]"
        aria-live="polite"
      >
        Showing {lgas.length} LGA{lgas.length === 1 ? "" : "s"}
        {filter === "All" ? "" : ` · ${filter.toLowerCase()}`}
      </p>

      {lgas.length === 0 ? (
        <p className="text-[var(--muted-ink)]">No LGAs match this filter.</p>
      ) : (
        <ul className="space-y-3">
          {lgas.map((row, index) => (
            <li
              key={row.lga}
              className="animate-rise group grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4"
              style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
            >
              <span className="w-6 font-mono text-sm text-[var(--muted-ink)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="truncate font-medium text-[var(--ink)]">
                    {row.lga}
                  </span>
                  <span className="text-sm text-[var(--muted-ink)]">
                    {row.state}
                  </span>
                  <Badge
                    variant="secondary"
                    className="pointer-events-none shrink-0 bg-[var(--sand)] text-[var(--ink)]"
                  >
                    {row.region}
                  </Badge>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--line)]/60">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#1FA6A0,#12352C)] transition-[width] duration-700 ease-out"
                    style={{
                      width: `${(row.growth202324 / maxGrowth) * 100}%`,
                    }}
                  />
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-lg text-[var(--ink)]">
                  +{row.growth202324.toFixed(1)}%
                </div>
                <div className="text-xs text-[var(--muted-ink)]">
                  {formatPopulation(row.population2024)} people
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

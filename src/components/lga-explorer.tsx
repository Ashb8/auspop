"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { formatPopulation, getInsights } from "@/data/population";

type Filter = "All" | "Metro" | "Regional";

export function LgaExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const { lgas } = useMemo(() => getInsights(filter), [filter]);
  const maxGrowth = Math.max(...lgas.map((l) => l.growth202324), 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Region filter">
        {(["All", "Metro", "Regional"] as Filter[]).map((option) => {
          const active = filter === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={
                active
                  ? "inline-flex h-8 items-center rounded-lg bg-[var(--brand)] px-3 text-sm font-medium text-[var(--brand-foreground)]"
                  : "inline-flex h-8 items-center rounded-lg border border-[var(--line)] bg-white/70 px-3 text-sm font-medium text-[var(--ink)] transition hover:bg-white"
              }
            >
              {option}
            </button>
          );
        })}
      </div>

      {lgas.length === 0 ? (
        <p className="text-[var(--muted-ink)]">No LGAs match this filter.</p>
      ) : (
        <ul className="space-y-3">
          {lgas.map((row, index) => (
            <li
              key={row.lga}
              className="animate-rise group grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <span className="w-6 font-mono text-sm text-[var(--muted-ink)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="truncate font-medium text-[var(--ink)]">
                    {row.lga}
                  </span>
                  <span className="text-sm text-[var(--muted-ink)]">{row.state}</span>
                  <Badge
                    variant="secondary"
                    className="shrink-0 bg-[var(--sand)] text-[var(--ink)]"
                  >
                    {row.region}
                  </Badge>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--line)]/60">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#1FA6A0,#12352C)] transition-[width] duration-700 ease-out"
                    style={{ width: `${(row.growth202324 / maxGrowth) * 100}%` }}
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

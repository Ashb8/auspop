"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPopulation, getInsights } from "@/data/population";

type Filter = "All" | "Metro" | "Regional";

export function LgaExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const { lgas } = useMemo(() => getInsights(filter), [filter]);
  const maxGrowth = Math.max(...lgas.map((l) => l.growth202324), 1);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Region filter">
        {(["All", "Metro", "Regional"] as Filter[]).map((option) => (
          <Button
            key={option}
            type="button"
            size="sm"
            variant={filter === option ? "default" : "outline"}
            onClick={() => setFilter(option)}
            className={
              filter === option
                ? "bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand)]/90"
                : "border-[var(--line)] bg-white/50 text-[var(--ink)] hover:bg-white"
            }
          >
            {option}
          </Button>
        ))}
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
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="truncate font-medium text-[var(--ink)]">
                    {row.lga}
                  </span>
                  <span className="text-sm text-[var(--muted-ink)]">{row.state}</span>
                  <Badge
                    variant="secondary"
                    className="bg-[var(--sand)] text-[var(--ink)]"
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

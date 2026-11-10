"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { nationalTrend } from "@/data/population";
import { useElementSize } from "@/hooks/use-element-size";

function formatAxisPop(value: number) {
  return `${(value / 1_000_000).toFixed(0)}M`;
}

export function NationalTrendChart() {
  const { ref, width, height } = useElementSize<HTMLDivElement>();
  const ready = width > 0 && height > 0;

  return (
    <div ref={ref} className="h-[280px] w-full sm:h-[340px]">
      {ready ? (
        <AreaChart
          width={width}
          height={height}
          data={nationalTrend}
          margin={{ top: 12, right: 8, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="popFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1FA6A0" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#1FA6A0" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(18,53,44,0.12)" vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#4A635A", fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            tickFormatter={formatAxisPop}
            tickLine={false}
            axisLine={false}
            width={42}
            tick={{ fill: "#4A635A", fontSize: 12 }}
            domain={[19_500_000, 28_000_000]}
          />
          <Tooltip
            contentStyle={{
              background: "#F4FBF7",
              border: "1px solid rgba(18,53,44,0.12)",
              borderRadius: 12,
              boxShadow: "none",
            }}
            labelStyle={{ color: "#12352C", fontWeight: 600 }}
            formatter={(value, _name, item) => {
              const growth = item?.payload?.growthRate as number | undefined;
              const pop =
                typeof value === "number"
                  ? `${(value / 1_000_000).toFixed(2)}M`
                  : String(value);
              return [
                `${pop}${growth !== undefined ? ` · ${growth > 0 ? "+" : ""}${growth.toFixed(2)}%` : ""}`,
                "Population",
              ];
            }}
          />
          <Area
            type="monotone"
            dataKey="population"
            stroke="#12352C"
            strokeWidth={2.5}
            fill="url(#popFill)"
            isAnimationActive={false}
          />
        </AreaChart>
      ) : null}
    </div>
  );
}

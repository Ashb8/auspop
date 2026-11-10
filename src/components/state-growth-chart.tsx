"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { stateGrowth } from "@/data/population";
import { useElementSize } from "@/hooks/use-element-size";

const accent = ["#1FA6A0", "#12352C", "#3D7A6B", "#C4A35A", "#5C8F82"];

export function StateGrowthChart() {
  const { ref, width, height } = useElementSize<HTMLDivElement>();
  const ready = width > 0 && height > 0;
  const data = [...stateGrowth].sort((a, b) => b.growth202324 - a.growth202324);

  return (
    <div ref={ref} className="h-[300px] w-full sm:h-[360px]">
      {ready ? (
        <BarChart
          width={width}
          height={height}
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 16, left: 8, bottom: 0 }}
        >
          <CartesianGrid stroke="rgba(18,53,44,0.1)" horizontal={false} />
          <XAxis
            type="number"
            tickFormatter={(v) => `${v}%`}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#4A635A", fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="code"
            width={44}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#12352C", fontSize: 12, fontWeight: 600 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(31,166,160,0.08)" }}
            contentStyle={{
              background: "#F4FBF7",
              border: "1px solid rgba(18,53,44,0.12)",
              borderRadius: 12,
            }}
            formatter={(value, _n, item) => {
              const share = item?.payload?.shareOfNationalGrowth;
              return [
                `${value}% growth · ${share}% of national add`,
                item?.payload?.state,
              ];
            }}
          />
          <Bar
            dataKey="growth202324"
            radius={[0, 8, 8, 0]}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={entry.code} fill={accent[index % accent.length]} />
            ))}
          </Bar>
        </BarChart>
      ) : null}
    </div>
  );
}

"use client";

import { Pie, PieChart, Cell } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// ---- Mock 数据，在这里修改 ----
const chartData = [
  { name: "positive", value: 5994 },
  { name: "neutral", value: 7800 },
  { name: "negative", value: 1223 },
];
// --------------------------------

const chartConfig = {
  positive: { label: "正面", color: "#ef4444" },
  neutral: { label: "中性", color: "#94a3b8" },
  negative: { label: "负面", color: "#7f1d1d" },
} satisfies ChartConfig;

const RADIAN = Math.PI / 180;
const total = chartData.reduce((sum, d) => sum + d.value, 0);

function CustomLabel({
  cx,
  cy,
  midAngle,
  outerRadius,
  name,
  value,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  name: string;
  value: number;
}) {
  const config = chartConfig[name as keyof typeof chartConfig];
  const percent = ((value / total) * 100).toFixed(1);

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  // 折线起点（扇形外边缘）
  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  // 折线中间点
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  // 折线终点（水平延伸）
  const ex = mx + (cos >= 0 ? 20 : -20);
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={config.color}
        fill="none"
        strokeWidth={1.5}
      />
      <circle cx={ex} cy={ey} r={2} fill={config.color} />
      <text
        x={ex + (cos >= 0 ? 6 : -6)}
        y={ey}
        textAnchor={textAnchor}
        dominantBaseline="central"
        fontSize={12}
        fill={config.color}
        fontWeight="bold"
      >
        {config.label} {percent}%
      </text>
    </g>
  );
}

export function SentimentDonutChart() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto h-72">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          innerRadius={70}
          outerRadius={90}
          strokeWidth={2}
          labelLine={false}
          animationDuration={600}
          label={(props) => <CustomLabel {...props} />}
        >
          {chartData.map((entry) => (
            <Cell
              key={entry.name}
              fill={chartConfig[entry.name as keyof typeof chartConfig].color}
            />
          ))}
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}

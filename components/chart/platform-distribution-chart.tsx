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
  { name: "short_video", value: 2214 },
  { name: "mobile_news", value: 1643 },
  { name: "web_news", value: 1293 },
  { name: "video", value: 489 },
  { name: "weibo", value: 169 },
  { name: "wechat", value: 168 },
  { name: "forum", value: 41 },
];
// --------------------------------

const chartConfig = {
  short_video: { label: "短视频",   color: "#dc2626" },
  mobile_news: { label: "手机新闻", color: "#ea580c" },
  web_news:    { label: "网络新闻", color: "#f97316" },
  video:       { label: "视频",     color: "#f59e0b" },
  weibo:       { label: "微博",     color: "#fbbf24" },
  wechat:      { label: "微信",     color: "#9ca3af" },
  forum:       { label: "论坛",     color: "#6b7280" },
} satisfies ChartConfig;

const RADIAN = Math.PI / 180;
const total = chartData.reduce((sum, d) => sum + d.value, 0);

function CustomLabel({
  cx, cy, midAngle, outerRadius, name, value,
}: {
  cx: number; cy: number; midAngle: number;
  outerRadius: number; name: string; value: number;
}) {
  const config = chartConfig[name as keyof typeof chartConfig];
  const percent = ((value / total) * 100).toFixed(1);

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const sx = cx + outerRadius * cos;
  const sy = cy + outerRadius * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
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

export function PlatformDistributionChart() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto h-80">
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

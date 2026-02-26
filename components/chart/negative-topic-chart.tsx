"use client";

import { Bar, BarChart, XAxis, YAxis, Cell, LabelList } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// ---- Mock 数据，在这里修改 ----
const chartData = [
  { topic: "产品质量-频繁故障", value: 4 },
  { topic: "售后服务-不予退货退款", value: 4 },
  { topic: "产品质量-漏水", value: 3 },
  { topic: "售后服务-售后不专业", value: 3 },
  { topic: "产品质量-噪音大", value: 2 },
  { topic: "售后服务-处理不及时", value: 2 },
  { topic: "产品质量-主观吐槽", value: 2 },
  { topic: "产品质量-虚假宣传", value: 1 },
  { topic: "产品质量-水有异味", value: 1 },
  { topic: "阻垢剂问题", value: 1 },
];
// --------------------------------

const chartConfig = {
  value: { label: "篇数", color: "#7f1d1d" },
} satisfies ChartConfig;

export function NegativeTopicChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="w-full px-4 [&_.recharts-cartesian-axis-tick_text]:fill-[#0a0a0a]"
      style={{ height: `${chartData.length * 24 + 32}px` }}
    >
      <BarChart
        data={chartData}
        layout="vertical"
        margin={{ left: 0, right: 48, top: 8, bottom: 8 }}
      >
        <YAxis
          dataKey="topic"
          type="category"
          width={160}
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 13 }}
        />
        <XAxis type="number" hide />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={600}>
          {chartData.map((entry, index) => (
            <Cell
              key={entry.topic}
              fill={`hsl(0, ${60 - index * 8}%, ${30 + index * 6}%)`}
            />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            fontSize={13}
            fontWeight="bold"
            formatter={(v: number) => `${v}篇`}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

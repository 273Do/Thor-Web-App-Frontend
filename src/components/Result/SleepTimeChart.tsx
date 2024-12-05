import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  LineChart,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { EstimateDataType } from "./types";
import { convertToHours } from "@/functions/time-format";

const chartConfig: ChartConfig = {
  睡眠時間: {
    label: "睡眠時間(h)　",
    // color: "#2563eb",
  },
};

export default function SleepTimeChart({ data }: { data: EstimateDataType }) {
  // 元のオブジェクトをdateと睡眠時間をkeyにもつオブジェクトに変換
  const transformedData = data.map((item: EstimateDataType) => ({
    date: item.date,
    睡眠時間: convertToHours(item.sleep_time),
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full ">
      {/* <BarChart accessibilityLayer data={transformedData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value: string) => value.slice(5, 10)}
        />
        <ChartTooltip content={<ChartTooltipContent indicator={"line"} />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="睡眠時間" fill="var(--primary-gr-l)" radius={4} />
      </BarChart> */}
      <LineChart
        accessibilityLayer
        data={transformedData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: string) => value.slice(5, 10)}
        />
        <YAxis axisLine={false} tickLine={false} />
        <ChartTooltip
          cursor={true}
          content={<ChartTooltipContent indicator={"dot"} />}
        />
        <Line
          dataKey="睡眠時間"
          type="monotone"
          stroke="var(--primary-gr-l)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}

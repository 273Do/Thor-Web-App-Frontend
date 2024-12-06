import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

import { EstimateDataType } from "./types";
import { convertToHours } from "@/functions/time-format";
import { Card } from "../ui/card";

const chartConfig: ChartConfig = {
  睡眠時間: {
    label: "睡眠時間(h)　",
  },
};

export default function SleepTimeChart({ data }: { data: EstimateDataType }) {
  // 元のオブジェクトをdateと睡眠時間をkeyにもつオブジェクトに変換
  const transformedData = data.map((item: EstimateDataType) => ({
    date: item.date,
    就寝時刻: convertToHours(item.bed_time),
    起床時刻: convertToHours(item.wake_time),
    睡眠時間: convertToHours(item.sleep_time),
    bed_time: item.bed_time,
    wake_time: item.wake_time,
    sleep_time: item.sleep_time,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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
        <ChartTooltip
          cursor={true}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          content={({ payload }: { payload: any }) => {
            if (payload && payload.length) {
              const item = payload[0].payload;
              return (
                <Card className="p-2 shadow-2xl">
                  <p className="mb-1">{item.date}</p>
                  <div className="flex items-center">
                    <div className="h-3 w-1 rounded-[2px] bg-[#f4a283]"></div>
                    <div className="ml-2">
                      <div className="flex gap-3">
                        <p className="text-muted-foreground">睡眠時間</p>
                        <p className="font-mono">{item.sleep_time}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            }
            return null;
          }}
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

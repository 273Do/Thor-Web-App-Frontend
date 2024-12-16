import { CartesianGrid, XAxis, Line, LineChart, TooltipProps } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

import { SleepTimeDataType } from "./types";
import { Card } from "../ui/card";
import { Footprints, Sunrise } from "lucide-react";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

const chartConfig: ChartConfig = {
  睡眠時間: {
    label: "睡眠時間(h)　",
  },
};

export default function SleepTimeChart({
  data,
}: {
  data: SleepTimeDataType[];
}) {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <LineChart
        accessibilityLayer
        data={data}
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
          content={({ payload }: TooltipProps<ValueType, NameType>) => {
            if (payload && payload.length) {
              const item = payload[0].payload;
              return (
                <Card className="p-2 shadow-2xl">
                  <div className="mb-1 flex items-center justify-between">
                    <p>{item.date}</p>
                    <div className="flex gap-1">
                      {item.staying_up_late && (
                        <Sunrise className="text-[#cd7290]" size={13} />
                      )}

                      <Footprints className="text-[#cd7290]" size={13} />
                      <p className="font-mono">{item.data_count}</p>
                    </div>
                  </div>
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

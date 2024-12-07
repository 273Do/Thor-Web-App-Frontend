import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { SleepRangeDataType } from "./types";
import { Card } from "../ui/card";
import { Footprints, Sunrise } from "lucide-react";

const chartConfig: ChartConfig = {
  就寝時刻: {
    label: "就寝時刻(h)　",
  },
  起床時刻: {
    label: "起床時刻(h)　",
  },
};

const SleepRangeChart = ({ data }: { data: SleepRangeDataType }) => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          content={({ payload }: { payload: any }) => {
            if (payload && payload.length) {
              const item = payload[0].payload;
              return (
                <Card className="p-2 shadow-2xl">
                  <div className="mb-1 flex items-center justify-between">
                    <p>{item.date}</p>
                    <div className="flex gap-1">
                      {item.staying_up_late && (
                        <Sunrise className="text-[#f4a283]" size={13} />
                      )}
                      <Footprints className="text-[#f4a283]" size={13} />
                      <p className="font-mono">{item.data_count}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className=" h-8 w-1 rounded-[2px] bg-[#cd7290]"></div>
                    <div className="ml-2">
                      <div className="flex gap-3">
                        <p className="text-muted-foreground">就寝時刻</p>
                        <p className="font-mono">{item.bed_time}</p>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-muted-foreground">起床時刻</p>
                        <p className="font-mono">{item.wake_time}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            }
            return null;
          }}
          //   content={<ChartTooltipContent indicator={"dot"}  />}
        />
        <Bar dataKey="就寝時刻" fill="#ffffff10" radius={4} stackId="stack" />
        <Bar
          dataKey="起床時刻"
          fill="var(--primary-gr-r)"
          radius={4}
          stackId="stack"
        />
      </BarChart>
    </ChartContainer>
  );
};

export default SleepRangeChart;

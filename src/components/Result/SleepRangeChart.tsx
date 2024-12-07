import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { EstimateDataType } from "./types";
import { convertToHours } from "@/functions/time-format";
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

const SleepRangeChart = ({ data }: { data: EstimateDataType }) => {
  const transformedData = data.map((item: EstimateDataType) => ({
    date: item.date,
    就寝時刻: (-convertToHours(item.bed_time)).toString(),
    起床時刻: (-convertToHours(item.wake_time)).toString(),
    睡眠時間: convertToHours(item.sleep_time),
    bed_time: item.bed_time,
    wake_time: item.wake_time,
    sleep_time: item.sleep_time,
    staying_up_late: item.staying_up_late,
    data_count: item.data_count,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          content={({ payload }: { payload: any }) => {
            if (payload && payload.length) {
              const item = payload[0].payload;
              return (
                <Card className="p-2 shadow-2xl">
                  <div className="mb-1 flex items-center justify-between">
                    <p>{item.date}</p>
                    <div className="mb-1 flex  gap-1">
                      {item.staying_up_late && (
                        <Sunrise className="text-[#f4a283]" size={15} />
                      )}
                      {item.data_count < 7 && (
                        <Footprints className="text-[#f4a283]" size={15} />
                      )}
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

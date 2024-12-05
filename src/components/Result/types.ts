import { Section } from "@/functions/data-format";

type FormattedType = {
  formattedData: Section[];
};

type EstimateDataType = {
  map(
    arg0: (item: EstimateDataType) => { date: string; 睡眠時間: string }
  ): unknown;
  date: string;
  bed_time: string;
  wake_time: string;
  sleep_time: string;
  staying_up_late: boolean;
  data_count: number;
};

type ResultType = {
  feedback: string;
  result: EstimateDataType;
};

export type { ResultType, EstimateDataType, FormattedType };

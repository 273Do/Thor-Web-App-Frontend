import { Section } from "@/functions/data-format";

type ResultType = {
  formattedData: Section[];
};

type EstimateData = {
  feedback: string;
  result: [
    {
      date: string;
      bed_time: string;
      wake_time: string;
      sleep_time: string;
      staying_up_late: boolean;
      data_count: number;
    }
  ];
};

export type { ResultType, EstimateData };

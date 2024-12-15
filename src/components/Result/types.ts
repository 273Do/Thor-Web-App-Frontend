import { Section } from "@/functions/data-format";

type FormattedType = {
  formattedData: Section[];
};

type CommonSleepDataType = {
  date: string;
  staying_up_late: boolean | null;
  data_count: number;
};

type EstimateDataType = CommonSleepDataType & {
  bed_time: string | null;
  wake_time: string | null;
  sleep_time: string | null;
};

type SleepRangeDataType = CommonSleepDataType & {
  bed_time: string | null;
  wake_time: string | null;
  就寝時刻: string;
  起床時刻: string;
};

type SleepTimeDataType = CommonSleepDataType & {
  sleep_time: string | null;
  睡眠時間: string;
};

type ResultType = {
  read(): ResultType;
  feedback: string;
  results: EstimateDataType[];
};

type FormDataType = {
  bed_answer: number | null;
  wake_answer: number | null;
  habit_answer: number | null;
  zip_file: File;
};

export type {
  ResultType,
  EstimateDataType,
  SleepTimeDataType,
  SleepRangeDataType,
  FormattedType,
  FormDataType,
};

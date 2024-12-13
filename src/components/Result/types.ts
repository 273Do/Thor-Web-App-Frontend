import { Section } from "@/functions/data-format";

type FormattedType = {
  formattedData: Section[];
};

type CommonSleepDataType = {
  date: string;
  staying_up_late: boolean;
  data_count: number;
};

type EstimateDataType = CommonSleepDataType & {
  bed_time: string;
  wake_time: string;
  sleep_time: string;
};

type SleepRangeDataType = CommonSleepDataType & {
  bed_time: string;
  wake_time: string;
  就寝時刻: string;
  起床時刻: string;
};

type SleepTimeDataType = CommonSleepDataType & {
  sleep_time: string;
  睡眠時間: string;
};

type ResultType = {
  feedback: string;
  result: EstimateDataType;
};

type FormDataType = {
  answer_bed: number;
  answer_wake: number;
  answer_habit: number;
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

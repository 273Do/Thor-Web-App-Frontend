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
  read(): ResultType;
  feedback: string;
  result: EstimateDataType[];
};

type FormDataType = {
  bed_answer: number;
  wake_answer: number;
  habit_answer: number;
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

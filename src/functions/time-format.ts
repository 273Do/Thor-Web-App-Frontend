import {
  EstimateDataType,
  SleepRangeDataType,
  SleepTimeDataType,
} from "@/components/Result/types";

// 時間を1時間ベースに変換する関数
const convertToHours = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return (hours + minutes / 60 + seconds / 3600).toFixed(2); // 小数点2桁まで
};

// 就寝・起床時刻チャート用のデータに変換する関数
const convertToHoursSleepRange = (bedTime: string, wakeTime: string) => {
  const [bedHours, bedMinutes, bedSeconds] = bedTime.split(":").map(Number);
  const [wakeHours, wakeMinutes, wakeSeconds] = wakeTime.split(":").map(Number);

  // 時間を小数表記（時間単位）に変換
  const bedTimeInHours = bedHours + bedMinutes / 60 + bedSeconds / 3600;
  const wakeTimeInHours = wakeHours + wakeMinutes / 60 + wakeSeconds / 3600;

  let chart_bed_time: number;
  let chart_wake_time: number;

  if (bedHours >= 20) {
    // 夜（20時以降）に就寝する場合
    chart_bed_time = 24 - bedTimeInHours; // 就寝時間を24時を基準に算出
    chart_wake_time = -(chart_bed_time + wakeTimeInHours); // 起床時間を基準に計算
  } else {
    // 通常（20時以前）に就寝する場合
    chart_bed_time = -bedTimeInHours;
    chart_wake_time = -(chart_bed_time + wakeTimeInHours);
  }

  return {
    // 小数点以下2桁に整形
    chart_bed_time: chart_bed_time.toFixed(2),
    chart_wake_time: chart_wake_time.toFixed(2),
  };
};

// チャート表示に必要なデータを作成
const createChartData = (data: EstimateDataType[]) => {
  // const canCreate: boolean = true;

  const sleepRangeData: SleepRangeDataType[] = data.map(
    (item: EstimateDataType) => {
      if (
        item.bed_time === null ||
        item.wake_time === null ||
        item.sleep_time === null ||
        item.staying_up_late === null
      ) {
        return {
          date: item.date,
          就寝時刻: "N/A",
          起床時刻: "N/A",
          bed_time: "00:00",
          wake_time: "00:01",
          staying_up_late: false,
          data_count: item.data_count,
        };
      } else {
        const { chart_bed_time, chart_wake_time } = convertToHoursSleepRange(
          item.bed_time,
          item.wake_time
        );
        return {
          date: item.date,
          就寝時刻: chart_bed_time.toString(),
          起床時刻: chart_wake_time.toString(),
          bed_time: item.bed_time,
          wake_time: item.wake_time,
          staying_up_late: item.staying_up_late,
          data_count: item.data_count,
        };
      }
    }
  );
  const sleepTimeData: SleepTimeDataType[] = data.map(
    (item: EstimateDataType) => {
      if (
        item.bed_time === null ||
        item.wake_time === null ||
        item.sleep_time === null ||
        item.staying_up_late === null
      ) {
        return {
          date: item.date,
          睡眠時間: "N/A",
          sleep_time: "00:01",
          staying_up_late: false,
          data_count: item.data_count,
        };
      } else {
        return {
          date: item.date,
          睡眠時間: convertToHours(item.sleep_time),
          sleep_time: item.sleep_time,
          staying_up_late: item.staying_up_late,
          data_count: item.data_count,
        };
      }
    }
  );
  return { sleepRangeData, sleepTimeData };
};

export { convertToHours, convertToHoursSleepRange, createChartData };

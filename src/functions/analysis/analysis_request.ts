import { FormDataType } from "@/components/Result/types";

// エンドポイントを環境変数から取得
const ANALYSIS_REQUEST_ENDPOINT: string = import.meta.env
  .VITE_ANALYSIS_REQUEST_ENDPOINT;

// 解析処理を要求するための関数
export async function analysisRequest(UUID: string, props: FormDataType) {
  const { bed_answer, wake_answer, habit_answer, zip_file } = props;
  console.log(UUID, bed_answer, wake_answer, habit_answer, zip_file.name);

  const demodata = {
    feedback:
      "# 睡眠\n## 睡眠パターン\n多くの場合、就寝時間が深夜2時を超えています。",
    result: [
      {
        bed_time: "02:28:53",
        data_count: 7,
        date: "2024/01/07",
        sleep_time: "06:33:35",
        staying_up_late: true,
        wake_time: "09:02:28",
      },
      {
        bed_time: "06:28:53",
        data_count: 17,
        date: "2024/01/08",
        sleep_time: "07:33:35",
        staying_up_late: true,
        wake_time: "01:02:28",
      },
      {
        bed_time: "21:28:53",
        data_count: 27,
        date: "2024/01/09",
        sleep_time: "12:33:35",
        staying_up_late: true,
        wake_time: "09:02:28",
      },
    ],
  };
  // const data = "../../../../public/test_data/demo.json";
  // const data = "./test_data/demo.json";
  // const req = await fetch(data);
  // const result = await req.json();

  // console.log("確認", result);
  return { response: demodata };
}

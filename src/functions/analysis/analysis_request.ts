import { FormDataType } from "@/components/Result/types";

// エンドポイントを環境変数から取得
const ANALYSIS_REQUEST_ENDPOINT: string = import.meta.env
  .VITE_ANALYSIS_REQUEST_ENDPOINT;

// 解析処理を要求するための関数
export async function analysisRequest(UUID: string, props: FormDataType) {
  const { bed_answer, wake_answer, habit_answer, zip_file } = props;
  console.log(UUID, bed_answer, wake_answer, habit_answer, zip_file.name);
}

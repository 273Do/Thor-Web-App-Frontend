import { FormDataType } from "@/components/Result/types";

// エンドポイントを環境変数から取得
const ANALYSIS_REQUEST_ENDPOINT: string = import.meta.env
  .VITE_ANALYSIS_REQUEST_ENDPOINT;

// 解析処理を要求するための関数
export async function analysisRequest(UUID: string, props: FormDataType) {
  const { bed_answer, wake_answer, habit_answer, zip_file } = props;

  const request = await fetch(`${ANALYSIS_REQUEST_ENDPOINT}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      UUID: UUID,
      bed_answer: String(bed_answer),
      wake_answer: String(wake_answer),
      habit: String(habit_answer),
      file_name: zip_file.name,
    }),
  });

  const response = await request.json();
  const { feedback, results } = JSON.parse(response.body);
  return { response: { feedback: feedback, results: results } };
}

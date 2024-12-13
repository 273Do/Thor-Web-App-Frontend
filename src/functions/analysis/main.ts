import { FormDataType } from "@/components/Result/types";
import { getPresignedUrl } from "./get_presigned";
import { uploadZip } from "./upload_zip";
import { analysisRequest } from "./analysis_request";

export const postAnalysisProcess = async (props: FormDataType) => {
  const { zip_file } = props;

  try {
    // 署名付きURLを取得
    const { PUT_URL, UUID } = await getPresignedUrl(zip_file.name);

    // S3へファイルをアップロード
    const response = await uploadZip(zip_file, PUT_URL);
    // アップローが失敗した場合のエラー処理
    if (response.status !== 200) {
      alert(`推定に失敗しました。\n status: ${response.status}`);
      window.location.reload();
    }

    console.log(`success!`);

    // 解析処理を要求
    const { result } = await analysisRequest(UUID, props);
  } catch (error) {
    // エラー処理
    alert(`推定に失敗しました。\n ${error}`);
    // window.location.reload(); // 履歴を残さないためリロード
  }
};

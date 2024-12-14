import { FormDataType, ResultType } from "@/components/Result/types";
import { getPresignedUrl } from "./get_presigned";
import { uploadZip } from "./upload_zip";
import { analysisRequest } from "./analysis_request";

export const postAnalysisProcess = (props: FormDataType) => {
  let status: string = "pending"; // データの状態
  let result: ResultType | null = null;
  let error: Error | null = null;

  const loadData = async () => {
    const { zip_file } = props;
    const UUID: string = "aaa";

    try {
      // 署名付きURLを取得
      const { PUT_URL, UUID } = await getPresignedUrl(zip_file.name);

      // S3へファイルをアップロード
      const res = await uploadZip(zip_file, PUT_URL);
      if (res.status !== 200) {
        throw new Error(`status: ${res.status}`);
      }

      // 解析処理を要求
      const { response } = await analysisRequest(UUID, props);

      status = "success"; // 成功時
      result = response as ResultType; // 結果を保存
    } catch (err) {
      console.error(err);
      alert(`推定に失敗しました。\n ${err}`);
      window.location.reload();
      // throw error;
      status = "error"; // エラー時
      error = err as Error;
    }
  };

  // データを取得しPromiseをキャッシュ
  const resultPromise = loadData();
  console.log("resultPromise", resultPromise);

  // サスペンド用のラッパーを返す
  return {
    read: () => {
      if (status === "pending") {
        throw resultPromise; // サスペンド
      } else if (status === "error") {
        throw error; // エラーをスロー
      } else if (status === "success") {
        return result; // 成功時に結果を返す
      }
    },
  };
};

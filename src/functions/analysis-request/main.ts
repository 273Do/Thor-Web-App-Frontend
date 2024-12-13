// DEBUG: 処理が3段階あるためそれぞれの関数に分割する

import { FormDataType } from "@/components/Result/types";
import { get_presigned_url } from "./get_presigned";
import { upload_zip } from "./upload_zip";

export const analysisRequest = async (props: FormDataType) => {
  const { answer_bed, answer_wake, answer_habit, zip_file } = props;
  console.log(answer_bed, answer_wake, answer_habit, zip_file);

  try {
    // 署名付きURLを取得
    const { PUT_URL, UUID } = await get_presigned_url(zip_file.name);

    // S3へファイルをアップロード
    const response = await upload_zip(zip_file, PUT_URL);
    // アップローが失敗した場合のエラー処理
    if (response.status !== 200) {
      alert(`推定に失敗しました。\n status: ${response.status}`);
      window.location.reload();
    }

    console.log(`success!`);
  } catch (error) {
    // エラー処理
    alert(`推定に失敗しました。\n ${error}`);
    // window.location.reload(); // 履歴を残さないためリロード
  }
};

// DEBUG: 処理が3段階あるためそれぞれの関数に分割する

import { get_presigned_url } from "./get_presigned";

export const analysisRequest = async (file_name: string) => {
  try {
    // 署名付きURLを取得
    const { PUT_URL, UUID } = await get_presigned_url(file_name);
    // S3へファイルをアップロード
    const { success } = await s3_upload(PUT_URL, upload_zip);
  } catch (error) {
    // エラー処理
    alert(`推定に失敗しました。\n ${error}`);
    window.location.reload(); // 履歴を残さないためリロード
  }
};

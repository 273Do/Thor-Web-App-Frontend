// エンドポイントを環境変数から取得
const GET_PRESIGNED_URL_ENDPOINT: string = import.meta.env
  .VITE_GET_PRESIGNED_URL_ENDPOINT;

// S3にアップロードするための署名付きURLを取得するための関数
export async function getPresignedUrl(file_name: string) {
  const request = await fetch(
    `${GET_PRESIGNED_URL_ENDPOINT}/get_presigned_url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // オブジェクトをJSON文字列に変換してリクエストボディに設定
      body: JSON.stringify({
        file_name: file_name,
      }),
    }
  );
  const response = await request.json();
  const { PUT_URL, UUID } = JSON.parse(response.body);

  return { PUT_URL, UUID };
}

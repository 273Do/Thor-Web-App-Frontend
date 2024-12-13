// s3へファイルをアップロードするための関数
export async function upload_zip(file: File, PUT_URL: string) {
  const request = await fetch(PUT_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/zip",
    },
    body: file,
  });
  const response = request;
  return response;
}

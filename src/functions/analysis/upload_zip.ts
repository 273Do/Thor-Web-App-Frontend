// s3へファイルをアップロードするための関数
export async function uploadZip(file: File, PUT_URL: string) {
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

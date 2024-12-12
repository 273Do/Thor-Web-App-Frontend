let status = "pending";
let result: any;

// DEBUG: ダミーデータを取得するデバッグ用の関数
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function fetchPosts() {
  const data = "../../../public/test_data/demo.json";
  const fetching = fetch(data)
    .then((res) => res.json())
    .then(async (success) => {
      await delay(4000);
      status = "fulfilled";
      result = success;
    })
    .catch((error) => {
      status = "rejected";
      result = error;
    });

  return () => {
    if (status === "pending") {
      throw fetching; // Promise を throw
    } else if (status === "rejected") {
      throw result;
    } else if (status === "fulfilled") {
      return result; // Promise が解決したら、取得したデータを返す
    }
  };
}

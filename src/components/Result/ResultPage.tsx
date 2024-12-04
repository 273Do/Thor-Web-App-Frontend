import * as Layout from "@/components/layouts/index";
import ResultTitle from "./ResultTitle";
import Feedback from "./Feedback";

// DEBUG: デバッグ用
//  <Analysis.Form />から得たデータを用いて，ここで推定処理のAPIを呼び出す

let status = "pending";
let result: any;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fetchPosts() {
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

// DEBUG: デバッグ用

const ResultPage = () => {
  const analysis_data = fetchPosts()();

  return (
    <>
      <Layout.Title title={"推定結果"}>
        <ResultTitle />
      </Layout.Title>
      <Layout.Content>
        <Feedback analysis_data={analysis_data} />
      </Layout.Content>
    </>
  );
};

export default ResultPage;

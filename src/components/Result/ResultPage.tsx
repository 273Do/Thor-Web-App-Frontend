import * as Layout from "@/components/layouts/index";
import ResultTitle from "./ResultTitle";
import Feedback from "./Feedback";
import { fetchPosts } from "@/functions/analysis-request";
import { analysisRequest } from "@/functions/analysis-request/main";

// DEBUG: デバッグ用
//  <Analysis.Form />から得たデータを用いて，ここで推定処理のAPIを呼び出す

const ResultPage = () => {
  // const estimate_data = fetchPosts()();
  analysisRequest("書き出したデータ.zip");

  return (
    <>
      <Layout.Title title={"推定結果"}>
        <ResultTitle />
      </Layout.Title>
      <Layout.Content>
        <p>test</p>
        {/* <Feedback estimate_data={estimate_data} /> */}
      </Layout.Content>
    </>
  );
};

export default ResultPage;

import * as Layout from "@/components/layouts/index";
import ResultTitle from "./ResultTitle";
import Feedback from "./Feedback";
import { fetchPosts } from "@/functions/demo-request";
import { postAnalysisProcess } from "@/functions/analysis/main";
import { FormDataType } from "./types";
import { Button } from "../ui/button";

// DEBUG: デバッグ用
//  <Analysis.Form />から得たデータを用いて，ここで推定処理のAPIを呼び出す

const ResultPage = ({ form_data }: { form_data: FormDataType | null }) => {
  // const estimate_data = fetchPosts()();
  if (form_data) {
    postAnalysisProcess(form_data);

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
  } else {
    return (
      <>
        <Layout.Title title={"エラー"}>
          <div className="m-10 text-center">
            <p className="mb-5">フォームの値がありません。</p>
            <Button className="px-7" onClick={() => window.location.reload()}>
              戻る
            </Button>
          </div>
        </Layout.Title>
      </>
    );
  }
};

export default ResultPage;

import * as Layout from "@/components/layouts/index.tsx";
import * as Analysis from "@/components/Analysis/index.ts";
import * as Result from "@/components/Result/index.ts";

const Estimate = () => {
  //  <Analysis.Form />から得たデータを用いて，ここで推定処理のAPIを呼び出す
  return (
    <>
      <Layout.Title title="アクティビティデータから睡眠状態を推定します。">
        {/* <Layout.Title title="推定結果"> */}
        <Analysis.Title />
        {/* <Result.Title /> */}
      </Layout.Title>
      <Layout.Content>
        <Analysis.Form />
        {/* <Result.Feedback /> */}
      </Layout.Content>
    </>
  );
};

export default Estimate;

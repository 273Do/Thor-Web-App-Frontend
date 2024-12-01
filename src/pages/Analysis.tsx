import * as Layout from "@/components/layouts/index.tsx";
import * as Analysis from "@/components/Analysis/index.ts";

const Estimate = () => {
  //  <Analysis.Form />から得たデータを用いて，ここで推定処理のAPIを呼び出す
  return (
    <>
      <Layout.Title title="アクティビティデータから睡眠状態を推定します。">
        <Analysis.Title />
      </Layout.Title>
      <Layout.Content>
        <Analysis.Form />
      </Layout.Content>
    </>
  );
};

export default Estimate;

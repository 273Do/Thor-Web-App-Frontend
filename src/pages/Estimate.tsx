import * as Analysis from "@/components/Analysis/index";
import LoadingPage from "@/components/Loading/LoadingPage";
import ResultPage from "@/components/Result/ResultPage";
import * as Layout from "@/components/layouts/index";
import { Suspense, useState } from "react";

const Estimate = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Suspense fallback={<LoadingPage />}>
        <ResultPage />
      </Suspense>
    );
  } else
    return (
      <>
        <Layout.Title title={"アクティビティデータから睡眠状態を推定します。"}>
          <Analysis.Title />
        </Layout.Title>
        <Layout.Content>
          <button onClick={() => setShow(true)}>show</button>
          <Analysis.Form />
        </Layout.Content>
      </>
    );
};

export default Estimate;

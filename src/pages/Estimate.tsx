import * as Analysis from "@/components/Analysis/index";
import { formSchema } from "@/components/Analysis/types";
import LoadingPage from "@/components/Loading/LoadingPage";
import ResultPage from "@/components/Result/ResultPage";
import * as Layout from "@/components/layouts/index";
import { Suspense, useState } from "react";
import { z } from "zod";

// answer_bedの項目を定義
const answer_bed = [
  "就寝直前",
  "15分前程度",
  "30分前程度",
  "1時間前程度",
  "充電しない",
];

// answer_wakeの項目を定義
const answer_wake = ["よく持ち歩く", "持ち歩く", "あまり持ち歩かない"];

const Estimate = () => {
  const [show, setShow] = useState(false);

  // フォームの値を取得
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const bed_id: number = answer_bed.indexOf(values.answer_bed);
    const wake_id: number = answer_wake.indexOf(values.answer_wake);
    let is_staying_up_late;
    if (values.answer_habit > "03:00" && values.answer_habit < "20:45") {
      is_staying_up_late = 1;
    } else is_staying_up_late = 0;

    console.log(bed_id, wake_id, is_staying_up_late);
    console.log(values.zip_file.name);
  };

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
          <Analysis.Form
            onSubmit={onSubmit}
            answer_bed={answer_bed}
            answer_wake={answer_wake}
          />
        </Layout.Content>
      </>
    );
};

export default Estimate;

import * as Analysis from "@/components/Analysis/index";
import { formSchema } from "@/components/Analysis/types";
import LoadingPage from "@/components/Loading/LoadingPage";
import ResultPage from "@/components/Result/ResultPage";
import { ResultType } from "@/components/Result/types";
import * as Layout from "@/components/layouts/index";
import { postAnalysisProcess } from "@/functions/analysis/main";
import { Suspense, useState } from "react";
import { z } from "zod";

// bed_answerの項目を定義
const bed_answer = [
  "就寝直前",
  "15分前程度",
  "30分前程度",
  "1時間前程度",
  "充電しない",
];

// wake_answerの項目を定義
const wake_answer = ["よく持ち歩く", "持ち歩く", "あまり持ち歩かない"];

const Estimate = () => {
  const [show, setShow] = useState(false);
  const [resource, setResource] = useState<ResultType | null>(null);

  // フォームの値を取得
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const bed_id: number = bed_answer.indexOf(values.bed_answer);
    const wake_id: number = wake_answer.indexOf(values.wake_answer);
    let is_staying_up_late;
    if (values.habit_answer > "03:00" && values.habit_answer < "20:45") {
      is_staying_up_late = 1;
    } else is_staying_up_late = 0;

    const resultResource = postAnalysisProcess({
      bed_answer: bed_id,
      wake_answer: wake_id,
      habit_answer: is_staying_up_late,
      zip_file: values.zip_file,
    });
    setResource(resultResource as ResultType);
  };

  if (resource) {
    return (
      <Suspense fallback={<LoadingPage />}>
        <ResultPage resource={resource} />
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
            bed_answer={bed_answer}
            wake_answer={wake_answer}
          />
        </Layout.Content>
      </>
    );
};

export default Estimate;

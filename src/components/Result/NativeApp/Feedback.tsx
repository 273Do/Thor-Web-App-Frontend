import { Card, CardContent, CardTitle } from "../../ui/card";

import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { ResultType } from "../types";
import SleepTimeChart from "../SleepTimeChart";
import SleepRangeChart from "../SleepRangeChart";
import { ArrowRightLeft } from "lucide-react";
import { createChartData } from "@/functions/time-format";
import FECarousel from "./FECarousel";
import {
  NativeData,
  processNativeData,
} from "@/functions/data-format-native-app";

const Feedback = ({ estimate_data }: { estimate_data: ResultType }) => {
  // 各データを取得
  const { feedback, results } = estimate_data;

  // チャート用のデータを作成
  const { sleepRangeData, sleepTimeData } = createChartData(results);

  // フィードバックのデータを格納
  const [data, setData] = useState<NativeData>({
    titles: [],
    contents: [],
  });

  // 指定タイトルを入力するとコンテンツを返すカスタムフック
  // const { selectedTitle, setSelectedTitle, content } = useContent(data);

  // 就寝・起床時刻チャート表示フラグ
  const [isSleepRangeChart, setIsSleepRangeChart] = useState<boolean>(false);

  // 整形とデータのセットは初回表示のみ
  useEffect(() => {
    const fetchData = async () => {
      // フィードバックデータを整形
      const format_result = await processNativeData(feedback);
      setData(format_result);

      // 初期表示のタイトルを設定
      // const firstTitle = format_result.formattedData[0].content[0].title;
      // setSelectedTitle(firstTitle);
    };
    fetchData();
  }, []);

  console.log(feedback);

  return (
    <>
      <Card className="max-w-[370px]">
        <CardTitle className="p-6 pb-3 text-xl">フィードバック</CardTitle>
        <FECarousel data={data} />
        <div className="h-px w-full bg-border"></div>
        <CardTitle className="flex items-center justify-between p-6 pb-0 text-xl">
          {isSleepRangeChart === true
            ? "就寝・起床時刻チャート"
            : "睡眠時間チャート"}

          <Button
            variant="ghost"
            className="p-3"
            onClick={() => setIsSleepRangeChart((prev) => !prev)}
          >
            <ArrowRightLeft />
          </Button>
        </CardTitle>
        <CardContent>
          <div className="max-w-[370px]">
            {isSleepRangeChart === true ? (
              <SleepRangeChart data={sleepRangeData} />
            ) : (
              <SleepTimeChart data={sleepTimeData} />
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Feedback;

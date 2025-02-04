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
        <div className="h-px w-full bg-border"></div>
        {/* <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="m-6">
              {data.formattedData.map((item_s, i) => (
                <div key={i}>
                  <div className="m-1 text-xs text-muted-foreground">
                    {item_s.section}
                  </div>
                  {item_s.content.map((item_t, j) => (
                    <div key={j}>
                      <Button
                        variant="ghost"
                        className={`${
                          selectedTitle === item_t.title
                            ? "bg-primary-gradient text-white hover:text-white"
                            : ""
                        } m-1`}
                        onClick={() => setSelectedTitle(item_t.title)}
                      >
                        {item_t.title}
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <p className="m-6 mb-3 text-xl font-bold">{selectedTitle}</p>
            <div className="m-6 mt-3">{content}</div>
          </ResizablePanel>
        </ResizablePanelGroup> */}
        <CardTitle className="p-6 pb-3 text-xl">フィードバック</CardTitle>
        <FECarousel data={data} />
        <div className="h-px w-full bg-border"></div>
        <CardTitle className="flex items-center justify-between p-6 pb-3 text-xl">
          <p>
            {isSleepRangeChart === true
              ? "就寝・起床時刻チャート"
              : "睡眠時間チャート"}
          </p>
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

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useState } from "react";
import { processData } from "@/functions/data-format";
import { Button } from "../ui/button";
import { FormattedType, ResultType } from "./types";
import SleepTimeChart from "./SleepTimeChart";
import SleepRangeChart from "./SleepRangeChart";
import { ArrowRightLeft } from "lucide-react";
import { createChartData } from "@/functions/time-format";
import { useContent } from "@/hooks/use-content";

const Feedback = ({ estimate_data }: { estimate_data: ResultType }) => {
  // 各データを取得
  const { feedback, result } = estimate_data;

  // チャート用のデータを作成
  const { sleepRangeData, sleepTimeData } = createChartData(result);

  // フィードバックのデータを格納
  const [data, setData] = useState<FormattedType>({
    formattedData: [],
  });

  // 指定タイトルを入力するとコンテンツを返すカスタムフック
  const { selectedTitle, setSelectedTitle, content } = useContent(data);

  // 就寝・起床時刻チャート表示フラグ
  const [isSleepRangeChart, setIsSleepRangeChart] = useState<boolean>(false);

  // 整形とデータのセットは初回表示のみ
  useEffect(() => {
    const fetchData = async () => {
      // フィードバックデータを整形
      const format_result = await processData(feedback);
      setData(format_result);

      // 初期表示のタイトルを設定
      const firstTitle = format_result.formattedData[0].content[0].title;
      setSelectedTitle(firstTitle);
    };
    fetchData();
  }, []);

  return (
    <>
      <Card className="w-[600px] max-w-3xl">
        <CardHeader>
          <CardTitle>フィードバック</CardTitle>
        </CardHeader>
        <div className="h-px w-full bg-border"></div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="m-6">
              {/* sectionとtitleを抽出 */}
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
            <div className="m-6 mt-3 min-w-[400px]">{content}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
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
          <div className="w-full">
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

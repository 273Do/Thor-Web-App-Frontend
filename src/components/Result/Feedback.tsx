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
import SleepDurationChart from "./Testchart";
import SleepPatternChart from "./Testchart";

const Feedback = ({ estimate_data }: { estimate_data: ResultType }) => {
  const { feedback, result } = estimate_data;
  console.log(result);
  const [data, setData] = useState<FormattedType>({
    formattedData: [],
  });
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const format_result = await processData(feedback);
      setData(format_result);

      const firstTitle = format_result.formattedData[0].content[0].title;
      setSelectedTitle(firstTitle);

      console.log(format_result);
    };
    fetchData();
  }, []);

  // 指定タイトルのコンテンツを検索
  useEffect(() => {
    const findContentByTitle = (title: string): string | null => {
      for (const section of data.formattedData) {
        const found = section.content.find((item) => item.title === title);
        if (found) {
          return found.content; // コンテンツを返す
        }
      }
      return null; // 該当なし
    };

    const result = findContentByTitle(selectedTitle);
    setContent(result);
  }, [selectedTitle, data]);

  return (
    <>
      <Card className="w-[600px] max-w-3xl">
        <CardHeader>
          <CardTitle>フィードバック</CardTitle>
        </CardHeader>
        <div className="h-px w-full bg-border"></div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="m-6 ">
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
        <CardTitle className="p-6 pb-3 text-xl">
          {/* 就寝・起床時刻チャート */}
          睡眠時間チャート
        </CardTitle>
        <CardContent>
          <div className="w-full">
            <SleepTimeChart data={result} />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Feedback;

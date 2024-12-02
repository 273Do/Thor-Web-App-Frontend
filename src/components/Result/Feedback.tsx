import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import demo_data from "../../../public/test_data/demo";
import { useEffect, useState } from "react";
import { processData, Section } from "@/functions/data-format";
import { Button } from "../ui/button";

type ResultType = {
  formattedData: Section[];
};

const Feedback = () => {
  const [data, setData] = useState<ResultType>({
    formattedData: [],
  });
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await processData(demo_data);
      setData(result);

      const firstTitle = result.formattedData[0].content[0].title;
      setSelectedTitle(firstTitle);

      console.log(result);
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
                <>
                  <div className="text-sm text-muted-foreground" key={i}>
                    {item_s.section}
                  </div>
                  {item_s.content.map((item_t, j) => (
                    <>
                      <Button
                        variant={"ghost"}
                        key={j}
                        onClick={() => setSelectedTitle(item_t.title)}
                      >
                        {item_t.title}
                      </Button>
                    </>
                  ))}
                </>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <p className="m-6 mb-3 text-xl font-bold">{selectedTitle}</p>
            <div className="m-6 mt-3 min-w-[400px]">{content}</div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <div className="mb-6 h-px w-full bg-border"></div>
        <CardFooter>グラフ</CardFooter>
      </Card>
    </>
  );
};

export default Feedback;

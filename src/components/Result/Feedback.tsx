import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const Feedback = () => {
  return (
    <>
      <Card className="w-[600px] max-w-3xl">
        <CardHeader>
          <CardTitle>フィードバック</CardTitle>
        </CardHeader>
        <div className="h-px w-full bg-border"></div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="m-6">One</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <p className="m-3 mx-6 text-xl font-bold">睡眠パターン</p>
            <div className="m-3 mx-6">
              多くの場合、就寝時間が深夜2時を超えることが多く、特に3時を超える日もあります。例えば、2024年1月8日には就寝時間が午前3時59分と非常に遅く、また、2024年2月3日にも午前4時50分に就寝しています。平均的な睡眠時間は7時間前後ですが、何日かは睡眠時間が5時間以下と短い日もあります（例:
              2024年1月31日の睡眠時間は4時間57分、2024年2月3日は4時間42分）。全般的に、夜更かしに伴い不規則な睡眠パターンが見られます。
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <div className="mb-6 h-px w-full bg-border"></div>
        <CardFooter>グラフ</CardFooter>
      </Card>
    </>
  );
};

export default Feedback;

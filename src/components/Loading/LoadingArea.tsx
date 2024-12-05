import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const LoadingArea = () => {
  return (
    <>
      <Card className="w-[600px] max-w-3xl">
        <CardHeader>
          <CardTitle>フィードバック</CardTitle>
        </CardHeader>
        <div className="h-px w-full bg-border"></div>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="size-full w-[200px] p-6 pr-0">
              <Skeleton className="size-full rounded-xl" />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="size-full p-6">
              <Skeleton className="mb-3 h-10 rounded-xl" />
              <Skeleton className="mt-3 h-56 rounded-xl" />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
        <div className="h-px w-full bg-border"></div>
        <CardTitle className="p-6 pb-3 text-xl">睡眠時間チャート</CardTitle>
        <CardContent>
          <Skeleton className="h-80 w-full rounded-xl" />
        </CardContent>
      </Card>
    </>
  );
};

export default LoadingArea;

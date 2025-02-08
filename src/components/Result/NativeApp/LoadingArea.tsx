import { Card, CardContent, CardTitle } from "../../ui/card";

import { Button } from "../../ui/button";
import { ArrowRightLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingArea = () => {
  return (
    <>
      <Card className="w-[370px]">
        <CardTitle className="p-6 pb-3 text-xl">フィードバック</CardTitle>
        <CardContent className="w-full">
          <div className="p-1">
            <Skeleton className="aspect-square w-full p-6" />
          </div>
          <div className="flex flex-col items-center">
            <Skeleton className="mt-3 h-6 w-3/5" />
          </div>
        </CardContent>
        <div className="h-px w-full bg-border"></div>
        <CardTitle className="flex items-center justify-between p-6 pb-0 text-xl">
          睡眠時間チャート
          <Button variant="ghost" className="p-3">
            <ArrowRightLeft />
          </Button>
        </CardTitle>
        <CardContent>
          <div className="max-w-[370px]">
            <Skeleton className="h-[200px] w-full" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoadingArea;

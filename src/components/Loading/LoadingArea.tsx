import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingArea = () => {
  return (
    <>
      <Card className="w-[600px] max-w-3xl">
        <CardHeader>
          <CardTitle>フィードバック</CardTitle>
        </CardHeader>
        <div className="h-px w-full bg-border"></div>
        <div className="flex h-80">
          <div>
            <div className="size-full w-[150px] p-6">
              <Skeleton className="size-full rounded-xl" />
            </div>
          </div>
          <div className="h-full w-px bg-border"></div>
          <div className="m-6 h-full w-3/4">
            <Skeleton className="mb-3 h-10 rounded-xl" />
            <Skeleton className="mt-3 h-56 rounded-xl" />
          </div>
        </div>
        <div className="h-px w-full bg-border"></div>
        <CardTitle className="p-6 pb-3 text-xl">
          <Skeleton className="h-10 rounded-xl" />
        </CardTitle>
        <CardContent>
          <Skeleton className="h-80 w-full rounded-xl" />
        </CardContent>
      </Card>
    </>
  );
};

export default LoadingArea;

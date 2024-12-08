import { Button } from "@/components/ui/button";

const AnalysisTitle = () => {
  return (
    <div className="my-8 flex flex-col items-center text-muted-foreground">
      <p>Thorはスマートフォンで計測されたアクティビティデータのみを用いて、</p>
      <p>睡眠状態を推定するシステムです。</p>
      <Button className="mt-4 w-52 bg-primary-gradient text-white transition-all duration-100 hover:opacity-80">
        推定方法について
      </Button>
    </div>
  );
};

export default AnalysisTitle;

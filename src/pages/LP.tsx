import * as Layout from "@/components/layouts/index.tsx";
import { Button } from "@/components/ui/button";

const LP = () => {
  return (
    <>
      <Layout.Title title="アクティビティデータから睡眠状態を解析します。">
        <div className="my-4 flex flex-col items-center text-muted-foreground">
          <p>
            Thorはスマートフォンで計測されたアクティビティデータのみを用いて、
          </p>
          <p>睡眠状態を推定するシステムです。</p>
          <Button className="mt-4 w-52 bg-primary-gradient transition-all duration-100 hover:opacity-80">
            始める
          </Button>
        </div>
      </Layout.Title>
      <Layout.Content>
        <div>内容</div>
      </Layout.Content>
    </>
  );
};

export default LP;

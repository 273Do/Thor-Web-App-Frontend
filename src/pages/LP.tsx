import * as Layout from "@/components/layouts/index.tsx";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LP = () => {
  const { theme } = useTheme();
  return (
    <>
      <Layout.Title title="アクティビティデータから睡眠状態を推定します。">
        <div className="my-8 flex flex-col items-center text-muted-foreground">
          <p>
            Thorはスマートフォンで計測されたアクティビティデータのみを用いて、
          </p>
          <p>睡眠状態を推定するシステムです。</p>
          <Link to="/estimate">
            <Button className="mt-4 w-52 bg-primary-gradient text-white transition-all duration-100 hover:opacity-80">
              始める
            </Button>
          </Link>
        </div>
      </Layout.Title>
      <Layout.Content>
        <div>
          <p className="mb-2 text-center text-xl font-bold">下準備</p>
          <div className="flex gap-5">
            <div className="text-center">
              <p className="my-1">Step1：ヘルスケアアプリを開く</p>
              <img
                src={`imgs/step1${theme === "dark" ? "_dark" : ""}.png`}
                className="w-72"
                alt="step1"
              />
            </div>
            <div className="text-center">
              <p className="my-1">Step2：データをエクスポートする</p>
              <img
                src={`imgs/step2${theme === "dark" ? "_dark" : ""}.png`}
                className="w-72"
                alt="step1"
              />
            </div>
          </div>
        </div>
      </Layout.Content>
    </>
  );
};

export default LP;

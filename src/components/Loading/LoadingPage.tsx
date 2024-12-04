import * as Layout from "@/components/layouts/index";
import LoadingTitle from "./LoadingTitle";
import LoadingArea from "./LoadingArea";

const LoadingPage = () => {
  return (
    <>
      <Layout.Title title={"アクティビティデータから睡眠状態を推定します。"}>
        <LoadingTitle />
      </Layout.Title>
      <Layout.Content>
        <LoadingArea />
      </Layout.Content>
    </>
  );
};

export default LoadingPage;

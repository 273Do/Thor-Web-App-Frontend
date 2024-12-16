import * as Layout from "@/components/layouts/index";
import ResultTitle from "./ResultTitle";
import Feedback from "./Feedback";
import { ResultType } from "./types";

const ResultPage = ({ resource }: { resource: ResultType }) => {
  const estimate_data: ResultType = resource.read();

  return (
    <>
      <Layout.Title title={"推定結果"}>
        <ResultTitle />
      </Layout.Title>
      <Layout.Content>
        <Feedback estimate_data={estimate_data} />
      </Layout.Content>
    </>
  );
};

export default ResultPage;

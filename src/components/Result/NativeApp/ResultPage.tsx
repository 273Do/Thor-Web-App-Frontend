import Feedback from "./Feedback";
import { ResultType } from "../types";

const ResultPage = ({ resource }: { resource: ResultType }) => {
  const estimate_data: ResultType = resource.read();

  return (
    <>
      <Feedback estimate_data={estimate_data} />
    </>
  );
};

export default ResultPage;

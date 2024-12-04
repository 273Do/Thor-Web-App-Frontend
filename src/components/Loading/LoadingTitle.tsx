import { useEffect, useState } from "react";

const LoadingTitle = () => {
  const [dots, setDots] = useState<string>("．");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (dots === "．．．") {
        setDots("．");
      } else {
        setDots((prev) => prev + "．");
      }
    }, 750);

    return () => clearTimeout(timer);
  }, [dots]);

  return (
    <div className="my-8 flex flex-col items-center text-muted-foreground">
      <p>推定処理を行っています{dots}</p>
      <div className="mt-4 flex w-52 gap-4"></div>
    </div>
  );
};

export default LoadingTitle;

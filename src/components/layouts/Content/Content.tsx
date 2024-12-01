import React from "react";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-[2px] w-full bg-muted"></div>
      <div className="my-8">{children}</div>
    </>
  );
};

export default Content;

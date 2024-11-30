import React from "react";

interface TitleTypes {
  children: React.ReactNode;
  title: string;
}

const Title = ({ children, title }: TitleTypes) => {
  return (
    <div className="gap-4">
      <p className="max-w-screen-md text-center text-6xl font-bold">{title}</p>
      <>{children}</>
    </div>
  );
};

export default Title;

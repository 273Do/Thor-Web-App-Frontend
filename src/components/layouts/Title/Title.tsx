import React from "react";

interface TitleTypes {
  children: React.ReactNode;
  title: string;
}

const Title = ({ children, title }: TitleTypes) => {
  return (
    <>
      <div>{title}</div>
      <div>{children}</div>
    </>
  );
};

export default Title;

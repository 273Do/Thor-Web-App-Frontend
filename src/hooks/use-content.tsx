import { FormattedType } from "@/components/Result/types";
import { useEffect, useState } from "react";

// 指定タイトルを入力するとコンテンツを返すカスタムフック
const useContent = (data: FormattedType) => {
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    // 指定タイトルを入力するとコンテンツを返す
    const findContentByTitle = (title: string): string | null => {
      for (const section of data.formattedData) {
        const found = section.content.find((item) => item.title === title);
        if (found) {
          return found.content; // コンテンツを返す
        }
      }
      return null; // 該当なし
    };

    const result = findContentByTitle(selectedTitle);
    setContent(result);
  }, [selectedTitle, data]);

  return { selectedTitle, setSelectedTitle, content };
};

export { useContent };

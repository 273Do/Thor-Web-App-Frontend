type NativeData = {
  titles: string[];
  contents: string[];
};

// 文字列データから、タイトル、本文を抽出し、統合する関数
async function processNativeData(data: string) {
  const lines = data.split("\n");
  const titles: string[] = [];
  const contents: string[] = [];
  let currentContent = "";

  lines.forEach((line) => {
    if (line.startsWith("##")) {
      if (currentContent.trim()) {
        contents.push(currentContent.trim());
        currentContent = "";
      }
      titles.push(line.trim());
    } else if (!line.startsWith("#") && line.trim()) {
      currentContent += line.trim() + " ";
    }
  });

  if (currentContent.trim()) {
    contents.push(currentContent.trim());
  }

  return { titles, contents };
}

export { processNativeData, type NativeData };

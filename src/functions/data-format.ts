type Section = {
  section: string;
  content: {
    title: string;
    content: string;
  }[];
};

// 文字列データからセクション、タイトル、本文を抽出し、セクションごとに統合する関数
async function processData(data: string) {
  const lines = data.split("\n"); // \nで分割
  const formattedData: Section[] = [];

  let currentSection: string | null = null; // 現在のセクション名
  let currentTitle: string | null = null; // 現在のタイトル名

  lines.forEach((line: string) => {
    if (line.startsWith("# ")) {
      // セクション (# のみ)
      // currentSection = line.slice(2).trim();
      currentSection = line;
      currentTitle = null;

      // セクションが未登録なら追加
      if (
        !formattedData.find((section) => section.section === currentSection)
      ) {
        formattedData.push({
          section: currentSection,
          content: [],
        });
      }
    } else if (line.startsWith("## ")) {
      // タイトル (##)
      // currentTitle = line.slice(3).trim();
      currentTitle = line;
    } else if (line.trim()) {
      // フォーマット後のデータを該当セクションに追加
      const section = formattedData.find((s) => s.section === currentSection);
      if (section) {
        // タイトルが既に存在する場合はコンテンツを統合
        const existingTitle = section.content.find(
          (t) => t.title === currentTitle
        );
        if (existingTitle) {
          existingTitle.content += "\n" + line.trim();
        } else {
          // タイトルが存在しない場合は新規追加
          section.content.push({
            title: currentTitle ?? "Untitled",
            content: line.trim(),
          });
        }
      }
    }
  });
  // console.log(formattedData);
  return {
    formattedData,
  };
}

export { processData, type Section };

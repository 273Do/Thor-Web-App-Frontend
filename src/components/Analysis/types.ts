import { z } from "zod";

// フォームのスキーマを定義
const formSchema = z.object({
  bed_answer: z.string({ required_error: "必須項目です。" }),
  wake_answer: z.string({ required_error: "必須項目です。" }),
  habit_answer: z.string({ required_error: "必須項目です。" }),
  zip_file: z
    .instanceof(File)
    .refine(
      (file) =>
        file.type === "application/zip" ||
        file.type === "application/x-zip-compressed",
      {
        message: "アップロードされたファイルはZIP形式である必要があります。",
      }
    ),
});

// フォームのpropsの型を定義
type AnalysisFormProps = {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  bed_answer: string[];
  wake_answer: string[];
};

export { formSchema, type AnalysisFormProps };

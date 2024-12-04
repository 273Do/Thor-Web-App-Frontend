import { z } from "zod";

// フォームのスキーマを定義
const formSchema = z.object({
  answer_bed: z.string({ required_error: "必須項目です。" }),
  answer_wake: z.string({ required_error: "必須項目です。" }),
  answer_habit: z.string({ required_error: "必須項目です。" }),
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

export { formSchema };

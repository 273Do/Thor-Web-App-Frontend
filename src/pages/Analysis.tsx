import * as Layout from "@/components/layouts/index.tsx";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// answer_bedの項目を定義
const answer_bed = [
  "就寝直前",
  "15分前程度",
  "30分前程度",
  "1時間前程度",
  "充電しない",
];

// answer_wakeの項目を定義
const answer_wake = ["よく持ち歩く", "持ち歩く", "あまり持ち歩かない"];

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

const Analysis = () => {
  // フォームのバリデーションを設定
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   answer_bed: 0,
    //   answer_wake: 0,
    //   answer_habit: 0,
    // },
  });

  // フォームの送信処理
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // 回答を番号に置換
    const bed_id: number = answer_bed.indexOf(values.answer_bed);
    const wake_id: number = answer_wake.indexOf(values.answer_wake);
    let is_staying_up_late;
    if (values.answer_habit > "03:00" && values.answer_habit < "20:45") {
      is_staying_up_late = 1;
    } else is_staying_up_late = 0;
    console.log(bed_id, wake_id, is_staying_up_late);
    console.log(values.zip_file.name);
  };

  return (
    <>
      <Layout.Title title="アクティビティデータから睡眠状態を推定します。">
        <div className="my-8 flex flex-col items-center text-muted-foreground">
          <p>
            Thorはスマートフォンで計測されたアクティビティデータのみを用いて、
          </p>
          <p>睡眠状態を推定するシステムです。</p>
          {/* <Link to="/analysis"> */}
          <Button className="mt-4 w-52 bg-primary-gradient transition-all duration-100 hover:opacity-80">
            推定方法について
          </Button>
          {/* </Link> */}
        </div>
      </Layout.Title>
      <Layout.Content>
        <Card className="w-[430px]">
          <CardHeader>
            <CardTitle>推定に関するアンケート</CardTitle>
            <CardDescription>
              個人情報が保存されることはありません。
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="zip_file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>zipファイルをアップロード</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          className="mt-4 w-full cursor-pointer"
                          accept=".zip"
                          onChange={(e) => field.onChange(e.target.files?.[0])}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answer_bed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>質問1</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="就寝何時間前にスマートフォンの充電を始めますか？" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>
                              就寝何時間前にスマートフォンの充電を始めますか？
                            </SelectLabel>
                            {answer_bed.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        最近の習慣を選択してください。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answer_wake"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>質問2</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="家の中でスマートフォンを持ち歩きますか？" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>
                              家の中でスマートフォンを持ち歩きますか？
                            </SelectLabel>
                            {answer_wake.map((item, index) => (
                              <SelectItem key={index} value={item}>
                                {item}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        最近の習慣を選択してください。
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="answer_habit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>質問3</FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="mt-4 w-full cursor-pointer"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        普段は何時ごろに就寝しますか？
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-primary-gradient transition-all duration-100 hover:opacity-80"
                >
                  推定を行う
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </Layout.Content>
    </>
  );
};

export default Analysis;

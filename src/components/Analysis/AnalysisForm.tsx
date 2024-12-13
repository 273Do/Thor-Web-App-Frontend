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
import { AnalysisFormProps, formSchema } from "./types";

const AnalysisForm = ({
  onSubmit,
  answer_bed,
  answer_wake,
}: AnalysisFormProps) => {
  // フォームのバリデーションを設定
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   answer_bed: 0,
    //   answer_wake: 0,
    //   answer_habit: 0,
    // },
  });

  return (
    <>
      <Card className="w-[430px]">
        <CardHeader>
          <CardTitle>推定に関するアンケート</CardTitle>
          <CardDescription>
            個人情報が保存されることはありません。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                className="w-full bg-primary-gradient text-white transition-all duration-100 hover:opacity-80"
              >
                推定を行う
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalysisForm;

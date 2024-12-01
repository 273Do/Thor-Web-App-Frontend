import * as Layout from "@/components/layouts/index.tsx";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


  return (
    <>
      <Layout.Title title="アクティビティデータから睡眠状態を推定します。">
        <div className="my-8 flex flex-col items-center text-muted-foreground">
          <p>
            Thorはスマートフォンで計測されたアクティビティデータのみを用いて、
          </p>
          <p>睡眠状態を推定するシステムです。</p>
          <Input
            type="file"
            className="mt-4 w-52 cursor-pointer"
            accept=".zip"
          />
        </div>
      </Layout.Title>
      <Layout.Content>
        <Card className="max-w-3xl">
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>質問１</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a verified email to display" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">
                            m@example.com
                          </SelectItem>
                          <SelectItem value="m@google.com">
                            m@google.com
                          </SelectItem>
                          <SelectItem value="m@support.com">
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        You can manage email addresses in your
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
          {/* <CardFooter> */}
          {/* <p>Card Footer</p> */}
          {/* <Button type="submit">Submit</Button> */}
          {/* </CardFooter> */}
        </Card>
      </Layout.Content>
    </>
  );
};

export default Analysis;

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { NativeData } from "@/functions/data-format-native-app";
import ReactMarkdown from "react-markdown";

const FECarousel = ({ data }: { data: NativeData }) => {
  const { titles, contents } = data;
  console.log(titles);
  console.log(contents);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <CardContent>
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {contents.map((content, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="w-full">
                    <CardContent className="aspect-square w-full p-6">
                      <ReactMarkdown className="block max-h-[310px] w-full break-words text-base">
                        {content}
                      </ReactMarkdown>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14 mt-[165px]" />
          <CarouselNext className="mr-14 mt-[165px]" />
          <div className="flex items-center justify-center gap-2 pt-2 text-center text-sm text-muted-foreground">
            <ReactMarkdown className="fb">{titles[current - 1]}</ReactMarkdown>
            <p>
              {current}/{count}
            </p>
          </div>
        </Carousel>
      </CardContent>
    </>
  );
};

export default FECarousel;

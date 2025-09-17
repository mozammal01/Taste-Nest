"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/Interfaces/shared-interface";
import { Button } from "../ui/button";
export default function Feedback({ feedbacks }: { feedbacks: Testimonial[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {feedbacks.map((testimonial, i) => (
            <CarouselItem key={i}>
              <Card className="border-2 border-secondary rounded-2xl">
                <CardContent className="p-6 h-[200px] flex flex-col justify-between">
                  <div className="text-start text-gray-600 font-semibold text-xl">{testimonial.review}</div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-extrabold">{testimonial.author}</h1>
                    <Button variant="orange" size="smRounded"></Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-4">
        {feedbacks.map((_, i) => (
          <button
            key={i}
            className={cn("w-3 h-3 rounded-full transition-colors", selectedIndex === i ? "bg-gray-900" : "bg-gray-400")}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}

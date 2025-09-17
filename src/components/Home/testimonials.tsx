"use client";
import { Button } from "../ui/button";
import redImg from "../../../public/testimonials/redImage.png";
import coffeeImg from "../../../public/testimonials/coffee.png";
import strawberryImg from "../../../public/testimonials/strawberry.png";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  author: string;
  review: string;
}

export default function Testimonials() {
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

  const testimonials: Testimonial[] = [
    {
      author: "Bratlee Hamint",
      review: "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.",
    },
    {
      author: "Sarah Johnson",
      review: "The desserts here are heavenly! The chocolate lava cake melted perfectly in my mouth. Definitely coming back.",
    },
    {
      author: "David Chen",
      review: "Best steak I’ve had in years. Cooked to perfection and seasoned just right. Worth every penny.",
    },
    {
      author: "Emily Carter",
      review: "The coffee is rich, aromatic, and smooth. Perfect way to start the morning.",
    },
    {
      author: "Michael Lee",
      review: "I tried the cheeseburger, and it was loaded with flavor! Fresh buns and juicy meat. Highly recommended.",
    },
    {
      author: "Olivia Brown",
      review: "The ambiance is cozy, and the staff are very friendly. It felt like dining at home.",
    },
    {
      author: "Daniel Smith",
      review: "Excellent service! They made sure everything was just perfect. I’ll be bringing my family next time.",
    },
    {
      author: "Sophia Wilson",
      review: "I love how they combine modern dishes with traditional flavors. A truly unique dining experience.",
    },
  ];

  return (
    <div className="md:max-w-[1200px] max-w-[500px] md:mx-auto my-20 md:flex justify-between items-end mx-2 px-4">
      <div className="md:w-[40%] w-full md:flex flex-col gap-10 space-y-10">
        <div className="space-y-4">
          <p className="text-primary font-bold text-lg uppercase">Testimonials & Reviews</p>
          <h1 className="text-5xl font-extrabold">Our Customer Feedback</h1>
        </div>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, i) => (
              <CarouselItem key={i}>
                <Card className="border-4 border-secondary rounded-2xl">
                  <CardContent className="p-6 h-[200px] flex flex-col justify-between">
                    <div className="text-start text-gray-600 font-semibold text-xl">"{testimonial.review}"</div>
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
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={cn("w-3 h-3 rounded-full transition-colors", selectedIndex === i ? "bg-gray-900" : "bg-gray-400")}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full ml-30 hidden md:block">
        <div className="relative flex justify-between">
          <div className="bg-[#F3274C] rounded-3xl overflow-hidden">
            <Image className="object-cover w-full h-full" src={redImg} alt="Red testimonial image" width={290} height={290} />
          </div>
          <div className="absolute bottom-60 left-50">
            <Image src={coffeeImg} alt="Coffee testimonial image" width={290} height={290} className="object-cover rounded-3xl" />
          </div>
          <div className="absolute top-20 left-80">
            <Image src={strawberryImg} alt="Strawberry testimonial image" width={290} height={290} className="object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

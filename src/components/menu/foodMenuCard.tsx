"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";
import { AnimatedButton } from "../ui/animated-button";

interface FoodMenuCardProps {
  item: {
    id: number;
    name: string;
    content: string;
    category: string;
    price: number;
    image: string;
  };
}

export function FoodMenuCard({ item }: FoodMenuCardProps) {
  return (
    <Card className="relative shadow-none">
      <CardHeader>
        <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
          <div className="w-full h-[300px] overflow-hidden rounded-t-2xl relative">
            <Image src={item.image} alt={item.name} fill className="object-cover" />
          </div>
        </Lens>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{item.name}</CardTitle>
        <CardDescription>{item.content}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end items-center gap-4">
          <AnimatedButton variant="ripple" size="lg">Order Now</AnimatedButton>
          {/* <AnimatedButton variant="pulse" size="lg">Add to Cart</AnimatedButton> */}
          <AnimatedButton variant="rippleYellow" size="lg">Add to Cart</AnimatedButton>
      </CardFooter>
    </Card>
  );
}

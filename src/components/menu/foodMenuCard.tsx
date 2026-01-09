"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Lens } from "@/components/ui/lens";
import Image from "next/image";
import { AnimatedButton } from "../ui/animated-button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FoodMenuCardProps {
  item: {
    id: number;
    name: string;
    content: string;
    category: string;
    price: number;
    image: string;
    discount?: string;
    freeDelivery?: boolean;
  };
  userRole?: string;
}

export function FoodMenuCard({ item, userRole }: FoodMenuCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Card>
        <CardHeader>
          <Lens zoomFactor={2} lensSize={150} isStatic={false} ariaLabel="Zoom Area">
            <div className="w-full h-[300px] overflow-hidden rounded-t-2xl relative">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
              <div className="absolute top-2 left-1 w-full h-full flex justify-start items-start gap-2">
                {item.discount && <div className="bg-primary text-white w-fit px-2 rounded-full">{item.discount}</div>}
                {item.freeDelivery && (
                  <div className="bg-primary text-white w-fit px-2 rounded-full">{item.freeDelivery ? "Free Delivery" : ""}</div>
                )}
              </div>
            </div>
          </Lens>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl">{item.name}</CardTitle>
          <CardDescription>{item.content}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end items-center gap-4">
          {userRole === "admin" ? (
            <>
              <AnimatedButton variant="ripple" size="lg">
                Delete Item
              </AnimatedButton>
              <AnimatedButton variant="rippleYellow" size="lg">
                Edit Item
              </AnimatedButton>
            </>
          ) : (
            <>
              <AnimatedButton variant="ripple" size="lg">
                Order Now
              </AnimatedButton>
              <AnimatedButton variant="rippleYellow" size="lg">
                Add to Cart
              </AnimatedButton>
            </>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

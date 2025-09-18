"use client";
import Image from "next/image";
import chickenImg from "@/../public/dishes/chicken.png";
import pizzaImg from "@/../public/dishes/pizza.png";
import coffeeImg from "@/../public/dishes/coffee.png";
import backgroundImg from "@/../public/dishes/Background.png";
import icon from "@/../public/icons/bag.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Dishes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const dishes = [
    {
      id: 1,
      name: "Crispy Fried Chicken",
      price: "$14.85",
      discountPrice: "$10.85",
      image: chickenImg,
      backgroundImage: backgroundImg,
      icon: icon,
    },
    {
      id: 2,
      name: "Shroom Bacon Burger",
      price: "$21.76",
      discountPrice: "$11.76",
      image: pizzaImg,
      backgroundImage: backgroundImg,
      icon: icon,
    },
    {
      id: 3,
      name: "Delicious Black Coffee",
      price: "$21.76",
      discountPrice: "$11.76",
      image: coffeeImg,
      backgroundImage: backgroundImg,
      icon: icon,
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto md:my-28 text-center">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-6xl font-extrabold"
      >Featured Dishes</motion.h1>
      <div className="border-b-8 border-secondary pb-4 md:mx-[250px] lg:mx-[450px] mx-[120px]"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-10 md:gap-20 my-20 px-4"
      >
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="border-4 border-secondary rounded-2xl p-10 w-[400px] h-[450px] flex flex-col justify-between relative"
          >
            <div className="relative">
              <div className="absolute top-16 left-0">
                <Image src={dish.backgroundImage} alt="dish background decoration" width={300} height={300} />
              </div>
              <div className="absolute top-0 left-0">
                <Image src={dish.image} alt="crispy fried chicken dish" width={300} height={300} />
              </div>
            </div>
            <div className="font-extrabold text-start flex justify-between items-center">
              <div>
                <h1 className="text-xl">{dish.name}</h1>
                <div className="text-gray-500">
                  <span className="text-lg me-2 relative">
                    {dish.price} <hr className="w-16 absolute top-1/2 left-0 -translate-y-1/2" />
                  </span>

                  <span className="text-2xl">
                    <span className="text-primary">$</span>
                    {dish.discountPrice}
                  </span>
                </div>
              </div>
              <div className="bg-secondary rounded p-4">
                <Image src={dish.icon} alt="add to cart" width={15} height={15} />
              </div>
            </div>
            <div className="absolute top-2 left-2">
              <div className="relative">
                <div className="bg-secondary rounded-full h-15 w-15 p-4 flex flex-col items-center justify-center">
                  <span className="uppercase font-extrabold">sale</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import dessertImg from "@/../public/categories/dessert.png";
import steakImg from "@/../public/categories/steak.png";
import coffeeImg from "@/../public/categories/coffee.png";
import burgerImg from "@/../public/categories/burger.png";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import DessertIcon from "../Icons/DessertIcon";
import SteakIcon from "../Icons/SteakIcon";
import CoffeeIcon from "../Icons/CoffeeIcon";
import BurgerIcon from "../Icons/BurgerIcon";
import mask from "@/../public/categories/mask.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Sample data
const categories = [
  { id: "dessert", label: "Dessert", icon: DessertIcon },
  { id: "steak", label: "Steak", icon: SteakIcon },
  { id: "coffee", label: "Coffee", icon: CoffeeIcon },
  { id: "burger", label: "Burger", icon: BurgerIcon },
];

const foods: Record<string, { image: StaticImageData; title: string; items: { name: string; description: string; price: string }[] }> = {
  dessert: {
    image: dessertImg,
    title: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", description: "Warm cake with molten chocolate center.", price: "$5.99" },
      { name: "Cheesecake", description: "Classic creamy cheesecake with crust.", price: "$6.50" },
    ],
  },
  steak: {
    image: steakImg,
    title: "Steaks",
    items: [
      { name: "Ribeye Steak", description: "Juicy ribeye with garlic butter.", price: "$19.99" },
      { name: "T-Bone Steak", description: "Tender T-bone with smoky flavor.", price: "$22.50" },
    ],
  },
  coffee: {
    image: coffeeImg,
    title: "Coffee",
    items: [
      { name: "Espresso", description: "Strong coffee shot.", price: "$2.50" },
      { name: "Cappuccino", description: "Espresso with steamed milk.", price: "$3.50" },
    ],
  },
  burger: {
    image: burgerImg,
    title: "Burgers",
    items: [
      { name: "Classic Beef Burger", description: "Beef patty with cheese & veggies.", price: "$7.99" },
      { name: "Veggie Burger", description: "Plant-based patty with avocado.", price: "$6.50" },
    ],
  },
};

export default function FoodMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [active, setActive] = useState("dessert");

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Category Tabs */}
      <div className="flex flex-col md:flex-row gap-4">
        {categories.map((cat) => {
          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
              key={cat.id}
            >
              <motion.div
                onClick={() => setActive(cat.id)}
                className={cn(
                  "hidden md:flex flex-col justify-center items-center gap-2 border shadow-sm rounded-xl cursor-pointer p-8 relative overflow-hidden",
                  "w-[190px] h-[190px]"
                )}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={false}
                  animate={{
                    opacity: active === cat.id ? 1 : 0,
                    scale: active === cat.id ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {/* Content */}
                <motion.div
                  className="relative z-10"
                  animate={{
                    scale: active === cat.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <cat.icon
                    className={cn("size-[70px] transition-colors duration-300", active === cat.id ? "text-white" : "text-primary")}
                  />
                </motion.div>
                <motion.span
                  className={cn(
                    "font-extrabold relative z-10 transition-colors duration-300",
                    active === cat.id ? "text-white" : "text-black"
                  )}
                  animate={{
                    y: active === cat.id ? -2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {cat.label}
                </motion.span>
              </motion.div>
              {active === cat.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -25 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -25 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="hidden md:block absolute top-[168px] left-3"
                >
                <div className="relative">
                  <Image src={mask} alt={cat.label} width={168} height={40} />
                </div>
                </motion.div>

              )}
              <motion.span
                onClick={() => setActive(cat.id)}
                className={cn(
                  "font-extrabold cursor-pointer flex items-center gap-2 md:hidden relative",
                  active === cat.id ? "text-primary" : "text-black"
                )}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                {cat.label}
                {active === cat.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Content */}
      <motion.div
        key={active} // This key ensures the animation triggers when category changes
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -25, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center w-full md:max-w-4xl rounded-2xl min-h-[300px] my-10 mt-20"
      >
        {/* Food Image with animation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image src={foods[active].image} alt={foods[active].title} height={300} width={300} className="object-cover rounded-2xl" />
        </motion.div>

        {/* Content Card with animation */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <CardContent className="p-6 md:min-w-[580px] min-w-[300px] md:h-[300px] bg-slate-50 rounded-2xl">
            <motion.h2
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {foods[active].title}
            </motion.h2>
            <motion.ul className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
              {foods[active].items.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex justify-between items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + i * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <span className="text-red-500 font-semibold">{item.price}</span>
                </motion.li>
              ))}
            </motion.ul>
          </CardContent>
        </motion.div>
      </motion.div>
    </div>
  );
}

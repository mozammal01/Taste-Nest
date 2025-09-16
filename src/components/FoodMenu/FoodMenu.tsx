"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import dessertImg from "../../../public/categories/dessert.png";
import steakImg from "../../../public/categories/steak.png";
import coffeeImg from "../../../public/categories/coffee.png";
import burgerImg from "../../../public/categories/burger.png";
import { CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import DessertIcon from "../Icons/DessertIcon";
import SteakIcon from "../Icons/SteakIcon";
import CoffeeIcon from "../Icons/CoffeeIcon";
import BurgerIcon from "../Icons/BurgerIcon";
import mask from "../../../public/categories/mask.png";

const dessertIcon = DessertIcon;
const steakIcon = SteakIcon;
const coffeeIcon = CoffeeIcon;
const burgerIcon = BurgerIcon;
// Sample data
const categories = [
  { id: "dessert", label: "Dessert", icon: dessertIcon },
  { id: "steak", label: "Steak", icon: steakIcon },
  { id: "coffee", label: "Coffee", icon: coffeeIcon },
  { id: "burger", label: "Burger", icon: burgerIcon },
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
  const [active, setActive] = useState("dessert");

  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Category Tabs */}
      <div className="flex flex-col md:flex-row gap-4">
        {categories.map((cat) => {
          console.log(cat);
          return (
            <div className="relative" key={cat.id}>
              <div
                onClick={() => setActive(cat.id)}
                className={cn(
                  "hidden md:flex flex-col justify-center items-center gap-2 border shadow-sm rounded-xl transition w-[190px] h-[190px] cursor-pointer p-8",
                  active === cat.id ? "bg-primary text-white border-primary" : "hover:bg-gray-100 text-primary"
                )}
              >
                <div>
                  <cat.icon className="size-[70px]" />
                </div>
                <span className={cn("font-extrabold", active === cat.id ? "" : "text-black")}>{cat.label}</span>
              </div>
              {active === cat.id && <Image src={mask} alt="mask" width={168} height={40} className="hidden md:block absolute top-[169px] left-3" />}
              <span onClick={() => setActive(cat.id)} className={cn("font-extrabold cursor-pointer flex items-center gap-2 md:hidden", active === cat.id ? "text-primary" : "text-black")}>{cat.label}</span>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center w-full md:max-w-4xl rounded-2xl h-[300px] my-10 mt-20">
        <div className="relative">
          <Image src={foods[active].image} alt={foods[active].title} height={300} width={300} className="object-cover rounded-2xl" />
        </div>
        <CardContent className="p-6 md:min-w-[580px] min-w-[300px] md:h-[300px] bg-slate-50 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">{foods[active].title}</h2>
          <ul className="space-y-4">
            {foods[active].items.map((item, i) => (
              <li key={i} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <span className="text-red-500 font-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </div>
    </div>
  );
}

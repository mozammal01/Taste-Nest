"use client";
import BurgerIcon from "../icons/BurgerIcon";
import CoffeeIcon from "../icons/CoffeeIcon";
import DessertIcon from "../icons/DessertIcon";
import SteakIcon from "../icons/SteakIcon";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import mask from "@/../public/categories/mask.png";
import { useRouter } from "next/navigation";

export default function FullMenuCategories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [active, setActive] = useState("all");
  const router = useRouter();
  const categories = [
    { id: "all", label: "All", icon: DessertIcon },
    { id: "dessert", label: "Dessert", icon: DessertIcon },
    { id: "steak", label: "Steak", icon: SteakIcon },
    { id: "coffee", label: "Coffee", icon: CoffeeIcon },
    { id: "burger", label: "Burger", icon: BurgerIcon },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Category Tabs */}
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
              onClick={() => {
                setActive(cat.id);
                router.push(`/menu?category=${cat.id}`);
              }}
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
                <cat.icon className={cn("size-[70px] transition-colors duration-300", active === cat.id ? "text-white" : "text-primary")} />
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
                "font-extrabold cursor-pointer flex items-center gap-2 md:hidden relative ",
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
  );
}

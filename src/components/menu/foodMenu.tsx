"use client";
import menu from "@/constants/menu.json";
import { FoodMenuCard } from "./foodMenuCard";
import { useSearchParams } from "next/navigation";

export default function FoodMenu() {
  const params = useSearchParams();
  const category = params.get("category");
  const filteredMenu = menu.filter((item) => item.category === category); 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-20 ">
      {filteredMenu.length > 0 ? (
        filteredMenu.map((item) => (
          <FoodMenuCard key={item.id} item={item} />
        ))
      ) : (
        menu.map((item) => (
          <FoodMenuCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
}

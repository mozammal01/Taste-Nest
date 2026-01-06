"use client";
import menu from "@/constants/menu.json";
import { FoodMenuCard } from "./foodMenuCard";

export default function FoodMenu() {
  // const [menuItems, setMenuItems] = useState(menu);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-20 ">
      {menu.map((item) => (
        <FoodMenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}

import chickenImg from "@/../public/dishes/chicken.png";
import pizzaImg from "@/../public/dishes/pizza.png";
import coffeeImg from "@/../public/dishes/coffee.png";
import backgroundImg from "@/../public/dishes/Background.png";
import icon from "@/../public/icons/bag.png";
import { StaticImageData } from "next/image";

export interface IDish {
  id: number;
  name: string;
  price: string;
  discountPrice: string;
  image: StaticImageData;
  backgroundImage: StaticImageData;
  icon: StaticImageData;
}

export const dishes: IDish[] = [
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
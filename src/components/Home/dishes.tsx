import Image from "next/image";
import chickenImg from "../../../public/dishes/chicken.png";
import pizzaImg from "../../../public/dishes/pizza.png";
import coffeeImg from "../../../public/dishes/coffee.png";
import backgroundImg from "../../../public/dishes/Background.png";
import icon from "../../../public/icons/bag.png";
import { Button } from "../ui/button";
export default function Dishes() {
  return (
    <div className="max-w-[1200px] mx-auto md:my-30 text-center">
      <h1 className="text-6xl font-extrabold">Featured Dishes</h1>
      <div className=" border-b-8 border-secondary pb-4 md:mx-[450px] mx-auto"></div>
      <div className="grid md:grid-cols-3  justify-center items-center gap-20 my-20">
        <div className="border-6 border-secondary rounded-2xl p-10 w-[400px] h-[450px] flex flex-col justify-between relative">
          <div className="relative">
            <div className="absolute top-15 left-0">
              <Image src={backgroundImg} alt="backgroundImg" width={300} height={300} />
            </div>
            <div className="absolute top-0 left-0">
              <Image src={chickenImg} alt="chickenImg" width={300} height={300} />
            </div>
          </div>
          <div className="font-extrabold text-start flex justify-between items-center">
            <div>
              <h1 className="text-xl">Crispy Fried Chicken</h1>
              <div className="text-gray-500">
                <span className="text-lg me-2">$14.85</span>
                <span className="text-2xl">
                  <span className="text-primary">$</span>10.85
                </span>
              </div>
            </div>
            <div className="bg-secondary rounded p-4">
              <Image src={icon} alt="icon" width={15} height={15} />
            </div>
          </div>
          <div className="absolute top-2 left-2">
            <div className="relative">
              <Button variant="orange" size="smRounded"></Button>
              <span className="uppercase font-extrabold absolute top-4 left-3">sale</span>
            </div>
          </div>
        </div>

        {/* Pizza */}
        <div className="border-6 border-secondary rounded-2xl p-10 w-[400px] h-[450px] flex flex-col justify-between relative">
          <div className="relative">
            <div className="absolute top-15 left-0">
              <Image src={backgroundImg} alt="backgroundImg" width={300} height={300} className="object-cover" />
            </div>
            <div className="absolute top-0 left-0">
              <Image src={pizzaImg} alt="pizzaImg" width={300} height={300} className="object-cover" />
            </div>
          </div>
          <div className="font-extrabold text-start flex justify-between items-center">
            <div>
              <h1 className="text-xl">Shroom Bacon Burger</h1>
              <div className="text-gray-500">
                <span className="text-lg me-2">$21.76</span>
                <span className="text-2xl">
                  <span className="text-primary">$</span>11.76
                </span>
              </div>
            </div>
            <div className="bg-secondary rounded p-4">
              <Image src={icon} alt="icon" width={15} height={15} />
            </div>
          </div>
          <div className="absolute top-2 left-2">
            <div className="relative">
              <Button variant="orange" size="smRounded"></Button>
              <span className="uppercase font-extrabold absolute top-4 left-3">sale</span>
            </div>
          </div>
        </div>

        {/* Coffee */}
        <div className="border-6 border-secondary rounded-2xl p-10 w-[400px] h-[450px] flex flex-col justify-between relative">
          <div className="relative">
            <div className="absolute top-15 left-0">
              <Image src={backgroundImg} alt="backgroundImg" width={300} height={300} className="object-cover" />
            </div>
            <div className="absolute top-0 left-0">
              <Image src={coffeeImg} alt="chickenImg" width={300} height={300} className="object-cover" />
            </div>
          </div>
          <div className="font-extrabold text-start flex justify-between items-center">
            <div>
              <h1 className="text-xl">Delicious Black Coffee</h1>
              <div className="text-gray-500">
                <span className="text-lg me-2">$21.76</span>
                <span className="text-2xl">
                  <span className="text-primary">$</span>11.76
                </span>
              </div>
            </div>
            <div className="bg-secondary rounded p-4">
              <Image src={icon} alt="icon" width={15} height={15} className="object-cover" />
            </div>
          </div>
          <div className="absolute top-2 left-2">
            <div className="relative">
              <Button variant="orange" size="smRounded"></Button>
              <span className="uppercase font-extrabold absolute top-4 left-3">sale</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

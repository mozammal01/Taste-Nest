import Dishes from "./dishes";
import Menu from "./menu";
import backgroundImg from "@/../public/menu&dishes/full-background.png";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function MenuDishes() {
  return (
    <div>
      <Menu />
      <div className="md:-mb-40 max-w-[1200px] mx-auto hidden md:block px-2">
        <div className="relative">
          <Image
            src={backgroundImg}
            alt="restaurant reservation background"
            width={1200}
            height={300}
            className="rounded-2xl object-cover h-[300px]"
          />
          <div className="absolute top-0 left-0 text-white p-10 px-20 flex gap-10 justify-between">
            <div>
              <h1 className="text-5xl uppercase font-extrabold">
                Reserve
                <span className="block border-b-8 border-amber-400 pb-4 mt-4">A Table</span>
              </h1>
              <p className="text-lg mt-4 font-semibold">Discover our New Menu !</p>
            </div>
            <div className="mt-10 w-[60%]">
              <div className="grid grid-cols-4 gap-4 text-primary font-semibold">
                <Input className="w-full py-5 rounded bg-white col-span-2 placeholder:font-bold" type="text" placeholder="No of guest" />
                <Input className="w-full py-5 rounded bg-white placeholder:font-bold" type="date" placeholder="Date" />
                <Input className="w-full py-5 rounded bg-white placeholder:font-bold" type="time" placeholder="Time" />
                <Input className="w-full py-5 rounded bg-white col-span-2 placeholder:font-bold" type="text" placeholder="Full Name" />
                <Input className="w-full py-5 rounded bg-white col-span-2 placeholder:font-bold" type="number" placeholder="Phone Number" />
              </div>
              <div className="mt-7 text-end">
                <Button variant="orange" size="lg">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-20 pt-60">
        <Dishes />
      </div>
    </div>
  );
}

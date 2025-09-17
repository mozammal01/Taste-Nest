import bannerImage from "@/../public/banner/bannerImg.png";
import videoIcon from "@/../public/banner/02.png";
import pizzaImg from "@/../public/banner/pizza.png";
import { Button } from "../ui/button";
import WeeklySpecialCard from "../ui/weekly-special-card";
import Image from "next/image";
export default function Banner() {
  return (
    <div style={{ backgroundImage: `url(${bannerImage.src})` }} className="bg-cover bg-center min-h-screen lg:h-[831px]">
      <div className="flex justify-between items-center py-4 max-w-[1500px] mx-auto">
        <div className="text-white lg:w-[50%] min-h-screen lg:h-[831px] flex flex-col gap-4 justify-center px-4 lg:px-20 space-y-6">
          <h1 className="xl:text-6xl lg:text-5xl text-4xl font-bold">The Perfect Space to Enjoy Fantastic Food</h1>
          <p className="text-xl">Festive dining at Farthings where we are strong believers in using the very best produce</p>
          <div className="flex gap-8 justify-start items-center my-8">
            <Button variant="red" size="lg">
              See our menu
            </Button>
            <div className="flex gap-2 items-center justify-center">
              <Image src={videoIcon} alt="video icon" width={50} height={50} />
              <span className="uppercase font-bold text-sm">video</span>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[400px] relative top-[200px] lg:block hidden">
          <WeeklySpecialCard price="90.85" title="Sicilian Pizza" rating={5} imageUrl={pizzaImg.src} className="w-full" />
        </div>
      </div>
    </div>
  );
}

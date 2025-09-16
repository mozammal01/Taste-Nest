import bannerImage from "../../../public/banner/bannerImg.png";
import videoIcom from "../../../public/banner/02.png"
import pizzaImg from "../../../public/banner/pizzaImg.png"
import { Button } from "../ui/button";
import Image from "next/image";
export default function Banner() {
  return (
    <div style={{ backgroundImage: `url(${bannerImage.src})` }} className="bg-cover bg-center h-[831px]">
      <div className="flex justify-between items-center py-4 max-w-[1500px] mx-auto">
        <div className="text-white md:w-[50%] h-[831px] flex flex-col gap-4 justify-center px-4 md:px-20 space-y-6">
          <h1 className="text-6xl font-bold">The Perfect Space to
          Enjoy Fantastic Food</h1>
          <p className="text-xl">Festive dining at Farthings where we are strong believers in
          using the very best produce</p>
          <div className="flex gap-8 justify-start items-center my-8">
          <Button variant="red" size="lg">See our menu</Button>
          <div className="flex gap-2 items-center justify-center">
          <Image src={videoIcom} alt="videoIcom" width={50} height={50} />
          <span className="uppercase font-bold text-sm">video</span>
          </div>
          </div>
        </div>
        <div className="w-[400px] h-[800px] relative top-[500] hidden md:block">
          <Image src={pizzaImg} alt="pizzaImg" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}

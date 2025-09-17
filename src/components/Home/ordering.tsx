import Image from "next/image";
import orderingImg from "@/../public/icons/ordering-symbol.png";
import appleIcon from "@/../public/icons/apple.png";
import playIcon from "@/../public/icons/play.png";
import { Button } from "../ui/button";
import backgroundImg from "@/../public/ordering/bg.png";
import phoneImg from "@/../public/ordering/mobile.png";
import bikeImg from "@/../public/ordering/bike.png";
import leafImg from "@/../public/ordering/leaf.png";
import pizzaImg from "@/../public/ordering/pizza.png";
import saladImg from "@/../public/ordering/salad.png";

export default function Ordering() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg.src})` }} className="bg-cover bg-center mt-80 h-[500px]">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-between items-center p-10 py-20">
          {/* Left Content */}
          <div className="md:w-[50%] w-full">
            <p className="text-primary font-extrabold mb-5">Best App For Foods Ordering</p>
            <h1 className="text-4xl font-extrabold mb-10">Manage Your Restaurant Anytime! Anywhere!</h1>
            <div className="flex items-center gap-2 my-5">
              <Image src={orderingImg} alt="ordering feature icon" width={20} height={20} />
              <span>Higher Reach - Minimal Effort</span>
            </div>
            <div className="flex items-center gap-2 my-5">
              <Image src={orderingImg} alt="ordering feature icon" width={20} height={20} />
              <span>Showcase your Brand</span>
            </div>
            <div className="flex items-center gap-2 my-5">
              <Image src={orderingImg} alt="ordering feature icon" width={20} height={20} />
              <span>Exclusive offers & discounts</span>
            </div>
            <div className="flex gap-2 mt-10">
              <Button variant="red" size="lg">
                <Image src={playIcon} alt="Google Play store icon" width={15} height={15} />
                <span>Google Play</span>
              </Button>
              <Button size="lg">
                <Image src={appleIcon} alt="Apple App Store icon" width={15} height={15} />
                <span>Apple Store</span>
              </Button>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full relative hidden 2xl:block">
            <div className="absolute bottom-32 left-44">
              <Image src={leafImg} alt="decorative leaf" width={50} height={90} />
            </div>
            <div className="absolute top-[-80px] left-28">
              <Image src={bikeImg} alt="delivery bike" width={240} height={240} />
            </div>
            <div className="absolute top-[-200px] left-96">
              <Image src={phoneImg} alt="mobile app interface" width={400} height={480} />
            </div>
            <div className="absolute bottom-28 right-[-130px]">
              <Image src={pizzaImg} alt="delicious pizza" width={280} height={160} />
            </div>
            <div className="absolute top-[-80px] right-[-250px]">
              <Image src={saladImg} alt="fresh salad" width={285} height={240} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

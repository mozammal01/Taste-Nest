import footerLeftImg from "../../../public/footer/footer-left.png";
import footerRightImg from "../../../public/footer/footer-right.png";
import Image from "next/image";
import logo from "../../../public/logo/logoWhite.png";
import leftArrow from "../../../public/icons/leftArrow.png";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-slate-50 relative h-[580px]">
      <div className="flex justify-between items-center">
        <div className="absolute bottom-0 left-0">
          <Image src={footerLeftImg} alt="footerLeftImg" width={200} height={200} />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image src={footerRightImg} alt="footerRightImg" width={200} height={200} />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center max-w-[1200px] mx-auto pt-20">
        <div className="flex justify-between w-full gap-10">
          {/* Left Content */}
          <div className="flex flex-col gap-4 bg-primary h-[330px] w-[400px] rounded-2xl text-white">
            <Image src={logo} alt="logo" width={200} height={200} />
            <div className="flex flex-col gap-2 ps-10">
              <span className="font-extrabold -mt-5">Tuesday – Saturday: 12:00pm – 23:00pm</span>
              <span className="font-extrabold underline">Closed on Sunday</span>
              <span className="font-extrabold mt-20">5 star rated on TripAdvisor</span>
            </div>
          </div>
          {/* Left Middle Content */}
          <div>
            <h1 className="font-extrabold border-b-4 border-amber-300 text-xl">About</h1>
            <div className="flex flex-col space-y-3 mt-10">
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Fredoke one</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Special Dish</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Reservation</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Contact</span>
              </div>
            </div>
          </div>
          {/* Right Middle Content */}
          <div>
            <h1 className="font-extrabold border-b-4 border-amber-300 text-xl">Menu</h1>
            <div className="flex flex-col space-y-3 mt-10">
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Steaks</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Burgers</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>BBQ</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Coctails</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Image src={leftArrow} alt="leftArrow" width={10} height={10} />
                <span>Desserts</span>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div>
            <h1 className="font-extrabold border-b-4 border-amber-300 text-xl">Newsletter</h1>
            <div className="flex flex-col space-y-3 mt-10">
              <div className="flex items-center gap-2 font-semibold">
                <span>Get recent news and updates. </span>
              </div>
              <Input className="w-full py-5 rounded bg-white placeholder:font-bold px-5" type="email" placeholder="Enter your email" />
              <Button variant="red" className="w-[100px]">
                Submit
              </Button>
            </div>
          </div>
        </div>
        {/* Bottom Content */}
        <div className="w-full mt-20 border-t-8 border-amber-300">
          <div className="flex justify-between items-center  gap-2 py-4 font-extrabold">
            <div>
              <span>
                <span className="text-primary ">©2025TasteNest </span>| All mozammal01 Themes
              </span>
            </div>
            <div className="underline">
              <span>Facebook</span>
            </div>
            <div className="underline">
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

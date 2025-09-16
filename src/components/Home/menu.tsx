import Image from "next/image";
import bbqImg from "../../../public/menu/bbq.png";
import coctailImg from "../../../public/menu/coctail.png";
import { Button } from "../ui/button";
export default function Menu() {
  return (
    <div className="md:max-w-[1200px] max-w-[300px] mx-auto mt-50 md:my-30 text-center">
      <div className="md:mb-20">
        <h1 className="text-6xl font-extrabold">Discover Menu</h1>
        <div className=" border-b-8 border-amber-300 pb-4 md:mx-[450px] mx-auto"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-20">
        <div className="md:w-[50%] w-full relative">
          <Image src={bbqImg} alt="bbqImg" width={600} height={500} />
          <div className="absolute top-10 left-0 w-full h-full text-white px-10 text-start space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold">Steaks & BBQ</h1>
            <p>
              canonical classics to obscure
              <span className="block">tiki drinks</span>
            </p>
          </div>
          <div className="absolute top-60 right-50 w-full h-full md:block hidden">
            <div className="relative">
              <Button variant="orange" size="lgRounded"></Button>
              <div className="absolute flex flex-col items-center justify-center font-extrabold top-7 right-64">
                <p className="text-3xl text-primary">$120</p>
                <span>person</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] w-full relative">
          <Image src={coctailImg} alt="coctailImg" width={600} height={500} />
          <div className="absolute top-10 left-0 w-full h-full text-white px-10 text-start space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold">Coctails</h1>
            <p>
              canonical classics to obscure
              <span className="block">tiki drinks</span>
            </p>
          </div>
          <div className="absolute top-60 right-50 w-full h-full md:block hidden">
            <div className="relative">
              <Button variant="orange" size="lgRounded"></Button>
              <div className="absolute flex flex-col items-center justify-center font-extrabold top-7 right-64">
                <p className="text-3xl text-primary">$120</p>
                <span>person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

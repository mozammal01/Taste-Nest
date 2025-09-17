import Image from "next/image";
import bbqImg from "@/../public/menu/bbq.png";
import cocktailImg from "@/../public/menu/coctail.png";
export default function Menu() {
  return (
    <div className="md:max-w-[1200px] max-w-[300px] mx-auto mt-12 md:my-28 text-center">
      <div className="md:mb-20">
        <h1 className="text-6xl font-extrabold">Discover Menu</h1>
        <div className="border-b-8 border-secondary pb-4 md:mx-[250px] lg:mx-[450px] mx-[120px]"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-20 md:gap-10 my-20 px-4">
        <div className="w-full relative">
          <Image src={bbqImg} alt="steaks and BBQ menu" width={600} height={500} />
          <div className="absolute top-10 left-0 w-full h-full text-white px-10 text-start space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold -mt-5">Steaks & BBQ</h1>
            <p className="hidden md:block">
              canonical classics to obscure
              <span className="block">tiki drinks</span>
            </p>
          </div>
          <div className="absolute w-full h-full top-24 md:top-40 lg:top-52 left-5">
            <div className="bg-secondary rounded-full h-24 w-24 p-4 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-primary">$120</span>
              <span className="text-sm font-extrabold">person</span>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <Image src={cocktailImg} alt="cocktails menu" width={600} height={500} />
          <div className="absolute top-10 left-0 w-full h-full text-white px-10 text-start space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold -mt-5">Cocktails</h1>
            <p className="hidden md:block">
              canonical classics to obscure
              <span className="block">tiki drinks</span>
            </p>
          </div>
          <div className="absolute w-full h-full top-24 md:top-40 lg:top-52 left-5">
            <div className="bg-secondary rounded-full h-24 w-24 p-4 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-primary">$120</span>
              <span className="text-sm font-extrabold">person</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import authorImg from "../../../public/about/author.png";
import resturentImg from "../../../public/about/resturentImg.png";
import resturentBorder from "../../../public/about/resturentBorder.png";
import coctailImg from "../../../public/about/coctailImg.png";
import coctailBorder from "../../../public/about/coctailBorder.png";
import drinkImg from "../../../public/about/drinkImg.png";
import drinkBorder from "../../../public/about/drinkBorder.png";

export default function About() {
  return (
    <div className="max-w-[1200px] mx-auto my-30">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between gap-10">
          <div className="flex flex-col gap-4 w-[50%] ">
            <p className="text-primary font-extrabold text-lg uppercase">About the food resturant</p>
            <h1 className="text-6xl font-extrabold">New Ground with Dishes to be Enjoyed</h1>
          </div>
          <div className="w-[60%] pl-40">
            <p>
              Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete ridiculus
              mus nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan ligula.
            </p>
            <div className="flex gap-4 items-center mt-20">
              <div>
                <Image src={authorImg} alt="authorImg" width={50} height={50} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl">Willimes James</p>
                <p>Director and Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 my-10">
          <div className="w-[50%] relative ">
            <Image src={resturentImg} alt="resturentImg" width={400} height={400} />
            <Image src={resturentBorder} alt="resturentBorder" width={370} height={370} className="absolute top-2 left-2" />
          </div>
          <div className="w-[50%] relative mt-20">
            <Image src={coctailImg} alt="coctailImg" width={400} height={400} />
            <Image src={coctailBorder} alt="coctailBorder" width={370} height={370} className="absolute top-2 left-2" />
          </div>
          <div className="w-[50%] relative">
            <Image src={drinkImg} alt="drinkImg" width={400} height={400} />
            <Image src={drinkBorder} alt="drinkBorder" width={370} height={370} className="absolute top-2 left-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

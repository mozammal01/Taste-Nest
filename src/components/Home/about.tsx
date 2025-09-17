import Image from "next/image";
import authorImg from "@/../public/about/author.png";
import restaurantImg from "@/../public/about/resturentImg.png";
import restaurantBorder from "@/../public/about/resturentBorder.png";
import cocktailImg from "@/../public/about/coctailImg.png";
import cocktailBorder from "@/../public/about/coctailBorder.png";
import drinkImg from "@/../public/about/drinkImg.png";
import drinkBorder from "@/../public/about/drinkBorder.png";

export default function About() {
  return (
    <div className="max-w-[1200px] mx-auto my-30">
      <div className="flex flex-col gap-10">
        <div className="block lg:flex justify-between gap-10 px-5 lg:px-0">
          <div className="flex flex-col gap-4 lg:w-[50%] space-y-4">
            <p className="text-primary font-extrabold text-lg uppercase">About the food restaurant</p>
            <h1 className="md:text-6xl text-4xl font-extrabold">New Ground with Dishes to be Enjoyed</h1>
          </div>
          <div className="lg:w-[60%] lg:pl-40 mt-5 lg:mt-0">
            <p>
              Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete ridiculus
              mus nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan ligula.
            </p>
            <div className="flex gap-4 items-center mt-5">
              <div>
                <Image src={authorImg} alt="author profile" width={50} height={50} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl">Willimes James</p>
                <p>Director and Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[400px] md:max-w-[1200px] mx-auto gap-5 my-10 space-y-10 md:space-y-0">
          <div className="relative">
            <Image src={restaurantImg} alt="restaurant interior" className="md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[486px]" />
            <Image
              src={restaurantBorder}
              alt="restaurant border decoration"
              className="absolute top-2 left-2 md:w-[280px] md:h-[380px] lg:w-[370px] lg:h-[460px]"
            />
          </div>
          <div className="relative lg:mt-28">
            <Image src={cocktailImg} alt="cocktail drinks" className="md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[486px]" />
            <Image
              src={cocktailBorder}
              alt="cocktail border decoration"
              className="absolute top-2 left-2 md:w-[280px] md:h-[380px] lg:w-[370px] lg:h-[460px]"
            />
          </div>
          <div className="relative">
            <Image src={drinkImg} alt="refreshing drinks" className="md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[486px]" />
            <Image
              src={drinkBorder}
              alt="drink border decoration"
              className="absolute top-2 left-2 md:w-[280px] md:h-[380px] lg:w-[370px] lg:h-[460px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

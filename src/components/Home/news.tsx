import Image from "next/image";
import news1Img from "../../../public/news/bar.png";
import news2Img from "../../../public/news/resturent.png";
import authorImg from "../../../public/about/author.png";
export default function News() {
  return (
    <div className="max-w-[1200px] mx-auto my-80">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">Recent News</h1>
        <div className=" border-b-8 border-amber-300 pb-4 mx-[450px]"></div>
      </div>
      <div className="grid grid-cols-2 gap-10 my-20 w-full">
        <div className="flex gap-10 w-[600px] justify-center items-center">
          <div className="rounded-2xl">
            <Image className="rounded-2xl" src={news1Img} alt="news1Img" width={250} height={250} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="bg-amber-300 p-1 px-3 rounded-xl w-fit font-extrabold">April 7, 2025</p>
            <h1 className="text-2xl font-extrabold">Creamy Chicken Alfredo</h1>
            <div className="flex gap-2 items-center">
              <Image src={authorImg} alt="icon" width={50} height={50} />
              <p className="font-extrabold">Willimes James</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 w-[600px] justify-center items-center">
          <div className="rounded-2xl">
            <Image className="rounded-2xl" src={news2Img} alt="news2Img" width={250} height={250} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="bg-amber-300 p-1 px-3 rounded-xl w-fit font-extrabold">April 7, 2025</p>
            <h1 className="text-2xl font-extrabold">Air Fryer Salmon</h1>
            <div className="flex gap-2 items-center">
              <Image src={authorImg} alt="icon" width={50} height={50} />
              <p className="font-extrabold">Willimes James</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

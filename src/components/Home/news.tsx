import Image from "next/image";
import news1Img from "../../../public/news/bar.png";
import news2Img from "../../../public/news/resturent.png";
import authorImg from "../../../public/about/author.png";
import endSectionImg from "../../../public/news/end-section.png";
import instaIcon from "../../../public/icons/instaIcon.png";

export default function News() {
  return (
    <>
      <div className="max-w-[400px] md:max-w-[1200px] mx-auto my-20">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold">Recent News</h1>
          <div className=" border-b-8 border-amber-300 pb-4 mx-[450px]"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 my-20 w-full">
          <div className="md:flex gap-10 md:w-[600px] w-full justify-center items-center">
            <div className="rounded-2xl">
              <Image className="rounded-2xl mx-auto" src={news1Img} alt="news1Img" width={250} height={250} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center my-4">
              <p className="bg-amber-300 p-1 px-3 rounded-xl w-fit font-extrabold">April 7, 2025</p>
              <h1 className="text-2xl font-extrabold">Creamy Chicken Alfredo</h1>
              <div className="flex gap-2 items-center">
                <Image src={authorImg} alt="icon" width={50} height={50} />
                <p className="font-extrabold">Willimes James</p>
              </div>
            </div>
          </div>
          <div className="md:flex gap-10 md:w-[600px] w-full justify-center items-center">
            <div className="rounded-2xl">
              <Image className="rounded-2xl mx-auto" src={news2Img} alt="news2Img" width={250} height={250} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center my-4">
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

      {/* End News */}
      <div className="max-w-[1200px] mx-auto my-30 relative">
        <div>
          <Image className="object-cover opacity-20" src={endSectionImg} alt="endSectionImg" width={1200} height={1200} />
        </div>
        <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-y-4 text-center">
          <div className="bg-primary rounded-full p-2 w-15 h-15 flex justify-center items-center mx-auto">
            <Image src={instaIcon} alt="instaIcon" width={30} height={30} />
          </div>
          <h1 className="text-2xl font-extrabold">Follow @mozammal01</h1>
          <p className="font-semibold ">Join our community to inspire your desires</p>
        </div>
      </div>
    </>
  );
}

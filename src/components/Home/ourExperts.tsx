import Image from "next/image";
import expert1Img from "../../../public/experts/expert1.png";
import expert2Img from "../../../public/experts/expert2.png";
import expert3Img from "../../../public/experts/expert3.png";
import signatureImg from "../../../public/experts/signature.png";
export default function OurExperts() {
  return (
    <div className="max-w-[1200px] mx-auto my-40">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">Meet Our Experts</h1>
        <div className=" border-b-8 border-secondary pb-4 mx-[450px]"></div>
      </div>
      <div className="grid md:grid-cols-3 md:gap-10 gap-30 my-20 w-full">
        <div className="relative">
          <Image src={expert1Img} alt="expert1Img" width={500} height={500} />
          <div className="bg-white h-[380px] w-[380px] rounded-full absolute top-80 left-0 broder-gray-500 border-6">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">Dessert specialist</p>
              <p className="text-3xl font-extrabold">Thomas Walim</p>
              <div className="flex gap-3 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <Image className="mt-7" src={signatureImg} alt="signatureImg" width={130} height={130} />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={expert2Img} alt="expert2Img" width={500} height={500} />
          <div className="bg-white h-[380px] w-[380px] rounded-full absolute top-80 left-0 broder-gray-500 border-6">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">Chef Master</p>
              <p className="text-3xl font-extrabold">James Jhonson</p>
              <div className="flex gap-3 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <Image className="mt-7" src={signatureImg} alt="signatureImg" width={130} height={130} />
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={expert3Img} alt="expert3Img" width={500} height={500} />
          <div className="bg-white h-[380px] w-[380px] rounded-full absolute top-80 left-0 broder-gray-500 border-6">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">Dessert specialist</p>
              <p className="text-3xl font-extrabold">Room Minal</p>
              <div className="flex gap-3 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <Image className="mt-7" src={signatureImg} alt="signatureImg" width={130} height={130} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

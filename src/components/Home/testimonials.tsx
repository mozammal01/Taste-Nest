import { Button } from "../ui/button";
import redImg from "../../../public/testimonials/redImage.png";
import coffeeImg from "../../../public/testimonials/coffee.png";
import strawberryImg from "../../../public/testimonials/strawberry.png";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="max-w-[1200px] mx-auto my-30 flex justify-between items-end">
      <div className="w-[40%] flex flex-col gap-10 space-y-10">
        <div className="space-y-4">
          <p className="text-primary font-bold text-lg uppercase">Testimonials & Reviews</p>
          <h1 className="text-5xl font-extrabold">Our Customer Feedback</h1>
        </div>
        <div className="border-6 border-amber-300 rounded-2xl p-10 space-y-4">
          <div className="text-start text-gray-600 font-semibold text-xl">
            A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and
            all great thoughts
          </div>
          <div className="flex justify-between">
            <h1 className="text-2xl font-extrabold">Bratlee Hamint</h1>
            <Button className="-mb-8 -me-8" variant="orange" size="smRounded"></Button>
          </div>
        </div>
      </div>
      <div className="w-[60%] ms-30">
        <div className="relative flex justify-between">
          <div className="bg-[#F3274C] w-[290px] h-[290px] rounded-4xl">
            <Image className="object-cover" src={redImg} alt="redImg" width={290} height={290} />
          </div>
          <div className=" absolute bottom-55 left-50">
            <Image src={coffeeImg} alt="coffeeImg" width={290} height={290} className="object-cover" />
          </div>
          <div className="absolute top-20 left-90">
            <Image src={strawberryImg} alt="strawberryImg" width={290} height={290} className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

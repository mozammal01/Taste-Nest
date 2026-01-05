import Image from "next/image";
import Circles from "../shared/circles";

export default function ExpertsCircle({ title, name, signatureImg }: { title: string, name: string, signatureImg: string }) {
  return (
    <div className="bg-white size-[380px] rounded-full absolute top-80 left-10 border-gray-300 border-4">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">{title}</p>
              <p className="text-3xl font-extrabold">{name}</p>
              <div className="flex gap-3 mt-4">
                <Circles />
                <Circles />
                <Circles />
              </div>
              <Image className="mt-7" src={signatureImg} alt="chef signature" width={130} height={130} />
            </div>
          </div>
  );
}
"use client";
import Image from "next/image";
import thomasWalim from "@/../public/experts/expert1.png";
import jamesJohnson from "@/../public/experts/expert2.png";
import roomMinal from "@/../public/experts/expert3.png";
import signatureImg from "@/../public/experts/signature.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SubTitle from "../shared/subTitle";

export default function OurExperts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="max-w-[1200px] mx-auto my-40 px-2">
      <div className="text-center">
        <SubTitle title="Meet Our Experts" />
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 lg:gap-10 gap-20 my-20 w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          <Image src={thomasWalim} alt="Thomas Walim - Dessert Specialist" width={500} height={500} />
          <div className="bg-white h-[380px] w-[380px] rounded-full absolute top-80 left-0 border-gray-300 border-4">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">Dessert specialist</p>
              <p className="text-3xl font-extrabold">Thomas Walim</p>
              <div className="flex gap-3 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <Image className="mt-7" src={signatureImg} alt="chef signature" width={130} height={130} />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          <Image src={jamesJohnson} alt="James Johnson - Chef Master" width={500} height={500} />
          <div className="bg-white h-[380px] w-[380px] rounded-full absolute top-80 left-0 border-gray-300 border-4">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">Chef Master</p>
              <p className="text-3xl font-extrabold">James Johnson</p>
              <div className="flex gap-3 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <Image className="mt-7" src={signatureImg} alt="chef signature" width={130} height={130} />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative md:my-40 lg:my-0"
        >
          <Image src={roomMinal} alt="Room Minal - Dessert Specialist" width={500} height={500} />
          <div className="bg-white h-[380px] w-[380px] rounded-full absolute top-80 left-0 border-gray-300 border-4">
            <div className="flex flex-col gap-4 items-center mt-20">
              <p className="text-xl font-extrabold text-primary">Dessert specialist</p>
              <p className="text-3xl font-extrabold">Room Minal</p>
              <div className="flex gap-3 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
              </div>
              <Image className="mt-7" src={signatureImg} alt="chef signature" width={130} height={130} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

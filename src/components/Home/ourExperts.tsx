"use client";
import Image from "next/image";
import thomasWalim from "@/../public/experts/expert1.png";
import jamesJohnson from "@/../public/experts/expert2.png";
import roomMinal from "@/../public/experts/expert3.png";
import signatureImg from "@/../public/experts/signature.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SubTitle from "../shared/subTitle";
import ExpertsCircle from "../experts-circle/experts-circle";

export default function OurExperts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="experts" className="container mx-auto my-40 px-2">
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
          <ExpertsCircle title="Dessert specialist" name="Thomas Walim" signatureImg={signatureImg.src} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative"
        >
          <Image src={jamesJohnson} alt="James Johnson - Chef Master" width={500} height={500} />
          <ExpertsCircle title="Chef Master" name="James Johnson" signatureImg={signatureImg.src} />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative md:my-40 lg:my-0"
        >
          <Image src={roomMinal} alt="Room Minal - Dessert Specialist" width={500} height={500} />
          <ExpertsCircle title="Dessert specialist" name="Room Minal" signatureImg={signatureImg.src} />
        </motion.div>
      </div>
    </div>
  );
}

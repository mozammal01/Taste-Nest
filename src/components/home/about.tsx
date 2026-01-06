"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import authorImg from "@/../public/about/author.png";
import restaurantImg from "@/../public/about/restaurantImg.png";
import restaurantBorder from "@/../public/about/restaurantBorder.png";
import cocktailImg from "@/../public/about/cocktailImg.png";
import cocktailBorder from "@/../public/about/cocktailBorder.png";
import drinkImg from "@/../public/about/drinkImg.png";
import drinkBorder from "@/../public/about/drinkBorder.png";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="container mx-auto my-30" id="about">
      <div className="flex flex-col gap-10">
        <div className="block lg:flex justify-between gap-10 px-5 lg:px-0">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-4 lg:w-[50%] space-y-4"
          >
            <p className="text-primary font-extrabold text-lg uppercase">About the food restaurant</p>
            <h2 className="md:text-6xl text-4xl font-extrabold">New Ground with Dishes to be Enjoyed</h2>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            className="lg:w-[60%] lg:pl-40 mt-5 lg:mt-0"
          >
            <p>
              Lorem ipsum dolor sit consectetur quod, eum tempore ex a nam ea nostrum vitae. Libero non Lorem ipsum dolor sit consectetur
              quod, eum tempore ex a nam ea nostrum vitae. Libero non Lorem ipsum dolor sit consectetur quod, eum tempore ex a nam ea
              nostrum vitae. Libero non
            </p>
            <div className="flex gap-4 items-center mt-5">
              <div>
                <Image src={authorImg} alt="author profile" width={50} height={50} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-2xl">Williams James</p>
                <p>Director and Chief Operations Officer</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="items-center justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[400px] md:max-w-[1200px] mx-auto gap-5 my-10 space-y-10 md:space-y-0">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <Image src={restaurantImg} alt="restaurant interior" className="md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[486px]" />
            <Image
              src={restaurantBorder}
              alt="restaurant border decoration"
              className="absolute top-2 left-2 md:w-[280px] md:h-[380px] lg:w-[370px] lg:h-[460px]"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative lg:mt-28"
          >
            <Image src={cocktailImg} alt="cocktail drinks" className="md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[486px]" />
            <Image
              src={cocktailBorder}
              alt="cocktail border decoration"
              className="absolute top-2 left-2 md:w-[280px] md:h-[380px] lg:w-[370px] lg:h-[460px]"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <Image src={drinkImg} alt="refreshing drinks" className="md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[486px]" />
            <Image
              src={drinkBorder}
              alt="drink border decoration"
              className="absolute top-2 left-2 md:w-[280px] md:h-[380px] lg:w-[370px] lg:h-[460px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

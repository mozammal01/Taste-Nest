"use client";
import redImg from "@/../public/testimonials/redImage.png";
import coffeeImg from "@/../public/testimonials/coffee.png";
import strawberryImg from "@/../public/testimonials/strawberry.png";
import Image from "next/image";
import Feedback from "../Feedback/Feedback";
import { Testimonial } from "@/Interfaces/shared-interface";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Testimonials({ feedbacks }: { feedbacks: Testimonial[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials: Testimonial[] = feedbacks || [
    {
      author: "Bratlee Hamint",
      review: "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.",
    },
    {
      author: "Sarah Johnson",
      review: "The desserts here are heavenly! The chocolate lava cake melted perfectly in my mouth. Definitely coming back.",
    },
    {
      author: "David Chen",
      review: "Best steak I’ve had in years. Cooked to perfection and seasoned just right. Worth every penny.",
    },
    {
      author: "Emily Carter",
      review: "The coffee is rich, aromatic, and smooth. Perfect way to start the morning.",
    },
    {
      author: "Michael Lee",
      review: "I tried the cheeseburger, and it was loaded with flavor! Fresh buns and juicy meat. Highly recommended.",
    },
    {
      author: "Olivia Brown",
      review: "The ambiance is cozy, and the staff are very friendly. It felt like dining at home.",
    },
    {
      author: "Daniel Smith",
      review: "Excellent service! They made sure everything was just perfect. I’ll be bringing my family next time.",
    },
    {
      author: "Sophia Wilson",
      review: "I love how they combine modern dishes with traditional flavors. A truly unique dining experience.",
    },
  ];

  return (
    <div id="testimonials" className="md:max-w-[1200px] max-w-[500px] md:mx-auto my-20 md:flex justify-between items-end mx-2 px-4">
      <div className="lg:w-[40%] w-full md:flex flex-col gap-10 space-y-10">
        <div className="space-y-4">
          <p className="text-primary font-bold text-lg uppercase">Testimonials & Reviews</p>
          <h1 className="text-5xl font-extrabold">Our Customer Feedback</h1>
        </div>
        <Feedback feedbacks={testimonials} />
      </div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="md:w-[50%] w-full ml-28 hidden lg:block"
      >
        <div className="relative flex justify-between">
          <div className="bg-[#F3274C] rounded-3xl overflow-hidden">
            <Image className="object-cover w-full h-full" src={redImg} alt="customer enjoying meal" width={290} height={290} />
          </div>
          <div className="absolute bottom-60 left-48">
            <Image src={coffeeImg} alt="delicious coffee and pastries" width={290} height={290} className="object-cover rounded-3xl" />
          </div>
          <div className="absolute top-20 left-80">
            <Image src={strawberryImg} alt="fresh strawberry dessert" width={290} height={290} className="object-cover rounded-3xl" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SubTitle({ title }: { title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="md:mb-20">
      <motion.h1
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-6xl font-extrabold"
        >
          {title}
        </motion.h1>
      <div className="border-b-8 border-secondary max-w-xs mx-auto my-4"></div>
    </div>
  );
}

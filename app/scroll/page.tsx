"use client";

import { motion } from "motion/react";

const page = () => {
  return (
    <motion.div className="w-full h-[500vh] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.2 }}
        className="h-[300px] w-[300px] rounded-xl bg-red-200 my-64"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.2 }}
        className="h-[300px] w-[300px] rounded-xl bg-blue-200 my-64"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.2 }}
        className="h-[300px] w-[300px] rounded-xl bg-pink-400 my-64"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1.2 }}
        className="h-[300px] w-[300px] rounded-xl bg-black my-64"
      ></motion.div>
    </motion.div>
  );
};

export default page;

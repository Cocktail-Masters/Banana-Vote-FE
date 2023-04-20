/**
 * @author mingyu
 * @description 투표 항목이 2개만 있을 때 나오는 VS
 */
import React from "react";
import { motion } from "framer-motion";

const VS = () => {
  return (
    <motion.div
      className="absolute top-[40%] left-[45%] translate-x-[-50%] translate-y-[-50%] select-none rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 p-5 text-4xl font-bold text-text-title opacity-80 dark:text-text-title-dark"
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 15, -15, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    >
      VS
    </motion.div>
  );
};

export default VS;

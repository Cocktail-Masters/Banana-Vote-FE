import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const LayoutSidBarItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.li
      variants={variants}
      className={
        "relative m-4 ml-8 mr-8 list-none  hover:text-secondary-orange"
      }
    >
      {children}
    </motion.li>
  );
};

export default LayoutSidBarItem;

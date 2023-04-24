import { Variants, motion } from "framer-motion";
const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const VersusCardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex w-full"
      initial="offscreen"
      whileInView="onscreen"
      //   viewport={{ once: true, amount: 0.8 }}
      //   variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};
export default VersusCardWrapper;

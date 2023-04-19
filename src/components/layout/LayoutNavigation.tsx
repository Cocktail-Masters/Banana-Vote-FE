import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const LayoutNavigation = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
      <motion.ul variants={variants} className={"flex flex-col gap-[20px]"}>
        {children}
      </motion.ul>
    </motion.nav>
  );
};
export default LayoutNavigation;

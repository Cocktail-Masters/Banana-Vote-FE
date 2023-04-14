/**
 * @author mingyu
 * @description 메뉴 아이콘
 */
import { motion } from "framer-motion";

type threeDotsMenuButtonProps = {
  handleClick: () => void;
};

const ThreeDotsMenuButton = ({ handleClick }: threeDotsMenuButtonProps) => {
  return (
    <motion.button
      id="menu-button"
      whileTap={{ scale: 0.9 }}
      className="h-10 w-10 rounded-full hover:bg-gray-200 active:bg-gray-200 dark:hover:bg-[#3A3B3C] dark:active:bg-[#3A3B3C]"
      onClick={handleClick}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full stroke-text-feed p-2 dark:stroke-text-feed-dark"
      >
        <path
          d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </motion.button>
  );
};

export default ThreeDotsMenuButton;

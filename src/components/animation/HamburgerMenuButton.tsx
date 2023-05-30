import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";

interface Props extends SVGMotionProps<any> {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
}

const HamburgerMenu = ({
  isOpen = false,
  width = 36,
  height = 36,
  strokeWidth = 1,
  color = "#000",
  transition = {},
  lineProps = {},
  ...props
}: Props) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    strokeLinecap: "round",
    ...lineProps,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      display={isOpen ? "block" : "none"}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        className={"stroke-text-normal dark:stroke-text-normal-dark"}
        variants={top}
        // style={{ originX: 0, originY: 0 }}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        className={"stroke-text-normal dark:stroke-text-normal-dark"}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        className={"stroke-text-normal dark:stroke-text-normal-dark"}
        // style={{ originX: 100, originY: 0 }}
        {...lineProps}
      />
    </motion.svg>
  );
};

export default React.memo(HamburgerMenu);

import * as React from "react";
import { motion } from "framer-motion";

let REACT_TOGGLE_DARK_MODE_GLOBAL_ID = 0;

type SVGProps = Omit<React.HTMLAttributes<HTMLOrSVGElement>, "onChange">;
export interface Props extends SVGProps {
  onChange: (checked: boolean) => void;
  checked: boolean;
  style?: React.CSSProperties;
  size?: number | string;
  moonColor?: string;
  sunColor?: string;
}

export const DarkModeSwitch: React.FC<Props> = ({
  onChange,
  checked = false,
  size = 24,
  moonColor = "white",
  sunColor = "black",
  style,
}) => {
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    REACT_TOGGLE_DARK_MODE_GLOBAL_ID += 1;
    setId(REACT_TOGGLE_DARK_MODE_GLOBAL_ID);
  }, [setId]);

  const toggle = () => onChange(!checked);

  const uniqueMaskId = `circle-mask-${id}`;

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      color={checked ? moonColor : sunColor}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentColor"
      onClick={toggle}
      animate={checked ? "active" : "inactive"}
      variants={{
        active: {
          rotate: 40,
        },
        inactive: {
          rotate: 90,
        },
      }}
    >
      <mask id={uniqueMaskId}>
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <motion.circle
          r="9"
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 15,
          }}
          animate={checked ? "light" : "dark"}
          fill={"black"}
          variants={{
            light: { cx: "50%", cy: "23%" },
            dark: { cx: "100%", cy: "0%" },
          }}
        />
      </mask>

      <motion.circle
        cx="12"
        cy="12"
        initial={{ opacity: 0 }}
        fill={checked ? moonColor : sunColor}
        r={checked ? 5 : 9}
        animate={checked ? "light" : "dark"}
        variants={{ light: { r: 9, opacity: 1 }, dark: { r: 5, opacity: 1 } }}
        mask={`url(#${uniqueMaskId})`}
      />
      <motion.g
        stroke="currentColor"
        animate={checked ? "light" : "dark"}
        initial={{ opacity: 0 }}
        variants={{
          dark: { opacity: 1 },
          light: { opacity: 0 },
        }}
      >
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </motion.g>
    </motion.svg>
  );
};

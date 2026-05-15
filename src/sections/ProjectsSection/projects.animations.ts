import type { Variants } from "motion/react";

export const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 70,
      damping: 10,
    },
  },
};

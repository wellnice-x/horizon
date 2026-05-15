import type { Variants } from "motion/react";

export const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: (side: "left" | "right") => ({
    opacity: 0,
    x: side === "left" ? -400 : 400,
  }),

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      type: "spring",
    },
  },
};
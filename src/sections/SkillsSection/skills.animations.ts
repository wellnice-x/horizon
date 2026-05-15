import type { Variants } from "motion/react";

export const containerVariants: Variants = {
  initial: {},

  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: -100,
    scale: 0.8,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      type: "spring",
    },
  },
};
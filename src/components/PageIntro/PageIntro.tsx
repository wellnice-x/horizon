import { motion } from "motion/react";
import styles from "./PageIntro.module.scss";

const stripTransition = {
  duration: 0.7,
  ease: [0.7, 0, 0.25, 1] as const,
};

const fadeTransition = {
  duration: 0.3,
  delay: 0.3,
};

const PageIntro = ({ onFinish }: { onFinish?: () => void }) => {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={fadeTransition}
      onAnimationComplete={onFinish}
    >
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className={styles.strip}
          initial={{ x: 0 }}
          animate={{ x: i % 2 === 0 ? "-110%" : "110%" }}
          transition={stripTransition}
        />
      ))}
    </motion.div>
  );
};

export default PageIntro;
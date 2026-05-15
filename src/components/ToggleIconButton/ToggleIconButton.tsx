import styles from "./ToggleIconButton.module.scss";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ToggleIconButtonProps = {
  className?: string;
  icon: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ToggleIconButton = ({
  className,
  icon,
  type = "button",
  ...props
}: ToggleIconButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className ?? ""}`}
      type={type}
      {...props}
    >
      <div className={styles.iconWrapper}>{icon}</div>
    </button>
  );
};

export default ToggleIconButton;

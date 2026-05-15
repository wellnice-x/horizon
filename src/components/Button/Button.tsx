import styles from "./Button.module.scss";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";

type BaseProps = {
  className?: string;
};

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type AnchorButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
  };

type ButtonProps = PropsWithChildren<NativeButtonProps | AnchorButtonProps>;

const Button = (props: ButtonProps) => {
  if (props.as === "a") {
    const { className, children, ...anchorProps } = props;

    return (
      <a className={`${styles.button} ${className ?? ""}`} {...anchorProps}>
        <div className={styles.bubble} />
        <div className={styles.hoverBubble} />
        {children}
      </a>
    );
  }

  const { className, children, type = "button", ...buttonProps } = props;

  return (
    <button
      className={`${styles.button} ${className ?? ""}`}
      type={type}
      {...buttonProps}
    >
      <div className={styles.bubble} />
      <div className={styles.hoverBubble} />
      {children}
    </button>
  );
};

export default Button;

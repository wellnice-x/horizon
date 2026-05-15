import styles from "./ChatMessage.module.scss";

type ChatMessageProps = {
  className?: string;
  name: string;
  text: string;
  avatar?: string;
  side?: "left" | "right";
};

const ChatMessage = (props: ChatMessageProps) => {
  const { className, name, text, avatar, side = "left" } = props;
  return (
    <div
      className={`${styles.wrapper} ${className ?? ""}`}
      data-side={side}
    >
      {avatar && <img className={styles.avatar} src={avatar} alt={name} />}

      <div className={styles.glass}>
        <div className={styles.tail} />
        <div className={styles.name}>{name}</div>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;

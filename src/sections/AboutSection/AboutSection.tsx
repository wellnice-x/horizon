import { motion } from "motion/react";
import { messages } from "./about.data";
import { containerVariants, itemVariants } from "./about.animations";
import styles from "./AboutSection.module.scss";
import avatar from "@/assets/images/avatar.png";
import StatusBar from "@/components/StatusBar";
import ChatMessage from "@/components/ChatMessage";

const AboutSection = () => {
  return (
    <section className={styles.section} id="about" aria-labelledby="aboutTitle">
      <header>
        <h2 className={styles.sectionTitle} id="aboutTitle">
          Обо мне
        </h2>
        <motion.div
          className={styles.headerBody}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            className={styles.avatar}
            width={130}
            height={130}
            src={avatar}
            alt="Аватар разработчика"
          />
          <ChatMessage
            className={styles.greetingsMessage}
            name="Иван"
            text="Привет! я Иван 👋
                  Хочу немного рассказать о себе..."
            side="left"
          />
        </motion.div>
      </header>
      <div className={styles.sectionBody}>
        <motion.div
          className={styles.sectionBodyInner}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.statusBarWrapper}>
            <StatusBar />
          </div>
          {messages.map((message) => (
            <div
              key={message.id}
              className={styles.chatMessageRow}
              data-side={message.side}
            >
              <motion.div variants={itemVariants} custom={message.side}>
                <ChatMessage
                  className={styles.chatMessage}
                  name="Иван"
                  text={message.text}
                  avatar={avatar}
                  side={message.side}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

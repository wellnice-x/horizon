import styles from "./ContactsSection.module.scss";
import { contacts } from "./contacts.data";

const ContactsSection = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="contactsTitle"
      id="contacts"
    >
      <header className={styles.header}>
        <h2 className={`${styles.sectionTitle}`} id="contactsTitle">
          Контакты
        </h2>
      </header>
      <ul className={styles.contactsList} aria-label="Список контактов">
        {contacts.map(({ id, href, title, ariaLabel, Icon }) => (
          <li key={id} className={styles.contactsItem}>
            <a
              className={styles.contactsLink}
              href={href}
              title={title}
              aria-label={ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={styles.contactsIcon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactsSection;

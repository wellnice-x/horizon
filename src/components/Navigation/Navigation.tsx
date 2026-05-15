import styles from "./Navigation.module.scss";

type Item = {
  label: string;
  href: string;
};

type NavigationProps = {
  className?: string;
  items: Item[];
};

const Navigation = (props: NavigationProps) => {
  const { className, items } = props;

  return (
    <nav className={`${styles.navigation} ${className ?? ""}`}>
      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item.href}>
            <a className={styles.navItem} href={item.href}>
              <div className={styles.bubble} />
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

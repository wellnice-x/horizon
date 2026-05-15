import type { StackItem } from "@/sections/ProjectsSection/projects.types";
import styles from "./ProjectStack.module.scss";

type ProjectStackProps = {
  className?: string;
  items: StackItem[];
  imageSize?: number;
};

const ProjectStack = (props: ProjectStackProps) => {
  const { className, items, imageSize = 50 } = props;

  return (
    <ul className={`${styles.list} ${className ?? ""}`}>
      {items.map((item) => (
        <li className={styles.item} key={item.source}>
          <img
            className={styles.image}
            width={imageSize}
            height={imageSize}
            src={item.source}
            title={item.title}
            alt={item.alt ?? ""}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default ProjectStack;

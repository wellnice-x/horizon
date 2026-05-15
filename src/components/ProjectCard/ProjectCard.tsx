import type {
  Project,
  ProjectActionIconName,
} from "@/sections/ProjectsSection/projects.types";
import ProjectStack from "../ProjectStack";
import GoToSiteIcon from "@/assets/icons/arrow-square-out-icon.svg?react";
import GitHubIcon from "@/assets/icons/github-icon.svg?react";
import styles from "./ProjectCard.module.scss";
import Button from "../Button";

type ProjectCardProps = Project & {
  className?: string;
  onImagePreview?: (imageSrc: string, title: string) => void;
};

const iconMap = {
  gitHub: GitHubIcon,
  goToSite: GoToSiteIcon,
} satisfies Record<ProjectActionIconName, unknown>;

const ProjectCard = (props: ProjectCardProps) => {
  const {
    className,
    title,
    imagePreview,
    imageFull,
    stackItems,
    actions,
    onImagePreview,
  } = props;

  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.media}>
        <button
          className={styles.imageButtonWrapper}
          type="button"
          title={`Открыть полноразмерное изображение проекта ${title}`}
          onClick={() => onImagePreview?.(imageFull, title)}
        >
          <img
            className={styles.image}
            src={imagePreview}
            alt={`Превью проекта ${title}`}
            loading="lazy"
          />
        </button>
        {actions && (
          <div className={styles.actions}>
            {actions.map((action) => {
              const Icon = action.iconName ? iconMap[action.iconName] : null;

              return (
                <Button
                  className={styles.button}
                  key={action.href}
                  as="a"
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={action.iconTitle}
                >
                  {Icon && <Icon className={styles.icon} />}
                  {action.label && <span>{action.label}</span>}
                </Button>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.details}>
        {stackItems && (
          <ProjectStack className={styles.projectStack} items={stackItems} />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

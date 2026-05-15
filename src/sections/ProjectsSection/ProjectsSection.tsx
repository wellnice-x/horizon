import type { ImagePreviewData } from "@/types/ui/image-preview";
import { projects } from "./projects.data";
import { useState } from "react";
import { variants } from "./projects.animations";
import { motion } from "motion/react";
import styles from "./ProjectsSection.module.scss";
import Slider from "@/components/Slider";
import MainProject from "./MainProject";
import ProjectCard from "@/components/ProjectCard";
import ImagePreviewModal from "@/components/ImagePreviewModal/ImagePreviewModal";

const ProjectsSection = () => {
  const [preview, setPreview] = useState<ImagePreviewData | null>(null);

  return (
    <section
      className={styles.section}
      aria-labelledby="projectsTitle"
      id="projects"
    >
      <header>
        <h2 className={styles.sectionTitle} id="projectsTitle">
          Проекты
        </h2>
      </header>
      <div className={styles.mainSectionBody}>
        <MainProject onImagePreview={setPreview} />
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.sectionSubtitle}>Другие проекты (вёрстка)</h3>
          <Slider
            slides={projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onImagePreview={(imageSrc, title) =>
                  setPreview({
                    imageSrc,
                    title,
                    alt: `Полноразмерное изображение проекта ${title}`,
                  })
                }
              />
            ))}
          />
        </motion.section>
      </div>
      <ImagePreviewModal
        isOpen={preview !== null}
        imageSrc={preview?.imageSrc ?? ""}
        alt={preview?.alt}
        title={preview?.title}
        onClose={() => setPreview(null)}
      />
    </section>
  );
};

export default ProjectsSection;

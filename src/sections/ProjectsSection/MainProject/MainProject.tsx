import type { ImagePreviewData } from "@/types/ui/image-preview";
import { projectStacks, mainProjectDetails } from "../projects.data";
import { variants } from "../projects.animations";
import { motion } from "motion/react";
import styles from "./MainProject.module.scss";
import Button from "@/components/Button";
import ProjectStack from "@/components/ProjectStack";
import CodeFileIcon from "@/assets/icons/code-file-icon.svg?react";
import StructureIcon from "@/assets/icons/structure-icon.svg?react";
import InformationIcon from "@/assets/icons/information-icon.svg?react";
import todoshkaPreview from "@/assets/images/todoshka-preview.jpg";
import todoshkaFullPage from "@/assets/images/todoshka-full-page.jpg";

type MainProjectProps = {
  onImagePreview: (data: ImagePreviewData) => void;
};

const MainProject = ({ onImagePreview }: MainProjectProps) => {
  return (
    <section aria-labelledby="mainProjectTitle">
      <h3 className={styles.sectionSubtitle} id="mainProjectTitle">
        Флагманский проект{" "}
        <span className={styles.nameWrapper}>
          <span className={styles.name}>ToDoSHKA</span>
        </span>
      </h3>
      <div className={styles.projectBody}>
        <motion.div
          className={styles.media}
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <button
            className={styles.imageButtonWrapper}
            title="Открыть картинку в полном размере"
            onClick={() =>
              onImagePreview({
                imageSrc: todoshkaFullPage,
                alt: "Полное изображение проекта",
                title: "ToDoSHKA App",
              })
            }
          >
            <img
              className={styles.image}
              src={todoshkaPreview}
              alt="Изображение главного проекта"
              loading="lazy"
            />
          </button>
          <div className={styles.buttonGroup}>
            <Button
              className={styles.button}
              as="a"
              href="https://github.com/wellnice-x/todoshka-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              className={styles.button}
              as="a"
              href="/diagrams/todoshka-diagram.drawio.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть схему
            </Button>
            <Button
              className={styles.button}
              as="a"
              href="https://todoshka-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть веб-сайт
            </Button>
          </div>
        </motion.div>
        <motion.div
          className={styles.projectInfo}
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className={styles.baseInfoContainer}>
            <header className={styles.header}>
              <InformationIcon
                className={styles.headerIcon}
                aria-hidden="true"
              />
              <h4 className={styles.headerTitle}>Краткое описание:</h4>
            </header>
            <p className={styles.briefDescription}>
              Это не «классический ToDo pet-проект», как может показаться.{" "}
              <br />
              На практике это полноценное приложение с продуманной архитектурой,
              включающее 22 React-компонента, 29 кастомных хуков, авторизацию
              пользователя и синхронизацию с сервером.
              <br />
              Особое внимание уделено стабильному UX: реализована обработка
              клиентских, сетевых и серверных ошибок. Интерфейс, в свою очередь, всегда
              стремится отображать актуальное состояние данных.
              <br />
              Приложение спроектировано с учётом масштабируемости и реальных
              сценариев использования.
              <br />
              На текущий момент используется упрощенная анонимная аутентификация
              пользователя.
              <br />
              Текущая архитектурная база позволяет адаптировать проект под
              множество других приложений.
            </p>
          </div>
          <div className={styles.projectStackContainer}>
            <header className={styles.header}>
              <CodeFileIcon className={styles.headerIcon} />
              <h4 className={styles.headerTitle}>Используемые инструменты:</h4>
            </header>
            <ProjectStack
              className={styles.projectStack}
              items={projectStacks.mainProject}
              imageSize={40}
            />
          </div>
        </motion.div>
        <motion.div
          className={styles.projectDetails}
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.detailsInner}>
            <header className={styles.header}>
              <StructureIcon className={styles.headerIcon} />
              <h4 className={styles.headerTitle}>
                Подробнее про архитектуру и функционал:
              </h4>
            </header>
            <ul className={styles.detailsList}>
              {mainProjectDetails.map((detail) => (
                <li className={styles.detailsItem} key={detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainProject;

import styles from "./Home.module.scss";
import Header from "../../components/Header";
import AboutSection from "@/sections/AboutSection";
import GoToTopButton from "@/components/GoToTopButton";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactsSection from "@/sections/ContactsSection";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Портфолио</h1>

        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactsSection />

        <GoToTopButton />
      </main>
    </>
  );
};

export default Home;

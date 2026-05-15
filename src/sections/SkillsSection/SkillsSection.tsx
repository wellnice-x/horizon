import { containerVariants, itemVariants } from "./skills.animations";
import { hardSkills, softSkills } from "./skills.data";
import { motion } from "motion/react";
import styles from "./SkillsSection.module.scss";

type SkillGroup = {
  groupName: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    groupName: "Hard",
    skills: hardSkills,
  },
  {
    groupName: "Soft",
    skills: softSkills,
  },
];

const SkillsSection = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="skillsTitle"
      id="skills"
    >
      <header>
        <h2 className={styles.sectionTitle} id="skillsTitle">
          Навыки
        </h2>
      </header>
      <div className={styles.mainSectionBody}>
        {skillGroups.map((group) => (
          <section key={group.groupName}>
            <h3 className={styles.groupTitle}>
              <span className={styles.groupAccent}>{group.groupName}</span>{" "}
              Skills
            </h3>
            <motion.ul
              className={styles.skillsList}
              variants={containerVariants}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.skills.map((skill) => (
                <motion.li
                  className={styles.skillsItem}
                  key={skill}
                  variants={itemVariants}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </section>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

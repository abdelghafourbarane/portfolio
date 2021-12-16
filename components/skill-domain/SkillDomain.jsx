import React, { useState } from "react";

import SkillProficiency from "../skill-proficiency/SkillProficiency";
import styles from "./SkillDomain.module.scss";

const SkillDomain = ({ skill_icon, title, exp_years, skills }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleArrowClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${styles.content}  ${isOpen ? styles.open : styles.close}`}
    >
      <div className={`${styles.header}`}>
        <i className={`uil ${skill_icon} ${styles.icon}`}></i>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.subtitle}>More than {exp_years} years</span>
        </div>
        <i
          className={`uil uil-angle-down ${styles.arrow}`}
          onClick={handleArrowClick}
        ></i>
      </div>

      <div className={`${styles.list} grid`}>
        {skills.map((skill) => (
          <SkillProficiency
            title={skill.title}
            proficiency={skill.proficiency}
            key={skill.title + "_" + skill.proficiency}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillDomain;

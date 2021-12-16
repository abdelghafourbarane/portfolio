import SkillDomain from "../skill-domain/SkillDomain";
import styles from "./SkillsSection.module.scss";

const SKILLS_DOMAINS = [
  {
    title: "Frontend developer",
    skill_icon: "uil-brackets-curly",
    exp_years: 4,
    skills: [
      {
        title: "HTML",
        proficiency: 90,
      },
      {
        title: "CSS",
        proficiency: 80,
      },
      {
        title: "Javascript",
        proficiency: 70,
      },
      {
        title: "React",
        proficiency: 85,
      },
    ],
  },
  {
    title: "Backend developer",
    skill_icon: "uil-server-network",
    exp_years: 2,
    skills: [
      {
        title: "Node.js",
        proficiency: 80,
      },
      {
        title: "Express",
        proficiency: 70,
      },
      {
        title: "Postgres",
        proficiency: 75,
      },
      {
        title: "MongoDB",
        proficiency: 70,
      },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className={styles.skills_section}>
      {/* ------------------------------------------ */}

      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className={`${styles.container} container grid`}>
          {/* ==================== SKILLS 1 ==================== */}

          {SKILLS_DOMAINS.map((skills_domain) => (
            <SkillDomain
              skill_icon={skills_domain.skill_icon}
              title={skills_domain.title}
              exp_years={skills_domain.exp_years}
              skills={skills_domain.skills}
              key={skills_domain.skill_icon + "_" + skills_domain.exp_years}
            />
          ))}

          {/* ==================== SKILLS 2 ==================== */}
        </div>
      </section>

      {/* ---------------------------- */}
    </section>
  );
};

export default SkillsSection;

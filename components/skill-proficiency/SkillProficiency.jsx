import styles from "./SkillProficiency.module.scss";

const SkillProficiency = ({ title, proficiency }) => {
  return (
    <div className={styles.data}>
      <div className={styles.titles}>
        <h3 className={styles.name}>{title}</h3>
        <span className={styles.number}>{proficiency}%</span>
      </div>
      <div className={styles.bar}>
        <span
          className={styles.percentage}
          style={{ width: `${proficiency}%` }}
        ></span>
      </div>
    </div>
  );
};

export default SkillProficiency;

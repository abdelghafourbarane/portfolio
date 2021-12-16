import React from "react";

import styles from "./QualificationItem.module.scss";

const QualificationItem = ({ title, subtitle, year, position, isLast }) => {
  console.log(`position:${position} , isLast:${isLast}`);
  return (
    <div className={styles.qualification__data}>
      {position === "right" && (
        <>
          <div></div>
          <div>
            <span className={styles.qualification__rounder}></span>
            {!isLast && <span className={styles.qualification__line}></span>}
          </div>
        </>
      )}
      <div>
        <h3 className={styles.qualification__title}>{title}</h3>
        <span className={styles.qualification__subtitle}>{subtitle}</span>
        <div className={styles.qualification__calendar}>
          <i className="uil uil-calendar-alt"></i>
          {year}
        </div>
      </div>
      {position === "left" && (
        <div>
          <span className={styles.qualification__rounder}></span>
          {!isLast && <span className={styles.qualification__line}></span>}
        </div>
      )}
    </div>
  );
};

export default QualificationItem;

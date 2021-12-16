import React, { useState } from "react";

import QualificationItem from "../qualification-item/QualificationItem";
import styles from "./QualificationSection.module.scss";

const EDUCATION_QUALIFICATIONS = [
  {
    qualification_title: "High-School Diploma in Mathematical Sciences",
    institute_name: "Morocco - High School",
    year: "2011 - 2014",
  },
  {
    qualification_title: "Bachelor of Computer Science",
    institute_name: "Morocco - Hassan The 2nd University",
    year: "2015 - 2018",
  },
  {
    qualification_title: "Master Degree in Big Data & Data Science",
    institute_name: "Morocco - Hassan The 2nd University",
    year: "2018-2020",
  },
];

const WORK_QUALIFICATIONS = [
  {
    qualification_title: "Software Enginner",
    institute_name: "Microsoft - Morocco",
    year: "2016 - 2018",
  },
  {
    qualification_title: "Frontend Developer",
    institute_name: "Apple Inc - Morocco",
    year: "2018 - 2020",
  },
  {
    qualification_title: "Ui Designer",
    institute_name: "Figma - Morocco",
    year: "2018-2020",
  },
];

const createQualficationItem = (index, qualification, len) => {
  return (
    <QualificationItem
      title={qualification.qualification_title}
      subtitle={qualification.institute_name}
      year={qualification.year}
      position={index % 2 === 0 ? "left" : "right"}
      isLast={index === len - 1 ? true : false}
      key={`${qualification.qualification_title}_${qualification.year}`}
    />
  );
};

const QualificationSection = () => {
  const [qualificationActive, setQualificationActive] = useState("education");

  const handleEducationClick = () => {
    if (qualificationActive !== "education") {
      setQualificationActive("education");
    }
  };

  const handleWorkClick = () => {
    if (qualificationActive !== "work") {
      setQualificationActive("work");
    }
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container container">
        <div className={styles.qualification__tabs}>
          <div
            className={`${styles.qualification__button} button--flex ${
              qualificationActive === "education" &&
              styles.qualification__active
            }`}
            data-target="#education"
            onClick={handleEducationClick}
          >
            <i
              className={`uil uil-graduation-cap ${styles.qualification__icon}`}
            ></i>
            Education
          </div>

          <div
            className={`${styles.qualification__button} button--flex ${
              qualificationActive === "work" && styles.qualification__active
            }`}
            data-target="#work"
            onClick={handleWorkClick}
          >
            <i
              className={`uil uil-briefcase-alt ${styles.qualification__icon}`}
            ></i>
            Work
          </div>
        </div>
        <div className={styles.qualification__sections}>
          <div
            className={`${styles.qualification__content} `}
            data-content
            id="education"
          >
            {qualificationActive === "education" &&
              EDUCATION_QUALIFICATIONS.map((qualification, index) =>
                createQualficationItem(
                  index,
                  qualification,
                  EDUCATION_QUALIFICATIONS.length
                )
              )}
          </div>

          <div className={styles.qualification__content} data-content id="work">
            {qualificationActive === "work" &&
              WORK_QUALIFICATIONS.map((qualification, index) =>
                createQualficationItem(
                  index,
                  qualification,
                  WORK_QUALIFICATIONS.length
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;

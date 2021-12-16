import Image from "next/image";
import CustomButton from "../custom-button/CustomButton";

import styles from "./AboutMeSection.module.scss";

const AboutMeSection = () => {
  return (
    <section className={`${styles.about_me} section`} id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className={`${styles.container} container grid`}>
        <Image
          src="/images/aboutme.png"
          alt="about me"
          height={550}
          width={370}
          layout="responsive"
          className={styles.img}
        />

        <div className={styles.data}>
          <p className={styles.description}>
            Web developer, with experience in working with React as frontend
            library , node js as runtime environment , Express as web
            application framework and MongoDB as noSql database .{" "}
          </p>
          <div className={styles.info}>
            <div>
              <span className={styles.info_title}>08+</span>
              <span className={styles.info_name}>
                Years <br /> experience
              </span>
            </div>

            <div>
              <span className={styles.info_title}>20+</span>
              <span className={styles.info_name}>
                Completed <br /> project
              </span>
            </div>

            <div>
              <span className={styles.info_title}>00+</span>
              <span className={styles.info_name}>
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <a
              download=""
              href="assets/pdf/Alexa-Cv.pdf"
              className="button button--flex"
            >
              <CustomButton btn_flex>
                Download CV<i className="uil uil-download-alt button__icon"></i>
              </CustomButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

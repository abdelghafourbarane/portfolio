import CustomButton from "../custom-button/CustomButton";

import styles from "./HomeSection.module.scss";

const HomeSection = () => {
  return (
    <section className="home section" id="home">
      <div className={`${styles.container} container grid`}>
        <div className={`${styles.content} grid`}>
          <div className={`${styles.social}`}>
            <a
              href="https://www.linkedin.com/in/abdelghafour-barane-54a443148/"
              target="_blank"
              className={`${styles.social_icon}`}
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href="https://github.com/abdelghafourbarane"
              target="_blank"
              className={`${styles.social_icon}`}
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
          <div className={`${styles.img}`}>
            <svg
              className={`${styles.blob}`}
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  x="16"
                  y="5"
                  className={`${styles.blob_img}`}
                  xlinkHref="images/profile-pic.png"
                />
              </g>
            </svg>
          </div>
          <div className={`${styles.data}`}>
            <h1 className={`${styles.title}`}>Hi, I'am Abdelghafour</h1>
            <h3 className={`${styles.subtitle}`}>
              Big Data Engineer & FullStack developer
            </h3>
            <p className={`${styles.description}`}>
              High level experience in web developement knowledge, producing
              quality work.
              <br />
              Master degree in Big Data & Data Science.
            </p>

            <a href="#contact" className="button button--flex">
              <CustomButton btn_flex={true}>
                Contact Me<i className="uil uil-message button__icon"></i>
              </CustomButton>
            </a>
          </div>
        </div>
        <div className={`${styles.scroll}`}>
          <a href="#about" className={`${styles.scroll_button} button--flex`}>
            <i className={`uil uil-mouse-alt ${styles.scroll_mouse}`}></i>
            <span className={`${styles.scroll_name}`}>Scroll down</span>
            <i className={`uil uil-arrow-down ${styles.scroll_arrow}`}></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

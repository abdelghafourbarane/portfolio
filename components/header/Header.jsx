import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} container `}>
        <a href="#" className={styles.logo}>
          Abdelghafour
        </a>
        <div className={styles.menu} id="nav-menu">
          <ul className={`${styles.list} grid`}>
            <li className={styles.item}>
              <a
                href="#home"
                className={`${styles.link} ${styles.active_link}`}
              >
                <i className={`uil uil-estate ${styles.icon} `}></i>Home
              </a>
            </li>

            <li className={styles.item}>
              <a href="#about" className={styles.link}>
                <i className={`uil uil-user ${styles.icon}`}></i>About
              </a>
            </li>

            <li className={styles.item}>
              <a href="#skills" className={styles.link}>
                <i className={`uil uil-file-alt ${styles.icon}`}></i>Skills
              </a>
            </li>

            <li className={styles.item}>
              <a href="#services" className={styles.link}>
                <i className={`uil uil-briefcase-alt ${styles.icon}`}></i>
                Services
              </a>
            </li>

            <li className={styles.item}>
              <a href="#portfolio" className={styles.link}>
                <i className={`uil uil-scenery ${styles.icon}`}></i>Portofolio
              </a>
            </li>

            <li className={styles.item}>
              <a href="#contact" className={styles.link}>
                <i className={`uil uil-message ${styles.icon}`}></i>Contactme
              </a>
            </li>
          </ul>
          <i className={`uil uil-times ${styles.close}`} id="nav-close"></i>{" "}
        </div>

        <div className={styles.btns}>
          {/*   Theme change button  */}
          <i
            className={`uil uil-moon ${styles.change_theme}`}
            id="theme-button"
          ></i>

          <div className={styles.toggle} id="nav-toggle">
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

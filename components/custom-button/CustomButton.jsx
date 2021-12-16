import styles from "./CustomButton.module.scss";

const CustomButton = ({
  children,
  btn_white,
  btn_icon,
  btn_flex,
  btn_small,
  btn_link,
}) => {
  return (
    <a
      className={`${styles.custom_btn} ${btn_white && styles.btn_white} ${
        btn_icon && styles.btn_icon
      } ${btn_flex && styles.btn_flex} ${btn_small && styles.btn_small} ${
        btn_link && styles.btn_link
      }`}
    >
      {children}
    </a>
  );
};

export default CustomButton;

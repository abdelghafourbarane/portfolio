import React from "react";

import styles from "./Modal.module.scss";

const Modal = ({ name, role, services, handleCloseClick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h4 className={styles.title}>
          {name} <br /> {role}
        </h4>
        <i
          className={`uil uil-times ${styles.close}`}
          onClick={() => handleCloseClick()}
        ></i>
        <ul className={`${styles.services} grid`}>
          {services.map((service, index) => (
            <li className={styles.service} key={`${index}_${name}`}>
              <i className={`uil uil-check-circle ${styles.icon}`}></i>
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;

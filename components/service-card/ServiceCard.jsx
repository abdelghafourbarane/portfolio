import React, { useState } from "react";
import Modal from "../modal/Modal";

import styles from "./ServiceCard.module.scss";

const ServiceCard = ({ name, role, iconClass, services }) => {
  const [showModal, setShowModal] = useState(true);

  const handleViewMoreClick = () => {
    setShowModal(!showModal);
  };

  console.log("show modal click :", showModal);
  return (
    <div className={styles.content}>
      <div>
        <i className={`uil ${iconClass} ${styles.icon}`}></i>
        <h3 className={styles.title}>
          {name} <br /> {role}
        </h3>
      </div>

      <span
        className={`button button--flex button--small button--link ${styles.button}`}
        onClick={handleViewMoreClick}
      >
        View More
        <i
          className={`uil uil-arrow-right button__icon ${styles.arrow_icon}`}
        ></i>
      </span>
      {showModal && (
        <Modal
          name={name}
          role={role}
          services={services}
          handleCloseClick={handleViewMoreClick}
        />
      )}
    </div>
  );
};

export default ServiceCard;

import React from "react";

import ServiceCard from "../service-card/ServiceCard";

import styles from "./ServicesSection.module.scss";

const SERVICES = [
  {
    service_name: "UI/UX",
    service_role: "Designer",
    service_icon: "uil-web-grid",
    services_list: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interaction.",
      "I position your company brand.",
    ],
  },
  {
    service_name: "Frontend",
    service_role: "Developer",
    service_icon: "uil-arrow",
    services_list: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interaction.",
      "I position your company brand.",
    ],
  },
  {
    service_name: "Branding",
    service_role: "Designer",
    service_icon: "uil-pen",
    services_list: [
      "I develop the user interface.",
      "Web page development.",
      "I create ux element interaction.",
      "I position your company brand.",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section class="services section" id="services">
      <h2 class="section__title">Services</h2>
      <span class="section__subtitle">What I offer</span>

      <div class={`${styles.container} container grid`}>
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={`${index}_${service.service_name}`}
            iconClass={service.service_icon}
            name={service.service_name}
            role={service.service_role}
            services={service.services_list}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

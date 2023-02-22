/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o primeiro serviço para a página Serviços */

import React from "react";

import CntTextAccessories from "./cntTextAccessories/CntTextAccessories";
import SliderServicesAccessories from "./sliderServicesAccessories/SliderServicesAccessories";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./SectionServicesAccessories.module.css";

export default function SectionServicesAccessories() {
  return (
    <section className={styles.sectionServicesAccessories} id="accessories">
      <CntTextAccessories />
      <SliderServicesAccessories />
    </section>
  );
}
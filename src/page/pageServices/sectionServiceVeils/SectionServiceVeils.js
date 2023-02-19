/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o segundo serviço para a página Serviços */

import React from "react";
// Import Swiper React components

import SliderServicesVeils from './sliderServicesVeils/SliderServicesVeils'
import CntTextVeils from './cntTextVeils/CntTextVeils';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./SectionServiceVeils.module.css";

export default function SectionServiceVeils() {
    return (
        <section className={styles.sectionServiceVeils} id="veils">
            <SliderServicesVeils />
            <CntTextVeils />
        </section>
    );
}

/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Serviços para a página Inicial */

import React from "react";

import ImgInitialServices from './imgInitialServices/ImgInitialServices';
import CntSectionServices from './cntSectionServices/CntSectionServices';

import styles from './SectionInitialServices.module.css';

export default function SectionInitialServices() {
    return (
        <section className={styles.sectionInitialServices}>
            <ImgInitialServices pathImgServices="/assets/imgSectionServices.jpg" altImgServices="Imagem da Seção de Serviços" />
            <CntSectionServices />
        </section>
    );
}

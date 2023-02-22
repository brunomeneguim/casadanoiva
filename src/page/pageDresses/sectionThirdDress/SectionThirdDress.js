/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Terceiro Vestido para a Página Vestido */
// import React, { lazy } from "react";

import TitleThirdDress from "./titleThirdDress/TitleThirdDress";
import CntImgThirdDress from "./cntImgThirdDress/CntImgThirdDress";

import styles from "./SectionThirdDress.module.css";

// const CntImgThirdDress = lazy(() => {
//   return import("./cntImgThirdDress/CntImgThirdDress");
// });

export default function SectionThirdDress() {
  return (
    <section className={styles.sectionThirdDress}>
      <TitleThirdDress idTitle="thirdDress" title="Sereia" />
      <CntImgThirdDress />
    </section>
  );
}

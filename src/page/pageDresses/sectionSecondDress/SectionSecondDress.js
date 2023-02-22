/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Segundo Vestido para a Página Vestido */
// import React, { lazy } from "react";

import TitleSecondDress from "./titleSecondDress/TitleSecondDress";
import CntImgSecondDress from "./cntImgSecondDress/CntImgSecondDress";
import styles from "./SectionSecondDress.module.css";

// const CntImgSecondDress = lazy(() => {
//   return import("./cntImgSecondDress/CntImgSecondDress");
// });

export default function SectionSecondDress() {
  return (
    <section className={styles.sectionSecondDress}>
      <TitleSecondDress idTitle="secondDress" title="Boho Chic" />
      <CntImgSecondDress />
    </section>
  );
}

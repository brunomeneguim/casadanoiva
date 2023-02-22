/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Quarto Vestido para a Página Vestido */
import React, { lazy } from "react";

import TitleFourthDress from "./titleFourthDress/TitleFourthDress";

import styles from "./SectionFourthDress.module.css";

const CntImgFourthDress = lazy(() =>
  import("./cntImgFourthDress/CntImgFourthDress")
);

export default function SectionFourthDress() {
  return (
    <section className={styles.sectionFourthDress}>
      <TitleFourthDress idTitle="fourthDress" title="Evasê" />
      <CntImgFourthDress />
    </section>
  );
}

/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Sexto Vestido para a Página Vestido */
import React, { lazy } from "react";

import TitleSixthDress from "./titleSixthDress/TitleSixthDress";

import styles from "./SectionSixthDress.module.css";

const CntImgSixthDress = lazy(() =>
  import("./cntImgSixthDress/CntImgSixthDress")
);
export default function SectionSixthDress() {
  return (
    <section className={styles.sectionSixthDress}>
      <TitleSixthDress idTitle="sixthDress" title="Civil" />
      <CntImgSixthDress />
    </section>
  );
}

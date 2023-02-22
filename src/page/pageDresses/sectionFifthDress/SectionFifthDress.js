/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Quinto Vestido para a Página Vestido */
import React, { lazy } from "react";

import TitleFifthDress from "./titleFifthDress/TitleFifthDress";

import styles from "./SectionFifthDress.module.css";

const CntImgFifthDress = lazy(() =>
  import("./cntImgFifthDress/CntImgFifthDress")
);

export default function SectionFifthDress() {
  return (
    <section className={styles.sectionFifthDress}>
      <TitleFifthDress idTitle="fifthDress" title="Plus Size" />
      <CntImgFifthDress />
    </section>
  );
}

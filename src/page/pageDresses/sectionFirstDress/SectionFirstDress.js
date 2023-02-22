/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Primeiro Vestido para a Página Vestido */

import React, { lazy } from "react";

import TitleFirstDress from "./titleFirstDress/TitleFirstDress";

import styles from "./SectionFirstDress.module.css";

const CntImgFirstDress = lazy(() =>
  import("./cntImgFirstDress/CntImgFirstDress")
);

export default function SectionFirstDress() {
  return (
    <section className={styles.sectionFirstDress}>
      <TitleFirstDress idTitle="firstDress" title="Princesa" />
      <CntImgFirstDress />
    </section>
  );
}

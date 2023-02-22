/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Título e Subtitulo para a página Serviços */

import TextServicesTitle from "./textServicesTitle/TextServicesTitle";

import styles from "./SectionServicesTitle.module.css";

export default function SectionServicesTitle() {
  return (
    <section className={styles.sectionServicesTitle}>
      <TextServicesTitle
        titleServices="NOSSOS SERVIÇOS"
        subtitleServices="Locação de véus, acessórios, anáguas, serviço completo de ajustes e lavanderia"
      />
    </section>
  );
}

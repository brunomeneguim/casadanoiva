/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Banner para a página Sobre */

import ImgAboutBanner from './imgAboutBanner/ImgAboutBanner';

import styles from './SectionAboutBanner.module.css';

export default function SectionAboutBanner() {
    return (
        <section className={styles.sectionAboutBanner}>
            <ImgAboutBanner
                pathImgBanner="/assets/imgSecaoSobre.jpg"
                altImgBanner="Banner da Seção Sobre"
            />
        </section>
    )

}
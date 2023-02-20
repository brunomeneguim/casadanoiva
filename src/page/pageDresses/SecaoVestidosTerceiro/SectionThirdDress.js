/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Terceiro Vestido para a Página Vestido */

import TitleThirdDress from './titleThirdDress/TitleThirdDress';
import CntImgThirdDress from './cntImgThirdDress/CntImgThirdDress';

import styles from './SectionThirdDress.module.css';

export default function SectionThirdDress() {
    return (
        <section className={styles.sectionThirdDress}>
            <TitleThirdDress idTitle="thirdDress" title="Sereia" />
            <CntImgThirdDress />
        </section>
    );
}
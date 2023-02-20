/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Sexto Vestido para a Página Vestido */

import TitleSixthDress from './titleSixthDress/TitleSixthDress';
import CntImgSixthDress from './cntImgSixthDress/CntImgSixthDress';

import styles from './SectionSixthDress.module.css';

export default function SectionSixthDress() {
    return (
        <section className={styles.sectionSixthDress}>
            <TitleSixthDress idTitle="sixthDress" title="Civil" />
            <CntImgSixthDress />
        </section>
    );
}

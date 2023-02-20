/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Quarto Vestido para a Página Vestido */

import TitleFourthDress from './titleFourthDress/TitleFourthDress';
import CntImgFourthDress from './cntImgFourthDress/CntImgFourthDress';

import styles from './SectionFourthDress.module.css';

export default function SectionFourthDress() {
    return (
        <section className={styles.sectionFourthDress}>
            <TitleFourthDress idTitle="fourthDress" title="Evasê" />
            <CntImgFourthDress />
        </section>
    );
}

/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Feedback para a página Sobre */

import TitleSectionFeedback from './titleFeedback/TitleFeedback';
import CntFeedback from './cntFeedback/CntFeedback';
import LinkFeedback from './linkFeedback/LinkFeedback';

import styles from './SectionAboutFeedback.module.css';

export default function SectionAboutFeedback() {
    return (
        <section className={styles.sectionAboutFeedback}>
            <TitleSectionFeedback titleFb="Feedback" />

            <CntFeedback />

            <LinkFeedback
                rel="noreferrer"
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfmUNOTGZVAlsjg1UEjGs5lOhoA84B2_0dyiPziSdbsbo6sAw/viewform"
                textLink="Envie-nos agora mesmo seu feedback"
            />
        </section>

    );
}
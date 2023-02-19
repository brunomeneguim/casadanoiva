import CntInitialQuestion from './cntInitialQuestion/CntInitialQuestion';
import LinkQuestion from './linkQuestion/LinkQuestion'

import styles from './SectionInitialQuestion.module.css';

export default function SectionInitialQuestion() {
    return (
        <section className={styles.sectionInitialQuestion}>
            <LinkQuestion pathLink="/contact" textLink="Perguntas Frequentes" />
            <CntInitialQuestion />
        </section>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Contato para a página Inicial */

import CntInitialContact from './cntInitialContact/CntInitialContact';

import styles from './SectionInitialContact.module.css';

export default function SectionInitialContact() {
    return (
        <section className={styles.sectionInitialContact}>

            <div className={styles.borderContactTop}></div>

            <CntInitialContact />
        </section>
    );
}
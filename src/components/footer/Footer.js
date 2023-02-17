/* Desenvolvido por - Bruno Marcondes */
/* Rodapé da página que está presente em todas as páginas */

import styles from './Footer.module.css';
import TextFooter from './textFooter/TextFooter';

export default function Footer() {
    return (
        <footer className={styles.cntFooter}>
            <TextFooter
                textCopyRight="© 2023 Casa da Noiva. Todos os Direitos Reservados"
                textDev="Desenvolvido por Bruno Marcondes"
            />
        </footer>
    );
}
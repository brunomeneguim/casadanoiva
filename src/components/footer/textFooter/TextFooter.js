/* Desenvolvido por - Bruno Marcondes */

import styles from './TextFooter.module.css';

export default function TextFooter({ textCopyRight, textDev }) {
    return (
        <>
            <p className={styles.textFooter}>{textCopyRight}</p>
            <p className={styles.textFooter}>{textDev}</p>
        </>
    );
}
/* Desenvolvido por - Bruno Marcondes */

import styles from './TextLogo.module.css';

export default function TextLogo({ textLogo }) {
    return (
        <h1 className={styles.textLogo}>{textLogo}</h1>
    );
}
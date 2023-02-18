/* Desenvolvido por - Bruno Marcondes */

import styles from './TitleContactForm.module.css';

export default function TitleContactForm({ titleForm }) {
    return (
        <>
            <h1 className={styles.titleForm}>{titleForm}</h1>
        </>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Link para o WhatsApp */

import styles from './WhatsApp.module.css';

export default function WhatsApp() {
    return (
        <>
            <a className={styles.whatsAppButton}
                href="https://wa.me/5542999901300"
                target="_blank"
                rel="noreferrer">
                <i className={`${styles.icon} fa fa-whatsapp`}></i>
            </a>
        </>
    );
}
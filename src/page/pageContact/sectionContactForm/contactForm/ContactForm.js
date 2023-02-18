/* Desenvolvido por - Bruno Marcondes */

import TitleContactForm from './titleContactForm/TitleContactForm';

import styles from './ContactForm.module.css';
import ComponentsContactForm from './componentsContactForm/ComponentsContactForm';

export default function ContactForm() {

    return (
        <div className={styles.cntContactForm}>
            <TitleContactForm titleForm="Entre em contato" />
            <ComponentsContactForm />
        </div>
    );
}
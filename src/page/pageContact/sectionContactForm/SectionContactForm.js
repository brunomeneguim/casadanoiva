/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o formulario, feedback e agendamento para a página Contato */

import React from 'react';

import ContactWhatsApp from './contactWhatsApp/ContactWhatsApp';
import ContactFeedback from './contactFeedback/ContactFeedback';

import styles from './SectionContactForm.module.css';
import ContactForm from './contactForm/ContactForm';

export default function SectionContactForm() {
    return (
        <section className={styles.sectionContactForm}>
            <ContactWhatsApp />
            <ContactForm />
            <ContactFeedback />
        </section>
    );
}
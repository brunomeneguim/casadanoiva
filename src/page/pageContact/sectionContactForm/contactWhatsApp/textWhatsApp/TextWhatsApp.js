/* Desenvolvido por - Bruno Marcondes */

import ImgContactWhatsApp from '../imgContactWhatsApp/ImgContactWhatsApp';

import styles from './TextWhatsApp.module.css';

export default function TextWhatsApp({ textWP, linkWP, targetWP, relWP, hrefWP }) {
    return (
        <>
            <p className={styles.txtContactWhatsApp}>{textWP}</p>
            <a className={styles.linkContactWhatsApp} target={targetWP} rel={relWP} href={hrefWP}>
                {linkWP}
                <ImgContactWhatsApp pathImgWP="/assets/iconCalendarContact.png" altImgWP="Ícone de Agendamento" />
            </a>
        </>
    );
}
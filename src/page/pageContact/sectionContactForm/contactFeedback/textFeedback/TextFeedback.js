/* Desenvolvido por - Bruno Marcondes */

import ImgContactFeedback from '../imgContactFeedback/ImgContactFeedback'

import styles from './TextFeedback.module.css';

export default function TextFeedback({ txtFb, linkFb, hrefFb, targetFb, relFb }) {
    return (
        <>
            <p className={styles.txtContactFeedback}>{txtFb}</p>
            <a className={styles.linkContactFeedback} target={targetFb} rel={relFb} href={hrefFb}>
                {linkFb}
                <ImgContactFeedback pathImgFb="/assets/iconeFeedback.png" altImgFb="Ícone de Feedback" />
            </a>
        </>
    );
}
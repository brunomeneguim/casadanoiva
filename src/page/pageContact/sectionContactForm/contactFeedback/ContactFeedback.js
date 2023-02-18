/* Desenvolvido por - Bruno Marcondes */

import TextFeedback from './textFeedback/TextFeedback';

import styles from './ContactFeedback.module.css';

export default function ContactFeedback() {
    return (
        <div className={styles.cntContactFeedback}>
            <TextFeedback
                txtFb="Se você já é nossa noivinha, deixe aqui seu feedback."
                linkFb="FeedBack"
                hrefFb="https://docs.google.com/forms/d/e/1FAIpQLSfmUNOTGZVAlsjg1UEjGs5lOhoA84B2_0dyiPziSdbsbo6sAw/viewform"
                targetFb="_blank"
                relFb="noreferrer"
            />
        </div>
    );
}
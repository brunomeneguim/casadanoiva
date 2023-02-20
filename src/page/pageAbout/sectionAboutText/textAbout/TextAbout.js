import styles from './TextAbout.module.css';

export default function TextAbout({ paragraph1, paragraph2, paragraph3, paragraph4, paragraph5 }) {
    return (
        <div className={styles.cntAboutText}>
            <p className={styles.textAbout}>{paragraph1}</p>
            <p className={styles.textAbout}>{paragraph2}</p>
            <p className={styles.textAbout}>{paragraph3}</p>
            <p className={styles.textAbout}>{paragraph4}</p>
            <p className={styles.textAbout}>{paragraph5}</p>
        </div>
    );
}
import styles from './TextInitialAbout.module.css';

export default function TextInitialAbout({ subtitleAbout, textAbout }) {
    return (
        <>
            <h2 className={styles.subtitleInitialAbout}>{subtitleAbout}</h2>
            <p className={styles.textInitialAbout}>{textAbout}</p>
        </>
    );
}
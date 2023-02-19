import styles from './TextInitialAbout.module.css';

export default function TextInitialAbout({ subTitleAbout, textAbout }) {
    return (
        <>
            <h2 className={styles.subTitleInitialAbout}>{subTitleAbout}</h2>
            <p className={styles.textInitialAbout}>{textAbout}</p>
        </>
    );
}
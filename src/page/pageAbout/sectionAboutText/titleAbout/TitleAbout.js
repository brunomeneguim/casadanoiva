import styles from './TitleAbout.module.css';

export default function TitleAbout({ titleAbout, subtitleAbout }) {
    return (
        <>
            <h1 className={styles.titleAbout}>{titleAbout}</h1>
            <h2 className={styles.subtitleAbout}>{subtitleAbout}</h2>
        </>
    );
}
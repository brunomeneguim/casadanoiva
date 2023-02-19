import styles from './TextInitialIntro.module.css';

export default function TextIntro({ titleIntro, subtitleIntro, textIntro }) {
    return (
        <>
            <h1 className={styles.titleIntro}>{titleIntro}</h1>
            <h2 className={styles.subtitleIntro}>{subtitleIntro}</h2>
            <p className={styles.textIntro}>{textIntro}</p>
        </>
    );
}
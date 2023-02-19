import styles from './TextInitialIntro.module.css';

export default function TextIntro({ titleIntro, subTitleIntro, textIntro }) {
    return (
        <>
            <h1 className={styles.titleIntro}>{titleIntro}</h1>
            <h2 className={styles.subTitleIntro}>{subTitleIntro}</h2>
            <p className={styles.textIntro}>{textIntro}</p>
        </>
    );
}
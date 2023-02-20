import styles from './TitleFeedback.module.css';

export default function TitleSectionFeedback({ titleFb }) {
    return (
        <>
            <h1 className={styles.titleSectionFeedback}>{titleFb}</h1>
        </>
    );
}
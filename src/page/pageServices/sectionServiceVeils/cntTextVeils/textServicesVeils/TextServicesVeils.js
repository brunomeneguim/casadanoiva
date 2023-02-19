import styles from './TextServicesVeils.module.css';

export default function TextServicesVeils({ titleVeils, subtitleVeils }) {
    return (
        <>
            <h1 className={styles.titleVeils}>{titleVeils}</h1>
            <p className={styles.textVeils}>{subtitleVeils}</p>
        </>
    );
}
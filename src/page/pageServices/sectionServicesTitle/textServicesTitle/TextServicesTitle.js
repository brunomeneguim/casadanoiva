import styles from './TextServicesTitle.module.css';

export default function TextServicesTitle({ titleServices, subtitleServices }) {
    return (
        <>
            <h1 className={styles.titleServices}>{titleServices}</h1>
            <h2 className={styles.subtitleServices}>{subtitleServices}</h2>
        </>
    );
}
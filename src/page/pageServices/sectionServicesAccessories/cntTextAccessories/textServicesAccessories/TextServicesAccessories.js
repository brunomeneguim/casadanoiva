import styles from './TextServicesAccessories.module.css';

export default function TextServicesAccessories({ titleAccessories, subtitleAccessories }) {
    return (
        <>
            <h1 className={styles.titleAccessories}>{titleAccessories}</h1>
            <p className={styles.textAccessories}>{subtitleAccessories}</p>
        </>
    );
}
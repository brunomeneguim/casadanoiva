import styles from './TitleThirdDress.module.css';

export default function TitleThirdDress({ idTitle, title }) {
    return (
        <>
            <h1 className={styles.titleThirdDress} id={idTitle}>{title}</h1>
        </>
    );
}
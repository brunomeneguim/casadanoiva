import styles from './TitleSecondDress.module.css';

export default function TitleSecondDress({ idTitle, title }) {
    return (
        <>
            <h1 className={styles.titleSecondDress} id={idTitle}>{title}</h1>
        </>
    );
}
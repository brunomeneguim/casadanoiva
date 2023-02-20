import styles from './TitleSixthDress.module.css';

export default function TitleSixthDress({ idTitle, title }) {
    return (
        <>
            <h1 className={styles.titleSixthDress} id={idTitle}>{title}</h1>
        </>
    );
}
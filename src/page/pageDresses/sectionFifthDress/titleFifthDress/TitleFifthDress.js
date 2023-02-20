import styles from './TitleFifthDress.module.css';

export default function TitleFifthDress({ idTitle, title }) {
    return (
        <>
            <h1 className={styles.titleFifthDress} id={idTitle}>{title}</h1>
        </>
    );
}
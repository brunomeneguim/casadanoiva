import styles from './TitleFourthDress.module.css';

export default function TitleFourthDress({ idTitle, title }) {
    return (
        <>
            <h1 className={styles.titleFourthDress} id={idTitle}>{title}</h1>
        </>
    );
}
import styles from './TextInitialPhrase.module.css';

export default function TextInitialPhrase({titlePhrase, textPhrase}){
    return(
        <>
            <h1 className={styles.titleInitialPhrase}>{titlePhrase}</h1>
            <p className={styles.textInitialPhrase}>{textPhrase}</p>
        </>
    );
}
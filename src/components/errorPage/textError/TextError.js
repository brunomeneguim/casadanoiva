import { Link } from "react-router-dom";
import styles from './TextError.module.css';

export default function TextError({ pathErrorPage, textErrorNotFound, textErrorReturn }) {
    return (
        <Link className={styles.linkError} to={pathErrorPage}>
            <p className={styles.textError}>{textErrorNotFound}</p>
            <p className={styles.textError}>{textErrorReturn}</p>
        </Link>
    );
}

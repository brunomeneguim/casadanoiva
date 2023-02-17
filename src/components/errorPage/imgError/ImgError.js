/* Desenvolvido por - Bruno Marcondes */

import styles from './ImgError.module.css';

export default function ImgError({ pathImgError, altImgError }) {
    return (
        <>
            <img className={styles.imgError} src={pathImgError} alt={altImgError} />
        </>
    );
}
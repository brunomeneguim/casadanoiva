import styles from './ImgContactFeedback.module.css';

export default function ImgContactFeedback({ pathImgFb, altImgFb }) {
    return (
        <>
            <img className={styles.imgContactFeedback} src={pathImgFb} alt={altImgFb} />
        </>

    );
}

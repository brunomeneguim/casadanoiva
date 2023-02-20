import styles from './ImgAboutBanner.module.css';

export default function ImgAboutBanner({ pathImgBanner, altImgBanner }) {
    return (
        <>
            <img className={styles.imgAboutBanner} src={pathImgBanner} alt={altImgBanner} />
        </>
    );
}
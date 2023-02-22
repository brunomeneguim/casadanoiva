import styles from "./ImgContactWhatsApp.module.css";

export default function ImgContactWhatsApp({ pathImgWP, altImgWP }) {
  return (
    <>
      <img
        className={styles.imgContactWhatsApp}
        src={pathImgWP}
        alt={altImgWP}
      />
    </>
  );
}

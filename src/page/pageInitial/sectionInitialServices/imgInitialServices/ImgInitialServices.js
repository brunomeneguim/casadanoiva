import styles from "./ImgInitialServices.module.css";

export default function ImgInitialServices({
  pathImgServices,
  altImgServices,
}) {
  return (
    <>
      <img
        className={styles.imgInitialServices}
        src={pathImgServices}
        alt={altImgServices}
      />
    </>
  );
}

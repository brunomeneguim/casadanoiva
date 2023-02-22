/* Desenvolvido por - Bruno Marcondes */

import styles from "./ImgLogo.module.css";

export default function ImgLogo({ ImgLogo, altImgLogo }) {
  return <img className={styles.imgLogo} src={ImgLogo} alt={altImgLogo} />;
}

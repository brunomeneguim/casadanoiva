import ThirdDress from "./ThirdDressData.json";

import styles from "./CntImgThirdDress.module.css";

export default function CntImgThirdDress() {
  return (
    <div className={styles.cntThirdDress}>
      {ThirdDress &&
        ThirdDress.map((ThirdDress) => {
          return (
            <figure
              className={`${styles.figThirdDress} ${styles.pushupThirdDress}`}
              key={ThirdDress.id}
            >
              <img
                className={styles.imgThirdDress}
                src={ThirdDress.pathImg}
                alt={ThirdDress.alt}
              />
              <figcaption className={styles.capThirdDress}>
                <h4 className={styles.textThirdDress}>{ThirdDress.caption}</h4>
              </figcaption>
            </figure>
          );
        })}
    </div>
  );
}

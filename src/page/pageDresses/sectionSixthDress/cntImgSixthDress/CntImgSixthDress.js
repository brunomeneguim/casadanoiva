import SixthDress from "./SixthDressData.json";

import styles from "./CntImgSixthDress.module.css";

export default function CntImgSixthDress() {
  return (
    <div className={styles.cntSixthDress}>
      {SixthDress &&
        SixthDress.map((SixthDress) => {
          return (
            <figure
              className={`${styles.figSixthDress} ${styles.pushupSixthDress}`}
              key={SixthDress.id}
            >
              <img
                className={styles.imgSixthDress}
                src={SixthDress.pathImg}
                alt={SixthDress.alt}
              />
              <figcaption className={styles.capSixthDress}>
                <h4 className={styles.textSixthDress}>{SixthDress.caption}</h4>
              </figcaption>
            </figure>
          );
        })}
    </div>
  );
}

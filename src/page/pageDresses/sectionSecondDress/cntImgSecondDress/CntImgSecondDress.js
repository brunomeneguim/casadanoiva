import SecondDress from './SecondDressData.json';

import styles from './CntImgSecondDress.module.css';

export default function CntImgSecondDress() {
    return (
        <div className={styles.cntSecondDress}>
            {
                SecondDress && SecondDress.map(SecondDress => {
                    return (
                        <figure className={`${styles.figSecondDress} ${styles.pushupSecondDress}`} key={SecondDress.id}>
                            <img className={styles.imgSecondDress} src={SecondDress.pathImg} alt={SecondDress.alt}
                            />
                            <figcaption className={styles.capSecondDress}>
                                <h4 className={styles.textSecondDress}>{SecondDress.caption}</h4>
                            </figcaption>
                        </figure>
                    )
                })
            }
        </div>
    );
}
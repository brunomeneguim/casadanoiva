import FirstDress from './FirstDressData.json'

import styles from './CntImgFirstDress.module.css';

export default function CntImgFirstDress() {
    return (
        <div className={styles.cntFirstDress}>
            {
                FirstDress && FirstDress.map(FirstDress => {
                    return (
                        <figure className={`${styles.figFirstDress} ${styles.pushupFirstDress}`} key={FirstDress.id}>
                            <img className={styles.imgFirstDress} src={FirstDress.pathImg} alt={FirstDress.alt}
                            />
                            <figcaption className={styles.capFirstDress}>
                                <h4 className={styles.textFirstDress}>{FirstDress.caption}</h4>
                            </figcaption>
                        </figure>
                    )
                })
            }
        </div>
    );
}
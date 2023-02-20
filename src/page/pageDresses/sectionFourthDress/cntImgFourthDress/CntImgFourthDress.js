import FourthDress from './FourthDressData.json';

import styles from './CntImgFourthDress.module.css';

export default function CntImgFourthDress() {
    return (
        <div className={styles.cntFourthDress}>
            {
                FourthDress && FourthDress.map(FourthDress => {
                    return (
                        <figure className={`${styles.figFourthDress} ${styles.pushupFourthDress}`} key={FourthDress.id}>
                            <img className={styles.imgFourthDress} src={FourthDress.pathImg} alt={FourthDress.alt}
                            />
                            <figcaption className={styles.capFourthDress}>
                                <h4 className={styles.textFourthDress}>{FourthDress.caption}</h4>
                            </figcaption>
                        </figure>
                    )
                })
            }
        </div>
    );
}
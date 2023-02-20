import FifthDress from './FifthDressData.json';

import styles from './CntImgFifthDress.module.css';

export default function CntImgFifthDress() {
    return (
        <div className={styles.cntFifthDress}>
            {
                FifthDress && FifthDress.map(FifthDress => {
                    return (
                        <figure className={`${styles.figFifthDress} ${styles.pushupFifthDress}`} key={FifthDress.id}>
                            <img className={styles.imgFifthDress} src={FifthDress.pathImg} alt={FifthDress.alt}
                            />
                            <figcaption className={styles.capFifthDress}>
                                <h4 className={styles.textFifthDress}>{FifthDress.caption}</h4>
                            </figcaption>
                        </figure>
                    )
                })
            }
        </div>
    );
}
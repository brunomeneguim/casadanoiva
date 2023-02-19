import { HashLink as Link } from 'react-router-hash-link';

import ListServicesData from './ListServicesData.json';

import styles from './CntListServices.module.css';

export default function CntListServices() {
    return (
        <div className={styles.cntListServices}>
            {
                ListServicesData && ListServicesData.map(ListServicesData => {
                    return (
                        <div className={styles.boxListServices} key={ListServicesData.id}>
                            <img className={styles.iconListServices} src={ListServicesData.pathIcon} alt={ListServicesData.altIcon} />
                            <Link className={styles.linkServices} to={ListServicesData.pathLink}>
                                <h2 className={styles.subTitleServices}>{ListServicesData.subTitle}</h2>
                                <p className={styles.textListServices}>{ListServicesData.txt1}</p>
                                <p className={styles.textListServices}>{ListServicesData.txt2}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
}
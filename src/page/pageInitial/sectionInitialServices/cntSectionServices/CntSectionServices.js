import LinkSectionServices from './linkSectionServices/LinkSectionServices'
import CntListServices from './cntListServices/CntListServices';

import styles from './CntSectionServices.module.css';

export default function CntSectionServices() {
    return (
        <div className={styles.cntSectionServices}>
            <LinkSectionServices pathServices="/services" titleServices="Serviços que oferecemos" />
            <CntListServices />
        </div>
    );
}
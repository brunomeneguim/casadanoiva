import { Link } from 'react-router-dom';

import styles from './LinkInitialInstagram.module.css';

export default function LinkInitialInstagram({pathLink, targetLink, textLink}){
    return(
        <>
            <Link className={styles.linkInstagram} to={pathLink} target={targetLink}>{textLink}</Link>
        </>
    );
}
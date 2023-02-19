import { HashLink as Link } from 'react-router-hash-link';

import styles from './LinkSectionServices.module.css';

export default function LinkSectionServices({ pathServices, titleServices }) {
    return (
        <>
            <Link className={styles.linkSectionServices} to={pathServices}>{titleServices}</Link>
        </>
    );
}
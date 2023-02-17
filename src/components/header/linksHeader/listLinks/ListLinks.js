/* Desenvolvido por - Bruno Marcondes */

import { Link } from 'react-router-dom';

import styles from './ListLinks.module.css';
import ListLinksData from './ListLinksData.json';

export default function ListLinks() {
    return (
        <nav className={styles.cntNavLinks}>
            {
                ListLinksData.map(ListLinksData => {
                    return (
                        <Link
                            key={ListLinksData.id}
                            className={styles.linkHeader}
                            to={ListLinksData.path}>
                            {ListLinksData.name}
                        </Link>
                    )
                })
            }
        </nav>
    );
}

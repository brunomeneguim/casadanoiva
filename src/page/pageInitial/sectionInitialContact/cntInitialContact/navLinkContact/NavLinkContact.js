import NavData from './NavLinkContactData.json';

import styles from './NavLinkContact.module.css';

export default function NavLinkContact() {
    return (
        <>
            {
                NavData && NavData.map(NavData => {
                    return (
                        <nav className={styles.navLinkContact} key={NavData.id}>
                            <a className={styles.linkIconContact}
                                href={NavData.href}
                                target={NavData.target}
                                rel={NavData.rel} >
                                <img className={styles.iconInitialContact} alt={NavData.altIcon} src={NavData.pathIcon} />
                                {NavData.textLink}
                            </a>
                        </nav>
                    )
                })
            }
        </>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Menu para a página Vestidos */

import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

import MenuData from './SectionDressesMenuData.json';

import styles from './SectionDressesMenu.module.css'

export default function SectionDressesMenu() {

    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }

    return (
        <section className={active ? `${styles.sectionDressesMenu} ${styles.sectionDressesMenuActive}` : `${styles.sectionDressesMenu}`} onClick={ToggleMode} >
            <div className={styles.window}>
                <div className={styles.cntMenu}>
                    <div className={styles.boxTitle}>
                        <h1 className={styles.titleDresses}>Modelos de Vestidos</h1>
                    </div>

                    <div className={active ? `${styles.icon} ${styles.iconActive}` : `${styles.icon}`} onClick={ToggleMode}>
                        <div className={`${styles.burguer} ${styles.burguerIcon}`}></div>
                    </div>
                </div>

                <div className={active ? `${styles.menu} ${styles.menuOpen}` : `${styles.menu} ${styles.menuClose}`}>
                    <div className={styles.list}>
                        {
                            MenuData && MenuData.map(MenuData => {
                                return (
                                    <ul className={styles.listItems} key={MenuData.id}>
                                        <li><Link className={styles.linkDresses} to={MenuData.path}>{MenuData.dressName}</Link></li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
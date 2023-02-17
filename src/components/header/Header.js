/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Cabeçalho para todas as páginas do site */

import React from 'react';

import ImgTextLogo from './logo/imgTextLogo/ImgTextLogo';
import LinksHeader from './linksHeader/LinksHeader';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.cntHeader}>
            <ImgTextLogo pathLogo="/" />
            <LinksHeader />
        </header>
    );
}
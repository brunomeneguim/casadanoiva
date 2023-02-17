/* Desenvolvido por - Bruno Marcondes */

import { Link } from 'react-router-dom'

import ImgLogo from './imgLogo/ImgLogo';
import TextLogo from './textLogo/TextLogo';

import styles from './ImgTextLogo.module.css';

export default function ImgTextLogo({ pathLogo }) {
    return (
        <Link className={styles.cntLogo} to={pathLogo}>
            <ImgLogo ImgLogo="/assets/imgLogo.jpg" altImgLogo="Imagem Logo" />
            <TextLogo textLogo="Casa da Noiva" />
        </Link>
    );
}


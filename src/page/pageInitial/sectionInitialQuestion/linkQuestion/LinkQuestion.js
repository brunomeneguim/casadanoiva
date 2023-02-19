/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Banner  da Seção Perguntas para a página Inicial */
import { HashLink as Link } from 'react-router-hash-link';

import styles from './LinkQuestion.module.css';

export default function LinkQuestion({ pathLink, textLink }) {
    return (
        <>
            <Link className={styles.linkQuestion} to={pathLink}>{textLink}</Link>
        </>
    );
}
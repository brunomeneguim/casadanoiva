/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Banner  da Seção Perguntas para a página Inicial */

import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoInicialBannerPerguntas() {
    return (
        <section className="secaoInicialBanner">
            <Link className='linkPerguntas' to='/contato'>Perguntas Frequentes</Link>
        </section>
    );
}
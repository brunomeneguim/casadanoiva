import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO BANNER PERGUNTAS PARA A SECAO GERAL */
export default function SecaoBannerPerguntas() {
    return (

        <section className="banner-perguntas">
            <Link className='link-perguntas' to='/contato#contato'>Perguntas Frequentes</Link>
        </section>
    );
}
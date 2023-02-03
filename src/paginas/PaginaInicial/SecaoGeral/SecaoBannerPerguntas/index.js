import { Link } from 'react-router-dom';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO BANNER PERGUNTAS PARA A SECAO GERAL */
export default function SecaoBannerPerguntas() {
    return (

        <section className="banner-perguntas">

            <Link className='link-perguntas' to='/contato'>Perguntas Frequentes</Link>

            {/* <h1 className='link-perguntas'>Perguntas Frequentes</h1> */}


        </section>
    );
}
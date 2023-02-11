import './style.css';
import { Link } from 'react-router-dom';

/* FUNÇÃO QUE EXPORTA A PAGINA DE ERRO CASO O USUARIO DIGITE UM ENDEREÇO ERRADO*/
export default function PaginaErro() {
    return (
        <section className='section-erro'>
            <Link className="link-erro" to='/#top'>
                <p>Página não encontrada</p>
                <p>Retorne à Página Inicial</p>
                <img className="img-erro" src='/assets/imgErro404.jpg' alt='Logo' />
            </Link>
        </section>
    )
}
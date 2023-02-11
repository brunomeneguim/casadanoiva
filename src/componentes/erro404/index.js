import './style.css';
import { Link } from 'react-router-dom';
import Cabecalho from '../cabecalho';
import Rodape from '../rodape';

/* FUNÇÃO QUE EXPORTA A PAGINA DE ERRO CASO O USUARIO DIGITE UM ENDEREÇO ERRADO*/
export default function Erro404() {
    return (
        <section className='section-erro'>
            <Cabecalho />
            <Link className="link-erro" to='/#top'>
                <p className='texto-erro'>Página não encontrada</p>
                <p className='texto-erro'>Retorne à Página Inicial</p>
                <img className="img-erro" src='/assets/imgErro404.jpg' alt='Logo' />
            </Link>
            <Rodape />
        </section>
    )
}
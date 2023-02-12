/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Menu para a página Vestidos */

import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoVestidosMenu() {
    return (
        <section className='containerVestidosMenu'>
            <nav className='linksVestidosMenu'>
                <Link className='linksVestidos' to="/vestidos#primeiroVestido">Vestido1</Link>
                <Link className='linksVestidos' to="/vestidos#segundoVestido">Vestido2</Link>
                <Link className='linksVestidos' to="/vestidos#terceiroVestido">Vestido3</Link>
                <Link className='linksVestidos' to="/vestidos#quartoVestido">Vestido4</Link>
                <Link className='linksVestidos' to="/vestidos#quintoVestido">Vestido5</Link>
            </nav>
        </section>
    );

}
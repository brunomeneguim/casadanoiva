/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Menu para a página Vestidos */

import { HashLink as Link } from 'react-router-hash-link'
import './style.css'

export default function SecaoVestidosMenu() {


    return (
        <section className='secaoVestidosMenu'>            
                    <nav className='linksVestidosMenu'>
                        <Link id="claro" className='linksVestidos' to="/vestidos#primeiroVestido">Princesa</Link>
                        <Link id="escuro" className='linksVestidos' to="/vestidos#segundoVestido">Boho Chic</Link>
                        <Link id="claro" className='linksVestidos' to="/vestidos#terceiroVestido">Sereia</Link>
                        <Link id="escuro" className='linksVestidos' to="/vestidos#quartoVestido">Evasê</Link>
                        <Link id="claro" className='linksVestidos' to="/vestidos#quintoVestido">Civil</Link>
                        <Link id="escuro" className='linksVestidos' to="/vestidos#sextoVestido">Plus Size</Link>
                    </nav>                
        </section>
    );

}
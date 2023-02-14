/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Menu para a página Vestidos */

import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import './style.css'

export default function SecaoVestidosMenu() {

    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }

    return (
        <section className='secaoVestidosMenu'>
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                <div className='burguer burguerIcon'></div>
            </div>

            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className='list'>
                    <ul className='listItems'>
                        <li><Link className='vestidoLink' to="/vestidos#primeiroVestido">Princesa</Link></li>
                        <li><Link className='vestidoLink' to="/vestidos#segundoVestido">Boho Chic</Link></li>
                        <li><Link className='vestidoLink' to="/vestidos#terceiroVestido">Sereia</Link></li>
                        <li><Link className='vestidoLink' to="/vestidos#quartoVestido">Evasê</Link></li>
                        <li><Link className='vestidoLink' to="/vestidos#quintoVestido">Civil</Link></li>
                        <li><Link className='vestidoLink' to="/vestidos#sextoVestido">Plus Size</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );

}
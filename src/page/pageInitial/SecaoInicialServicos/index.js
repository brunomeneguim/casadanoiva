/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Serviços para a página Inicial */

import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoInicialServicos() {

    return (

        /* Container da Seção Serviços */
        <section className="secaoInicialServicos">

            {/* Container da imagem da esquerda  */}
            <div className="containerImgServicos">
                <img src="/assets/imgSecaoServicos.jpg" alt="Imagem da Seção de Serviços" />
            </div>

            {/* Container dos Serviços da direita */}
            <div className='containerSecaoServicos'>

                <Link className='linkSecaoServicos' to='/servicos'>Serviços que oferecemos</Link>

                <div className="containerListaServicos">

                    {/* Box de cada Serviço da lista */}
                    <div className='boxListaServicos'>
                        <img src="/assets/iconeVestido.png" alt="Ícone de Vestido" />
                        <Link className="linkServicos" to="/vestidos">
                            <h2>Vestidos</h2>
                            <p>Princesa, Boho Chic, Sereia</p>
                            <p>Evasê, Plus Size e Civil</p>
                        </Link>
                    </div>

                    <div className='boxListaServicos'>
                        <img src="/assets/iconeAcessorios.png" alt="Ícone de Acessórios" />
                        <Link className="linkServicos" to="/servicos#acessorios">
                            <h2>Acessórios</h2>
                            <p>Coroas, Tiaras, Brincos</p>
                            <p>Cintos, Robes e Anáguas</p>
                        </Link>
                    </div>

                    <div className='boxListaServicos'>
                        <img src="/assets/iconeVeu.png" alt="Ícone de Véus" />
                        <Link className="linkServicos" to="/servicos#veus">
                            <h2>Véus</h2>
                            <p>Longos, Curtos</p>
                            <p>Rendados e Mantilhas</p>
                        </Link>
                    </div>

                    <div className='boxListaServicos'>
                        <img src="/assets/iconeSapato.png" alt="Ícone Outros" />
                        <Link className="linkServicos" to="/servicos#outros">
                            <h2>Outros</h2>
                            <p>Sapatos, Costureira e Lavanderia</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

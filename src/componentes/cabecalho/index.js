/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Cabeçalho para todas as páginas do site */

import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Cabecalho() {
    return (
        /* Container do login, logo e links */
        <header className='containerCabecalho'>

            {/* Container apenas do login */}
            <div className='containerLogin'>
                <Link className="linkLogin" to="*">
                    <img className="iconeLogin" alt="Ícone de Login" src="/assets/iconeLogin.png" />
                    Login
                </Link>
            </div>

            <div className='containerBorda'></div>

            {/* Div do logo e dos links */}
            <div className='containerLogoLinks'>
                <div className='containerLogo'>
                    <div>
                        <img className='imgLogo' alt='Logo' src="/assets/imgLogo.png" />
                    </div>
                    <div>
                        <Link className='linkLogo' to="/" alt="Imagem Logo">
                            Casa da Noiva
                        </Link>
                    </div>
                </div>

                {/* Div dos links e ícones */}
                <div className='containerLinkIcones'>

                    {/* Div apenas dos ícones */}
                    <nav className='containerLink'>
                        <Link className='linkCabecalho' to="/">Início</Link>
                        <Link className='linkCabecalho' to="/vestidos">Vestidos</Link>
                        <Link className='linkCabecalho' to="/servicos">Serviços</Link>
                        <Link className='linkCabecalho' to="/sobre">Sobre</Link>
                        <Link className='linkCabecalho' to="/contato">Contato</Link>
                    </nav>

                    {/* Div apenas dos ícones */}
                    <div className='containerIcones'>
                        <a className='iconeLocalizacao'
                            href="https://www.google.com.br/maps/place/Casa+da+Noiva/@-25.3996489,-51.4686269,17z/data=!3m1!4b1!4m5!3m4!1s0x94ef37c33a87ec89:0x4fd3c5c50cf7b6d0!8m2!3d-25.3996571!4d-51.4664418"
                            target="_blank"
                            rel='noreferrer'>
                            <img alt='Ícone da Localização' src='/assets/iconeLocalizacao.png' />
                        </a>
                        <a className='iconeInstagram'
                            href='https://www.instagram.com/casadanoiva.gpuava'
                            target="_blank"
                            rel='noreferrer'>
                            <img alt='Ícone do Instagram' src='/assets/iconeInstagram.png' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Cabeçalho para todas as páginas do site */

import React from 'react';

import { Link } from 'react-router-dom';
import './style.css';

export default function Cabecalho() {
    return (
        <header className='container-cabecalho'>
            <div className='container-login'>
                <Link className="link-login" to="*">

                    <img className="icone-login"
                        alt="Ícone de Login"
                        src="../../assets/iconeLogin.png" />
                    Login
                </Link>
            </div>
            <div className='container-borda'></div>
            <div className='container-logo-links'>
                <div className='container-logo'>
                    <div>

                        <img className='img-logo' alt='Logo' src="./assets/imgLogo.png" />
                    </div>
                    <div>
                        <Link className='link-logo' to="/#top" alt="Imagem Logo">
                            Casa da Noiva
                        </Link>
                    </div>
                </div>
                <div className='container-links-icones'>
                    <nav className='container-links'>
                        <Link className='link-cabecalho' to="/">Início</Link>
                        <Link className='link-cabecalho' to="/vestidos#top">Vestidos</Link>
                        <Link className='link-cabecalho' to="/servicos#top">Serviços</Link>
                        <Link className='link-cabecalho' to="/sobre#top">Sobre</Link>
                        <Link className='link-cabecalho' to="/contato#top">Contato</Link>
                    </nav>
                    <div className='container-icones'>
                        <a className='icone-localizacao'
                            href="https://www.google.com.br/maps/place/Casa+da+Noiva/@-25.3996489,-51.4686269,17z/data=!3m1!4b1!4m5!3m4!1s0x94ef37c33a87ec89:0x4fd3c5c50cf7b6d0!8m2!3d-25.3996571!4d-51.4664418"
                            target="_blank"
                            rel='noreferrer'>
                            <img alt='Ícone da Localização' src='../../assets/iconeLocalizacao.png' />
                        </a>
                        <a className='icone-instagram'
                            href='https://www.instagram.com/casadanoiva.gpuava'
                            target="_blank"
                            rel='noreferrer'>
                            <img alt='Ícone do Instagram' src='../../assets/iconeInstagram.png' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
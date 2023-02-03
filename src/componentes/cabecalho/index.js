import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


/* FUNÇÃO QUE EXPORTA O CABEÇALHO PARA AS PÁGINAS DO SITE */
export default function Cabecalho() {
    return (

        <header className='container-cabecalho'>

            {/* INICIO CONTAINER LOGIN */}
            <div className='container-login'>

                {/* AO CLICAR NO LINK OU NA IMAGEM VOLTA PARA A PÁGINA INICIAL */}
                <a className="link-login"
                    href="https://accounts.google.com/v3/signin/identifier?dsh=S823034822%3A1675198883795592&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHc4gBtIsVpjk4WF7yH_ABmeoTxFzsR99EiHIun-HyPSdJZo_FoTQJGdry-GKPsaH0dE7fGc1A">

                    <img className="icone-login"
                        alt="Ícone de Login"
                        src="../../assets/iconeLogin.png" />
                    Login

                </a>

            </div>
            {/* FIM CONTAINER DO LOGIN */}

            {/* BORDA PARA SEPARAR O LOGIN DOS LINKS E LOGO */}
            <div className='container-borda'></div>

            {/* INICIO CONTAINER LOGO E LINKS */}
            <div className='container-logo-links'>

                {/* INICIO CONTAINER LOGO */}
                <div className='container-logo'>
                    <div>
                        <img className='img-logo' alt='Logo' src="./assets/imgLogo.png" />
                    </div>
                    <div>
                        <Link className='link-logo' to="/" alt="Imagem Logo">

                            Casa da Noiva

                        </Link>
                    </div>



                </div>
                {/* FIM CONTAINER LOGO */}

                {/* INICIO CONTAINER LINKS */}
                <div className='container-links-icones'>

                    <nav className='container-links'>
                        <Link className='link-cabecalho' to="/">Início</Link>
                        <Link className='link-cabecalho' to="/vestidos">Vestidos</Link>
                        <Link className='link-cabecalho' to="/servicos">Serviços</Link>
                        <Link className='link-cabecalho' to="/sobre">Sobre</Link>
                        <Link className='link-cabecalho' to="/contato">Contato</Link>
                    </nav>

                    {/* INICIO CONTAINER ICONES */}
                    <div className='container-icones'>

                        {/* GOOGLE MAPS DA LOCALIZAÇÃO */}
                        <a className='icone-localizacao'
                            href="https://www.google.com.br/maps/place/Casa+da+Noiva/@-25.3996489,-51.4686269,17z/data=!3m1!4b1!4m5!3m4!1s0x94ef37c33a87ec89:0x4fd3c5c50cf7b6d0!8m2!3d-25.3996571!4d-51.4664418"
                            target="_blank"
                            rel='noreferrer'>
                            <img alt='Ícone da Localização' src='../../assets/iconeLocalizacao.png' />
                        </a>

                        {/* INSTAGRAM DA CASA DA NOIVA */}
                        <a className='icone-instagram'
                            href='https://www.instagram.com/casadanoiva.gpuava'
                            target="_blank"
                            rel='noreferrer'>
                            <img alt='Ícone do Instagram' src='../../assets/iconeInstagram.png' />
                        </a>

                    </div>
                    {/* FIM CONTAINER ICONES */}

                </div>
                {/* FIM CONTAINER LINKS */}

            </div>
            {/* FIM CONTAINER LOGO E LINKS */}

        </header>
    );
}
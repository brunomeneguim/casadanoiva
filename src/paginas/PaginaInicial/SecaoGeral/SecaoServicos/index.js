import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO SERVICOS PARA A SECAO GERAL */
export default function SecaoServicos() {

    return (

        <section className="secao-servicos">
            <div className="container-img-secao-servicos">
                <img src="./assets/imgSecaoServicos.jpg"
                    alt="Imagem da Seção de Serviços" />
            </div>

            <div className='container-secao-servicos'>

                <Link className='link-servicos' to='/servicos#top'>Serviços que oferecemos</Link>

                <div className="container-lista-servicos">
                    <div className='lista-servicos'>

                        <img src="./assets/iconeVestido.png"
                            alt="Ícone de Vestido" />

                        <Link className="secao-servicos-link"
                            to="/vestidos">

                            <h2>Vestidos</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>
                    </div>

                    <div className='lista-servicos'>

                        <img src="./assets/iconeAcessorios.png"
                            alt="Ícone de Acessórios" />
                        <Link className="secao-servicos-link"
                            to="/servicos#acessorios">

                            <h2>Acessórios</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>

                    </div>
                    <div className='lista-servicos'>

                        <img src="./assets/iconeVeu.png"
                            alt="Ícone de Véus" />

                        <Link className="secao-servicos-link"
                            to="/servicos#veus">

                            <h2>Véus</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>
                    </div>
                    <div className='lista-servicos'>

                        <img src="./assets/iconeOutros.png"
                            alt="Ícone Outros" />

                        <Link className="secao-servicos-link"
                            to="/servicos#outros">

                            <h2>Outros</h2>
                            <p>Sapatos x, Costureira x, Lavanderia x</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

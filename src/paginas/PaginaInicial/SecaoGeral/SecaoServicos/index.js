import { Link } from 'react-router-dom';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO SERVICOS PARA A SECAO GERAL */
export default function SecaoServicos() {
    return (

        /* INICIO SECAO SERVICOS */
        <section className="secao-servicos">

            {/* INICIO CONTAINER IMAGEM */}
            <div className="container-img-secao-servicos">

                <img src="./assets/imgSecaoServicos.jpg"
                    alt="Imagem da Seção de Serviços" />

            </div>
            {/* FIM CONTAINER IMAGEM */}

            {/* INICIO CONTAINER SECAO SERVICOS */}
            <div className='container-secao-servicos'>

                <Link className='link-servicos' to='/servicos'>Serviços que oferecemos</Link>
                {/*<h1>Serviços que oferecemos</h1>*/}

                {/* INICIO CONTAINER LISTA SERVICOS */}
                <div className="container-lista-servicos">

                    {/* INICIO SECAO SERVICOS VESTIDOS */}
                    <div className='lista-servicos'>

                        <img src="./assets/iconeVestido.png"
                            alt="Ícone de Vestido" />

                        <Link className="secao-servicos-link"
                            to="/vestidos">

                            <h2>Vestidos</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>

                    </div>
                    {/* FIM SECAO SERVICOS VESTIDOS */}

                    {/* INICIO SECAO SERVICOS ACESSORIOS */}
                    <div className='lista-servicos'>

                        <img src="./assets/iconeAcessorios.png"
                            alt="Ícone de Acessórios" />

                        <Link className="secao-servicos-link"
                            to="/servicos">

                            <h2>Acessórios</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>

                    </div>
                    {/* FIM SECAO SERVICOS ACESSORIOS */}

                    {/* INICIO SECAO SERVICOS VEUS */}
                    <div className='lista-servicos'>

                        <img src="./assets/iconeVeu.png"
                            alt="Ícone de Véus" />

                        <Link className="secao-servicos-link"
                            to="/servicos">

                            <h2>Véus</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>

                    </div>
                    {/* FIM SECAO SERVICOS VEUS */}

                    {/* INICIO SECAO SERVICOS OUTROS */}
                    <div className='lista-servicos'>

                        <img src="./assets/iconeOutros.png"
                            alt="Ícone Outros" />

                        <Link className="secao-servicos-link"
                            to="/servicos">

                            <h2>Outros</h2>

                            <p>Tamanhos x, Tamanhos x, Tamanhos x</p>

                        </Link>
                    </div>
                    {/* FIM SECAO SERVICOS OUTROS */}

                </div>
                {/* FIM CONTAINER LISTA SERVICOS */}

            </div>
            {/* FIM CONTAINER SECAO SERVICOS */}

        </section>
        /* FIM SECAO SERVICOS */
    );
}
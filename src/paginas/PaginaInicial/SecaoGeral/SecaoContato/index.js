import { Link } from 'react-router-dom';

import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO CONTATO PARA A SECAO GERAL */
export default function SecaoContato() {
    return (

        /* INICIO SECAO CONTATO */
        <section className="secao-contato">

            {/* INICIO CONTAINER BORDA */}
            <div className="contato-borda-top"></div>
            {/* FIM CONTAINER BORDA */}

            {/* INICIO CONTAINER CONTATO */}
            <div className="container-secao-contato">

                <Link className='secao-contato-titulo' to='/contato'>Entre em contato</Link>

                <p className="texto-contato">Tenho prazer em ajudar meus pacientes a desenvolverem as ferramentas que
                    precisam para lidar com todos os desafios da vida.
                    Entre em contato comigo para mais informações e também para agendar uma sessão.
                </p>

                <p className="endereco-contato">Casa da Noiva - Rua Quintino Bocaíuva, 947 - Centro, Guarapuava - PR, 85010-300, Brasil</p>

                <nav className='contato-icones'>

                    <a href="mailto:anne_wendler@hotmail.com"
                        alt="E-mail do Atêlie">
                        <img alt="Ícone E-mail"
                            src="../../../assets/iconeEmail.png" />
                        E-mail: anne_wendler@hotmail.com

                    </a>

                    <a href="tel:5542999901300"
                        alt="Telefone do Atêlie">
                        <img alt="Ícone Telefone"
                            src="../../../assets/iconeTelefone.png" />
                        Celular: (42) 9-9990-1300

                    </a>

                </nav>

            </div>
            {/* FIM CONTAINER CONTATO */}

        </section>
        /* FIM SECAO CONTATO */
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Contato para a página Inicial */

import { HashLink as Link } from 'react-router-hash-link';

import './style.css';

export default function SecaoInicialContato() {
    return (
        /* Container da Seção Contato */
        <section className="secaoInicialContato">

            <div className="contatoBordaTop"></div>
            {/* Container dos textos, links e ícones */}
            <div className="containerInicialContato">

                {/* Link para a página Contato */}
                <Link className='tituloInicialContato' to='/contato'>Entre em contato</Link>

                <p className="textoInicialContato">Tenho prazer em ajudar meus pacientes a desenvolverem as ferramentas que
                    precisam para lidar com todos os desafios da vida.
                    Entre em contato comigo para mais informações e também para agendar uma sessão.
                </p>


                {/* Links da seção Contato */}
                <nav className='navIconesContato'>
                    <a className='iconeInicialContato'
                        href="https://www.google.com.br/maps/place/Casa+da+Noiva/@-25.3996489,-51.4686269,17z/data=!3m1!4b1!4m5!3m4!1s0x94ef37c33a87ec89:0x4fd3c5c50cf7b6d0!8m2!3d-25.3996571!4d-51.4664418"
                        target="_blank"
                        rel='noreferrer'>
                        <img className='imgInicialContato' alt='Ícone da Localização' src='/assets/iconeLocalizacao.png' />
                        Casa da Noiva - Rua Quintino Bocaíuva, 947 - Centro, Guarapuava - PR, 85010-300, Brasil
                    </a>
                    <a className='iconeInicialContato'
                        href="mailto:anne_wendler@hotmail.com"
                        alt="E-mail do Atêlie"
                        rel='noreferrer'>
                        <img className='imgInicialContato' alt="Ícone E-mail" src="/assets/iconeEmail.png" />
                        E-mail: anne_wendler@hotmail.com
                    </a>
                    <a className='iconeInicialContato'
                        href="tel:5542999901300"
                        alt="Telefone do Atêlie"
                        rel='noreferrer'>
                        <img className='imgInicialContato' alt="Ícone Telefone" src="/assets/iconeTelefone.png" />
                        Celular: (42) 9-9990-1300
                    </a>
                </nav>
            </div>
        </section>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Feedback para a página Sobre */

import './style.css';

export default function SecaoSobreFeedback() {
    return (
        <>
            {/* Container do Titulo, Feedback e Link no Rodope */}
            <div className='containerSobreFeedback'>
                <h1 className='tituloSecaoFeedback'>Feedbacks</h1>

                {/* Container Apenas dos Feedbacks */}
                <div className='containerFeedback'>
                    <figure className='boxFeedback'>
                        <img className='imgNoivaFeedback' src='/assets/imgFeedback/imgFeedback1.jpg' alt='Primeiro Feedback' />
                        <article className='boxTextoFeedback'>
                            <h2 className='tituloFeedback'>Nome da Noiva</h2>
                            <p className='textoFeedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='boxFeedback'>
                        <img className='imgNoivaFeedback' src='/assets/imgFeedback/imgFeedback2.jpg' alt='Segundo Feedback' />
                        <article className='boxTextoFeedback'>
                            <h2 className='tituloFeedback'>Nome da Noiva</h2>
                            <p className='textoFeedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='boxFeedback'>
                        <img className='imgNoivaFeedback' src='/assets/imgFeedback/imgFeedback3.jpg' alt='Terceiro Feedback' />
                        <article className='boxTextoFeedback'>
                            <h2 className='tituloFeedback'>Nome da Noiva</h2>
                            <p className='textoFeedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>
                    <figure className='boxFeedback'>
                        <img className='imgNoivaFeedback' src='/assets/imgFeedback/imgFeedback4.jpg' alt='Quarto Feedback' />
                        <article className='boxTextoFeedback'>
                            <h2 className='tituloFeedback'>Nome da Noiva</h2>
                            <p className='textoFeedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='boxFeedback'>
                        <img className='imgNoivaFeedback' src='/assets/imgFeedback/imgFeedback5.jpg' alt='Quinto Feedback' />
                        <article className='boxTextoFeedback'>
                            <h2 className='tituloFeedback'>Nome da Noiva</h2>
                            <p className='textoFeedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='boxFeedback'>
                        <img className='imgNoivaFeedback' src='/assets/imgFeedback/imgFeedback6.jpg' alt='Sexto Feedback' />
                        <article className='boxTextoFeedback'>
                            <h2 className='tituloFeedback'>Nome da Noiva</h2>
                            <p className='textoFeedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>
                </div>

                {/* Link para Formulário Feedback */}
                <a className='linkSobreFeedback'
                    rel="noreferrer"
                    target="_blank"
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfmUNOTGZVAlsjg1UEjGs5lOhoA84B2_0dyiPziSdbsbo6sAw/viewform'>Envie-nos agora mesmo seu feedback</a>
            </div>
        </>
    );
}
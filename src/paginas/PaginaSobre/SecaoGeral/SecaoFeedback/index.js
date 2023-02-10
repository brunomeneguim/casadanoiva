import { Link } from 'react-router-dom';
import './style.css';

export default function SecaoFeedback() {
    return (
        <section className='secao-sobre-feedback'>
            <div className='container-sobre-feedback'>
                <h1 className='titulo-feedback'>Feedback</h1>
                <div className='container-feedback'>

                    <figure className='container-imagem-feedback'>
                        <img className='img-feedback' src='./assets/imgFeedback/imgFeedback1.jpg' alt='Primeiro Feedback' />
                        <article className='container-texto-feedback'>
                            <h2 className='titulo-box-feedback'>Nome da Noiva</h2>
                            <p className='texto-feedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='container-imagem-feedback'>
                        <img className='img-feedback' src='./assets/imgFeedback/imgFeedback2.jpg' alt='Segundo Feedback' />
                        <article className='container-texto-feedback'>
                            <h2 className='titulo-box-feedback'>Nome da Noiva</h2>
                            <p className='texto-feedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='container-imagem-feedback'>
                        <img className='img-feedback' src='./assets/imgFeedback/imgFeedback3.jpg' alt='Terceiro Feedback' />
                        <article className='container-texto-feedback'>
                            <h2 className='titulo-box-feedback'>Nome da Noiva</h2>
                            <p className='texto-feedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>
                    <figure className='container-imagem-feedback'>
                        <img className='img-feedback' src='./assets/imgFeedback/imgFeedback4.jpg' alt='Quarto Feedback' />
                        <article className='container-texto-feedback'>
                            <h2 className='titulo-box-feedback'>Nome da Noiva</h2>
                            <p className='texto-feedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='container-imagem-feedback'>
                        <img className='img-feedback' src='./assets/imgFeedback/imgFeedback5.jpg' alt='Quinto Feedback' />
                        <article className='container-texto-feedback'>
                            <h2 className='titulo-box-feedback'>Nome da Noiva</h2>
                            <p className='texto-feedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>

                    <figure className='container-imagem-feedback'>
                        <img className='img-feedback' src='./assets/imgFeedback/imgFeedback6.jpg' alt='Sexto Feedback' />
                        <article className='container-texto-feedback'>
                            <h2 className='titulo-box-feedback'>Nome da Noiva</h2>
                            <p className='texto-feedback'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
                                tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem
                                ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                            </p>
                        </article>
                    </figure>
                </div>
                <Link className='rodape-feedback'
                    to='/contato#contato'>Envie-nos agora mesmo um feedback.</Link>
            </div>

        </section>
    );
}
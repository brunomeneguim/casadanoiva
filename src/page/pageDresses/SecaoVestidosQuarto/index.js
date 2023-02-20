/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Quarto Vestido para a Página Vestido */

import imgVestidos from './dadosQuartoVestido.json'
import './style.css';

export default function SecaoVestidosQuarto() {
    return (
        /* SECAO VESTIDO TIPO 4 - BACKGROUND ESCURO */
        <section className='secaoVestidosQuarto'>
            <div>
                <h1 className='tituloQuartoVestido' id='quartoVestido'>Evasê</h1>
            </div>

            {/* Container das imagens e caption do Quarto Vestido */}
            <div className='containerQuartoVestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="figQuartoVestido pushupQuartoVestido" key={imgVestidos.id}>
                                <img className='imgQuartoVestido' src={imgVestidos.imagem} alt={imgVestidos.alt}
                                />
                                <figcaption className='captionQuartoVestido'>
                                    <h4 className='textoQuartoVestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}
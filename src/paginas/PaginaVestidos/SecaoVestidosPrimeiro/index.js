/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Primeiro Vestido para a Página Vestido */

import imgVestidos from './dadosPrimeiroVestido.json'
import './style.css';

export default function SecaoVestidosPrimeiro() {
    return (
        /* SECAO VESTIDO TIPO 1 - BACKGROUND BRANCO */
        <section className='secaoVestidosPrimeiro'>
            <div>
                <h1 className='tituloPrimeiroVestido' id='primeiroVestido'>Primeiro Vestido</h1>
            </div>

            {/* Container das imagens e caption do Primeiro Vestido */}
            <div className='containerPrimeiroVestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {                         
                        return (                           
                            <figure className="figPrimeiroVestido pushupPrimeiroVestido" key={imgVestidos.id}>
                                <img className='imgPrimeiroVestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='captionPrimeiroVestido'>
                                    <h4 className='textoPrimeiroVestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

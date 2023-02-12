/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta os Quintos Vestidos para a Página Vestido */

import imgVestidos from './dadosQuintoVestido.json'
import './style.css';

export default function SecaoVestidosQuinto() {
    return (
        /* SECAO VESTIDO TIPO 5 - BACKGROUND BRANCO */
        <section className='secaoVestidosQuinto'>
            <div>
                <h1 className='tituloQuintoVestido' id='quintoVestido'>Quinto Vestido</h1>
            </div>

            {/* Container das imagens e caption do Quinto Vestido */}
            <div className='containerQuintoVestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="figQuintoVestido pushupQuintoVestido" key={imgVestidos.id}>
                                <img className='imgQuintoVestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='captionQuintoVestido'>
                                    <h4 className='textoQuintoVestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

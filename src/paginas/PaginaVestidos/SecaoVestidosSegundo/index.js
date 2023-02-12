/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta os Segundos Vestidos para a Página Vestido */

import imgVestidos from './dadosSegundoVestido.json'
import './style.css';

export default function SecaoVestidosSegundo() {
    return (
        /* SECAO VESTIDO TIPO 2 - BACKGROUND ESCURO */
        <section className='secaoVestidosSegundo'>
            <div>
                <h1 className='tituloSegundoVestido' id='segundoVestido'>Segundo Vestido</h1>
            </div>

            {/* Container das imagens e caption do Segundo Vestido */}
            <div className='containerSegundoVestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="figSegundoVestido pushupSegundoVestido" key={imgVestidos.id}>
                                <img className='imgSegundoVestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='captionSegundoVestido'>
                                    <h4 className='textoSegundoVestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

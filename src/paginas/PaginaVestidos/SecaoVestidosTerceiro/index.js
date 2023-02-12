/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta os Terceiros Vestidos para a Página Vestido */

import imgVestidos from './dadosTerceiroVestido.json'
import './style.css';

export default function SecaoVestidosTerceiro() {
    return (
        /* SECAO VESTIDO TIPO 3 - BACKGROUND BRANCO */
        <section className='secaoVestidosTerceiro'>
            <div>
                <h1 className='tituloTerceiroVestido' id='terceiroVestido'>Terceiro Vestido</h1>
            </div>

            {/* Container das imagens e caption do Terceiro Vestido */}
            <div className='containerTerceiroVestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="figTerceiroVestido pushupTerceiroVestido" key={imgVestidos.id}>
                                <img className='imgTerceiroVestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='captionTerceiroVestido'>
                                    <h4 className='textoTerceiroVestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

/* Desenvolvido por - Bruno Marcondes */
/* Secao que exporta o Sexto Vestido para a Página Vestido */

import imgVestidos from './dadosSextoVestido.json'
import './style.css';

export default function SecaoVestidosSexto() {
    return (
        /* SECAO VESTIDO TIPO 6 - BACKGROUND ESCURO */
        <section className='secaoVestidosSexto'>
            <div>
                <h1 className='tituloSextoVestido' id='sextoVestido'>Civil</h1>
            </div>

            {/* Container das imagens e caption do Sexto Vestido */}
            <div className='containerSextoVestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="figSextoVestido pushupSextoVestido" key={imgVestidos.id}>
                                <img className='imgSextoVestido' src={imgVestidos.imagem} alt={imgVestidos.alt}
                                />
                                <figcaption className='captionSextoVestido'>
                                    <h4 className='textoSextoVestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

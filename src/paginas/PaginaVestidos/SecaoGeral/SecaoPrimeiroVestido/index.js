import imgVestidos from './primeiro-vestido.json'
import './style.css';

export default function SecaoPrimeiroVestido() {
    return (
        /* SECAO VESTIDO TIPO 1 - BACKGROUND BRANCO */
        <section className='secao-primeiro-vestido'>
            <div>
                <h1 className='titulo-primeiro-vestido' id='primeiro-vestido'>Primeiro Vestido</h1>
            </div>
            <div className='container-primeiro-vestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="fig-primeiro-vestido pushup-primeiro-vestido" key={imgVestidos.id}>
                                <img className='img-primeiro-vestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='caption-primeiro-vestido'>
                                    <h4 className='texto-primeiro-vestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

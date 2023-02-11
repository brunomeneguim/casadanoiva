import imgVestidos from './segundo-vestido.json'
import './style.css';

export default function SecaoSegundoVestido() {
    return (
        /* SECAO VESTIDO TIPO 2 - BACKGROUND ESCURO */
        <section className='secao-segundo-vestido'>
            <div>
                <h1 className='titulo-segundo-vestido' id='segundo-vestido'>Segundo Vestido</h1>
            </div>
            <div className='container-segundo-vestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="fig-segundo-vestido pushup-segundo-vestido" key={imgVestidos.id}>
                                <img className='img-segundo-vestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='caption-segundo-vestido'>
                                    <h4 className='texto-segundo-vestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

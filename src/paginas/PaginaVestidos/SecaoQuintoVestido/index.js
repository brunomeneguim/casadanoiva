import imgVestidos from './quinto-vestido.json'
import './style.css';

export default function SecaoQuintoVestido() {
    return (
        /* SECAO VESTIDO TIPO 5 - BACKGROUND BRANCO */
        <section className='secao-quinto-vestido'>
            <div>
                <h1 className='titulo-quinto-vestido' id='quinto-vestido'>Quinto Vestido</h1>
            </div>
            <div className='container-quinto-vestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="fig-quinto-vestido pushup-quinto-vestido" key={imgVestidos.id}>
                                <img className='img-quinto-vestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='caption-quinto-vestido'>
                                    <h4 className='texto-quinto-vestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

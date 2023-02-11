import imgVestidos from './terceiro-vestido.json'
import './style.css';

export default function SecaoTerceiroVestido() {
    return (
        /* SECAO VESTIDO TIPO 3 - BACKGROUND BRANCO */
        <section className='secao-terceiro-vestido'>
            <div>
                <h1 className='titulo-terceiro-vestido' id='terceiro-vestido'>Terceiro Vestido</h1>
            </div>
            <div className='container-terceiro-vestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="fig-terceiro-vestido pushup-terceiro-vestido" key={imgVestidos.id}>
                                <img className='img-terceiro-vestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='caption-terceiro-vestido'>
                                    <h4 className='texto-terceiro-vestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

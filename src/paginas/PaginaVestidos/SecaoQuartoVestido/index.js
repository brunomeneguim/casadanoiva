import imgVestidos from './quarto-vestido.json'
import './style.css';

export default function SecaoQuartoVestido() {
    return (
        /* SECAO VESTIDO TIPO 4 - BACKGROUND ESCURO */
        <section className='secao-quarto-vestido'>
            <div>
                <h1 className='titulo-quarto-vestido' id='quarto-vestido'>Quarto Vestido</h1>
            </div>
            <div className='container-quarto-vestido'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="fig-quarto-vestido pushup-quarto-vestido" key={imgVestidos.id}>
                                <img className='img-quarto-vestido' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='caption-quarto-vestido'>
                                    <h4 className='texto-quarto-vestido'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

import imgVestidos from './TipoVestido1.json'
import './TipoVestido1.css';

export default function SecaoVestido1() {
    return (
        <section className='secao-vestido-claro' id='tipo-vestido1'>
            <div>
                <h1 className='titulo-vestido-claro'>Vestido1</h1>
            </div>
            <div className='container-imagens-vestido-claro'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className="vestido1 efeito" key={imgVestidos.id}>
                                <img className='img-vestido1' src={imgVestidos.imagem} alt={imgVestidos.name}
                                />
                                <figcaption className='caption-vestido1'>
                                    <h4 className='texto-vestido1'>{imgVestidos.caption}</h4>
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

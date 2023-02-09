import imgVestidos from './TipoVestido1.json'
import './TipoVestido1.css';

export default function SecaoVestido1() {
    return (
        <section className='secao-vestido-claro' id='tipo-vestido1'>
            <div>
                <h1 className='titulo-vestido-claro' >Vestido1</h1>
            </div>
            <div className='container-imagens-vestido-claro'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className='box-img-vestido-claro' key={imgVestidos.id}>
                                <img className='img-vestido-claro'
                                    src={imgVestidos.imagem}
                                    alt={imgVestidos.name}


                                />
                                <figcaption className='caption-vestido-claro'>
                                    {imgVestidos.caption}
                                </figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

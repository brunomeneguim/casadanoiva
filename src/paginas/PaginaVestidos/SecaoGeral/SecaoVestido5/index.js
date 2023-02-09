import imgVestidos from './TipoVestido5.json'
import './../SecaoVestido1';

export default function SecaoVestido5() {
    return (
        <section className='secao-vestido-claro' id='tipo-vestido5'>
            <div>
                <h1 className='titulo-vestido-claro' >Vestido5</h1>
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
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
}

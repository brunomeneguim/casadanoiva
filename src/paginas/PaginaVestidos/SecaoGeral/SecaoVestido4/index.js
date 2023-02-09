import imgVestidos from './TipoVestido4.json'
import './../SecaoVestido2';

export default function SecaoVestido4() {
    return (
        <section className='secao-vestido-escuro' id='tipo-vestido4'>
            <div>
                <h1 className='titulo-vestido-escuro' >Vestido4</h1>
            </div>
            <div className='container-imagens-vestido-escuro'>
                {
                    imgVestidos && imgVestidos.map(imgVestidos => {
                        return (
                            <figure className='box-img-vestido-escuro' key={imgVestidos.id}>
                                <img className='img-vestido-escuro'
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

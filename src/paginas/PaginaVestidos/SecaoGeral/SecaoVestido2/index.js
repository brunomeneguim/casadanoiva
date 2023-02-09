import imgVestidos from './TipoVestido2.json'
import './TipoVestido2.css';

export default function SecaoVestido2() {
    return (
        <section className='secao-vestido-escuro' id='tipo-vestido2'>
            <div>
                <h1 className='titulo-vestido-escuro' >Vestido2</h1>
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

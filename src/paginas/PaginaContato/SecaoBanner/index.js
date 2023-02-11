import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO BANNER PARA A SECAO GERAL */
export default function SecaoBanner() {
    return (
        <div className="banner-contato" >
            <img className='img-contato' src="../../assets/imgSecaoContato.jpg" alt="Banner da Seção Contato" />
        </div>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Banner para a página Contato */

import './style.css';

export default function SecaoContatoBanner() {
    return (
        <div className="bannerContato" >
            <img className='imgContato' src="/assets/imgPaginaContato.jpg" alt="Banner da Página Contato" />
        </div>
    );
}
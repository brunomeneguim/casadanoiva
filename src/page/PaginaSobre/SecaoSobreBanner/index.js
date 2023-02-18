/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Banner para a página Sobre */

import './style.css';

export default function SecaoSobreBanner() {
    return (
        <section className="secaoSobreBanner">
            <img className="imgSobre" src="/assets/imgSecaoSobre.jpg" alt="Banner da Seção Sobre"/>
        </section>
    )

}
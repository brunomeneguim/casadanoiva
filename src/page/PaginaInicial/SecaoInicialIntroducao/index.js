/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Introdução para a página Inicial */

import './style.css';

export default function SecaoInicialIntroducao() {
    return (

        <section className="secaoInicialIntroducao">
            <h1 className='tituloIntroducao'>ATELIÊ CASA DA NOIVA</h1>
            <h2 className='subtituloIntroducao'>Aluguel de vestidos de noiva e acessórios</h2>
            <p className='textoIntroducao'>Escolher o vestido de noiva ideal é um dos momentos
                mais marcantes na preparação para o grande dia. Por isso a Casa da Noiva oferece
                uma experiência única na procura do seu vestido e acessórios, com atendimento
                personalizado em horário marcado, modelos incríveis e com valores de locação mais
                acessíveis. Tudo pensando em te ajudar a ser a noiva mais linda em seu casamento.
            </p>
        </section>
    );
}
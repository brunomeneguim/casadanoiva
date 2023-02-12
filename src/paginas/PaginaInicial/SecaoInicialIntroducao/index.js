/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Introdução para a página Inicial */

import './style.css';

export default function SecaoInicialIntroducao() {
    return (

        <section className="secaoInicialIntroducao">
            <h1 className='tituloIntroducao'>ATELIÊ CASA DA NOIVA</h1>
            <h2 className='subtituloIntroducao'>Aluguel de vestidos de noiva e acessórios</h2>
            <p className='textoIntroducao'>Você está vivenciando questões relacionadas a um trauma, ao sofrimento,
                ao vício, à ansiedade, grandes mudanças de vida, ou conflitos nos
                relacionamento? Chega um momento em que a ajuda de um profissional
                certificado é necessária para lidarmos com muitos dos desafios da vida.
                Sou psicóloga clínica, atendo jovens, adultos e casais, e o meu objetivo
                é ajudar meus pacientes a terem uma vida mais leve e relacionamentos saudáveis.
            </p>
        </section>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Inicial */

import SectionInitialIntroduction from './sectionInitialIntroduction/SectionInitialIntroduction';
import SectionInitialSlider from './sectionInitialSlider/SectionInitialSlider';
import SecaoInicialFrase from './SecaoInicialFrase';
import SecaoInicialSobre from './SecaoInicialSobre';
import SecaoInicialServicos from './SecaoInicialServicos';
import SecaoInicialInstagram from './SecaoInicialInstagram';
import SecaoInicialBannerPerguntas from './SecaoInicialBannerPerguntas';
import SecaoInicialPerguntas from './SecaoInicialPerguntas';
import SecaoInicialContato from './SecaoInicialContato';

export default function PageInitial() {
    return (
        <main>
            <SectionInitialIntroduction />
            <SectionInitialSlider />
            <SecaoInicialFrase />
            <SecaoInicialSobre />
            <SecaoInicialServicos />
            <SecaoInicialInstagram />
            <SecaoInicialBannerPerguntas />
            <SecaoInicialPerguntas />
            <SecaoInicialContato />
        </main>
    );
}
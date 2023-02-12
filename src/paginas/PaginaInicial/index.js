/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Inicial */

import SecaoInicialIntroducao from './SecaoInicialIntroducao';
import SecaoInicialSlider from './SecaoInicialSlider';
import SecaoInicialFrase from './SecaoInicialFrase';
import SecaoInicialSobre from './SecaoInicialSobre';
import SecaoInicialServicos from './SecaoInicialServicos';
import SecaoInicialInstagram from './SecaoInicialInstagram';
import SecaoInicialBannerPerguntas from './SecaoInicialBannerPerguntas';
import SecaoInicialPerguntas from './SecaoInicialPerguntas';
import SecaoInicialContato from './SecaoInicialContato';

export default function PaginaInicial() {
    return (
        <div>
            <SecaoInicialIntroducao/>
            <SecaoInicialSlider/>
            <SecaoInicialFrase/>
            <SecaoInicialSobre/>
            <SecaoInicialServicos/>
            <SecaoInicialInstagram/>
            <SecaoInicialBannerPerguntas/>
            <SecaoInicialPerguntas/>
            <SecaoInicialContato/>
        </div>
    );
}
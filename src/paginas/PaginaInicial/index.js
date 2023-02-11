import SecaoIntroducao from './SecaoIntroducao';
import SecaoSlider from './SecaoSlider';
import SecaoFrase from './SecaoFrase';
import SecaoSobre from './SecaoSobre';
import SecaoServicos from './SecaoServicos';
import SecaoInstagram from './SecaoInstagram';
import SecaoBannerPerguntas from './SecaoBannerPerguntas';
import SecaoPerguntas from './SecaoPerguntas';
import SecaoContato from './SecaoContato';


/* FUNÇÃO QUE EXPORTA A PÁGINA INICIAL PARA O ARQUIVO ROTAS */
export default function PaginaInicial() {
    return (
        <div>
            <SecaoIntroducao/>
            <SecaoSlider/>
            <SecaoFrase/>
            <SecaoSobre/>
            <SecaoServicos/>
            <SecaoInstagram/>
            <SecaoBannerPerguntas/>
            <SecaoPerguntas/>
            <SecaoContato/>
        </div>
    );
}
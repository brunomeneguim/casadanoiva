import SecaoIntroducao from '../SecaoGeral/SecaoIntroducao';
import SecaoSlider from '../SecaoGeral/SecaoSlider';
import SecaoFrase from '../SecaoGeral/SecaoFrase';
import SecaoSobre from '../SecaoGeral/SecaoSobre';
import SecaoServicos from '../SecaoGeral/SecaoServicos';
import SecaoInstagram from '../SecaoGeral/SecaoInstagram';
import SecaoBannerPerguntas from '../SecaoGeral/SecaoBannerPerguntas';
import SecaoPerguntas from '../SecaoGeral/SecaoPerguntas';
import SecaoContato from '../SecaoGeral/SecaoContato';

/* FUNÇÃO QUE AGRUPA TODAS AS SECOES DA TELA E EXPORTA PARA A PÁGINA SOBRE */
export default function SecaoGeral(){
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
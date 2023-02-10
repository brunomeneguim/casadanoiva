import SecaoBanner from './SecaoBanner/';
import SecaoFeedback from './SecaoFeedback';
import SecaoSobreTexto from './SecaoSobreTexto';

/* FUNÇÃO QUE REUNE AS SEÇÕES DA PÁGINA E EXPORTA PARA A PÁGINA SOBRE */
export default function SecaoGeral() {
    return (
        <div>
            <SecaoBanner />
            <SecaoSobreTexto />
            <SecaoFeedback />
        </div>
    );
}
import SecaoBanner from './SecaoBanner';
import SecaoFeedback from './SecaoFeedback';
import SecaoSobreTexto from './SecaoSobreTexto';

/* FUNÇÃO QUE EXPORTA A PÁGINA SOBRE PARA O ARQUIVO ROTAS */
export default function PaginaSobre() {
    return (
        <div>
            <SecaoBanner />
            <SecaoSobreTexto />
            <SecaoFeedback />
        </div>
    );
}
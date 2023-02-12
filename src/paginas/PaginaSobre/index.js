/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Sobre */

import SecaoSobreBanner from './SecaoSobreBanner';
import SecaoSobreFeedback from './SecaoSobreFeedback';
import SecaoSobreTexto from './SecaoSobreTexto';

export default function PaginaSobre() {
    return (
        <div>
            <SecaoSobreBanner />
            <SecaoSobreTexto />
            <SecaoSobreFeedback />
        </div>
    );
}
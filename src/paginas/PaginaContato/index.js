/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Contato */

import SecaoContatoBanner from './SecaoContatoBanner';
import SecaoContatoFormulario from './SecaoContatoFormulario';

export default function PaginaContato() {
    return (
        <div>
            <SecaoContatoBanner />
            <SecaoContatoFormulario />
        </div>
    );
}
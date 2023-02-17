/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Contato */

import SectionContactBanner from './sectionContactBanner/SectionContactBanner';
import SecaoContatoFormulario from './SecaoContatoFormulario';

export default function PaginaContato() {
    return (
        <main>
            <SectionContactBanner
                pathImgPageContact="/assets/imgPaginaContato.jpg"
                altImgPageContact="Banner da Página Contato"
            />
            <SecaoContatoFormulario />
        </main>
    );
}
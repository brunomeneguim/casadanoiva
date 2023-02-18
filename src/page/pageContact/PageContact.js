/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Contato */

import SectionContactBanner from './sectionContactBanner/SectionContactBanner';
import SectionContactForm from './sectionContactForm/SectionContactForm';

export default function PageContact() {
    return (
        <main>
            <SectionContactBanner pathImgPageContact="/assets/imgPaginaContato.jpg" altImgPageContact="Banner da Página Contato" />
            <SectionContactForm />
        </main>
    );
}
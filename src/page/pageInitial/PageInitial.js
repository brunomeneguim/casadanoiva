/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Inicial */

import SectionInitialIntroduction from './sectionInitialIntroduction/SectionInitialIntroduction';
import SectionInitialSlider from './sectionInitialSlider/SectionInitialSlider';
import SectionInitialPhrase from './sectionInitialPhrase/SectionInitialPhrase';
import SectionInitialAbout from './sectionInitialAbout/SectionInitialAbout';
import SectionInitialServices from './sectionInitialServices/SectionInitialServices';
import SectionInitialInstagram from './sectionInitialInstagram/SectionInitialInstagram';
import SectionInitialQuestion from './sectionInitialQuestion/SectionInitialQuestion';
import SectionInitialContact from './sectionInitialContact/SectionInitialContact';


export default function PageInitial() {
    return (
        <main>
            <SectionInitialIntroduction />
            <SectionInitialSlider />
            <SectionInitialPhrase />
            <SectionInitialAbout />
            <SectionInitialServices />
            <SectionInitialInstagram />
            <SectionInitialQuestion />
            <SectionInitialContact />
        </main>
    );
}
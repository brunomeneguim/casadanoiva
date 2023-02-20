/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Vestidos */

import SectionDressesMenu from "./sectionDressesMenu/SectionDressesMenu";
import SectionFirstDress from "./sectionFirstDress/SectionFirstDress";
import SectionSecondDress from "./sectionSecondDress/SectionSecondDress";
import SectionThirdDress from "./sectionThirdDress/SectionThirdDress";
import SectionFourthDress from "./sectionFourthDress/SectionFourthDress";
import SectionFifthDress from "./sectionFifthDress/SectionFifthDress";
import SectionSixthDress from "./sectionSixthDress/SectionSixthDress";


export default function PageDresses() {
    return (
        <main>
            <SectionDressesMenu />
            <SectionFirstDress />
            <SectionSecondDress />
            <SectionThirdDress />
            <SectionFourthDress />
            <SectionFifthDress />
            <SectionSixthDress />
        </main>
    );
}
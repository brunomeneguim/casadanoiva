/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Serviços */

import SectionServicesTitle from "./sectionServicesTitle/SectionServicesTitle";
import SectionServicesAccessories from "./sectionServicesAccessories/SectionServicesAccessories";
import SectionServiceVeils from "./sectionServiceVeils/SectionServiceVeils";
import SectionServicesOthers from "./sectionServicesOthers/SectionServicesOthers";

export default function PageServices() {
    return (
        <main>
            <SectionServicesTitle />
            <SectionServicesAccessories />
            <SectionServiceVeils />
            <SectionServicesOthers />
        </main>
    );
}
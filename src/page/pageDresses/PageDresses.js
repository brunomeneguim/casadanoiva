/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Vestidos */

import SectionDressesMenu from "./sectionDressesMenu/SectionDressesMenu";
import SectionFirstDress from "./sectionFirstDress/SectionFirstDress";
import SectionSecondDress from "./sectionSecondDress/SectionSecondDress";
import SectionThirdDress from "./sectionThirdDress/SectionThirdDress";
import SecaoVestidosQuarto from "./SecaoVestidosQuarto";
import SecaoVestidosQuinto from "./SecaoVestidosQuinto";
import SecaoVestidosSexto from "./SecaoVestidosSexto";


export default function PageDresses() {
    return (
        <main>
            <SectionDressesMenu />
            <SectionFirstDress />
            <SectionSecondDress />
            <SectionThirdDress />
            <SecaoVestidosQuarto />
            <SecaoVestidosQuinto />
            <SecaoVestidosSexto />
        </main>
    );
}
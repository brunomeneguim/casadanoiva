/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Vestidos */

import SecaoVestidosMenu from "./SecaoVestidosMenu";
import SecaoVestidosPrimeiro from "./SecaoVestidosPrimeiro";
import SecaoVestidosSegundo from "./SecaoVestidosSegundo";
import SecaoVestidosTerceiro from "./SecaoVestidosTerceiro";
import SecaoVestidosQuarto from "./SecaoVestidosQuarto";
import SecaoVestidosQuinto from "./SecaoVestidosQuinto";

export default function PaginaVestidos() {
    return (
        <div>
            <SecaoVestidosMenu />
            <SecaoVestidosPrimeiro />
            <SecaoVestidosSegundo />
            <SecaoVestidosTerceiro />
            <SecaoVestidosQuarto />
            <SecaoVestidosQuinto />
        </div>
    );
}
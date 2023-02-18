/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta as seções para a página Serviços */

import SecaoServicosAcessorios from "./SecaoServicosAcessorios";
import SecaoServicosVeus from "./SecaoServicosVeus";
import SecaoServicosOutros from "./SecaoServicosOutros";
import SecaoServicosTitulo from "./SecaoServicosTitulo";

export default function PaginaServicos() {
    return (
        <main>
            <SecaoServicosTitulo />
            <SecaoServicosAcessorios />
            <SecaoServicosVeus />
            <SecaoServicosOutros />
        </main>
    );
}
import SecaoPrimeiroServico from "./SecaoPrimeiroServico";
import SecaoSegundoServico from "./SecaoSegundoServico";
import SecaoOutros from "./SecaoOutros";
import SecaoTitulo from "./SecaoTitulo";

/* FUNÇÃO QUE EXPORTA A PÁGINA SERVICOS PARA O ARQUIVO ROTAS */
export default function PaginaServicos() {
    return (
        <div>
            <SecaoTitulo />
            <SecaoPrimeiroServico />
            <SecaoSegundoServico />
            <SecaoOutros />
        </div>
    );
}
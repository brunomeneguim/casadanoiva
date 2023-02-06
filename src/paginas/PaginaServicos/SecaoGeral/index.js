import SecaoPrimeiroServico from "./SecaoPrimeiroServico";
import SecaoSegundoServico from "./SecaoSegundoServico";
import SecaoOutros from "./SecaoOutros";
import SecaoTitulo from "./SecaoTitulo";

/* FUNÇÃO QUE REUNE AS SEÇÕES DA PÁGINA E EXPORTA PARA A PÁGINA SERVICOS */
export default function SecaoGeral() {
    return (
        <div>
            <SecaoTitulo />
            <SecaoPrimeiroServico />
            <SecaoSegundoServico />
            <SecaoOutros />
        </div>
    );
}
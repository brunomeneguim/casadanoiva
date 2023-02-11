import SecaoMenu from "./SecaoMenu";
import SecaoPrimeiroVestido from "./SecaoPrimeiroVestido";
import SecaoSegundoVestido from "./SecaoSegundoVestido";
import SecaoTerceiroVestido from "./SecaoTerceiroVestido";
import SecaoQuartoVestido from "./SecaoQuartoVestido";
import SecaoQuintoVestido from "./SecaoQuintoVestido";


/* FUNÇÃO QUE EXPORTA A PÁGINA VESTIDOS PARA O ARQUIVO ROTAS */
export default function PaginaVestidos() {
    return (
        <div>
            <SecaoMenu />
            <SecaoPrimeiroVestido />
            <SecaoSegundoVestido />
            <SecaoTerceiroVestido />
            <SecaoQuartoVestido />
            <SecaoQuintoVestido />
        </div>
    );
}
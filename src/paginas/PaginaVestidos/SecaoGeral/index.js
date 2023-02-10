import SecaoMenu from "./SecaoMenu";
import SecaoPrimeiroVestido from "./SecaoPrimeiroVestido";
import SecaoSegundoVestido from "./SecaoSegundoVestido";
import SecaoTerceiroVestido from "./SecaoTerceiroVestido";
import SecaoQuartoVestido from "./SecaoQuartoVestido";
import SecaoQuintoVestido from "./SecaoQuintoVestido";



/* FUNÇÃO QUE REUNE AS SEÇÕES DA PÁGINA E EXPORTA PARA A PÁGINA VESTIDOS */
export default function SecaoGeral() {
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
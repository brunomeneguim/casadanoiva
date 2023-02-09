import SecaoMenu from "./SecaoMenu";
import SecaoVestido1 from "./SecaoVestido1";
import SecaoVestido2 from "./SecaoVestido2";
import SecaoVestido3 from "./SecaoVestido3";
import SecaoVestido4 from "./SecaoVestido4";
import SecaoVestido5 from "./SecaoVestido5";



/* FUNÇÃO QUE REUNE AS SEÇÕES DA PÁGINA E EXPORTA PARA A PÁGINA VESTIDOS */
export default function SecaoGeral() {
    return (
        <div>
            <SecaoMenu />
            <SecaoVestido1 />
            <SecaoVestido2 />
            <SecaoVestido3 />
            <SecaoVestido4 />
            <SecaoVestido5 />
        </div>
    );
}
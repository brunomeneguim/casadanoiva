import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import BotaoWhatsApp from '../../componentes/botaoWhatsApp';
import SecaoGeral from '../PaginaVestidos/SecaoGeral';



/* FUNÇÃO QUE EXPORTA A PÁGINA VESTIDOS PARA O ARQUIVO ROTAS */
export default function PaginaVestidos() {
    return (
        <div>
            <BotaoWhatsApp />
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
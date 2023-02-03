import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import BotaoWhatsApp from '../../componentes/botaoWhatsApp';
import SecaoGeral from './SecaoGeral';

/* FUNÇÃO QUE EXPORTA A PÁGINA SOBRE PARA O ARQUIVO ROTAS */
export default function PaginaSobre() {
    return (
        <div>
            <BotaoWhatsApp />
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
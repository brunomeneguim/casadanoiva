import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import BotaoWhatsApp from '../../componentes/botaoWhatsApp';
import SecaoGeral from '../PaginaContato/SecaoGeral';

/* FUNÇÃO QUE EXPORTA A PÁGINA CONTATO PARA O ARQUIVO ROTAS */
export default function PaginaContato() {
    return (
        <div>
            <BotaoWhatsApp />
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
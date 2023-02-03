import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import BotaoWhatsApp from '../../componentes/botaoWhatsApp';
import SecaoGeral from '../PaginaInicial/SecaoGeral';

/* FUNÇÃO QUE EXPORTA A PÁGINA INICIAL PARA O ARQUIVO ROTAS */
export default function PaginaInicial() {
    return (
        <div>      
            <BotaoWhatsApp/>      
            <Cabecalho />
            <SecaoGeral/>
            <Rodape />
        </div>
    );
}
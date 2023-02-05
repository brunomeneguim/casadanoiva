import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import SecaoGeral from '../PaginaContato/SecaoGeral';

/* FUNÇÃO QUE EXPORTA A PÁGINA CONTATO PARA O ARQUIVO ROTAS */
export default function PaginaContato() {
    return (
        <div>
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
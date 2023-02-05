import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import SecaoGeral from './SecaoGeral';

/* FUNÇÃO QUE EXPORTA A PÁGINA SOBRE PARA O ARQUIVO ROTAS */
export default function PaginaSobre() {
    return (
        <div>
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
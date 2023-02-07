import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import SecaoGeral from '../PaginaVestidos/SecaoGeral';


/* FUNÇÃO QUE EXPORTA A PÁGINA VESTIDOS PARA O ARQUIVO ROTAS */
export default function PaginaVestidos() {
    return (
        <div>
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
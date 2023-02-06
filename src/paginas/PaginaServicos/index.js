import Cabecalho from '../../componentes/cabecalho/';
import Rodape from '../../componentes/rodape';
import SecaoGeral from './SecaoGeral/';

/* FUNÇÃO QUE EXPORTA A PÁGINA SERVICOS PARA O ARQUIVO ROTAS */
export default function PaginaServicos() {
    return (
        <div>
            <Cabecalho />
            <SecaoGeral />
            <Rodape />
        </div>
    );
}
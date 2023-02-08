import SecaoBanner from '../SecaoGeral/SecaoBanner';
import SecaoFormularioContato from './SecaoFormularioContato';

/* FUNÇÃO QUE REUNE AS SEÇÕES DA PÁGINA E EXPORTA PARA A PÁGINA CONTATO */
export default function SecaoGeral() {
    return (
        <div>
            <SecaoBanner />
            <SecaoFormularioContato />
        </div>
    );
}
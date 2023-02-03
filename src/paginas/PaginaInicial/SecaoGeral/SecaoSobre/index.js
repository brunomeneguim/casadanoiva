import { Link } from 'react-router-dom';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO SOBRE PARA A SECAO GERAL */
export default function SecaoSobre() {
    return (

        <section className="secao-sobre">

            <Link className="link-sobre" to='/sobre'>Tudo sobre a Casa da Noiva</Link>
            
            <h2>Orientando você no caminho certo</h2>

            <p>Implemento métodos eficazes de psicoterapia para incentivar a
                autocompreensão dos pacientes e incentivá-los a adotar novas atitudes
                e sentimentos em relação a sua vida. É essencial ter em mente que
                a terapia não é um remédio mágico ou uma solução rápida. Terapia é
                um processo de cicatrização que requer participação e investimento -
                tanto do paciente como do profissional. Basicamente, fazer pequenas
                mudanças no comportamento autodestrutivo e lidar com sentimentos de
                tristeza, medo e dor podem trazer resultados que alteram a qualidade de vida.
            </p>

        </section>

    );
}
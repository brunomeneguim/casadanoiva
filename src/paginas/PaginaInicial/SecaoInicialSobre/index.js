/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Sobre para a página Inicial */

import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoInicialSobre() {
    return (

        <section className="secaoInicialSobre">

            <Link className="linkInicialSobre" to="/sobre">Tudo sobre a Casa da Noiva</Link>

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
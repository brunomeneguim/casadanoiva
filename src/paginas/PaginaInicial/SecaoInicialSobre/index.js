/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Sobre para a página Inicial */

import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoInicialSobre() {
    return (

        <section className="secaoInicialSobre">

            <Link className="linkInicialSobre" to="/sobre">Tudo sobre a Casa da Noiva</Link>

            <h2>SEU VESTIDO DOS SONHOS COM VALOR ACESSÍVEL</h2>

            <p>O ateliê Casa da Noiva se iniciou com um sonho de ajudar as noivas a encontrarem
                o seu vestido ideal sem pagar caro por isso. Nossos vestidos além de terem um preço
                atrativo, são modernos, de qualidade, e nossa equipe também te acompanha na escolha
                do véu e grinalda que complementam o seu look de noiva. Também trabalhamos com encomenda
                de vestidos de primeira locação, caso prefira. Pensamos em cada detalhe para tornar o
                seu grande dia mais lindo e leve.
            </p>

        </section>

    );
}
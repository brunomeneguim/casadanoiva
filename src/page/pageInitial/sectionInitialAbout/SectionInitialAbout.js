/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Sobre para a página Inicial */

import LinkInitialAbout from './linkInitialAbout/LinkInitialAbout';
import TextInitialAbout from './textInitialAbout/TextInitialAbout'

import styles from './SectionInitialAbout.module.css';

export default function SectionInitialAbout() {
    return (

        <section className={styles.sectionInitialAbout}>

            <LinkInitialAbout pathAbout="/about" titleAbout="Tudo sobre a Casa da Noiva" />
            <TextInitialAbout
                subtitleAbout="SEU VESTIDO DOS SONHOS COM VALOR ACESSÍVEL"
                textAbout="O ateliê Casa da Noiva se iniciou com um sonho de ajudar as noivas a encontrarem
                o seu vestido ideal sem pagar caro por isso. Nossos vestidos além de terem um preço
                atrativo, são modernos, de qualidade, e nossa equipe também te acompanha na escolha
                do véu e grinalda que complementam o seu look de noiva. Também trabalhamos com encomenda
                de vestidos de primeira locação, caso prefira. Pensamos em cada detalhe para tornar o
                seu grande dia mais lindo e leve." />
        </section>
    );
}
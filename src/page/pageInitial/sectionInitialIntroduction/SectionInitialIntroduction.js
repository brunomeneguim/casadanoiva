/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Introdução para a página Inicial */

import TextIntro from './textInitialIntro/TextInitialIntro';

import styles from './SectionInitialIntroduction.module.css';


export default function SectionInitialIntroduction() {
    return (

        <section className={styles.secaoInicialIntroducao}>
            <TextIntro
                titleIntro="ATELIÊ CASA DA NOIVA"
                subtitleIntro="Aluguel de vestidos de noiva e acessórios"
                textIntro="Escolher o vestido de noiva ideal é um dos momentos
                mais marcantes na preparação para o grande dia. Por isso a Casa da Noiva oferece
                uma experiência única na procura do seu vestido e acessórios, com atendimento
                personalizado em horário marcado, modelos incríveis e com valores de locação mais
                acessíveis. Tudo pensando em te ajudar a ser a noiva mais linda em seu casamento."
            />
        </section>
    );
}
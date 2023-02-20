/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta os paragráfos para a página Sobre */

import TitleAbout from './titleAbout/TitleAbout';
import TextAbout from './textAbout/TextAbout';

import styles from './SectionAboutText.module.css';

export default function SectionAboutText() {
    return (
        <>
            <section className={styles.sectionAboutText}>
                <TitleAbout titleAbout="Nossa História" subtitleAbout="Um sonho que nasceu de uma noiva" />

                <TextAbout
                    paragraph1="A Casa da Noiva iniciou em 2020 pela fundadora Anne Wendler, junto com sua sogra Vera Marcondes, trazendo
                        para a cidade de Guarapuava uma ideia inovadora em locação de vestidos de noiva para aquelas que não
                        queriam gastar valores exorbitantes, e ainda casarem com o seu vestido dos sonhos."

                    paragraph2="Logo que abrimos, veio a pandemia e tivemos que fechar o ateliê por quase 1 ano, pois os eventos e casamentos
                        não estavam sendo autorizados. Foi um momento muito difícil para nossa empresa, mas nunca desistimos do nosso
                        ateliê. Hoje ele fica localizado no centro da cidade, no mesmo local de residência da fundadora, com um ar
                        simples e aconchegante de casa para as noivas. Por isso o nome – Casa da Noiva."

                    paragraph3="Aos poucos fomos crescendo, e com muitos feedbacks positivos das nossas noivinhas e fornecedores no setor de casamentos,
                        nosso sonho se ampliou e hoje temos mais de 60 modelos de vestidos de noiva para locação. E esperamos continuar crescendo."

                    paragraph4="Nós se importamos com cada detalhe do vestido e do dia da noiva, por isso nosso atendimento é todo personalizado,
                        constituído por várias provas de vestido antes do grande dia para deixar a nossa noiva confiante e segura do vestido
                        escolhido. No dia do casamento também entregamos o vestido e acessórios em capas cheirosas e caixas personalizadas,
                        com muito amor e carinho por fazer parte da realização de um sonho."

                    paragraph5="Esperamos por você para conhecer o nosso Ateliê, na Casa da Noiva."
                />
            </section>
        </>
    );
}
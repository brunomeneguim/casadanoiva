/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Frase para a página Inicial */

import TextInitialPhrase from './textInitialPhrase/TextInitialPhrase';

import styles from './SectionInitialPhrase.module.css';


export default function SectionInitialPhrase() {
    return (
        <section className={styles.sectionInitialPhrase}>
            <TextInitialPhrase
                titlePhrase="Há mais de 3 anos realizando sonhos"
                textPhrase="Atendimento apenas com hora marcada!"
            />
        </section>
    );
}
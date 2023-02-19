/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Instragram para a página Inicial */
import LightWidget from './lightWidget/LightWidget';
import LinkInitialInstagram from './linkInitialInstagram/LinkInitialInstagram';

import styles from './SectionInitialInstagram.module.css';

export default function SectionInitialInstagram() {
    return (

        /* Secao do Instagram */
        <section className={styles.sectionInitialInstagram}>
            <LinkInitialInstagram pathLink="https://www.instagram.com/casadanoiva.gpuava" targetLink="_blank" textLink="Redes Sociais" />
            <LightWidget />
            {/* Script do site Light Widget */}
            {/* <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe className="lightwidget-widget"
                src="https://cdn.lightwidget.com/widgets/deb224217e0351188bd81a5a81a8c92e.html"
                title='Instagram Frame'
                scrolling="no"
                allowtransparency="true"
            ></iframe> */}
        </section>
    );
}



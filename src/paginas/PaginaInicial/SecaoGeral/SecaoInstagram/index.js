import { Link } from 'react-router-dom';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO INSTAGRAM PARA A SECAO GERAL */
export default function SecaoInstagram() {
    return (

        /* INICIO SECAO INSTAGRAM */
        <section className="secao-instagram">

            <Link className='link-instagram' to='https://www.instagram.com/casadanoiva.gpuava'>Redes Sociais</Link>
            {/* <h1>Redes Sociais</h1> */}

            {/* INICIO DO SCRIPT GERADO PELO SITE LIGHTWIDGET */}
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe src="//lightwidget.com/widgets/deb224217e0351188bd81a5a81a8c92e.html"
                scrolling='no'
                title="Feed do Instagram"
                allowtransparency="true"
                class="lightwidget-widget">
            </iframe>
            {/* FIM DO SCRIPT */}

        </section>
        /* FIM SECAO INSTAGRAM */
    );
}




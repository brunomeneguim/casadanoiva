/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Instragram para a página Inicial */

import { Link } from 'react-router-dom';
import './style.css';

export default function SecaoInicialInstagram() {
    return (
        
        /* Secao do Instagram */
        <section className="secaoInstagram">
            <Link className='linkInstagram' to='https://www.instagram.com/casadanoiva.gpuava' target="_blank">Redes Sociais</Link>

            {/* Script do site Light Widget */}
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe src="https://cdn.lightwidget.com/widgets/deb224217e0351188bd81a5a81a8c92e.html" 
            title='Instagram Frame'
            scrolling="no" 
            allowtransparency="true" 
            className="lightwidget-widget"></iframe>
        </section>
    );
}




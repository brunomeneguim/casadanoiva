import { Link } from 'react-router-dom';
import './style.css';

/* FUNÇÃO QUE EXPORTA A SECAO INSTAGRAM PARA A SECAO GERAL */
export default function SecaoInstagram() {
    return (
        <section className="secao-instagram">
            <Link className='link-instagram' to='https://www.instagram.com/casadanoiva.gpuava' target="_blank">Redes Sociais</Link>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe src="https://cdn.lightwidget.com/widgets/deb224217e0351188bd81a5a81a8c92e.html" 
            title='Instagram'
            scrolling="no" 
            allowtransparency="true" 
            className="lightwidget-widget"></iframe>
        </section>
    );
}




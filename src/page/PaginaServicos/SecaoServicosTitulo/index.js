/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Título e Subtitulo para a página Serviços */

import './style.css';

export default function SecaoServicosTitulo() {
    return (
        <section className='secaoServicosTitulo' id='servicos'>
            <h1 className='tituloServicos'>NOSSOS SERVIÇOS</h1>
            <h2 className='subtituloServicos'>Locação de véus, acessórios, anáguas, serviço completo de ajustes e lavanderia</h2>
        </section>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Título e Subtitulo para a página Serviços */

import './style.css';

export default function SecaoServicosTitulo() {
    return (
        <section className='secaoServicosTitulo' id='servicos'>
            <h1 className='tituloServicos'>NOSSOS SERVIÇOS</h1>
            <h2 className='subtituloServicos'>Locação de Véus, Acessórios, Anáguas, Serviço completo de Ajustes e Lavanderia</h2>
        </section>
    );
}
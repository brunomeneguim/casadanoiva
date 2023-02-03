import './style.css';

/* FUNÇÃO QUE EXPORTA O BOTÃO DO WHATSAPP PARA AS PÁGINAS DO SITE */
export default function BotaoWhatsApp() {
    return (
        /* BOTÃO QUE DEIXA O ÍCONE DO WHATSAPP FIXADO NO RODAPÉ DA PÁGINA */
        <section className="botao-whatsapp">
            
            <a className='link-whatsapp'
                href="https://wa.me/5542999901300"
                target="_blank"
                rel="noreferrer">

                <img className='img-whatsapp' alt="Ícone WhatsApp"
                    src="./assets/iconeWhatsApp.png" />

            </a>
            
        </section>
    );
}
/* Desenvolvido por - Bruno Marcondes */
/* Rodapé da página que está presente em todas as páginas */

import './style.css';

export default function Rodape() {
    return (
        <footer className="containerRodape">
            <p className='textoRodape'>© 2023 Casa da Noiva. Todos os Direitos Reservados</p>
            <p className='textoRodape'> Desenvolvido por Bruno Marcondes</p>
        </footer>
    );
}
import "./style.css";
import { Link } from "react-router-dom";

/* FUNÇÃO QUE EXPORTA A PAGINA DE ERRO CASO O USUARIO DIGITE UM ENDEREÇO ERRADO*/
export default function PaginaErro() {
    return (
        <section className="secaoError">
            <Link className="linkError" to="/">
                <p className="textoError">Página não encontrada</p>
                <p className="textoError">Retorne à Página Inicial</p>
                <img className="imgError" src="/assets/imgErro404.jpg" alt="Imagem Logo" />
            </Link>
        </section>
    )
}
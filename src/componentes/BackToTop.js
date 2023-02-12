/* Desenvolvido por - Bruno Marcondes */
/* Função que ao trocar de página o usuário sempre vai para o topo da mesma */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BackToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

}
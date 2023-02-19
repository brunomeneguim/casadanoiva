/* Desenvolvido por - Bruno Marcondes */
/* Função que define as rotas das páginas */

import React from "react";
import { Routes, Route } from 'react-router-dom';

import PageInitial from './page/pageInitial/PageInitial'
import PaginaVestidos from './page/PaginaVestidos';
import PageServices from './page/pageServices/PageServices';
import PaginaSobre from './page/PaginaSobre';
import PageContact from './page/pageContact/PageContact';
import ErrorPage from './components/errorPage/ErrorPage';

export default function MainRoute() {
    return (
        <Routes>
            <Route path='/' element={<PageInitial />}></Route>
            <Route path="/dresses" element={<PaginaVestidos />}></Route>
            <Route path="/services" element={<PageServices />}></Route>
            <Route path="/about" element={<PaginaSobre />}></Route>
            <Route path="/contact" element={<PageContact />}></Route>
            {/* Página de Erro */}
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}
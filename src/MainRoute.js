/* Desenvolvido por - Bruno Marcondes */
/* Função que define as rotas das páginas */

import React from "react";
import { Routes, Route } from 'react-router-dom';

import PageInitial from './page/pageInitial/PageInitial'
import PageDresses from './page/pageDresses/PageDresses';
import PageServices from './page/pageServices/PageServices';
import PageAbout from './page/pageAbout/PageAbout';
import PageContact from './page/pageContact/PageContact';
import ErrorPage from './components/errorPage/ErrorPage';

export default function MainRoute() {
    return (
        <Routes>
            <Route path='/' element={<PageInitial />}></Route>
            <Route path="/dresses" element={<PageDresses />}></Route>
            <Route path="/services" element={<PageServices />}></Route>
            <Route path="/about" element={<PageAbout />}></Route>
            <Route path="/contact" element={<PageContact />}></Route>
            {/* Página de Erro */}
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}
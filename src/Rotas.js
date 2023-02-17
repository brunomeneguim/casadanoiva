/* Desenvolvido por - Bruno Marcondes */
/* Função que define as rotas das páginas */

import React from "react";
import { Routes, Route } from 'react-router-dom';

import PaginaInicial from './paginas/PaginaInicial'
import PaginaVestidos from './paginas/PaginaVestidos';
import PaginaServicos from './paginas/PaginaServicos';
import PaginaSobre from './paginas/PaginaSobre';
import PaginaContato from './paginas/PaginaContato/';
import ErrorPage from './components/errorPage/ErrorPage';

export default function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<PaginaInicial />}></Route>
            <Route path="/vestidos" element={<PaginaVestidos />}></Route>
            <Route path="/servicos" element={<PaginaServicos />}></Route>
            <Route path="/sobre" element={<PaginaSobre />}></Route>
            <Route path="/contato" element={<PaginaContato />}></Route>
            {/* Página de Erro */}
            <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    );
}
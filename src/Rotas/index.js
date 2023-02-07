import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial'
import PaginaVestidos from '../paginas/PaginaVestidos';
import PaginaServicos from '../paginas/PaginaServicos';
import PaginaSobre from '../paginas/PaginaSobre';
import PaginaContato from '../paginas/PaginaContato/';
import Erro404 from '../componentes/erro404';

/* FUNÇÃO QUE EXPORTA A FUNÇÃO ROTAS PARA O APP QUE EXECUTA O SITE */
const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaInicial />}></Route>
            <Route path="/vestidos" element={<PaginaVestidos />}></Route>
            <Route path="/servicos"   element={<PaginaServicos />}></Route>
            <Route path="/sobre" element={<PaginaSobre />}></Route>
            <Route path="/contato" element={<PaginaContato />}></Route>
            {/* Página de Erro */}
            <Route path="*" element={<Erro404 />}></Route>
        </Routes>
    </BrowserRouter>
);

export default Rotas;


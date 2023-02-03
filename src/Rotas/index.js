import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial'
import PaginaVestidos from '../paginas/PaginaVestidos';
import PaginaServicos from '../paginas/PaginaServicos';
import PaginaSobre from '../paginas/PaginaSobre';
import PaginaContato from '../paginas/PaginaContato/';

/* FUNÇÃO QUE EXPORTA A FUNÇÃO ROTAS PARA O APP QUE EXECUTA O SITE */
const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial />}></Route>
            <Route path="/vestidos" element={<PaginaVestidos />}></Route>
            <Route path="/servicos" element={<PaginaServicos />}></Route>
            <Route path="/sobre" element={<PaginaSobre />}></Route>
            <Route path="/contato" element={<PaginaContato />}></Route>
        </Routes>
    </BrowserRouter>
);

export default Rotas;
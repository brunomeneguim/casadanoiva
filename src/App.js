import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaginaInicial from './paginas/PaginaInicial'
import PaginaVestidos from './paginas/PaginaVestidos';
import PaginaServicos from './paginas/PaginaServicos';
import PaginaSobre from './paginas/PaginaSobre';
import PaginaContato from './paginas/PaginaContato/';
import Erro404 from './componentes/erro404';

import './App.css'


export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PaginaInicial />}></Route>
          <Route path="/vestidos" element={<PaginaVestidos />}></Route>
          <Route path="/servicos" element={<PaginaServicos />}></Route>
          <Route path="/sobre" element={<PaginaSobre />}></Route>
          <Route path="/contato" element={<PaginaContato />}></Route>
          {/* Página de Erro */}
          <Route path="*" element={<Erro404 />}></Route>
        </Routes>
      </Router>
    </div>

  );
}






// import Rotas from './Rotas'
// import React from 'react';


// function App() {
//   return (
//     <main className="App">
//       <Rotas />
//     </main>
//   );
// }

// export default App;







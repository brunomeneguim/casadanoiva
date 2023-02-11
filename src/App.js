/* Desenvolvido por - Bruno Marcondes */
/* Importação de "Rotas", onde estão todos os caminhos para as páginas do projeto */
/* Cabecaolho e Rodapé vão estar presentes em todas as telas */

import { BrowserRouter as Router } from 'react-router-dom';

import Cabecalho from './componentes/Cabecalho';
import Rotas from './Rotas';
import Rodape from './componentes/Rodape';

export default function App() {
  return (

    <div className="App">
      <Router>
        <Cabecalho />
        <Rotas />
        <Rodape />
      </Router>
    </div>
  );
}
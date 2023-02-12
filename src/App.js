/* Desenvolvido por - Bruno Marcondes */
/* Importação de "Rotas", onde estão todos os caminhos para as páginas do projeto */
/* Cabecaolho e Rodapé vão estar presentes em todas as telas */

import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as MySVG } from "./componentes/iconeSetaParaCima.svg";
import ScrollToTop from "react-scroll-to-top";

/* Desenvolvido por - Bruno Marcondes */
/* Documento que define as rotas da página */

import Cabecalho from './componentes/Cabecalho';
import Rotas from './Rotas';
import Rodape from './componentes/Rodape';
import BackToTop from './componentes/BackToTop';
import WhatsApp from './componentes/WhatsApp';

export default function App() {
  return (

    <div className="App">
      <Router>

        {/* Função que cria botão quando o usuário desce a página e volta para o topo com a função propriedade Smooth */}
        <ScrollToTop 
        className='scrollUp'
        id='scrollUp'
        smooth         
        component={<MySVG />} />

        {/* Função que importa o botão do WhatsApp */}
        <WhatsApp />

        {/* Função que quando o usuário troca de página, inicia sempre no topo da página */}
        <BackToTop />

        <Cabecalho />
        <Rotas />
        <Rodape />
      </Router>
    </div>
  );
}
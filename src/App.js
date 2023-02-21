/* Desenvolvido por - Bruno Marcondes */
/* Importação de "Rotas", onde estão todos os caminhos para as páginas do projeto */
/* Cabecaolho e Rodapé vão estar presentes em todas as telas */

import { BrowserRouter as Router } from 'react-router-dom';
import { ReactComponent as MySVG } from "./components/iconArrowUp.svg";
import ScrollToTop from "react-scroll-to-top";

/* Desenvolvido por - Bruno Marcondes */
/* Documento que define as rotas da página */

import MainRoute from './MainRoute';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BackToTop from './components/BackToTop';
import WhatsApp from './components/whatsApp/WhatsApp';


export default function App() {
  return (
    <div className="App">
      <Router>

        {/* Função que cria botão quando o usuário desce a página e volta para o topo com a função propriedade Smooth */}
        <ScrollToTop
          id='scrollUp'
          smooth
          component={<MySVG />} />


        {/* Função que importa o botão do WhatsApp */}
        <WhatsApp />

        {/* Função que quando o usuário troca de página, inicia sempre no topo da página */}
        <BackToTop />
        <Header />
        <MainRoute />
        <Footer />
      </Router>
    </div>
  );
}
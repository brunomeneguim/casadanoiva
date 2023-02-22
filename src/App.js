/* Desenvolvido por - Bruno Marcondes */
/* Importação de "Rotas", onde estão todos os caminhos para as páginas do projeto */
/* Cabecaolho e Rodapé vão estar presentes em todas as telas */
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactComponent as MySVG } from "./components/iconArrowUp.svg";
import ScrollToTop from "react-scroll-to-top";

import Header from "./components/header/Header";
// import MainRoute from "./MainRoute";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/BackToTop";
import WhatsApp from "./components/whatsApp/WhatsApp";

const MainRoute = lazy(() => import("./MainRoute"));

export default function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop
          id="scrollUp"
          className="scrollUp"
          smooth
          component={<MySVG />}
        />
        <WhatsApp />
        <BackToTop />
        <Suspense fallback={<div>Carregando</div>}>
          <Header />
          <MainRoute />
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

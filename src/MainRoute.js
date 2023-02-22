/* Desenvolvido por - Bruno Marcondes */
/* Função que define as rotas das páginas */

import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PageInitial = lazy(() => import("./page/pageInitial/PageInitial"));
const PageDresses = lazy(() => import("./page/pageDresses/PageDresses"));
const PageServices = lazy(() => import("./page/pageServices/PageServices"));
const PageAbout = lazy(() => import("./page/pageAbout/PageAbout"));
const PageContact = lazy(() => import("./page/pageContact/PageContact"));
const ErrorPage = lazy(() => import("./components/errorPage/ErrorPage"));

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<PageInitial />}></Route>
      <Route path="/dresses" element={<PageDresses />}></Route>
      <Route path="/services" element={<PageServices />}></Route>
      <Route path="/about" element={<PageAbout />}></Route>
      <Route path="/contact" element={<PageContact />}></Route>
      {/* Página de Erro */}
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

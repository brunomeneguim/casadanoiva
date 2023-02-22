/* Desenvolvido por - Bruno Marcondes */
/* Função que define as rotas das páginas */

import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PageInitial = lazy(() => {
  return import("./page/pageInitial/PageInitial");
});
const PageDresses = lazy(() => {
  return import("./page/pageDresses/PageDresses");
});
const PageServices = lazy(() => {
  return import("./page/pageServices/PageServices");
});
const PageAbout = lazy(() => {
  return import("./page/pageAbout/PageAbout");
});
const PageContact = lazy(() => {
  return import("./page/pageContact/PageContact");
});
const ErrorPage = lazy(() => {
  return import("./components/errorPage/ErrorPage");
});

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

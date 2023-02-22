/* Desenvolvido por - Bruno Marcondes */
/* Página de ERro caso o usuário digite uma URL que não pertence ao site */

import ImgError from "./imgError/ImgError";
import TextError from "./textError/TextError";

export default function ErrorPage() {
  return (
    <>
      <TextError
        pathErrorPage="/"
        textErrorNotFound="Página não encontrada"
        textErrorReturn="Retorne à Página Inicial"
      />
      <ImgError
        pathImgError="/assets/img/imgErro404.jpg"
        altImgError="Imagem Logo"
      />
    </>
  );
}

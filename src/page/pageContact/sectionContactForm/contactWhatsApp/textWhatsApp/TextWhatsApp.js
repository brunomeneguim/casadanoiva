/* Desenvolvido por - Bruno Marcondes */

import ImgContactWhatsApp from "../imgContactWhatsApp/ImgContactWhatsApp";

import styles from "./TextWhatsApp.module.css";

export default function TextWhatsApp({
  textWP,
  linkWP,
  targetWP,
  relWP,
  hrefWP,
}) {
  return (
    <>
      <p className={styles.txtContactWhatsApp}>{textWP}</p>
      <a
        className={styles.linkContactWhatsApp}
        target={targetWP}
        rel={relWP}
        href={hrefWP}
      >
        {linkWP}
        <ImgContactWhatsApp
          pathImgWP="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAB+ElEQVRIib2WP2tVQRDFf5M8tcgTtElhAiGkUFERRJC0FikMaYSUthb5DmkStLWPfgDzBDFgYaVYSUBBiGIgoEhs1M6EFInJkfXtC+MV7p1r7nOa3Tt7Zs6evbN/KDNJg5KmJA2XArvY4YwdrMKWJVlU1z4EsOsZu1CGG6jIcza35wLzC2FbboangDngAnAsuyfdeCdA+jvGYfeAd8ADM/t+iJB0SdKm+mffEkfiMklJ5WvgclDBv9pb4GpSN+l0PZbU9svYG6gicTk6zteW9MSNXUtFc8bFLZvZtvvu9bcCqrYKLTnXQ4cZbRUq9aCQZBH4CTwNEN4CpoG7Bf++6w+0KDEz+wTcDpAl7AqwUoUrEnYCv+tIVrXxG7eiwlfAl4ZJRv0BUiS8Z2aPmmSTNOsJ//uSHolQ0pikO5KuRGNKt0UF2QjwEhgDbgLnI3FhhVnNrKQTkk4DzzJZsjfRPHUUvgDGgefAceBi9q9GD4e6hD9ye935NoAZM9uJJqlTNDPAR/edLtTpPy7WJgnNbDOrWwe+AjfMbKMOGXWr1Mw+p2pMLzMz2w+E/GVJ4a5ztiNBNclOuv5uUvjeOeYlWfDCjZLN5366hta6PWm5jw+oni0dTiO/Pe5LOugDUcq5JGkocaXl88QTeUOnjd2EpfpYM7PudgJ+AWXoBCDHPLwvAAAAAElFTkSuQmCC"
          altImgWP="Ícone de Agendamento"
        />
      </a>
    </>
  );
}

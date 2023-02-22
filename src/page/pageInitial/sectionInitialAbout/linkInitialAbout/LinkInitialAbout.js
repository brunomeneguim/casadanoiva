/* Desenvolvido por - Bruno Marcondes */

import { HashLink as Link } from "react-router-hash-link";

import styles from "./LinkInitialAbout.module.css";

export default function LinkInitialAbout({ pathAbout, titleAbout }) {
  return (
    <>
      <Link className={styles.linkInitialAbout} to={pathAbout}>
        {titleAbout}
      </Link>
    </>
  );
}

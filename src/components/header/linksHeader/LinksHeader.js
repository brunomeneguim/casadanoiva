/* Desenvolvido por - Bruno Marcondes */

import IconLinks from "./iconLink/IconLink";
import ListLinks from "./listLinks/ListLinks";

import styles from "./LinksHeader.module.css";

export default function LinksHeader() {
  return (
    <div className={styles.cntLinkIcon}>
      <ListLinks />
      <IconLinks />
    </div>
  );
}

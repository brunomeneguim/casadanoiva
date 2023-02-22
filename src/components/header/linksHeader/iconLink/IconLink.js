/* Desenvolvido por - Bruno Marcondes */

import IconLinksData from "./IconLinksData.json";

import styles from "./IconLinks.module.css";

export default function IconLinks() {
  return (
    <div className={styles.cntIcon}>
      {IconLinksData.map((IconLinksData) => {
        return (
          <a
            key={IconLinksData.id}
            className={styles.iconLocation}
            href={IconLinksData.path}
            target={IconLinksData.target}
            rel={IconLinksData.rel}
          >
            <img alt={IconLinksData.altImg} src={IconLinksData.pathImg} />
          </a>
        );
      })}
    </div>
  );
}

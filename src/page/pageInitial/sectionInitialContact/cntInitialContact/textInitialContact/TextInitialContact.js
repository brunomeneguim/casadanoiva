import { HashLink as Link } from "react-router-hash-link";

import styles from "./TextInitialContact.module.css";

export default function TextInitialContact({
  pathLink,
  textLink,
  textContact,
}) {
  return (
    <>
      <Link className={styles.linkInitialContact} to={pathLink}>
        {textLink}
      </Link>
      <p className={styles.textInitialContact}>{textContact}</p>
    </>
  );
}

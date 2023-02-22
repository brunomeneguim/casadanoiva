import styles from "./TitleFirstDress.module.css";

export default function TitleFirstDress({ idTitle, title }) {
  return (
    <>
      <h1 className={styles.titleFirstDress} id={idTitle}>
        {title}
      </h1>
    </>
  );
}

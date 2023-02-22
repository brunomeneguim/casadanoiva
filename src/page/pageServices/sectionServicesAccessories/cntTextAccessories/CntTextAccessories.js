import TextServicesAccessories from "./textServicesAccessories/TextServicesAccessories";
import styles from "./CntTextAccessories.module.css";

export default function CntTextAccessories() {
  return (
    <div className={styles.boxAccessories}>
      <TextServicesAccessories
        titleAccessories="Acessórios"
        subtitleAccessories="Na Casa da Noiva você também pode alugar separadamente os acessórios
                para o seu look de noiva. Temos várias opções de coroas, tiaras, grinaldas, cintos, brincos, estola
                de inverno e roupões. Os valores variam entre R$ 30,00 à R$ 100,00 locação."
      />
    </div>
  );
}

import TextInitialContact from "./textInitialContact/TextInitialContact";
import NavLinkContact from "./navLinkContact/NavLinkContact";

import styles from "./CntInitialContact.module.css";

export default function CntInitialContact() {
  return (
    <div className={styles.cntInitialContact}>
      <TextInitialContact
        pathLink="/contact"
        textLink="Entre em contato"
        textContact="Será um prazer te ajudar a escolher o seu vestido de
                noiva dos sonhos. Esperamos por você! Entre em contato para mais 
                informações e também para agendar uma visita."
      />
      <NavLinkContact />
    </div>
  );
}

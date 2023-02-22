/* Desenvolvido por - Bruno Marcondes */

import TextWhatsApp from "./textWhatsApp/TextWhatsApp";

import styles from "./ContactWhatsApp.module.css";

export default function ContactWhatsApp() {
  return (
    <div className={styles.cntContactWhatsApp}>
      <TextWhatsApp
        textWP="Atendimento apenas com hora marcada. Venha nos conhecer!"
        linkWP="Quero agendar"
        targetWP="_blank"
        relWP="noreferrer"
        hrefWP="https://wa.me/5542999901300?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio!"
      />
    </div>
  );
}

/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta o Banner para a página Contato */

import styles from './SectionContactBanner.module.css';

export default function SectionContactBanner({ pathImgPageContact, altImgPageContact }) {
    return (
        <section className={styles.sectionContactBanner}>
            <img className={styles.imgContact} src={pathImgPageContact} alt={altImgPageContact} />
        </section>
    );
}
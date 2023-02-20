/* Desenvolvido por - Bruno Marcondes */
/* Função que exporta a Seção Outros para a Página Serviços */
import OthersData from './SectionServicesOthersData.json';

import styles from "./SectionServicesOthers.module.css";

export default function SectionServicesOthers() {
    return (
        <section className={styles.sectionServicesOthers} id="others" > {
            OthersData && OthersData.map(OthersData => {
                return (
                    <div className={styles.cntServicesOthers} key={OthersData.id}>
                        <div className={styles.boxServicesOthers}>
                            <h1 className={styles.titleServicesOthers}>{OthersData.titleOthers}</h1>
                            <p className={styles.textServicesOthers}>{OthersData.textOthers}</p>
                            <img className={styles.imgServicesOthers} src={OthersData.pathImg} alt={OthersData.altImg} />
                        </div>
                    </div>
                )
            })
        }
        </section>
    );
}

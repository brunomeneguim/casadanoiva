import TextServicesVeils from './textServicesVeils/TextServicesVeils';

import styles from './CntTextVeils.module.css';

export default function CntTextVeils() {
    return (
        <div className={styles.boxVeils}>
            <TextServicesVeils
                titleVeils="Véus"
                subtitleVeils="O Véu da Noiva tem um significado especial de transparecer a pureza e honra da mulher, além de ficar
                muito lindo nas fotos! Na Casa da Noiva você encontra vários modelos de véus: longos, médios, curtos, lisos, com bordados,
                simples, rendados e com fita de cetim. Os valores variam entre R$ 100,00 à R$ 200,00 a locação."
            />
        </div>
    );
}
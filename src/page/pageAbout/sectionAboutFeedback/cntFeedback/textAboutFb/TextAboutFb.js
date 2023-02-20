import TextAboutFbData from './TextAboutFbData.json';

import styles from './TextAboutFb.module.css';

export default function TextAboutFb() {
    return (
        <>
            {
                TextAboutFbData && TextAboutFbData.map(TextAboutFbData => {
                    return (
                        <figure className={styles.boxFeedback} key={TextAboutFbData.id}>

                            <img className={styles.imgFeedback} src={TextAboutFbData.pathImgFb} alt={TextAboutFbData.altImgFb} />
                            <article className={styles.boxTextFeedback}>
                                <h2 className={styles.nameFeedback}>{TextAboutFbData.nameFb}</h2>
                                <p className={styles.textFeedback}>{TextAboutFbData.textFb}
                                </p>
                            </article>
                        </figure>
                    )
                })
            }
        </>
    );
}
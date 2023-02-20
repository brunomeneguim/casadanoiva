import TextAboutFb from './textAboutFb/TextAboutFb';

import styles from './CntFeedback.module.css';

export default function CntFeedback() {
    return (
        <div className={styles.cntFeedback}>
            <TextAboutFb />
        </div>
    );
}
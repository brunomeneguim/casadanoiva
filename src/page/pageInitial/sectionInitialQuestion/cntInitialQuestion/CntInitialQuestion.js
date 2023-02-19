import TextQuestion from './textQuestion/TextQuestion';
import styles from './CntInitialQuestion.module.css';

export default function CntInitialQuestion() {
    return (
        <div className={styles.cntInitialQuestion}>
            <TextQuestion />
        </div>
    );
}
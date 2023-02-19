import textQuestion from './TextQuestionData.json';

import styles from './TextQuestion.module.css';

export default function TextQuestion() {
    return (
        <>
            {
                textQuestion && textQuestion.map(textQuestion => {
                    return (
                        <div className={styles.boxInitialQuestion} key={textQuestion.id}>
                            <h2 className={styles.subtitleQuestion}>{textQuestion.question}</h2>
                            <p className={styles.textQuestion}>{textQuestion.answer}</p>
                        </div>
                    )
                })
            }
        </>
    );
}
import styles from './LinkFeedback.module.css';

export default function LinkFeedback({ rel, target, href, textLink }) {
    return (
        <>
            <a className={styles.linkFeedback}
                rel={rel}
                target={target}
                href={href}>{textLink}</a>
        </>
    );
}
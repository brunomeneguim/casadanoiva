import styles from './LightWidget.module.css';

export default function LightWidget() {
    return (
        <>
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe className={styles.lightwidget_widget}
                src="https://cdn.lightwidget.com/widgets/deb224217e0351188bd81a5a81a8c92e.html"
                title='Instagram Frame'
                scrolling="no"
                allowtransparency="true"
            ></iframe>
        </>
    );
}
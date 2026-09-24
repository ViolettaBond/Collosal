import styles from './Hero.module.scss';
import Button from '../../../Components/Button/Button';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <span className={styles.eyebrown}>CLIENT-DEVELOPMENT DRIVEN</span>

                <div className={styles.aboutUsText}>
                    <h1 className={styles.title}>
                        We Design. We Develop. We Ship. In The Same Day.
                    </h1>

                    <p className={styles.description}>
                        We are committed to not making clients wait. We will deliver the work as
                        quickly as possible. Even on the same day. Even so, we do not reduce the
                        quality of our work.
                    </p>
                </div>

                <div className={styles.btnHero}>
                    <Button text="Send Quote" variant="purple" />
                    <Button text="Learn More" />
                </div>
            </div>
        </section>
    );
}

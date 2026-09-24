import Hero from './Hero/Hero';
import styles from './Home.module.scss';

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Hero />
            </main>
        </>
    );
}

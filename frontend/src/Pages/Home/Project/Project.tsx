import styles from './Project.module.scss';
import Button from '../../../Components/Button/Button';

export default function Project() {
    return (
        <>
            <section className={styles.project}>
                <span className={styles.eyebrown}>PROJECTS</span>

                <h2 className={styles.title}>
                    We have completed many amazing projects that you will not believe
                </h2>

                <div className={styles.cards}>
                    <div className={styles.cardInner}>
                        <div className={styles.card}>
                            <div className={styles.skeletons}>
                                <div className={styles.skeletonLong}></div>
                                <div className={styles.skeletonShort}></div>
                            </div>

                            <div className={styles.mobileSkeleton}></div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.detailText}>
                                <p className={styles.heading}>The Mobile App Landing Page</p>
                                <p className={styles.text}>A landing page for mobile app</p>
                            </div>

                            <a href="/projects">
                                <Button variant="border" text="Detail" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.cardInner}>
                        <div className={styles.card}>
                            <div className={styles.skeletons}>
                                <div className={styles.skeletonLong}></div>
                                <div className={styles.skeletonShort}></div>
                            </div>

                            <div className={styles.tableSkeleton}></div>
                        </div>
                        <div className={styles.detail}>
                            <div className={styles.detailText}>
                                <p className={styles.heading}>The Desktop App Landing Page</p>
                                <p className={styles.text}>A landing page for desktop app</p>
                            </div>

                            <a href="/project/detail">
                                <Button variant="border" text="Detail" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

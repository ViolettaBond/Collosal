import styles from './About.module.scss';
import AboutIntro from './AboutIntro/AboutIntro';
import AboutStats from './AboutStats/AboutStats';
import AboutTeam from './AboutTeam/AboutTeam';

export default function About() {
    return (
        <div className={styles.about}>
            <AboutIntro />
            <AboutStats />
            <AboutTeam />
        </div>
    );
}

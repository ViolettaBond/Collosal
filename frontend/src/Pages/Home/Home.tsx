import GetStarted from './GetStarted/GetStarted';
import Hero from './Hero/Hero';
import styles from './Home.module.scss';
import HowWeWork from './HowWeWork/HowWeWork';
import OurTeam from './OurTeam/OurTeam';
import Project from './Project/Project';
import Workflow from './Workflow/Workflow';
import Testimonials from './Testimonials/Testimonials';

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <Hero />
                <Workflow />
                <HowWeWork />
                <OurTeam />
                <Project />
                <GetStarted />
                <Testimonials />
            </main>
        </>
    );
}

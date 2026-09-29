import { useEffect, useState } from 'react';
import Hero from './Hero/Hero';
import Workflow from './Workflow/Workflow';
import HowWeWork from './HowWeWork/HowWeWork';
import OurTeam from './OurTeam/OurTeam';
import Project from './Project/Project';
import GetStarted from './GetStarted/GetStarted';
import Testimonials from './Testimonials/Testimonials';
import styles from './Home.module.scss';
import type { TestimonialType } from './Testimonials/TestimonialType';
import type { PricingPlan } from './GetStarted/types';

export default function Home() {
    const [testimonials, setTestimonials] = useState<TestimonialType[] | null>(null);
    const [plans, setPlans] = useState<PricingPlan[] | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        Promise.all([
            fetch('http://localhost:5000/testimonials', { signal: controller.signal }).then(
                (r) => r.json() as Promise<TestimonialType[]>,
            ),
            fetch('http://localhost:5000/pricing-plans', { signal: controller.signal }).then(
                (r) => r.json() as Promise<PricingPlan[]>,
            ),
        ])
            .then(([t, p]) => {
                setTestimonials(t);
                setPlans(p);
            })
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            });

        return () => controller.abort();
    }, []);

    return (
        <main className={styles.main}>
            <Hero />
            <Workflow />
            <HowWeWork />
            <OurTeam />
            <Project />
            <GetStarted plans={plans} />
            <Testimonials items={testimonials} />
        </main>
    );
}

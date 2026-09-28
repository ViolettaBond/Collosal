import { useEffect, useState } from 'react';
import styles from './GetStarted.module.scss';
import type { PricingPlan } from './types';
import Button from '../../../Components/Button/Button';

export default function GetStarted() {
    const [plans, setPlans] = useState<PricingPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const res = await fetch('http://localhost:5000/pricing-plans', {
                    signal: controller.signal,
                });

                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data: PricingPlan[] = await res.json();
                setPlans(data);
            } catch (e) {
                if ((e as Error).name !== 'AbortError') {
                    setError('Не удалось загрузить тарифы');
                    console.error(e);
                }
            } finally {
                setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, []);

    return (
        <section className={styles.getStarted}>
            <span className={styles.eyebrow}>GET STARTED</span>
            <h2 className={styles.title}>What do you need? Choose a service that can help you</h2>

            {loading && <p className={styles.state}>Загрузка…</p>}
            {error && <p className={styles.state}>{error}</p>}

            <div className={styles.grid}>
                {plans.map((plan) => (
                    <article
                        key={plan.id}
                        className={styles.card}
                        style={{ background: plan.color_hex }}>
                        <header className={styles.cardHead}>
                            <h3 className={styles.cardTitle}>{plan.plan_name}</h3>
                            <div className={styles.priceBlock}>
                                <span className={styles.priceLabel}>Starting from</span>
                                <span className={styles.price}>${plan.price}</span>
                            </div>
                        </header>

                        <ul className={styles.features}>
                            {[plan.feature_1, plan.feature_2, plan.feature_3, plan.feature_4]
                                .filter(Boolean)
                                .map((f) => (
                                    <li key={f}>{f}</li>
                                ))}

                            {plan.extra_price != null && (
                                <li className={styles.extra}>
                                    ${plan.extra_price}/{plan.extra_label}
                                </li>
                            )}
                        </ul>

                        <Button text="Detail" variant="white" />
                    </article>
                ))}
            </div>
        </section>
    );
}

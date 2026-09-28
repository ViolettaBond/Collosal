import styles from './Pricing.module.scss';
import Hero from '../../Components/HeroPricing/HeroPricing';
import Pricings from './Pricings/Pricings';
import Faq from './FAQ/Faq';

export default function Pricing() {
    return (
        <>
            <main className={styles.main}>
                <Hero
                    label="Pricing"
                    title={'What do you need? Choose\na service that can help you'}
                />

                <Pricings />
                <Faq />
            </main>
        </>
    );
}

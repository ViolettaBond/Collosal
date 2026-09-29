import styles from './Services.module.scss';
import ServicesHero from './ServicesHero/ServicesHero';
import ServiceBlock from './ServiceBlock/ServiceBlock';
import { services } from './servicesData';

export default function Services() {
    return (
        <div className={styles.page}>
            <ServicesHero />

            <div className={styles.blocks}>
                {services.map((service) => (
                    <ServiceBlock key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

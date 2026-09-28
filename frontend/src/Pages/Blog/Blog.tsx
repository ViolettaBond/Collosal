import styles from './Blog.module.scss';
import Hero from '../../Components/HeroPricing/HeroPricing';
import BlogSection from './BlogSection/BlogSection';

export default function Blog() {
    return (
        <>
            <main className={styles.main}>
                <Hero label="BLOG" title={'Get precise knowledge wherever you are'} />

                <BlogSection />
            </main>
        </>
    );
}

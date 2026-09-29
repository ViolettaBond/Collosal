import { useState } from 'react';
import styles from './Projects.module.scss';
import ProjectsHero from './ProjectsHero/ProjectsHero';
import ProjectsGrid from './ProjectsGrid/ProjectsGrid';

export default function Projects() {
    const [category, setCategory] = useState('all');

    return (
        <div className={styles.projects}>
            <ProjectsHero category={category} onChange={setCategory} />
            <ProjectsGrid category={category} />
        </div>
    );
}

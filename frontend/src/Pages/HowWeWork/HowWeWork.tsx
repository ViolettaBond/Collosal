import styles from './HowWeWork.module.scss';
import WorkflowHero from './WorkflowHero/WorkflowHero';
import WorkflowStep from './WorkflowStep/WorkflowStep';
import { workSteps } from './workSteps';

export default function HowWeWork() {
    return (
        <div className={styles.page}>
            <WorkflowHero />

            <div className={styles.steps}>
                {workSteps.map((step) => (
                    <WorkflowStep key={step.id} step={step} />
                ))}
            </div>
        </div>
    );
}

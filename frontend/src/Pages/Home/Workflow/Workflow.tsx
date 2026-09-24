import styles from './Workflow.module.scss';
import { Photos } from '../../../../Photos.ts';

export default function Workflow() {
    return (
        <section className={styles.workflow}>
            <div className={styles.container}>
                <div className={styles.cards}>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                    <div className={styles.card}></div>
                </div>

                <div className={styles.socNetwork}>
                    <img src={Photos.SocNet.GitHub} alt="" />
                    <img src={Photos.SocNet.Forbes} alt="" />
                    <img src={Photos.SocNet.Google} alt="" />
                    <img src={Photos.SocNet.Microsoft} alt="" />
                    <img src={Photos.SocNet.Facebook} alt="" />
                </div>
            </div>
        </section>
    );
}

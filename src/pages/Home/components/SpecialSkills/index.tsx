import { Meter } from 'src/components/Meter';
import styles from './index.module.scss';

export const SpecialSkills = () => {
    
    return (
        <div className={styles.special_skills}>
            <Meter field='ReactJS' percentage={80}/>
        </div>
    )
}
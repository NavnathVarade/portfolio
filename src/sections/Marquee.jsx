import { marqueeItems } from '../data/portfolioData';
import styles from './Marquee.module.css';

export default function Marquee() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        
        {/* FIRST SET */}
        <div className={styles.group}>
          {marqueeItems.map((item, i) => (
            <span key={i} className={styles.item}>
              {item} <span className={styles.sep}>✦</span>
            </span>
          ))}
        </div>

        {/* DUPLICATE SET */}
        <div className={styles.group}>
          {marqueeItems.map((item, i) => (
            <span key={`dup-${i}`} className={styles.item}>
              {item} <span className={styles.sep}>✦</span>
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
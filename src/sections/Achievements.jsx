import Reveal from '../components/Reveal';
import { achievements } from '../data/portfolioData';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section id="achievements" className="section-alt">
      <Reveal><div className="section-label">Recognition</div></Reveal>
      <Reveal><h2 className="section-title"><em>Achievements</em> &amp; Certs</h2></Reveal>
      <Reveal><div className="divider" /></Reveal>

      <div className={styles.grid}>
        {achievements.map((a, i) => (
          <Reveal key={i} delay={(i % 4) * 0.08} className={styles.card}>
            <div className={styles.icon}>{a.icon}</div>
            <div>
              <div className={styles.title}>{a.title}</div>
              <div className={styles.org}>{a.org}</div>
              <div className={styles.year}>{a.year}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

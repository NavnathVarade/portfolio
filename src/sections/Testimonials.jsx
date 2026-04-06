import Reveal from '../components/Reveal';
import { testimonials } from '../data/portfolioData';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section id="testimonials">
      <Reveal><div className="section-label">Social Proof</div></Reveal>
      <Reveal><h2 className="section-title">What People <em>Say</em></h2></Reveal>
      <Reveal><div className="divider" /></Reveal>

      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.1} className={styles.card}>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{t.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{t.initials}</div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorRole}>{t.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

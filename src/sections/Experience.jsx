import Reveal from '../components/Reveal';
import { experience } from '../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience">
      <Reveal><div className="section-label">Career</div></Reveal>
      <Reveal><h2 className="section-title">Work <em>Experience</em></h2></Reveal>
      <Reveal><div className="divider" /></Reveal>

      <div className={styles.timeline}>
        {experience.map((exp, i) => (
          <Reveal key={i} delay={i * 0.1} className={styles.item}>
            <div className={styles.dot} />
            <div className={styles.date}>{exp.date}</div>
            <div className={styles.role}>{exp.role}</div>
            <div className={styles.company}>{exp.company}</div>
            <div className={styles.desc}>{exp.desc}</div>
            <div className={styles.chips}>
              {exp.chips.map(c => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

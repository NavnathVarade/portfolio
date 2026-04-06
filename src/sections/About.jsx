import Reveal from '../components/Reveal';
import styles from './About.module.css';

const stats = [
  { num: '10+', label: 'Projects Built' },
  { num: '300+', label: 'DSA Problems Solved' },
  { num: '2', label: 'Hackathons Participated' },
];

export default function About() {
  return (
    <section id="about" className={`section-alt ${styles.section}`}>
      <Reveal><div className="section-label">About Me</div></Reveal>

      <div className={styles.grid}>
        <Reveal className={styles.imageWrap}>
          <div className={styles.imagePlaceholder}>
            
            {/* <div className={styles.avatarInitials}>NV</div> */}
             <img
              src="/images/profile.png"   // image path
              alt="Navnath Varade"
              className={styles.profileImage}
            />
                    
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeNum}>1+</div>
            <div className={styles.badgeLabel}>Years Exp.</div>
          </div>
        </Reveal>

        <div className={styles.text}>
          <Reveal><div className="section-label">The Story</div></Reveal>
          <Reveal>
            <h2 className="section-title">
              I turn complex<br /><em>ideas</em> into scalable systems
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              Hey — I'm <strong>Navnath Varade</strong>, a full-stack developer based in
              Pune, India. I obsess over the intersection of engineering excellence and design craft.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
           <p>
              With hands-on experience building <em>scalable backend systems</em>, I’ve worked on live AI SaaS platforms,
              optimized APIs for performance and reliability, and built high-scale projects like a URL shortener
              handling 100M+ requests/day.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p>
              When I'm not shipping code, I'm writing about <strong>systems design</strong>,
              contributing to open source, or exploring the next-generation technologies.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className={styles.stats}>
              {stats.map(s => (
                <div key={s.label} className={styles.statItem}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

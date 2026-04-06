import Reveal from '../components/Reveal';
import { projects } from '../data/portfolioData';
import styles from './Projects.module.css';

function ProjectCard({ project }) {
  return (
    <Reveal>
      <article className={`project-card ${styles.card}`}>
        <div className={styles.image}>
          <div
            className={styles.imageBg}
            style={{ background: project.bg }}
          >
            <div
              className={styles.imageTitle}
              style={{ color: project.accent }}
            >
              {project.title}
            </div>
          </div>
          <div className={styles.num} style={{ color: project.accent }}>
            {project.num}
          </div>
          <div className={styles.overlay}>
            <a href={project.github} className={styles.projLink} target="_blank" rel="noopener noreferrer">
              ⌥ GitHub
            </a>
            <a href={project.live} className={styles.projLink} target="_blank" rel="noopener noreferrer">
              ↗ Live
            </a>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.tags}>
            {project.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.desc}</p>
          <div className={styles.footer}>
            <div className={`${styles.status} ${project.status === 'live' ? styles.statusLive : ''}`}>
              <span className={styles.statusDot} />
              {project.status === 'live' ? 'Live in Production' : 'In Progress'}
            </div>
            <a href={project.live} className={styles.viewLink} target="_blank" rel="noopener noreferrer">
              View →
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-alt">
      <div className={styles.header}>
        <div>
          <Reveal><div className="section-label">Selected Work</div></Reveal>
          <Reveal><h2 className="section-title">Featured <em>Projects</em></h2></Reveal>
        </div>
        <Reveal><div className={styles.count}>0{projects.length} projects</div></Reveal>
      </div>

      <div className={styles.grid}>
        {projects.map(p => (
          <ProjectCard key={p.num} project={p} />
        ))}
      </div>
    </section>
  );
}

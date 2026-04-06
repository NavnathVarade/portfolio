import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTyped } from '../hooks/useTyped';
import { typedStrings } from '../data/portfolioData';
import styles from './Hero.module.css';

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, particles = [], raf;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,169,107,${p.opacity})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(196,169,107,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}

export default function Hero() {
  const typedText = useTyped(typedStrings);

  const ease = [0.16, 1, 0.3, 1];

  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />
      <ParticleCanvas />

      <motion.div
        className={styles.statusBadge}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, ease }}
      >
        <span className={styles.statusDot} />
        Available for projects
      </motion.div>

      <motion.div
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      >
        Junior Full-Stack Engineer
      </motion.div>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease }}
      >
        Crafting<br />
        <em>digital</em><br />
        experiences
      </motion.h1>

      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease }}
      >
        <p className={styles.desc}>
          I build{' '}
          <span className={styles.typed}>{typedText}</span>
          <span className="typed-cursor" />
          <br />
          that are fast, beautiful, and built to last.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className="btn-primary"
             onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <span>View Work</span><span>→</span>
          </a>
          <a href="#contact" className="btn-outline"
             onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
        </div>
      </motion.div>

      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className={styles.scrollLine} />
        scroll
      </motion.div>
    </section>
  );
}

import styles from './Footer.module.css';

const socials = [
  { href: 'https://github.com/NavnathVarade', label: 'GitHub', icon: '⌥' },
  { href: 'https://www.linkedin.com/in/navnath-varade/', label: 'LinkedIn', icon: 'in' },
  { href: 'https://x.com/navnath_tw', label: 'Twitter', icon: '𝕏' },
  { href: 'mailto:navnathvarade09@gmail.com', label: 'Email', icon: '✉' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        © 2026 <span className={styles.name}>Navnath Varade</span> — Built with obsession &amp; a lot of ☕
      </div>
      <div className={styles.socials}>
        {socials.map(s => (
          <a key={s.label} href={s.href} className={styles.socialLink}
             target="_blank" rel="noopener noreferrer" aria-label={s.label}>
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

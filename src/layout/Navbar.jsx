import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../data/portfolioData';
import styles from './Navbar.module.css';

export default function Navbar({ onOpenCmd, onToggleTheme, isDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome   = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href === '/blog') { navigate('/blog'); return; }
    if (!href.startsWith('#')) { navigate(href); return; }

    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isHome, navigate]);

  const isActive = (href) => {
    if (href === '/blog') return location.pathname.startsWith('/blog');
    return false;
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoDim}>~/</span>navnath.varade
        </Link>

        <div className={styles.links}>
          {navLinks.map(link => {
            const href = link.label === 'Blogs' ? '/blog' : link.href;
            return (
              <a
                key={link.label}
                href={href}
                className={`${styles.link} ${isActive(href) ? styles.linkActive : ''}`}
                onClick={e => handleNavClick(e, href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button className={styles.cmdBtn} onClick={onOpenCmd} aria-label="Command palette">
            <span>⌘K</span>
          </button>
          <button className={styles.themeBtn} onClick={onToggleTheme} aria-label="Toggle theme">
            <span className={styles.themeBtnInner}>{isDark ? '☀' : '🌙'}</span>
          </button>
          <a href="#contact" className={styles.cta} onClick={e => handleNavClick(e, '#contact')}>
            Hire Me
          </a>
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileHeader}>
          <span className={styles.mobileLogo}>
            <span className={styles.logoDim}>~/</span>navnath.varade
          </span>
          <button className={styles.mobileClose} onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => {
            const href = link.label === 'Blogs' ? '/blog' : link.href;
            return (
              <a
                key={link.label}
                href={href}
                className={`${styles.mobileLink} ${isActive(href) ? styles.mobileLinkActive : ''}`}
                style={{ transitionDelay: mobileOpen ? `${i * 55}ms` : '0ms' }}
                onClick={e => handleNavClick(e, href)}
              >
                <span className={styles.mobileLinkNum}>0{i + 1}</span>
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className={styles.mobileFooter}>
          <button className={styles.mobileThemeBtn} onClick={onToggleTheme}>
            {isDark ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
    </>
  );
}

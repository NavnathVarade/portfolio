import { useState } from 'react';
import Reveal from '../components/Reveal';
import styles from './Contact.module.css';

const contactLinks = [
  {
    icon: '✉',
    label: 'Email',
    value: 'navnathvarade09@gmail.com',
    href: 'mailto:navnathvarade09@gmail.com',
  },
  {
    icon: '⌥',
    label: 'GitHub',
    value: 'github.com/NavnathVarade',
    href: 'https://github.com/NavnathVarade',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/navnath-varade',
    href: 'https://www.linkedin.com/in/navnath-varade/',
  },
  {
    icon: '𝕏',
    label: 'Twitter / X',
    value: '@navnath_tw',
    href: 'https://x.com/navnath_tw',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-alt">
      <Reveal><div className="section-label">Let's Connect</div></Reveal>
      <Reveal><h2 className="section-title">Start a <em>Conversation</em></h2></Reveal>
      <Reveal><div className="divider" /></Reveal>

      <div className={styles.grid}>
        {/* Left — info */}
        <Reveal className={styles.info}>
          <p className={styles.intro}>
            I'm currently open to new opportunities — freelance, full-time, or consulting.
            Whether you have a product idea, need engineering leadership, or just want to geek
            out over distributed systems — my inbox is always open.
          </p>
          <div className={styles.links}>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`contact-link ${styles.link}`}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <div className={styles.linkIcon}>{link.icon}</div>
                <div>
                  <div className={styles.linkLabel}>{link.label}</div>
                  <div className={styles.linkValue}>{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal delay={0.2} className={styles.formWrap}>
          {!submitted ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Subject</label>
                <input
                  className={styles.input}
                  type="text"
                  name="subject"
                  placeholder="What's this about?"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Message</label>
                <textarea
                  className={styles.input}
                  name="message"
                  placeholder="Tell me about your project…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submit}>
                Send Message →
              </button>
            </form>
          ) : (
            <div className={styles.success}>
              ✓ Message sent! I'll get back to you within 24 hours.
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

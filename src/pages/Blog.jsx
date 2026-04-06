import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import { blogPosts } from '../data/portfolioData';
import styles from './Blog.module.css';

// Collect all unique tags from posts
const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(p => p.tags)))];

export default function Blog() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.tags.includes(activeTag));

  return (
    <main className={styles.page}>
      {/* ── Header ───────────────────────────────────────── */}
      <div className={styles.header}>
        <Reveal>
          <Link to="/" className={styles.backLink}>
            <span className={styles.backArrow}>←</span> Back to Portfolio
          </Link>
        </Reveal>

        <div className={styles.headerContent}>
          <Reveal>
            <div className="section-label" style={{ marginTop: '2rem' }}>Writing</div>
          </Reveal>
          <Reveal>
            <h1 className={`section-title ${styles.pageTitle}`}>
              The <em>Blog</em>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.subtitle}>
              Thoughts on engineering, architecture, and building things that last.{' '}
              <span className={styles.postCount}>{blogPosts.length} articles</span>
            </p>
          </Reveal>
        </div>

        {/* Tag filter */}
        <Reveal delay={0.15}>
          <div className={styles.tagFilter} role="group" aria-label="Filter by tag">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`${styles.filterBtn} ${activeTag === tag ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
                {tag !== 'All' && (
                  <span className={styles.filterCount}>
                    {blogPosts.filter(p => p.tags.includes(tag)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <div className={styles.dividerLine} />

      {/* ── Grid ─────────────────────────────────────────── */}
      <div className={styles.gridWrap}>
        <AnimatePresence mode="popLayout">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/blog/${post.slug}`} className={styles.card}>
                <span className={styles.cardAccentLine} aria-hidden="true" />

                {post.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}

                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span className={styles.date}>{post.date}</span>
                    <span className={styles.dot}>·</span>
                    <span className={styles.readTime}>{post.readTime}</span>
                  </div>
                </div>

                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>

                <div className={styles.cardFooter}>
                  <div className={styles.tags}>
                    {post.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className={styles.readMore}>
                    Read <span className={styles.readMoreArrow}>→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            No posts tagged "{activeTag}" yet.
          </div>
        )}
      </div>
    </main>
  );
}

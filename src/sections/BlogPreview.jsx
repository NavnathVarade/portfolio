import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { blogPosts } from '../data/portfolioData';
import styles from './BlogPreview.module.css';

const featured = blogPosts.filter(p => p.featured).slice(0, 3);

function BlogCard({ post, index }) {
  return (
    <Reveal delay={index * 0.1}>
      <Link to={`/blog/${post.slug}`} className={styles.card}>
        {/* Accent line top */}
        <span className={styles.cardLine} aria-hidden="true" />

        <div className={styles.cardMeta}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.readTime}>{post.readTime}</span>
        </div>

        <h3 className={styles.cardTitle}>{post.title}</h3>
        <p className={styles.cardExcerpt}>{post.excerpt}</p>

        <div className={styles.cardFooter}>
          <div className={styles.tags}>
            {post.tags.slice(0, 2).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <span className={styles.readMore}>
            Read <span className={styles.arrow}>→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function BlogPreview() {
  return (
    <section id="blogs" className={styles.section}>
      {/* Header row */}
      <div className={styles.header}>
        <div>
          <Reveal><div className="section-label">Writing</div></Reveal>
          <Reveal>
            <h2 className="section-title">
              Latest <em>Articles</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <Link to="/blog" className={styles.viewAll}>
            View all posts <span>→</span>
          </Link>
        </Reveal>
      </div>

      <Reveal><div className="divider" /></Reveal>

      {/* Cards grid */}
      <div className={styles.grid}>
        {featured.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.3}>
        <div className={styles.cta}>
          <Link to="/blog" className="btn-outline">
            <span>Explore All Articles</span>
            <span>→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

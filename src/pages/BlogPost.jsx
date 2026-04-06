import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import styles from './BlogPost.module.css';

export default function BlogPost() {
  const { slug }     = useParams();
  const navigate     = useNavigate();
  const containerRef = useRef(null);
  const [status, setStatus] = useState('loading'); // loading | ok | notfound | error

  useEffect(() => {
    setStatus('loading');
    let cancelled = false;

    fetch(`/blog/${slug}.html`)
      .then(res => {
        if (!res.ok) throw Object.assign(new Error('Not found'), { status: res.status });
        return res.text();
      })
      .then(html => {
        if (cancelled) return;

        const container = containerRef.current;
        if (!container) return;

        // 1. Inject HTML
        container.innerHTML = html;

        // 2. Re-execute <script> blocks
        //    innerHTML silently drops scripts; cloning into a fresh element forces execution
        container.querySelectorAll('script').forEach(old => {
          const fresh = document.createElement('script');
          Array.from(old.attributes).forEach(a => fresh.setAttribute(a.name, a.value));
          fresh.textContent = old.textContent;
          old.replaceWith(fresh);
        });

        // 3. Delegated listener for data-bl-part and data-demo-action
        const handleClick = e => {
          const partBtn = e.target.closest('[data-bl-part]');
          if (partBtn) {
            e.preventDefault();
            const n = parseInt(partBtn.getAttribute('data-bl-part'), 10);
            if (typeof window.blShowPart === 'function') {
              window.blShowPart(n);
            } else {
              container.querySelectorAll('.bl-part').forEach((p, i) =>
                p.classList.toggle('visible', i === n)
              );
              container.querySelectorAll('.bl-pill').forEach((p, i) =>
                p.classList.toggle('active', i === n)
              );
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
          }

          const demoBtn = e.target.closest('[data-demo-action]');
          if (demoBtn) {
            const action = demoBtn.getAttribute('data-demo-action');
            if (action === 'send'  && typeof window.sendRequest   === 'function') window.sendRequest();
            if (action === 'burst' && typeof window.burstRequests === 'function') window.burstRequests();
            if (action === 'reset' && typeof window.resetBucket   === 'function') window.resetBucket();
          }
        };

        container.addEventListener('click', handleClick);
        setStatus('ok');
      })
      .catch(err => {
        if (cancelled) return;
        setStatus(err.status === 404 || err.message === 'Not found' ? 'notfound' : 'error');
      });

    return () => {
      cancelled = true;
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, [slug]);

  // KEY FIX: always render the <article> so containerRef is always attached.
  // Overlay states (loading / error / notfound) are shown ON TOP of it.
  return (
    <div className={styles.page}>

      {/* Loading overlay */}
      {status === 'loading' && (
        <div className={styles.state}>
          <div className={styles.loadingDot} />
          <span>Loading post…</span>
        </div>
      )}

      {/* Error overlay */}
      {status === 'error' && (
        <div className={styles.state}>
          <div className={styles.errorTitle}>Something went wrong</div>
          <p className={styles.errorMsg}>Failed to load the post. Please try again.</p>
          <div className={styles.errorActions}>
            <Link to="/blog" className={styles.backBtn}>← All Posts</Link>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      )}

      {/* Not found overlay */}
      {status === 'notfound' && (
        <div className={styles.state}>
          <div className={styles.errorTitle}>Post not found</div>
          <p className={styles.errorMsg}>
            No file at <code>/public/blog/{slug}.html</code>. Drop your HTML there
            and register it in <code>src/data/portfolioData.js</code>.
          </p>
          <div className={styles.errorActions}>
            <Link to="/blog" className={styles.backBtn}>← All Posts</Link>
          </div>
        </div>
      )}

      {/* Article container — always in the DOM so ref is always attached.
          Hidden until fetch completes so there's no flash of empty content. */}
      <div style={{ display: status === 'ok' ? 'block' : 'none' }}>
        <div className={styles.topBar}>
          <Link to="/blog" className={styles.backLink}>← All Posts</Link>
        </div>
        <article ref={containerRef} className={styles.article} />
      </div>

    </div>
  );
}
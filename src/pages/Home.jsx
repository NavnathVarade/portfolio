import { lazy, Suspense } from 'react';
import Hero from '../sections/Hero';
import Marquee from '../sections/Marquee';

// Lazy-load below-the-fold sections for code splitting
const About        = lazy(() => import('../sections/About'));
const Skills       = lazy(() => import('../sections/Skills'));
const Projects     = lazy(() => import('../sections/Projects'));
const Experience   = lazy(() => import('../sections/Experience'));
const BlogPreview  = lazy(() => import('../sections/BlogPreview'));
const Achievements = lazy(() => import('../sections/Achievements'));
const Testimonials = lazy(() => import('../sections/Testimonials'));
const Contact      = lazy(() => import('../sections/Contact'));

function SectionFallback() {
  return (
    <div style={{
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text3)',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '0.1em',
    }}>
      Loading…
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero & Marquee are above the fold — load eagerly */}
      <Hero />
      <Marquee />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>

      {/* Blog preview — sits between Experience and Achievements */}
      <Suspense fallback={<SectionFallback />}>
        <BlogPreview />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Achievements />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </main>
  );
}

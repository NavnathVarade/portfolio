import { lazy, Suspense, useEffect, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useState } from 'react';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';

// Pages
import Home from './pages/Home';

const Blog    = lazy(() => import('./pages/Blog'));
const BlogPost= lazy(() => import('./pages/BlogPost'));

function PageFallback() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '0.15em',
      color: 'var(--text3)',
      textTransform: 'uppercase',
    }}>
      Loading…
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [cmdOpen, setCmdOpen] = useState(false);
  const location = useLocation();

  // Global keyboard shortcut for command palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openCmd  = useCallback(() => setCmdOpen(true),  []);
  const closeCmd = useCallback(() => setCmdOpen(false), []);

  return (
    <>
      {/* Global UI chrome */}
      <CustomCursor />
      <ScrollProgress />

      <CommandPalette
        isOpen={cmdOpen}
        onClose={closeCmd}
        onToggleTheme={toggleTheme}
      />

      <Navbar
        onOpenCmd={openCmd}
        onToggleTheme={toggleTheme}
        isDark={isDark}
      />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={
          <Suspense fallback={<PageFallback />}>
            <Blog />
          </Suspense>
        } />

        <Route path="/blog/:slug" element={
          <Suspense fallback={<PageFallback />}>
            <BlogPost />
          </Suspense>
        } />

        {/* 404 */}
        <Route path="*" element={
          <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            fontFamily: 'var(--font-mono)',
            textAlign: 'center',
            padding: '2rem',
          }}>
            <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent3)', letterSpacing: '-0.04em' }}>
              404
            </div>
            <div style={{ color: 'var(--text2)', fontSize: '0.9rem' }}>
              Page not found.
            </div>
            <a href="/" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              border: '1px solid var(--accent3)',
              padding: '0.6rem 1.5rem',
              borderRadius: 'var(--radius)',
            }}>
              ← Go Home
            </a>
          </div>
        } />
      </Routes>

      <Footer />
    </>
  );
}

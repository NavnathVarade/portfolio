import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CommandPalette.module.css';

const commands = [
  { icon: '👤', label: 'About Me', href: '#about' },
  { icon: '⚡', label: 'Skills', href: '#skills' },
  { icon: '🚀', label: 'Projects', href: '#projects' },
  { icon: '💼', label: 'Experience', href: '#experience' },
  { icon: '✍️', label: 'Blog', href: '/blog', route: true },
  { icon: '✉️', label: 'Contact', href: '#contact' },
  { icon: '🌓', label: 'Toggle Theme', action: 'theme' },
];

export default function CommandPalette({ isOpen, onClose, onToggleTheme }) {
  const inputRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback((cmd) => {
    if (cmd.route) {
      navigate(cmd.href);
      onClose();
    } else if (cmd.href) {
      document.querySelector(cmd.href)?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    } else if (cmd.action === 'theme') {
      onToggleTheme();
      onClose();
    }
  }, [onClose, onToggleTheme, navigate]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelected(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
      if (e.key === 'Enter') { e.preventDefault(); if (filtered[selected]) handleSelect(filtered[selected]); }
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, filtered, selected, handleSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.box} onClick={e => e.stopPropagation()}>
        <div className={styles.inputWrap}>
          <span className={styles.icon}>⌘</span>
          <input
            ref={inputRef}
            className={styles.input}
            placeholder="Type a command or search…"
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(0); }}
            autoComplete="off"
          />
        </div>
        <div className={styles.items}>
          {filtered.map((cmd, i) => (
            <button
              key={cmd.label}
              className={`${styles.item} ${i === selected ? styles.itemSelected : ''}`}
              onClick={() => handleSelect(cmd)}
              onMouseEnter={() => setSelected(i)}
            >
              <span className={styles.itemIcon}>{cmd.icon}</span>
              {cmd.label}
              <kbd className={styles.shortcut}>↵</kbd>
            </button>
          ))}
        </div>
        <div className={styles.hint}>
          <span><kbd>↑↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Select</span>
          <span><kbd>Esc</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}

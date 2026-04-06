import { useState, useEffect, useRef } from 'react';

export function useTyped(strings, typingSpeed = 100, deletingSpeed = 60, pauseDuration = 1800) {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({ tIdx: 0, cIdx: 0, deleting: false });

  useEffect(() => {
    let timeout;

    function typeLoop() {
      const { tIdx, cIdx, deleting } = stateRef.current;
      const str = strings[tIdx];

      if (!deleting) {
        const next = str.slice(0, cIdx + 1);
        setDisplayText(next);
        stateRef.current.cIdx++;

        if (cIdx + 1 === str.length) {
          timeout = setTimeout(() => {
            stateRef.current.deleting = true;
            typeLoop();
          }, pauseDuration);
          return;
        }
      } else {
        const next = str.slice(0, cIdx - 1);
        setDisplayText(next);
        stateRef.current.cIdx--;

        if (cIdx - 1 === 0) {
          stateRef.current.deleting = false;
          stateRef.current.tIdx = (tIdx + 1) % strings.length;
        }
      }

      timeout = setTimeout(typeLoop, deleting ? deletingSpeed : typingSpeed);
    }

    timeout = setTimeout(typeLoop, typingSpeed);
    return () => clearTimeout(timeout);
  }, [strings, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

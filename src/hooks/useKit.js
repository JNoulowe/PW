import { useCallback, useEffect, useState } from 'react';

const KEY = 'jnii-kit';

function readSavedKit() {
  try {
    return localStorage.getItem(KEY) || 'home';
  } catch {
    return 'home';
  }
}

export function useKit() {
  const [kit, setKit] = useState(readSavedKit);

  useEffect(() => {
    document.documentElement.setAttribute('data-kit', kit);
    try {
      localStorage.setItem(KEY, kit);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
  }, [kit]);

  const toggleKit = useCallback(() => {
    setKit((k) => (k === 'away' ? 'home' : 'away'));
  }, []);

  useEffect(() => {
    function onKeydown(e) {
      if (e.target && /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName)) return;
      if (e.key === 'h' || e.key === 'H') toggleKit();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [toggleKit]);

  return [kit, toggleKit];
}

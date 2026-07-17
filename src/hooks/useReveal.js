import { useEffect, useRef, useState } from 'react';

/**
 * Mirrors the prototype's scroll-reveal behaviour: elements start hidden and
 * fade/rise into place the first time they cross into the viewport. Pass
 * `initiallyIn` for above-the-fold content that should render already
 * settled (matches the prototype's hardcoded `reveal in` markup).
 */
export function useReveal(initiallyIn = false) {
  const ref = useRef(null);
  const [isIn, setIsIn] = useState(initiallyIn);

  useEffect(() => {
    if (isIn) return;
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      setIsIn(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isIn]);

  return [ref, isIn];
}

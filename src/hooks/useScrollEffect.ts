import { useEffect, useRef, type RefObject } from 'react';

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export function useScrollEffect<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onProgress: (progress: number, rect: DOMRect) => void
) {
  const callback = useRef(onProgress);
  callback.current = onProgress;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      callback.current(clamp01((vh - rect.top) / (vh + rect.height)), rect);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ref]);
}

export function useParallax<T extends HTMLElement>(ref: RefObject<T | null>, speed: number) {
  const offset = useRef(0);

  useScrollEffect(ref, (_, rect) => {
    const el = ref.current;
    if (!el || speed === 0) return;
    const centerDistance = rect.top - offset.current + rect.height / 2 - window.innerHeight / 2;
    offset.current = centerDistance * speed * -0.1;
    el.style.translate = `0 ${offset.current.toFixed(1)}px`;
  });
}

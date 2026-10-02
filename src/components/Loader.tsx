import { useEffect, useState } from 'react';
import { useUi } from '../store/ui';
import s from './Loader.module.scss';

const EXIT_DELAY_MS = 1500;
const FALLBACK_MS = 8000;

type Phase = 'loading' | 'leaving' | 'gone';

export default function Loader() {
  const { finishIntro } = useUi();
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<Phase>('loading');

  useEffect(() => {
    const images = [...document.images].filter((img) => img.loading !== 'lazy');
    const total = images.length || 1;
    let done = 0;
    const report = () => setPercent(Math.round((done / total) * 100));
    const onDone = () => {
      done += 1;
      report();
    };

    images.forEach((img) => {
      if (img.complete) {
        done += 1;
        return;
      }
      img.addEventListener('load', onDone, { once: true });
      img.addEventListener('error', onDone, { once: true });
    });
    report();

    const fallback = setTimeout(() => setPercent(100), FALLBACK_MS);
    return () => {
      clearTimeout(fallback);
      images.forEach((img) => {
        img.removeEventListener('load', onDone);
        img.removeEventListener('error', onDone);
      });
    };
  }, []);

  useEffect(() => {
    if (percent < 100) return;
    const leave = setTimeout(() => setPhase('leaving'), 200);
    const hide = setTimeout(() => {
      setPhase('gone');
      finishIntro();
    }, 200 + EXIT_DELAY_MS);
    return () => {
      clearTimeout(leave);
      clearTimeout(hide);
    };
  }, [percent, finishIntro]);

  if (phase === 'gone') return null;

  return (
    <div className={s.loader} role="status" aria-label={`Loading ${percent}%`}>
      <div className={s.wrapImg}>
        <img src="/content/10.webp" alt="" />
      </div>
      <div className={s.percentWrap}>
        <span className={[s.percent, phase === 'leaving' ? s.leaving : ''].join(' ')}>{percent}%</span>
      </div>
    </div>
  );
}

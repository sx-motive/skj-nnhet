import { Fragment, useMemo, useRef, type CSSProperties, type ElementType } from 'react';
import { useInView } from '../hooks/useInView';
import s from './SplitText.module.scss';

type Variant = 'random' | 'bottom' | 'top' | 'left' | 'right';

const TRANSFORMS: Record<Exclude<Variant, 'random'>, string> = {
  bottom: 'translate(0, 120%) skewY(10deg)',
  top: 'translate(0, -120%) skewY(-10deg)',
  left: 'translate(-110%, 0) skewX(10deg)',
  right: 'translate(110%, 0) skewX(-10deg)',
};

const RANDOM_TRANSFORMS = ['translate(0, -110%)', 'translate(0, 110%)', 'translate(110%, 0)', 'translate(-110%, 0)'];

type Props = {
  text: string;
  as?: ElementType;
  variant?: Variant;
  when?: boolean;
  className?: string;
  stagger?: number;
};

export default function SplitText({ text, as: Tag = 'p', variant = 'bottom', when = true, className, stagger = 25 }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  const words = useMemo(
    () =>
      text
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => ({
          word,
          from:
            variant === 'random'
              ? RANDOM_TRANSFORMS[Math.floor(Math.random() * RANDOM_TRANSFORMS.length)]
              : TRANSFORMS[variant],
        })),
    [text, variant]
  );

  return (
    <Tag ref={ref} className={[className, inView && when ? s.shown : ''].filter(Boolean).join(' ')} aria-label={text}>
      {words.map(({ word, from }, i) => (
        <Fragment key={i}>
          <span className={s.word} aria-hidden>
            <span style={{ '--from': from, '--delay': `${Math.min(i, 24) * stagger}ms` } as CSSProperties}>{word}</span>
          </span>{' '}
        </Fragment>
      ))}
    </Tag>
  );
}

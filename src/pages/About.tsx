import { useRef } from 'react';
import { Link } from 'react-router';
import SplitText from '../components/SplitText';
import { useParallax } from '../hooks/useScrollEffect';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './About.module.scss';

const STATS = [
  { value: '2016', label: 'founded in Bergen' },
  { value: '94%', label: 'natural-origin ingredients' },
  { value: '0 g', label: 'net plastic since 2021' },
  { value: '11', label: 'products, made in small batches' },
];

const PRINCIPLES = [
  {
    title: 'Seasonal formulas',
    text: 'Skin changes with the weather. We design routines for the dark months and the bright ones, so you can adjust instead of starting over.',
  },
  {
    title: 'Short ingredient lists',
    text: 'Every ingredient has a job. No fillers, no synthetic fragrance, no microplastics. Just what your skin needs and nothing it does not.',
  },
  {
    title: 'Made close to home',
    text: 'Our lab is a 40-minute drive from the studio. Glass comes from Europe, boxes from FSC-certified recycled paper.',
  },
];

export default function About() {
  usePageTitle('About');
  const imgRef = useRef<HTMLImageElement>(null);
  useParallax(imgRef, 1.2);

  return (
    <div className="page">
      <div className={['container', s.intro].join(' ')}>
        <span className="eyebrow">About us</span>
        <SplitText
          as="h1"
          text="Skincare that follows the seasons"
          variant="random"
          className={s.title}
        />
        <SplitText
          className={s.lead}
          stagger={12}
          text="Skjønnhet means beauty in Norwegian. We started in a small garden studio with one moisturizer for the long northern winter, and slowly built a routine around it."
        />
      </div>

      <div className={s.studio}>
        <img ref={imgRef} src="/content/8.webp" alt="Our garden studio" />
      </div>

      <div className={['container', s.stats].join(' ')}>
        {STATS.map((stat) => (
          <div key={stat.label}>
            <span className={s.statValue}>{stat.value}</span>
            <span className={s.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className={['container', s.principles].join(' ')}>
        {PRINCIPLES.map((p, i) => (
          <div key={p.title} className={s.principle}>
            <span className={s.index}>0{i + 1}</span>
            <SplitText as="h3" text={p.title} />
            <p>{p.text}</p>
          </div>
        ))}
      </div>

      <div className={['container', s.cta].join(' ')}>
        <SplitText as="h2" text="Find your routine" variant="random" />
        <Link to="/shop" className="btn btn-dark">
          Shop all
        </Link>
      </div>
    </div>
  );
}

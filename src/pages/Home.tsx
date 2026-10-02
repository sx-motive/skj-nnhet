import { useRef } from 'react';
import { Link } from 'react-router';
import SplitText from '../components/SplitText';
import ProductCard from '../components/ProductCard';
import HoverProductList from '../components/HoverProductList';
import { useParallax, useScrollEffect } from '../hooks/useScrollEffect';
import { useUi } from '../store/ui';
import { products } from '../data/products';
import { articles } from '../data/articles';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './Home.module.scss';

const ESSENTIALS = products.filter((p) => p.category === 'face').slice(0, 3);
const BESTSELLERS = products.filter((p) => p.bestseller).slice(0, 4);

const VALUES = [
  {
    title: 'We are climate partner carbon neutral',
    text: 'We are certified as climate neutral by Climate Partner. We offset unavoidable carbon emissions through various climate protection projects that meet the highest international standards and make an important contribution to the UN Sustainable Development Goals (SDGs).',
    image: '/content/3.webp',
  },
  {
    title: 'Plastic Bank Plastic neutral',
    text: 'We are certified plastic neutral by Plastic Bank. In general, we try to avoid the use of plastic and reduce it to an absolute minimum. What cannot be avoided, we compensate for. For every gram of plastic we put on the market, one gram of plastic is collected from nature and the oceans and recycled.',
    image: '/content/4.webp',
  },
  {
    title: 'Making business a force for good',
    text: 'B Corp is an international certification that recognizes companies for their social and environmental impact. As a “Benefit Corporation,” we are committed to operating not only for profit, but also for the benefit of the planet and the community.',
    image: '/content/5.webp',
  },
];

function ParallaxImage({ src, speed, className }: { src: string; speed: number; className: string }) {
  const ref = useRef<HTMLImageElement>(null);
  useParallax(ref, speed);
  return <img ref={ref} src={src} alt="" className={className} />;
}

function Hero() {
  const { introDone } = useUi();
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useScrollEffect(ref, (_, rect) => {
    const leaving = Math.min(1, Math.max(0, -rect.top / rect.height));
    if (imgRef.current) imgRef.current.style.transform = `scale(${1 + leaving * 0.8})`;
  });

  return (
    <section ref={ref} className={s.hero}>
      <div className={s.heroImg}>
        <img ref={imgRef} src="/content/10.webp" alt="Woman in profile at the sea" />
      </div>
      <div className={s.heroCaption}>
        <SplitText as="h1" text="Treat your skin every season" variant="random" when={introDone} />
        <Link to="/shop" className="btn">
          shop now
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className={s.about}>
      <div className={['container', s.aboutGrid].join(' ')}>
        <div className={s.col}>
          <ParallaxImage src="/content/12.webp" speed={1} className={s.img1} />
          <ParallaxImage src="/content/11.webp" speed={-2} className={s.img2} />
        </div>
        <div className={[s.col, s.aboutCaption].join(' ')}>
          <SplitText text="Responsibility" className="eyebrow" />
          <SplitText as="h2" text="With a better future in mind" variant="random" />
          <SplitText
            text="We are constantly striving to keep our environmental footprint as small as possible. Our entire product packaging is recyclable. We use glass produced in Europe, FSC-certified recycled paper and focus on a regional value chain."
            stagger={12}
          />
          <Link to="/about" className="btn">
            our story
          </Link>
        </div>
        <div className={s.col}>
          <ParallaxImage src="/content/6.webp" speed={2} className={s.img3} />
          <ParallaxImage src="/content/7.webp" speed={0} className={s.img4} />
        </div>
      </div>
    </section>
  );
}

function Bestsellers() {
  return (
    <section className={s.bestsellers}>
      <div className="container">
        <div className={s.sectionHead}>
          <SplitText as="h2" text="Bestsellers" variant="random" />
          <Link to="/shop" className={s.more}>
            view all products →
          </Link>
        </div>
        <div className={s.productGrid}>
          {BESTSELLERS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Highlight() {
  return (
    <section className={s.highlight}>
      <div className={['container', s.highlightInner].join(' ')}>
        <SplitText
          as="h3"
          variant="random"
          stagger={15}
          text="Your skin reacts differently according to every season, in the months of September, October, and November your skin tends to start drying a bit easier, so we offer a selection of essential skincare products for your morning and night routines to keep your skin perfect."
        />
      </div>
    </section>
  );
}

function Gallery() {
  const ref = useRef<HTMLElement>(null);

  useScrollEffect(ref, (progress) => {
    ref.current?.style.setProperty('--tilt', `${(progress * 5).toFixed(2)}deg`);
  });

  return (
    <section ref={ref} className={s.gallery}>
      {VALUES.map((value, i) => (
        <div key={value.title} className={['container', s.galleryRow, i % 2 ? s.reverse : ''].join(' ')}>
          <div className={s.galleryCol}>
            <img src={value.image} alt="" className={s.galleryImg} loading="lazy" />
          </div>
          <div className={s.galleryCol}>
            <div className={s.galleryText}>
              <SplitText as="h4" text={value.title} />
              <SplitText text={value.text} stagger={10} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function Essentials() {
  return (
    <section className={s.essentials}>
      <div className={['container', s.essentialsInner].join(' ')}>
        <SplitText text="essentials" className="eyebrow" />
        <HoverProductList products={ESSENTIALS} />
        <Link to="/shop" className="btn">
          Shop all
        </Link>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className={s.news}>
      <div className={['container', s.sectionHead].join(' ')}>
        <SplitText as="h2" text="Journal" variant="random" />
        <Link to="/journal" className={s.more}>
          all stories →
        </Link>
      </div>
      <div className={s.newsTrack}>
        {articles.map((article) => (
          <Link key={article.slug} to={`/journal/${article.slug}`} className={s.newsCol}>
            <div className={s.newsImg}>
              <img src={article.image} alt="" loading="lazy" />
            </div>
            <h5>{article.title}</h5>
            <p>{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <About />
      <section className={s.video}>
        <img src="/content/14.webp" alt="" loading="lazy" />
      </section>
      <Highlight />
      <Bestsellers />
      <Gallery />
      <Essentials />
      <News />
    </>
  );
}

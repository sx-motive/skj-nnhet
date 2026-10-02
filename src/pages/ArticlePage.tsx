import { useRef } from 'react';
import { Link, useParams } from 'react-router';
import SplitText from '../components/SplitText';
import ProductCard from '../components/ProductCard';
import NotFound from './NotFound';
import { articles, formatDate, getArticle } from '../data/articles';
import { getProduct, type Product } from '../data/products';
import { useParallax } from '../hooks/useScrollEffect';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './ArticlePage.module.scss';

export default function ArticlePage() {
  const { slug = '' } = useParams();
  const article = getArticle(slug);
  const imgRef = useRef<HTMLImageElement>(null);
  useParallax(imgRef, 1.5);
  usePageTitle(article?.title ?? 'Not found');

  if (!article) return <NotFound />;

  const related = article.relatedProducts.map(getProduct).filter((p): p is Product => !!p);
  const index = articles.indexOf(article);
  const next = articles[(index + 1) % articles.length];

  return (
    <article className="page">
      <header className={['container', s.head].join(' ')}>
        <Link to="/journal" className={s.back}>
          ← Journal
        </Link>
        <span className="eyebrow">
          {formatDate(article.date)} · {article.readingTime} min read
        </span>
        <SplitText key={article.slug} as="h1" text={article.title} variant="random" className={s.title} />
      </header>

      <div className={s.cover}>
        <img ref={imgRef} src={article.image} alt="" />
      </div>

      <div className={['container', s.body].join(' ')}>
        <p className={s.excerpt}>{article.excerpt}</p>
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <section className={['container', s.related].join(' ')}>
          <h2 className={s.relatedTitle}>Mentioned in this story</h2>
          <div className={s.relatedGrid}>
            {related.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      )}

      <Link to={`/journal/${next.slug}`} className={['container', s.next].join(' ')}>
        <span className="eyebrow">Next story</span>
        <span className={s.nextTitle}>{next.title} →</span>
      </Link>
    </article>
  );
}

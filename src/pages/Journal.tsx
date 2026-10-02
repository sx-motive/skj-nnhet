import { Link } from 'react-router';
import SplitText from '../components/SplitText';
import { articles, formatDate } from '../data/articles';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './Journal.module.scss';

export default function Journal() {
  usePageTitle('Journal');
  const [featured, ...rest] = articles;

  return (
    <div className="page">
      <div className="container">
        <SplitText as="h1" text="Journal" variant="random" />
        <p className={s.lead}>Notes on skin, seasons and slow routines.</p>

        <Link to={`/journal/${featured.slug}`} className={s.featured}>
          <div className={s.featuredImg}>
            <img src={featured.image} alt="" />
          </div>
          <div className={s.featuredText}>
            <span className="eyebrow">
              {formatDate(featured.date)} · {featured.readingTime} min read
            </span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className={s.read}>Read story →</span>
          </div>
        </Link>

        <div className={s.grid}>
          {rest.map((article) => (
            <Link key={article.slug} to={`/journal/${article.slug}`} className={s.card}>
              <div className={s.cardImg}>
                <img src={article.image} alt="" loading="lazy" />
              </div>
              <span className="eyebrow">
                {formatDate(article.date)} · {article.readingTime} min read
              </span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useMemo } from 'react';
import { useSearchParams } from 'react-router';
import SplitText from '../components/SplitText';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, products, type Category } from '../data/products';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './Shop.module.scss';

const SORTS = {
  featured: { label: 'Featured', compare: () => 0 },
  'price-asc': { label: 'Price, low to high', compare: (a, b) => a.price - b.price },
  'price-desc': { label: 'Price, high to low', compare: (a, b) => b.price - a.price },
  name: { label: 'Name', compare: (a, b) => a.name.localeCompare(b.name) },
} satisfies Record<string, { label: string; compare: (a: (typeof products)[number], b: (typeof products)[number]) => number }>;

type SortKey = keyof typeof SORTS;

const isCategory = (value: string | null): value is Category => CATEGORIES.some((c) => c.id === value);
const isSort = (value: string | null): value is SortKey => !!value && value in SORTS;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const rawCategory = params.get('category');
  const rawSort = params.get('sort');
  const category = isCategory(rawCategory) ? rawCategory : null;
  const sort: SortKey = isSort(rawSort) ? rawSort : 'featured';

  usePageTitle(category ? CATEGORIES.find((c) => c.id === category)?.label : 'Shop');

  const visible = useMemo(
    () => products.filter((p) => !category || p.category === category).sort(SORTS[sort].compare),
    [category, sort]
  );

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { preventScrollReset: true });
  };

  return (
    <div className="page">
      <div className="container">
        <header className={s.head}>
          <SplitText as="h1" text="Shop" variant="random" />
          <p className={s.lead}>Nordic skincare made in small batches, for every season and every skin.</p>
        </header>

        <div className={s.toolbar}>
          <div className={s.filters} role="group" aria-label="Category">
            <button
              type="button"
              className={!category ? s.activeChip : s.chip}
              onClick={() => update('category', null)}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={category === c.id ? s.activeChip : s.chip}
                onClick={() => update('category', c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className={s.sort}>
            <span className={s.count}>{visible.length} products</span>
            <label className="visually-hidden" htmlFor="sort">
              Sort by
            </label>
            <select id="sort" value={sort} onChange={(e) => update('sort', e.target.value === 'featured' ? null : e.target.value)}>
              {Object.entries(SORTS).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={s.grid}>
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

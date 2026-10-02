import { useState } from 'react';
import { Link, useParams } from 'react-router';
import SplitText from '../components/SplitText';
import ProductCard from '../components/ProductCard';
import QtyStepper from '../components/QtyStepper';
import NotFound from './NotFound';
import { CATEGORIES, formatPrice, getProduct, products } from '../data/products';
import { FREE_SHIPPING_FROM, useCart } from '../store/cart';
import { useUi } from '../store/ui';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './ProductPage.module.scss';

export default function ProductPage() {
  const { slug = '' } = useParams();
  const product = getProduct(slug);
  usePageTitle(product?.name ?? 'Not found');

  if (!product) return <NotFound />;
  return <ProductView key={product.slug} slug={product.slug} />;
}

function ProductView({ slug }: { slug: string }) {
  const product = getProduct(slug)!;
  const { add } = useCart();
  const { setCartOpen } = useUi();
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState<string | null>('details');

  const category = CATEGORIES.find((c) => c.id === product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  const sections = [
    { id: 'details', title: 'Details', content: <p>{product.description}</p> },
    {
      id: 'ingredients',
      title: product.category === 'sets' ? 'What’s inside' : 'Key ingredients',
      content: (
        <ul className={s.ingredients}>
          {product.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ),
    },
    { id: 'how', title: 'How to use', content: <p>{product.howToUse}</p> },
    {
      id: 'shipping',
      title: 'Shipping & returns',
      content: (
        <p>
          Free shipping on orders over {formatPrice(FREE_SHIPPING_FROM)}. Orders ship within 2 working days in
          recyclable packaging. Unopened products can be returned within 30 days.
        </p>
      ),
    },
  ];

  const addToBag = () => {
    add(product.slug, qty);
    setQty(1);
    setCartOpen(true);
  };

  return (
    <div className="page">
      <div className={['container', s.layout].join(' ')}>
        <div className={s.gallery}>
          <div className={s.packshot} style={{ backgroundColor: product.tint }}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={s.lifestyle}>
            <img src={product.lifestyle} alt="" />
          </div>
        </div>

        <div className={s.info}>
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category}`}>{category?.label}</Link>
          </nav>
          <SplitText as="h1" text={product.name} variant="random" className={s.title} />
          <p className={s.tagline}>{product.tagline}</p>
          <div className={s.priceRow}>
            <span className={s.price}>{formatPrice(product.price)}</span>
            <span className={s.volume}>{product.volume}</span>
          </div>

          <div className={s.buy}>
            <QtyStepper value={qty} onChange={setQty} label="Quantity" />
            <button type="button" className="btn btn-dark" onClick={addToBag}>
              Add to bag — {formatPrice(product.price * qty)}
            </button>
          </div>

          <div className={s.accordion}>
            {sections.map((section) => {
              const expanded = open === section.id;
              return (
                <div key={section.id} className={s.item}>
                  <button
                    type="button"
                    className={s.trigger}
                    aria-expanded={expanded}
                    aria-controls={`panel-${section.id}`}
                    onClick={() => setOpen(expanded ? null : section.id)}
                  >
                    {section.title}
                    <span aria-hidden>{expanded ? '−' : '+'}</span>
                  </button>
                  <div id={`panel-${section.id}`} className={[s.panel, expanded ? s.panelOpen : ''].join(' ')}>
                    <div>{section.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className={['container', s.related].join(' ')}>
          <SplitText as="h2" text="You may also like" variant="random" />
          <div className={s.relatedGrid}>
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

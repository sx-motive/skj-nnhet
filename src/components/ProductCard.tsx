import { Link } from 'react-router';
import { formatPrice, type Product } from '../data/products';
import { useCart } from '../store/cart';
import { useUi } from '../store/ui';
import s from './ProductCard.module.scss';

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const { setCartOpen } = useUi();

  const quickAdd = () => {
    add(product.slug);
    setCartOpen(true);
  };

  return (
    <article className={s.card}>
      <Link to={`/shop/${product.slug}`} className={s.media} style={{ backgroundColor: product.tint }}>
        <img className={s.packshot} src={product.image} alt={product.name} loading="lazy" />
        <img className={s.lifestyle} src={product.lifestyle} alt="" loading="lazy" />
        {(product.isNew || product.bestseller) && (
          <span className={s.badge}>{product.isNew ? 'New' : 'Bestseller'}</span>
        )}
      </Link>
      <div className={s.body}>
        <div>
          <Link to={`/shop/${product.slug}`} className={s.name}>
            {product.name}
          </Link>
          <p className={s.tagline}>{product.tagline}</p>
        </div>
        <div className={s.side}>
          <span>{formatPrice(product.price)}</span>
          <button type="button" className={s.add} onClick={quickAdd} aria-label={`Add ${product.name} to bag`}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}

import { useEffect } from 'react';
import { Link } from 'react-router';
import { useUi } from '../store/ui';
import { FREE_SHIPPING_FROM, useCart } from '../store/cart';
import { formatPrice } from '../data/products';
import QtyStepper from './QtyStepper';
import s from './CartDrawer.module.scss';

export default function CartDrawer() {
  const { cartOpen, setCartOpen } = useUi();
  const { items, subtotal, setQty, remove } = useCart();
  const close = () => setCartOpen(false);
  const missing = Math.max(0, FREE_SHIPPING_FROM - subtotal);

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setCartOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cartOpen, setCartOpen]);

  return (
    <div className={[s.root, cartOpen ? s.open : ''].join(' ')} inert={!cartOpen}>
      <div className={s.overlay} onClick={close} />
      <aside className={s.panel} role="dialog" aria-modal="true" aria-label="Shopping bag">
        <div className={s.head}>
          <h2 className={s.title}>Your bag</h2>
          <button type="button" className={s.close} onClick={close}>
            close
          </button>
        </div>

        {items.length === 0 ? (
          <div className={s.empty}>
            <p>Your bag is empty.</p>
            <Link to="/shop" className="btn btn-dark" onClick={close}>
              Shop all
            </Link>
          </div>
        ) : (
          <>
            <div className={s.shipping}>
              <p>
                {missing > 0
                  ? `${formatPrice(missing)} more for free shipping`
                  : 'You have free shipping'}
              </p>
              <div className={s.bar}>
                <span style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_FROM) * 100)}%` }} />
              </div>
            </div>

            <ul className={s.list} data-lenis-prevent>
              {items.map(({ product, qty }) => (
                <li key={product.slug} className={s.item}>
                  <Link
                    to={`/shop/${product.slug}`}
                    className={s.thumb}
                    style={{ backgroundColor: product.tint }}
                    onClick={close}
                  >
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className={s.info}>
                    <Link to={`/shop/${product.slug}`} className={s.name} onClick={close}>
                      {product.name}
                    </Link>
                    <span className={s.meta}>{product.volume}</span>
                    <div className={s.row}>
                      <QtyStepper
                        value={qty}
                        min={0}
                        onChange={(value) => setQty(product.slug, value)}
                        label={`${product.name} quantity`}
                      />
                      <span>{formatPrice(product.price * qty)}</span>
                    </div>
                    <button type="button" className={s.remove} onClick={() => remove(product.slug)}>
                      remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className={s.footer}>
              <div className={s.total}>
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <Link to="/checkout" className="btn btn-dark btn-block" onClick={close}>
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

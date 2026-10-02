import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import SplitText from '../components/SplitText';
import { formatPrice } from '../data/products';
import { FREE_SHIPPING_FROM, useCart } from '../store/cart';
import { usePageTitle } from '../hooks/usePageTitle';
import s from './Checkout.module.scss';

const SHIPPING = {
  standard: { label: 'Standard, 3–5 days', price: 6 },
  express: { label: 'Express, 1–2 days', price: 14 },
};

type ShippingKey = keyof typeof SHIPPING;

type Order = { number: string; email: string; total: number };

const FIELDS = [
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', wide: true },
  { name: 'firstName', label: 'First name', autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last name', autoComplete: 'family-name' },
  { name: 'address', label: 'Address', autoComplete: 'street-address', wide: true },
  { name: 'zip', label: 'Postal code', autoComplete: 'postal-code' },
  { name: 'city', label: 'City', autoComplete: 'address-level2' },
  { name: 'country', label: 'Country', autoComplete: 'country-name', wide: true },
];

export default function Checkout() {
  usePageTitle('Checkout');
  const { items, subtotal, clear } = useCart();
  const [shipping, setShipping] = useState<ShippingKey>('standard');
  const [order, setOrder] = useState<Order | null>(null);

  const shippingPrice = shipping === 'standard' && subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING[shipping].price;
  const total = subtotal + shippingPrice;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setOrder({
      number: `SKJ-${Math.floor(100000 + Math.random() * 900000)}`,
      email: String(data.get('email')),
      total,
    });
    clear();
  };

  if (order) {
    return (
      <div className="page">
        <div className={['container', s.done].join(' ')}>
          <span className="eyebrow">Order {order.number}</span>
          <SplitText as="h1" text="Thank you" variant="random" />
          <p>
            Your order of {formatPrice(order.total)} is confirmed. We sent the details to {order.email}. This is a demo
            store, so nothing will actually ship.
          </p>
          <Link to="/shop" className="btn btn-dark">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="page">
        <div className={['container', s.done].join(' ')}>
          <SplitText as="h1" text="Your bag is empty" variant="random" />
          <Link to="/shop" className="btn btn-dark">
            Shop all
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className={['container', s.layout].join(' ')}>
        <form className={s.form} onSubmit={onSubmit}>
          <SplitText as="h1" text="Checkout" variant="random" className={s.title} />
          <p className={s.notice}>Demo store. No payment is taken and no order is placed.</p>

          <fieldset className={s.fieldset}>
            <legend>Contact & delivery</legend>
            <div className={s.fields}>
              {FIELDS.map((field) => (
                <label key={field.name} className={[s.field, field.wide ? s.wide : ''].join(' ')}>
                  <span>{field.label}</span>
                  <input name={field.name} type={field.type ?? 'text'} autoComplete={field.autoComplete} required />
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className={s.fieldset}>
            <legend>Shipping</legend>
            {(Object.keys(SHIPPING) as ShippingKey[]).map((key) => {
              const price = key === 'standard' && subtotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING[key].price;
              return (
                <label key={key} className={[s.option, shipping === key ? s.optionActive : ''].join(' ')}>
                  <input
                    type="radio"
                    name="shipping"
                    value={key}
                    checked={shipping === key}
                    onChange={() => setShipping(key)}
                  />
                  <span>{SHIPPING[key].label}</span>
                  <span>{price === 0 ? 'Free' : formatPrice(price)}</span>
                </label>
              );
            })}
          </fieldset>

          <button type="submit" className="btn btn-dark btn-block">
            Place order — {formatPrice(total)}
          </button>
        </form>

        <aside className={s.summary}>
          <h2 className={s.summaryTitle}>Order summary</h2>
          <ul>
            {items.map(({ product, qty }) => (
              <li key={product.slug} className={s.line}>
                <div className={s.thumb} style={{ backgroundColor: product.tint }}>
                  <img src={product.image} alt="" />
                  <span>{qty}</span>
                </div>
                <span className={s.lineName}>{product.name}</span>
                <span>{formatPrice(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <dl className={s.totals}>
            <div>
              <dt>Subtotal</dt>
              <dd>{formatPrice(subtotal)}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>{shippingPrice === 0 ? 'Free' : formatPrice(shippingPrice)}</dd>
            </div>
            <div className={s.grand}>
              <dt>Total</dt>
              <dd>{formatPrice(total)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}

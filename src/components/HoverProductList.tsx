import { useRef, useState, type MouseEvent } from 'react';
import { Link } from 'react-router';
import type { Product } from '../data/products';
import SplitText from './SplitText';
import s from './HoverProductList.module.scss';

export default function HoverProductList({ products }: { products: Product[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const follow = (e: MouseEvent) => {
    const wrap = wrapRef.current;
    const img = followRef.current;
    if (!wrap || !img) return;
    const rect = wrap.getBoundingClientRect();
    const tilt = e.clientX > window.innerWidth / 2 ? 7 : -7;
    img.style.transform = `translate(${e.clientX - rect.left}px, ${e.clientY - rect.top}px) translate(-50%, -50%) rotate(${tilt}deg)`;
  };

  return (
    <div ref={wrapRef} className={s.wrap} onMouseMove={follow}>
      <ul className={s.list}>
        {products.map((product) => (
          <li key={product.slug}>
            <Link
              to={`/shop/${product.slug}`}
              className={s.link}
              data-caption={product.name}
              onMouseEnter={() => setActive(product.slug)}
              onMouseLeave={() => setActive(null)}
            >
              <SplitText as="span" text={product.name} />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={followRef} className={s.follow} aria-hidden>
        {products.map((product) => (
          <img
            key={product.slug}
            src={product.image}
            alt=""
            className={active === product.slug ? s.active : undefined}
          />
        ))}
      </div>
    </div>
  );
}

import { Link } from 'react-router';
import { useUi } from '../store/ui';
import { useCart } from '../store/cart';
import SplitText from './SplitText';
import s from './Header.module.scss';

export default function Header() {
  const { introDone, menuOpen, setMenuOpen, setCartOpen } = useUi();
  const { count } = useCart();

  return (
    <header className={s.header}>
      <Link to="/" className={s.logo} aria-label="Skjønnhet home">
        <SplitText as="span" text="Skjønnhet" when={introDone} />
      </Link>
      <button
        type="button"
        className={s.action}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="site-menu"
      >
        <SplitText as="span" text={menuOpen ? 'close' : 'menu'} when={introDone} />
      </button>
      <nav className={s.right} aria-label="Shop">
        <Link to="/shop" className={s.action}>
          <SplitText as="span" text="shop" when={introDone} />
        </Link>
        <button type="button" className={s.action} onClick={() => setCartOpen(true)}>
          <SplitText as="span" text={`bag (${count})`} when={introDone} />
        </button>
      </nav>
    </header>
  );
}

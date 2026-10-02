import { Link } from 'react-router';
import { useUi } from '../store/ui';
import SplitText from './SplitText';
import s from './Menu.module.scss';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/journal', label: 'Journal' },
  { to: '/about', label: 'About' },
];

export default function Menu() {
  const { menuOpen } = useUi();

  return (
    <nav id="site-menu" className={s.menu} aria-hidden={!menuOpen} inert={!menuOpen}>
      <ul className={s.primary}>
        {LINKS.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={s.link} data-text={link.label}>
              <SplitText as="span" text={link.label} when={menuOpen} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={s.footer}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src="/icons/logo-instagram.svg" alt="" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <img src="/icons/logo-facebook.svg" alt="" />
        </a>
      </div>
    </nav>
  );
}

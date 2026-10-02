import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { useScrollEffect } from '../hooks/useScrollEffect';
import SplitText from './SplitText';
import s from './Footer.module.scss';

const NAV = [
  { to: '/shop', label: 'Shop' },
  { to: '/journal', label: 'Journal' },
  { to: '/about', label: 'About' },
  { to: '/shop?category=sets', label: 'Gift sets' },
  { to: '/checkout', label: 'Checkout' },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const [subscribed, setSubscribed] = useState(false);

  useScrollEffect(ref, (progress) => {
    document.documentElement.style.setProperty('--footer-progress', progress.toFixed(3));
  });

  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer ref={ref} className={s.footer}>
      <div className={['container', s.grid].join(' ')}>
        <div>
          <Link to="/" className={s.logo}>
            <SplitText as="span" text="Skjønnhet" />
          </Link>
        </div>
        <ul className={s.nav}>
          {NAV.map((item) => (
            <li key={item.label}>
              <Link to={item.to}>
                <SplitText as="span" text={item.label} />
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <SplitText text="Subscribe for news" />
          {subscribed ? (
            <p className={s.thanks}>Thank you! See you in your inbox.</p>
          ) : (
            <form className={s.form} onSubmit={onSubscribe}>
              <label className="visually-hidden" htmlFor="subscribe-email">
                Email
              </label>
              <input id="subscribe-email" type="email" required placeholder="enter email" />
              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>
          )}
        </div>
        <div>
          <p className={s.credits}>
            Data protection. All media rights belong to third parties and are used on this site for educational
            purposes only. If you encounter copyright infringement, please report it to sx.motive@gmail.com. Media
            copyright https://www.teamdrjoseph.com/ VITALIS Dr. Joseph GmbH
          </p>
        </div>
        <div className={s.signature}>
          <iframe src="https://iframe-motive.netlify.app" width="300" height="35" title="Author" />
        </div>
      </div>
    </footer>
  );
}

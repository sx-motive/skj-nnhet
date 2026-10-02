import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Loader from './components/Loader';
import Header from './components/Header';
import Menu from './components/Menu';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import Checkout from './pages/Checkout';
import Journal from './pages/Journal';
import ArticlePage from './pages/ArticlePage';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { useUi } from './store/ui';
import { useLenis } from './lib/smooth-scroll';
import s from './App.module.scss';

export default function App() {
  const { introDone, menuOpen, setMenuOpen, cartOpen, setCartOpen } = useUi();
  const lenis = useLenis();
  const contentRef = useRef<HTMLDivElement>(null);
  const { pathname, search } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setCartOpen(false);
  }, [pathname, search, setMenuOpen, setCartOpen]);

  useEffect(() => {
    if (menuOpen && contentRef.current) {
      contentRef.current.style.transformOrigin = `50% ${window.scrollY + window.innerHeight / 2}px`;
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!lenis) return;
    if (!introDone || menuOpen || cartOpen) lenis.stop();
    else lenis.start();
  }, [lenis, introDone, menuOpen, cartOpen]);

  return (
    <>
      <Loader />
      <Menu />
      <div
        ref={contentRef}
        className={[s.content, menuOpen ? s.withMenu : ''].join(' ')}
        onClickCapture={
          menuOpen
            ? (e) => {
                e.preventDefault();
                e.stopPropagation();
                setMenuOpen(false);
              }
            : undefined
        }
      >
        <main className={s.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<ArticlePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Header />
      <CartDrawer />
    </>
  );
}
